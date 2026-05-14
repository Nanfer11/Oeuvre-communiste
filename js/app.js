// app.js — Praxis, encyclopédie historico-matérialiste
// Logique applicative : rendu des 4 sections, filtres, recherche, frise légère
// Aucune dépendance externe — JavaScript vanilla ES6+

'use strict';

/* ============================================================
   UTILITAIRES GÉNÉRAUX
   ============================================================ */

/**
 * Échappe les caractères HTML. Dernier recours si innerHTML est inévitable.
 * Dans ce fichier, tout le rendu passe par les API DOM — cette fonction
 * sert uniquement à titre défensif pour les attributs href.
 */
function echapper(chaine) {
  const carte = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(chaine).replace(/[&<>"']/g, c => carte[c]);
}

/**
 * Normalise une chaîne pour la recherche :
 * retire les diacritiques et met tout en minuscules.
 */
function normaliser(chaine) {
  return String(chaine)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Crée un élément HTML avec classe(s) et texte optionnels.
 * @param {string} tag  — balise HTML
 * @param {string|null} classes — className ou null
 * @param {string} [texte] — textContent optionnel
 * @returns {HTMLElement}
 */
function el(tag, classes, texte) {
  const e = document.createElement(tag);
  if (classes) e.className = classes;
  if (texte !== undefined) e.textContent = texte;
  return e;
}

/** Crée un séparateur de méta-info « · ». */
function separateurMeta() {
  const s = el('span', 'carte-section__meta-sep');
  s.setAttribute('aria-hidden', 'true');
  s.textContent = '·';
  return s;
}

/* ============================================================
   COMPTEUR & MESSAGES D'ÉTAT
   ============================================================ */

function mettreAJourCompteur(n) {
  const compteur = document.getElementById('compteur-resultats');
  if (!compteur) return;
  compteur.textContent = n === 0
    ? 'Aucun résultat'
    : `${n} résultat${n > 1 ? 's' : ''}`;
}

function afficherMessageVide(grille) {
  grille.appendChild(el('p', 'message-vide', 'Aucun résultat pour ces critères.'));
}

/* ============================================================
   HELPERS DE DONNÉES
   ============================================================ */

/** Dérive l'époque standard à partir d'une année numérique. */
function epoqueDeAnnee(annee) {
  if (annee < 500)  return 'antiquite';
  if (annee < 1500) return 'moyen-age';
  if (annee < 1800) return 'moderne';
  if (annee < 1900) return 'contemporaine';
  return 'xxe';
}

/**
 * Dérive l'époque d'une civilisation à partir de son mode de production.
 * Retourne null pour les civilisations préhistoriques (absentes des filtres).
 */
function epoqueDeCivilisation(civ) {
  const table = {
    asiatique:         'antiquite',
    antique:           'antiquite',
    feodal:            'moyen-age',
    capitaliste:       'moderne',
  };
  return table[civ.modeProduction] || null;
}

/** Retourne le nom d'un conflit depuis son id, ou l'id formaté si introuvable. */
function nomConflitDepuisId(id) {
  if (typeof conflits !== 'undefined') {
    const c = conflits.find(c => c.id === id);
    if (c) return c.nom;
  }
  return id;
}

/**
 * Retourne nom + date d'une bataille depuis son id.
 * Se rabat sur un formatage de l'id si la bataille n'est pas dans le tableau legacy.
 * Ex. : "lac-trasimene-217" → { nom: "Lac Trasimene", date: "217" }
 */
function infoBatailleDepuisId(id) {
  if (typeof batailles !== 'undefined') {
    const b = batailles.find(b => b.id === id);
    if (b) return { nom: b.nom, date: b.dateAffichee };
  }
  const parties = id.split('-');
  const date = parties[parties.length - 1];
  const nom  = parties.slice(0, -1)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
  return { nom, date };
}

/**
 * Trouve les révoltes dont la date de début est dans la fenêtre temporelle
 * du conflit. Utilisé pour l'affichage des révoltes liées sur les cartes conflit.
 */
function revoltesLieesAuConflit(conflit) {
  if (typeof revoltes === 'undefined') return [];
  return revoltes.filter(
    r => r.dateDebut >= conflit.dateDebut && r.dateDebut <= conflit.dateFin
  );
}

/** Classe CSS du badge d'importance (normalise les accents). */
function classeImportance(imp) {
  return 'badge-' + normaliser(imp);
}

/** Classe CSS du badge de résultat de révolte. */
function classeResultat(res) {
  return 'badge-' + res; // valeurs : "victoire", "defaite", "mitige" — pas d'accent
}

/** Libellé affiché d'un résultat de révolte. */
function libelleResultat(res) {
  return { victoire: 'Victoire', defaite: 'Défaite', mitige: 'Mitigé' }[res] || res;
}

/** Retourne le nom du mode de production depuis son id. */
function nomModeProductionDepuisId(id) {
  if (typeof modesProduction !== 'undefined') {
    const m = modesProduction.find(m => m.id === id);
    if (m) return m.nom;
  }
  return id;
}

/* ============================================================
   I. MODES DE PRODUCTION
   ============================================================ */

/**
 * Crée la carte DOM d'un mode de production.
 * Structure : En-tête (nom + période + région) / Définition / Citation /
 *             Analyse / Pied (exemples en tags)
 */
function creerCarteMode(mode) {
  const article = el('article', 'carte-section');
  article.setAttribute('role', 'listitem');
  article.dataset.id = mode.id;

  // ── En-tête (pas de lien — pas de page détail pour les modes)
  const entete = el('div', 'carte-section__entete');
  entete.appendChild(el('h2', 'carte-section__titre', mode.nom));

  const meta = el('div', 'carte-section__meta');
  meta.appendChild(el('span', null, mode.periode));
  meta.appendChild(separateurMeta());
  meta.appendChild(el('span', null, mode.region));
  entete.appendChild(meta);
  article.appendChild(entete);

  // ── Champs
  const champs = el('div', 'carte-section__champs');

  // Définition
  const champDef = el('div', 'carte-section__champ');
  champDef.appendChild(el('span', 'carte-section__champ-titre', 'Définition'));
  champDef.appendChild(el('p', 'carte-section__champ-texte', mode.definition));
  champs.appendChild(champDef);

  // Citation
  const cite = el('blockquote', 'carte-section__citation');
  cite.appendChild(el('p', 'carte-section__citation-texte', `« ${mode.citation.texte} »`));
  cite.appendChild(
    el('footer', 'carte-section__citation-source',
      `— ${mode.citation.auteur}, ${mode.citation.source}`)
  );
  champs.appendChild(cite);

  // Analyse
  const champAnalyse = el('div', 'carte-section__champ');
  champAnalyse.appendChild(el('span', 'carte-section__champ-titre', 'Analyse'));
  champAnalyse.appendChild(el('p', 'carte-section__champ-texte', mode.analyse));
  champs.appendChild(champAnalyse);

  article.appendChild(champs);

  // ── Pied — exemples
  const pied = el('div', 'carte-section__pied');
  pied.appendChild(el('span', 'carte-section__champ-titre', 'Exemples'));
  mode.exemples.forEach(ex => pied.appendChild(el('span', 'tag', ex)));
  article.appendChild(pied);

  return article;
}

function initModesProduction() {
  const grille = document.getElementById('grille-modes-production');
  const champRecherche = document.getElementById('champ-recherche');
  if (!grille || typeof modesProduction === 'undefined') return;

  let termeRecherche = '';

  function filtrerEtAfficher() {
    const terme = normaliser(termeRecherche);
    const liste = terme
      ? modesProduction.filter(m =>
          normaliser(m.nom).includes(terme) ||
          normaliser(m.definition).includes(terme) ||
          normaliser(m.analyse).includes(terme) ||
          m.exemples.some(ex => normaliser(ex).includes(terme))
        )
      : modesProduction.slice();

    grille.innerHTML = '';
    liste.length === 0
      ? afficherMessageVide(grille)
      : liste.forEach(m => grille.appendChild(creerCarteMode(m)));
    mettreAJourCompteur(liste.length);
  }

  if (champRecherche) {
    let minuterie = null;
    champRecherche.addEventListener('input', () => {
      clearTimeout(minuterie);
      minuterie = setTimeout(() => {
        termeRecherche = champRecherche.value.trim();
        filtrerEtAfficher();
      }, 200);
    });
  }

  filtrerEtAfficher();
}

/* ============================================================
   II. CIVILISATIONS
   ============================================================ */

/**
 * Peuple la frise légère avec un chip cliquable par civilisation.
 * @param {Array} liste — civilisations triées à afficher dans la frise
 * @param {Function} onClic — callback(id, boutonDOM)
 */
function construireFriseCivilisations(liste, onClic) {
  const piste = document.getElementById('frise-civilisations');
  if (!piste) return;

  // Tri chronologique pour la frise
  const triees = liste.slice().sort((a, b) => a.dateDebut - b.dateDebut);

  triees.forEach(civ => {
    const btn = el('button', 'frise-legere__item');
    btn.setAttribute('role', 'listitem');
    btn.dataset.id = civ.id;
    btn.setAttribute('aria-label', `${civ.nom}, ${civ.periode}`);
    btn.appendChild(el('span', 'frise-legere__periode', civ.periode));
    btn.appendChild(el('span', 'frise-legere__nom', civ.nom));
    btn.addEventListener('click', () => onClic(civ.id, btn));
    piste.appendChild(btn);
  });
}

/**
 * Crée la carte DOM d'une civilisation.
 * Structure : En-tête (lien titre + période + région) / Présentation /
 *             Mode de production / Pied (conflits liés en tags)
 */
function creerCarteCivilisation(civ) {
  const article = el('article', 'carte-section');
  article.setAttribute('role', 'listitem');
  article.id = 'civ-' + civ.id; // cible pour le scroll depuis la frise

  // ── En-tête avec lien vers détail
  const entete = el('div', 'carte-section__entete');
  const lien = el('a', 'carte-section__lien-titre');
  lien.href = `detail.html?type=civilisation&id=${echapper(civ.id)}`;
  lien.appendChild(el('h2', 'carte-section__titre', civ.nom));
  entete.appendChild(lien);

  const meta = el('div', 'carte-section__meta');
  meta.appendChild(el('span', null, civ.periode));
  meta.appendChild(separateurMeta());
  meta.appendChild(el('span', null, civ.capitale || civ.region));
  entete.appendChild(meta);
  article.appendChild(entete);

  // ── Champs
  const champs = el('div', 'carte-section__champs');

  const champDesc = el('div', 'carte-section__champ');
  champDesc.appendChild(el('span', 'carte-section__champ-titre', 'Présentation'));
  champDesc.appendChild(el('p', 'carte-section__champ-texte', civ.description));
  champs.appendChild(champDesc);

  const champMode = el('div', 'carte-section__champ');
  champMode.appendChild(el('span', 'carte-section__champ-titre', 'Mode de production'));
  champMode.appendChild(el('p', 'carte-section__champ-texte', nomModeProductionDepuisId(civ.modeProduction)));
  champs.appendChild(champMode);

  article.appendChild(champs);

  // ── Pied — conflits liés (uniquement si non vide)
  if (civ.conflitsLies && civ.conflitsLies.length > 0) {
    const pied = el('div', 'carte-section__pied');
    pied.appendChild(el('span', 'carte-section__champ-titre', 'Conflits associés'));
    civ.conflitsLies.forEach(id => pied.appendChild(el('span', 'tag', nomConflitDepuisId(id))));
    article.appendChild(pied);
  }

  return article;
}

function initCivilisations() {
  const grille = document.getElementById('grille-civilisations');
  const champRecherche = document.getElementById('champ-recherche');
  const filtreEpoque   = document.getElementById('filtre-epoque');
  if (!grille || typeof civilisations === 'undefined') return;

  let termeRecherche = '';
  let epoqueActive   = 'toutes';
  let chipActif      = null; // bouton de frise actuellement actif

  function filtrerEtAfficher() {
    const terme = normaliser(termeRecherche);

    const liste = civilisations.filter(civ => {
      // Filtre époque dérivée du mode de production
      if (epoqueActive !== 'toutes' && epoqueDeCivilisation(civ) !== epoqueActive) return false;
      // Filtre recherche textuelle
      if (terme) {
        const haystack = normaliser(
          civ.nom + ' ' + civ.region + ' ' + civ.description + ' ' +
          civ.conflitsLies.map(nomConflitDepuisId).join(' ')
        );
        if (!haystack.includes(terme)) return false;
      }
      return true;
    });

    grille.innerHTML = '';
    liste.length === 0
      ? afficherMessageVide(grille)
      : liste.forEach(c => grille.appendChild(creerCarteCivilisation(c)));
    mettreAJourCompteur(liste.length);
  }

  // Frise : clic sur un chip → scroll vers la carte correspondante
  construireFriseCivilisations(civilisations, (id, btnClique) => {
    // Désactiver le chip précédemment actif
    if (chipActif && chipActif !== btnClique) {
      chipActif.classList.remove('frise-legere__item--actif');
    }
    // Deuxième clic sur le même chip : désactiver
    if (chipActif === btnClique) {
      btnClique.classList.remove('frise-legere__item--actif');
      chipActif = null;
      return;
    }
    btnClique.classList.add('frise-legere__item--actif');
    chipActif = btnClique;

    // Scroll vers la carte (l'article a l'id "civ-[id]")
    const cible = document.getElementById('civ-' + id);
    if (cible) {
      cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  if (champRecherche) {
    let minuterie = null;
    champRecherche.addEventListener('input', () => {
      clearTimeout(minuterie);
      minuterie = setTimeout(() => {
        termeRecherche = champRecherche.value.trim();
        filtrerEtAfficher();
      }, 200);
    });
  }

  if (filtreEpoque) {
    filtreEpoque.addEventListener('change', () => {
      epoqueActive = filtreEpoque.value;
      filtrerEtAfficher();
    });
  }

  filtrerEtAfficher();
}

/* ============================================================
   III. CONFLITS
   ============================================================ */

/**
 * Crée la carte DOM d'un conflit avec accordéon batailles.
 * Structure : En-tête (lien + période + badge importance) / Belligérants VS /
 *             Analyse — lutte des classes / Révoltes liées (si trouvées) /
 *             Accordéon batailles (toggle au clic)
 */
function creerCarteConflit(conflit) {
  const article = el('article', 'carte-section carte-conflit');
  article.setAttribute('role', 'listitem');
  article.dataset.id = conflit.id;

  // ── En-tête
  const entete = el('div', 'carte-section__entete');
  const lien = el('a', 'carte-section__lien-titre');
  lien.href = `detail.html?type=conflit&id=${echapper(conflit.id)}`;
  lien.appendChild(el('h2', 'carte-section__titre', conflit.nom));
  entete.appendChild(lien);

  const meta = el('div', 'carte-section__meta');
  meta.appendChild(el('span', null, `${conflit.dateAfficheeDebut} – ${conflit.dateAfficheeFin}`));
  meta.appendChild(separateurMeta());
  const badge = el('span', `badge ${classeImportance(conflit.importance)}`);
  badge.textContent = conflit.importance.charAt(0).toUpperCase() + conflit.importance.slice(1);
  meta.appendChild(badge);
  entete.appendChild(meta);
  article.appendChild(entete);

  // ── Champs
  const champs = el('div', 'carte-section__champs');

  // Bloc belligérants
  const blocBell = el('div', 'detail-belligerants');
  blocBell.style.padding = 'var(--espace-s)';
  const coteA = el('div', 'belligerant__nom', conflit.belligerantsA);
  const vs = el('div', 'vs-separateur', 'VS');
  vs.setAttribute('aria-hidden', 'true');
  const coteB = el('div', 'belligerant__nom', conflit.belligerantsB);
  blocBell.append(coteA, vs, coteB);
  champs.appendChild(blocBell);

  // Analyse — lutte des classes
  const champAnalyse = el('div', 'carte-section__champ');
  champAnalyse.appendChild(el('span', 'carte-section__champ-titre', 'Analyse — lutte des classes'));
  champAnalyse.appendChild(el('p', 'carte-section__champ-texte', conflit.analyseClasses));
  champs.appendChild(champAnalyse);

  // Révoltes liées (détectées par chevauchement de dates)
  const liees = revoltesLieesAuConflit(conflit);
  if (liees.length > 0) {
    const champRevoltes = el('div', 'carte-section__champ');
    champRevoltes.appendChild(el('span', 'carte-section__champ-titre', 'Révoltes liées'));
    liees.forEach(r => {
      const tag = el('a', 'tag tag--lien', r.nom);
      tag.href = 'revoltes.html';
      champRevoltes.appendChild(tag);
    });
    champs.appendChild(champRevoltes);
  }

  article.appendChild(champs);

  // ── Accordéon batailles
  if (conflit.batailles && conflit.batailles.length > 0) {
    const accordeon = el('div', 'carte-conflit__batailles');
    const idListe   = 'batailles-' + conflit.id;

    const btnAccordeon = el('button', 'carte-conflit__batailles-btn');
    btnAccordeon.setAttribute('aria-expanded', 'false');
    btnAccordeon.setAttribute('aria-controls', idListe);
    btnAccordeon.appendChild(el('span', null, `Batailles (${conflit.batailles.length})`));
    btnAccordeon.appendChild(el('span', 'carte-conflit__batailles-chevron', '▾'));

    btnAccordeon.addEventListener('click', () => {
      const ouvert = article.classList.toggle('carte-conflit--ouvert');
      btnAccordeon.setAttribute('aria-expanded', String(ouvert));
    });

    const listeBatailles = el('ul', 'carte-conflit__batailles-liste');
    listeBatailles.id = idListe;

    conflit.batailles.forEach(idBat => {
      const info = infoBatailleDepuisId(idBat);
      const li   = el('li', 'carte-conflit__bataille-item');
      const lienBat = el('a', 'carte-conflit__bataille-lien');
      lienBat.href = `bataille.html?id=${echapper(idBat)}`;
      lienBat.appendChild(el('span', 'carte-conflit__bataille-nom', info.nom));
      lienBat.appendChild(el('span', 'carte-conflit__bataille-date', info.date));
      li.appendChild(lienBat);
      listeBatailles.appendChild(li);
    });

    accordeon.appendChild(btnAccordeon);
    accordeon.appendChild(listeBatailles);
    article.appendChild(accordeon);
  }

  return article;
}

function initConflits() {
  const grille           = document.getElementById('grille-conflits');
  const champRecherche   = document.getElementById('champ-recherche');
  const filtreEpoque     = document.getElementById('filtre-epoque');
  const filtreImportance = document.getElementById('filtre-importance');
  const filtreTri        = document.getElementById('filtre-tri');
  if (!grille || typeof conflits === 'undefined') return;

  let termeRecherche   = '';
  let epoqueActive     = 'toutes';
  let importanceActive = 'toutes';
  let triActif         = 'date-asc';

  function filtrerEtAfficher() {
    const terme = normaliser(termeRecherche);

    let liste = conflits.filter(c => {
      if (epoqueActive !== 'toutes' && c.epoque !== epoqueActive) return false;
      // Normalise l'importance avant comparaison ("décisive" → "decisive")
      if (importanceActive !== 'toutes' && normaliser(c.importance) !== importanceActive) return false;
      if (terme) {
        const haystack = normaliser(
          c.nom + ' ' + c.belligerantsA + ' ' + c.belligerantsB + ' ' + c.description
        );
        if (!haystack.includes(terme)) return false;
      }
      return true;
    });

    // Tri
    liste = liste.slice().sort((a, b) => {
      switch (triActif) {
        case 'date-asc':  return a.dateDebut - b.dateDebut;
        case 'date-desc': return b.dateDebut - a.dateDebut;
        case 'nom-asc':   return a.nom.localeCompare(b.nom, 'fr');
        case 'nom-desc':  return b.nom.localeCompare(a.nom, 'fr');
        default:          return 0;
      }
    });

    grille.innerHTML = '';
    liste.length === 0
      ? afficherMessageVide(grille)
      : liste.forEach(c => grille.appendChild(creerCarteConflit(c)));
    mettreAJourCompteur(liste.length);
  }

  if (champRecherche) {
    let minuterie = null;
    champRecherche.addEventListener('input', () => {
      clearTimeout(minuterie);
      minuterie = setTimeout(() => {
        termeRecherche = champRecherche.value.trim();
        filtrerEtAfficher();
      }, 200);
    });
  }
  if (filtreEpoque) {
    filtreEpoque.addEventListener('change', () => {
      epoqueActive = filtreEpoque.value;
      filtrerEtAfficher();
    });
  }
  if (filtreImportance) {
    filtreImportance.addEventListener('change', () => {
      importanceActive = filtreImportance.value;
      filtrerEtAfficher();
    });
  }
  if (filtreTri) {
    filtreTri.addEventListener('change', () => {
      triActif = filtreTri.value;
      filtrerEtAfficher();
    });
  }

  filtrerEtAfficher();
}

/* ============================================================
   IV. RÉVOLTES
   ============================================================ */

/**
 * Crée la carte DOM d'une révolte.
 * Structure : En-tête (lien + date + lieu + meneur) / Présentation /
 *             Classes en lutte / Pied (badge résultat)
 */
function creerCarteRevolte(revolte) {
  const article = el('article', 'carte-section');
  article.setAttribute('role', 'listitem');
  article.dataset.id = revolte.id;

  // ── En-tête avec lien vers détail
  const entete = el('div', 'carte-section__entete');
  const lien = el('a', 'carte-section__lien-titre');
  lien.href = `detail.html?type=revolte&id=${echapper(revolte.id)}`;
  lien.appendChild(el('h2', 'carte-section__titre', revolte.nom));
  entete.appendChild(lien);

  const meta = el('div', 'carte-section__meta');
  meta.appendChild(el('span', null, revolte.dateAffichee));
  meta.appendChild(separateurMeta());
  meta.appendChild(el('span', null, revolte.lieu));
  if (revolte.meneur) {
    meta.appendChild(separateurMeta());
    meta.appendChild(el('span', null, `Meneur : ${revolte.meneur}`));
  }
  entete.appendChild(meta);
  article.appendChild(entete);

  // ── Champs
  const champs = el('div', 'carte-section__champs');

  const champDesc = el('div', 'carte-section__champ');
  champDesc.appendChild(el('span', 'carte-section__champ-titre', 'Présentation'));
  champDesc.appendChild(el('p', 'carte-section__champ-texte', revolte.description));
  champs.appendChild(champDesc);

  // Classes en lutte : insurgées (gras) contre dominantes (italique)
  const champClasses = el('div', 'carte-section__champ');
  champClasses.appendChild(el('span', 'carte-section__champ-titre', 'Classes en lutte'));
  const texteClasses = el('p', 'carte-section__champ-texte');
  texteClasses.appendChild(el('strong', null, revolte.classesEnLutte.insurgees));
  texteClasses.appendChild(document.createTextNode(' contre '));
  texteClasses.appendChild(el('em', null, revolte.classesEnLutte.dominantes));
  champClasses.appendChild(texteClasses);
  champs.appendChild(champClasses);

  article.appendChild(champs);

  // ── Pied — badge résultat
  const pied = el('div', 'carte-section__pied');
  pied.appendChild(el('span', 'carte-section__champ-titre', 'Résultat'));
  const badge = el('span', `badge ${classeResultat(revolte.resultat)}`);
  badge.textContent = libelleResultat(revolte.resultat);
  pied.appendChild(badge);
  article.appendChild(pied);

  return article;
}

function initRevoltes() {
  const grille         = document.getElementById('grille-revoltes');
  const champRecherche = document.getElementById('champ-recherche');
  const filtreEpoque   = document.getElementById('filtre-epoque');
  const filtreResultat = document.getElementById('filtre-resultat');
  if (!grille || typeof revoltes === 'undefined') return;

  let termeRecherche = '';
  let epoqueActive   = 'toutes';
  let resultatActif  = 'tous';

  function filtrerEtAfficher() {
    const terme = normaliser(termeRecherche);

    const liste = revoltes.filter(r => {
      if (epoqueActive !== 'toutes' && epoqueDeAnnee(r.dateDebut) !== epoqueActive) return false;
      if (resultatActif !== 'tous' && r.resultat !== resultatActif) return false;
      if (terme) {
        const haystack = normaliser(
          r.nom + ' ' + r.lieu + ' ' + (r.meneur || '') + ' ' +
          r.classesEnLutte.insurgees + ' ' + r.classesEnLutte.dominantes + ' ' +
          r.description
        );
        if (!haystack.includes(terme)) return false;
      }
      return true;
    });

    grille.innerHTML = '';
    liste.length === 0
      ? afficherMessageVide(grille)
      : liste.forEach(r => grille.appendChild(creerCarteRevolte(r)));
    mettreAJourCompteur(liste.length);
  }

  if (champRecherche) {
    let minuterie = null;
    champRecherche.addEventListener('input', () => {
      clearTimeout(minuterie);
      minuterie = setTimeout(() => {
        termeRecherche = champRecherche.value.trim();
        filtrerEtAfficher();
      }, 200);
    });
  }
  if (filtreEpoque) {
    filtreEpoque.addEventListener('change', () => {
      epoqueActive = filtreEpoque.value;
      filtrerEtAfficher();
    });
  }
  if (filtreResultat) {
    filtreResultat.addEventListener('change', () => {
      resultatActif = filtreResultat.value;
      filtrerEtAfficher();
    });
  }

  filtrerEtAfficher();
}

/* ============================================================
   PAGE DÉTAIL BATAILLE (bataille.html — data-page="detail")
   Pages legacy conservées telles quelles pour la compatibilité
   ============================================================ */

const LIBELLES_EPOQUE = {
  antiquite:     'Antiquité',
  'moyen-age':   'Moyen Âge',
  moderne:       'Époque moderne',
  contemporaine: 'Époque contemporaine',
  xxe:           'XXe siècle',
};

/** Classe du badge d'importance pour les batailles legacy. */
function classeBadge(importance) {
  return 'badge-' + normaliser(importance);
}

function afficherPageDetail() {
  const params    = new URLSearchParams(window.location.search);
  const id        = params.get('id');
  const conteneur = document.getElementById('detail-conteneur');
  if (!conteneur) return;

  const bataille = (typeof batailles !== 'undefined')
    ? batailles.find(b => b.id === id)
    : null;

  if (!bataille) {
    afficherErreurIntrouvable(conteneur, 'Bataille introuvable', id);
    return;
  }

  document.title = `${bataille.nom} — Praxis`;
  construireDetailBataille(conteneur, bataille);
}

function construireDetailBataille(conteneur, bataille) {
  conteneur.innerHTML = '';

  // En-tête
  const entete = el('header', 'detail-entete');
  const surtitre = el('div', 'detail-entete__surtitre');
  const spanDate = el('span', 'detail-entete__date', bataille.dateAffichee);
  const spanConf = el('span', 'detail-entete__conflit', bataille.conflit);
  const spanBadge = el('span', `badge ${classeBadge(bataille.importance)}`);
  spanBadge.textContent = bataille.importance.charAt(0).toUpperCase() + bataille.importance.slice(1);
  surtitre.append(spanDate, spanConf, spanBadge);
  entete.append(surtitre, el('h1', 'detail-entete__titre', bataille.nom));
  const lieu = el('div', 'detail-entete__lieu', `⚑ ${bataille.lieu}`);
  entete.appendChild(lieu);

  // Corps
  const corps = el('div', 'detail-corps');
  const principal = el('div', 'detail-principal');

  // Belligérants
  const secBell = creerSectionDetail('Belligérants', null);
  secBell.appendChild(creerBlocBelligerants(bataille));
  principal.appendChild(secBell);
  principal.appendChild(creerSectionDetail('Déroulement', bataille.description));
  principal.appendChild(creerSectionDetail('Conséquences historiques', bataille.consequence));

  corps.append(principal, construireFicheRecap(bataille));
  conteneur.append(entete, corps);
}

function creerSectionDetail(titre, texte) {
  const section = el('section');
  section.appendChild(el('h2', 'detail-section__titre', titre));
  if (texte) section.appendChild(el('p', 'detail-section__texte', texte));
  return section;
}

function creerBlocBelligerants(bataille) {
  const vainqNorm = normaliser(bataille.vainqueur);
  const estVainqA = normaliser(bataille.belligerants.a).includes(vainqNorm)
    || vainqNorm.includes(normaliser(bataille.belligerants.a).split(' ')[0]);

  const bloc = el('div', 'detail-belligerants');
  bloc.append(
    creerCoteBelligerant(bataille.belligerants.a, estVainqA),
    (() => { const v = el('div', 'vs-separateur', 'VS'); v.setAttribute('aria-hidden', 'true'); return v; })(),
    creerCoteBelligerant(bataille.belligerants.b, !estVainqA)
  );
  return bloc;
}

function creerCoteBelligerant(nom, estVainqueur) {
  const div = el('div', estVainqueur ? 'belligerant belligerant--vainqueur' : 'belligerant');
  if (estVainqueur) {
    const couronne = el('span', 'belligerant__couronne', '♛');
    couronne.setAttribute('aria-label', 'Vainqueur');
    div.appendChild(couronne);
  }
  div.appendChild(el('div', 'belligerant__label', estVainqueur ? 'Vainqueur' : 'Défait'));
  div.appendChild(el('div', 'belligerant__nom', nom));
  return div;
}

function construireFicheRecap(bataille) {
  const fiche = el('aside', 'detail-fiche');
  fiche.appendChild(el('div', 'detail-fiche__titre', 'Fiche récapitulative'));
  const contenu = el('div', 'detail-fiche__contenu');
  [
    ['Date',       bataille.dateAffichee],
    ['Lieu',       bataille.lieu],
    ['Conflit',    bataille.conflit],
    ['Vainqueur',  bataille.vainqueur],
    ['Pertes',     bataille.pertes],
    ['Époque',     LIBELLES_EPOQUE[bataille.epoque] || bataille.epoque],
    ['Importance', bataille.importance.charAt(0).toUpperCase() + bataille.importance.slice(1)],
  ].forEach(([cle, valeur]) => {
    const ligne = el('div', 'detail-fiche__ligne');
    ligne.appendChild(el('dt', 'detail-fiche__cle', cle));
    ligne.appendChild(el('dd', 'detail-fiche__valeur', valeur));
    contenu.appendChild(ligne);
  });
  fiche.appendChild(contenu);
  return fiche;
}

/* ============================================================
   PAGE DÉTAIL MULTI (detail.html — data-page="detail-multi")
   Dispatche selon ?type= vers le bon template
   ============================================================ */

function afficherPageDetailMulti() {
  const params    = new URLSearchParams(window.location.search);
  const type      = params.get('type');
  const id        = params.get('id');
  const conteneur = document.getElementById('detail-conteneur');
  if (!conteneur) return;

  const objet = trouverObjetParTypeEtId(type, id);

  if (!objet) {
    document.title = 'Élément introuvable — Praxis';
    afficherErreurIntrouvable(conteneur, 'Élément introuvable', id);
    return;
  }

  document.title = `${objet.nom} — Praxis`;

  switch (type) {
    case 'civilisation':     construireDetailCivilisation(conteneur, objet);    break;
    case 'conflit':          construireDetailConflit(conteneur, objet);         break;
    case 'mode-production':  construireDetailModeProduction(conteneur, objet);  break;
    case 'revolte':          construireDetailRevolte(conteneur, objet);         break;
  }
}

function trouverObjetParTypeEtId(type, id) {
  switch (type) {
    case 'bataille':         return (typeof batailles      !== 'undefined') ? batailles.find(b => b.id === id)      || null : null;
    case 'civilisation':     return (typeof civilisations  !== 'undefined') ? civilisations.find(c => c.id === id)  || null : null;
    case 'mode-production':  return (typeof modesProduction !== 'undefined') ? modesProduction.find(m => m.id === id) || null : null;
    case 'conflit':          return (typeof conflits       !== 'undefined') ? conflits.find(c => c.id === id)       || null : null;
    case 'revolte':          return (typeof revoltes       !== 'undefined') ? revoltes.find(r => r.id === id)       || null : null;
    default:                 return null;
  }
}

function creerEnteteDetailMulti(objet, labelType) {
  const entete = el('header', 'detail-entete');
  entete.appendChild(el('div', 'detail-multi-type', labelType));
  const debut = objet.dateAfficheeDebut || objet.dateAffichee || String(objet.dateDebut || '');
  const fin   = objet.dateAfficheeFin   || String(objet.dateFin || '');
  const periode = (debut && fin && debut !== fin) ? `${debut} – ${fin}` : (debut || fin);
  if (periode) entete.appendChild(el('div', 'detail-multi-periode', periode));
  entete.appendChild(el('h1', 'detail-entete__titre', objet.nom));
  return entete;
}

function construireDetailCivilisation(conteneur, objet) {
  conteneur.innerHTML = '';
  const entete = creerEnteteDetailMulti(objet, 'Civilisation');
  const lieuEl = el('div', 'detail-entete__lieu',
    `⚑ ${objet.region}${objet.capitale ? ' — Capitale : ' + objet.capitale : ''}`);
  entete.appendChild(lieuEl);

  const corps     = el('div', 'detail-corps');
  const principal = el('div', 'detail-principal');
  principal.appendChild(creerSectionDetail('Présentation', objet.description));
  principal.appendChild(creerSectionDetail('Mode de production', nomModeProductionDepuisId(objet.modeProduction)));
  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

function construireDetailConflit(conteneur, objet) {
  conteneur.innerHTML = '';
  const entete = creerEnteteDetailMulti(objet, 'Conflit');

  const corps     = el('div', 'detail-corps');
  const principal = el('div', 'detail-principal');

  // Bloc belligérants adapté au nouveau schema (belligerantsA / belligerantsB)
  const secBell = creerSectionDetail('Belligérants', null);
  const bloc    = el('div', 'detail-belligerants');
  const coteA   = el('div', 'belligerant__nom', objet.belligerantsA);
  const vsEl    = el('div', 'vs-separateur', 'VS');
  vsEl.setAttribute('aria-hidden', 'true');
  const coteB   = el('div', 'belligerant__nom', objet.belligerantsB);
  bloc.append(coteA, vsEl, coteB);
  secBell.appendChild(bloc);
  principal.appendChild(secBell);

  principal.appendChild(creerSectionDetail('Déroulement', objet.description));
  principal.appendChild(creerSectionDetail('Analyse — lutte des classes', objet.analyseClasses));

  // Batailles liées
  if (objet.batailles && objet.batailles.length > 0) {
    const secLiees = el('section', 'detail-batailles-liees');
    secLiees.appendChild(el('h2', 'detail-batailles-liees__titre', 'Batailles de ce conflit'));
    const ul = el('ul', 'detail-batailles-liees__liste');
    objet.batailles.forEach(idBat => {
      const info  = infoBatailleDepuisId(idBat);
      const li    = el('li');
      const lienB = el('a', 'detail-batailles-liees__lien', `${info.nom} — ${info.date}`);
      lienB.href  = `bataille.html?id=${echapper(idBat)}`;
      li.appendChild(lienB);
      ul.appendChild(li);
    });
    secLiees.appendChild(ul);
    principal.appendChild(secLiees);
  }

  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

function construireDetailModeProduction(conteneur, objet) {
  conteneur.innerHTML = '';
  const entete = creerEnteteDetailMulti(objet, 'Mode de production');
  entete.appendChild(el('div', 'detail-entete__lieu', `⚑ ${objet.region}`));

  const corps     = el('div', 'detail-corps');
  const principal = el('div', 'detail-principal');
  principal.appendChild(creerSectionDetail('Définition', objet.definition));
  principal.appendChild(creerSectionDetail('Analyse', objet.analyse));
  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

function construireDetailRevolte(conteneur, objet) {
  conteneur.innerHTML = '';
  const entete = creerEnteteDetailMulti(objet, 'Révolte');
  entete.appendChild(el('div', 'detail-entete__lieu',
    `⚑ ${objet.lieu}${objet.meneur ? ' — Meneur : ' + objet.meneur : ''}`));

  const corps     = el('div', 'detail-corps');
  const principal = el('div', 'detail-principal');
  principal.appendChild(creerSectionDetail('Présentation', objet.description));
  principal.appendChild(creerSectionDetail('Analyse — lutte des classes', objet.analyseClasses));
  corps.appendChild(principal);
  conteneur.append(entete, corps);
}

/** Affiche un message 404 élégant dans le conteneur donné. */
function afficherErreurIntrouvable(conteneur, titre, id) {
  conteneur.innerHTML = '';
  const erreur = el('div', 'page-erreur');
  const code   = el('div', 'page-erreur__code', '404');
  code.setAttribute('aria-hidden', 'true');
  const msg = el('p', 'page-erreur__titre', titre);
  const detail = el('p', 'page-erreur__message',
    id ? `Aucun élément ne correspond à l'identifiant « ${id} ».`
       : 'Aucun identifiant n\'a été fourni dans l\'URL.');
  const retour = el('a', 'btn-retour');
  retour.href = 'index.html';
  const fleche = el('span', 'btn-retour__fleche', '←');
  fleche.setAttribute('aria-hidden', 'true');
  retour.appendChild(fleche);
  retour.appendChild(document.createTextNode(' Retour à l\'accueil'));
  erreur.append(code, msg, detail, retour);
  conteneur.appendChild(erreur);
}

/* ============================================================
   POINT D'ENTRÉE — Routage par data-page
   Détecte la page courante et initialise la logique correspondante.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  switch (page) {
    case 'modes-production': initModesProduction(); break;
    case 'civilisations':    initCivilisations();   break;
    case 'conflits':         initConflits();        break;
    case 'revoltes':         initRevoltes();        break;
    case 'detail':           afficherPageDetail();  break;
    case 'detail-multi':     afficherPageDetailMulti(); break;
    // 'accueil' : page statique, aucune initialisation requise
  }
});
