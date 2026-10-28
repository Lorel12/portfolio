# Portfolio de Lorelle

Portfolio bilingue (français/anglais) réalisé avec React, TypeScript et Vite.

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Installation et développement

```sh
npm ci
npm run dev
```

Vite affiche l'adresse locale à ouvrir dans le navigateur.

## Vérifications et build

```sh
npm run lint
npm run build
npm run preview
```

Le build de production est généré dans `dist/`.

## Publication sur GitHub Pages

Le projet est configuré pour être publié sous `/portfolio/`.

```sh
npm run deploy
```

Cette commande construit le site puis publie `dist/` sur la branche `gh-pages`. Pour le publier à la racine d'un autre domaine, adaptez la propriété `base` de `vite.config.ts`.

## Contenu

- `src/data.ts` contient les coordonnées et le contenu français.
- `src/locales.ts` contient les textes de l'interface et les traductions anglaises.
- `public/cv_Lorelle_web.pdf` et `public/cv_Lorelle_web_en.pdf` sont les CV affichés dans l'aperçu et proposés au téléchargement.

Conservez les deux CV dans `public/` et gardez leurs noms de fichiers synchronisés avec `src/App.tsx`.
