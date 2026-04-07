import useReveal from '../hooks/useReveal';

const stats = [
  { number: '4+', label: 'Projects Shipped' },
  { number: '10+', label: 'Technologies' },
  { number: 'K8s', label: 'Cloud-native Focus' },
  { number: '∞', label: 'Scale Ambition' },
];

export default function About() {
  const headerRef = useReveal();
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-number">01</span>
          <h2 className="section-title">About</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal" ref={textRef}>
            <p>I'm a <strong>backend-focused software engineering student</strong> specializing in distributed systems and cloud-native architecture.</p>
            <p>I build <strong>event-driven systems</strong> using technologies like Spring Boot, Kafka, and Kubernetes, with a strong focus on scalability, reliability, and observability.</p>
            <p>I enjoy designing systems that handle real-world challenges such as <strong>high load, system failures, and asynchronous workflows</strong>. My goal is to build production-grade systems that are resilient, maintainable, and ready for scale.</p>
          </div>
          <div className="about-stats reveal" ref={statsRef}>
            {stats.map(s => (
              <div className="stat-card" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
