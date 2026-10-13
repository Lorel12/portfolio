import { useEffect, useState } from "react";
import { profile, formations, experiences, projects, skills } from "./data";
import { ArrowDownToLine, ArrowUp, ExternalLink, Mail, Moon, MoveUpRight, Phone, Sun } from "lucide-react";
import { copy, englishExperiences, englishFormations, englishProjects, englishSkills, type Language } from "./locales";
import "./index.css";

const linkIds = ["about", "parcours", "projets", "competences", "contact"];

export default function App() {
  const [language, setLanguage] = useState<Language>(
    () => localStorage.getItem("language") === "en" ? "en" : "fr"
  );
  const text = copy[language];
  const displayedFormations = language === "en" ? englishFormations : formations;
  const displayedExperiences = language === "en" ? englishExperiences : experiences;
  const displayedProjects = language === "en" ? englishProjects : projects;
  const displayedSkills = language === "en" ? englishSkills : skills;
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
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

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
        <a href="#top" className="logo" aria-label={text.homeLabel}>
          <span className="logo-mark">L</span>{profile.name}<span className="logo-period"></span>
        </a>
        <nav aria-label={text.navigationLabel}>
          {linkIds.map((id, index) => (
            <a key={id} href={`#${id}`}>{text.nav[index]}</a>
          ))}
        </nav>
        <div className="nav-controls">
          <div className="lang-toggle" role="group" aria-label={text.languageLabel}>
            {(["fr", "en"] as const).map((option) => (
              <button key={option} type="button" className={language === option ? "is-active" : ""} aria-pressed={language === option} onClick={() => setLanguage(option)}>{option.toUpperCase()}</button>
            ))}
          </div>
          <button className="theme-btn" aria-label={theme === "dark" ? text.themeLabelLight : text.themeLabelDark} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <span className="theme-icon" aria-hidden="true">{theme === "dark" ? <Sun className="icon icon-theme" /> : <Moon className="icon icon-theme" />}</span>
            <span>{theme === "dark" ? text.themeLight : text.themeDark}</span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="availability-dot" />{text.heroEyebrow}</p>
            <h1>{profile.name}</h1>
            <p className="lead">{language === "en" ? "Curious and versatile, I am especially interested in the intersection of web development, AI and cybersecurity." : profile.tagline}</p>
            <div className="actions">
              <a className="btn primary" href="#projets">{text.heroPrimary} <MoveUpRight className="icon" aria-hidden="true" /></a>
              <a className="btn secondary" href={language === "en" ? "/cv_Lorelle_web_en.pdf" : profile.cv} download={language === "en" ? "Lorelle-CV-English.pdf" : "Lorelle-CV-Francais.pdf"}><ArrowDownToLine className="icon" aria-hidden="true" /> {text.heroCv}</a>
            </div>
          </div>
          <aside className="hero-panel reveal" aria-label={text.heroPanelLabel}>
            <div className="panel-topline"><span>{text.panelTitle}</span><span>01 — 03</span></div>
            <p className="panel-statement">{text.panelStatement}</p>
            <div className="panel-list">
              {text.domains.map((domain, index) => <div key={domain}><span>0{index + 1}</span><span>{domain}</span><MoveUpRight className="icon icon-small" aria-hidden="true" /></div>)}
            </div>
            <span className="panel-orbit" aria-hidden="true">L</span>
          </aside>
        </section>

        <section id="about" className="section">
          <div className="section-heading reveal"><span className="section-index">{text.aboutIndex}</span><h3 className="title">{text.aboutTitle}</h3></div>
          <div className="about-copy reveal"><p className="lead">{language === "en" ? "I am pursuing a double engineering degree at Toulouse INP–ENSEEIHT, after studying Computer Engineering at ENSPY in Yaoundé. I am interested in computer systems, networks, connectivity and embedded systems, as well as web development, artificial intelligence, IoT and cybersecurity." : profile.about}</p></div>
        </section>

        <section id="parcours" className="section">
          <div className="section-heading reveal"><span className="section-index">{text.journeyIndex}</span><h3 className="title">{text.journeyTitle}</h3></div>
          <div id="formations" className="career-block">
            <div className="career-heading reveal">
              <div><span className="career-eyebrow">{text.educationLabel}</span><h4>{text.educationTitle}</h4></div>
              <span className="career-count">{String(displayedFormations.length).padStart(2, "0")} {text.educationCount}</span>
            </div>
            <ol className="timeline">
              {displayedFormations.map((item, index) => (
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
              <div><span className="career-eyebrow">{text.experienceLabel}</span><h4>{text.experienceTitle}</h4></div>
              <span className="career-count">
                {String(displayedExperiences.length).padStart(2, "0")} {text.experienceCount}{language === "fr" && displayedExperiences.length > 1 ? "s" : ""}
              </span>
            </div>
            <ol className="timeline">
              {displayedExperiences.map((item, index) => (
                <li key={item.title} className="timeline-item reveal">
                  <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="timeline-main"><h5>{item.title}</h5><small>{item.place}</small></div>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-heading section-heading-inline reveal"><div><span className="section-index">{text.projectIndex}</span><h3 className="title">{text.projectTitle}</h3></div><span className="section-note">{text.projectNote}</span></div>
          <div className="grid">
            {displayedProjects.map((p, index) => (
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
                {p.link && <a className="more" href={p.link}>{text.projectLink} <ExternalLink className="icon icon-small" aria-hidden="true" /></a>}
              </article>
            ))}
          </div>
        </section>

        <section id="competences" className="section skills-section">
          <div className="section-heading section-heading-inline reveal"><div><span className="section-index">{text.skillsIndex}</span><h3 className="title">{text.skillsTitle}</h3></div><span className="section-note">{text.skillsNote}</span></div>
          <div className="skills-list">
            {displayedSkills.map((skill, index) => (
              <div key={skill.group} className="skill-row reveal">
                <span className="skill-number">0{index + 1}</span>
                <h4>{skill.group}</h4>
                <ul className="skill-items">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="card cta reveal">
            <span className="section-index">{text.contactIndex}</span>
            <h3 className="title">{text.contactTitle}</h3>
            <p className="lead">{text.contactLead}</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${profile.email}`}><Mail className="icon" aria-hidden="true" />{text.email}</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href={`tel:${profile.tel.replace(/\s/g, "")}`}><Phone className="icon" aria-hidden="true" />{text.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><a href="#top" className="footer-brand">{profile.name}<span className="hero-period">.</span></a><span>© {new Date().getFullYear()} — {text.copyright}</span><a href="#top" className="back-top">{text.backToTop} <ArrowUp className="icon icon-small" aria-hidden="true" /></a></footer>
    </>
  );
}