# Massine Amakhtari — Portfolio

A production-grade React portfolio for a Backend Engineer specializing in distributed systems and cloud-native architecture.

## Tech Stack

- **React 18** — component-based UI
- **CSS Variables** — dark theme design system
- **Canvas API** — animated particle background
- **IntersectionObserver** — scroll-triggered reveal animations
- **Google Fonts** — Syne (display) + Space Mono (body)

## Project Structure

```
src/
├── App.jsx                  # Root component
├── App.css                  # Global styles & design tokens
├── index.jsx                # Entry point
├── components/
│   ├── Nav.jsx              # Fixed navigation bar
│   ├── Hero.jsx             # Animated hero with typing effect
│   ├── About.jsx            # Bio + stat cards
│   ├── Projects.jsx         # Project cards grid
│   ├── Skills.jsx           # Skills grouped by category
│   ├── Contact.jsx          # Contact links
│   └── ParticleCanvas.jsx   # Animated particle background
└── hooks/
    └── useReveal.js         # Scroll reveal custom hook
```

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

## Build for Production

```bash
npm run build
```

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://ME-Massine.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

### Netlify
Drag and drop the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

## Customization

- **Colors**: Edit CSS variables in `public/index.html` (`--accent`, `--accent2`, `--accent3`)
- **Projects**: Update the `projects` array in `src/components/Projects.jsx`
- **Skills**: Update the `skillGroups` array in `src/components/Skills.jsx`
- **Typing phrases**: Update the `phrases` array in `src/components/Hero.jsx`
