# Portfolio site

A retro/pixel-themed CS portfolio: home, about, university coursework (Foundation → Year 3), solo projects, and a contact page. Plain HTML/CSS/JS — no build step, no framework.

## File structure

```
index.html                 Home / welcome page
about.html                 About me
university.html            University hub (level-select)
university-foundation.html
university-year1.html
university-year2.html
university-year3.html      (each links to the next/previous year at the bottom)
solo-projects.html
contact.html
css/style.css              Shared design system
js/script.js               Mobile nav + small icon injection
```

## Before you publish

Search each file for square-bracket placeholders like `[Your Name]`, `[add your email]`, `[Project title]` and replace them. Nothing personal is filled in yet on purpose — no real name, socials, or university name.

Project cards are duplicated where you'll need more than the example ones — look for the `<div class="build-note">` comment near the top of each projects page, it tells you exactly which block to copy.

## Adding a project card

Copy one `<article class="pixel-frame card">…</article>` block and paste it inside the same `<div class="grid">`, then edit the title, description, tags, and links.

## Running it locally

No install needed — just open `index.html` in a browser. For a closer-to-production preview (so relative links behave the same as on GitHub Pages), you can also run a tiny local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Create a new GitHub repository (public, so Pages can serve it on the free tier).
2. Push these files to the repository's default branch (e.g. `main`), keeping the folder structure above — `index.html` should sit at the repo root.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick `main` and `/ (root)`, then save.
5. GitHub will give you a URL like `https://yourusername.github.io/repo-name/` — it can take a minute or two to go live after each push.
6. Every time you push a change to that branch, the live site updates automatically.

You don't need your real name or a custom domain to do this — a GitHub username and a repo name are enough to get a working link.
