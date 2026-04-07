import useReveal from '../hooks/useReveal';

const links = [
  { label: '✉ Email', href: 'mailto:massine000@gmail.com' },
  { label: '⌥ GitHub', href: 'https://github.com/ME-Massine' },
  { label: '◈ LinkedIn', href: 'https://www.linkedin.com/in/massine-amakhtari-48b815261/' },
];

export default function Contact() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const subRef = useReveal();
  const linksRef = useReveal();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-label reveal" ref={labelRef}>// Let's connect</div>
        <h2 className="contact-title reveal" ref={titleRef}>Open to<br />Opportunities</h2>
        <p className="contact-sub reveal" ref={subRef}>
          I'm actively looking for backend engineering roles focused on distributed systems and cloud-native architecture. Let's build something that scales.
        </p>
        <div className="contact-links reveal" ref={linksRef}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="contact-link" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
