import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleCanvas from './components/ParticleCanvas';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <ParticleCanvas />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <span>© 2026 Massine Amakhtari — Backend Engineer</span>
      </footer>
    </div>
  );
}
