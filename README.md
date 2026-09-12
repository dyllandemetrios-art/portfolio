# Portfolio Dyllan Démétrios

Site statique en HTML/CSS pur (aucune installation, aucune dépendance).

## 1. Avant de publier

- [ ] Dans `moodboard.html`, remplace `TON_PSEUDO` et `TON_BOARD` par l'URL de ton vrai board Pinterest (deux occurrences dans le bloc `data-pin-do`).
- [ ] Dans `games.html`, vérifie les liens itch.io et ajoute d'autres jeux si besoin (copie un bloc `<article class="entry entry--game">…</article>`).
- [ ] Dans `novels.html`, ajuste les pitchs si tu veux un ton différent pour le grand public (ceux-ci sont volontairement courts).

## 2. Mettre le site sur GitHub

1. Va sur [github.com](https://github.com), connecte-toi.
2. Clique sur **New** pour créer un dépôt (ex. `portfolio`), en **Public**.
3. Sur ta machine, dans le dossier de ces fichiers :
   ```
   git init
   git add .
   git commit -m "Site portfolio"
   git branch -M main
   git remote add origin https://github.com/TON_PSEUDO/portfolio.git
   git push -u origin main
   ```
   (ou glisse-dépose les 5 fichiers directement dans l'interface GitHub via "Add file → Upload files", sans ligne de commande).

## 3. Déployer sur Vercel (gratuit)

1. Va sur [vercel.com](https://vercel.com), connecte-toi avec GitHub.
2. **Add New → Project**, sélectionne ton dépôt `portfolio`.
3. Framework Preset : choisis **"Other"** (c'est un site statique, pas du Next.js).
4. **Deploy**.
5. Ton site est en ligne à une adresse du type `https://portfolio-xxxx.vercel.app`. Tu peux ensuite brancher un nom de domaine perso depuis les réglages du projet Vercel si tu en as un.

## Structure

```
index.html       accueil
games.html       jeux (Unity / Unreal)
novels.html      romans (Chrones, Anandavīra)
moodboard.html   board Pinterest en direct
styles.css       tout le style du site
```
