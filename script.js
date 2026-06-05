// script.js - CV Interaktiv mit Ihren echten Daten

// ========== IHRE ECHTEN DATEN ==========
let cvData = {
    fullname: "Mabel Jiménez Reyes",
    title: "Informatikingenieurin | Softwareentwicklerin | CPQ-Spezialistin",
    intro: "Informatikingenieurin mit über 6 Jahren Erfahrung in C# .NET, SQL und CPQ-Plattformen. Erfahrung im sicherheitsrelevanten militärischen Umfeld sowie in der internationalen Zusammenarbeit.",
    about: "Ich bin eine Informatikingenieurin mit über 6 Jahren Erfahrung in C# .NET sowie in relationalen Datenbanken mit MS SQL, insbesondere in Anwendungen im sicherheitsrelevanten militärischen Umfeld. Während meiner beruflichen Neuorientierung habe ich kontinuierlich an eigenen Software- und Webprojekten gearbeitet, um meine technischen Fähigkeiten praxisorientiert weiterzuentwickeln.",
    photoUrl: "https://placehold.co/500x500/2c3e50/ffffff?text=MJR",
    email: "Mabel.JR28@gmail.com",
    phone: "+41 76 785 1011",
    location: "Kastelstrasse 34, 4054 Basel",
    github: "github.com/JrMabel",
    birth: "28.10.1994",
    permit: "B-Bewilligung (Familienangehöriger)",
    
    skills: ["C# .NET", "MS SQL", "ASP.NET MVC", "JavaScript", "HTML5/CSS3", "CPQ (BidManager)", "Salesforce Grundlagen", "Azure DevOps", "Power Automate", "SharePoint"],
    
    projects: [
        { name: "IT Reyes", tech: "Konzeptentwicklung", desc: "Aufbau eines Konzepts zur späteren Selbständigkeit im Bereich App-Entwicklung für Kunden." },
        { name: "Franky Talky", tech: "Webentwicklung", desc: "Entwicklung einer Webplattform für Podcast-Veröffentlichungen (individuelles Kundenprojekt)." },
        { name: "Klinikverwaltung", tech: "C#, SQL", desc: "Entwicklung einer Verwaltungsanwendung für Kliniken mit C# und SQL-Datenbankintegration." },
        { name: "Castellanos Solutions", tech: "HTML, CSS, JS", desc: "Erstellung einer Unternehmenswebseite für ein selbständiges Projekt." }
    ],
    
    experiences: [
        { title: "Softwareentwicklerin", company: "Ejército de la República Dominicana", period: "2017 – 2023 (6 Jahre)", description: "Verantwortlich für den kompletten Software Development Life Cycle. Entwicklung von HR- und Statistikmodulen in C# / ASP.NET MVC. Datenbankmanagement mit MS SQL. Zusammenarbeit mit Frontend-Entwicklern." },
        { title: "CPQ-Platforms Engineer", company: "Eaton Cutler Hammer", period: "2018 – 2023 (5 Jahre) – 60%", description: "Dreimal befördert innerhalb von fünf Jahren. Verantwortlich für die Erstellung und Validierung von Konfigurations- und Geschäftsregeln auf einer CPQ-Plattform. Leitung eines Teams in Mexiko. Testing und Deployment über Azure DevOps." }
    ],
    
    otherWork: [
        { title: "Kundendienstmitarbeiterin", company: "Caribe Asistencia (Mapfre Versicherung)", period: "2014 – 2017 (3 Jahre)", description: "Telefonische Kundenbetreuung und -beratung. Unterstützung bei Unfällen und Pannen, Koordination von Abschleppdiensten." },
        { title: "Küchenhilfe", company: "Restaurante Belkis", period: "2010 – 2012 (2 Jahre)", description: "Unterstützung bei der Lebensmittelvorbereitung unter Einhaltung strenger Hygiene- und Qualitätsstandards." }
    ],
    
    education: [
        { title: "Bachelor in Computer Engineering", institution: "Ingenieurwissenschaften, Fachrichtung Informatik/Systemtechnik", year: "" },
        { title: "Technische Berufsausbildung in Informatik", institution: "IT Technician, technisches Abitur", year: "" },
        { title: "Deutsch Kompakt B2.2", institution: "K5 – laufend (20.05.2026 – 29.07.2026)", year: "" },
        { title: "Deutsch Kompakt B2.1", institution: "K5 (19.02.2026 – 05.05.2026)", year: "" },
        { title: "Telc Deutsch B1 Zertifikat", institution: "ECAP – 21.09.2024", year: "" },
        { title: "Deutsch Intensiv B1.2", institution: "ECAP – 07.2024 – 08.2024", year: "" },
        { title: "Deutsch Kompakt A1 bis B1.1", institution: "ECAP – 10.2023 – 06.2024", year: "" },
        { title: "Projektmanagement", institution: "INFOTEP – 08.2017", year: "" },
        { title: "Englisch-Immersionsprogramm", institution: "MESCyt – 01.2015 – 12.2015", year: "" },
        { title: "Kundendienst", institution: "INFOTEP – 10.2014", year: "" },
        { title: "Buchhaltungsfachkraft", institution: "INFOTEP – 01.2013 – 05.2013", year: "" }
    ]
};

// Kommentare in localStorage
let comments = [];

// ========== HELPER ==========
function escapeHtml(str) {
    if(!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

// ========== RENDER FUNCTIONS ==========
function renderCV() {
    document.getElementById("userFullname").innerText = cvData.fullname;
    document.getElementById("userTitle").innerText = cvData.title;
    document.getElementById("userIntro").innerHTML = `<i class="fas fa-quote-left"></i> <span>${escapeHtml(cvData.intro)}</span>`;
    document.getElementById("aboutText").innerHTML = `<p>${escapeHtml(cvData.about)}</p>`;
    document.getElementById("profileImage").src = cvData.photoUrl;
    document.getElementById("userEmail").innerText = cvData.email;
    document.getElementById("userPhone").innerText = cvData.phone;
    document.getElementById("userLocation").innerText = cvData.location;
    document.getElementById("userGithub").innerText = cvData.github;
    document.getElementById("userBirth").innerText = cvData.birth;
    document.getElementById("userPermit").innerText = cvData.permit;
    
    // Skills
    document.getElementById("skillsList").innerHTML = cvData.skills.map(s => `<li><i class="fas fa-check-circle"></i> ${escapeHtml(s)}</li>`).join("");
    
    // Projekte
    document.getElementById("projectsList").innerHTML = cvData.projects.map(p => `
        <div class="project-card">
            <h3><i class="fas fa-code-branch"></i> ${escapeHtml(p.name)}</h3>
            <div class="tech-stack">${escapeHtml(p.tech)}</div>
            <p>${escapeHtml(p.desc)}</p>
        </div>
    `).join("");
    
    // Berufserfahrung
    document.getElementById("experienceList").innerHTML = cvData.experiences.map(exp => `
        <div class="timeline-item">
            <h3>${escapeHtml(exp.title)} - ${escapeHtml(exp.company)}</h3>
            <div class="period"><i class="far fa-calendar-alt"></i> ${escapeHtml(exp.period)}</div>
            <p>${escapeHtml(exp.description)}</p>
        </div>
    `).join("");
    
    // Nebenberufliche Tätigkeiten
    document.getElementById("otherWorkList").innerHTML = cvData.otherWork.map(work => `
        <div class="timeline-item">
            <h3>${escapeHtml(work.title)} - ${escapeHtml(work.company)}</h3>
            <div class="period"><i class="far fa-calendar-alt"></i> ${escapeHtml(work.period)}</div>
            <p>${escapeHtml(work.description)}</p>
        </div>
    `).join("");
    
    // Ausbildung
    document.getElementById("educationList").innerHTML = cvData.education.map(edu => `
        <div class="education-item">
            <h3>${escapeHtml(edu.title)}</h3>
            <div>${escapeHtml(edu.institution)}</div>
        </div>
    `).join("");
}

// ========== COMMENT FUNCTIONS ==========
function loadComments() {
    const stored = localStorage.getItem("mabel_cv_comments");
    if(stored) comments = JSON.parse(stored);
    else {
        comments = [
            { name: "HR Eaton", text: "Exzellente Mitarbeiterin, dreimal befördert - sehr empfehlenswert!", date: new Date().toLocaleDateString('de-DE') },
            { name: "Team Lead", text: "Großartige Arbeit im CPQ-Bereich und internationale Teamführung.", date: new Date().toLocaleDateString('de-DE') }
        ];
        saveComments();
    }
    renderComments();
}

function saveComments() {
    localStorage.setItem("mabel_cv_comments", JSON.stringify(comments));
}

function renderComments() {
    const container = document.getElementById("commentsList");
    if(!container) return;
    container.innerHTML = comments.map(c => `
        <div class="comment-card">
            <div class="comment-name">${escapeHtml(c.name)}</div>
            <div class="comment-date">${c.date}</div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
        </div>
    `).join("");
}

function addComment(name, text) {
    if(!name.trim() || !text.trim()) return;
    comments.unshift({ name: name.trim(), text: text.trim(), date: new Date().toLocaleDateString('de-DE') });
    saveComments();
    renderComments();
}

// ========== EDITOR MODAL ==========
function openEditor() {
    document.getElementById("editFullname").value = cvData.fullname;
    document.getElementById("editTitle").value = cvData.title;
    document.getElementById("editIntro").value = cvData.intro;
    document.getElementById("editAbout").value = cvData.about;
    document.getElementById("editPhotoUrl").value = cvData.photoUrl;
    document.getElementById("editEmail").value = cvData.email;
    document.getElementById("editPhone").value = cvData.phone;
    document.getElementById("editLocation").value = cvData.location;
    document.getElementById("editGithub").value = cvData.github;
    document.getElementById("editBirth").value = cvData.birth;
    document.getElementById("editPermit").value = cvData.permit;
    document.getElementById("editSkills").value = cvData.skills.join(", ");
    document.getElementById("editProjects").value = JSON.stringify(cvData.projects, null, 2);
    document.getElementById("editExperiences").value = JSON.stringify(cvData.experiences, null, 2);
    document.getElementById("editOtherWork").value = JSON.stringify(cvData.otherWork, null, 2);
    document.getElementById("editStudies").value = JSON.stringify(cvData.education, null, 2);
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveEditorData(e) {
    e.preventDefault();
    cvData.fullname = document.getElementById("editFullname").value;
    cvData.title = document.getElementById("editTitle").value;
    cvData.intro = document.getElementById("editIntro").value;
    cvData.about = document.getElementById("editAbout").value;
    cvData.photoUrl = document.getElementById("editPhotoUrl").value;
    cvData.email = document.getElementById("editEmail").value;
    cvData.phone = document.getElementById("editPhone").value;
    cvData.location = document.getElementById("editLocation").value;
    cvData.github = document.getElementById("editGithub").value;
    cvData.birth = document.getElementById("editBirth").value;
    cvData.permit = document.getElementById("editPermit").value;
    cvData.skills = document.getElementById("editSkills").value.split(",").map(s => s.trim()).filter(s => s);
    
    try {
        cvData.projects = JSON.parse(document.getElementById("editProjects").value);
        cvData.experiences = JSON.parse(document.getElementById("editExperiences").value);
        cvData.otherWork = JSON.parse(document.getElementById("editOtherWork").value);
        cvData.education = JSON.parse(document.getElementById("editStudies").value);
    } catch(err) { alert("Fehler im JSON-Format! Bitte korrigieren Sie die Syntax."); return; }
    
    renderCV();
    closeModal();
}

// ========== DARK MODE ==========
function initTheme() {
    const darkMode = localStorage.getItem("mabel_darkMode") === "true";
    if(darkMode) document.body.classList.add("dark");
    document.getElementById("themeToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("mabel_darkMode", document.body.classList.contains("dark"));
    });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
    loadComments();
    renderCV();
    initTheme();
    
    document.getElementById("addCommentBtn").addEventListener("click", () => {
        const name = document.getElementById("commentName").value;
        const msg = document.getElementById("commentMsg").value;
        if(!name || !msg) { alert("Bitte geben Sie Ihren Namen und Kommentar ein."); return; }
        addComment(name, msg);
        document.getElementById("commentName").value = "";
        document.getElementById("commentMsg").value = "";
    });
    
    document.getElementById("editPanelBtn").addEventListener("click", openEditor);
    document.querySelector(".close-modal").addEventListener("click", closeModal);
    window.addEventListener("click", (e) => { if(e.target === document.getElementById("editModal")) closeModal(); });
    document.getElementById("cvEditorForm").addEventListener("submit", saveEditorData);
});