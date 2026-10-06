// Tout le contenu est ici. Remplace les valeurs, pas la structure.
export const profile = {
  name: "Lorelle",
  role: "Développeuse frontend, étudiante ingénieure",
  tagline:
    "Je développe des interfaces web en React, de l'audit Microsoft 365 à la détection de maladies du cacao, et je les relie à des API Python.",
  about:
    "Étudiante ingénieure en double diplôme à l'ENSEEIHT, après le Génie informatique à l'ENSPY de Yaoundé. Je sépare le travail d'interface de l'intégration avec le backend, et je soigne les deux.",
  email: "lorelngoumi@gmail.com",
  github: "https://github.com/Lorel12",
  linkedin: "https://linkedin.com/in/lorelle-ngoumi",
  cv: "/cv.pdf", // à déposer dans public/cv.pdf
};

export const timeline = [
  {
    period: "Actuellement",
    title: "Double diplôme, ENSEEIHT",
    place: "Toulouse",
    text: "Cursus ingénieur avec une orientation numérique et télécommunications.",
  },
  {
    period: "Stage",
    title: "Stage informatique, MINEPAT (DGEPIP)",
    place: "Yaoundé",
    text: "Développement d'une application Flask de collecte et d'analyse d'informations économiques.",
  },
  {
    period: "Avant",
    title: "Génie informatique, ENSPY",
    place: "Yaoundé",
    text: "Formation d'ingénieur : développement logiciel, apprentissage automatique, projets d'équipe.",
  },
];

export const projects = [
  {
    title: "Zelynto",
    context: "Frontend, en cours",
    text: "Application de gestion et d'audit Microsoft 365. Je conçois les composants d'interface et le tableau de bord d'audit.",
    tags: ["React", "TypeScript", "Microsoft 365"],
    link: "",
  },
  {
    title: "CacaoDetect",
    context: "Projet académique, ENSPY",
    text: "Détection de maladies sur des plants de cacao par vision par ordinateur, avec une API et une interface web pour envoyer une image et lire le diagnostic.",
    tags: ["YOLOv8", "FastAPI", "React", "PostgreSQL"],
    link: "",
  },
  {
    title: "Prévisions économiques du Cameroun",
    context: "Stage, MINEPAT",
    text: "Outil de collecte et d'analyse d'informations économiques pour la DGEPIP.",
    tags: ["Flask", "Python"],
    link: "",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "CSS", "Design responsive"] },
  { group: "Backend et données", items: ["Python", "Flask", "FastAPI", "PostgreSQL"] },
  { group: "IA", items: ["YOLOv8", "Vision par ordinateur"] },
  { group: "Outils", items: ["Git", "LaTeX", "Microsoft 365"] },
];