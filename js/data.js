// data.js — Données des batailles et conflits historiques
// Chaque entrée respecte le schéma défini dans CLAUDE.md

const batailles = [
  {
    id: "marathon-490",
    nom: "Bataille de Marathon",
    date: -490,
    dateAffichee: "490 av. J.-C.",
    lieu: "Marathon, Attique (Grèce)",
    conflit: "Guerres médiques — Première invasion perse",
    belligerants: {
      a: "Athènes & Platées",
      b: "Empire perse (Datis & Artapherne)"
    },
    vainqueur: "Athènes",
    pertes: "~6 400 Perses, ~192 Athéniens",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 490 av. J.-C., une armée perse forte d'environ 25 000 hommes débarque dans la plaine de Marathon, à une quarantaine de kilomètres d'Athènes. Les stratèges athéniens, sous le commandement de Miltiade, décident d'attaquer sans attendre les renforts spartiates. Exploitant la mobilité de leur phalange, ils enfoncent les ailes perses et encerclent le centre ennemi. La bataille tourne à la déroute perse en quelques heures.",
    consequence:
      "La victoire athénienne stoppe la première invasion perse de la Grèce et renforce considérablement le prestige d'Athènes. Elle consolide la démocratie athénienne naissante et donne naissance au mythe du coureur Philippidès, ancêtre symbolique du marathon moderne."
  },

  {
    id: "thermopyles-480",
    nom: "Bataille des Thermopyles",
    date: -480,
    dateAffichee: "480 av. J.-C.",
    lieu: "Défilé des Thermopyles, Locride (Grèce)",
    conflit: "Guerres médiques — Deuxième invasion perse",
    belligerants: {
      a: "Coalition grecque (Sparte, Thespies, Thèbes…)",
      b: "Empire perse (Xerxès Ier)"
    },
    vainqueur: "Empire perse (victoire tactique)",
    pertes: "~20 000 Perses, ~4 000 Grecs dont 300 Spartiates",
    importance: "majeure",
    epoque: "antiquite",
    description:
      "Xerxès Ier envahit la Grèce avec une armée colossale estimée entre 100 000 et 300 000 hommes. Le roi spartiate Léonidas tient le défilé étroit des Thermopyles avec seulement 7 000 guerriers grecs pendant trois jours. Trahi par Éphialtès qui révèle un chemin de contournement aux Perses, Léonidas renvoie la majeure partie de ses troupes et reste avec ses 300 Spartiates pour couvrir la retraite. Ils combattent jusqu'au dernier.",
    consequence:
      "Défaite militaire mais victoire morale, les Thermopyles permettent l'évacuation d'Athènes et la concentration de la flotte grecque à Salamine. Le sacrifice de Léonidas devient un symbole universel de résistance héroïque face à la tyrannie."
  },

  {
    id: "salamine-480",
    nom: "Bataille de Salamine",
    date: -480,
    dateAffichee: "480 av. J.-C.",
    lieu: "Détroit de Salamine, Attique (Grèce)",
    conflit: "Guerres médiques — Deuxième invasion perse",
    belligerants: {
      a: "Ligue hellénique (Athènes, Sparte, Corinthe…)",
      b: "Empire perse (Xerxès Ier)"
    },
    vainqueur: "Ligue hellénique",
    pertes: "~40 trirèmes grecques, ~200 à 300 trirèmes perses",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Quelques semaines après les Thermopyles, la flotte grecque forte de 370 trirèmes affronte la flotte perse de plus de 600 navires dans l'étroit détroit de Salamine. Thémistocle, stratège athénien, attire la flotte ennemie dans ce goulet où sa supériorité numérique devient un handicap. Les trirèmes grecques, plus manœuvrables dans l'espace réduit, enfoncent et coulent les navires perses les uns après les autres sous les yeux de Xerxès, assis sur son trône au bord de la rive.",
    consequence:
      "La destruction de sa flotte prive Xerxès de sa ligne de ravitaillement et le force à se retirer en Asie avec une grande partie de son armée. La victoire navale de Salamine sauve la Grèce et marque le tournant décisif des Guerres médiques."
  },

  {
    id: "platees-479",
    nom: "Bataille de Platées",
    date: -479,
    dateAffichee: "479 av. J.-C.",
    lieu: "Platées, Béotie (Grèce)",
    conflit: "Guerres médiques — Deuxième invasion perse",
    belligerants: {
      a: "Coalition grecque (Sparte, Athènes, Corinthe…)",
      b: "Empire perse (Mardonios)"
    },
    vainqueur: "Coalition grecque",
    pertes: "~1 360 Grecs, ~40 000 à 50 000 Perses (estimations très variables)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Au printemps 479 av. J.-C., le général perse Mardonios hiverne en Grèce avec une armée de 100 000 à 300 000 hommes. Une coalition grecque de 80 000 soldats, dont l'élite de la phalange spartiate commandée par le régent Pausanias, lui fait face près de Platées. Après plusieurs semaines d'escarmouches et de manœuvres, une méprise lors d'un repli grec déclenche la bataille. L'infanterie lourde grecque brise la cavalerie perse et tue Mardonios au combat.",
    consequence:
      "Dernière grande bataille terrestre des Guerres médiques sur le sol grec, Platées met fin définitivement à l'invasion perse. Combinée à la victoire navale de Mycale le même jour, elle assure l'indépendance des cités grecques et ouvre l'âge d'or d'Athènes."
  },

  {
    id: "gaugameles-331",
    nom: "Bataille de Gaugamèles",
    date: -331,
    dateAffichee: "331 av. J.-C.",
    lieu: "Gaugamèles, Mésopotamie (Irak actuel)",
    conflit: "Conquêtes d'Alexandre le Grand",
    belligerants: {
      a: "Macédoine & alliés grecs (Alexandre le Grand)",
      b: "Empire perse achéménide (Darios III)"
    },
    vainqueur: "Macédoine",
    pertes: "~500 Macédoniens, ~40 000 à 90 000 Perses (estimations)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Darios III rassemble une armée immense — peut-être 200 000 hommes, renforcée d'éléphants de guerre et de chars à faux — sur une plaine soigneusement aplanie près de Gaugamèles, pour maximiser l'impact de sa cavalerie. Alexandre, avec 47 000 hommes, attaque en oblique pour attirer la cavalerie perse sur son flanc droit, puis s'engouffre avec la cavalerie des Compagnons dans une brèche ouverte au centre. Il charge directement vers Darios, qui prend la fuite, déclenchant la débandade de son armée.",
    consequence:
      "La fuite de Darios III signe la fin de l'Empire perse achéménide. Alexandre s'empare de Babylone, Suse et Persépolis dans les mois suivants. Cette victoire ouvre la voie à la construction de l'un des plus grands empires de l'Antiquité, s'étendant de la Grèce à l'Inde."
  }
];
