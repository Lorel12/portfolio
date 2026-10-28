import { experiences, formations, projects, skills } from "./data";

export type Language = "fr" | "en";

type Copy = {
  languageLabel: string;
  themeLight: string;
  themeDark: string;
  themeLabelLight: string;
  themeLabelDark: string;
  navigationLabel: string;
  nav: [string, string, string, string, string];
  homeLabel: string;
  heroEyebrow: string;
  heroLead: string;
  heroPrimary: string;
  heroCv: string;
  cvPreviewLink: string;
  cvPreviewLabel: string;
  cvPreviewTitle: string;
  cvPreviewDescription: string;
  cvPreviewFallback: string;
  closePreview: string;
  aboutIndex: string;
  aboutTitle: string;
  aboutDescription: string;
  journeyIndex: string;
  journeyTitle: string;
  educationLabel: string;
  educationTitle: string;
  educationCount: string;
  experienceLabel: string;
  experienceTitle: string;
  experienceCount: string;
  projectIndex: string;
  projectTitle: string;
  projectNote: string;
  projectLink: string;
  skillsIndex: string;
  skillsTitle: string;
  skillsNote: string;
  contactIndex: string;
  contactTitle: string;
  contactLead: string;
  email: string;
  phone: string;
  copyright: string;
  backToTop: string;
  metaDescription: string;
};

export const copy = {
  fr: {
    languageLabel: "Choisir la langue",
    themeLight: "Clair",
    themeDark: "Sombre",
    themeLabelLight: "Activer le thème clair",
    themeLabelDark: "Activer le thème sombre",
    navigationLabel: "Navigation principale",
    nav: ["À propos", "Parcours", "Projets", "Compétences", "Contact"],
    homeLabel: "Lorelle, accueil",
    heroEyebrow: "Élève ingénieure",
    heroLead: "Curieuse et polyvalente, je m'intéresse particulièrement au développement web, à l'intelligence artificielle et à la cybersécurité.",
    heroPrimary: "Découvrir mes projets",
    heroCv: "Télécharger le CV",
    cvPreviewLink: "Voir mon CV",
    cvPreviewLabel: "Aperçu du CV de Lorelle",
    cvPreviewTitle: "Mon CV",
    cvPreviewDescription: "Consultez mon CV en français ou en anglais.",
    cvPreviewFallback: "Ouvrir le CV au format PDF",
    closePreview: "Fermer l’aperçu du CV",
    aboutIndex: "01 / À PROPOS",
    aboutTitle: "Curieuse de nature, ingénieure par choix.",
    aboutDescription: "Étudiante ingénieure en double diplôme à Toulouse INP–ENSEEIHT, après un cursus en génie informatique à l'ENSPY de Yaoundé. Je m'intéresse aux systèmes informatiques, aux réseaux, à la connectivité et aux systèmes embarqués, ainsi qu'au développement web, à l'intelligence artificielle, à l'IoT et à la cybersécurité.",
    journeyIndex: "02 / PARCOURS",
    journeyTitle: "Là où j’apprends et je construis.",
    educationLabel: "FORMATION",
    educationTitle: "Formation académique",
    educationCount: "étapes",
    experienceLabel: "EXPÉRIENCE PROFESSIONNELLE",
    experienceTitle: "Stages et enseignement",
    experienceCount: "expériences",
    projectIndex: "03 / SÉLECTION",
    projectTitle: "Projets choisis.",
    projectNote: "Du concret, du code, de l’impact.",
    projectLink: "Voir le projet",
    skillsIndex: "04 / COMPÉTENCES",
    skillsTitle: "Ma boîte à outils.",
    skillsNote: "L’essentiel, sans détour.",
    contactIndex: "05 / ET MAINTENANT ?",
    contactTitle: "On imagine la suite ensemble ?",
    contactLead: "Pour un stage, un projet ou une question, écrivez-moi.",
    email: "Envoyer un email",
    phone: "Téléphone",
    copyright: "Tous droits réservés.",
    backToTop: "Retour en haut",
    metaDescription: "Portfolio de Lorelle, élève ingénieure en informatique, intéressée par le développement web, l’intelligence artificielle et la cybersécurité.",
  },
  en: {
    languageLabel: "Choose language",
    themeLight: "Light",
    themeDark: "Dark",
    themeLabelLight: "Switch to light theme",
    themeLabelDark: "Switch to dark theme",
    navigationLabel: "Main navigation",
    nav: ["About", "Journey", "Projects", "Skills", "Contact"],
    homeLabel: "Lorelle, home",
    heroEyebrow: "Engineering student",
    heroLead: "Curious and versatile, I am especially interested in web development, artificial intelligence and cybersecurity.",
    heroPrimary: "Explore my projects",
    heroCv: "Download my CV",
    cvPreviewLink: "View my CV",
    cvPreviewLabel: "Lorelle's CV preview",
    cvPreviewTitle: "My CV",
    cvPreviewDescription: "View my CV in French or English.",
    cvPreviewFallback: "Open the CV as a PDF",
    closePreview: "Close CV preview",
    aboutIndex: "01 / ABOUT",
    aboutTitle: "Curious by nature, engineer by choice.",
    aboutDescription: "I am pursuing a double engineering degree at Toulouse INP–ENSEEIHT, after studying Computer Engineering at ENSPY in Yaoundé. I am interested in computer systems, networks, connectivity and embedded systems, as well as web development, artificial intelligence, IoT and cybersecurity.",
    journeyIndex: "02 / JOURNEY",
    journeyTitle: "Where I learn and build.",
    educationLabel: "EDUCATION",
    educationTitle: "Academic background",
    educationCount: "programmes",
    experienceLabel: "PROFESSIONAL EXPERIENCE",
    experienceTitle: "Internships and teaching",
    experienceCount: "roles",
    projectIndex: "03 / SELECTED WORK",
    projectTitle: "Selected projects.",
    projectNote: "Practical work, thoughtful engineering.",
    projectLink: "View project",
    skillsIndex: "04 / SKILLS",
    skillsTitle: "Tools of the trade.",
    skillsNote: "Focused skills, built through practice.",
    contactIndex: "05 / WHAT’S NEXT?",
    contactTitle: "Let’s build what’s next, together.",
    contactLead: "For an internship, a project, or a question, get in touch.",
    email: "Send an email",
    phone: "Phone",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
    metaDescription: "Lorelle's portfolio. Engineering student in computer science with an interest in web development, artificial intelligence and cybersecurity.",
  },
} satisfies Record<Language, Copy>;

export const englishFormations = [
  {
    ...formations[0],
    title: "Computer Engineering, ENSPY",
    place: "Yaoundé, Cameroon",
    text: "Engineering degree in Computer Science and Artificial Intelligence.",
  },
  {
    ...formations[1],
    title: "Double Degree, Toulouse INP–ENSEEIHT",
    place: "Toulouse, France",
    text: "Engineering studies in Digital Sciences, specialising in Networks.",
  },
];

export const englishExperiences = [
  {
    ...experiences[0],
    period: "Internship",
    title: "Software Development Intern, MINEPAT (DGEPIP)",
    place: "Yaoundé, Cameroon",
    text: "Developed a Flask application for economic data analysis and forecasting.",
  },
  {
    ...experiences[1],
    period: "Internship",
    title: "Software Development Intern, Zelynto",
    place: "Yaoundé, Cameroon",
    text: "Developed a web application for Microsoft 365 management and auditing.",
  },
  {
    ...experiences[2],
    period: "Teaching",
    title: "Teacher, Intelligentsia Corporation",
    place: "Yaoundé, Cameroon",
    text: "Prepared students for competitive engineering-school entrance exams in Cameroon.",
  },
];

export const englishProjects = [
  {
    ...projects[0],
    title: "Valione Services, March–August 2026",
    context: "Zelynto",
    text: "Microsoft 365 management and auditing application. I design interface components and the audit dashboard.",
  },
  {
    ...projects[1],
    context: "Academic project, ENSPY",
    text: "Computer-vision disease detection for cocoa plants, with an API and web interface for image-based diagnosis.",
  },
  {
    ...projects[2],
    title: "Economic Forecasting in Cameroon",
    context: "Internship, MINEPAT",
    text: "A tool for collecting and analysing economic information for DGEPIP.",
  },
];

export const englishSkills = [
  { ...skills[0], items: ["React", "TypeScript", "JavaScript", "CSS", "Responsive design"] },
  { ...skills[1], group: "Backend & data" },
  { ...skills[2], group: "Artificial intelligence", items: ["YOLOv8", "Computer vision", "PyTorch", "TensorFlow"] },
  { ...skills[3], group: "Tools" },
];
