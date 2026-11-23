document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  mobileMenuBtn?.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });

  // Navigation active state
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      if (link.classList.contains("nav-link")) {
        link.classList.add("active");
      }
    });
  });

  // Expériences
  const experiences = [
    {
      date: "Janvier 2026 – Aujourd'hui",
      titre: "Développeur Full Stack",
      sousTitre: "Ecash Guinée",
      description:
        "Développement Frontend pour BCI (Banque de Commerce International), développement Full Stack pour Vincode, et développement d'API avec analyse et visualisation des données (Tableau) pour le Dashboard ECASH. Stack: Angular, React, Node.js, PostgreSQL, MongoDB.",
    },
    {
      date: "Octobre 2025 – Aujourd'hui",
      titre: "Développeur Fullstack",
      sousTitre: "Plateforme de messagerie (Projet personnel – En cours)",
      description:
        "Application web complète pour la communication interne. Stack: React, Node.js/Express, MongoDB, JWT.",
    },
    {
      date: "Avril 2026 – Aujourd'hui",
      titre: "Développeur Fullstack",
      sousTitre:
        "Vigilo – SaaS de gestion des agents de sécurité (Projet personnel – En cours)",
      description:
        "Plateforme SaaS de gestion des agents de sécurité. Stack: React, Node.js, PostgreSQL.",
    },
    {
      date: "Juin 2025 – Septembre 2025",
      titre: "Développeur Fullstack",
      sousTitre:
        "Plateforme de suivi et gestion vaccinale (Projet de fin de formation)",
      description:
        "Développement MERN stack en approche Agile. Interface réactive avec React et TailwindCSS.",
    },
    {
      date: "Novembre 2024 – Juin 2025",
      titre: "Développeur Frontend",
      sousTitre:
        "Gestion administrative de la DPE de Mamou (Projet de fin d'études)",
      description:
        "Interface Angular responsive pour tableau de bord dynamique. Bootstrap et optimisation UX.",
    },
    {
      date: "Avril 2024",
      titre: "Développeur Mobile Flutter",
      sousTitre: "Application Code-USSD",
      description:
        "Développement d'app mobile Android avec système d'interaction USSD en Dart/Flutter.",
    },
  ];

  const expContainer = document.getElementById("experiencesContainer");
  experiences.forEach((exp, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "relative mb-8 pl-6 md:pl-8";
    wrapper.style.animationDelay = `${idx * 0.1}s`;

    wrapper.innerHTML = `
      <span class="timeline-dot"></span>
      <div class="card-hover p-6 md:p-8 rounded-xl bg-gray-900/50">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">${exp.titre}</h3>
            <p class="text-primary font-medium mb-2">${exp.sousTitre}</p>
          </div>
          <span class="text-sm text-gray-400 whitespace-nowrap mt-2 md:mt-0">${exp.date}</span>
        </div>
        <p class="text-gray-400 leading-relaxed">${exp.description}</p>
      </div>
    `;
    expContainer.appendChild(wrapper);
  });

  // Projets
  const projects = [
    {
      titre: "BCI – Banque de Commerce International",
      date: "2026",
      description: "Développement Frontend pour la banque BCI (Ecash Guinée)",
      techs: ["Angular", "React", "TypeScript"],
      link: "https://github.com/CAMARA62133",
    },
    {
      titre: "Vincode",
      date: "2026",
      description: "Développement Full Stack pour Vincode (Ecash Guinée)",
      techs: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/CAMARA62133",
    },
    {
      titre: "Dashboard ECASH",
      date: "2026",
      description:
        "Développement d'API, analyse et visualisation des données avec Tableau (Ecash Guinée)",
      techs: ["Node.js", "API REST", "Tableau", "PostgreSQL"],
      link: "https://github.com/CAMARA62133",
    },
    {
      titre: "Messagerie Interne",
      date: "Oct 2025 – Aujourd'hui",
      description:
        "Plateforme de communication entre les élèves et enseignants (projet personnel en cours)",
      techs: ["React", "Node.js", "MongoDB", "JWT"],
      link: "https://github.com/CAMARA62133/frontendSGM",
    },
    {
      titre: "Vigilo – SaaS Gestion Agents de Sécurité",
      date: "Avril 2026 – Aujourd'hui",
      description:
        "SaaS de gestion des agents de sécurité (projet personnel en cours)",
      techs: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/CAMARA62133",
    },
    {
      titre: "Plateforme de suivi et gestion vaccinale",
      date: "Juin – Sept 2025",
      description:
        "Application web de suivi vaccinal avec dashboard (projet de fin de formation D-CLIC)",
      techs: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      link: "https://github.com/CAMARA62133/frontend-Vaxi-Strack",
    },
    {
      titre: "Gestion administrative de la DPE de Mamou",
      date: "Nov 2024 – Juin 2025",
      description:
        "Gestion administrative de la DPE de Mamou (projet de fin d'études)",
      techs: ["Angular", "Bootstrap", "TypeScript"],
      link: "https://github.com/CAMARA62133",
    },
    {
      titre: "Code-USSD",
      date: "Avril 2024",
      description: "Application mobile Android avec codes USSD",
      techs: ["Flutter", "Dart"],
      link: "https://github.com/MaximeKPOGHOMOU/Code-ussd",
    },
  ];

  const projContainer = document.getElementById("projectsContainer");
  projects.forEach((proj, idx) => {
    const el = document.createElement("div");
    el.className = "project-card p-6 flex flex-col group";
    el.style.animationDelay = `${idx * 0.1}s`;
    el.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-lg font-semibold group-hover:text-primary transition-colors">${proj.titre}</h3>
        <span class="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full whitespace-nowrap ml-2">${proj.date}</span>
      </div>
      <p class="text-gray-400 text-sm mb-4 flex-grow">${proj.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${proj.techs.map((t) => `<span class="tech-badge">${t}</span>`).join("")}
      </div>
      <a href="${proj.link}" target="_blank" class="text-primary hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2">
        Voir sur GitHub <i class="fas fa-external-link-alt text-xs"></i>
      </a>
    `;
    projContainer.appendChild(el);
  });

  // Compétences
  const skills = {
    Développement: [
      { nom: "Angular", niveau: 80 },
      { nom: "React", niveau: 80 },
      { nom: "TypeScript", niveau: 85 },
      { nom: "TailwindCSS", niveau: 85 },
      { nom: "Bootstrap", niveau: 85 },
      { nom: "Python Django", niveau: 60 },
      { nom: "Node.js / Express", niveau: 80 },
      { nom: "Laravel", niveau: 65 },
      { nom: "PHP", niveau: 70 },
      { nom: "Flutter", niveau: 70 },
      { nom: "Dart", niveau: 70 },
    ],
    "Bases de données": [
      { nom: "PostgreSQL", niveau: 75 },
      { nom: "MongoDB", niveau: 80 },
    ],
    "Analyse et visualisation des données": [
      { nom: "Tableau", niveau: 70 },
      { nom: "Power BI", niveau: 65 },
      { nom: "Pandas", niveau: 60 },
    ],
    Outils: [
      { nom: "Git", niveau: 90 },
      { nom: "GitHub", niveau: 90 },
      { nom: "Docker", niveau: 65 },
    ],
  };

  const skillContainer = document.getElementById("skillsContainer");

  // 1. Création du bloc "Développement" qui prend toute la largeur (ou 2 colonnes)
  const devCategory = "Développement";
  const devItems = skills[devCategory];

  const devBlock = document.createElement("div");
  devBlock.className = "card-hover p-6 rounded-xl bg-gray-900/50 mb-6";
  devBlock.innerHTML = `
    <h3 class="text-lg font-playfair font-semibold mb-6 text-primary">${devCategory}</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
      ${devItems
        .map(
          (skill) => `
        <div class="mb-2">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium">${skill.nom}</span>
            <span class="text-xs text-primary">${skill.niveau}%</span>
          </div>
          <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div class="skill-bar h-full" style="width: ${skill.niveau}%"></div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  skillContainer.appendChild(devBlock);

  // 2. Création des 3 autres blocs côte à côte
  const otherCategories = [
    "Bases de données",
    "Analyse et visualisation des données",
    "Outils",
  ];

  const othersGrid = document.createElement("div");
  othersGrid.className = "grid md:grid-cols-3 gap-6";

  otherCategories.forEach((category) => {
    const items = skills[category];
    const col = document.createElement("div");
    col.className = "card-hover p-6 rounded-xl bg-gray-900/50";
    col.innerHTML = `
      <h3 class="text-lg font-playfair font-semibold mb-6">${category}</h3>
      ${items
        .map(
          (skill) => `
        <div class="mb-5">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium">${skill.nom}</span>
            <span class="text-xs text-primary">${skill.niveau}%</span>
          </div>
          <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div class="skill-bar h-full" style="width: ${skill.niveau}%"></div>
          </div>
        </div>
      `,
        )
        .join("")}
    `;
    othersGrid.appendChild(col);
  });

  skillContainer.appendChild(othersGrid);

  // Formations
  const formations = [
    {
      date: "Novembre 2021 – Juin 2025 · Diplôme obtenu en 2025",
      titre: "Licence en Génie Informatique",
      etablissement: "Institut Supérieur de Technologie de Mamou (IST Mamou)",
      description:
        "Formation approfondie en génie informatique : développement web, bases de données, réseaux, génie logiciel.",
      icon: "fa-graduation-cap",
    },
    {
      date: "05 Mai – 05 Septembre 2025",
      titre: "Développement web – Programme D-CLIC",
      etablissement: "SIMPLON Guinée",
      description:
        "Formation intensive au développement web fullstack (MERN stack) en approche Agile.",
      icon: "fa-laptop-code",
    },
    {
      date: "24 – 26 Juin 2025",
      titre: "WordPress",
      etablissement: "Orange Digital Center",
      description: "Formation à la création et gestion de sites WordPress.",
      icon: "fa-wordpress",
    },
    {
      date: "Avril 2024",
      titre: "Développement mobile avec Flutter",
      etablissement: "Orange Digital Center",
      description:
        "Formation au développement d'applications mobiles Android avec Dart/Flutter.",
      icon: "fa-mobile-screen",
    },
    {
      date: "Octobre 2020 – Juillet 2021",
      titre: "Baccalauréat en sciences mathématiques",
      etablissement: "Lycée Ibrahim Bah de Kissidougou",
      description: "Baccalauréat série scientifique (mathématiques).",
      icon: "fa-school",
    },
  ];

  const formationContainer = document.getElementById("formationContainer");
  formations.forEach((f, idx) => {
    const el = document.createElement("div");
    el.className = "card-hover p-6 rounded-xl bg-gray-900/50";
    el.style.animationDelay = `${idx * 0.1}s`;
    el.innerHTML = `
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
          <i class="fas ${f.icon} text-primary text-lg"></i>
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <h3 class="text-lg font-semibold">${f.titre}</h3>
            <span class="text-xs text-gray-400 whitespace-nowrap mt-1 md:mt-0">${f.date}</span>
          </div>
          <p class="text-primary text-sm font-medium mb-2">${f.etablissement}</p>
          <p class="text-gray-400 text-sm leading-relaxed">${f.description}</p>
        </div>
      </div>
    `;
    formationContainer.appendChild(el);
  });

  // Form validation
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = ["nom", "prenom", "email", "objet", "message"];
    let isValid = true;

    fields.forEach((id) => {
      const field = document.getElementById(id);
      if (
        !field.value.trim() ||
        (id === "email" && !field.value.includes("@"))
      ) {
        field.classList.add("border-red-500");
        isValid = false;
      } else {
        field.classList.remove("border-red-500");
      }
    });

    if (isValid) {
      alert("✅ Message envoyé avec succès !");
      form.reset();
    }
  });
});
