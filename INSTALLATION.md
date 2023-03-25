# Vue + TypeScript + Jest + Vite

### Installer Homebrew (MacOS)
``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


### Installer GIT (MacOS)
``` bash
brew install git
```


### Configurer GIT
``` bash
git config --global user.name "Prénom Nom"
git config --global user.email "courriel"
git config --global color.ui auto
```


### Installer node (MacOS)
``` bash
brew install node
```


### Vérifier les mises à jours des paquets (MacOS)
``` bash
brew update       
brew upgrade node
```


### Créer un espace de développement (MacOS)
Créer un répertoire de développement et y accéder : 
``` bash
mkdir ~/_dev/ && cd ~/_dev/
```


### Créer une application avec le générateur de Vite
``` bash
npm create vite@latest
```


### Choisir un nom de projet (i.e. *projet-vue-ts*), le framework **Vue** et le variant **Typescript**

1. Accéder au répertoire : `cd projet-vue-ts`
2. Activer GIT : `git init`
3. Ajuster le fichier *.gitignore*
4. Ajouter tous les fichiers du répertoire : `git add -A`
5. Effectuer un commit initial : `git commit -m "Premier commit"`


### Installer les librairies et tester l'application

1. Installer les packet requis : `npm install`
2. Lancer le serveur de développement : ` npm run dev`