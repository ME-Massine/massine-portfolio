import { useEffect, useState } from "react";

const phrases = [
  "event-driven_systems",
  "distributed_platforms",
  "cloud_native_backends",
  "kafka_pipelines",
  "kubernetes_workloads",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = phrases[phraseIndex];
    let timeout;

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          90,
        );
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-label">{"// Available for opportunities"}</div>
        <h1 className="hero-name">
          Massine
          <br />
          <span>Amakhtari</span>
        </h1>
        <p className="hero-tagline">
          Backend Engineer specializing in distributed systems and cloud-native
          architecture. I build systems that scale.
        </p>
        <div className="typing-wrap">
          <span className="typing-prefix">$ currently_building</span>
          <span className="typing-text">{displayed}</span>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line"></div>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
