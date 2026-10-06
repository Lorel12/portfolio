import { useEffect, useState } from "react";
import { profile, timeline, projects, skills } from "./data";
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

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">{profile.name}</a>
        <nav>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <button className="theme-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "Mode clair" : "Mode sombre"}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <a className="btn primary" href="#projets">Voir mes projets</a>
            <a className="btn" href={profile.cv} download>Télécharger le CV</a>
          </div>
        </section>

        <section id="about" className="section">
          <h3 className="title">À propos</h3>
          <p className="lead">{profile.about}</p>
        </section>

        <section id="parcours" className="section">
          <h3 className="title">Parcours</h3>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title} className="card">
                <span className="chip">{t.period}</span>
                <h4>{t.title}</h4>
                <small>{t.place}</small>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="projets" className="section">
          <h3 className="title">Projets</h3>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
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
          <h3 className="title">Compétences</h3>
          <div className="grid">
            {skills.map((s) => (
              <div key={s.group} className="card">
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
          <div className="card cta">
            <h3 className="title">Contact</h3>
            <p className="lead">Pour un stage, un projet ou une question, écris-moi.</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>Envoyer un email</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}