import useReveal from '../hooks/useReveal';

const skillGroups = [
  {
    title: 'Core',
    skills: ['Distributed Systems', 'Event-Driven Architecture', 'Microservices', 'System Design'],
  },
  {
    title: 'Backend',
    skills: ['Java / Spring Boot', 'Node.js', 'REST APIs', 'Apache Kafka', 'RabbitMQ'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Kubernetes', 'Docker', 'Microsoft Azure', 'GitHub Actions / CI-CD'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React / Next.js', 'OpenAI API'],
  },
  {
    title: 'Principles',
    skills: ['Scalability', 'Observability', 'Fault Tolerance', 'Saga / Outbox Patterns'],
  },
];

function SkillGroup({ group }) {
  const ref = useReveal();
  return (
    <div className="skill-group reveal" ref={ref}>
      <div className="skill-group-title">{group.title}</div>
      <div className="skill-list">
        {group.skills.map(s => (
          <div className="skill-item" key={s}>
            <span className="skill-dot"></span>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useReveal();

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-number">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map(g => <SkillGroup key={g.title} group={g} />)}
        </div>
      </div>
    </section>
  );
}
