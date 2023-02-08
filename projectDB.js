export const project = [
  {
    id: 1,
    name: "Application de suivi crypto",
    image: "/img/Crypto.PNG",
    logo1: "/img/React.png",
    logo2: "/img/redux.png",
    logo3: "/img/Shape.png",
    concept:
      "Cette application permet de suivre l'évolution et d'ajouter en favoris les crypto-monnaies de notre choix.",
    fonction:
      "Le header du projet contient une Treemap qui suit la proportion du crypto actif par rapport au marché global ainsi que l'évolution quotidienne de ces derniers.",
    presentation: "/img/projet/cryptoBanner.PNG",
    fonction2:
      "Le dashboard permet de suivre précisement l'évolution des différents crypto-monnaies du marché. Lors du hover sur un actif on a accès au graphique de son évolution sur une période de temps choisie. Les graphiques sont rendus par la librairie React Recharts",
    presentation2: "/img/projet/cryptoCore.PNG",
    fonction3:
      "L'utilisateur peut ajouter des actifs en favoris et ainsi filtrer le tableau pour suivre les crypto qu'il souhaite. Cette fonctionnalité est possible via l'utilisation de Redux",
    presentation3: "/img/projet/cryptoFav.PNG",

    tools:
      "Projet réalisé en cours qui fait appel à l'API de coingecko pour la data sur les crypto-monnaies. Afin de dynamiser l'affichage des éléments et de pouvoir gérer les favoris sans rechargement de page, j'ai intégrer Redux au projet. La gestion des différents graphiques se fait via la librairie React Recharts.",
  },
  {
    id: 2,
    name: "Film database",
    image: "/img/cinemaApp.PNG",
    logo1: "/img/React.png",
    logo2: "/img/Nodejs.png",
    logo3: "/img/Shape.png",
    concept:
      "Application pour voir les films et séries en tendance et créer sa liste de favoris.",
    fonction:
      "Suivez les dernières tendances en film et série et créer votre propre liste de favoris. Les mises à jour de la base de données sont automatiques. Lors du changement de catégorie film ou série, la liste affichée se met à jour. L'utilisateur peut à tout moment changer le thème du site en Light mode, fonctionnalité rendu possible via un Context React.",
    presentation: "/img/projet/movieBanner.PNG",
    fonction2:
      "L'utilisateur a la possibilité de rechercher n'importe quel contenu film, série ou auteur. Il peut ensuite l'ajouter à sa liste personnelle.",
    presentation2: "/img/projet/movieSearch.PNG",
    fonction3:
      "L'utilisateur peut à tout moment mettre à jour sa liste personnelle.",
    presentation3: "/img/projet/movieAdd.PNG",
    tools:
      "Pour m'entrainer sur React j'ai construit cette application pour les passionés de cinéma / série. Je fais appel à l'API MovieDB pour gérer les différentes informations. La création d'une base de donnée en local via NodeJS a été nécéssaire pour gérer les favoris des utilisateurs.",
  },
  {
    id: 3,
    name: "Valorant",
    image: "/img/valorant.PNG",
    logo1: "/img/Javascript.png",
    logo2: "/img/Shape.png",
    concept: "Page d'accueil de séléction des agents du jeu Valorant.",
    fonction:
      "Le slider réaliser avec slickJS permet de voir tous les agents présents sur le jeu Valorant. Le gros challenge pour moi dans ce projet a surtout été les animations des différents éléments en css et javascript.Le projet n'est malheureusement pas en ligne, je vous invite donc à aller voir le site officiel puisque j'ai réaliser une copie exacte du site. https://playvalorant.com/fr-fr/agents/raze/",
    presentation: "/img/projet/valoCaroussel.PNG",
    fonction2:
      "Lorsqu'un utilisateur séléctionne un agent via le slider, la partie de présentation des sorts se met à jour pour afficher les sorts de l'agent. Ainsi l'utilisateur peut découvrir l'ensemble des sorts du jeu simplement.",
    presentation2: "/img/projet/valoSpell.PNG",
    fonction3:
      "Le site propose des articles relatifs au contenu présent sur la page ainsi qu'à la version du jeu vidéo. Le principal challenge a été de réaliser l'animation au hover  des cartes articles en css.",
    presentation3: "/img/projet/valoArticle.PNG",
    tools:
      "J'ai réalisé ce projet pour m'entrainer à réaliser des sites professionnels en respectant exactement le contenu existant. Le site est fonctionnel sur tous les supports. Je me suis aussi entrainé à utiliser une librairie JS, slickJS, qui permet de réaliser des carrousels élaborés (présent dans la banner du site).",
  },
  {
    id: 4,
    name: "Mini game",
    image: "/img/miniGame.PNG",
    logo1: "/img/Javascript.png",
    logo2: "/img/Shape.png",
    concept: "Jeu Pierre, Papier, Ciseau contre l'ordinateur",
    fonction:
      "Détendez-vous et élaborez votre meilleur stratégie pour vaincre l'ordinateur au jeu du Pierre Papier Ciseau, 3 manches gagnantes ! (puit interdit)",
    presentation: "/img/projet/gamePres.PNG",
    tools:
      "Petit projet assez simple pour m'entrainer en algorithmie via un jeu. Application réalisée en POO (programmation orientée objet) pour gérer les différentes vues.",
  },
];
