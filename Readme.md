# Pixels color count

## Install
To install all dependencies :
``` sh
yarn install
```

## Run
To run the project :
```
yarn start
```

## Déploiement sur GitHub Pages
Il faut d'abord builder le projet (toutes les sources seront dans `/dist`)
```
yarn build
```
Il faut ensuite pousser le dossier `/dist` sur la branche gh-pages

```
git subtree push --prefix dist origin gh-pages
```
