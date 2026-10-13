from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv_Lorelle_web_en.pdf"
NAVY = colors.HexColor("#17324F")
BLUE = colors.HexColor("#315F9D")
MUTED = colors.HexColor("#5E6E80")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=20, leading=22, textColor=NAVY, spaceAfter=2))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontSize=9.2, leading=12, textColor=BLUE, spaceAfter=4))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontSize=7.5, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8.6, leading=10, textColor=BLUE, spaceBefore=5, spaceAfter=2))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontSize=7.6, leading=9.6, textColor=NAVY, alignment=TA_LEFT))
styles.add(ParagraphStyle(name="Entry", parent=styles["Normal"], fontSize=7.7, leading=9, textColor=NAVY, spaceAfter=0))
styles.add(ParagraphStyle(name="CvBullet", parent=styles["Normal"], fontSize=7.3, leading=8.8, leftIndent=8, firstLineIndent=-6, textColor=NAVY))

story = [
    Paragraph("LORELLE NGOUMI MAHATANG", styles["Name"]),
    Paragraph("Computer Science Engineering Student | Seeking a Software Engineering Internship", styles["Role"]),
    Paragraph("Toulouse, France &nbsp;|&nbsp; +33 7 80 80 65 92 &nbsp;|&nbsp; lorelngoumi@gmail.com", styles["Contact"]),
    Paragraph("linkedin.com/in/lorelle-ngoumi &nbsp;|&nbsp; github.com/Lorel12", styles["Contact"]),
    Spacer(1, 2 * mm),
]


def section(title):
    story.extend([Paragraph(title.upper(), styles["Section"]), HRFlowable(width="100%", thickness=0.45, color=colors.HexColor("#CBD5E0"), spaceAfter=3)])


def bullets(lines):
    return [Paragraph(f"- {line}", styles["CvBullet"]) for line in lines]


def role(title, date, company, details):
    entry = [
        Paragraph(f"<b>{title}</b><font color='#5E6E80'> &nbsp;|&nbsp; {date}</font><br/><font color='#315F9D'>{company}</font>", styles["Entry"]),
        *bullets(details),
        Spacer(1, 1.1 * mm),
    ]
    story.append(KeepTogether(entry))


section("Profile")
story.append(Paragraph(
    "Digital Sciences engineering student at Toulouse INP-ENSEEIHT. I build web applications from data models to user interfaces, with experience across frontend (React, Node.js) and backend technologies (Flask, FastAPI, PostgreSQL). Seeking a frontend or full-stack software engineering internship.",
    styles["Body"],
))

section("Skills")
for label, value in [
    ("Web development", "React, Node.js, Express, HTML, CSS, Tailwind CSS, Bootstrap, Flask, Jinja2"),
    ("Languages & APIs", "JavaScript, TypeScript, Python, C, FastAPI, REST"),
    ("Tools & data", "Git, GitHub, Docker, PostgreSQL, virtual machines, web scraping"),
    ("Artificial intelligence", "PyTorch, TensorFlow, LangChain, YOLOv8, FAISS, Google Gemini API"),
    ("Languages", "French (native), English (B1)"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {value}", styles["Body"]))

section("Professional experience")
role("Web Development Engineering Intern", "Mar-Aug 2026", "Valione Services | Yaounde, Cameroon", [
    "Developed Microsoft 365 management and auditing dashboards for Identity, Device, Teams, SharePoint, OneDrive, Exchange, Intune and Power Platform.",
    "Designed a real-time conversational interface with SSE streaming and searchable conversation history.",
])
role("IT Intern", "Feb-Aug 2025", "MINEPAT, DGEPIP | Yaounde, Cameroon", [
    "Built a Python and Flask web application to collect and analyse economic data about Cameroon.",
    "Automated data collection with Beautiful Soup and supported related document analysis.",
])
role("Digital Customer Service & Sales Associate", "2023-2026", "Retail | Cameroon", [
    "Advised customers and handled online and in-store sales; used digital tools to support conversion.",
])
role("Mathematics & Computer Science Teacher", "Jun-Aug 2023", "Intelligentsia Corporation | Yaounde, Cameroon", [
    "Prepared students for competitive engineering-school entrance exams and taught computer science and general knowledge.",
    "Adapted learning materials and lesson plans to each class.",
])

section("Selected projects")
for line in [
    "<b>CacaoDetect:</b> cocoa disease detection using computer vision (YOLOv8, FastAPI, React, PostgreSQL).",
    "<b>Recommendation system:</b> MovieLens film recommendations with LightGCN and a Flask inference interface.",
    "<b>Visual search engine:</b> image similarity search using ResNet50, FAISS and PCA.",
    "<b>Collective vision assistant:</b> crosswalk and traffic-light detection for visually impaired users (YOLOv8n).",
]:
    story.append(Paragraph(f"- {line}", styles["CvBullet"]))

section("Education")
for line in [
    "<b>Engineering Degree in Digital Sciences, Toulouse INP-ENSEEIHT</b> &nbsp;|&nbsp; 2026-2028 &nbsp;|&nbsp; Double degree, Networks track",
    "<b>Computer Engineering, National Advanced School of Engineering of Yaounde (ENSPY)</b> &nbsp;|&nbsp; 2022-2026",
    "<b>Science Baccalaureate (Mathematics & Physical Sciences), Lycee General Leclerc</b> &nbsp;|&nbsp; 2022",
]:
    story.append(Paragraph(line, styles["Body"]))

section("Awards & certifications")
story.append(Paragraph(
    "Top of class in first, second and third year at ENSPY; Academic Excellence Award from the President of the Republic (2024, 2025).",
    styles["Body"],
))
story.append(Paragraph(
    "Understanding AI (DataCamp, 2025) &nbsp;|&nbsp; Intermediate Python (DataCamp, 2025) &nbsp;|&nbsp; Generative AI (Coursera, 2024) &nbsp;|&nbsp; Responsive Web Design (freeCodeCamp, 2023)",
    styles["Body"],
))

document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=16 * mm,
    leftMargin=16 * mm,
    topMargin=12 * mm,
    bottomMargin=12 * mm,
    title="Lorelle NGOUMI MAHATANG - English CV",
    author="Lorelle NGOUMI MAHATANG",
)
document.build(story)