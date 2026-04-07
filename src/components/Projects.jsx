import useReveal from '../hooks/useReveal';

const projects = [
  {
    icon: '⚡',
    iconBg: 'rgba(0,245,196,0.08)',
    name: 'Pulsestream',
    desc: 'A distributed, event-driven platform designed to ingest and process high-volume telemetry data in real time. Built with a microservices architecture focused on scalability, fault tolerance, and observability.',
    link: 'https://github.com/ME-Massine/pulsestream',
    tags: [
      { label: 'Java 17', color: 'green' },
      { label: 'Spring Boot', color: 'green' },
      { label: 'Kafka', color: 'green' },
      { label: 'Kubernetes', color: 'blue' },
      { label: 'Docker', color: 'blue' },
      { label: 'PostgreSQL', color: 'amber' },
    ],
  },
  {
    icon: '⚙️',
    iconBg: 'rgba(59,130,246,0.08)',
    name: 'OrderFlow',
    desc: 'An event-driven backend system that processes orders asynchronously using patterns like Saga and Outbox, ensuring consistency and resilience in distributed transactions.',
    link: 'https://github.com/ME-Massine/Orderflow',
    tags: [
      { label: 'Java', color: 'green' },
      { label: 'Spring Boot', color: 'green' },
      { label: 'RabbitMQ', color: 'blue' },
      { label: 'PostgreSQL', color: 'amber' },
      { label: 'Docker', color: 'blue' },
    ],
  },
  {
    icon: '🤖',
    iconBg: 'rgba(245,158,11,0.08)',
    name: 'Azure AI Student Support',
    desc: 'A web application that helps newly arrived and multilingual students navigate educational systems through AI-powered assistance and personalized guidance.',
    link: 'https://github.com/ME-Massine/azure-ai-student-support',
    tags: [
      { label: 'Next.js', color: 'green' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Azure', color: 'amber' },
      { label: 'OpenAI API', color: 'amber' },
    ],
  },
  {
    icon: '🛒',
    iconBg: 'rgba(0,245,196,0.08)',
    name: 'Artisan Marketplace',
    desc: 'A full-stack marketplace connecting customers with independent artisans, enabling product discovery, interaction, and secure transactions at scale.',
    link: '#',
    tags: [
      { label: 'TypeScript', color: 'blue' },
      { label: 'React', color: 'blue' },
      { label: 'Node.js', color: 'green' },
      { label: 'MongoDB', color: 'amber' },
    ],
  },
];

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-header">
        <div className="project-icon" style={{ background: project.iconBg }}>{project.icon}</div>
        <a href={project.link} className="project-link" target="_blank" rel="noreferrer">GitHub →</a>
      </div>
      <div className="project-name">{project.name}</div>
      <div className="project-desc">{project.desc}</div>
      <div className="tech-tags">
        {project.tags.map(t => (
          <span key={t.label} className={`tag tag-${t.color}`}>{t.label}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-number">02</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  );
}
