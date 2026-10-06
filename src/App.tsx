import { useEffect, useState } from "react";
import { profile, formations, experiences, projects, skills } from "./data";
import "./index.css";

const links = [
  ["about", "À propos"],
  ["parcours", "Parcours"],
  ["projets", "Projets"],
  ["competences", "Compétences"],
  ["contact", "Contact"],
];

export default function App() {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo" aria-label={`${profile.name}, accueil`}>
          <span className="logo-mark">L</span>{profile.name}<span className="logo-period">.</span>
        </a>
        <nav aria-label="Navigation principale">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <button className="theme-btn" aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
          <span>{theme === "dark" ? "Clair" : "Sombre"}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="availability-dot" />Portfolio 2026 <span className="eyebrow-divider">/</span> Développement web & IA</p>
            <h1>{profile.name}<span className="hero-period">.</span></h1>
            <h2>{profile.role}</h2>
            <p className="lead">{profile.tagline}</p>
            <div className="actions">
              <a className="btn primary" href="#projets">Découvrir mes projets <span aria-hidden="true">↗</span></a>
              <a className="btn secondary" href={profile.cv} download><span aria-hidden="true">↓</span> Télécharger le CV</a>
            </div>
          </div>
          <aside className="hero-panel reveal" aria-label="Domaines de travail">
            <div className="panel-topline"><span>MON TERRAIN DE JEU</span><span>01 — 03</span></div>
            <p className="panel-statement">Des idées<br />aux <em>interfaces.</em></p>
            <div className="panel-list">
              <div><span>01</span><span>Interfaces web</span><span>↗</span></div>
              <div><span>02</span><span>API & données</span><span>↗</span></div>
              <div><span>03</span><span>Vision par ordinateur</span><span>↗</span></div>
            </div>
            <span className="panel-orbit" aria-hidden="true">L</span>
          </aside>
          <a className="scroll-cue" href="#about"><span />Faire défiler</a>
        </section>

        <section id="about" className="section">
          <div className="section-heading reveal"><span className="section-index">01 / À PROPOS</span><h3 className="title">Curieuse de nature,<br /><em>ingénieure par choix.</em></h3></div>
          <div className="about-copy reveal"><p className="lead">{profile.about}</p></div>
        </section>

        <section id="parcours" className="section">
          <div className="section-heading reveal"><span className="section-index">02 / PARCOURS</span><h3 className="title">Là où j’apprends<br /><em>et je construis.</em></h3></div>
          <div id="formations" className="career-block">
            <div className="career-heading reveal">
              <div><span className="career-eyebrow">FORMATION</span><h4>Les écoles fréquentées</h4></div>
              <span className="career-count">{String(formations.length).padStart(2, "0")} étapes</span>
            </div>
            <ol className="timeline">
              {formations.map((item, index) => (
                <li key={item.title} className="timeline-item reveal">
                  <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="timeline-main"><span className="chip">{item.period}</span><h4>{item.title}</h4><small>{item.place}</small></div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div id="experiences" className="career-block">
            <div className="career-heading reveal">
              <div><span className="career-eyebrow">EXPÉRIENCE PROFESSIONNELLE</span><h4>Stages et missions</h4></div>
              <span className="career-count">{String(experiences.length).padStart(2, "0")} expérience</span>
            </div>
            <ol className="timeline">
              {experiences.map((item, index) => (
                <li key={item.title} className="timeline-item reveal">
                  <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="timeline-main"><span className="chip">{item.period}</span><h4>{item.title}</h4><small>{item.place}</small></div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-heading section-heading-inline reveal"><div><span className="section-index">03 / SÉLECTION</span><h3 className="title">Projets choisis<span className="hero-period">.</span></h3></div><span className="section-note">Du concret, du code, de l’impact.</span></div>
          <div className="grid">
            {projects.map((p, index) => (
              <article key={p.title} className={`card project-card project-card-${index + 1} reveal`}>
                <span className="project-number">0{index + 1}</span>
                <small>{p.context}</small>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                {p.link && <a className="more" href={p.link}>Voir le projet</a>}
              </article>
            ))}
          </div>
        </section>

        <section id="competences" className="section">
          <div className="section-heading section-heading-inline reveal"><div><span className="section-index">04 / OUTILS</span><h3 className="title">Ma boîte à outils<span className="hero-period">.</span></h3></div><span className="section-note">Des bases solides, toujours en mouvement.</span></div>
          <div className="grid">
            {skills.map((s) => (
              <div key={s.group} className="card skill-card reveal">
                <h4>{s.group}</h4>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i} className="chip">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="card cta reveal">
            <span className="section-index">05 / ET MAINTENANT ?</span>
            <h3 className="title">On imagine la suite<br /><em>ensemble ?</em></h3>
            <p className="lead">Pour un stage, un projet ou une question, écrivez-moi.</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>Envoyer un email <span aria-hidden="true">↗</span></a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={`tel:${profile.tel}`} target="_blank" rel="noreferrer">Téléphone</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a href="#top" className="footer-brand">{profile.name}<span className="hero-period"></span></a><span>© {new Date().getFullYear()} — Copyright</span><a href="#top" className="back-top">Retour en haut ↑</a></footer>
    </>
  );
}