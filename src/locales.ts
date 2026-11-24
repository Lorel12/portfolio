import { certifications, distinctions, engagements, experiences, formations, projects, skills } from "./data";

export type Language = "fr" | "en";

type Copy = {
  languageLabel: string;
  themeLight: string;
  themeDark: string;
  themeLabelLight: string;
  themeLabelDark: string;
  navigationLabel: string;
  nav: [string, string, string, string, string, string];
  homeLabel: string;
  docTitle: string;
  heroEyebrow: string;
  heroLead: string;
  heroPrimary: string;
  heroCv: string;
  portraitAlt: string;
  portraitLocation: string;
  portraitMobility: string;
  statLabels: [string, string, string, string];
  cvPreviewLink: string;
  cvPreviewLabel: string;
  cvPreviewTitle: string;
  cvPreviewDescription: string;
  cvPreviewFallback: string;
  closePreview: string;
  aboutIndex: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutFocus: [string, string, string, string];
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
  certificateLink: string;
  filterLabel: string;
  filters: [string, string, string, string];
  engagementIndex: string;
  engagementTitle: string;
  engagementNote: string;
  distinctionsLabel: string;
  certificationsLabel: string;
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
    nav: ["À propos", "Parcours", "Projets", "Engagements", "Compétences", "Contact"],
    homeLabel: "Lorelle, accueil",
    docTitle: "Élève ingénieure IA et Réseaux",
    heroEyebrow: "Recherche un stage en Réseaux",
    heroLead: "Élève ingénieure en réseaux à Toulouse INP-ENSEEIHT, formée en intelligence artificielle. Je conçois des infrastructures réseau sécurisées et je les relie à l'IA et au web : vision par ordinateur, agents à base de LLM, interfaces.",
    heroPrimary: "Découvrir mes projets",
    heroCv: "Télécharger le CV",
    portraitAlt: "Portrait de Lorelle",
    portraitLocation: "Toulouse, France",
    portraitMobility: "Mobilité nationale",
    statLabels: ["années major de promotion", "stages en informatique et IA", "écoles d'ingénieurs", "projets présentés"],
    cvPreviewLink: "Voir mon CV",
    cvPreviewLabel: "Aperçu du CV de Lorelle",
    cvPreviewTitle: "Mon CV",
    cvPreviewDescription: "Consultez mon CV en français ou en anglais.",
    cvPreviewFallback: "Ouvrir le CV au format PDF",
    closePreview: "Fermer l’aperçu du CV",
    aboutIndex: "01 / À PROPOS",
    aboutTitle: "Curieuse de nature, ingénieure par choix.",
    aboutDescription: "Élève ingénieure en double diplôme à Toulouse INP–ENSEEIHT (Sciences du Numérique, parcours Réseaux), après un cycle ingénieur en intelligence artificielle à l'ENSPY de Yaoundé. Je construis des systèmes qui vont de la vision par ordinateur aux agents IA, et je m'intéresse aux réseaux, à la connectivité, aux infrastructures Cloud, aux systèmes embarqués, à l'IoT et à la cybersécurité. Je recherche un stage en réseaux.",
    aboutFocus: ["Sécurité Informatique", "Intelligence Artificielle", "Réseaux et Systèmes", "Développement Web"],
    journeyIndex: "02 / PARCOURS",
    journeyTitle: "Là où j’apprends et je construis.",
    educationLabel: "FORMATION",
    educationTitle: "Formation académique",
    educationCount: "étapes",
    experienceLabel: "EXPÉRIENCE PROFESSIONNELLE",
    experienceTitle: "Stages et expériences",
    experienceCount: "expériences",
    projectIndex: "03 / SÉLECTION",
    projectTitle: "Projets choisis.",
    projectNote: "Du concret, du code, de l’impact.",
    projectLink: "Voir le projet",
    certificateLink: "Voir le certificat.",
    filterLabel: "Filtrer les projets par domaine",
    filters: ["Tous", "IA", "Web", "Réseaux"],
    engagementIndex: "04 / ENGAGEMENTS",
    engagementTitle: "Au-delà du code.",
    engagementNote: "Solidarité, excellence, apprentissage continu.",
    distinctionsLabel: "DISTINCTIONS",
    certificationsLabel: "CERTIFICATIONS",
    skillsIndex: "05 / COMPÉTENCES",
    skillsTitle: "Ma boîte à outils.",
    skillsNote: "L’essentiel, sans détour.",
    contactIndex: "06 / ET MAINTENANT ?",
    contactTitle: "On imagine la suite ensemble ?",
    contactLead: "Je recherche un stage en intelligence artificielle ou en réseaux. Pour un stage, un projet ou une question, écrivez-moi.",
    email: "Envoyer un email",
    phone: "Téléphone",
    copyright: "Tous droits réservés.",
    backToTop: "Retour en haut",
    metaDescription: "Portfolio de Lorelle Ngoumi Mahatang, élève ingénieure à Toulouse INP-ENSEEIHT (IA et réseaux) : vision par ordinateur, agents IA, développement web et réseaux. Recherche un stage.",
  },
  en: {
    languageLabel: "Choose language",
    themeLight: "Light",
    themeDark: "Dark",
    themeLabelLight: "Switch to light theme",
    themeLabelDark: "Switch to dark theme",
    navigationLabel: "Main navigation",
    nav: ["About", "Journey", "Projects", "Community", "Skills", "Contact"],
    homeLabel: "Lorelle, home",
    docTitle: "Engineering student, AI and Networks",
    heroEyebrow: "Seeking an internship in Networks",
    heroLead: "I am a Networks engineering student at Toulouse INP-ENSEEIHT, with a background in artificial intelligence. I design secure network infrastructures and connect them with AI and the web, from computer vision to LLM-based agents and interfaces.",
    heroPrimary: "Explore my projects",
    heroCv: "Download my CV",
    portraitAlt: "Portrait of Lorelle",
    portraitLocation: "Toulouse, France",
    portraitMobility: "Open to relocation in France",
    statLabels: ["years top of the class", "internships in software and AI", "engineering schools", "projects featured"],
    cvPreviewLink: "View my CV",
    cvPreviewLabel: "Lorelle's CV preview",
    cvPreviewTitle: "My CV",
    cvPreviewDescription: "View my CV in French or English.",
    cvPreviewFallback: "Open the CV as a PDF",
    closePreview: "Close CV preview",
    aboutIndex: "01 / ABOUT",
    aboutTitle: "Curious by nature, engineer by choice.",
    aboutDescription: "I am pursuing a double engineering degree at Toulouse INP–ENSEEIHT (Digital Sciences, Networks track), after completing an engineering programme in artificial intelligence at ENSPY in Yaounde. I build systems ranging from computer vision to AI agents, and I am interested in networks, connectivity, cloud infrastructure, embedded systems, IoT and cybersecurity. I am looking for an internship in networks.",
    aboutFocus: ["Cybersecurity", "Artificial intelligence", "Networks and systems", "Web development"],
    journeyIndex: "02 / JOURNEY",
    journeyTitle: "Where I learn and build.",
    educationLabel: "EDUCATION",
    educationTitle: "Academic background",
    educationCount: "programmes",
    experienceLabel: "PROFESSIONAL EXPERIENCE",
    experienceTitle: "Internships and experience",
    experienceCount: "roles",
    projectIndex: "03 / SELECTED WORK",
    projectTitle: "Selected projects.",
    projectNote: "Practical work, thoughtful engineering.",
    projectLink: "View project",
    certificateLink: "View certificate.",
    filterLabel: "Filter projects by field",
    filters: ["All", "AI", "Web", "Networks"],
    engagementIndex: "04 / COMMUNITY",
    engagementTitle: "Beyond code.",
    engagementNote: "Solidarity, excellence, continuous learning.",
    distinctionsLabel: "AWARDS",
    certificationsLabel: "CERTIFICATIONS",
    skillsIndex: "05 / SKILLS",
    skillsTitle: "Tools of the trade.",
    skillsNote: "Focused skills, built through practice.",
    contactIndex: "06 / WHAT’S NEXT?",
    contactTitle: "Let’s build what’s next, together.",
    contactLead: "I am looking for an internship in artificial intelligence or networks. For an internship, a project, or a question, get in touch.",
    email: "Send an email",
    phone: "Phone",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
    metaDescription: "Portfolio of Lorelle Ngoumi Mahatang, engineering student at Toulouse INP-ENSEEIHT (AI and networks): computer vision, AI agents, web development and networking. Seeking an internship.",
  },
} satisfies Record<Language, Copy>;

export const englishFormations = [
  {
    ...formations[0],
    title: "Double Degree, Toulouse INP–ENSEEIHT",
    place: "Toulouse, France",
    text: "Engineering programme in Digital Sciences, Networks track, at Toulouse INP-ENSEEIHT.",
    tags: ["Networks", "Digital sciences"],
  },
  {
    ...formations[1],
    title: "Computer Engineering, ENSPY",
    place: "Yaounde, Cameroon",
    text: "Engineering programme in Computer Science, specialising in Artificial Intelligence, admission by competitive exam. Top of the class in the first, second and third years.",
    tags: ["AI", "Computer vision", "Deep learning"],
  },
  {
    ...formations[2],
    title: "Scientific Baccalaureate, General Leclerc High School",
    place: "Yaounde, Cameroon",
    text: "Scientific Baccalaureate awarded by General Leclerc High School in Yaounde.",
    tags: ["Mathematics", "Physics", "Chemistry"],
  },
];

export const englishExperiences = [
  {
    ...experiences[0],
    period: "March – August 2026",
    title: "AI Engineering Intern, Valione Services",
    place: "Yaounde, Cameroon",
    text: "Contributed to the AI agent architecture and the interface of Zelynto, a Microsoft 365 management and audit application: real-time chat, conversation history search and audit dashboards.",
    tags: ["AI agents", "React", "TypeScript", "SSE"],
  },
  {
    ...experiences[1],
    period: "February – August 2025",
    title: "Software Development Intern, MINEPAT (DGEPIP)",
    place: "Yaounde, Cameroon",
    text: "Developed a Flask application to collect and analyse economic information: web scraping, automatic topic classification and generative-AI summaries.",
    tags: ["Python", "Flask", "Web scraping", "Gemini"],
  },
  {
    ...experiences[2],
    title: "Customer Service and Sales Associate, WISECOM Cameroon",
    place: "Retail, Cameroon",
    text: "Advised customers and sold products, online and in store.",
    tags: ["Customer relations", "Sales"],
  },
  {
    ...experiences[3],
    period: "2023 – 2025",
    title: "Teacher, Intelligentsia Corporation",
    place: "Yaounde, Cameroon",
    text: "Prepared students for entrance exams to Cameroon’s leading engineering schools (ENSPY, ENSPD, ENSTP, IAI, SUP'PTIC...).",
    tags: ["Mathematics", "Computer science", "General knowledge"],
  },
];

export const englishProjects = [
  {
    ...projects[0],
    context: "Internship, Valione Services",
    text: "Microsoft 365 management and audit application with AI agents. Real-time conversational interface with history search, and an audit dashboard.",
  },
  {
    ...projects[1],
    title: "Collective Vision Assistant",
    context: "Academic project, ENSPY",
    text: "Detection of pedestrian crossings and traffic lights to assist visually impaired people, using a YOLOv8n model trained by transfer learning (mAP50 of about 0.71).",
    tags: ["YOLOv8", "Computer vision", "Roboflow"],
  },
  {
    ...projects[2],
    title: "Visual Search Engine",
    context: "Academic project, ENSPY",
    text: "Image search by similarity: feature extraction with ResNet50, FAISS indexing and PCA visualisation.",
    tags: ["ResNet50", "FAISS", "PCA"],
  },
  {
    ...projects[3],
    title: "Recommendation System",
    context: "Academic project, ENSPY",
    text: "Movie recommendation on MovieLens with LightGCN (BPR loss), evaluated with Recall@K and NDCG@K, with a Flask inference interface.",
  },
  {
    ...projects[4],
    title: "Economic Forecasting in Cameroon",
    context: "Internship, MINEPAT",
    text: "A tool for collecting and analysing economic information for DGEPIP, with automatic generative-AI summaries.",
  },
  {
    ...projects[5],
    title: "University Network",
    context: "Case study, ENSEEIHT",
    text: "Design of a local network linking two schools, with shared VLANs.",
    tags: ["VLAN", "Local networks"],
  },
];

export const englishEngagements = [
  {
    ...engagements[0],
    period: "Volunteering",
    title: "Volunteer, food bank sorting centre",
    place: "France",
    text: "Helped sort collected food, as part of a team, so it could be redistributed to people in need.",
    tags: ["Solidarity", "Teamwork"],
  },
];

export const englishDistinctions = [
  { ...distinctions[0], title: "Top of the class", year: "1st, 2nd and 3rd years" },
  { ...distinctions[1], title: "Academic Excellence Award of the President of the Republic", detail: "Cameroon", year: "2024 and 2025" },
];

export const englishCertifications = [
  { ...certifications[0], title: "Understanding Artificial Intelligence" },
  { ...certifications[1], title: "Intermediate Python" },
  { ...certifications[2], title: "Generative AI" },
  { ...certifications[3], title: "Responsive Web Design" },
  { ...certifications[4], title: "AI Ethics" },
  { ...certifications[5], title: "Introduction to AI" },
];

export const englishSkills = [
  { ...skills[0], group: "Artificial intelligence", items: ["Deep learning", "Computer vision", "Recommendation systems", "LLMs and AI agents", "PyTorch", "YOLOv8", "FAISS", "LangChain"] },
  { ...skills[1], items: ["React", "TypeScript", "JavaScript", "CSS", "Responsive design"] },
  { ...skills[2], group: "Backend & data" },
  { ...skills[3], group: "Networks & systems" },
  { ...skills[4], group: "Tools" },
  { ...skills[5], group: "Languages", items: ["French (native)", "English (B1)"] },
];