// app.js — Logique applicative
// Gère l'affichage, les filtres, la recherche, le tri et la frise chronologique

'use strict';

/* ============================================================
   ÉTAT DE L'APPLICATION
   ============================================================ */

const etat = {
  // Filtres actifs
  recherche:  '',
  epoque:     'toutes',
  importance: 'toutes',
  tri:        'date-asc',

  // Résultats courants (subset filtré + trié de `batailles`)
  resultats: [],
};

/* ============================================================
   CORRESPONDANCES D'AFFICHAGE
   ============================================================ */

const LIBELLES_EPOQUE = {
  'antiquite':      'Antiquité',
  'moyen-age':      'Moyen Âge',
  'moderne':        'Époque moderne',
  'contemporaine':  'Époque contemporaine',
  'xxe':            'XXe siècle',
};

const LIBELLES_IMPORTANCE = {
  'decisive': 'Décisive',
  'majeure':  'Majeure',
  'notable':  'Notable',
};

/* ============================================================
   ÉCHAPPEMENT HTML (sécurité — jamais de innerHTML brut)
   ============================================================ */

/**
 * Échappe les caractères spéciaux HTML d'une chaîne.
 * @param {string} chaine
 * @returns {string}
 */
function echapper(chaine) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(chaine).replace(/[&<>"']/g, c => map[c]);
}

/* ============================================================
   FILTRAGE & TRI
   ============================================================ */

/**
 * Normalise une chaîne pour la recherche : minuscules, sans accents.
 * @param {string} chaine
 * @returns {string}
 */
function normaliser(chaine) {
  return chaine
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Vérifie si une bataille correspond aux filtres actifs de l'état.
 * @param {Object} bataille
 * @returns {boolean}
 */
function correspondAuxFiltres(bataille) {
  // Filtre époque
  if (etat.epoque !== 'toutes' && bataille.epoque !== etat.epoque) {
    return false;
  }

  // Filtre importance (la valeur stockée dans data.js peut contenir un accent)
  if (etat.importance !== 'toutes') {
    const importanceNormalisee = normaliser(bataille.importance);
    if (importanceNormalisee !== etat.importance) {
      return false;
    }
  }

  // Filtre recherche textuelle (nom, lieu, conflit, belligérants)
  if (etat.recherche !== '') {
    const motif = normaliser(etat.recherche);
    const champs = [
      bataille.nom,
      bataille.lieu,
      bataille.conflit,
      bataille.belligerants.a,
      bataille.belligerants.b,
      bataille.vainqueur,
    ];
    const correspondance = champs.some(c => normaliser(c).includes(motif));
    if (!correspondance) return false;
  }

  return true;
}

/**
 * Compare deux batailles selon le critère de tri actif.
 * @param {Object} a
 * @param {Object} b
 * @returns {number}
 */
function comparerBatailles(a, b) {
  switch (etat.tri) {
    case 'date-asc':  return a.date - b.date;
    case 'date-desc': return b.date - a.date;
    case 'nom-asc':   return a.nom.localeCompare(b.nom, 'fr');
    case 'nom-desc':  return b.nom.localeCompare(a.nom, 'fr');
    default:          return 0;
  }
}

/**
 * Recalcule etat.resultats depuis le tableau global `batailles`.
 */
function recalculerResultats() {
  etat.resultats = batailles
    .filter(correspondAuxFiltres)
    .sort(comparerBatailles);
}

/* ============================================================
   GÉNÉRATION HTML DES CARTES
   ============================================================ */

/**
 * Retourne la classe CSS du badge selon l'importance.
 * @param {string} importance
 * @returns {string}
 */
function classeBadge(importance) {
  const classes = {
    'décisive': 'badge-decisive',
    'majeure':  'badge-majeure',
    'notable':  'badge-notable',
  };
  return classes[importance] || 'badge-notable';
}

/**
 * Génère le HTML d'une carte de bataille.
 * Utilise un DocumentFragment pour ne jamais injecter de données brutes.
 * @param {Object} bataille
 * @returns {HTMLElement}
 */
function creerCarteBataille(bataille) {
  const article = document.createElement('article');
  article.className = 'carte-bataille';
  article.setAttribute('role', 'button');
  article.setAttribute('tabindex', '0');
  article.setAttribute('aria-label', `Voir la ${echapper(bataille.nom)}`);

  // En-tête
  const entete = document.createElement('div');
  entete.className = 'carte-bataille__entete';

  const colInfo = document.createElement('div');

  const date = document.createElement('div');
  date.className = 'carte-bataille__date';
  date.textContent = bataille.dateAffichee;

  const nom = document.createElement('h3');
  nom.className = 'carte-bataille__nom';
  nom.textContent = bataille.nom;

  const conflit = document.createElement('div');
  conflit.className = 'carte-bataille__conflit';
  conflit.textContent = bataille.conflit;

  colInfo.append(date, nom, conflit);

  const badge = document.createElement('span');
  badge.className = `badge ${classeBadge(bataille.importance)}`;
  badge.textContent = bataille.importance.charAt(0).toUpperCase() + bataille.importance.slice(1);

  entete.append(colInfo, badge);

  // Description courte
  const corps = document.createElement('div');
  corps.className = 'carte-bataille__corps';

  const description = document.createElement('p');
  description.className = 'carte-bataille__description';
  description.textContent = bataille.description;

  corps.appendChild(description);

  // Métadonnées
  const meta = document.createElement('div');
  meta.className = 'carte-bataille__meta';

  const lieu = document.createElement('div');
  lieu.className = 'carte-bataille__lieu';

  const lieuIcone = document.createElement('span');
  lieuIcone.className = 'carte-bataille__lieu-icone';
  lieuIcone.setAttribute('aria-hidden', 'true');
  lieuIcone.textContent = '⚑';

  const lieuTexte = document.createTextNode(bataille.lieu);
  lieu.append(lieuIcone, lieuTexte);

  const vainqueur = document.createElement('div');
  vainqueur.className = 'carte-bataille__vainqueur';

  const vainqueurLabel = document.createTextNode('Vainqueur : ');
  const vainqueurNom = document.createElement('strong');
  vainqueurNom.textContent = bataille.vainqueur;
  vainqueur.append(vainqueurLabel, vainqueurNom);

  meta.append(lieu, vainqueur);

  article.append(entete, corps, meta);

  // Navigation au clic et au clavier
  const naviguerVersBataille = () => {
    window.location.href = `bataille.html?id=${encodeURIComponent(bataille.id)}`;
  };

  article.addEventListener('click', naviguerVersBataille);
  article.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      naviguerVersBataille();
    }
  });

  return article;
}

/* ============================================================
   RENDU DE LA GRILLE
   ============================================================ */

/**
 * Met à jour la grille de cartes et le compteur de résultats.
 */
function afficherBatailles() {
  const grille = document.getElementById('grille-batailles');
  const compteur = document.getElementById('compteur-resultats');

  if (!grille) return;

  grille.innerHTML = '';

  if (etat.resultats.length === 0) {
    const vide = document.createElement('div');
    vide.className = 'message-vide';
    vide.innerHTML = `
      <div class="message-vide__icone" aria-hidden="true">⚔</div>
      <p class="message-vide__titre">Aucune bataille trouvée</p>
      <p>Essayez de modifier vos critères de recherche ou de filtre.</p>
    `;
    grille.appendChild(vide);
  } else {
    const fragment = document.createDocumentFragment();
    etat.resultats.forEach(bataille => fragment.appendChild(creerCarteBataille(bataille)));
    grille.appendChild(fragment);
  }

  // Mise à jour du compteur
  if (compteur) {
    const total = batailles.length;
    const affichees = etat.resultats.length;
    compteur.innerHTML = `<span>${affichees}</span> / ${total} bataille${total > 1 ? 's' : ''}`;
  }
}

/* ============================================================
   FRISE CHRONOLOGIQUE
   ============================================================ */

/**
 * Génère les éléments de la frise à partir de `batailles` triées par date.
 */
function construireFrise() {
  const axe = document.getElementById('frise-axe');
  if (!axe) return;

  axe.innerHTML = '';

  // La frise affiche toujours toutes les batailles, triées par date croissante
  const triees = [...batailles].sort((a, b) => a.date - b.date);

  const fragment = document.createDocumentFragment();

  triees.forEach(bataille => {
    const item = document.createElement('div');
    item.className = 'frise__item';
    item.dataset.id = bataille.id;
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `${bataille.nom}, ${bataille.dateAffichee}`);

    const point = document.createElement('div');
    point.className = 'frise__point';

    const date = document.createElement('div');
    date.className = 'frise__date';
    date.textContent = bataille.dateAffichee;

    const nom = document.createElement('div');
    nom.className = 'frise__nom';
    nom.textContent = bataille.nom;

    item.append(point, date, nom);

    item.addEventListener('click', () => surClicFrise(bataille.id));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        surClicFrise(bataille.id);
      }
    });

    fragment.appendChild(item);
  });

  axe.appendChild(fragment);
  activerScrollFrise();
}

/**
 * Réaction au clic sur un élément de la frise :
 * filtre la grille pour ne montrer que la bataille cliquée,
 * ou réinitialise si on reclique sur l'élément déjà actif.
 * @param {string} id
 */
function surClicFrise(id) {
  const itemActif = document.querySelector('.frise__item--actif');
  const estDejaActif = itemActif && itemActif.dataset.id === id;

  // Retirer l'état actif de tous les items
  document.querySelectorAll('.frise__item').forEach(el => el.classList.remove('frise__item--actif'));

  if (estDejaActif) {
    // Deuxième clic : on réinitialise le filtre d'époque
    etat.epoque = 'toutes';
    const selectEpoque = document.getElementById('filtre-epoque');
    if (selectEpoque) selectEpoque.value = 'toutes';
  } else {
    // Premier clic : on isole cette bataille via son époque
    // et on fait défiler la carte dans la grille
    const bataille = batailles.find(b => b.id === id);
    if (!bataille) return;

    // Marquer l'item actif dans la frise
    const item = document.querySelector(`.frise__item[data-id="${CSS.escape(id)}"]`);
    if (item) item.classList.add('frise__item--actif');

    // Filtrer par époque si un seul filtre serait trop large — ici on scroll sur la carte
    etat.epoque = 'toutes';
    etat.recherche = bataille.nom;

    const champRecherche = document.getElementById('champ-recherche');
    if (champRecherche) champRecherche.value = bataille.nom;

    const selectEpoque = document.getElementById('filtre-epoque');
    if (selectEpoque) selectEpoque.value = 'toutes';
  }

  mettreAJour();

  // Faire défiler jusqu'à la première carte affichée
  const premiereCarteVisible = document.querySelector('.carte-bataille');
  if (premiereCarteVisible) {
    premiereCarteVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Active le glisser-déplacer horizontal sur la piste de la frise.
 */
function activerScrollFrise() {
  const piste = document.getElementById('frise-piste');
  if (!piste) return;

  let glissement = { actif: false, depart: 0, scrollDepart: 0 };

  piste.addEventListener('mousedown', e => {
    glissement = { actif: true, depart: e.clientX, scrollDepart: piste.scrollLeft };
    piste.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', e => {
    if (!glissement.actif) return;
    const delta = e.clientX - glissement.depart;
    piste.scrollLeft = glissement.scrollDepart - delta;
  });

  document.addEventListener('mouseup', () => {
    glissement.actif = false;
    piste.style.cursor = 'grab';
  });
}

/* ============================================================
   GESTIONNAIRES D'ÉVÉNEMENTS
   ============================================================ */

/**
 * Met à jour etat, recalcule les résultats et rafraîchit l'affichage.
 */
function mettreAJour() {
  recalculerResultats();
  afficherBatailles();
}

/**
 * Branche tous les contrôles de filtre/tri sur leurs gestionnaires.
 */
function brancherControles() {
  // Recherche — avec léger délai anti-rebond
  const champRecherche = document.getElementById('champ-recherche');
  if (champRecherche) {
    let minuterie = null;
    champRecherche.addEventListener('input', () => {
      clearTimeout(minuterie);
      minuterie = setTimeout(() => {
        etat.recherche = champRecherche.value.trim();
        // Retirer l'état actif de la frise si l'utilisateur tape manuellement
        document.querySelectorAll('.frise__item').forEach(el => el.classList.remove('frise__item--actif'));
        mettreAJour();
      }, 250);
    });
  }

  // Filtre époque
  const selectEpoque = document.getElementById('filtre-epoque');
  if (selectEpoque) {
    selectEpoque.addEventListener('change', () => {
      etat.epoque = selectEpoque.value;
      document.querySelectorAll('.frise__item').forEach(el => el.classList.remove('frise__item--actif'));
      mettreAJour();
    });
  }

  // Filtre importance
  const selectImportance = document.getElementById('filtre-importance');
  if (selectImportance) {
    selectImportance.addEventListener('change', () => {
      etat.importance = selectImportance.value;
      document.querySelectorAll('.frise__item').forEach(el => el.classList.remove('frise__item--actif'));
      mettreAJour();
    });
  }

  // Tri
  const selectTri = document.getElementById('filtre-tri');
  if (selectTri) {
    selectTri.addEventListener('change', () => {
      etat.tri = selectTri.value;
      mettreAJour();
    });
  }
}

/* ============================================================
   PAGE DÉTAIL (bataille.html)
   ============================================================ */

/**
 * Lit l'ID dans l'URL et affiche le détail de la bataille correspondante.
 */
function afficherPageDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const conteneur = document.getElementById('detail-conteneur');

  if (!conteneur) return;

  const bataille = batailles.find(b => b.id === id);

  if (!bataille) {
    afficherErreurBatailleIntrouvable(conteneur, id);
    return;
  }

  // Titre de l'onglet
  document.title = `${bataille.nom} — Histoire des Batailles`;

  construireDetailBataille(conteneur, bataille);
}

/**
 * Construit et injecte le HTML de la page détail pour une bataille donnée.
 * @param {HTMLElement} conteneur
 * @param {Object} bataille
 */
function construireDetailBataille(conteneur, bataille) {
  conteneur.innerHTML = '';

  // --- En-tête ---
  const entete = document.createElement('header');
  entete.className = 'detail-entete';

  const surtitre = document.createElement('div');
  surtitre.className = 'detail-entete__surtitre';

  const spanDate = document.createElement('span');
  spanDate.className = 'detail-entete__date';
  spanDate.textContent = bataille.dateAffichee;

  const spanConflit = document.createElement('span');
  spanConflit.className = 'detail-entete__conflit';
  spanConflit.textContent = bataille.conflit;

  const spanBadge = document.createElement('span');
  spanBadge.className = `badge ${classeBadge(bataille.importance)}`;
  spanBadge.textContent = bataille.importance.charAt(0).toUpperCase() + bataille.importance.slice(1);

  surtitre.append(spanDate, spanConflit, spanBadge);

  const titre = document.createElement('h1');
  titre.className = 'detail-entete__titre';
  titre.textContent = bataille.nom;

  const lieu = document.createElement('div');
  lieu.className = 'detail-entete__lieu';
  lieu.textContent = `⚑ ${bataille.lieu}`;

  entete.append(surtitre, titre, lieu);

  // --- Corps principal ---
  const corps = document.createElement('div');
  corps.className = 'detail-corps';

  // Colonne principale
  const principal = document.createElement('div');
  principal.className = 'detail-principal';

  // Section belligérants
  const sectionBelligerants = creerSectionDetail('Belligérants', null);
  const blocBelligerants = creerBlocBelligerants(bataille);
  sectionBelligerants.appendChild(blocBelligerants);
  principal.appendChild(sectionBelligerants);

  // Section déroulement
  const sectionDeroulement = creerSectionDetail('Déroulement', bataille.description);
  principal.appendChild(sectionDeroulement);

  // Section conséquences
  const sectionConsequence = creerSectionDetail('Conséquences historiques', bataille.consequence);
  principal.appendChild(sectionConsequence);

  // Colonne latérale — fiche
  const fiche = construireFicheRecap(bataille);

  corps.append(principal, fiche);

  conteneur.append(entete, corps);
}

/**
 * Crée une section titrée avec un texte optionnel.
 * @param {string} titre
 * @param {string|null} texte
 * @returns {HTMLElement}
 */
function creerSectionDetail(titre, texte) {
  const section = document.createElement('section');

  const titreSec = document.createElement('h2');
  titreSec.className = 'detail-section__titre';
  titreSec.textContent = titre;
  section.appendChild(titreSec);

  if (texte) {
    const p = document.createElement('p');
    p.className = 'detail-section__texte';
    p.textContent = texte;
    section.appendChild(p);
  }

  return section;
}

/**
 * Crée le bloc visuel d'opposition des belligérants.
 * @param {Object} bataille
 * @returns {HTMLElement}
 */
function creerBlocBelligerants(bataille) {
  const vainqueurNormalise = normaliser(bataille.vainqueur);
  const estVainqueurA = normaliser(bataille.belligerants.a).includes(vainqueurNormalise)
    || vainqueurNormalise.includes(normaliser(bataille.belligerants.a).split(' ')[0]);

  const bloc = document.createElement('div');
  bloc.className = 'detail-belligerants';

  const coteA = creerCoteBelligerant(
    bataille.belligerants.a,
    estVainqueurA
  );

  const vs = document.createElement('div');
  vs.className = 'vs-separateur';
  vs.setAttribute('aria-hidden', 'true');
  vs.textContent = 'VS';

  const coteB = creerCoteBelligerant(
    bataille.belligerants.b,
    !estVainqueurA
  );

  bloc.append(coteA, vs, coteB);
  return bloc;
}

/**
 * Crée un côté du bloc belligérants.
 * @param {string} nom
 * @param {boolean} estVainqueur
 * @returns {HTMLElement}
 */
function creerCoteBelligerant(nom, estVainqueur) {
  const div = document.createElement('div');
  div.className = estVainqueur ? 'belligerant belligerant--vainqueur' : 'belligerant';

  if (estVainqueur) {
    const couronne = document.createElement('span');
    couronne.className = 'belligerant__couronne';
    couronne.setAttribute('aria-label', 'Vainqueur');
    couronne.textContent = '♛';
    div.appendChild(couronne);
  }

  const label = document.createElement('div');
  label.className = 'belligerant__label';
  label.textContent = estVainqueur ? 'Vainqueur' : 'Défait';

  const nomEl = document.createElement('div');
  nomEl.className = 'belligerant__nom';
  nomEl.textContent = nom;

  div.append(label, nomEl);
  return div;
}

/**
 * Construit la fiche récapitulative latérale.
 * @param {Object} bataille
 * @returns {HTMLElement}
 */
function construireFicheRecap(bataille) {
  const fiche = document.createElement('aside');
  fiche.className = 'detail-fiche';

  const titreF = document.createElement('div');
  titreF.className = 'detail-fiche__titre';
  titreF.textContent = 'Fiche récapitulative';

  const contenu = document.createElement('div');
  contenu.className = 'detail-fiche__contenu';

  const lignes = [
    { cle: 'Date',       valeur: bataille.dateAffichee },
    { cle: 'Lieu',       valeur: bataille.lieu },
    { cle: 'Conflit',    valeur: bataille.conflit },
    { cle: 'Vainqueur',  valeur: bataille.vainqueur },
    { cle: 'Pertes',     valeur: bataille.pertes },
    { cle: 'Époque',     valeur: LIBELLES_EPOQUE[bataille.epoque] || bataille.epoque },
    { cle: 'Importance', valeur: bataille.importance.charAt(0).toUpperCase() + bataille.importance.slice(1) },
  ];

  lignes.forEach(({ cle, valeur }) => {
    const ligne = document.createElement('div');
    ligne.className = 'detail-fiche__ligne';

    const cleEl = document.createElement('dt');
    cleEl.className = 'detail-fiche__cle';
    cleEl.textContent = cle;

    const valeurEl = document.createElement('dd');
    valeurEl.className = 'detail-fiche__valeur';
    valeurEl.textContent = valeur;

    ligne.append(cleEl, valeurEl);
    contenu.appendChild(ligne);
  });

  fiche.append(titreF, contenu);
  return fiche;
}

/**
 * Affiche un message d'erreur élégant si la bataille est introuvable.
 * @param {HTMLElement} conteneur
 * @param {string|null} id
 */
function afficherErreurBatailleIntrouvable(conteneur, id) {
  document.title = 'Bataille introuvable — Histoire des Batailles';

  conteneur.innerHTML = '';

  const erreur = document.createElement('div');
  erreur.className = 'page-erreur';

  const code = document.createElement('div');
  code.className = 'page-erreur__code';
  code.setAttribute('aria-hidden', 'true');
  code.textContent = '404';

  const titre = document.createElement('p');
  titre.className = 'page-erreur__titre';
  titre.textContent = 'Bataille introuvable';

  const message = document.createElement('p');
  message.className = 'page-erreur__message';
  message.textContent = id
    ? `Aucune bataille ne correspond à l'identifiant « ${id} » dans nos archives.`
    : 'Aucun identifiant de bataille n\'a été fourni dans l\'URL.';

  const lienRetour = document.createElement('a');
  lienRetour.href = 'index.html';
  lienRetour.className = 'btn-retour';
  lienRetour.innerHTML = '<span class="btn-retour__fleche" aria-hidden="true">←</span> Retour aux archives';

  erreur.append(code, titre, message, lienRetour);
  conteneur.appendChild(erreur);
}

/* ============================================================
   INITIALISATION
   ============================================================ */

/**
 * Point d'entrée — détecte la page courante et initialise en conséquence.
 */
function initialiser() {
  const estPageDetail  = document.body.dataset.page === 'detail';
  const estPageAccueil = document.body.dataset.page === 'accueil';

  if (estPageAccueil) {
    construireFrise();
    brancherControles();
    recalculerResultats();
    afficherBatailles();
  }

  if (estPageDetail) {
    afficherPageDetail();
  }
}

document.addEventListener('DOMContentLoaded', initialiser);
