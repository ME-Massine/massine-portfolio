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