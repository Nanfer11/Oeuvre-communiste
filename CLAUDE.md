# Projet : Histoire des Batailles & Conflits Mondiaux

## Vue d'ensemble

Webapp historique recensant les batailles et conflits majeurs de l'histoire mondiale. Interface en HTML/CSS/JavaScript pur, sans framework ni dépendance externe.

**Langue de travail : français** (code, commentaires, messages, contenu).

## Structure du projet

```
histoire-batailles/
├── index.html        # Page principale — liste et recherche des batailles
├── bataille.html     # Page détail d'une bataille
├── css/
│   └── style.css     # Feuille de style unique
└── js/
    ├── data.js       # Données des batailles (tableau d'objets JS)
    └── app.js        # Logique applicative (filtres, navigation, rendu DOM)
```

## Stack technique

- **HTML5** sémantique (pas de framework)
- **CSS3** pur (pas de Tailwind, Bootstrap ou autre)
- **JavaScript** vanilla ES6+ (pas de React, Vue, jQuery)
- Aucune dépendance npm, aucun bundler, aucun fichier de build

## Design : "Historique Moderne"

Le style est sombre et élégant, évocateur des archives et manuscrits anciens.

### Palette de couleurs

```css
--couleur-fond:        #0d0d0d;   /* Noir profond */
--couleur-surface:     #1a1a1a;   /* Surface des cartes */
--couleur-bordure:     #2e2e2e;   /* Bordures subtiles */
--couleur-accent:      #c9a84c;   /* Or ancien — couleur principale */
--couleur-accent-2:    #8b0000;   /* Rouge sang — couleur secondaire */
--couleur-texte:       #e8e0d0;   /* Parchemin clair */
--couleur-texte-dim:   #7a7060;   /* Texte atténué */
```

### Typographie

- Titres : serif élégant (ex. `'Playfair Display'`, `Georgia`)
- Corps : sans-serif lisible (ex. `'Source Sans Pro'`, `system-ui`)
- Taille de base : 16px, interligne 1.6

### Principes visuels

- Fond sombre dominant, contenu mis en valeur par contraste
- Bordures dorées (`--couleur-accent`) pour les éléments importants
- Effets subtils : ombres portées, légères textures, séparateurs ornementaux
- Cartes avec effet hover (légère élévation + bordure dorée)
- Pas d'animations excessives — sobriété et élégance

## Données (`js/data.js`)

Chaque bataille est un objet avec cette structure :

```js
{
  id: "marathon-490",          // slug unique kebab-case
  nom: "Bataille de Marathon",
  date: -490,                  // année (négatif = av. J.-C.)
  dateAffichee: "490 av. J.-C.",
  lieu: "Marathon, Grèce",
  conflit: "Guerres médiques",
  belligerants: {
    a: "Athènes & Platées",
    b: "Empire perse"
  },
  vainqueur: "Athènes",
  pertes: "~6 400 Perses, ~192 Athéniens",
  importance: "majeure",       // "majeure" | "notable" | "décisive"
  epoque: "antiquite",         // voir époques ci-dessous
  description: "...",          // paragraphe court
  consequence: "..."           // impact historique
}
```

### Époques disponibles

| Clé | Label affiché |
|-----|---------------|
| `antiquite` | Antiquité |
| `moyen-age` | Moyen Âge |
| `moderne` | Époque moderne |
| `contemporaine` | Époque contemporaine |
| `xxe` | XXe siècle |

## Comportement attendu

### `index.html`
- Affiche toutes les batailles sous forme de cartes filtrables
- Filtres : époque, importance, recherche textuelle (nom, lieu, conflit)
- Tri : par date, par nom
- Clic sur une carte → navigation vers `bataille.html?id=<slug>`

### `bataille.html`
- Lit le paramètre `?id=` dans l'URL
- Affiche le détail complet de la bataille
- Bouton retour vers `index.html`
- Si l'ID est inconnu : message d'erreur élégant

## Conventions de code

- **Commentaires en français**
- Nommage des variables/fonctions en **camelCase français** autant que possible (`afficherBatailles`, `filtrerParEpoque`)
- Sélecteurs CSS en **kebab-case français** (`.carte-bataille`, `.filtre-epoque`)
- IDs HTML en **kebab-case** (`.liste-batailles`, `#champ-recherche`)
- Pas de `var` — utiliser `const` et `let`
- Fonctions courtes et à responsabilité unique
- Pas de `console.log` laissés dans le code final

## Ce qu'il ne faut pas faire

- Ne pas introduire de framework JS ou CSS
- Ne pas créer de fichiers supplémentaires sans raison explicite
- Ne pas utiliser `innerHTML` avec des données non assainies
- Ne pas modifier la structure de fichiers définie ci-dessus
- Ne pas ajouter de couleurs vives ou de design "moderne/flat" qui casserait l'atmosphère historique
