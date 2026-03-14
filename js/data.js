// data.js — Données des batailles et conflits historiques
// Chaque entrée respecte le schéma défini dans CLAUDE.md

const batailles = [
  {
    id: "marathon-490",
    type: "bataille",
    dateDebut: -490,
    dateFin: -490,
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
    type: "bataille",
    dateDebut: -480,
    dateFin: -480,
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
    type: "bataille",
    dateDebut: -480,
    dateFin: -480,
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
    type: "bataille",
    dateDebut: -479,
    dateFin: -479,
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
    id: "granique-334",
    type: "bataille",
    dateDebut: -334,
    dateFin: -334,
    nom: "Bataille du Granique",
    date: -334,
    dateAffichee: "334 av. J.-C.",
    lieu: "Granique, Anatolie (Turquie actuelle)",
    conflit: "Conquêtes d'Alexandre le Grand",
    belligerants: {
      a: "Macédoine & alliés grecs (Alexandre le Grand, ~35 000 hommes)",
      b: "Satrapes perses (~40 000 hommes)"
    },
    vainqueur: "Macédoine",
    pertes: "~25 Macédoniens de la Cavalerie des Compagnons, ~1 000 cavaliers perses",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 334 av. J.-C., Alexandre le Grand franchit l'Hellespont et pénètre en Asie avec une armée d'environ 35 000 hommes. Les satrapes perses d'Anatolie, forts d'une cavalerie nombreuse, lui barrent la route sur les rives du fleuve Granique. Contre l'avis de son général Parménion, Alexandre attaque immédiatement à la tête de sa cavalerie des Compagnons, traversant le fleuve sous les projectiles ennemis. Il se distingue personnellement au combat, recevant un coup de hache que son ami Clitos pare in extremis. La cavalerie macédonienne enfonce les lignes perses et met l'ennemi en fuite.",
    consequence:
      "Première grande victoire d'Alexandre en Asie, le Granique ouvre les portes de l'Anatolie. La plupart des cités grecques d'Ionie se soumettent sans résistance. Cette bataille démontre la supériorité tactique de la cavalerie macédonienne sur les forces perses et pose les fondations de la conquête de l'Empire achéménide."
  },

  {
    id: "issos-333",
    type: "bataille",
    dateDebut: -333,
    dateFin: -333,
    nom: "Bataille d'Issos",
    date: -333,
    dateAffichee: "333 av. J.-C.",
    lieu: "Issos, Cilicie (Turquie actuelle)",
    conflit: "Conquêtes d'Alexandre le Grand",
    belligerants: {
      a: "Macédoine & alliés grecs (Alexandre le Grand)",
      b: "Empire perse achéménide (Darios III, ~100 000 hommes)"
    },
    vainqueur: "Macédoine",
    pertes: "~450 Macédoniens, ~10 000 à 20 000 Perses",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 333 av. J.-C., Alexandre affronte pour la première fois le Grand Roi Darios III en personne sur les rives du golfe d'Issos, dans un défilé côtier qui annule l'avantage numérique perse. Darios III dispose d'une armée estimée à plus de 100 000 hommes. Alexandre répète sa tactique du Granique : la cavalerie des Compagnons enfonce l'aile gauche perse, puis oblique vers le centre pour charger directement en direction du char royal. Darios III, voyant sa garde personnelle submergée, prend la fuite, abandonnant sur le champ de bataille sa mère, sa femme et ses filles.",
    consequence:
      "La fuite de Darios III livre à Alexandre le contrôle de la Syrie et ouvre la route vers l'Égypte. La capture de la famille royale perse donne à Alexandre un précieux outil diplomatique. Cette victoire révèle la fragilité intérieure de l'Empire achéménide et convainc de nombreuses cités phéniciennes de se soumettre sans combattre."
  },

  {
    id: "gaugameles-331",
    type: "bataille",
    dateDebut: -331,
    dateFin: -331,
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
  },

  {
    id: "porte-persienne-330",
    type: "bataille",
    dateDebut: -330,
    dateFin: -330,
    nom: "Bataille de la Porte Persienne",
    date: -330,
    dateAffichee: "330 av. J.-C.",
    lieu: "Montagnes Zagros, Perse (Iran actuel)",
    conflit: "Conquêtes d'Alexandre le Grand",
    belligerants: {
      a: "Macédoine (Alexandre le Grand)",
      b: "Perse (satrape Ariobarzane, ~40 000 hommes)"
    },
    vainqueur: "Macédoine",
    pertes: "Pertes macédoniennes légères, quasi-totalité des défenseurs perses",
    importance: "notable",
    epoque: "antiquite",
    description:
      "En 330 av. J.-C., le satrape Ariobarzane fortifie le col montagneux de la Porte Persienne dans les monts Zagros pour barrer à Alexandre la route vers Persépolis et ses trésors. Avec environ 40 000 hommes, il inflige d'abord une retraite humiliante aux Macédoniens qui tentent une attaque frontale. Alexandre contourne alors le verrou par un chemin de montagne signalé par un prisonnier local, et prend les défenseurs à revers au cours d'une manœuvre nocturne. Ariobarzane tente une percée désespérée avec quelques cavaliers mais périt dans la bataille.",
    consequence:
      "La prise de la Porte Persienne ouvre la route vers Persépolis, cœur symbolique de l'Empire perse. Alexandre s'empare de l'immense trésor royal accumulé par les Achéménides, mettant fin au financement de toute résistance perse organisée. L'incendie du palais de Persépolis, délibéré ou accidentel, marque la destruction symbolique de la puissance achéménide."
  },

  {
    id: "hydaspe-326",
    type: "bataille",
    dateDebut: -326,
    dateFin: -326,
    nom: "Bataille de l'Hydaspe",
    date: -326,
    dateAffichee: "326 av. J.-C.",
    lieu: "Rives de l'Hydaspe, Pendjab (Pakistan actuel)",
    conflit: "Conquêtes d'Alexandre le Grand — Campagne des Indes",
    belligerants: {
      a: "Macédoine (Alexandre le Grand)",
      b: "Royaume de Paurava (Roi Poros, ~30 000 fantassins, 200 éléphants)"
    },
    vainqueur: "Macédoine",
    pertes: "~310 Macédoniens, ~12 000 à 23 000 soldats de Poros",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 326 av. J.-C., Alexandre affronte sur les rives du fleuve Hydaspe (actuel Jhelum) le roi indien Poros, qui dispose de quelque 200 éléphants de guerre formant une barrière terrifiante pour la cavalerie macédonienne. Alexandre trompe Poros sur le point de traversée en multipliant les feintes, puis franchit le fleuve en crue de nuit avec une partie de ses troupes. La bataille est acharnée : les éléphants sèment la panique avant d'être maîtrisés par les javelots et les sarissai. Poros combat jusqu'au bout et n'est capturé que blessé, impressionnant tellement Alexandre que ce dernier le remet à la tête de son royaume en tant qu'allié.",
    consequence:
      "Dernière grande victoire d'Alexandre, l'Hydaspe marque la limite orientale de ses conquêtes. Épuisés et refusant d'aller plus loin, ses soldats se mutinent sur les rives de l'Hyphase. Alexandre est contraint de faire demi-tour, ne pouvant atteindre le sous-continent indien. Il meurt à Babylone en 323 av. J.-C. sans avoir désigné de successeur, laissant un empire immense voué à la fragmentation."
  },

  // --- Guerre du Péloponnèse (431-404 av. J.-C.) ---

  {
    id: "potidee-432",
    type: "bataille",
    dateDebut: -432,
    dateFin: -432,
    nom: "Siège de Potidée",
    date: -432,
    dateAffichee: "432–429 av. J.-C.",
    lieu: "Potidée, Macédoine (Grèce actuelle)",
    conflit: "Guerre du Péloponnèse — Phase archidamique",
    belligerants: {
      a: "Athènes (Callias & Archestratos)",
      b: "Potidée (colonie corinthienne) & Corinthe"
    },
    vainqueur: "Athènes",
    pertes: "Lourdes des deux côtés sur trois ans de siège",
    importance: "notable",
    epoque: "antiquite",
    description:
      "En 432 av. J.-C., Potidée, cité tributaire d'Athènes mais fondée par Corinthe, se révolte contre l'hégémonie athénienne avec le soutien de Corinthe et de la Macédoine. Athènes envoie une force expéditionnaire qui bat l'armée corinthienne en rase campagne puis investit la cité. Le siège dure trois ans, épuisant considérablement les finances athéniennes. Potidée finit par capituler en 429 faute de vivres, ses habitants obtenant l'autorisation de partir.",
    consequence:
      "Le siège de Potidée constitue le déclencheur officiel de la Guerre du Péloponnèse. Il ruine l'alliance entre Athènes et Corinthe, pousse cette dernière à convaincre Sparte de déclarer la guerre, et illustre la brutalité de l'impérialisme athénien sur ses alliés."
  },

  {
    id: "pylos-425",
    type: "bataille",
    dateDebut: -425,
    dateFin: -425,
    nom: "Bataille de Pylos et Sphactérie",
    date: -425,
    dateAffichee: "425 av. J.-C.",
    lieu: "Pylos & île de Sphactérie, Messénie (Grèce actuelle)",
    conflit: "Guerre du Péloponnèse — Phase archidamique",
    belligerants: {
      a: "Athènes (Démos thène & Cléon)",
      b: "Sparte (Epitadas)"
    },
    vainqueur: "Athènes",
    pertes: "~128 Spartiates capturés (dont 120 Spartiates de plein droit), pertes athéniennes légères",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 425 av. J.-C., le stratège Démosthène fortifie le promontoire de Pylos sur la côte messéni enne, en plein cœur du territoire spartiate. Sparte réagit en envoyant 420 hoplites occuper l'île voisine de Sphactérie pour couper le ravitaillement athénien. La flotte athénienne bloque alors l'île et affame les Spartiates. Malgré leur réputation d'invincibilité, les hoplites spartiates se rendent après 72 jours de blocus — un événement jugé impensable dans tout le monde grec.",
    consequence:
      "La capture de 120 Spartiates de plein droit (les Spartiates purs) renverse le rapport de force : Sparte, craignant leur exécution, renonce à envahir l'Attique. Athènes dispose d'un gage inestimable. L'événement brise le mythe d'invincibilité des hoplites de Sparte et constitue le sommet de la puissance athénienne dans le conflit."
  },

  {
    id: "syracuse-413",
    type: "bataille",
    dateDebut: -413,
    dateFin: -413,
    nom: "Désastre de l'expédition de Syracuse",
    date: -413,
    dateAffichee: "415–413 av. J.-C.",
    lieu: "Syracuse, Sicile (Italie actuelle)",
    conflit: "Guerre du Péloponnèse — Guerre indirecte",
    belligerants: {
      a: "Athènes (Nicias & Alcibiade, puis Démosthène)",
      b: "Syracuse & Sparte (Gylippe)"
    },
    vainqueur: "Syracuse",
    pertes: "~200 trirèmes athéniennes détruites, plus de 50 000 hommes tués ou réduits en esclavage",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 415 av. J.-C., Athènes lance une expédition colossale contre Syracuse, cité alliée de Sparte, avec 134 trirèmes et 27 000 hommes. Après un début prometteur, la campagne s'enlise : Alcibiade est rappelé puis passe à l'ennemi, Nicias hésite à se retirer malgré l'arrivée de renforts spartiates. En 413, la flotte athénienne est détruite dans le Grand Port de Syracuse. Tentant de fuir par terre, l'armée est encerclée dans le lit de l'Assinaro et anéantie. Les survivants meurent en masse dans les carrières de pierre où ils sont emprisonnés.",
    consequence:
      "Le désastre de Syracuse est le plus grand revers militaire d'Athènes. La perte de 200 navires et de plus de 50 000 hommes saigne à blanc sa puissance navale et financière. La catastrophe déclenche la révolution oligarchique de 411 (gouvernement des Quatre-Cents) et marque le début du déclin irréversible de la domination athénienne."
  },

  {
    id: "aigos-potamos-405",
    type: "bataille",
    dateDebut: -405,
    dateFin: -405,
    nom: "Bataille d'Aigos Potamos",
    date: -405,
    dateAffichee: "405 av. J.-C.",
    lieu: "Aigos Potamos, Hellespont (Turquie actuelle)",
    conflit: "Guerre du Péloponnèse — Guerre de Décélie et d'Ionie",
    belligerants: {
      a: "Sparte (Lysandre)",
      b: "Athènes (Conon & Philoclès)"
    },
    vainqueur: "Sparte",
    pertes: "~170 trirèmes athéniennes capturées ou détruites, 3 000 à 4 000 prisonniers athéniens exécutés",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 405 av. J.-C., la flotte athénienne de 180 trirèmes mouille à Aigos Potamos, sur la rive européenne de l'Hellespont, face à la flotte spartiate de Lysandre. Pendant quatre jours, Lysandre refuse le combat, attendant que les équipages athéniens se dispersent pour fourrager. Le cinquième jour, profitant de l'absence de discipline athénienne, il attaque à l'improviste et capture 170 trirèmes en quelques heures, leurs équipages à terre. Le stratège athénien Philoclès et 3 000 prisonniers sont exécutés.",
    consequence:
      "La destruction de sa flotte prive Athènes de toute capacité à importer du grain, vitale pour nourrir la population. Assiégée par mer et par terre, Athènes capitule en 404 av. J.-C. La Guerre du Péloponnèse se conclut par la démolition des Longs Murs, la dissolution de la Ligue de Délos et l'installation du régime des Trente Tyrans, imposé par Sparte."
  },

  // --- Hégémonies post-Péloponnèse ---

  {
    id: "leuctres-371",
    type: "bataille",
    dateDebut: -371,
    dateFin: -371,
    nom: "Bataille de Leuctres",
    date: -371,
    dateAffichee: "371 av. J.-C.",
    lieu: "Leuctres, Béotie (Grèce actuelle)",
    conflit: "Guerre de Béotie — Hégémonie thébaine",
    belligerants: {
      a: "Thèbes & Ligue béotienne (Épaminondas)",
      b: "Sparte & Ligue du Péloponnèse (Cléombrotos Ier)"
    },
    vainqueur: "Thèbes",
    pertes: "~400 Spartiates tués (dont 700 Spartiates de plein droit sur 1 000 présents), pertes thébaines légères",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 371 av. J.-C., Épaminondas révolutionne l'art de la guerre grec en brisant la convention de la bataille en ligne. Plutôt que d'aligner la phalange de façon homogène, il concentre l'essentiel de sa puissance sur son aile gauche — le Bataillon Sacré de 300 guerriers d'élite thébains — formé en colonne profonde de 50 rangs. L'aile gauche thébaine, renforcée en masse et en élan, s'abat sur l'aile droite spartiate où se trouvent les meilleurs combattants, y compris le roi Cléombrotos, qui périt dans la mêlée.",
    consequence:
      "Leuctres brise définitivement le mythe d'invincibilité de Sparte et fait de Thèbes la première puissance grecque. La perte de 400 Spartiates de plein droit — une fraction irremplaçable d'une caste de plus en plus exsangue — affaiblit durablement Sparte. L'oblique thébaine d'Épaminondas influencera l'art militaire jusqu'à la tactique napoléonienne."
  },

  {
    id: "mantinee-362",
    type: "bataille",
    dateDebut: -362,
    dateFin: -362,
    nom: "Bataille de Mantinée",
    date: -362,
    dateAffichee: "362 av. J.-C.",
    lieu: "Mantinée, Arcadie (Grèce actuelle)",
    conflit: "Guerres d'hégémonie grecque",
    belligerants: {
      a: "Thèbes & alliés béotiens (Épaminondas)",
      b: "Sparte, Athènes & Mantinée (coalition)"
    },
    vainqueur: "Thèbes (victoire à la Pyrrhus)",
    pertes: "Lourdes des deux côtés, mort d'Épaminondas",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 362 av. J.-C., Épaminondas engage une nouvelle fois la technique de l'attaque oblique à Mantinée contre une coalition réunissant Sparte, Athènes et plusieurs cités d'Arcadie. La phalange thébaine enfonce une fois encore l'aile adverse, dispersant la coalition. Mais au moment de la victoire, Épaminondas est mortellement blessé par un javelot. Sachant qu'il va mourir, il demande qu'on lui retire le fer du corps seulement après qu'on lui a confirmé que les Thébains ont remporté la bataille.",
    consequence:
      "Thèbes remporte la bataille mais perd son seul génie militaire. Sans Épaminondas, la cité ne peut maintenir son hégémonie. L'historien Xénophon résume la situation : la Grèce entière sort de Mantinée dans le désordre et la confusion. Ce vide de puissance prépare l'expansion macédonienne de Philippe II une décennie plus tard."
  },

  // --- Antiquité proche-orientale ---

  {
    id: "qadesh-1274",
    type: "bataille",
    dateDebut: -1274,
    dateFin: -1274,
    nom: "Bataille de Qadesh",
    date: -1274,
    dateAffichee: "~1274 av. J.-C.",
    lieu: "Qadesh, Syrie (Syrie actuelle)",
    conflit: "Guerres égypto-hittites",
    belligerants: {
      a: "Égypte (Ramsès II, ~20 000 hommes)",
      b: "Empire hittite (Mouwatalli II, ~37 000 hommes)"
    },
    vainqueur: "Indécis",
    pertes: "Très lourdes des deux côtés, chiffres non établis",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Vers 1274 av. J.-C., Ramsès II mène son armée dans la plaine de l'Oronte, en Syrie, pour reprendre la ville de Qadesh aux Hittites. Trompé par de faux déserteurs, il s'avance avec une seule division dans un piège tendu par le roi hittite Mouwatalli II : la cavalerie hittite surgit et encercle la division royale égyptienne. Ramsès, d'après sa propre propagande, charge seul au milieu des ennemis jusqu'à l'arrivée de renforts. La bataille reste sans vainqueur clair, les deux armées se retirant en revendiquant la victoire.",
    consequence:
      "Malgré son caractère indécis, Qadesh mène, quinze ans plus tard, à la signature du premier traité de paix bilatéral conservé par l'écrit (~1259 av. J.-C.) entre Ramsès II et le roi hittite Hattušili III. Ce document diplomatique, rédigé en akkadien, est considéré comme l'ancêtre des traités internationaux modernes."
  },

  {
    id: "sabis-57",
    type: "bataille",
    dateDebut: -57,
    dateFin: -57,
    nom: "Bataille du Sabis",
    date: -57,
    dateAffichee: "57 av. J.-C.",
    lieu: "Rivière Sabis, Gaule Belgique (Belgique actuelle)",
    conflit: "Guerre des Gaules (César)",
    belligerants: {
      a: "Rome (Jules César, ~30 000 légionnaires)",
      b: "Confédération des Nerviens (Boduognat)"
    },
    vainqueur: "Rome",
    pertes: "Très lourdes chez les Nerviens (~60 000 tués selon César), pertes romaines significatives",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 57 av. J.-C., lors de la Guerre des Gaules, César marche contre les Nerviens, peuple belge réputé pour sa rigueur guerrière. Alors que les légions établissent leur camp sur les rives de la Sabis (la Sambre), les Nerviens jaillissent des forêts en embuscade et frappent avant que les soldats romains aient eu le temps de se former en ordre de bataille. L'armée romaine est bousculée et plusieurs légions sont au bord de la rupture. César saisit lui-même un bouclier et se jette dans la mêlée pour rétablir le moral de ses troupes. L'arrivée de la XIIIe légion en renfort retourne la situation.",
    consequence:
      "La quasi-destruction des Nerviens — César rapporte qu'il ne resta que 500 combattants valides sur 60 000 — marque la soumission de la Gaule Belgique. La bataille illustre la capacité des légions romaines à se ressaisir sous pression extrême et consolide l'autorité de César sur l'ensemble de la Gaule septentrionale."
  },

  {
    id: "champs-catalauniques-451",
    type: "bataille",
    dateDebut: 451,
    dateFin: 451,
    nom: "Bataille des Champs Catalauniques",
    date: 451,
    dateAffichee: "451 ap. J.-C.",
    lieu: "Plaines de Champagne, Gaule (France actuelle)",
    conflit: "Invasions hunniques",
    belligerants: {
      a: "Coalition romano-wisigothique (Aetius & Théodoric Ier)",
      b: "Huns & alliés (Attila)"
    },
    vainqueur: "Coalition romano-wisigothique",
    pertes: "Estimations antiques : 165 000 à 300 000 morts des deux côtés (très exagérées)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 451, Attila, roi des Huns, envahit la Gaule avec une armée composite d'environ 200 000 hommes. Le général romain Aetius, «dernier des Romains», forge une coalition exceptionnelle réunissant légionnaires romains et Wisigoths — pourtant anciens ennemis. Les deux armées s'affrontent dans les vastes plaines de Champagne. Le roi wisigoth Théodoric Ier périt dans la bataille. Attila, voyant la victoire lui échapper, se réfugie dans un camp retranché de chariots. Aetius renonce à l'assaut final, préférant conserver les Huns comme contrepoids aux Wisigoths.",
    consequence:
      "Seule défaite terrestre majeure d'Attila, les Champs Catalauniques stoppent la pénétration hunnique en Occident. Bien qu'Attila ravage l'Italie l'année suivante, il meurt en 453 sans avoir conquis Rome. La bataille est souvent présentée comme celle qui «sauva» l'Europe occidentale de la domination hunnique."
  },

  // --- Guerres des Diadoques (322–281 av. J.-C.) ---

  {
    id: "salamine-chypre-306",
    type: "bataille",
    dateDebut: -306,
    dateFin: -306,
    nom: "Bataille de Salamine de Chypre",
    date: -306,
    dateAffichee: "306 av. J.-C.",
    lieu: "Salamine de Chypre (Chypre actuelle)",
    conflit: "Guerres des Diadoques — Deuxième guerre",
    belligerants: {
      a: "Antigone le Borgne & Démétrios Poliorcète",
      b: "Ptolémée Ier d'Égypte"
    },
    vainqueur: "Antigone le Borgne",
    pertes: "~100 navires ptoléméens capturés, ~8 000 soldats ptoléméens faits prisonniers",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 306 av. J.-C., Démétrios Poliorcète — fils d'Antigone le Borgne — affronte la flotte de Ptolémée Ier dans les eaux de Salamine de Chypre. Ptolémée dispose d'environ 140 navires contre 108 pour Démétrios, mais ce dernier exploite la désorganisation adverse lors du débarquement des troupes de transport ptoléméennes. Dans un combat naval acharné, la flotte ptoléméenne est défaite et une grande partie de l'armée de terre est capturée.",
    consequence:
      "La victoire permet à Antigone de s'emparer de Chypre et d'en chasser Ptolémée. Fort de ce succès, Antigone se proclame roi (basileus), obligeant les autres Diadoques — Ptolémée, Cassandre, Lysimaque et Séleucos — à prendre à leur tour le titre royal. C'est la fin officielle de l'empire uni d'Alexandre et la naissance des royaumes hellénistiques."
  },

  {
    id: "ipsos-301",
    type: "bataille",
    dateDebut: -301,
    dateFin: -301,
    nom: "Bataille d'Ipsos",
    date: -301,
    dateAffichee: "301 av. J.-C.",
    lieu: "Ipsos, Phrygie (Turquie actuelle)",
    conflit: "Guerres des Diadoques — Quatrième guerre",
    belligerants: {
      a: "Coalition : Séleucos Ier, Lysimaque, Cassandre, Ptolémée",
      b: "Antigone le Borgne & Démétrios Poliorcète"
    },
    vainqueur: "Coalition des Diadoques",
    pertes: "Mort d'Antigone le Borgne au combat (~80 ans), lourdes pertes des deux côtés",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 301 av. J.-C., Antigone le Borgne, le plus puissant des Diadoques qui rêvait de reconstituer l'empire d'Alexandre, affronte une coalition de quatre rivaux sur la plaine d'Ipsos en Phrygie. Antigone aligne environ 70 000 fantassins et 75 éléphants de guerre ; la coalition en dispose de 400, fournis par Séleucos qui les a obtenus du roi indien Chandragupta. La cavalerie de Démétrios poursuit trop loin ses adversaires, et les éléphants de Séleucos coupent sa route de retour. Antigone, abandonné, périt sous les javelots ennemis.",
    consequence:
      "La mort d'Antigone met fin à l'espoir de toute réunification de l'empire d'Alexandre. Les vainqueurs se partagent ses territoires : Séleucos obtient la Syrie et l'Asie centrale, Lysimaque l'Anatolie, Cassandre la Macédoine. Le monde hellénistique se consolide autour de trois grands royaumes rivaux — séleucide, lagide et antigonide."
  },

  {
    id: "couroupedion-281",
    type: "bataille",
    dateDebut: -281,
    dateFin: -281,
    nom: "Bataille de Couroupédion",
    date: -281,
    dateAffichee: "281 av. J.-C.",
    lieu: "Couroupédion, Lydie (Turquie actuelle)",
    conflit: "Guerres des Épigones",
    belligerants: {
      a: "Séleucos Ier Nicator",
      b: "Lysimaque (roi de Macédoine & de Thrace)"
    },
    vainqueur: "Séleucos Ier",
    pertes: "Mort de Lysimaque au combat, désintégration de son armée",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 281 av. J.-C., les deux derniers grands Diadoques survivants — Séleucos Ier et Lysimaque — s'affrontent dans la plaine de Couroupédion en Lydie pour le contrôle de l'Anatolie et de la Macédoine. Lysimaque, qui régnait sur un empire s'étendant de la Thrace à l'Asie Mineure, est tué au combat lors d'une bataille dont les détails restent mal connus des sources antiques. Ses troupes se dispersent ou rejoignent le camp de Séleucos.",
    consequence:
      "La mort de Lysimaque laisse Séleucos seul maître du monde hellénistique oriental. Il se prépare à traverser en Macédoine pour parachever la réunification, mais il est assassiné peu après par Ptolémée Kéraunos. Couroupédion clôt définitivement l'ère des Diadoques et marque la stabilisation des royaumes hellénistiques qui domineront la Méditerranée orientale jusqu'à la conquête romaine."
  },

  // --- Empire romain ---

  {
    id: "teutoburg-9",
    type: "bataille",
    dateDebut: 9,
    dateFin: 9,
    nom: "Bataille de la forêt de Teutoburg",
    date: 9,
    dateAffichee: "Septembre 9 ap. J.-C.",
    lieu: "Forêt de Teutoburg, Germanie (Allemagne actuelle)",
    conflit: "Guerres de Rome en Germanie",
    belligerants: {
      a: "Germanie (Arminius, coalition de tribus germaniques, ~20 000 guerriers)",
      b: "Rome (Publius Quinctilius Varus, 3 légions + auxiliaires, ~20 000 hommes)"
    },
    vainqueur: "Germanie",
    pertes: "~15 000 à 20 000 Romains tués ou capturés (quasi-anéantissement)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En septembre de l'an 9, Arminius — chef chérusque éduqué à Rome et officier dans l'armée romaine — attire les trois légions de Varus dans un piège dans les forêts marécageuses de Germanie. Étiré sur plusieurs kilomètres de marche dans un terrain impraticable pour la formation en ligne, le convoi romain est attaqué simultanément sur toute sa longueur par des guerriers germaniques jaillissant de la forêt. La pluie diluvienne annule la supériorité de l'artillerie romaine. Varus se suicide. Les trois aigles légionnaires sont capturées — déshonneur suprême pour Rome.",
    consequence:
      "La destruction des 17e, 18e et 19e légions marque la fin de l'expansion romaine au-delà du Rhin. Auguste, dit-on, répétait «Varus, rends-moi mes légions !». Rome renonce définitivement à la conquête de la Germanie libre, fixant la frontière au Rhin. La forêt de Teutoburg devient le mythe fondateur de l'identité germanique, redécouvert et magnifié par le nationalisme allemand du XIXe siècle."
  },

  {
    id: "actium-31",
    type: "bataille",
    dateDebut: -31,
    dateFin: -31,
    nom: "Bataille d'Actium",
    date: -31,
    dateAffichee: "2 septembre 31 av. J.-C.",
    lieu: "Actium, Épire (Grèce actuelle)",
    conflit: "Guerres civiles romaines — Antoine et Octave",
    belligerants: {
      a: "Octave (futur Auguste) & Agrippa (~400 navires)",
      b: "Marc Antoine & Cléopâtre (~500 navires)"
    },
    vainqueur: "Octave",
    pertes: "~5 000 hommes d'Antoine tués, une grande partie de la flotte détruite ou capturée",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Le 2 septembre 31 av. J.-C., la flotte de Marc Antoine et Cléopâtre VII d'Égypte affronte celle d'Octave et d'Agrippa dans le golfe d'Ambracie, au large d'Actium. Après plusieurs semaines de manœuvres et d'épidémies qui déciment les équipages d'Antoine, la bataille navale tourne au désastre : Cléopâtre prend la fuite avec 60 navires egyptiens chargés du trésor royal. Antoine l'abandonne et s'enfuit à son tour. Sans combat acharné, la flotte restante se rend. Antoine et Cléopâtre se suicident l'année suivante à Alexandrie.",
    consequence:
      "Actium met fin à un siècle de guerres civiles romaines et livre le monde méditerranéen à Octave, qui prend le nom d'Auguste. Le Sénat lui confère en 27 av. J.-C. les pleins pouvoirs : c'est la naissance de l'Empire romain. L'Égypte ptolémaïque, dernier des royaumes hellénistiques, est annexée. La Pax Romana qui s'ensuit durera deux siècles."
  },

  // --- Guerres puniques ---

  {
    id: "cannes-216",
    type: "bataille",
    dateDebut: -216,
    dateFin: -216,
    nom: "Bataille de Cannes",
    date: -216,
    dateAffichee: "2 août 216 av. J.-C.",
    lieu: "Cannes, Apulie (Italie actuelle)",
    conflit: "Deuxième guerre punique",
    belligerants: {
      a: "Carthage (Hannibal Barca, ~50 000 hommes)",
      b: "Rome (consuls Varron & Paul-Émile, ~86 000 hommes)"
    },
    vainqueur: "Carthage",
    pertes: "~5 700 Carthaginois, ~47 500 Romains tués",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Le 2 août 216 av. J.-C., Hannibal Barca, qui a franchi les Alpes avec son armée et ses éléphants de guerre pour envahir l'Italie, affronte à Cannes la plus grande armée jamais levée par Rome. Hannibal place délibérément ses troupes les plus faibles au centre et ses meilleurs soldats sur les ailes. Rome attaque le centre, qui recule lentement en se creusant, attirant toujours plus de légionnaires dans le piège. Les ailes carthaginoises referment alors leurs mâchoires et encerclent complètement l'armée romaine. Les soldats romains sont si serrés qu'ils ne peuvent même plus lever le bras pour frapper.",
    consequence:
      "Cannes reste le paradigme tactique de l'encerclement et de la destruction, étudié dans toutes les académies militaires jusqu'à nos jours. Elle coûta à Rome plus de 20 % de ses citoyens en âge de porter les armes. Pourtant, Rome refusa de négocier et releva la tête. La manœuvre d'encerclement de Cannes inspira directement le plan Schlieffen de l'état-major allemand en 1914."
  },

  {
    id: "zama-202",
    type: "bataille",
    dateDebut: -202,
    dateFin: -202,
    nom: "Bataille de Zama",
    date: -202,
    dateAffichee: "202 av. J.-C.",
    lieu: "Zama, Numidie (Tunisie actuelle)",
    conflit: "Deuxième guerre punique",
    belligerants: {
      a: "Rome (Scipion l'Africain, ~35 000 hommes)",
      b: "Carthage (Hannibal Barca, ~45 000 hommes + 80 éléphants)"
    },
    vainqueur: "Rome",
    pertes: "~1 500 Romains, ~20 000 Carthaginois tués",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 202 av. J.-C., Scipion, qui a porté la guerre en Afrique pour obliger Hannibal à quitter l'Italie, affronte le plus grand stratège de l'Antiquité sur le sol même de Carthage. Hannibal lance ses 80 éléphants en tête mais Scipion a entraîné ses légions à ouvrir des couloirs dans leurs rangs pour laisser passer les bêtes. La cavalerie numide alliée de Rome encercle ensuite l'infanterie carthaginoise. Pour la première et unique fois de sa carrière, Hannibal est battu.",
    consequence:
      "Zama met fin à la Deuxième guerre punique et oblige Carthage à abandonner ses possessions en dehors d'Afrique, céder sa flotte et payer une indemnité de guerre colossale. La victoire établit Rome comme première puissance méditerranéenne. Cinquante ans plus tard, Carthage sera rasée lors de la Troisième guerre punique (146 av. J.-C.)."
  },

  // --- Moyen Âge ---

  {
    id: "jerusalem-1099",
    type: "bataille",
    dateDebut: 1099,
    dateFin: 1099,
    nom: "Siège de Jérusalem",
    date: 1099,
    dateAffichee: "7 juin – 15 juillet 1099",
    lieu: "Jérusalem (Israël / Palestine actuelle)",
    conflit: "Première Croisade",
    belligerants: {
      a: "Croisés (Godefroy de Bouillon, Raymond de Saint-Gilles, ~12 000 hommes)",
      b: "Fatimides d'Égypte (gouverneur Iftikhar ad-Dawla, ~20 000 défenseurs)"
    },
    vainqueur: "Croisés",
    pertes: "Milliers de défenseurs et civils massacrés, pertes croisées modérées",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 7 juin 1099, après trois ans de marche depuis l'Europe, les croisés de la Première Croisade atteignent Jérusalem avec une armée épuisée et réduite à environ 12 000 combattants. Ils investissent la ville mais manquent de bois pour construire des tours de siège. Des navires génois échoués à Jaffa fournissent le bois nécessaire. Le 15 juillet, la tour d'assaut de Godefroy de Bouillon prend pied sur les remparts au nord. Une fois les portes ouvertes, les croisés se livrent à un massacre général de la population — juive, musulmane et même chrétienne —, teintant la conquête d'un bain de sang qui marquera durablement les relations entre l'Occident chrétien et le monde islamique.",
    consequence:
      "La prise de Jérusalem aboutit à la création des États latins d'Orient (royaume de Jérusalem, principauté d'Antioche, comtés d'Édesse et de Tripoli). Godefroy de Bouillon refuse le titre de roi et prend celui d'Avoué du Saint-Sépulcre. Ces États, fragiles enclaves chrétiennes en terre d'islam, survivront moins de deux siècles avant leur reconquête par Saladin (1187) puis les Mamelouks (1291)."
  },

  {
    id: "hattin-1187",
    type: "bataille",
    dateDebut: 1187,
    dateFin: 1187,
    nom: "Bataille de Hattin",
    date: 1187,
    dateAffichee: "4 juillet 1187",
    lieu: "Cornes de Hattin, Galilée (Israël actuel)",
    conflit: "Croisades — Reconquête de Jérusalem par Saladin",
    belligerants: {
      a: "Ayyoubides (Saladin, ~30 000 hommes)",
      b: "Royaume de Jérusalem (Guy de Lusignan, ~20 000 hommes)"
    },
    vainqueur: "Saladin",
    pertes: "~17 000 croisés tués ou capturés, dont le roi Guy de Lusignan et la Vraie Croix",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 4 juillet 1187, Saladin attire l'armée du royaume de Jérusalem dans une marche épuisante à travers la Galilée en pleine canicule, coupant les croisés de leurs points d'eau. Assoiffés et harcelés par la cavalerie légère ayyoubide, les croisés tentent de forcer un passage vers le lac de Tibériade. Sur le plateau volcanique des Cornes de Hattin, l'armée chrétienne est encerclée. L'infanterie, incapable de défendre la cavalerie lourde, se réfugie sur une colline. La cavalerie est détruite. Le roi Guy de Lusignan est capturé, ainsi que la relique de la Vraie Croix, symbole suprême des croisades.",
    consequence:
      "En moins de trois mois, Saladin reconquiert Jérusalem (2 octobre 1187) et la quasi-totalité du royaume, retournant ainsi les résultats de la Première Croisade. La chute de Jérusalem provoque le lancement de la Troisième Croisade (1189-1192) menée par Richard Cœur de Lion, qui ne parvient pas à reprendre la ville mais obtient un accès des pèlerins chrétiens."
  },

  {
    id: "constantinople-1204",
    type: "bataille",
    dateDebut: 1204,
    dateFin: 1204,
    nom: "Sac de Constantinople",
    date: 1204,
    dateAffichee: "12–13 avril 1204",
    lieu: "Constantinople (Istanbul actuelle)",
    conflit: "Quatrième Croisade — Sac de Constantinople",
    belligerants: {
      a: "Croisés & Vénitiens (Baudouin de Flandre & Dandolo)",
      b: "Empire byzantin (Alexis V Doukas)"
    },
    vainqueur: "Croisés",
    pertes: "Plusieurs milliers de Byzantins, pillage systématique de la ville",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "La Quatrième Croisade, détournée de son objectif originel (l'Égypte) par les intérêts commerciaux vénitiens et les intrigues dynastiques byzantines, prend d'assaut Constantinople — ville chrétienne alliée — les 12 et 13 avril 1204. Pendant trois jours, les croisés pillent la plus grande et la plus riche ville d'Europe : reliques, œuvres d'art, bibliothèques et trésors sont emportés vers l'Occident. Le vieux doge Dandolo, quasi aveugle et nonagénaire, est l'un des premiers à escalader les remparts.",
    consequence:
      "Le sac de Constantinople constitue un traumatisme irréparable dans les relations entre catholicisme et orthodoxie. L'Empire latin de Constantinople (1204-1261) remplace l'empire byzantin, profondément affaibli pour la suite. La rupture ouvre la voie aux conquêtes ottomanes du XIVe siècle. La ville ne sera jamais totalement relevée de ce sac avant sa prise définitive par les Ottomans en 1453."
  },

  {
    id: "hastings-1066",
    type: "bataille",
    dateDebut: 1066,
    dateFin: 1066,
    nom: "Bataille d'Hastings",
    date: 1066,
    dateAffichee: "14 octobre 1066",
    lieu: "Hastings, Sussex (Angleterre actuelle)",
    conflit: "Conquête normande de l'Angleterre",
    belligerants: {
      a: "Normandie (Guillaume le Conquérant, ~7 000 à 8 000 hommes)",
      b: "Angleterre saxonne (Harold Godwinson, ~7 000 hommes)"
    },
    vainqueur: "Normandie",
    pertes: "~4 000 à 5 000 Anglais dont Harold, ~2 000 à 3 000 Normands",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 14 octobre 1066, Harold Godwinson, roi d'Angleterre depuis quelques mois, affronte Guillaume, duc de Normandie, sur la colline de Senlac près d'Hastings. Harold vient d'anéantir au nord le roi norvégien Harald Hardrada à Stamford Bridge, et marche en hâte vers le sud sans attendre ses renforts. Son armée de housecarls et de fyrd tient d'abord solidement sur la crête. La feinte de retraite normande attire une partie des Saxons hors de leur ligne. Harold est tué en fin de journée — la tradition dit d'une flèche dans l'œil — et son armée se désintègre.",
    consequence:
      "Guillaume est couronné roi d'Angleterre à Westminster le 25 décembre 1066. La conquête normande redistribue les terres saxonnes à la nouvelle noblesse normande, transforme la langue, le droit et la culture anglaises, et relie définitivement l'Angleterre au continent européen. Elle forge la spécificité politique anglaise, avec une monarchie centralisée sur un territoire dont les fiefs relèvent directement du roi."
  },

  {
    id: "las-navas-tolosa-1212",
    type: "bataille",
    dateDebut: 1212,
    dateFin: 1212,
    nom: "Bataille de Las Navas de Tolosa",
    date: 1212,
    dateAffichee: "16 juillet 1212",
    lieu: "Las Navas de Tolosa, Andalousie (Espagne actuelle)",
    conflit: "Reconquista — Guerre contre les Almohades",
    belligerants: {
      a: "Coalition chrétienne (Castille, Aragon, Navarre, Portugal, croisés)",
      b: "Empire almohade (calife Muhammad al-Nasir)"
    },
    vainqueur: "Coalition chrétienne",
    pertes: "~2 000 chrétiens, ~100 000 Almohades (chiffres très exagérés dans les sources)",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "En juillet 1212, les rois Alphonse VIII de Castille, Pierre II d'Aragon et Sanche VII de Navarre unissent leurs forces contre l'empire almohade qui domine al-Andalus. Le calife Muhammad al-Nasir dispose d'une armée immense protégée par un camp retranché, ses gardes noirs enchaînés entre eux pour marquer leur résolution. Un berger local guide la coalition chrétienne par un col secret pour contourner les défenses almohades. La charge des chevaliers brise le centre almohade et le calife prend la fuite.",
    consequence:
      "Las Navas de Tolosa marque la rupture définitive de la puissance almohade en péninsule Ibérique. Les décennies suivantes voient la conquête de Cordoue (1236), Séville (1248) et Valence (1238). La Reconquista s'accélère, ne laissant subsister que le royaume de Grenade jusqu'en 1492."
  },

  {
    id: "bouvines-1214",
    type: "bataille",
    dateDebut: 1214,
    dateFin: 1214,
    nom: "Bataille de Bouvines",
    date: 1214,
    dateAffichee: "27 juillet 1214",
    lieu: "Bouvines, Flandre (France actuelle)",
    conflit: "Guerre franco-anglaise — Coalition contre Philippe Auguste",
    belligerants: {
      a: "France (Philippe II Auguste)",
      b: "Coalition : Otton IV, Jean sans Terre d'Angleterre, Ferrand de Flandre"
    },
    vainqueur: "France",
    pertes: "~170 chevaliers de la coalition faits prisonniers, pertes modérées des deux côtés",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 27 juillet 1214, Philippe Auguste, roi de France, affronte une coalition formidable : l'empereur germanique Otton IV au nord, Jean sans Terre au sud (battu à la Roche-aux-Moines quelques jours plus tôt). L'armée française, plus petite, est prise en tenaille mais Philippe contre-attaque avec sa cavalerie. Jeté à bas de son cheval et presque tué au milieu de la mêlée, le roi se relève et renverse la situation. Les principaux chefs coalisés sont capturés ou mis en fuite.",
    consequence:
      "Bouvines est le fondement de la monarchie française : Philippe Auguste brise la puissance des Plantagenêts sur le continent et consolide le domaine royal. En Angleterre, la défaite de Jean sans Terre précipite la révolte des barons et la signature de la Magna Carta (1215). En Allemagne, la chute d'Otton IV ouvre la voie à Frédéric II Hohenstaufen."
  },

  {
    id: "grunwald-1410",
    type: "bataille",
    dateDebut: 1410,
    dateFin: 1410,
    nom: "Bataille de Grunwald",
    date: 1410,
    dateAffichee: "15 juillet 1410",
    lieu: "Grunwald, Prusse (Pologne actuelle)",
    conflit: "Grande Guerre — Pologne-Lituanie contre l'Ordre Teutonique",
    belligerants: {
      a: "Pologne-Lituanie (Ladislas II Jagellon, ~39 000 hommes)",
      b: "Ordre Teutonique (grand maître Ulrich von Jungingen, ~27 000 hommes)"
    },
    vainqueur: "Pologne-Lituanie",
    pertes: "~8 000 Polonais-Lituaniens, ~8 000 Teutoniques dont le grand maître",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 15 juillet 1410, l'armée polono-lituanienne de Ladislas II Jagellon affronte les chevaliers de l'Ordre Teutonique dans la plaine de Grunwald, en Prusse. L'Ordre, fondé au XIIIe siècle pour christianiser les peuples baltes, est devenu une puissance militaire et territoriale menaçant la Pologne et la Lituanie. La cavalerie légère lituanienne simule une retraite, attirant les chevaliers lourds teutoniques hors de leurs positions. Le grand maître Ulrich von Jungingen charge personnellement pour redresser la situation et périt dans la mêlée.",
    consequence:
      "La destruction de l'armée de l'Ordre Teutonique à Grunwald marque le début de son déclin irréversible. La paix de Thorn (1411), puis la seconde paix de Thorn (1466), démembrent progressivement ses territoires au profit de la Pologne. Grunwald reste l'une des batailles les plus symboliques de l'identité nationale polonaise."
  },

  // --- Expansion mongole ---

  {
    id: "ain-jalut-1260",
    type: "bataille",
    dateDebut: 1260,
    dateFin: 1260,
    nom: "Bataille d'Ain Jalut",
    date: 1260,
    dateAffichee: "3 septembre 1260",
    lieu: "Ain Jalut, Galilée (Israël / Palestine actuelle)",
    conflit: "Expansion mongole — Invasion du Proche-Orient",
    belligerants: {
      a: "Mamelouks d'Égypte (sultan Qutuz & Baybars, ~20 000 hommes)",
      b: "Mongols Ilkhanides (Kitbuqa, ~20 000 hommes)"
    },
    vainqueur: "Mamelouks",
    pertes: "Lourdes des deux côtés, Kitbuqa tué",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "En 1260, les Mongols de Hülagü Khan viennent de ravager Bagdad (1258), détruisant le califat abbasside et ses bibliothèques, puis de s'emparer d'Alep et de Damas. L'empire mongol semble irrésistible. Le sultan mamelouk Qutuz et son général Baybars tendent un piège à l'avant-garde mongole de Kitbuqa dans la plaine de Jezréel, en Galilée. Baybars feint une retraite pour attirer les Mongols dans une embuscade, puis des troupes cachées dans les collines fondent sur eux de toutes parts.",
    consequence:
      "Ain Jalut est la première grande défaite militaire des Mongols et marque la limite définitive de leur expansion vers le sud-ouest. Elle préserve l'Égypte, le Maghreb et l'Afrique subsaharienne de la conquête mongole. Baybars, qui fait assassiner Qutuz après la victoire, devient sultan et fonde la puissance mamelouke qui repoussera aussi les croisés (chute d'Acre, 1291)."
  },

  // --- Fin du Moyen Âge & débuts de l'époque moderne ---

  {
    id: "constantinople-1453",
    type: "bataille",
    dateDebut: 1453,
    dateFin: 1453,
    nom: "Chute de Constantinople",
    date: 1453,
    dateAffichee: "29 mai 1453",
    lieu: "Constantinople (Istanbul actuelle)",
    conflit: "Expansion ottomane — Fin de l'Empire byzantin",
    belligerants: {
      a: "Empire ottoman (Mehmed II, ~80 000 hommes + 70 canons)",
      b: "Empire byzantin (Constantin XI Paléologue, ~7 000 défenseurs)"
    },
    vainqueur: "Empire ottoman",
    pertes: "~4 000 Ottomans, ~4 000 Byzantins dont l'Empereur Constantin XI",
    importance: "décisive",
    epoque: "moyen-age",
    description:
      "Le 29 mai 1453, après 53 jours de siège, le sultan ottoman Mehmed II s'empare de Constantinople grâce aux canons géants de l'ingénieur hongrois Urbain, qui pulvérisent les murailles millénaires théodosiennes. Une ruse décisive consiste à faire porter par voie terrestre 70 navires ottomans par-dessus la colline de Galata pour les mettre à flot dans la Corne d'Or, contournant les chaînes de fer protégeant le port. L'assaut final est lancé à l'aube. L'Empereur Constantin XI périt dans la mêlée, refusant de fuir. Mehmed entre à cheval dans la basilique Sainte-Sophie.",
    consequence:
      "La chute de Constantinople met fin à l'Empire byzantin, héritier direct de Rome orientale depuis onze siècles. Elle est souvent présentée comme la frontière symbolique entre le Moyen Âge et l'époque moderne. L'exode des érudits grecs vers l'Italie contribue à la Renaissance. Pour les historiens ottomans, elle marque le sommet de la puissance de Mehmed II, désormais surnommé «le Conquérant»."
  },

  {
    id: "marignan-1515",
    type: "bataille",
    dateDebut: 1515,
    dateFin: 1515,
    nom: "Bataille de Marignan",
    date: 1515,
    dateAffichee: "13–14 septembre 1515",
    lieu: "Marignan, Lombardie (Italie actuelle)",
    conflit: "Guerres d'Italie — Cinquième guerre d'Italie",
    belligerants: {
      a: "France (François Ier, ~30 000 hommes + artillerie)",
      b: "Confédération suisse (~22 000 mercenaires)"
    },
    vainqueur: "France",
    pertes: "~5 000 Français, ~10 000 Suisses",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Les 13 et 14 septembre 1515, à peine monté sur le trône, François Ier franchit les Alpes et affronte les redoutables mercenaires suisses — réputés invincibles depuis des décennies — dans la plaine de Marignan, au sud de Milan. La bataille dure deux jours, l'une des plus longues et des plus meurtrières de l'époque. Les Suisses résistent en carré serré de piques mais l'artillerie française, magistralement déployée, décime leurs rangs. L'arrivée de la cavalerie vénitienne alliée au deuxième jour brise leur résistance.",
    consequence:
      "Marignan donne à François Ier le contrôle du Milanais et lui vaut le surnom de «roi-chevalier». La défaite suisse aboutit à la «Paix perpétuelle» de Fribourg (1516), par laquelle la Suisse renonce à l'expansion territoriale et fournit désormais des mercenaires à la France — une relation qui dure jusqu'à nos jours avec la Garde suisse pontificale. L'artillerie française confirme sa supériorité sur l'infanterie des piques."
  },

  {
    id: "pavie-1525",
    type: "bataille",
    dateDebut: 1525,
    dateFin: 1525,
    nom: "Bataille de Pavie",
    date: 1525,
    dateAffichee: "24 février 1525",
    lieu: "Pavie, Lombardie (Italie actuelle)",
    conflit: "Guerres d'Italie — Sixième guerre d'Italie",
    belligerants: {
      a: "Saint-Empire & Espagne (Charles Quint / Pescara, ~22 000 hommes)",
      b: "France (François Ier, ~28 000 hommes)"
    },
    vainqueur: "Saint-Empire & Espagne",
    pertes: "~2 000 Impériaux, ~10 000 Français dont la crème de la noblesse",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 24 février 1525, François Ier assiège Pavie avec une armée franco-suisse quand l'armée impériale tente de briser le siège de nuit. La cavalerie française s'engage dans une forêt qui l'isole de son infanterie suisse. Au petit matin, les arquebusiers espagnols decimènt les chevaliers français à couvert, démontrant la supériorité de l'infanterie légère armée à feu sur la cavalerie lourde médiévale. François Ier, qui se bat au premier rang, est capturé lors de la débâcle.",
    consequence:
      "Pavie consacre la fin de la chevalerie comme force décisive sur le champ de bataille. François Ier, emprisonné à Madrid, est contraint de signer le traité de Madrid (1526) qui l'oblige à renoncer à toutes ses prétentions en Italie — traité qu'il répudie dès sa libération. La bataille marque la domination des Habsbourg sur l'Italie pour les deux siècles suivants."
  },

  {
    id: "lepante-1571",
    type: "bataille",
    dateDebut: 1571,
    dateFin: 1571,
    nom: "Bataille de Lépante",
    date: 1571,
    dateAffichee: "7 octobre 1571",
    lieu: "Golfe de Corinthe, Grèce",
    conflit: "Guerres ottomano-chrétiennes — Ligue Sainte",
    belligerants: {
      a: "Ligue Sainte (Don Juan d'Autriche : Espagne, Venise, États pontificaux, ~200 galères)",
      b: "Empire ottoman (Ali Pacha, ~230 galères)"
    },
    vainqueur: "Ligue Sainte",
    pertes: "~8 000 chrétiens, ~30 000 Ottomans (tués ou capturés), ~15 000 esclaves chrétiens libérés",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 7 octobre 1571, la plus grande bataille navale depuis l'Antiquité oppose la Ligue Sainte et la flotte ottomane dans le golfe de Lépante. Don Juan d'Autriche, fils bâtard de Charles Quint, place six galasses vénitiennes — sortes de cuirassés couverts de canons — en avant de sa ligne pour foudroyer les galères ottomanes avant le contact. Miguel de Cervantes, futur auteur de Don Quichotte, participe au combat et y perd l'usage de sa main gauche. La flotte ottomane est anéantie en quelques heures.",
    consequence:
      "Lépante brise le mythe d'invincibilité de la marine ottomane en Méditerranée occidentale. Les Ottomans reconstruisent pourtant une flotte en moins d'un an et reconquièrent Chypre, montrant les limites de cette victoire. Mais l'expansion ottomane vers l'ouest est définitivement stoppée. La bataille est célébrée dans toute l'Europe catholique comme une victoire de la chrétienté."
  },

  {
    id: "gravelines-1588",
    type: "bataille",
    dateDebut: 1588,
    dateFin: 1588,
    nom: "Défaite de l'Invincible Armada",
    date: 1588,
    dateAffichee: "8 août 1588",
    lieu: "Gravelines, Manche (France actuelle)",
    conflit: "Guerre anglo-espagnole (1585-1604)",
    belligerants: {
      a: "Angleterre (lord Howard & Francis Drake, ~130 navires légers)",
      b: "Espagne (duc de Médina Sidonia, 130 navires de l'Armada)"
    },
    vainqueur: "Angleterre",
    pertes: "~10 000 Espagnols (tempêtes incluses), ~63 navires perdus, pertes anglaises minimes",
    importance: "décisive",
    epoque: "moderne",
    description:
      "En août 1588, l'Invincible Armada espagnole de Philippe II, forte de 130 navires, remonte la Manche pour embarquer une armée d'invasion en Flandre et débarquer en Angleterre. La flotte anglaise, plus légère et maniable, harcèle les Espagnols sans se laisser accrocher. La nuit du 7 août, les Anglais lancent des brûlots dans la rade de Calais où l'Armada s'est ancrée. Les navires espagnols coupent leurs ancres et fuient en désordre. La bataille de Gravelines le 8 août disperse définitivement la formation. Les tempêtes de l'Atlantique nord achèvent le désastre lors du retour.",
    consequence:
      "L'échec de l'Armada stoppe net l'hégémonie espagnole sur les mers et marque l'émergence de la puissance navale anglaise. Elisabeth Ire peut poursuivre la réforme protestante sans craindre l'invasion catholique. La défaite espagnole ouvre la route aux colonisations anglaise et hollandaise en Amérique du Nord et en Asie, redessinant les empires mondiaux pour les deux siècles suivants."
  },

  // --- Guerre de Trente Ans ---

  {
    id: "breitenfeld-1631",
    type: "bataille",
    dateDebut: 1631,
    dateFin: 1631,
    nom: "Bataille de Breitenfeld",
    date: 1631,
    dateAffichee: "17 septembre 1631",
    lieu: "Breitenfeld, Saxe (Allemagne actuelle)",
    conflit: "Guerre de Trente Ans — Phase suédoise",
    belligerants: {
      a: "Suède & Saxe (Gustave II Adolphe, ~40 000 hommes)",
      b: "Ligue catholique & Empire (Tilly, ~35 000 hommes)"
    },
    vainqueur: "Suède & Saxe",
    pertes: "~5 000 Suédois-Saxons, ~12 000 à 20 000 Catholiques",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 17 septembre 1631, Gustave II Adolphe de Suède remporte sa première grande victoire en Allemagne contre le vieux maréchal Tilly, champion de la Contre-Réforme. L'armée suédoise, disciplinée et innovante, mêle mousquetaires et piquiers en brigades mixtes mobiles, soutenues par une artillerie légère qui peut se déplacer au rythme de l'infanterie — révolution tactique majeure. Quand les alliés saxons fuient devant la charge catholique, Gustave tient, contre-attaque et détruit méthodiquement l'armée impériale.",
    consequence:
      "Breitenfeld est le premier grand succès protestant depuis le début de la guerre en 1618. Elle redonne espoir aux princes protestants allemands et confirme Gustave Adolphe comme le plus grand capitaine de son temps. La Suède s'impose comme puissance majeure en Europe centrale. Gustave mourra l'année suivante à Lützen (1632) en gagnant une autre bataille, mais son système tactique révolutionne l'art de la guerre moderne."
  },

  // --- Guerre de Sept Ans & XVIIIe siècle ---

  {
    id: "fontenoy-1745",
    type: "bataille",
    dateDebut: 1745,
    dateFin: 1745,
    nom: "Bataille de Fontenoy",
    date: 1745,
    dateAffichee: "11 mai 1745",
    lieu: "Fontenoy, Pays-Bas autrichiens (Belgique actuelle)",
    conflit: "Guerre de Succession d'Autriche",
    belligerants: {
      a: "France (maréchal de Saxe, Louis XV présent, ~50 000 hommes)",
      b: "Coalition : Angleterre, Provinces-Unies, Autriche, Hanovre (~52 000 hommes)"
    },
    vainqueur: "France",
    pertes: "~7 000 Français, ~15 000 coalisés",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 11 mai 1745, le maréchal de Saxe, commandant l'armée française malgré la maladie qui le cloue dans une litière, défend des positions soigneusement préparées autour du village de Fontenoy. La garde anglaise franchit les lignes françaises en bon ordre, ouvrant une brèche. À cet instant critique, Louis XV refuse de se replier et laisse le maréchal agir. Celui-ci lâche ses réserves irlandaises — la Brigade irlandaise, exilés jacobites criant «Cuimhnígí ar Limerick !» (Souvenez-vous de Limerick !) — qui enfoncent la colonne anglaise à bout portant.",
    consequence:
      "Fontenoy est la plus grande victoire française du XVIIIe siècle avant Valmy. Elle permet la conquête des Pays-Bas autrichiens et renforce considérablement le prestige de Louis XV. Voltaire en fait l'éloge dans un poème. La bataille reste le symbole de la noblesse de l'armée d'Ancien Régime, juste avant que ses structures ne s'effondrent lors de la Révolution."
  },

  {
    id: "rossbach-1757",
    type: "bataille",
    dateDebut: 1757,
    dateFin: 1757,
    nom: "Bataille de Rossbach",
    date: 1757,
    dateAffichee: "5 novembre 1757",
    lieu: "Rossbach, Saxe (Allemagne actuelle)",
    conflit: "Guerre de Sept Ans",
    belligerants: {
      a: "Prusse (Frédéric II le Grand, ~22 000 hommes)",
      b: "France & Saint-Empire (Soubise & Hildburghausen, ~41 000 hommes)"
    },
    vainqueur: "Prusse",
    pertes: "~548 Prussiens, ~10 000 Franco-Impériaux (tués, blessés, prisonniers)",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 5 novembre 1757, Frédéric II affronte une armée franco-impériale deux fois supérieure en nombre. Voyant la coalition tenter un mouvement tournant, il lance en 90 minutes une contre-attaque foudroyante : sa cavalerie de Seydlitz charge en flanc l'armée ennemie encore en marche, tandis que son infanterie en ordre oblique frappe de face. L'armée coalisée, prise au dépourvu avant d'avoir achevé son déploiement, est mise en déroute en moins d'une heure et demie.",
    consequence:
      "Rossbach est l'une des victoires les plus éclatantes de Frédéric II et une humiliation cuisante pour la France. Elle consolide la réputation de la Prusse comme première puissance militaire terrestre et celle de Frédéric comme génie de la stratégie oblique. La bataille influencera directement la pensée de Napoléon et sera étudiée jusqu'à nos jours dans les écoles militaires."
  },

  {
    id: "plaines-abraham-1759",
    type: "bataille",
    dateDebut: 1759,
    dateFin: 1759,
    nom: "Bataille des Plaines d'Abraham",
    date: 1759,
    dateAffichee: "13 septembre 1759",
    lieu: "Plaines d'Abraham, Québec (Canada actuel)",
    conflit: "Guerre de Sept Ans — Campagne du Canada",
    belligerants: {
      a: "Grande-Bretagne (général James Wolfe)",
      b: "Nouvelle-France (marquis de Montcalm)"
    },
    vainqueur: "Grande-Bretagne",
    pertes: "~660 Britanniques dont Wolfe, ~644 Français dont Montcalm",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Dans la nuit du 12 au 13 septembre 1759, le général anglais Wolfe réussit le tour de force de hisser ses troupes par un sentier escarpé jusqu'aux hauteurs des Plaines d'Abraham, en amont de Québec. À l'aube, Montcalm, surpris, décide d'attaquer immédiatement plutôt d'attendre des renforts. Les régiments français avancent en désordre sous le feu des mousquets anglais, tirés en deux salves dévastatrices à bout portant. Wolfe et Montcalm sont tous deux mortellement blessés lors de la bataille.",
    consequence:
      "La chute de Québec entraîne celle de Montréal l'année suivante et, par le traité de Paris (1763), la cession de la Nouvelle-France à l'Angleterre. La bataille est un moment fondateur des identités canadienne et québécoise. La victoire britannique sur le continent nord-américain déplace le centre de gravité colonial vers les treize colonies qui se révolteront quinze ans plus tard."
  },

  // --- Époque moderne ---

  {
    id: "montagne-blanche-1620",
    type: "bataille",
    dateDebut: 1620,
    dateFin: 1620,
    nom: "Bataille de la Montagne Blanche",
    date: 1620,
    dateAffichee: "8 novembre 1620",
    lieu: "Montagne Blanche, Bohême (République tchèque actuelle)",
    conflit: "Guerre de Trente Ans — Phase bohémienne",
    belligerants: {
      a: "Ligue catholique & Empire (Tilly & Maximilien de Bavière)",
      b: "Bohême protestante (Frédéric V du Palatinat, «roi d'un hiver»)"
    },
    vainqueur: "Ligue catholique",
    pertes: "~4 000 bohémiens tués, ~700 catholiques",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 8 novembre 1620, deux ans après la Défenestration de Prague qui déclencha la Guerre de Trente Ans, l'armée catholique de Tilly et de Maximilien de Bavière écrase en moins d'une heure l'armée des États bohémiens sur le plateau de la Montagne Blanche, aux portes de Prague. Les troupes protestantes, mal commandées et peu motivées, cèdent presque sans résistance. Frédéric V du Palatinat, surnommé le «roi d'un hiver» pour son règne éphémère, s'enfuit en exil.",
    consequence:
      "La défaite bohémienne ouvre deux siècles de domination des Habsbourg sur la Bohême. La recatholicisation forcée, l'exécution des chefs de la révolte sur la place de la Vieille-Ville de Prague en 1621, et l'exil de la noblesse protestante reconfigurent durablement la société bohémienne. La bataille est vécue comme un traumatisme fondateur de la conscience nationale tchèque."
  },

  {
    id: "rocroi-1643",
    type: "bataille",
    dateDebut: 1643,
    dateFin: 1643,
    nom: "Bataille de Rocroi",
    date: 1643,
    dateAffichee: "19 mai 1643",
    lieu: "Rocroi, Ardennes (France actuelle)",
    conflit: "Guerre de Trente Ans — Guerre franco-espagnole",
    belligerants: {
      a: "France (duc d'Enghien, futur Grand Condé, ~23 000 hommes)",
      b: "Espagne (Francisco de Melo, ~26 000 hommes dont les Tercios)"
    },
    vainqueur: "France",
    pertes: "~2 000 Français, ~8 000 Espagnols tués ou capturés",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 19 mai 1643 — quatre jours après la mort de Louis XIII — le jeune duc d'Enghien, 21 ans, commande l'armée française face aux légendaires Tercios espagnols, réputés invincibles depuis plus d'un siècle. Enghien attaque dès l'aube avec une audace foudroyante : sa cavalerie écrase l'aile droite espagnole, puis effectue un grand tour pour frapper à revers l'infanterie espagnole. Les Tercios du centre résistent avec une bravoure impressionnante mais sont finalement détruits.",
    consequence:
      "Rocroi met fin au mythe de l'invincibilité de l'infanterie espagnole et consacre la France comme première puissance militaire d'Europe. La bataille est souvent présentée comme la fin de l'hégémonie militaire espagnole, amorcée depuis le règne de Charles Quint. Pour la France, elle préfigure la domination louisquatorzienne qui s'imposera avec les traités de Westphalie (1648)."
  },

  {
    id: "naseby-1645",
    type: "bataille",
    dateDebut: 1645,
    dateFin: 1645,
    nom: "Bataille de Naseby",
    date: 1645,
    dateAffichee: "14 juin 1645",
    lieu: "Naseby, Northamptonshire (Angleterre actuelle)",
    conflit: "Première Révolution anglaise — Première guerre civile",
    belligerants: {
      a: "Parlementaires — New Model Army (Thomas Fairfax & Oliver Cromwell)",
      b: "Royalistes (Charles Ier & prince Rupert)"
    },
    vainqueur: "Parlementaires",
    pertes: "~150 Parlementaires, ~1 000 Royalistes tués, ~5 000 prisonniers",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le 14 juin 1645, la toute nouvelle New Model Army parlementaire, réorganisée et disciplinée par Cromwell, affronte l'armée royaliste de Charles Ier à Naseby. La cavalerie de Cromwell (les Ironsides) dévaste l'aile gauche royaliste puis — contrairement aux habitudes de l'époque — pivote pour attaquer l'infanterie royaliste à revers. La cavalerie royaliste conduite par le prince Rupert s'est quant à elle perdue à piller le camp parlementaire. L'armée du roi est détruite en moins de trois heures.",
    consequence:
      "Naseby signe la fin militaire des Royalistes. Charles Ier se rend aux Écossais l'année suivante. La bataille marque le triomphe du New Model Army, première armée professionnelle et méritocratique d'Angleterre, instrument de la révolution bourgeoise. Elle mène directement à l'exécution du roi (1649) et à l'éphémère République cromwellienne."
  },

  // --- Première Guerre mondiale ---

  {
    id: "marne-1914",
    type: "bataille",
    dateDebut: 1914,
    dateFin: 1914,
    nom: "Bataille de la Marne",
    date: 1914,
    dateAffichee: "5–12 septembre 1914",
    lieu: "Vallée de la Marne, Île-de-France (France actuelle)",
    conflit: "Première Guerre mondiale — Front occidental",
    belligerants: {
      a: "France & Grande-Bretagne (Joffre & French, ~1 000 000 hommes)",
      b: "Allemagne (von Kluck & von Bülow, ~900 000 hommes)"
    },
    vainqueur: "France & Grande-Bretagne",
    pertes: "~250 000 Français, ~220 000 Allemands (tués, blessés, disparus)",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Début septembre 1914, l'armée allemande est à 40 kilomètres de Paris, appliquant le plan Schlieffen visant à encercler la France en six semaines. Le général Joffre décide d'une contre-offensive généralisée. Une brèche de 50 km s'ouvre entre les 1re et 2e armées allemandes. Le général Gallieni envoie en renfort 6 000 réservistes parisiens en taxis réquisitionnés — les célèbres «taxis de la Marne». Menacé d'encerclement, le commandant allemand donne l'ordre de retraite jusqu'à la rivière Aisne.",
    consequence:
      "La victoire de la Marne «sauve Paris» et brise définitivement le plan Schlieffen. L'Allemagne ne peut plus espérer une victoire rapide à l'Ouest. Les deux camps s'enterrent dans les tranchées lors de la «course à la mer», inaugurant quatre ans de guerre de position. La Marne est considérée comme la première grande décision stratégique de la guerre : elle condamne l'Allemagne à un conflit sur deux fronts qu'elle ne peut gagner."
  },

  {
    id: "somme-1916",
    type: "bataille",
    dateDebut: 1916,
    dateFin: 1916,
    nom: "Bataille de la Somme",
    date: 1916,
    dateAffichee: "1er juillet – 18 novembre 1916",
    lieu: "Vallée de la Somme, Picardie (France actuelle)",
    conflit: "Première Guerre mondiale — Front occidental",
    belligerants: {
      a: "Grande-Bretagne & France (Haig & Foch, ~1 500 000 hommes engagés)",
      b: "Allemagne (~1 000 000 hommes)"
    },
    vainqueur: "Indécis (gain territorial de ~12 km)",
    pertes: "~623 000 Britanniques et Français, ~465 000 Allemands (tués, blessés, prisonniers)",
    importance: "majeure",
    epoque: "xxe",
    description:
      "Le 1er juillet 1916, l'armée britannique lance la grande offensive de la Somme pour soulager Verdun. Après une semaine de bombardements censés avoir détruit toutes les défenses allemandes, 60 000 soldats britanniques avancent au pas vers les tranchées ennemies. Les Allemands, ressortis de leurs abris souterrains, fauchent les attaquants à la mitrailleuse : 57 470 pertes britanniques en une seule journée — le bilan le plus lourd de l'histoire de l'armée britannique. Le 15 septembre, les chars d'assaut (tanks) font leur première apparition au combat.",
    consequence:
      "La Somme ne perce jamais les lignes allemandes. Après 141 jours de combat, le gain territorial est de 12 kilomètres. La bataille devient le symbole de l'absurdité de la guerre d'usure et du sacrifice d'une génération. Elle marque néanmoins des innovations décisives : premier emploi des chars de combat, coordination inter-alliée, et développement des tactiques d'infiltration qui préfigurent les méthodes de 1918."
  },

  // --- Guerres napoléoniennes ---

  {
    id: "trafalgar-1805",
    type: "bataille",
    dateDebut: 1805,
    dateFin: 1805,
    nom: "Bataille de Trafalgar",
    date: 1805,
    dateAffichee: "21 octobre 1805",
    lieu: "Cap Trafalgar, Atlantique (Espagne actuelle)",
    conflit: "Guerres napoléoniennes — Troisième coalition",
    belligerants: {
      a: "Grande-Bretagne (amiral Nelson, 27 vaisseaux de ligne)",
      b: "France & Espagne (Villeneuve, 33 vaisseaux de ligne)"
    },
    vainqueur: "Grande-Bretagne",
    pertes: "~458 Britanniques tués dont Nelson, ~6 000 Franco-Espagnols (tués ou prisonniers), 20 navires capturés",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 21 octobre 1805, l'amiral Nelson engage la flotte franco-espagnole au large du cap Trafalgar avec une tactique révolutionnaire : au lieu d'une ligne de bataille parallèle, il lance ses 27 vaisseaux en deux colonnes perpendiculaires qui percent la ligne ennemie, la coupant en trois tronçons isolés. Le signal hissé avant la bataille — «L'Angleterre attend que chaque homme fasse son devoir» — entre dans la légende. Nelson, en uniforme couvert de décorations, est mortellement blessé par un tireur d'élite français depuis la hune du Redoutable.",
    consequence:
      "Trafalgar assure à la Grande-Bretagne la maîtrise des mers pour plus d'un siècle, rendant impossible toute invasion de l'île par Napoléon. C'est le pendant naval d'Austerlitz (remportée six semaines plus tard) : Napoléon domine l'Europe continentale, l'Angleterre domine les océans. Ce duopole de puissance structurera la géopolitique mondiale jusqu'à la Première Guerre mondiale."
  },

  {
    id: "iena-1806",
    type: "bataille",
    dateDebut: 1806,
    dateFin: 1806,
    nom: "Bataille d'Iéna-Auerstädt",
    date: 1806,
    dateAffichee: "14 octobre 1806",
    lieu: "Iéna & Auerstädt, Prusse (Allemagne actuelle)",
    conflit: "Guerres napoléoniennes — Quatrième coalition",
    belligerants: {
      a: "France (Napoléon Ier & maréchal Davout, ~120 000 hommes)",
      b: "Prusse (princes de Hohenloe & duc de Brunswick, ~130 000 hommes)"
    },
    vainqueur: "France",
    pertes: "~12 000 Français, ~38 000 Prussiens (tués, blessés, prisonniers)",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 14 octobre 1806, Napoléon écrase le prince de Hohenloe à Iéna pendant que le maréchal Davout, seul avec un seul corps de 27 000 hommes face au gros de l'armée prussienne (65 000 hommes) à Auerstädt, remporte seul une victoire encore plus éclatante. Les deux batailles simultanées désintègrent l'armée prussienne réputée la meilleure d'Europe depuis Frédéric le Grand. La capitulation s'ensuit à un rythme stupéfiant : forteresses réputées imprenable après forteresse.",
    consequence:
      "Iéna-Auerstädt anéantit la Prusse en quelques semaines. Berlin est occupée, la forteresse de Stettin se rend à 500 hussards. Cette défaite traumatise si profondément la Prusse qu'elle engendre les réformes de Scharnhorst et Gneisenau qui créeront l'armée prussienne moderne, fondée sur la conscription universelle et l'initiative des officiers — le futur modèle de toutes les armées occidentales."
  },

  {
    id: "fleurus-1794",
    type: "bataille",
    dateDebut: 1794,
    dateFin: 1794,
    nom: "Bataille de Fleurus",
    date: 1794,
    dateAffichee: "26 juin 1794",
    lieu: "Fleurus, Pays-Bas autrichiens (Belgique actuelle)",
    conflit: "Guerres de la Révolution française — Campagne de Flandre",
    belligerants: {
      a: "France révolutionnaire (Jourdan & Saint-Just, ~75 000 hommes)",
      b: "Coalition : Autriche & Pays-Bas (prince de Saxe-Cobourg, ~52 000 hommes)"
    },
    vainqueur: "France",
    pertes: "~5 000 Français, ~10 000 coalisés",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 26 juin 1794, l'armée française de Sambre-et-Meuse affronte la coalition austro-néerlandaise près de Fleurus. La bataille est notable pour l'utilisation par les Français de «l'Entreprenant», premier ballon d'observation militaire de l'histoire, qui permet de renseigner le commandement sur les mouvements ennemis. L'armée révolutionnaire, animée par la levée en masse décrétée en 1793, tient ses positions malgré une attaque concentrique de l'ennemi et contre-attaque victorieusement en fin de journée.",
    consequence:
      "Fleurus ouvre la route à la conquête des Pays-Bas autrichiens et à l'annexion de la rive gauche du Rhin par la France. Elle marque l'entrée de la France dans une phase d'expansion territoriale qui durera jusqu'à Waterloo (1815). L'utilisation du ballon d'observation inaugure une nouvelle ère de la reconnaissance aérienne militaire."
  },

  {
    id: "austerlitz-1805",
    type: "bataille",
    dateDebut: 1805,
    dateFin: 1805,
    nom: "Bataille d'Austerlitz",
    date: 1805,
    dateAffichee: "2 décembre 1805",
    lieu: "Austerlitz, Moravie (République tchèque actuelle)",
    conflit: "Guerres napoléoniennes — Troisième coalition",
    belligerants: {
      a: "France (Napoléon Ier, ~73 000 hommes)",
      b: "Autriche & Russie (empereurs François II & Alexandre Ier, ~85 000 hommes)"
    },
    vainqueur: "France",
    pertes: "~9 000 Français, ~36 000 austro-russes (tués, blessés, prisonniers)",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 2 décembre 1805 — premier anniversaire du sacre de Napoléon — les empereurs d'Autriche et de Russie cherchent à écraser la Grande Armée. Napoléon feint de laisser son aile droite vulnérable pour attirer l'ennemi à y concentrer ses forces. Quand la coalition abaisse ses troupes du Pratzen pour attaquer, le maréchal Soult monte au pas de charge et s'empare du plateau central, coupant l'armée en deux. L'aile gauche ennemie est rejetée sur les étangs glacés de Satschan, dont la glace se brise sous les boulets français.",
    consequence:
      "Austerlitz est considérée comme le chef-d'œuvre tactique de Napoléon. Elle met fin à la Troisième coalition, force l'Autriche à signer la paix de Presbourg et conduit à la dissolution du Saint-Empire romain germanique (1806). Napoléon est au sommet de sa puissance. La bataille reste le modèle absolu de la victoire par manœuvre dans la pensée militaire occidentale."
  },

  {
    id: "waterloo-1815",
    type: "bataille",
    dateDebut: 1815,
    dateFin: 1815,
    nom: "Bataille de Waterloo",
    date: 1815,
    dateAffichee: "18 juin 1815",
    lieu: "Waterloo, Pays-Bas du Sud (Belgique actuelle)",
    conflit: "Guerres napoléoniennes — Cent-Jours, Septième coalition",
    belligerants: {
      a: "France (Napoléon Ier, ~72 000 hommes)",
      b: "Coalition : Grande-Bretagne, Prusse, Pays-Bas (Wellington & Blücher, ~113 000 hommes)"
    },
    vainqueur: "Coalition",
    pertes: "~25 000 Français tués ou blessés + 8 000 prisonniers, ~22 000 coalisés",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 18 juin 1815, de retour de l'île d'Elbe pour les Cent-Jours, Napoléon attaque Wellington retranché sur une crête près de Waterloo avant l'arrivée des Prussiens de Blücher. Plusieurs assauts français sont repoussés, notamment l'attaque de la vieille garde en fin de journée. Quand Blücher surgit sur le flanc droit français avec ses 50 000 hommes, la panique se répand. L'armée française se désintègre en une déroute complète.",
    consequence:
      "Waterloo met fin définitivement à l'ère napoléonienne et à vingt-trois ans de guerres révolutionnaires et impériales. Napoléon abdique le 22 juin et est exilé à Sainte-Hélène, où il mourra en 1821. Le Congrès de Vienne recompose la carte de l'Europe sur les principes de la légitimité monarchique et de l'équilibre des puissances."
  },

  // --- Époque contemporaine ---

  {
    id: "valmy-1792",
    type: "bataille",
    dateDebut: 1792,
    dateFin: 1792,
    nom: "Bataille de Valmy",
    date: 1792,
    dateAffichee: "20 septembre 1792",
    lieu: "Valmy, Marne (France actuelle)",
    conflit: "Guerres de la Révolution française",
    belligerants: {
      a: "France révolutionnaire (Dumouriez & Kellermann, ~52 000 hommes)",
      b: "Prusse & Autriche (duc de Brunswick, ~34 000 hommes)"
    },
    vainqueur: "France",
    pertes: "~300 Français, ~184 Prussiens",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 20 septembre 1792, l'armée prussienne du duc de Brunswick — la meilleure d'Europe — avance vers Paris pour écraser la Révolution française. Face à elle, les volontaires révolutionnaires français, encore peu disciplinés, tiennent la crête de Valmy. Le général Kellermann brandit son chapeau au bout de son sabre et crie «Vive la Nation !», entraînant ses troupes dans un hourra qui stupéfie les Prussiens. Brunswick, craignant de trop grandes pertes, ordonne la retraite. Les canons français font le reste : leur précision dissuade toute attaque.",
    consequence:
      "Le lendemain de Valmy, la Convention nationale proclame la Première République française. Goethe, présent dans les rangs prussiens, note : «De ce lieu et de ce jour date une nouvelle époque dans l'histoire du monde.» Valmy est la victoire symbolique de la nation armée sur les armées de métier de l'Ancien Régime, et inaugure vingt ans de guerres révolutionnaires et napoléoniennes."
  },

  {
    id: "gettysburg-1863",
    type: "bataille",
    dateDebut: 1863,
    dateFin: 1863,
    nom: "Bataille de Gettysburg",
    date: 1863,
    dateAffichee: "1–3 juillet 1863",
    lieu: "Gettysburg, Pennsylvanie (États-Unis)",
    conflit: "Guerre de Sécession",
    belligerants: {
      a: "Union (George G. Meade, ~90 000 hommes)",
      b: "Confédération (Robert E. Lee, ~75 000 hommes)"
    },
    vainqueur: "Union",
    pertes: "~23 000 Nordistes, ~28 000 Sudistes (tués, blessés, disparus)",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Du 1er au 3 juillet 1863, la plus grande bataille de la guerre de Sécession se déroule dans la petite ville de Gettysburg, en Pennsylvanie. Robert E. Lee, en campagne d'invasion du Nord, cherche une victoire décisive sur le sol ennemi pour contraindre l'Union à négocier. Après deux jours d'assauts indécis, il ordonne le 3 juillet la «Charge de Pickett» : 12 500 Confédérés traversent un kilomètre de terrain découvert sous les canons et les fusils de l'Union. La charge est décimée.",
    consequence:
      "Gettysburg est le tournant militaire de la Guerre de Sécession. Combinée à la chute de Vicksburg le 4 juillet, elle prive la Confédération de tout espoir de victoire militaire. Lee ne reprendra jamais l'offensive stratégique. Le 19 novembre 1863, Abraham Lincoln prononce le discours de Gettysburg sur le champ de bataille, définissant la guerre comme une lutte pour la démocratie."
  },

  {
    id: "sadowa-1866",
    type: "bataille",
    dateDebut: 1866,
    dateFin: 1866,
    nom: "Bataille de Sadowa",
    date: 1866,
    dateAffichee: "3 juillet 1866",
    lieu: "Sadowa (Königgrätz), Bohême (République tchèque actuelle)",
    conflit: "Guerre austro-prussienne",
    belligerants: {
      a: "Prusse (Helmuth von Moltke l'Ancien, ~220 000 hommes)",
      b: "Autriche (Ludwig von Benedek, ~215 000 hommes)"
    },
    vainqueur: "Prusse",
    pertes: "~9 000 Prussiens, ~44 000 Autrichiens (tués, blessés, prisonniers)",
    importance: "décisive",
    epoque: "contemporaine",
    description:
      "Le 3 juillet 1866, lors de la guerre qui oppose la Prusse à l'Autriche pour l'hégémonie sur les États allemands, les deux plus grandes armées d'Europe s'affrontent à Sadowa, en Bohême. Le général Moltke applique la stratégie de la «convergence stratégique» : trois armées prusssiennes, coordonnées par télégraphe électrique, convergent en tenaille autour de l'armée autrichienne. Le fusil à aiguille prussien (Dreyse), à chargement par la culasse, démontre une cadence de tir supérieure face aux fusils autrichiens à chargement par la bouche.",
    consequence:
      "Sadowa est la bataille décisive de l'unification allemande. L'Autriche est exclue des affaires germaniques par la paix de Prague. Bismarck impose la Confédération de l'Allemagne du Nord sous hégémonie prussienne, avant d'achever l'unification en battant la France en 1870-1871 et en proclamant l'Empire allemand."
  },

  {
    id: "camerone-1863",
    type: "bataille",
    dateDebut: 1863,
    dateFin: 1863,
    nom: "Combat de Camerone",
    date: 1863,
    dateAffichee: "30 avril 1863",
    lieu: "Hacienda de Camerone, Veracruz (Mexique actuel)",
    conflit: "Intervention française au Mexique",
    belligerants: {
      a: "Légion étrangère française (capitaine Danjou, 65 légionnaires)",
      b: "Mexique (~2 000 soldats mexicains)"
    },
    vainqueur: "Mexique (victoire tactique)",
    pertes: "~3 légionnaires survivants (épuisement), ~300 Mexicains",
    importance: "notable",
    epoque: "contemporaine",
    description:
      "Le 30 avril 1863, une compagnie de 65 légionnaires du 3e REI escorte un convoi de munitions vers Puebla quand elle est encerclée à l'hacienda de Camerone par environ 2 000 soldats mexicains. Le capitaine Danjou — sa main gauche remplacée par une prothèse en bois — fait jurer à chaque légionnaire de combattre jusqu'à la mort plutôt que de se rendre. Il est tué en milieu de journée. La résistance dure jusqu'au soir : les trois survivants chargent à la baïonnette, et les Mexicains, impressionnés par leur bravoure, leur accordent les honneurs de la guerre.",
    consequence:
      "Camerone n'a pas d'importance militaire décisive mais devient la fête fondatrice de la Légion étrangère, célébrée chaque 30 avril. La main en bois de Danjou, récupérée sur le champ de bataille, est conservée à Aubagne comme relique sacrée de la Légion. Le combat symbolise la valeur du soldat professionnel prêt au sacrifice absolu pour l'honneur de l'unité."
  },

  // --- XXe siècle ---

  {
    id: "verdun-1916",
    type: "bataille",
    dateDebut: 1916,
    dateFin: 1916,
    nom: "Bataille de Verdun",
    date: 1916,
    dateAffichee: "21 février – 18 décembre 1916",
    lieu: "Verdun, Meuse (France actuelle)",
    conflit: "Première Guerre mondiale — Front occidental",
    belligerants: {
      a: "France (~70 divisions engagées, ~500 000 hommes)",
      b: "Allemagne (5e armée, ~46 divisions, ~430 000 hommes)"
    },
    vainqueur: "France (victoire défensive)",
    pertes: "~377 000 Français, ~337 000 Allemands (tués, blessés, disparus)",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Le 21 février 1916, l'état-major allemand du général von Falkenhayn déclenche l'opération «Jugement», conçue non pour percer les lignes françaises mais pour «saigner à blanc» l'armée française en lui infligeant des pertes insoutenables autour d'une place qu'elle ne pourra abandonner. Le fort de Douaumont tombe dès le 25 février. La France, sous le commandement de Pétain puis Nivelle, organise la «Voie Sacrée» pour ravitailler le saillant assiégé. Pendant dix mois, dans un enfer d'artillerie, de gaz et de boue, les deux armées s'exterminent mutuellement. Les forts de Douaumont et Vaux sont repris en automne.",
    consequence:
      "Verdun est devenu le symbole de l'absurdité et de la violence industrielle de la Première Guerre mondiale. Plus de 700 000 hommes sont mis hors de combat pour un résultat militaire nul — les lignes reviennent à leur position initiale. La bataille forge le mythe de Verdun dans la mémoire française, mais aussi le traumatisme collectif qui nourrira le pacifisme des années 1930 et le refus de la guerre totale."
  },

  {
    id: "khalkhin-gol-1939",
    type: "bataille",
    dateDebut: 1939,
    dateFin: 1939,
    nom: "Bataille de Khalkhin Gol",
    date: 1939,
    dateAffichee: "Juillet–août 1939",
    lieu: "Khalkhin Gol, Mongolie (Mongolie actuelle)",
    conflit: "Conflit frontalier soviéto-japonais",
    belligerants: {
      a: "URSS & Mongolie (Gueorgui Joukov, ~57 000 hommes)",
      b: "Japon & Mandchoukouo (Michitarō Komatsubara, ~75 000 hommes)"
    },
    vainqueur: "URSS",
    pertes: "~9 000 Soviétiques, ~18 000 Japonais",
    importance: "décisive",
    epoque: "xxe",
    description:
      "À l'été 1939, l'armée japonaise du Kwantung tente d'étendre son emprise en Mongolie au-delà de la rivière Khalkhin Gol, provoquant un conflit frontalier majeur avec l'URSS. Joukov, futur vainqueur de Stalingrad et de Berlin, applique une opération de grande envergure : une attaque frontale fixe les unités japonaises pendant qu'une double enveloppe de blindés et de cavalerie les encercle complètement. Les chars T-26 et BT soviétiques démontrent une supériorité écrasante sur les unités blindées légères japonaises.",
    consequence:
      "Khalkhin Gol stoppe définitivement l'expansion japonaise vers le nord et l'URSS, orientant le Japon vers une expansion vers le sud et le Pacifique — ce qui conduira à Pearl Harbor (1941). Pour l'URSS, la bataille révèle les talents de Joukov et préfigure les tactiques blindées qui permettront de briser la Wehrmacht. Le traité de neutralité soviéto-japonais signé en 1941 en est la conséquence directe."
  },

  {
    id: "stalingrad-1943",
    type: "bataille",
    dateDebut: 1943,
    dateFin: 1943,
    nom: "Bataille de Stalingrad",
    date: 1943,
    dateAffichee: "Août 1942 – Février 1943",
    lieu: "Stalingrad (Volgograd actuelle), URSS (Russie actuelle)",
    conflit: "Seconde Guerre mondiale — Front de l'Est",
    belligerants: {
      a: "URSS (Joukov & Rokossovski, ~1 100 000 hommes engagés au total)",
      b: "Allemagne & Axe (Friedrich Paulus, 6e armée, ~300 000 hommes encerclés)"
    },
    vainqueur: "URSS",
    pertes: "~1 100 000 Soviétiques, ~800 000 Allemands et alliés de l'Axe (tués, blessés, prisonniers)",
    importance: "décisive",
    epoque: "xxe",
    description:
      "D'août 1942 à février 1943, la 6e armée allemande de Paulus s'embourbe dans les ruines de Stalingrad, ville symbolique portant le nom de Staline. Les combats de rue (Rattenkrieg — «guerre des rats») annulent la supériorité tactique allemande. Joukov lance en novembre 1942 l'opération Ouragan : deux corps blindés soviétiques percent les flancs roumains vulnérables et encerclent la 6e armée. Hitler interdit la retraite. Paulus capitule le 2 février 1943 avec 91 000 survivants.",
    consequence:
      "Stalingrad est le tournant décisif de la Seconde Guerre mondiale sur le front de l'Est — et par extension de tout le conflit. C'est la première grande capitulation d'une armée allemande. Elle détruit le mythe d'invincibilité de la Wehrmacht, galvanise la résistance soviétique et convainc les alliés et les neutres que l'Allemagne peut être battue. La bataille coûte à l'Allemagne des pertes irremplaçables en hommes d'élite."
  },

  {
    id: "dien-bien-phu-1954",
    type: "bataille",
    dateDebut: 1954,
    dateFin: 1954,
    nom: "Bataille de Diên Biên Phu",
    date: 1954,
    dateAffichee: "13 mars – 7 mai 1954",
    lieu: "Diên Biên Phu, Tonkin (Viêt Nam actuel)",
    conflit: "Guerre d'Indochine",
    belligerants: {
      a: "Viêt Minh (général Giáp, ~50 000 hommes)",
      b: "France (général de Castries, ~15 000 hommes)"
    },
    vainqueur: "Viêt Minh",
    pertes: "~8 000 Viêt Minh tués, ~2 300 Français tués, ~11 000 prisonniers français",
    importance: "décisive",
    epoque: "xxe",
    description:
      "En mars 1954, l'état-major français installe un camp retranché à Diên Biên Phu pour attirer et détruire les forces du Viêt Minh. Mais le général Giáp réussit l'exploit logistique de hisser à dos d'hommes des dizaines de canons lourds sur les collines dominant la cuvette. L'artillerie viêt-minh détruit la piste d'aviation française, coupant toute liaison avec l'extérieur. Pendant 56 jours, les positions françaises sont réduites une à une sous les assauts humains et le bombardement continu. Le dernier réduit capitule le 7 mai.",
    consequence:
      "La chute de Diên Biên Phu signe la fin de la présence coloniale française en Indochine. Les accords de Genève (juillet 1954) partagent temporairement le Viêt Nam au 17e parallèle — une division provisoire qui débouchera sur la Guerre du Viêt Nam (1955-1975). Diên Biên Phu est la première fois qu'une armée coloniale européenne est battue militairement par un mouvement de libération nationale."
  },

  {
    id: "kolwezi-1978",
    type: "bataille",
    dateDebut: 1978,
    dateFin: 1978,
    nom: "Bataille de Kolwezi",
    date: 1978,
    dateAffichee: "19–20 mai 1978",
    lieu: "Kolwezi, Shaba (Zaïre / République démocratique du Congo actuelle)",
    conflit: "Deuxième guerre du Shaba — intervention française",
    belligerants: {
      a: "France — 2e REP Légion étrangère (colonel Erulin, ~600 légionnaires)",
      b: "Forces katangaises du FLNC (~4 000 combattants)"
    },
    vainqueur: "France",
    pertes: "~5 légionnaires tués, ~250 combattants katangais",
    importance: "notable",
    epoque: "xxe",
    description:
      "Le 13 mai 1978, les Forces katangaises du FLNC envahissent la ville minière de Kolwezi au Zaïre et massacrent plusieurs centaines de civils européens et africains pris en otages. Le président français Giscard d'Estaing ordonne une intervention d'urgence. Le 19 mai, le 2e Régiment Étranger de Parachutistes saute directement sur la ville, sans reconnaissance préalable, en pleine journée. En moins de 48 heures, les légionnaires nettoient la ville et libèrent les otages survivants, mettant en fuite les forces katangaises.",
    consequence:
      "Kolwezi est l'une des dernières grandes opérations coloniales françaises en Afrique et la dernière action de combat en parachute de la Légion étrangère. Elle démontre la capacité de projection rapide de l'armée française et son rôle de gendarme en Afrique subsaharienne dans le cadre de la «Françafrique». L'opération inspire le film «L'Ordre et la Sécurité du monde» (1978)."
  },

  {
    id: "alger-1957",
    type: "bataille",
    dateDebut: 1957,
    dateFin: 1957,
    nom: "Bataille d'Alger",
    date: 1957,
    dateAffichee: "Janvier – Septembre 1957",
    lieu: "Alger, Algérie",
    conflit: "Guerre d'Algérie (1954-1962)",
    belligerants: {
      a: "France — 10e division parachutiste (général Massu)",
      b: "FLN — Zone autonome d'Alger (Ali la Pointe & Yacef Saâdi)"
    },
    vainqueur: "France (victoire militaire / défaite politique)",
    pertes: "Centaines de combattants FLN tués ou arrêtés, milliers de civils algériens torturés",
    importance: "décisive",
    epoque: "xxe",
    description:
      "En janvier 1957, après une série d'attentats à la bombe du FLN dans les quartiers européens d'Alger, le gouvernement français confie au général Massu et à sa 10e division para le maintien de l'ordre dans la capitale. Pendant neuf mois, les parachutistes démantèlent systématiquement les réseaux du FLN en recourant massivement à la torture — «gégène» (électrocution) et «baignoire» — pour obtenir des renseignements. Ali la Pointe, dernier chef du réseau FLN à Alger, est tué lors d'un ultime assaut dans la Casbah.",
    consequence:
      "Militairement, la bataille d'Alger est une victoire française totale : le réseau urbain du FLN est détruit. Politiquement, elle est un désastre : la révélation de la torture systématique scandalise l'opinion publique française et internationale, légitimant la cause indépendantiste algérienne. Elle nourrit le mouvement anti-guerre en France et inspire le film de Gillo Pontecorvo (1966). La France reconnaîtra le problème de la torture décennies plus tard."
  },

  {
    id: "six-jours-1967",
    type: "bataille",
    dateDebut: 1967,
    dateFin: 1967,
    nom: "Guerre des Six Jours",
    date: 1967,
    dateAffichee: "5–10 juin 1967",
    lieu: "Sinaï, Cisjordanie, Golan (Égypte, Jordanie, Syrie)",
    conflit: "Guerres israélo-arabes",
    belligerants: {
      a: "Israël (général Dayan & Rabin, ~250 000 hommes mobilisés)",
      b: "Égypte, Jordanie, Syrie (coalition arabe, ~400 000 hommes)"
    },
    vainqueur: "Israël",
    pertes: "~800 Israéliens tués, ~15 000 à 20 000 soldats arabes",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Le 5 juin 1967, face à l'encerclement militaire arabe et au blocus du détroit de Tiran par l'Égypte, Israël lance une frappe préventive massive qui détruit au sol en quelques heures la quasi-totalité de l'aviation égyptienne, syrienne et jordanienne. Sans couverture aérienne, les armées arabes sont impuissantes. En six jours, Tsahal conquiert la péninsule du Sinaï, la bande de Gaza, la Cisjordanie (dont Jérusalem-Est) et le plateau du Golan. Le général Moshe Dayan entre dans la Vieille Ville de Jérusalem le 7 juin.",
    consequence:
      "La Guerre des Six Jours transforme radicalement la géographie du Proche-Orient. Israël triple sa superficie en six jours et contrôle des millions de Palestiniens sous occupation militaire. Les résolutions 242 et 338 de l'ONU exigent un retrait sans être appliquées. Cette guerre est l'une des causes directes de la guerre du Kippour (1973) et de la question palestinienne contemporaine."
  },

  {
    id: "kippour-1973",
    type: "bataille",
    dateDebut: 1973,
    dateFin: 1973,
    nom: "Guerre du Kippour",
    date: 1973,
    dateAffichee: "6–25 octobre 1973",
    lieu: "Sinaï & Golan (Égypte et Syrie)",
    conflit: "Guerres israélo-arabes",
    belligerants: {
      a: "Égypte & Syrie (Sadate & Assad, ~800 000 hommes)",
      b: "Israël (Golda Meir & Dado Elazar, ~300 000 mobilisés)"
    },
    vainqueur: "Israël (victoire militaire défensive)",
    pertes: "~2 800 Israéliens, ~15 000 Égyptiens et Syriens",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Le 6 octobre 1973 — jour de Yom Kippour, le plus saint du calendrier juif — l'Égypte et la Syrie lancent une attaque surprise coordonnée. Les Égyptiens franchissent le canal de Suez avec des lances à eau qui effondrent les fortifications de la ligne Bar-Lev puis avancent dans le Sinaï. Les Syriens submergent le Golan. Israël, pris au dépourvu, subit de lourdes pertes initiales. Un pont aérien américain fournit du matériel en urgence. Ariel Sharon traverse le canal de Suez à revers et encercle la 3e armée égyptienne.",
    consequence:
      "La guerre du Kippour ébranle profondément la confiance israélienne en son invulnérabilité. Elle conduit aux accords de Camp David (1978) et à la paix israélo-égyptienne (1979) — première reconnaissance d'Israël par un État arabe. Elle déclenche le premier choc pétrolier (embargo de l'OPEP, octobre 1973) dont les effets économiques mondiaux sont considérables."
  },

  {
    id: "tempete-desert-1991",
    type: "bataille",
    dateDebut: 1991,
    dateFin: 1991,
    nom: "Opération Tempête du Désert",
    date: 1991,
    dateAffichee: "17 janvier – 28 février 1991",
    lieu: "Koweït & Irak",
    conflit: "Guerre du Golfe — Coalition internationale contre l'Irak",
    belligerants: {
      a: "Coalition internationale (34 pays, États-Unis en tête, général Schwarzkopf, ~700 000 hommes)",
      b: "Irak (Saddam Hussein, ~545 000 hommes au Koweït)"
    },
    vainqueur: "Coalition",
    pertes: "~292 coalisés tués au combat, ~25 000 à 50 000 Irakiens",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Le 2 août 1990, l'Irak de Saddam Hussein envahit le Koweït, provoquant la formation d'une coalition internationale de 34 nations sous mandat de l'ONU. Après cinq mois de blocus, la phase offensive débute le 17 janvier 1991 par 38 jours de bombardements aériens qui dévastent les infrastructures militaires irakiennes. Le 24 février, l'attaque terrestre («crochet gauche» de Schwarzkopf) encercle les forces irakiennes au Koweït en 100 heures de combat. Saddam ordonne le retrait en incendiant les puits de pétrole koweïtiens.",
    consequence:
      "La Guerre du Golfe est la première grande démonstration de la «guerre propre» et des frappes de précision, dont les images sont diffusées en direct à la télévision mondiale — la «CNN War». Elle marque l'apogée de la puissance américaine après la chute de l'URSS mais ne renverse pas Saddam Hussein, laissant une question irakienne non résolue qui conduira à la guerre de 2003."
  },

  {
    id: "sarajevo-1992",
    type: "bataille",
    dateDebut: 1992,
    dateFin: 1992,
    nom: "Siège de Sarajevo",
    date: 1992,
    dateAffichee: "5 avril 1992 – 29 février 1996",
    lieu: "Sarajevo, Bosnie-Herzégovine",
    conflit: "Guerres de Yougoslavie — Guerre de Bosnie",
    belligerants: {
      a: "Bosnie-Herzégovine (armée bosniaque & défense territoriale)",
      b: "Republika Srpska (armée serbe de Bosnie, général Mladić)"
    },
    vainqueur: "Bosnie (résistance) / levée par accords de Dayton",
    pertes: "~13 952 tués dont ~5 434 civils bosniaques",
    importance: "décisive",
    epoque: "xxe",
    description:
      "Du 5 avril 1992 au 29 février 1996, Sarajevo subit le siège le plus long de l'histoire des guerres modernes — 1 425 jours. Les forces serbes de Bosnie encerclent la ville depuis les collines environnantes et soumettent la population à des bombardements d'artillerie quotidiens et aux tirs de snipers. La ville est ravitaillée via un tunnel secret de 800 mètres creusé sous la piste de l'aéroport. Les bombardements du marché Markale (1994 et 1995) provoquent une réaction internationale. Les frappes aériennes de l'OTAN en 1995 (opération Deliberate Force) contraignent les Serbes à lever le siège.",
    consequence:
      "Le siège de Sarajevo et le massacre de Srebrenica (juillet 1995, ~8 000 Bosniaques tués) sont qualifiés de génocide par le Tribunal pénal international pour l'ex-Yougoslavie. Les accords de Dayton (novembre 1995) mettent fin à la guerre mais consacrent une partition de facto de la Bosnie. Ces événements conduisent à la création de la Cour pénale internationale (2002)."
  }
];

// ============================================================
// CIVILISATIONS
// ============================================================

const civilisations = [
  {
    id: "empire-perse-achemenide",
    type: "civilisation",
    nom: "Empire perse achéménide",
    dateDebut: -550,
    dateFin: -330,
    dateAfficheeDebut: "550 av. J.-C.",
    dateAfficheeFin: "330 av. J.-C.",
    region: "Proche-Orient, Égypte, Asie centrale",
    capitale: "Persépolis",
    description: "Premier grand empire universel, fondé par Cyrus le Grand, il s’étend de l’Égypte à l’Inde. Son organisation administrative par satrapies et sa tolérance religieuse en font un modèle de gouvernement.",
    consequence: "Sa chute devant Alexandre ouvre la période hellénistique et diffuse la culture grecque en Orient."
  },
  {
    id: "cites-grecques",
    type: "civilisation",
    nom: "Cités grecques classiques",
    dateDebut: -800,
    dateFin: -146,
    dateAfficheeDebut: "VIIIe s. av. J.-C.",
    dateAfficheeFin: "146 av. J.-C.",
    region: "Grèce, Méditerranée orientale",
    capitale: "Athènes (hégémonie culturelle)",
    description: "Ensemble de cités-États indépendantes (poleis) qui développent la démocratie, la philosophie, les arts et la science. Athènes et Sparte dominent politiquement et militairement.",
    consequence: "Fondent la civilisation occidentale : démocratie, philosophie, théâtre, sciences. La conquête macédonienne diffuse cet héritage à travers l’Orient hellénistique."
  },
  {
    id: "empire-romain",
    type: "civilisation",
    nom: "Empire romain",
    dateDebut: -27,
    dateFin: 476,
    dateAfficheeDebut: "27 av. J.-C.",
    dateAfficheeFin: "476",
    region: "Europe occidentale, Méditerranée, Proche-Orient",
    capitale: "Rome",
    description: "Héritier de la République romaine, l’Empire unifie le monde méditerranéen sous une administration centralisée. Au pic de sa puissance, il compte plus de 70 millions d’habitants.",
    consequence: "Son héritage juridique, linguistique et architectural structure l’Europe médiévale et moderne. Le latin devient la lingua franca de l’Église et de la science."
  },
  {
    id: "empire-byzantin",
    type: "civilisation",
    nom: "Empire byzantin",
    dateDebut: 330,
    dateFin: 1453,
    dateAfficheeDebut: "330",
    dateAfficheeFin: "1453",
    region: "Anatolie, Balkans, Méditerranée orientale",
    capitale: "Constantinople",
    description: "Continuation de l’Empire romain d’Orient, il préserve la culture grecque et le christianisme orthodoxe pendant plus d’un millénaire. À son apogée sous Justinien, il reconquérit temporairement une partie de l’Occident.",
    consequence: "Sa chute en 1453 marque symboliquement la fin du Moyen Âge. Les savants byzantins fuyant vers l’Italie contribuent à la Renaissance."
  },
  {
    id: "califat-abbasside",
    type: "civilisation",
    nom: "Califat abbasside",
    dateDebut: 750,
    dateFin: 1258,
    dateAfficheeDebut: "750",
    dateAfficheeFin: "1258",
    region: "Proche-Orient, Perse, Asie centrale",
    capitale: "Bagdad",
    description: "Âge d’or islamique : Bagdad devient le centre mondial du savoir. Mathématiques, astronomie, médecine et philosophie y fleurissent. La Maison de la Sagesse traduit et préserve les textes grecs antiques.",
    consequence: "Transmet à l’Europe médiévale les savoirs grecs via l’Espagne et la Sicile. L’algèbre, la chimie et les chiffres arabes sont parmi ses héritages durables."
  },
  {
    id: "empire-ottoman",
    type: "civilisation",
    nom: "Empire ottoman",
    dateDebut: 1299,
    dateFin: 1922,
    dateAfficheeDebut: "1299",
    dateAfficheeFin: "1922",
    region: "Turquie, Balkans, Proche-Orient, Afrique du Nord",
    capitale: "Constantinople (Istanbul)",
    description: "L’un des empires les plus durables de l’histoire, il contrôle les routes commerciales entre l’Europe et l’Asie pendant six siècles. Son système du millet garantit une relative tolérance religieuse.",
    consequence: "Sa dissolution après la Première Guerre mondiale remodele entièrement le Proche-Orient et donne naissance aux États modernes de la région."
  },
  {
    id: "empire-mongol",
    type: "civilisation",
    nom: "Empire mongol",
    dateDebut: 1206,
    dateFin: 1368,
    dateAfficheeDebut: "1206",
    dateAfficheeFin: "1368",
    region: "Asie centrale, Chine, Perse, Russie",
    capitale: "Karakorum, puis Khanbalik (Pékin)",
    description: "Le plus grand empire terrestre contigu de l’histoire, fondé par Gengis Khan. Sa « Pax Mongolica » facilite les échanges commerciaux et culturels sur la Route de la Soie.",
    consequence: "Détruit des centres culturels majeurs (Bagdad, 1258) mais favorise les échanges Eurasie-Asie. La Peste noire se propage le long des routes mongoles."
  }
];

// ============================================================
// MODES DE PRODUCTION
// ============================================================

const modesProduction = [
  {
    id: "esclavagisme-antique",
    type: "mode-production",
    nom: "Esclavagisme antique",
    dateDebut: -800,
    dateFin: 500,
    dateAfficheeDebut: "VIIIe s. av. J.-C.",
    dateAfficheeFin: "Ve siècle",
    zone: "Méditerranée (Grèce, Rome)",
    description: "Mode de production dominant dans les sociétés méditerranéennes antiques. Les esclaves constituent entre 30 et 40 % de la population à Athènes et Rome. Ils produisent l’essentiel des biens agricoles et artisanaux.",
    consequence: "Sa crise au IIIe siècle contribue à la chute de l’Empire romain. Il se pérpétue partiellement dans le servage médiéval."
  },
  {
    id: "feodalisme",
    type: "mode-production",
    nom: "Féodalisme",
    dateDebut: 800,
    dateFin: 1500,
    dateAfficheeDebut: "IXe siècle",
    dateAfficheeFin: "XVe siècle",
    zone: "Europe occidentale",
    description: "Système économique et politique fondé sur la tenure foncière en échange de services militaires. Les serfs travaillent la terre du seigneur en échange de protection. La hiérarchie va du serf au roi.",
    consequence: "Son déclin après la Peste noire et les guerres du XIVe siècle libère la paysannerie et favorise l’émergence du capitalisme marchand."
  },
  {
    id: "capitalisme-mercantile",
    type: "mode-production",
    nom: "Capitalisme mercantile",
    dateDebut: 1450,
    dateFin: 1800,
    dateAfficheeDebut: "XVe siècle",
    dateAfficheeFin: "XVIIIe siècle",
    zone: "Europe occidentale, colonies",
    description: "Les grandes découvertes ouvrent des routes commerciales mondiales. Les compagnies des Indes orientales et la traite négrière alimentent l’accumulation de capital. L’État protège le commerce national par le mercantilisme.",
    consequence: "Constitue la base d’accumulation primitive du capital qui rend possible la révolution industrielle."
  },
  {
    id: "capitalisme-industriel",
    type: "mode-production",
    nom: "Capitalisme industriel",
    dateDebut: 1760,
    dateFin: 1945,
    dateAfficheeDebut: "1760",
    dateAfficheeFin: "1945",
    zone: "Europe, Amérique du Nord, puis mondial",
    description: "La machine à vapeur puis l’électricité révolutionnent la production. Le prolétariat urbain se développe, les conditions de travail sont souvent inhumaines. Apparition des syndicats et du mouvement ouvrier.",
    consequence: "Transforme radicalement les sociétés et donne naissance aux idéologies du XIXe siècle. Engendre les deux guerres mondiales par compétition impérialiste."
  }
];

// ============================================================
// CONFLITS
// ============================================================

const conflits = [
  {
    id: "guerres-mediques",
    type: "conflit",
    nom: "Guerres médiques",
    dateDebut: -490,
    dateFin: -479,
    dateAfficheeDebut: "490 av. J.-C.",
    dateAfficheeFin: "479 av. J.-C.",
    belligerants: { a: "Cités grecques", b: "Empire perse" },
    vainqueur: "Cités grecques",
    bataillesLiees: ["marathon-490", "thermopyles-480", "salamine-480", "platees-479"],
    description: "Deux invasions perses successives (Darius Ier puis Xerxès Ier) tentent de soumettre les cités grecques rebelles. Les victoires grecques à Marathon, Salamine et Platées arrêtent définitivement l’expansion perse en Europe.",
    consequence: "Sauve l’indépendance grecque et ouvre l’âge d’or d’Athènes. Consolide la démocratie et donne à la civilisation grecque la confiance pour son essor culturel."
  },
  {
    id: "guerre-peloponnese",
    type: "conflit",
    nom: "Guerre du Péloponnèse",
    dateDebut: -431,
    dateFin: -404,
    dateAfficheeDebut: "431 av. J.-C.",
    dateAfficheeFin: "404 av. J.-C.",
    belligerants: { a: "Ligue de Délos (Athènes)", b: "Ligue du Péloponnèse (Sparte)" },
    vainqueur: "Sparte",
    bataillesLiees: ["syracuse-415", "egospotamos-405"],
    description: "Conflit titanesque opposant Athènes et son empire maritime à Sparte et ses alliés terrestres. La stratégie de Périclès d’éviter la bataille terrestre est ruinée par la Grande Peste. L’expédition de Sicile (415-413) tourne à la catastrophe pour Athènes.",
    consequence: "Épuise toutes les cités grecques et prépare leur domination par la Macédoine."
  },
  {
    id: "conquetes-alexandre",
    type: "conflit",
    nom: "Conquêtes d’Alexandre le Grand",
    dateDebut: -334,
    dateFin: -323,
    dateAfficheeDebut: "334 av. J.-C.",
    dateAfficheeFin: "323 av. J.-C.",
    belligerants: { a: "Macédoine & alliés grecs", b: "Empire perse, Inde" },
    vainqueur: "Macédoine",
    bataillesLiees: ["granique-334", "issos-333", "gaugameles-331", "hydaspe-326"],
    description: "En dix ans, Alexandre III de Macédoine conquérit l’Empire perse, l’Égypte, la Bactriane et atteint l’Inde. Sa phalange combinée à la cavalerie des Compagnons constitue la machine de guerre la plus efficace de l’Antiquité.",
    consequence: "Crée un empire de l’Égée à l’Inde qui déclenche la période hellénistique."
  },
  {
    id: "guerres-puniques",
    type: "conflit",
    nom: "Guerres puniques",
    dateDebut: -264,
    dateFin: -146,
    dateAfficheeDebut: "264 av. J.-C.",
    dateAfficheeFin: "146 av. J.-C.",
    belligerants: { a: "Rome", b: "Carthage" },
    vainqueur: "Rome",
    bataillesLiees: ["trebia-218", "tessin-218", "trasimene-217", "cannes-216", "zama-202"],
    description: "Trois guerres successives opposent Rome et Carthage pour la domination de la Méditerranée occidentale. La deuxième, menée par Hannibal, faillit détruire Rome après les victoires de Trébie, du Lac Trasmène et de Cannes.",
    consequence: "La destruction de Carthage en 146 av. J.-C. fait de Rome la puissance hégémonique de la Méditerranée."
  },
  {
    id: "croisades",
    type: "conflit",
    nom: "Croisades",
    dateDebut: 1096,
    dateFin: 1291,
    dateAfficheeDebut: "1096",
    dateAfficheeFin: "1291",
    belligerants: { a: "Chrétienté occidentale", b: "Islam (Fatimides, Seldjouks, Ayyoubides, Mamelouks)" },
    vainqueur: "Indécis (victoire finale islamique)",
    bataillesLiees: ["hattin-1187", "ain-jalut-1260"],
    description: "Huit expéditions militaires lancées par la papauté pour reconquérir Jérusalem et la Terre sainte. La première croisade (1096-1099) réussit à créer des États latins d’Orient.",
    consequence: "Renforcent les échanges commerciaux et culturels entre Orient et Occident."
  },
  {
    id: "guerre-cent-ans",
    type: "conflit",
    nom: "Guerre de Cent Ans",
    dateDebut: 1337,
    dateFin: 1453,
    dateAfficheeDebut: "1337",
    dateAfficheeFin: "1453",
    belligerants: { a: "France", b: "Angleterre" },
    vainqueur: "France",
    bataillesLiees: ["crecy-1346", "poitiers-1356", "azincourt-1415", "orleans-1429"],
    description: "Conflit dynastique et territorial entre les couronnes de France et d’Angleterre. Marqué par la chevauxée anglaise, la Peste noire et le renouveau français sous Jeanne d’Arc.",
    consequence: "Consolide l’identité nationale française et anglaise. La France sort renforcée et centralisée."
  },
  {
    id: "premiere-guerre-mondiale",
    type: "conflit",
    nom: "Première Guerre mondiale",
    dateDebut: 1914,
    dateFin: 1918,
    dateAfficheeDebut: "1914",
    dateAfficheeFin: "1918",
    belligerants: { a: "Triple Entente (France, Royaume-Uni, Russie, puis États-Unis)", b: "Empires centraux (Allemagne, Autriche-Hongrie, Empire ottoman)" },
    vainqueur: "Triple Entente",
    bataillesLiees: ["marne-1914", "verdun-1916", "somme-1916", "tannenberg-1914"],
    description: "Premier conflit industriel total. La guerre de tranchées sur le front occidental cause des millions de morts. Les nouvelles armes (gaz, chars, aviation) transforment la nature de la guerre.",
    consequence: "17 millions de morts. Effondrement des empires. Le traité de Versailles crée les conditions de la Seconde Guerre mondiale."
  },
  {
    id: "seconde-guerre-mondiale",
    type: "conflit",
    nom: "Seconde Guerre mondiale",
    dateDebut: 1939,
    dateFin: 1945,
    dateAfficheeDebut: "1939",
    dateAfficheeFin: "1945",
    belligerants: { a: "Alliés (URSS, États-Unis, Royaume-Uni, France libre…)", b: "Axe (Allemagne nazie, Italie fasciste, Japon impérial)" },
    vainqueur: "Alliés",
    bataillesLiees: ["bataille-angleterre-1940", "stalingrad-1943", "el-alamein-1942", "midway-1942", "overlord-1944"],
    description: "Conflit le plus meurtrier de l’histoire, impliquant tous les continents. L’Holocauste et les bombes atomiques redefinissent les limites de la barbarie.",
    consequence: "70 à 85 millions de morts. Création de l’ONU, début de la Guerre froide, décolonisation."
  }
];

// ============================================================
// REVOLTES
// ============================================================

const revoltes = [
  {
    id: "revolte-spartacus",
    type: "revolte",
    nom: "Révolte de Spartacus",
    dateDebut: -73,
    dateFin: -71,
    dateAfficheeDebut: "73 av. J.-C.",
    dateAfficheeFin: "71 av. J.-C.",
    lieu: "Italie",
    meneur: "Spartacus",
    description: "Le gladiateur thrace Spartacus mène une révolte d’esclaves qui mobilise jusqu’à 120 000 hommes. L’armée servile remporte plusieurs victoires contre les légions romaines avant d’être écrasée par Crassus et Pompée.",
    consequence: "6 000 esclaves crucifiés le long de la via Appia. Reste le symbole le plus puissant de la résistance servile dans l’Antiquité."
  },
  {
    id: "jacqueries-1358",
    type: "revolte",
    nom: "Grande Jacquerie",
    dateDebut: 1358,
    dateFin: 1358,
    dateAfficheeDebut: "1358",
    dateAfficheeFin: "1358",
    lieu: "Île-de-France, Picardie",
    meneur: "Guillaume Cale",
    description: "Soulèvement paysan en France déclenché par les souffrances de la Guerre de Cent Ans, la Peste noire et les lourdes charges fiscales. Réprimée avec une brutalité extrême.",
    consequence: "Préfigure les grandes révoltes paysannes du bas Moyen Âge. Témoigne d’une prise de conscience sociale."
  },
  {
    id: "revolte-paysans-anglais-1381",
    type: "revolte",
    nom: "Révolte des Paysans anglais",
    dateDebut: 1381,
    dateFin: 1381,
    dateAfficheeDebut: "1381",
    dateAfficheeFin: "1381",
    lieu: "Angleterre (Kent, Essex, Londres)",
    meneur: "Wat Tyler, John Ball",
    description: "Provoquée par la poll tax et le servage, la révolte atteint Londres. Les paysans brûlent des archives et exécutent l’archevêque de Canterbury.",
    consequence: "Marque la fin progressive du servage en Angleterre. Les revendications d’égalité de John Ball préfigurent les idées socialistes."
  },
  {
    id: "commune-paris-1871",
    type: "revolte",
    nom: "Commune de Paris",
    dateDebut: 1871,
    dateFin: 1871,
    dateAfficheeDebut: "mars 1871",
    dateAfficheeFin: "mai 1871",
    lieu: "Paris",
    meneur: "Comité central de la Garde nationale",
    description: "Après la défaite contre la Prusse, les Parisiens proclament la Commune. Premier gouvernement ouvrier de l’histoire, il expérimente des réformes sociales radicales pendant 72 jours avant d’être écrasé dans la « Semaine sanglante ».",
    consequence: "20 000 à 30 000 Communards tués. Inspire Marx et Engels. Symbole fondateur du mouvement ouvrier international."
  },
  {
    id: "revolution-russe-1917",
    type: "revolte",
    nom: "Révolution russe",
    dateDebut: 1917,
    dateFin: 1917,
    dateAfficheeDebut: "février 1917",
    dateAfficheeFin: "octobre 1917",
    lieu: "Russie",
    meneur: "Lénine, Trotski (Bolcheviks)",
    description: "Double révolution : la révolution de Février renverse le tsar ; la révolution d’Octobre porte les Bolcheviks au pouvoir.",
    consequence: "Naissance de l’URSS. Inspire les mouvements communistes mondiaux. Structure la géopolitique du XXe siècle jusqu’en 1991."
  }
];
