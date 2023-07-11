# Chat client
Thème visuel : Underale
## Technologies utilisées
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) 
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
## Pré-requis

- Avoir nodejs d'installé sur votre machine. Pour savoir si vous l'avez installé, exécutez dans un terminal:

````
node -v
````
Si cela vous retourne une version, alors nodejs est bien installé.

## Installation du projet

Suite à l'installation de nodejs, il faut ouvrir un terminal dans le répertoire du projet, puis exécuter cette commande à partir de la racine du projet :

````
npm install
````
Cela installera les librairies nécessaires au fonctionnement interne du chat.

## Démarrer votre projet

Pour démarrer la reconstruction du front-end, ouvrez un terminal dans la racine du projet (pas le dossier client), puis...

````
npm run webpack
````

Si webpack est actif, votre JavaScript se regénèrera automatiquement lorsqu'un fichier est modifié. Par exemple, si vous modifiez le fichier "client/src/page-index.js" (ou n'importe quel fichier utilisé dans celui-ci), webpack mettra à jour le fichier "client/dist/index.js" avec vos modifications.

Vous pouvez ensuite ouvrir les pages `chat.html`, `index.html` et `register.html` via votre navigateur et dans VS Code.


<!-- Section remise cvm  -->
<!-- ## Et ensuite?...

Pour ce projet, ne programmez que dans le dossier `client/`. Vous pouvez modifier tous les fichiers qui s'y trouvent, mais il est fortement déconseillé d'altérer les lignes de code déjà en place, car il est 100% fonctionnel avec le serveur de chat. Ajoutez des lignes, créez des fichiers et images, mais attention de ne pas *briser* l'accès au serveur (connexion, déconnexion, etc.).

Toutes les informations nécessaires à la réalisation du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]

 ## Remise du projet

Les informations concernant la remise du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]  -->