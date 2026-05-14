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
    .filter(b => b.type === 'bataille')
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
   FRISE MULTI-NIVEAUX — MOTEUR TEMPOREL
   ============================================================ */

let FRISE_DATE_MIN, FRISE_DATE_MAX;
const PX_PAR_AN_BASE   = 0.4;
const HAUTEUR_SOUS_LIGNE = 44; // px par sous-ligne de la frise
const MARGE_SOUS_LIGNE   = 6;  // px de marge verticale dans chaque sous-ligne
let niveauZoom = 2;

/**
 * Calcule les bornes temporelles globales à partir de tous les jeux de données.
 */
function calculerBornesTemporelles() {
  const dates = [
    ...civilisations.flatMap(c => [c.dateDebut, c.dateFin]),
    ...modesProduction.flatMap(m => [m.dateDebut, m.dateFin]),
    ...conflits.flatMap(c => [c.dateDebut, c.dateFin]),
    ...batailles.flatMap(b => [b.dateDebut ?? b.date, b.dateFin ?? b.date]),
    ...revoltes.flatMap(r => [r.dateDebut, r.dateFin]),
  ];
  FRISE_DATE_MIN = Math.min(...dates) - 50;
  FRISE_DATE_MAX = Math.max(...dates) + 50;
}

function largeurFrise() {
  return Math.round((FRISE_DATE_MAX - FRISE_DATE_MIN) * PX_PAR_AN_BASE * niveauZoom);
}

function anneeVersPixels(annee) {
  return Math.round((annee - FRISE_DATE_MIN) * PX_PAR_AN_BASE * niveauZoom);
}

function dureeVersPixels(debut, fin) {
  return Math.max(Math.round((fin - debut) * PX_PAR_AN_BASE * niveauZoom), 10);
}

/* ============================================================
   FRISE MULTI-NIVEAUX — AXE TEMPOREL
   ============================================================ */

/**
 * Construit l'axe avec graduations (siècle = marque majeure, décennie = mineure).
 */
function construireAxeTemporel() {
  const axe = document.getElementById('frise-axe-temporel');
  if (!axe) return;
  axe.innerHTML = '';

  const fragment = document.createDocumentFragment();

  // Intervalle adaptatif selon le zoom
  const anneesVisibles = (FRISE_DATE_MAX - FRISE_DATE_MIN) / niveauZoom;
  let pasMineur, pasMajeur;
  if (anneesVisibles > 5000) {
    pasMineur = 500; pasMajeur = 1000;
  } else if (anneesVisibles > 2000) {
    pasMineur = 100; pasMajeur = 500;
  } else if (anneesVisibles > 500) {
    pasMineur = 50; pasMajeur = 100;
  } else if (anneesVisibles > 200) {
    pasMineur = 10; pasMajeur = 50;
  } else {
    pasMineur = 5; pasMajeur = 25;
  }

  // Première marque alignée sur le pas
  const debut = Math.ceil(FRISE_DATE_MIN / pasMineur) * pasMineur;

  for (let annee = debut; annee <= FRISE_DATE_MAX; annee += pasMineur) {
    const estMajeure = annee % pasMajeur === 0;
    const marque = document.createElement('div');
    marque.className = 'frise-marque' + (estMajeure ? ' frise-marque--majeure' : '');
    marque.style.left = anneeVersPixels(annee) + 'px';

    if (estMajeure) {
      const label = document.createElement('span');
      label.className = 'frise-marque__label';
      label.textContent = annee < 0 ? `${Math.abs(annee)} av.` : String(annee);
      marque.appendChild(label);
    }

    fragment.appendChild(marque);
  }

  axe.appendChild(fragment);
}

/* ============================================================
   FRISE MULTI-NIVEAUX — RENDU DES NIVEAUX
   ============================================================ */

/**
 * Trouve un objet dans tous les jeux de données par type et id.
 * @param {string} type
 * @param {string} id
 * @returns {Object|null}
 */
function trouverObjetParTypeEtId(type, id) {
  switch (type) {
    case 'bataille':      return batailles.find(b => b.id === id) || null;
    case 'civilisation':  return civilisations.find(c => c.id === id) || null;
    case 'mode-production': return modesProduction.find(m => m.id === id) || null;
    case 'conflit':       return conflits.find(c => c.id === id) || null;
    case 'revolte':       return revoltes.find(r => r.id === id) || null;
    default:              return null;
  }
}

/**
 * Répartit les objets sur des couloirs sans chevauchement (algorithme greedy).
 * @param {Array} donnees
 * @returns {Array<{objet: Object, ligne: number}>}
 */
function calculerSousLignes(donnees) {
  const tries = [...donnees].sort((a, b) =>
    (a.dateDebut ?? a.date) - (b.dateDebut ?? b.date)
  );
  const couloirs = []; // couloirs[i] = { fin: number, objets: [] }

  tries.forEach(objet => {
    const debut = objet.dateDebut ?? objet.date;
    const fin   = objet.dateFin   ?? objet.date;
    const idx   = couloirs.findIndex(c => debut >= c.fin);
    if (idx !== -1) {
      couloirs[idx].fin = fin;
      couloirs[idx].objets.push({ objet, ligne: idx });
    } else {
      couloirs.push({ fin, objets: [{ objet, ligne: couloirs.length }] });
    }
  });

  return couloirs.flatMap(c => c.objets);
}

/**
 * Crée un élément DOM positionné pour la frise.
 * @param {Object} objet
 * @param {number} ligne — index de sous-ligne (0 = première ligne)
 * @returns {HTMLElement}
 */
function creerElementFrise(objet, ligne = 0) {
  const debut = objet.dateDebut ?? objet.date;
  const fin   = objet.dateFin   ?? objet.date;
  const duree = fin - debut;

  const el = document.createElement('div');
  el.className = 'frise-element' + (duree < 2 ? ' frise-element--point' : '');
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.dataset.id   = objet.id;
  el.dataset.type = objet.type;
  el.style.left   = anneeVersPixels(debut) + 'px';
  el.style.width  = dureeVersPixels(debut, fin) + 'px';
  el.style.top    = (ligne * HAUTEUR_SOUS_LIGNE + MARGE_SOUS_LIGNE) + 'px';
  el.style.height = (HAUTEUR_SOUS_LIGNE - 2 * MARGE_SOUS_LIGNE) + 'px';

  const label = objet.dateAfficheeDebut
    ? `${objet.nom} (${objet.dateAfficheeDebut} – ${objet.dateAfficheeFin})`
    : `${objet.nom} (${objet.dateAffichee || debut})`;
  el.setAttribute('aria-label', label);

  const nom = document.createElement('span');
  nom.className = 'frise-element__nom';
  nom.textContent = objet.nom;
  el.appendChild(nom);

  const url = objet.type === 'bataille'
    ? `bataille.html?id=${encodeURIComponent(objet.id)}`
    : `detail.html?type=${encodeURIComponent(objet.type)}&id=${encodeURIComponent(objet.id)}`;

  el.addEventListener('click', () => { window.location.href = url; });
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = url;
    }
  });

  return el;
}

/**
 * Remplit un niveau de la frise avec ses données.
 * @param {string} id
 * @param {Array} donnees
 */
function construireNiveau(id, donnees) {
  const niveau = document.getElementById('frise-niveau-' + id);
  if (!niveau) return;
  niveau.innerHTML = '';

  const placements = calculerSousLignes(donnees);
  const nbLignes   = placements.reduce((max, p) => Math.max(max, p.ligne + 1), 1);
  const hauteurPx  = nbLignes * HAUTEUR_SOUS_LIGNE;

  niveau.style.height = hauteurPx + 'px';
  const label = document.querySelector(`.frise-niveau-label[data-niveau="${id}"]`);
  if (label) label.style.height = hauteurPx + 'px';

  const fragment = document.createDocumentFragment();
  placements.forEach(({ objet, ligne }) =>
    fragment.appendChild(creerElementFrise(objet, ligne))
  );
  niveau.appendChild(fragment);
}

/**
 * Point d'entrée — construit la frise multi-niveaux complète.
 */
function construireFriseMulti() {
  calculerBornesTemporelles();

  const contenu = document.getElementById('frise-scroll-contenu');
  if (!contenu) return;
  contenu.style.width = largeurFrise() + 'px';

  construireAxeTemporel();
  construireNiveau('civilisations',    civilisations);
  construireNiveau('modes-production', modesProduction);
  construireNiveau('conflits',         conflits);
  construireNiveau('batailles',        batailles);
  construireNiveau('revoltes',         revoltes);

  activerScrollFriseMulti();
  activerTooltipFrise();
  brancherControlesZoom();
  brancherToggleNiveaux();
  appliquerZoom(2);
}

/* ============================================================
   FRISE MULTI-NIVEAUX — SCROLL & INTERACTION
   ============================================================ */

/**
 * Active le glisser-déplacer sur la zone scrollable de la frise multi.
 */
function activerScrollFriseMulti() {
  const zone = document.getElementById('frise-scroll-zone');
  if (!zone) return;

  let glissement = { actif: false, depart: 0, scrollDepart: 0 };

  zone.addEventListener('mousedown', e => {
    glissement = { actif: true, depart: e.clientX, scrollDepart: zone.scrollLeft };
    zone.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', e => {
    if (!glissement.actif) return;
    zone.scrollLeft = glissement.scrollDepart - (e.clientX - glissement.depart);
  });

  document.addEventListener('mouseup', () => {
    if (!glissement.actif) return;
    glissement.actif = false;
    zone.style.cursor = 'grab';
  });
}

/**
 * Active le tooltip au survol des éléments de la frise.
 */
function activerTooltipFrise() {
  const tooltip = document.getElementById('frise-tooltip');
  if (!tooltip) return;

  document.addEventListener('mouseover', e => {
    const el = e.target.closest('.frise-element');
    if (!el) return;
    const objet = trouverObjetParTypeEtId(el.dataset.type, el.dataset.id);
    if (!objet) return;

    const debut = objet.dateAfficheeDebut || objet.dateAffichee || String(objet.dateDebut ?? objet.date);
    const fin   = objet.dateAfficheeFin;
    const periode = fin && fin !== debut ? `${debut} – ${fin}` : debut;

    const typeLabels = {
      'bataille':        'Bataille',
      'civilisation':    'Civilisation',
      'conflit':         'Conflit',
      'mode-production': 'Mode de production',
      'revolte':         'Révolte',
    };

    tooltip.innerHTML = '';

    const spanType = document.createElement('div');
    spanType.className = 'frise-tooltip__type';
    spanType.textContent = typeLabels[objet.type] || objet.type;

    const spanNom = document.createElement('div');
    spanNom.className = 'frise-tooltip__nom';
    spanNom.textContent = objet.nom;

    const spanMeta = document.createElement('div');
    spanMeta.className = 'frise-tooltip__meta';
    spanMeta.textContent = periode;

    tooltip.append(spanType, spanNom, spanMeta);

    // Ligne lieu + meneur pour les conflits et révoltes
    if (objet.lieu) {
      const spanLieu = document.createElement('div');
      spanLieu.className = 'frise-tooltip__meta';
      spanLieu.textContent = objet.lieu;
      tooltip.appendChild(spanLieu);
    }
    if (objet.meneur) {
      const spanMeneur = document.createElement('div');
      spanMeneur.className = 'frise-tooltip__meta';
      spanMeneur.textContent = 'Meneur : ' + objet.meneur;
      tooltip.appendChild(spanMeneur);
    }
    tooltip.classList.add('visible');
  });

  document.addEventListener('mousemove', e => {
    const el = e.target.closest('.frise-element');
    if (!el) {
      tooltip.classList.remove('visible');
      return;
    }
    tooltip.style.left = (e.clientX + 14) + 'px';
    tooltip.style.top  = (e.clientY - 28) + 'px';
  });

  document.addEventListener('mouseout', e => {
    if (!e.target.closest('.frise-element')) {
      tooltip.classList.remove('visible');
    }
  });
}

/* ============================================================
   FRISE MULTI-NIVEAUX — ZOOM
   ============================================================ */

/**
 * Applique un facteur de zoom, repositionne tous les éléments.
 * @param {number} facteur
 */
function appliquerZoom(facteur) {
  niveauZoom = Math.min(Math.max(facteur, 0.25), 16);

  const label = document.getElementById('frise-zoom-label');
  if (label) label.textContent = '×' + niveauZoom;

  const contenu = document.getElementById('frise-scroll-contenu');
  if (contenu) contenu.style.width = largeurFrise() + 'px';

  // Repositionner tous les éléments existants
  document.querySelectorAll('.frise-element').forEach(el => {
    const objet = trouverObjetParTypeEtId(el.dataset.type, el.dataset.id);
    if (!objet) return;
    const debut = objet.dateDebut ?? objet.date;
    const fin   = objet.dateFin   ?? objet.date;
    el.style.left  = anneeVersPixels(debut) + 'px';
    el.style.width = dureeVersPixels(debut, fin) + 'px';
  });

  construireAxeTemporel();
}

/**
 * Branche les boutons toggle de visibilité sur chaque niveau de la frise.
 */
function brancherToggleNiveaux() {
  document.querySelectorAll('.frise-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id      = btn.dataset.niveau;
      const niveau  = document.getElementById('frise-niveau-' + id);
      const label   = document.querySelector(`.frise-niveau-label[data-niveau="${id}"]`);
      const visible = btn.getAttribute('aria-pressed') === 'true';

      btn.setAttribute('aria-pressed', visible ? 'false' : 'true');
      niveau?.classList.toggle('frise-niveau--masque', visible);
      label?.classList.toggle('frise-niveau-label--masque', visible);
    });
  });
}

/**
 * Branche les boutons +/− de zoom.
 */
function brancherControlesZoom() {
  const btnMoins = document.getElementById('frise-zoom-moins');
  const btnPlus  = document.getElementById('frise-zoom-plus');

  const pasZoom = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12, 16];

  if (btnMoins) {
    btnMoins.addEventListener('click', () => {
      const idx = pasZoom.indexOf(niveauZoom);
      if (idx > 0) appliquerZoom(pasZoom[idx - 1]);
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', () => {
      const idx = pasZoom.indexOf(niveauZoom);
      if (idx < pasZoom.length - 1) appliquerZoom(pasZoom[idx + 1]);
    });
  }
}

/* ============================================================
   PAGE DÉTAIL MULTI (detail.html)
   ============================================================ */

/**
 * Lit ?type=&id= et dispatche vers le bon constructeur de template.
 */
function afficherPageDetailMulti() {
  const params  = new URLSearchParams(window.location.search);
  const type    = params.get('type');
  const id      = params.get('id');
  const conteneur = document.getElementById('detail-conteneur');
  if (!conteneur) return;

  const objet = trouverObjetParTypeEtId(type, id);

  if (!objet) {
    document.title = 'Élément introuvable — Histoire des Batailles';
    const erreur = document.createElement('div');
    erreur.className = 'page-erreur';
    const code = document.createElement('div');
    code.className = 'page-erreur__code';
    code.setAttribute('aria-hidden', 'true');
    code.textContent = '404';
    const titre = document.createElement('p');
    titre.className = 'page-erreur__titre';
    titre.textContent = 'Élément introuvable';
    const lienRetour = document.createElement('a');
    lienRetour.href = 'index.html';
    lienRetour.className = 'btn-retour';
    lienRetour.innerHTML = '<span class="btn-retour__fleche" aria-hidden="true">←</span> Retour aux archives';
    erreur.append(code, titre, lienRetour);
    conteneur.appendChild(erreur);
    return;
  }

  document.title = `${objet.nom} — Histoire des Batailles`;

  switch (type) {
    case 'civilisation':    construireDetailCivilisation(conteneur, objet);  break;
    case 'conflit':         construireDetailConflit(conteneur, objet);       break;
    case 'mode-production': construireDetailModeProduction(conteneur, objet); break;
    case 'revolte':         construireDetailRevolte(conteneur, objet);       break;
  }
}

/**
 * Crée l'en-tête commun à toutes les pages détail multi.
 * @param {Object} objet
 * @param {string} labelType
 * @param {string} couleurType
 * @returns {HTMLElement}
 */
function creerEnteteDetailMulti(objet, labelType) {
  const entete = document.createElement('header');
  entete.className = 'detail-entete';

  const typeEl = document.createElement('div');
  typeEl.className = 'detail-multi-type';
  typeEl.textContent = labelType;

  const periode = document.createElement('div');
  periode.className = 'detail-multi-periode';
  const debut = objet.dateAfficheeDebut || String(objet.dateDebut);
  const fin   = objet.dateAfficheeFin   || String(objet.dateFin);
  periode.textContent = debut === fin ? debut : `${debut} – ${fin}`;

  const titre = document.createElement('h1');
  titre.className = 'detail-entete__titre';
  titre.textContent = objet.nom;

  entete.append(typeEl, periode, titre);
  return entete;
}

/**
 * Template — Civilisation
 */
function construireDetailCivilisation(conteneur, objet) {
  conteneur.innerHTML = '';

  const entete = creerEnteteDetailMulti(objet, 'Civilisation');

  const lieu = document.createElement('div');
  lieu.className = 'detail-entete__lieu';
  lieu.textContent = `⚑ ${objet.region}${objet.capitale ? ' — Capitale : ' + objet.capitale : ''}`;
  entete.appendChild(lieu);

  const corps = document.createElement('div');
  corps.className = 'detail-corps';

  const principal = document.createElement('div');
  principal.className = 'detail-principal';
  principal.appendChild(creerSectionDetail('Présentation', objet.description));
  principal.appendChild(creerSectionDetail('Héritage & conséquences', objet.consequence));

  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

/**
 * Template — Conflit
 */
function construireDetailConflit(conteneur, objet) {
  conteneur.innerHTML = '';

  const entete = creerEnteteDetailMulti(objet, 'Conflit');
  const corps = document.createElement('div');
  corps.className = 'detail-corps';

  const principal = document.createElement('div');
  principal.className = 'detail-principal';

  // Bloc belligérants simplifié
  const secBell = creerSectionDetail('Belligérants', null);
  const blocBell = document.createElement('div');
  blocBell.className = 'detail-belligerants';
  const coteA = creerCoteBelligerant(objet.belligerants.a, objet.vainqueur === objet.belligerants.a);
  const vs = document.createElement('div');
  vs.className = 'vs-separateur';
  vs.setAttribute('aria-hidden', 'true');
  vs.textContent = 'VS';
  const coteB = creerCoteBelligerant(objet.belligerants.b, objet.vainqueur === objet.belligerants.b);
  blocBell.append(coteA, vs, coteB);
  secBell.appendChild(blocBell);
  principal.appendChild(secBell);

  principal.appendChild(creerSectionDetail('Déroulement', objet.description));
  principal.appendChild(creerSectionDetail('Conséquences historiques', objet.consequence));

  // Batailles liées
  if (objet.bataillesLiees && objet.bataillesLiees.length > 0) {
    const secLiees = document.createElement('section');
    secLiees.className = 'detail-batailles-liees';

    const titreSec = document.createElement('h2');
    titreSec.className = 'detail-batailles-liees__titre';
    titreSec.textContent = 'Batailles de ce conflit';
    secLiees.appendChild(titreSec);

    const liste = document.createElement('ul');
    liste.className = 'detail-batailles-liees__liste';

    objet.bataillesLiees.forEach(batailleId => {
      const b = batailles.find(x => x.id === batailleId);
      if (!b) return;
      const li = document.createElement('li');
      const lien = document.createElement('a');
      lien.href = `bataille.html?id=${encodeURIComponent(b.id)}`;
      lien.className = 'detail-batailles-liees__lien';
      lien.textContent = `${b.nom} — ${b.dateAffichee}`;
      li.appendChild(lien);
      liste.appendChild(li);
    });

    secLiees.appendChild(liste);
    principal.appendChild(secLiees);
  }

  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

/**
 * Template — Mode de production
 */
function construireDetailModeProduction(conteneur, objet) {
  conteneur.innerHTML = '';

  const entete = creerEnteteDetailMulti(objet, 'Mode de production');

  const lieu = document.createElement('div');
  lieu.className = 'detail-entete__lieu';
  lieu.textContent = `⚑ ${objet.zone}`;
  entete.appendChild(lieu);

  const corps = document.createElement('div');
  corps.className = 'detail-corps';

  const principal = document.createElement('div');
  principal.className = 'detail-principal';
  principal.appendChild(creerSectionDetail('Caractéristiques', objet.description));
  principal.appendChild(creerSectionDetail('Héritage & conséquences', objet.consequence));

  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

/**
 * Template — Révolte
 */
function construireDetailRevolte(conteneur, objet) {
  conteneur.innerHTML = '';

  const entete = creerEnteteDetailMulti(objet, 'Révolte');

  const lieu = document.createElement('div');
  lieu.className = 'detail-entete__lieu';
  lieu.textContent = `⚑ ${objet.lieu}${objet.meneur ? ' — Meneur : ' + objet.meneur : ''}`;
  entete.appendChild(lieu);

  const corps = document.createElement('div');
  corps.className = 'detail-corps';

  const principal = document.createElement('div');
  principal.className = 'detail-principal';
  principal.appendChild(creerSectionDetail('Déroulement', objet.description));
  principal.appendChild(creerSectionDetail('Conséquences historiques', objet.consequence));

  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

/* ============================================================
   INITIALISATION
   ============================================================ */

/**
 * Point d'entrée — détecte la page courante et initialise en conséquence.
 */
function initialiser() {
  const page = document.body.dataset.page;

  if (page === 'accueil') {
    construireFriseMulti();
    brancherControles();
    recalculerResultats();
    afficherBatailles();
  }

  if (page === 'detail') {
    afficherPageDetail();
  }

  if (page === 'detail-multi') {
    afficherPageDetailMulti();
  }
}

document.addEventListener('DOMContentLoaded', initialiser);
