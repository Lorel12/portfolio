const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export const profile = {
  name: "Lorelle",
  surname: "NGOUMI MAHATANG",
  email: "lorelngoumi@gmail.com",
  github: "https://github.com/Lorel12",
  linkedin: "https://linkedin.com/in/lorelle-ngoumi",
  tel: "+33 7 80 80 65 92",
  portrait: img("MonPortrait.jpg"),
};

// Du plus récent au plus ancien
export const formations = [
  {
    period: "2026 - 2028",
    title: "Double diplôme, ENSEEIHT",
    place: "Toulouse, France",
    text: "Cursus ingénieur en Sciences du Numérique, parcours Réseaux, à Toulouse INP-ENSEEIHT.",
    tags: ["Réseaux", "Sciences du numérique"],
  },
  {
    period: "2022 - 2026",
    title: "Génie informatique, ENSPY",
    place: "Yaoundé, Cameroun",
    text: "Cycle ingénieur en génie informatique, spécialité intelligence artificielle, admission sur concours. Major de promotion en première, deuxième et troisième année.",
    tags: ["IA", "Vision par ordinateur", "Apprentissage profond"],
  },
  {
    period: "2021-2022",
    title: "Baccalauréat scientifique, Lycée Genéral Leclerc",
    place: "Yaoundé, Cameroun",
    text: "Baccalauréat scientifique, obtenu au Lycée Général Leclerc à Yaoundé.",
    tags: ["Mathématiques", "Physique", "Chimie"],
  }
];

// Du plus récent au plus ancien
export const experiences = [
  {
    period: "Mars - août 2026",
    title: "Stagiaire ingénieure IA, Valione Services",
    place: "Yaoundé, Cameroun",
    text: "Contribution aux architectures d'agents IA et à l'interface de Zelynto, une application de gestion et d'audit Microsoft 365 : chat en temps réel, recherche dans l'historique et tableaux de bord d'audit.",
    tags: ["Agents IA", "React", "TypeScript", "SSE"],
  },
  {
    period: "Février - août 2025",
    title: "Stagiaire en informatique, MINEPAT (DGEPIP)",
    place: "Yaoundé, Cameroun",
    text: "Développement d'une application Flask de collecte et d'analyse d'informations économiques : web scraping, classification thématique automatique et synthèses par IA générative.",
    tags: ["Python", "Flask", "Web Scraping", "API Gemini"],
  },
  {
    period: "2023 - 2026",
    title: "Chargée de clientèle et vente, WISECOM Cameroun",
    place: "Commerce en gros et en détail, Cameroun",
    text: "Conseil aux clients et vente, en ligne et en boutique.",
    tags: ["Relation client", "Vente"],
  },
  {
    period: "2023 - 2025",
    title: "Enseignante, Intelligentsia Corporation",
    place: "Yaoundé, Cameroun",
    text: "Préparation d'élèves aux concours d'entrée dans les grandes écoles d'ingénieurs du Cameroun (ENSPY, ENSPD, ENSTP, IAI, SUP'PTIC...).",
    tags: ["Mathématiques", "Informatique", "Culture générale"],
  },
];

export const projects = [
  {
    title: "Zelynto",
    context: "Stage, Valione Services",
    text: "Application de gestion et d'audit Microsoft 365 intégrant des agents IA. Interface conversationnelle en temps réel avec recherche dans l'historique, et tableau de bord d'audit.",
    tags: ["React", "TypeScript", "Microsoft Graph", "SSE"],
    categories: ["ia", "web"],
    image: img("zelynto.png"),
    link: "",
  },
  {
    title: "Assistant de vision collective",
    context: "Projet académique, ENSPY",
    text: "Détection de passages piétons et de feux tricolores pour aider les personnes malvoyantes, avec un modèle YOLOv8n entraîné par transfert d'apprentissage (mAP50 d'environ 0,71).",
    tags: ["YOLOv8", "Vision par ordinateur", "Roboflow"],
    categories: ["ia"],
    image: img("vision-collective.png"),
    link: "",
  },
  {
    title: "Moteur de recherche visuelle",
    context: "Projet académique, ENSPY",
    text: "Recherche d'images par similarité : extraction de caractéristiques avec ResNet50, indexation FAISS et visualisation par ACP.",
    tags: ["ResNet50", "FAISS", "ACP"],
    categories: ["ia"],
    image: img("recherche-visuelle.png"),
    link: "",
  },
  {
    title: "Système de recommandation",
    context: "Projet académique, ENSPY",
    text: "Recommandation de films sur MovieLens avec LightGCN (perte BPR), évaluée par Recall@K et NDCG@K, avec une interface d'inférence Flask.",
    tags: ["LightGCN", "PyTorch", "Flask"],
    categories: ["ia"],
    image: img("recommandation.png"),
    link: "https://github.com/Lorel12/RN_Conv_Recommandation",
  },
  {
    title: "Prévisions économiques du Cameroun",
    context: "Stage, MINEPAT",
    text: "Outil de collecte et d'analyse d'informations économiques pour la DGEPIP, avec synthèses automatiques par IA générative.",
    tags: ["Flask", "Python", "Gemini"],
    categories: ["ia", "web"],
    image: img("previsionsEco.png"),
    link: "https://github.com/Lorel12/opesc_projet",
  },
  {
    title: "Réseau universitaire",
    context: "Étude de cas, ENSEEIHT",
    text: "Conception d'un réseau local reliant deux écoles, avec des VLAN communs.",
    tags: ["VLAN", "Réseaux locaux"],
    categories: ["reseaux"],
    image: img("reseau-universitaire.png"),
    link: "",
  },
];

// À compléter : nom exact de l'association, ville et dates.
export const engagements = [
  {
    period: "Bénévolat",
    title: "Bénévole, centre de tri de la Banque Alimentaire",
    place: "France",
    text: "Participation au tri des denrées collectées, en équipe, pour leur redistribution aux personnes en difficulté.",
    tags: ["Solidarité", "Travail en équipe"],
    image: img("benevolatBA.jpg"),
  },
];

export const distinctions = [
  { title: "Major de promotion", detail: "ENSPY", year: "1re, 2e et 3e années" },
  { title: "Prime d'Excellence Académique du Président de la République", detail: "Cameroun", year: "2024 et 2025" },
];

export const certifications = [
  { title: "Comprendre l'intelligence artificielle", detail: "DataCamp", year: "2025", link: "" },
  { title: "Python intermédiaire", detail: "DataCamp", year: "2025", link: "https://www.datacamp.com/statement-of-accomplishment/course/bb7d16309d17f57bd0a622f55d6cdac347b73a0b?raw=1" },
  { title: "Generative AI", detail: "Coursera", year: "2024", link: "https://www.coursera.org/account/accomplishments/certificate/A7RDDJND9F53" },
  { title: "Responsive Web Design", detail: "freeCodeCamp", year: "2023", link: "" },
  { title: "Éthique de l'IA", detail: "DataCamp", year: "2026", link: "https://www.datacamp.com/statement-of-accomplishment/course/e103a21dc18161a09e300e8e214523179601b57e?raw=1" },
  { title: "Introduction à l'IA", detail: "DataCamp", year: "2026", link: "https://www.datacamp.com/statement-of-accomplishment/course/f5e79378d6b8a1d5f0b1537a3f390fd6f80fd24a?raw=1" },
];

export const elearningModules = [
  {
    id: "cybersecurity-best-practices",
    title: "Les bonnes pratiques cyber",
    provider: "hucency - Human centered cybersecurity",
    duration: "30 min",
    file: "attestation.pdf",
    preview: "attestation-preview.jpg",
  },
];

export const skills = [
  { group: "Intelligence artificielle", items: ["Apprentissage profond", "Vision par ordinateur", "Systèmes de recommandation", "LLM et agents IA", "PyTorch", "YOLOv8", "FAISS", "LangChain"] },
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "CSS", "Design responsive"] },
  { group: "Backend et données", items: ["Python", "Flask", "FastAPI", "SQL", "PostgreSQL"] },
  { group: "Réseaux et systèmes", items: ["TCP/IP", "VLAN", "MPLS", "Linux"] },
  { group: "Outils", items: ["Git", "GitHub", "Docker", "LaTeX", "Microsoft 365"] },
  { group: "Langues", items: ["Français (langue maternelle)", "Anglais (B1)"] },
];