import cv_Lorelle from "../public/cv_Lorelle_web.pdf";

export const profile = {
  name: "Lorelle",
  role: "Élève ingénieure",
  tagline:
    "Je développe des interfaces web en React, de l'audit Microsoft 365 à la détection de maladies du cacao, et je les relie à des API Python.",
  about:
    "Étudiante ingénieure en double diplôme à l'ENSEEIHT, après un cursus d'ingénieur à l'ENSPY de Yaoundé. Je m'intéresse aux systèmes informatiques, aux réseaux, à l'interconnectivité et aux systèmes embarqués. Je suis passionnée par le développement web, l'intelligence artificielle, l'IoT et la cybersécurité.",
  email: "lorelngoumi@gmail.com",
  github: "https://github.com/Lorel12",
  linkedin: "https://linkedin.com/in/lorelle-ngoumi",
  tel: "+33 7 80 80 65 92",
  cv: cv_Lorelle, 
};

export const formations = [
  {
    period: "2026 - 2028",
    title: "Double diplôme, ENSEEIHT",
    place: "Toulouse",
    text: "Cursus ingénieur, 2ème année en Sciences du Numérique, parcours Réseaux.",
  },
  {
    period: "2022 - 2026",
    title: "Génie informatique, ENSPY",
    place: "Yaoundé",
    text: "Formation d'ingénieur en Art et Intelligence Artificielle",
  },
];

export const experiences = [
  {
    period: "Stage",
    title: "Stage informatique, MINEPAT (DGEPIP)",
    place: "Yaoundé",
    text: "Développement d'une application Flask d'analyse d'informations et de prévisions économiques.",
  },
];

export const projects = [
  {
    title: "Valione Services, Mars 2026 - Août 2026",
    context: "Zelynto",
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
  { group: "IA", items: ["YOLOv8", "Vision par ordinateur", "PyTorch", "TensorFlow"] },
  { group: "Outils", items: ["Git", "LaTeX", "Microsoft 365"] },
];