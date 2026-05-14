// data.js — Praxis, encyclopédie historico-matérialiste
// Quatre tableaux distincts : modes de production, civilisations, conflits, révoltes
// Sources : K. Marx, Les Formes qui précèdent la production capitaliste (Grundrisse) ;
//           notes de travail du projet (Les_Formes.odt, Notes_générales.odt)

'use strict';

/* ============================================================
   I. MODES DE PRODUCTION
   Ordre logique : du communisme primitif au capitalisme
   ============================================================ */

const modesProduction = [

  {
    id: "communisme-primitif",
    nom: "Communisme primitif",
    periode: "~3 000 000 – ~3 000 av. J.-C.",
    dateDebut: -3000000,
    dateFin: -3000,
    region: "Universelle",
    definition:
      "Le mode de production le plus long de l'histoire humaine. Aucune propriété privée — les conditions d'existence (terre, outils, nourriture) appartiennent à la communauté tribale. L'individu n'existe qu'en tant que membre du groupe ; la tribu est à la fois unité productive et unité sociale. On produit pour la valeur d'usage : manger, survivre, reproduire la communauté. Marx : la commune est « la première grande force productive de l'humanité ».",
    citation: {
      texte: "La commune elle-même représente la première grande force productive.",
      auteur: "Karl Marx",
      source: "Grundrisse, Formes qui précèdent la production capitaliste, 1857–1858"
    },
    analyse:
      "Société sans classes car sans surplus suffisant pour générer une exploitation durable. Le rapport à la terre est un rapport vécu, pratique — non un droit abstrait. La propriété n'est pas un résultat du travail : elle en est la présupposition. Toute la théorie marxiste de la propriété repose sur ce point de départ : on travaille parce qu'on est déjà dans un rapport de propriété avec ses conditions d'existence, pas l'inverse.",
    exemples: ["Paléolithique", "Mésolithique", "Néolithique ancien", "Communautés chasseurs-cueilleurs", "Tribus nomades pastorales"]
  },

  {
    id: "asiatique",
    nom: "Mode de production asiatique",
    periode: "~3 000 – ~500 av. J.-C.",
    dateDebut: -3000,
    dateFin: -500,
    region: "Orient, Mésoamérique, Asie du Sud",
    definition:
      "La commune persiste comme cadre de production mais sous l'autorité d'un despote-État qui est le seul propriétaire réel de la terre. Les individus ne sont que « possesseurs » ; la commune est maintenue comme unité technique (irrigation, grands travaux), mais tout surplus remonte vers le centre. Structure : villages autarciques mariant agriculture et artisanat domestique, coiffés par un appareil d'État redistribuant la force de travail collective.",
    citation: {
      texte: "C'est nécessairement la forme asiatique qui se maintient avec la plus grande ténacité et le plus longtemps. Cela tient à ses conditions même : l'individu ne peut s'y rendre autonome vis-à-vis de la commune ; le cycle de la production se suffit à lui-même.",
      auteur: "Karl Marx",
      source: "Grundrisse, Formes qui précèdent la production capitaliste, 1857–1858"
    },
    analyse:
      "Mode le plus stable de l'histoire : l'individu est totalement subordonné à la commune, et la commune à l'État despotique. L'absence d'individuation bloque la marchandisation. Le surplus est prélevé sous forme de tribut ou de corvée collective (grands travaux hydrauliques en Mésopotamie, au Pérou, en Inde). Marx cite explicitement le Mexique, le Pérou, les anciens Celtes, certaines tribus indiennes, et les communes slaves/roumaines comme variantes de cette forme.",
    exemples: ["Mésopotamie sumérienne", "Égypte pharaonique", "Empire inca", "Despotismes orientaux", "Communes slaves et roumaines"]
  },

  {
    id: "antique",
    nom: "Mode de production antique",
    periode: "~800 av. J.-C. – ~500 ap. J.-C.",
    dateDebut: -800,
    dateFin: 500,
    region: "Méditerranée (Grèce, Rome)",
    definition:
      "Fondé sur le double lien : propriété privée du lopin individuel (le citoyen-soldat) et propriété collective de l'ager publicus (terre conquise au nom de la cité). On est propriétaire parce qu'on est citoyen, et on est citoyen parce qu'on est propriétaire-soldat. La cité antique est constitutivement agraire — Marx parle de « ruralisation de la cité » à rebours de l'histoire moderne qui est, elle, « l'urbanisation de la campagne ».",
    citation: {
      texte: "La petite commune guerrière tend, entre autres, à dépasser ces limitations (Rome, Grèce, Juifs, etc.).",
      auteur: "Karl Marx",
      source: "Grundrisse, Formes qui précèdent la production capitaliste, 1857–1858"
    },
    analyse:
      "La guerre est l'activité économique centrale de la commune antique : elle produit des esclaves. C'est l'esclavage massif qui, en concurrençant le travail libre, ruine les petits paysans-citoyens et détruit de l'intérieur l'unité entre propriété foncière et citoyenneté. Paradoxe fondamental : c'est en réussissant (conquêtes, esclaves) que la cité antique dissout ses propres bases sociales. Rome et Byzance ont accumulé d'immenses richesses monétaires sans engendrer le capitalisme — la dissolution des anciens rapports de propriété n'y était pas totale.",
    exemples: ["Cités-États grecques (Athènes, Sparte)", "République romaine", "Carthage", "Cités phéniciennes"]
  },

  {
    id: "feodal",
    nom: "Mode de production féodal",
    periode: "~500 – ~1500",
    dateDebut: 500,
    dateFin: 1500,
    region: "Europe occidentale, Japon, Proche-Orient",
    definition:
      "La propriété de la terre est entre les mains de la noblesse féodale (seigneurs, suzerains). Les serfs et paysans n'ont pas la propriété de la terre mais en ont l'usage contre redevances en nature, en travail (corvée) ou en argent. Le surplus est prélevé par la contrainte extra-économique — le rapport de subordination personnelle entre le serf et le seigneur, et non par le mécanisme du marché. Marx décrit la forme germanique comme son ancêtre : habitat dispersé, commune intermittente, sujets autonomes.",
    citation: {
      texte: "Les rapports de dépendance personnelle — non seulement entre serf et seigneur, mais à tous les échelons de la hiérarchie féodale — constituent la base sociale sur laquelle reposent toutes les formes du travail et de la production.",
      auteur: "Karl Marx",
      source: "Le Capital, Livre I, 1867"
    },
    analyse:
      "Le féodalisme tire sa cohérence de la fusion entre pouvoir politique et propriété économique : le seigneur est à la fois propriétaire foncier, juge et chef militaire. La dissolution de ce système passe par : l'expansion commerciale, qui monétise les redevances ; le développement des villes et des guildes artisanales ; et la Réforme protestante, qui remet en cause l'autorité de l'Église comme pouvoir idéologique central. En Angleterre, les enclosures des XVe–XVIe siècles constituent le mécanisme concret de cette dissolution.",
    exemples: ["Carolingiens", "Féodalité française (Capétiens)", "Shōgunat japonais", "Rus' kiévienne", "Royaumes chrétiens d'Espagne"]
  },

  {
    id: "capitaliste",
    nom: "Mode de production capitaliste",
    periode: "~1500 – présent",
    dateDebut: 1500,
    dateFin: 2100,
    region: "Mondiale (origine : Europe occidentale)",
    definition:
      "Première forme historique où la reproduction du rapport social passe intégralement par le marché. Le travailleur est doublement libre : libre de sa personne (pas serf), mais libre aussi — c'est-à-dire dépourvu — de tout moyen de production. Le capital ne crée pas les conditions du travail : il les achète après que le processus historique les a séparées du travailleur. La plus-value est le mécanisme de base : le travailleur produit plus de valeur qu'il n'en reçoit en salaire.",
    citation: {
      texte: "L'histoire ignore les fables sentimentales dans lesquelles le capitaliste et le travailleur concluent une association, et on n'en trouve pas trace non plus dans la genèse du capital.",
      auteur: "Karl Marx",
      source: "Grundrisse, Formes qui précèdent la production capitaliste, 1857–1858"
    },
    analyse:
      "Quatre dissolutions historiques ont rendu le capitalisme possible : (1) le travailleur arraché à la terre ; (2) l'artisan privé de son outil (devenu machine) ; (3) la dissolution des rapports de subsistance garantie (suite du seigneur, communauté du maître-artisan, droits coutumiers) ; (4) la libération personnelle du servage. La richesse monétaire n'a fait qu'accélérer ce processus — elle ne l'a pas créé. L'Angleterre des XVe–XVIe siècles (expulsions de paysans, enclosures sous Henri VII et VIII) en est l'exemple central chez Marx.",
    exemples: ["Angleterre industrielle (XVIIIe–XIXe s.)", "France révolutionnaire", "États-Unis post-Guerre de Sécession", "Capitalisme mondialisé contemporain"]
  }

];

/* ============================================================
   II. CIVILISATIONS
   ============================================================ */

const civilisations = [

  {
    id: "prehistoire",
    nom: "Préhistoire (Paléolithique)",
    periode: "~3 000 000 – ~10 000 av. J.-C.",
    dateDebut: -3000000,
    dateFin: -10000,
    dateAfficheeDebut: "~3 000 000 av. J.-C.",
    dateAfficheeFin: "~10 000 av. J.-C.",
    region: "Mondiale",
    modeProduction: "communisme-primitif",
    description:
      "Le Paléolithique correspond à la période la plus longue de la préhistoire. Les sociétés sont nomades, vivant de chasse, cueillette et collecte. La maîtrise du feu (vers 400 000 av. J.-C.) transforme profondément les modes de vie. Les humains perfectionnent leurs techniques (lance, propulseur, harpons) et développent une culture symbolique — art rupestre vers 35 000 av. J.-C. Selon Marx et Engels, cette période correspond au « communisme primitif » : propriété collective, absence de classes, survie par la coopération.",
    conflitsLies: []
  },

  {
    id: "mesolithique-neolithique",
    nom: "Mésolithique / Néolithique",
    periode: "~10 000 – ~3 000 av. J.-C.",
    dateDebut: -10000,
    dateFin: -3000,
    dateAfficheeDebut: "~10 000 av. J.-C.",
    dateAfficheeFin: "~3 000 av. J.-C.",
    region: "Croissant fertile, puis mondiale",
    modeProduction: "communisme-primitif",
    description:
      "Le Mésolithique marque la fin de la dernière glaciation et l'apparition des semi-nomades. Le Néolithique introduit la révolution agricole : domestication des plantes et des animaux, sédentarisation, premiers villages. Cette transition vers une économie de production modifie profondément les rapports sociaux : apparition des premiers surplus, division du travail, émergence des premières inégalités. Pour Marx, c'est le début du long processus qui aboutira à la propriété privée.",
    conflitsLies: []
  },

  {
    id: "grece-antique",
    nom: "Grèce antique",
    periode: "~800 – 146 av. J.-C.",
    dateDebut: -800,
    dateFin: -146,
    dateAfficheeDebut: "~800 av. J.-C.",
    dateAfficheeFin: "146 av. J.-C.",
    region: "Mer Égée, Méditerranée orientale",
    capitale: "Athènes (hégémonique)",
    modeProduction: "antique",
    description:
      "La cité-État grecque (polis) constitue le modèle central du mode de production antique selon Marx. La propriété foncière est la base de la citoyenneté et de la participation politique. L'esclavage massif — produit des guerres de conquête — concurrence le travail libre et creuse les inégalités internes. Les guerres médiques (490–479 av. J.-C.) consolident la démocratie athénienne tout en inaugurant la période classique. La conquête macédonienne d'Alexandre clôt l'époque des cités autonomes.",
    conflitsLies: ["guerres-mediques"]
  },

  {
    id: "rome-antique",
    nom: "Rome antique",
    periode: "753 av. J.-C. – 476 ap. J.-C.",
    dateDebut: -753,
    dateFin: 476,
    dateAfficheeDebut: "753 av. J.-C.",
    dateAfficheeFin: "476 ap. J.-C.",
    region: "Méditerranée, Europe occidentale",
    capitale: "Rome",
    modeProduction: "antique",
    description:
      "Marx identifie Rome républicaine comme « l'exemple le plus classique, dans sa forme la plus pure et la plus achevée » du mode de production antique. L'unité originelle entre propriété foncière et citoyenneté-soldatesque est progressivement détruite par l'esclavage massif issu des conquêtes (Guerres puniques, Guerre des Gaules). La plèbe perd ses terres, l'oligarchie sénatoriale concentre l'ager publicus. Les guerres civiles (Marius/Sylla, César/Pompée) expriment cette crise structurelle. L'Empire stabilise la domination en dissociant pouvoir politique et propriété.",
    conflitsLies: ["guerres-puniques"]
  },

  {
    id: "occident-medieval",
    nom: "Occident médiéval",
    periode: "~500 – ~1450",
    dateDebut: 500,
    dateFin: 1450,
    dateAfficheeDebut: "~500",
    dateAfficheeFin: "~1450",
    region: "Europe occidentale",
    modeProduction: "feodal",
    description:
      "Formation sociale fondée sur le servage et la hiérarchie vassalique. Le surplus est prélevé sous forme de corvée, de cens en nature ou en argent. L'Église détient le tiers des terres européennes et exerce un pouvoir idéologique central. Les villes (communes, guildes artisanales) constituent un espace de résistance à l'ordre féodal. La Guerre de Cent Ans (1337–1453) exprime la crise de dissolution du féodalisme français : conflit entre rente foncière normande centralisée et rente foncière capétienne ancienne, dans un contexte de développement commercial naissant.",
    conflitsLies: ["guerre-cent-ans", "guerre-paysans-1524"]
  },

  {
    id: "angleterre-moderne",
    nom: "Angleterre moderne",
    periode: "~1485 – 1688",
    dateDebut: 1485,
    dateFin: 1688,
    dateAfficheeDebut: "1485",
    dateAfficheeFin: "1688",
    region: "Îles britanniques",
    capitale: "Londres",
    modeProduction: "capitaliste",
    description:
      "Marx utilise l'Angleterre des XVe–XVIe siècles comme exemple central de la genèse du capitalisme. Sous Henri VII et Henri VIII, les grands propriétaires fonciers rompent les liens de dépendance personnelle avec leurs suivants et leurs fermiers. Les enclosures chassent les paysans de leurs terres, créant une masse de force de travail « libre » (dépourvue de tout bien). Les travailleurs artisanaux sont progressivement prolétarisés par les marchands-fabricants. La Révolution anglaise (1640–1660) consacre la victoire de la bourgeoisie commerciale et foncière capitaliste sur la monarchie absolue.",
    conflitsLies: ["revolution-anglaise"]
  }

];

/* ============================================================
   III. CONFLITS
   ============================================================ */

const conflits = [

  {
    id: "guerres-mediques",
    nom: "Guerres médiques",
    dateDebut: -499,
    dateFin: -449,
    dateAfficheeDebut: "499 av. J.-C.",
    dateAfficheeFin: "449 av. J.-C.",
    civilisation: "grece-antique",
    belligerantsA: "Cités grecques (Athènes, Sparte, coalition hellénique)",
    belligerantsB: "Empire perse achéménide (Darios Ier, Xerxès Ier)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Les guerres médiques débutent avec la révolte des cités ioniennes contre la domination perse (499–493 av. J.-C.), soutenue par Athènes. La première invasion perse (490) est arrêtée à Marathon. La seconde (480–479), menée personnellement par Xerxès avec une armée colossale, voit Athènes brûlée mais la flotte perse détruite à Salamine et l'armée terrestre écrasée à Platées. La résistance grecque est organisée autour de la Ligue de Corinthe, coalition fragile entre cités rivales.",
    analyseClasses:
      "Les guerres médiques expriment la contradiction entre deux formes de domination : l'Empire perse, mode de production asiatique par excellence (despote unique, communautés villageoises tributaires), et les cités grecques, mode de production antique (citoyens-soldats propriétaires). La victoire grecque consolide la démocratie athénienne — c'est-à-dire le gouvernement des citoyens-propriétaires à l'exclusion des esclaves et des métèques. Elle renforce simultanément l'esclavage : les guerres de représailles (Ligue de Délos) inondent Athènes d'esclaves, minant à terme les bases du travail libre citoyen.",
    batailles: ["marathon-490", "thermopyles-480", "salamine-480", "platees-479"]
  },

  {
    id: "guerres-puniques",
    nom: "Guerres puniques",
    dateDebut: -264,
    dateFin: -146,
    dateAfficheeDebut: "264 av. J.-C.",
    dateAfficheeFin: "146 av. J.-C.",
    civilisation: "rome-antique",
    belligerantsA: "République romaine",
    belligerantsB: "Carthage (empire commercial méditerranéen)",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Trois guerres opposent Rome à Carthage pour le contrôle de la Méditerranée occidentale. La première (264–241) porte sur la Sicile et voit Rome construire une flotte ex nihilo pour vaincre Carthage sur mer. La deuxième (218–201) est celle d'Hannibal : traversée des Alpes, victoires d'Hannibal en Italie (Trasimène, Cannes), mais incapacité à prendre Rome faute de soutien suffisant ; Scipion l'Africain bat Hannibal à Zama (202). La troisième (149–146) s'achève par la destruction totale de Carthage sur ordre du Sénat romain.",
    analyseClasses:
      "Les Guerres puniques sont le moteur central de la dissolution de la République romaine. La mobilisation militaire prolongée arrache les petits paysans-citoyens à leurs terres pendant des années. À leur retour, leurs lopins ont été rachetés ou absorbés par les grands domaines esclavagistes (latifundia) des sénateurs enrichis par le butin de guerre. La plèbe rurale se prolétarise et s'entasse à Rome. Les Gracques (133–121 av. J.-C.) tenteront une réforme agraire pour restaurer la base paysanne — ils seront assassinés. C'est la contradiction fondamentale qui mène aux guerres civiles.",
    batailles: ["trebia-218", "lac-trasimene-217", "cannes-216", "zama-202"]
  },

  {
    id: "guerre-cent-ans",
    nom: "Guerre de Cent Ans",
    dateDebut: 1337,
    dateFin: 1453,
    dateAfficheeDebut: "1337",
    dateAfficheeFin: "1453",
    civilisation: "occident-medieval",
    belligerantsA: "Royaume de France (Capétiens-Valois)",
    belligerantsB: "Royaume d'Angleterre (Plantagenêts puis Lancastre)",
    importance: "majeure",
    epoque: "moyen-age",
    description:
      "Conflit dynastique prolongé entre les couronnes française et anglaise, déclenché par les prétentions d'Édouard III au trône de France. Il se déroule en quatre phases entrecoupées de trêves. Les grandes victoires anglaises (Crécy 1346, Poitiers 1356, Azincourt 1415) alternent avec la reconquête française, achevée sous Charles VII avec l'aide de Jeanne d'Arc. Le conflit déchire la France pendant plus d'un siècle, favorisant la Jacquerie (1358) et provoquant des famines et épidémies récurrentes.",
    analyseClasses:
      "La Guerre de Cent Ans est l'expression d'une contradiction entre deux formes de rente foncière : la rente normande, jeune et centralisée, portée par une noblesse militaire ancrée dans le commerce et tournée vers l'expansion (côté anglais) ; et la rente capétienne ancienne, décentralisée, enracinée dans les terroirs (côté français). La guerre épuise les deux féodalités au moment où le développement commercial naissant commence à miner leurs bases. Les Grandes Jacqueries (1358) montrent que la paysannerie française, ruinée par la fiscalité de guerre, constitue déjà une force explosive indépendante des conflits entre seigneurs.",
    batailles: ["crecy-1346", "poitiers-1356", "azincourt-1415", "orleans-1429"]
  },

  {
    id: "guerre-paysans-1524",
    nom: "Guerre des paysans allemands",
    dateDebut: 1524,
    dateFin: 1525,
    dateAfficheeDebut: "1524",
    dateAfficheeFin: "1525",
    civilisation: "occident-medieval",
    belligerantsA: "Paysans, plébéiens, petite noblesse insurgée",
    belligerantsB: "Grands princes du Saint-Empire, noblesse impériale, luthériens modérés",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Le plus grand soulèvement populaire de l'Allemagne médiévale. Environ 300 000 paysans et artisans se lèvent dans les terres impériales contre la pression fiscale et seigneuriale. Le mouvement est porté par Thomas Müntzer, qui lui donne une dimension prophétique et communiste. Luther, après avoir soutenu la critique des abus ecclésiastiques, se retourne contre les paysans et appelle les princes à les massacrer. L'insurrection est écrasée à Frankenhausen (15 mai 1525) : 100 000 morts, Müntzer capturé et exécuté.",
    analyseClasses:
      "Engels analyse longuement cette guerre comme une anticipation révolutionnaire avortée. Le Saint-Empire était archaïque, dominé par les grands princes électeurs au détriment de la petite noblesse, qui exerçait une pression fiscale démesurée sur les paysans. Les villes étaient dominées par de vieilles familles patriciennes face aux nouveaux bourgeois. Développement commercial tardif comparé à la France, l'Angleterre et les Pays-Bas. La Réforme luthérienne exprime d'abord les aspirations de la bourgeoisie naissante contre le clergé — mais Luther trahit les paysans dès que leur mouvement menace l'ordre de propriété que la bourgeoisie entend conserver.",
    batailles: ["frankenhausen-1525"]
  },

  {
    id: "revolution-anglaise",
    nom: "Révolution anglaise",
    dateDebut: 1640,
    dateFin: 1660,
    dateAfficheeDebut: "1640",
    dateAfficheeFin: "1660",
    civilisation: "angleterre-moderne",
    belligerantsA: "Parlement (bourgeoisie commerciale, gentry protestante, New Model Army)",
    belligerantsB: "Monarchie absolue de Charles Ier (noblesse royaliste, Église anglicane)",
    importance: "décisive",
    epoque: "moderne",
    description:
      "Première révolution bourgeoise de l'ère moderne. Le Parlement, contrôlé par la gentry et les marchands puritains, s'oppose aux prétentions absolutistes de Charles Ier. La guerre civile (1642–1649) se termine par l'exécution du roi et la proclamation de la République (Commonwealth). Le New Model Army — première armée professionnelle bourgeoise — est traversé par des courants radicaux : les Niveleurs (Levellers) réclament le suffrage universel masculin, les Vrais Niveleurs (Diggers) fondés en 1649 par Gerrard Winstanley cultivent communément les terres communes. Ces mouvements sont écrasés. La Restauration (1660) puis la Glorieuse Révolution (1688) stabilisent un compromis entre noblesse et bourgeoisie.",
    analyseClasses:
      "La Révolution anglaise est le premier conflit où la bourgeoisie renverse un ordre monarchique absolutiste pour imposer sa propre domination. L'enjeu fondamental est le contrôle de la politique commerciale et fiscale au service de l'accumulation capitaliste naissante. Les Diggers représentent la fraction prolétarienne qui tente d'aller plus loin : mise en commun des terres, abolition de la propriété privée. Winstanley écrit que « la Terre doit être mise en commun Trésor pour tous ». Leur échec illustre la limite de classe de la révolution bourgeoise : elle émancipe la propriété, non les sans-propriété.",
    batailles: ["naseby-1645", "worcester-1651"]
  }

];

/* ============================================================
   IV. RÉVOLTES
   ============================================================ */

const revoltes = [

  {
    id: "jacquerie-1358",
    nom: "Grande Jacquerie",
    type: "revolte",
    date: 1358,
    dateDebut: 1358,
    dateFin: 1358,
    dateAffichee: "1358",
    lieu: "Île-de-France, Picardie, Champagne",
    meneur: "Guillaume Cale (dit Caillet)",
    classesEnLutte: {
      insurgees: "Paysans serfs et vilains (« Jacques »)",
      dominantes: "Noblesse féodale, bourgeoisie parisienne (alliée aux nobles)"
    },
    resultat: "defaite",
    description:
      "Soulèvement paysan explosif déclenché en pleine Guerre de Cent Ans, dans un contexte de ruine totale de la paysannerie française : pillages des routiers, rançons imposées après la défaite de Poitiers (1356), famine. Les Jacques incendient les châteaux, tuent les seigneurs, libèrent les serfs. Le mouvement, mal armé et sans programme politique cohérent, est écrasé en quelques semaines. Guillaume Cale, venu négocier sous sauf-conduit, est capturé par traitrise par le roi de Navarre Charles le Mauvais et décapité. Le massacre des révoltés fait plusieurs milliers de morts.",
    analyseClasses:
      "La Jacquerie exprime la contradiction aiguë entre la violence économique de la féodalité en crise et la résistance paysanne. La paysannerie supporte le coût de la guerre entre aristocraties : double prédation de la noblesse française (levées de subsides) et des routiers anglais (pillages). L'absence d'alliance avec la bourgeoisie parisienne — qui choisit finalement le camp noble — isole le mouvement. Marx et Engels y voient un exemple de révolte spontanée sans organisation de classe suffisante pour renverser l'ordre établi."
  },

  {
    id: "ciompi-1378",
    nom: "Révolte des Ciompi",
    type: "revolte",
    date: 1378,
    dateDebut: 1378,
    dateFin: 1382,
    dateAffichee: "1378–1382",
    lieu: "Florence, Italie",
    meneur: "Michele di Lando (cardeur de laine)",
    classesEnLutte: {
      insurgees: "Ciompi (salariés de la laine), plébéiens florentins",
      dominantes: "Oligarchie marchande florentine (guildes majeures)"
    },
    resultat: "mitige",
    description:
      "Insurrection des travailleurs de la laine (les ciompi — cardeurs, peigneurs, fouleurs) à Florence, ville qui est alors le centre mondial de la production textile. Les ciompi, exclus des guildes (Arts majeurs), dépourvus de tout droit politique et exposés à des salaires misérables, prennent le Palazzo della Signoria et imposent la création de trois nouvelles guildes populaires. Michele di Lando devient gonfalonier de justice. Mais l'oligarchie marchande reprend rapidement le dessus : les guildes populaires sont dissoutes en 1382, les acquis annulés.",
    analyseClasses:
      "La révolte des Ciompi est le premier mouvement de la classe ouvrière salariée urbaine dont nous ayons une trace détaillée. Les ciompi ne sont pas des artisans indépendants mais des salariés intégralement dépendants du capital marchand florentin. Ils revendiquent non la propriété des métiers mais des droits politiques et un salaire décent. L'alliance fragile avec les guildes moyennes éclate dès que l'oligarchie propose des concessions partielles. Cet épisode préfigure les contradictions qui traverseront tous les mouvements ouvriers ultérieurs entre fraction modérée et fraction radicale."
  },

  {
    id: "evil-may-day-1517",
    nom: "Evil May Day",
    type: "revolte",
    date: 1517,
    dateDebut: 1517,
    dateFin: 1517,
    dateAffichee: "1517",
    lieu: "Londres, Angleterre",
    meneur: "Collectif (apprentis, artisans, journaliers londoniens)",
    classesEnLutte: {
      insurgees: "Artisans, apprentis, journaliers anglais de Londres",
      dominantes: "Marchands étrangers (Hanséates, Lombards), Couronne anglaise, haute bourgeoisie marchande"
    },
    resultat: "defaite",
    description:
      "Dans la nuit du 30 avril au 1er mai 1517, des milliers d'apprentis, artisans et journaliers londoniens se soulèvent contre les marchands étrangers (Hanséates, Lombards, Français) qui bénéficient de privilèges commerciaux leur permettant de concurrencer déloyalement les artisans anglais. Les émeutiers attaquent les quartiers étrangers, pillent des entrepôts. La répression est immédiate et sévère : plusieurs meneurs sont pendus, des centaines arrêtés. Henri VIII gracie une partie des insurgés dans une mise en scène de clémence royale.",
    analyseClasses:
      "L'Evil May Day illustre une contradiction classique dans la période de genèse du capitalisme anglais : la petite bourgeoisie artisanale londonienne, concurrencée par les marchands étrangers soutenus par la Couronne, exprime sa résistance sous la forme de xénophobie économique. Ce n'est pas une révolte contre le capital en tant que rapport social, mais contre une fraction particulière du capital (étranger) au nom de la protection de l'artisanat national. Cette confusion entre ennemi de classe et ennemi national traversera tous les mouvements ouvriers des siècles suivants."
  },

  {
    id: "guerre-paysans-allemands",
    nom: "Guerre des paysans allemands",
    type: "revolte",
    date: 1524,
    dateDebut: 1524,
    dateFin: 1525,
    dateAffichee: "1524–1525",
    lieu: "Souabe, Franconie, Alsace, Thuringe, Tyrol (Saint-Empire romain germanique)",
    meneur: "Thomas Müntzer (Thuringe), Hans Müller (Forêt-Noire), Florian Geyer (Franconie)",
    classesEnLutte: {
      insurgees: "Paysans, artisans, plébéiens, petite noblesse ruinée",
      dominantes: "Grands princes du Saint-Empire, noblesse impériale, bourgeoisie luthérienne modérée"
    },
    resultat: "defaite",
    description:
      "Le plus grand soulèvement populaire de l'Allemagne médiévale et moderne avant 1848. Environ 300 000 insurgés se lèvent dans les terres impériales. Les Douze Articles de Memmingen (1525), premier programme politique paysan, réclament la suppression du servage, la réduction des redevances, le droit à la chasse et à la pêche, l'élection des pasteurs. Thomas Müntzer donne au mouvement une dimension eschatologique : « Tout appartient à tous. » L'insurrection est écrasée à Frankenhausen le 15 mai 1525 : 5 000 morts sur le champ de bataille, Müntzer capturé, torturé et décapité. Bilan total : 100 000 morts.",
    analyseClasses:
      "Engels consacre à cet épisode sa première grande œuvre historique (La Guerre des paysans en Allemagne, 1850). Il y analyse les contradictions entre les classes insurgées : les paysans veulent abolir le servage et réduire les charges féodales (programme défensif) ; les plébéiens urbains veulent une refonte totale de l'ordre social ; la fraction Müntzer veut la communauté des biens. Ces trois programmes sont incompatibles. Luther, après avoir allumé l'étincelle de la critique, se retourne violemment contre les paysans (Contre les hordes meurtrières et pillardes des paysans, 1525) pour sauvegarder la Réforme bourgeoise. Frankenhausen reste le symbole de la trahison de classe des alliés réformateurs."
  },

  {
    id: "commune-paris-1871",
    nom: "Commune de Paris",
    type: "revolte",
    date: 1871,
    dateDebut: 1871,
    dateFin: 1871,
    dateAffichee: "18 mars – 28 mai 1871",
    lieu: "Paris, France",
    meneur: "Conseil de la Commune (collectif : Varlin, Vallès, Flourens, Delescluze…)",
    classesEnLutte: {
      insurgees: "Prolétariat parisien, Garde nationale populaire, femmes des faubourgs",
      dominantes: "Gouvernement de Thiers (bourgeoisie républicaine), armée versaillaise"
    },
    resultat: "defaite",
    description:
      "Le 18 mars 1871, le peuple de Paris refuse de livrer ses canons au gouvernement de Thiers, réfugié à Versailles après la défaite contre la Prusse. La Commune est proclamée. En 72 jours, elle met en œuvre des mesures révolutionnaires : suppression de l'armée permanente remplacée par la Garde nationale, élection et révocabilité de tous les fonctionnaires, remise des loyers pendant la guerre, séparation de l'Église et de l'État, enseignement laïc et gratuit. La Semaine Sanglante (21–28 mai) voit l'armée versaillaise reprendre Paris au prix de 20 000 à 30 000 fusillés.",
    analyseClasses:
      "La Commune est pour Marx « la forme politique enfin trouvée » de l'émancipation ouvrière. Dans La Guerre civile en France (1871), il analyse comment elle brise la machinerie d'État bourgeoise au lieu de se contenter d'en changer les occupants. Les délégués communards sont élus, révocables, payés au salaire moyen d'un ouvrier qualifié. Ce n'est pas une institution d'État classique mais un organe d'auto-organisation de la classe ouvrière. Son écrasement manifeste la neutralité de classe : la bourgeoisie française s'allie à l'ennemi prussien (Bismarck libère les prisonniers de guerre pour grossir l'armée de Versailles) plutôt que de tolérer un gouvernement ouvrier."
  }

];

/* ============================================================
   TABLEAU LEGACY — Batailles (conservé pour compatibilité)
   Les batailles individuelles seront progressivement intégrées
   dans les objets conflit via la propriété batailles: []
   ============================================================ */

const batailles = [

  /* --- Guerres médiques --- */
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
      a: "Athènes & Platées (~10 000 hoplites)",
      b: "Empire perse (Datis & Artapherne, ~25 000 hommes)"
    },
    vainqueur: "Athènes",
    pertes: "~6 400 Perses, ~192 Athéniens",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "En 490 av. J.-C., une armée perse débarque dans la plaine de Marathon. Les stratèges athéniens, sous le commandement de Miltiade, décident d'attaquer sans attendre les renforts spartiates. Exploitant la mobilité de leur phalange, ils enfoncent les ailes perses et encerclent le centre ennemi.",
    consequence:
      "La victoire athénienne stoppe la première invasion perse et renforce considérablement le prestige d'Athènes. Elle consolide la démocratie athénienne naissante."
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
      a: "Coalition grecque — 300 Spartiates, Thespiens, Thébains (Léonidas)",
      b: "Empire perse (Xerxès Ier)"
    },
    vainqueur: "Empire perse (victoire tactique)",
    pertes: "~20 000 Perses, ~4 000 Grecs dont 300 Spartiates",
    importance: "majeure",
    epoque: "antiquite",
    description:
      "Xerxès envahit la Grèce avec une armée colossale. Léonidas tient le défilé avec 7 000 guerriers grecs pendant trois jours avant d'être contourné par traîtrise. Il renvoie la majeure partie de ses troupes et périt avec ses 300 Spartiates.",
    consequence:
      "Défaite militaire mais victoire morale, les Thermopyles permettent l'évacuation d'Athènes et la concentration de la flotte grecque à Salamine."
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
      a: "Ligue hellénique — 370 trirèmes (Thémistocle)",
      b: "Empire perse — ~600 navires (Xerxès Ier)"
    },
    vainqueur: "Ligue hellénique",
    pertes: "~40 trirèmes grecques, ~200–300 trirèmes perses",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Thémistocle attire la flotte perse dans le goulet de Salamine où sa supériorité numérique devient un handicap. Les trirèmes grecques, plus manœuvrables, enfoncent les navires perses sous les yeux de Xerxès.",
    consequence:
      "La destruction de la flotte prive Xerxès de sa ligne de ravitaillement et le force à se retirer en Asie. Tournant décisif des Guerres médiques."
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
      a: "Coalition grecque (Pausanias de Sparte, ~80 000 soldats)",
      b: "Empire perse (Mardonios, ~100 000–300 000 hommes)"
    },
    vainqueur: "Coalition grecque",
    pertes: "~1 360 Grecs, ~40 000–50 000 Perses",
    importance: "décisive",
    epoque: "antiquite",
    description:
      "Dernière grande bataille terrestre des Guerres médiques. L'infanterie lourde grecque brise la cavalerie perse et tue Mardonios au combat.",
    consequence:
      "Met fin définitivement à l'invasion perse. Combinée à la victoire navale de Mycale le même jour, assure l'indépendance des cités grecques."
  }

];
