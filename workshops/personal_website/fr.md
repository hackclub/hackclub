---
name: 'Site Web Personnel'
description: 'Créer ton premier site web à partir de zéro'
author: '@MaxWofford, @virtualfuzz'
---

# Site Web Personnel

_Pour une durée limitée : crée ton site et
[obtient un bubble tea gratuitement](https://hack.club/boba)_

Prophète Orpheus, [notre mascotte](https://hackclub.com/workshops/orpheus), est ici pour te guider à travers la création de ton propre site web.

Il ressemblera à ceci :

![dinosaure qui lit un livre](https://cloud-4zpw37atj-hack-club-bot.vercel.app/2dino_site.png)

Voici le [démo du site][final_live_demo] et le [code final][final_code] (voir `index.html` et `style.css`).

Cet atelier devrait durer environ 45 minutes.

[final_live_demo]: https://prophetorpheus.github.io
[final_code]: https://github.com/prophetorpheus/prophetorpheus.github.io/tree/a98ec67da2651c18890389c72f21e1ce6bf139e1

## Partie I : Mise en place

### Se préparer à coder sur Codespaces

[GitHub Codespaces](https://github.com/features/codespaces) est un éditeur de code en ligne. Il est similaire à Google Docs, mais offre des fonctionnalités qui le rendent meilleur pour écrire du code qu'un éditeur de texte classique.

Pour commencer, crée un compte GitHub (ou connecte-toi si tu en as un) sur [https://github.com/signup](https://github.com/signup).

Ensuite, va sur [https://github.com/new](https://github.com/new).

Choisi un nom, sélectionne "MIT License" en dessous de "Choose a license", et puis clique sur "Create repository"

![Champs de saisie pour créer un dépôt](https://cloud-jyzgt07rh-hack-club-bot.vercel.app/0image.png)

Après, va sur [https://github.com/codespaces/new](https://github.com/codespaces/new).

![Créer un Codespace](https://cloud-pp1naqu1h-hack-club-bot.vercel.app/0image.png)

Sélectionne le dépôt (repository en anglais) que tu viens de créer, et puis clique sur "Create codespace"

Attends un peu pour que le Codespace se charge et tu devrais voire cela :

![Nouveau Codespace](https://cloud-1seqqsbpy-hack-club-bot.vercel.app/1screenshot9.png)

Bravo ! Tu as créé un Codespace. C'est ici que tu vas écrire tout le code pour ton site web.

Si tu utilises Firefox, tu devras peut-être désactiver la Protection renforcée contre le pistage.

## Partie II : Le fichier HTML

### 1) Le fichier HTML

HTML est utilisé pour représenter le contenu d'un site web. Tous les sites web comme Pronote et YouTube utilisent l'HTML pour représenter le contenu de leur site web.

Créer un fichier `index.html` en cliquant le bouton "+" en haut et en écrivant `index.html`

![Création du fichier index.html](https://cloud-6n7eek9u8-hack-club-bot.vercel.app/0screenshot_new_file.png)

**Écrit**, dans le fichier `index.html`, le code suivant. **NE PAS COPIER ET COLLER.**

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body></body>
</html>
```

Cette structure est la même pour toutes les pages HTML. Tu peux même le vérifier toi-même ! Fait un clic droit sur n'importe quel site web, même ce site web, et clique sur "Inspecter" pour voir ce qui se passe sur le site web. Tu trouveras chacun de ces éléments sur toutes les pages web : [le doctype](https://developer.mozilla.org/fr/docs/Glossary/Doctype), et une balise html qui contient une balise head et une balise body.

<!-- Source https://developers.google.com/web/tools/chrome-devtools/inspect-styles/imgs/elements-panel.png -->

![Outil d'inspection des éléments contenant de l'HTML et des styles CSS pour un site web](https://cloud-4zpw37atj-hack-club-bot.vercel.app/3elements-panel.png)

**Avant de continuer, nous allons expliquer ce que le code fait.**

HTML fonctionne en stockant des informations dans des balises. `<html></html>` est un exemple de balise HTML. Dans `<html></html>`, nous avons placé des autres balises : `<head></head>` et `<body></body>`. La balise corps du document (`body`) contient tout ce qui sera affiché dans la fenêtre du navigateur quand tu ouvres la page, tandis que la balise métadonnées (`head`) contient des informations sur la page pour le navigateur.

`<!DOCTYPE html>` indique au navigateur qu'on utilise la version 5 du HTML, la plus récente. HTML est un langage qui change et qui gagne et perd des fonctionnalités, donc il y a plusieurs versions.

### 2) Aperçu de la page

Voyons à quoi ressemble notre fichier HTML dans Live Preview!

Pour le faire, clique sur le bouton "Extensions" dans le panneau de gauche.

![Panneau de gauche](https://cloud-c430fguz6-hack-club-bot.vercel.app/0screenshot_extensions.png)

Ensuite, recherche `Live Server` et clique sur `Installer`.

![Chercher une extension](https://cloud-1seqqsbpy-hack-club-bot.vercel.app/0screenshot2.png)

Ensuite, retourne sur tes fichiers (clique sur le premier bouton dans le panneau de gauche) et clique `Go Live` dans la barre d'état (en bas à droite).

![Barre d'état](https://cloud-4utf7hlyb-hack-club-bot.vercel.app/0screenshot3.png)

Un nouvel onglet avec ta page devrait s'ouvrir !

À chaque fois que tu sauvegardes avec (`Ctrl+S`) l'aperçu de ta page sera mis à jour.

### 2.1) (Facultatif) Aperçu de la page dans l'éditeur

Appuis sur `F1` et recherche `Simple Browser`

![Palette de commandes](https://cloud-3553b97jw-hack-club-bot.vercel.app/0screenshot4.png)

Appuis sur la touche `entrée` et écrit le lien du nouvel onglet qui s'est ouvert lors de l'étape précédente et appuis sur `entrée` encore une fois.

Tu devrais maintenant avoir l'aperçu à côté de l'éditeur !

![Aperçu dans l'éditeur](https://cloud-3s0lkfgf4-hack-club-bot.vercel.app/0screenshot5.png)

### 3) Ajouter du texte au corps du document

Comme tu peux le constater, la page est vide. C'est parce que nous n'avons rien ajouté dans la section `body`. Nous allons maintenant ajouter du texte à la page !

Toutes les informations sont enveloppées dans des balises. Les balises sont prédéfinies dans ce langage ; elles sont un peu comme les mots dans un langage. Nous allons utiliser les 2 balises les plus simples pour le texte : la balise de titre de section (`<h1>`) et la balise paragraphe (`<p>`). La balise h1 est la première dans une série de balises de titres de section, `h1` est le titre le plus grand, et `h6` est le titre le plus petit. Comme toutes les autres balises, tu peux mettre de l'information dans ces balises en les entourant avec une balise d'ouverture et une balise de fermeture.

Commence par ajouter, entre les balises d'ouverture (`body`) et de fermeture (`</body>`), ton nom dans une balise de titre de section, et ta description dans une balise paragraphe. Voici le nom et la description du Prophète Orpheus :

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophète Orpheus</h1>
    <p>Dinosaure Développeuse. Peut coder pour de la nourriture</p>
  </body>
</html>
```

Si ta description a plusieurs paragraphes, ou contient des retours à la ligne, tu as probablement remarqué qu'un `<p></p>` ne suffit pas. Ajouter plus d'espace et de lignes vides dans HTML ne change pas l'espacement du contenu. Nous pouvons régler cela en plaçant chaque paragraphe dans leur propre `<p></p>`.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Prophète Orpheus</h1>
    <p>Dinosaure Développeuse</p>
    <p>Peut coder pour de la nourriture</p>
  </body>
</html>
```

Sauvegarde ton fichier `index.html` et regarde l'aperçu de ta page. Woohoo!

### 4) Ajouter des images au corps du document

Tout d'abord, trouve une image que tu aimerais ajouter à ta page. Tu peux trouver des images sur Google Images, Facebook, ou Imgur. Nous aurons besoin du lien de l'image, donc fait un clic droit et choisi "Copier le lien de l'image".

Les images sont ajoutées en HTML en utilisant la balise image (`<img>`). La balise image a un attribut qui s'appelle `src`, qui contient l'URL de l'image que tu veux afficher. Par exemple, si je veux ajouter cette image du Prophète Orpheus, je ferais un clic droit et je copierai le lien de l'image, qui est https://github.com/hackclub/dinosaurs/raw/main/smart_dinosaur_docs.png, que je mettrai dans une balise image comme ceci :

```html
<img
  src="https://github.com/hackclub/dinosaurs/raw/main/smart_dinosaur_docs.png"
/>
```

Tu as probablement remarqué que la balise image n'a pas de balise de fermeture comme `<h1></h1>` ou `<body></body>`. C'est parce que c'est un [élément vide](https://developer.mozilla.org/fr/docs/Glossary/Void_element), ce qui veut dire qu'elle ne contient pas de contenu.

Maintenant, ajoute cela dans ton fichier `index.html`. J'ai mis la photo avant le titre de la page, et mon code est comme ceci :

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/main/smart_dinosaur_docs.png"
    />
    <h1>Prophète Orpheus</h1>
    <p>Dinosaure Développeuse</p>
    <p>Peut coder pour de la nourriture</p>
  </body>
</html>
```

![Dinosaure qui lit un livre avec du texte qui le décrit en dessous](https://cloud-1lgnmk5nw-hack-club-bot.vercel.app/2no_css.png)

Rappelle-toi, tu dois **sauvegarder** ton code à chaque fois que tu veux voir la nouvelle version de ton site web.

Maintenant que notre site web contient du texte et une image, nous n'avons pas fini. Notre page web fonctionne entièrement, mais il manque un peu de style. Il ne faut pas s'inquiéter. Le CSS va nous permettre de manipuler le style de notre page pour nos besoins.

## Partie III : Le fichier CSS

Donc, c'est quoi CSS ? CSS (Cascading Style Sheets en anglais), soit feuille de style en cascade, est un langage utilisé pour manipuler le style des balises (ou "éléments") d'une page web.

Pendant que l'HTML crée le contenu et sa structure, le CSS va te permettre d'expliquer à quoi doit ressembler le contenu de ta page web ; tu pourras manipuler les couleurs, les espacements, etc.

### 1) Utilisation du CSS

Créer un fichier `style.css` de la même façon que tu as créé `index.html`. Cela est appelé une feuille de style externe, car le fichier CSS est externe au fichier HTML (le code de style n'est pas dans le fichier HTML).

Avoir un fichier CSS ne suffit pas, il faut aussi déclarer dans le fichier HTML d'utiliser le fichier CSS, sinon il ne l'utilisera pas. Nous devons faire un lien entre le fichier CSS et le fichier HTML. Nous ferrons cela en écrivant le code suivant dans la balise d'en tête du fichier `index.html` (entre `<head>` et `</head>`), parce que la balise d'en-tête est là où nous décrivons les informations sur la page au navigateur.

```html
<link rel="stylesheet" href="style.css" />
```

`<link />` est la balise de lien vers des ressources externes, qui décrit les relations entre un fichier (dans ce cas, `index.html`), et un autre fichier externe (`style.css`). Dans notre exemple, `rel="stylesheet"` explique quel type de relation c'est, que `style.css` est un fichier de style, et `href` explique où est-ce que le fichier est situé (dans ce cas, c'est juste le fichier `style.css`). La balise de lien, comme la balise image, est un élément vide, qu'on peut reconnaitre par le `/` qui est avant le `>`.

Notre fichier HTML ressemble à cela :

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <img
      src="https://github.com/hackclub/dinosaurs/raw/main/smart_dinosaur_docs.png"
    />
    <h1>Prophète Orpheus</h1>
    <p>Dinosaure Développeuse</p>
    <p>Peut coder pour de la nourriture</p>
  </body>
</html>
```

### 2) Ajouter des règles CSS au fichier de style

Maintenant que nous avons fait un lien entre le fichier CSS et notre fichier HTML, nous allons écrire du CSS pour redimensionner l'image.

Ouvre `style.css` et écris le code suivant :

```css
img {
  width: 200px;
}
```

Un fichier de style CSS contient des règles, aussi connues sous le nom de bloc de déclaration CSS. Chaque règle contient un sélecteur,  et des propriétés et des valeurs entre des accolades.

Dans notre cas, le sélecteur est `img`. Cela sélectionne toutes les balises images (donc, toutes les images). La règle définit la largeur (width) de toutes les choses sélectionnées (dans notre cas, toutes les images) à `200px`. `px` veut dire pixels, qui est une unité de mesure sur les écrans. Quand cette règle est appliquée, toutes les images sur notre page auront une largeur de 200 pixels.

Ensuite, nous allons centrer l'ensemble des éléments du corps de la page.

Nous allons ajouter :

```css
body {
  text-align: center;
}
```

Cette règle explique que toutes les balises `body` doivent avoir une propriété `text-align` définie en `center`. Cela centre tous les éléments de notre page, car tout le contenu de notre fichier HTML est écrit à l'intérieur de la balise `body`.

Maintenant, nous allons changer la police du texte. Nous allons ajouter une propriété `font-family`, à la règle `body`, avec la valeur `"Arial"`. Ce qui ressemblera a ça :

```css
body {
  text-align: center;
  font-family: 'Arial';
}
```

Tu peux aller plus loin en ajoutant un peu de couleur à la page ! La propriété `color` te permet de définir la couleur du texte, et `background-color` te permet de changer la couleur de fond. Tu peux trouver une liste de noms de couleurs sur [W3Schools](https://www.w3schools.com/colors/colors_names.asp). N'oublie pas de prendre une combinaison de couleurs qui rendra le texte lisible.

```css
body {
  text-align: center;
  font-family: 'Arial';
  background: azure;
  color: purple;
}
```

Assure-toi d'avoir **sauvegardé** pour pouvoir voir la nouvelle version de ton site web. Pas mal !

![Enfants qui célèbrent](https://cloud-4zpw37atj-hack-club-bot.vercel.app/0celebrate_harry_potter.gif)

## Partie IV : Publication

Pour l'instant, tu es le seul à pouvoir voir ton site. Réglons ce problème !

Clique sur l'onglet `Contrôle de code source` dans le volet gauche.

![Volet gauche](https://cloud-a2t1lug9o-hack-club-bot.vercel.app/0screenshot_git.png)

Écrit un cool message en haut et puis clique sur `Validation`.

![Onglet "Contrôle de code source"](https://cloud-nge9xhuux-hack-club-bot.vercel.app/0screenshot6.png)

Ensuite, clique sur `Toujours` dans le pop-up

![pop-up](https://cloud-8gllz91ga-hack-club-bot.vercel.app/0screenshot7.png)

Maintenant, il faut aller sur ton compte GitHub et ouvrir ton dépôt (repository en anglais) que nous avons créé au début de cet atelier. Une fois que c'est ouvert, clique sur `Settings`, puis sur `Pages`, et change la branche de déploiement en "main".

![Paramètres GitHub](https://cloud-mqt6brgrz-hack-club-bot.vercel.app/0screenshot_2024-04-18_at_15.55.28.png)

Enfin, clique sur `Save` pour enregistrer les modifications.

Tout est prêt ! Ton site est publié, et tu peux le mettre à jour en suivant les étapes ci-dessous.

### Publier les changements

**Commit tes modifications**

Quand tu veux ajouter une nouvelle fonctionnalité ou faire une correction, tu dois faire un commit des lignes de code que tu as modifiées.

Clique sur l'onglet `Contrôle de code source` à gauche de ton Codespace, remplit un message qui décrit tes changements, puis clique sur `Validation`.

![Onglet "Contrôle de code source"](https://cloud-a7ulcfg3e-hack-club-bot.vercel.app/0screenshot_update.png)

Et voilà ! Tes changements sont maintenant publiés sur `NOM-UTILISATEUR.github.io/NOM-REPO` sur internet pour que tout le monde puisse le voir !

_Attends 2 minutes pour que tes modifications soient publiées._

![Deux personnes qui chantent et qui dansent dans une voiture](https://cloud-4zpw37atj-hack-club-bot.vercel.app/1celebrate_rush_hour.gif)

_[Reçoit un bubble tea gratuitement](https://hack.club/boba) après avoir déployé ton site_

## Partie V : Hacker

Dans cette partie, ton challenge est d'ajouter d'autres fonctionnalités à ton site pour le rendre vraiment personnel !

Tu veux utiliser une autre police ? Fait des recherches !\
Tu veux plus d'images ? Fait des recherches !\
Tu veux plus de texte ? Écrire ta vie entière ? Une image de fond ? Une musique de fond ? Une vidéo ? Plus de pages ? Fait des recherches !

Un bon moyen d'avoir plus d'idées est de regarder les sites des autres. Trouve un site qui t'intéresse, tu en trouveras sur la liste ci-dessous ou sur internet, choisi quelque chose qui te plait, et fait des recherches pour savoir comment le faire !

**Sites web faits par d'autres hackers Hack Club (en anglais):**

- [Zeyu (Peter) Yao](https://cytronicoder.com)
- [Kognise](https://kognise.dev/)
- [Celeste](https://celeste.exposed/)
- [Sarthak Mohanty](https://sarthakmohanty.me/)
- [Kat Huang](https://katmh.com)
- [Theo Bleier](https://tmb.sh/)
- [Megan Cui](https://megancui.com/)
- [Matthew Stanciu](https://matthewstanciu.me/)
- [Sophie Huang](https://sohuang.github.io/)
- [Jevin Sidhu](http://jevinsidhu.com/)
- [Sam Poder](http://sampoder.com/)
- [Nisarga Adhikary](https://nisarga.me)

**Sites web faits par des professionnels (en anglais):**

- [Melody Starling](https://melody.dev/)
- [Eel Slap](http://eelslap.com)
- [Alice Lee](http://byalicelee.com)
- [Lynn Fisher](https://lynnandtonic.com)
- [Tatiana Mac](https://tatianamac.com)
- [Mina Markham](http://mina.codes/)
- [Robb Owen](https://robbowen.digital)
- [Yaron Schoen](http://yaronschoen.com)

### Ressources supplémentaires

Voici des ressources additionnelles que tu peux consulter pour rendre ton site web encore plus beau (la plûpart en anglais) :

- [MDN (la version française)](https://developer.mozilla.org/fr/): Un peu comme un Wikipédia mais pour le développement web
- [HTML Dog](https://htmldog.com/guides/html/beginner/): _Fait pour les débutants. Si tu ne sais pas quel choisir, choisi celui-ci._
  - Si tu veux apprendre comment styliser ton site web avec CSS, tu peux consulter leur [tutoriel CSS](https://htmldog.com/guides/css/beginner/).
- [Free Code Camp](https://freecodecamp.com/map): _Interactif et basé sur les exercices._
- [Treehouse](https://teamtreehouse.com/library/html/introduction/): _Leurs vidéos sont faciles à comprendre et complètes._

## Partie VI : Partager avec la communauté

Maintenant que tu as fini de faire un site web, il serait cool de partager ta création. Ton site est sur internet, donc tu peux le partager avec n'importe qui avec internet ! Il faut juste donner l'adresse de ton site web !

Tu sais probablement déjà comment partager quelque chose avec tes amis et ta famille, mais si tu veux partager ton site avec la communauté internationale de Hack Club, tu peux le faire sur notre Slack.

1. Dans un nouvel onglet, ouvre et suit [ces instructions][slack] pour s'inscrire à notre Slack.
2. Ensuite, publie ton lien sur le canal [`#ship`](https://hackclub.slack.com/messages/ship) ou le canal [`#france`](https://hackclub.slack.com/messages/france) pour le partager avec tout le monde !

[slack]: https://slack.hackclub.com/
