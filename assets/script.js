// === Script principal du portfolio ===
document.addEventListener("DOMContentLoaded", function () {
  // 🕓 Mise à jour automatique de l’année dans le footer
  const date = new Date();
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = date.getFullYear();

  // === 🌐 NAVIGATION MOBILE ===
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarMenu = document.getElementById("navbarMenu");

  if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });

    // Fermer le menu quand un lien est cliqué
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navbarMenu.classList.remove("active");
      });
    });
  }

  // === 🎨 Changement de style de la navbar au scroll ===
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // === ✉️ Validation du formulaire de contact ===
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const fields = ["nom", "prenom", "email", "objet", "message"];
      document.querySelectorAll(".input-invalid").forEach((el) => {
        el.style.display = "none";
      });

      fields.forEach((id) => {
        const field = document.getElementById(id);
        if (!field) return;

        if (
          !field.value.trim() ||
          (id === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))
        ) {
          field.nextElementSibling.style.display = "block";
          isValid = false;
        }
      });

      if (isValid) {
        alert("✅ Message envoyé avec succès !");
        contactForm.reset();
      }
    });
  }

  // === 🧱 SECTION EXPÉRIENCES ===
  const experiences = [
    {
      date: "Octobre 2025 – Aujourd’hui",
      titre: "Développeur Fullstack",
      sousTitre: "Plateforme de messagerie interne",
      description: [
        "Développement d’une application de messagerie entre les acteurs d'un établissement.",
        "Mise en place du backend Node.js/Express et base de données MongoDB.",
        "Intégration du frontend React avec authentification JWT et interface réactive.",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "TailwindCSS",
      ],
    },
    {
      date: "Juin 2025 – Septembre 2025",
      titre: "Développeur Fullstack",
      sousTitre: "Plateforme de suivi vaccinal (Projet D-CLIC)",
      description: [
        "Conception et développement d’une application web pour le suivi des vaccinations.",
        "Travail en équipe selon la méthodologie Agile (MERN Stack).",
        "Création d’une interface réactive avec React et TailwindCSS.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    },
    {
      date: "Avril 2024",
      titre: "Développeur Mobile Flutter",
      sousTitre: "Application Code-USSD",
      description: [
        "Développement en équipe d’une application mobile Android avec Flutter et Dart.",
        "Mise en place d’un système d’interaction USSD pour accéder à différents services.",
        "Création d’une interface fluide et responsive adaptée aux terminaux mobiles.",
      ],
      technologies: ["Flutter", "Dart"],
    },
    {
      date: "Janvier 2024 – Avril 2025",
      titre: "Développeur Frontend",
      sousTitre: "Gestion de la DPE de Mamou",
      description: [
        "Conception et développement de l’interface utilisateur avec Angular.",
        "Mise en place d’un tableau de bord dynamique et responsive pour la gestion des données.",
        "Optimisation de l’expérience utilisateur et intégration des API côté frontend.",
      ],
      technologies: ["Angular", "Bootstrap"],
    },
    {
      date: "Décembre 2024 – Aujourd’hui",
      titre: "Développeur",
      sousTitre: "Portfolio personnel",
      description: [
        "Création d’un site personnel avec HTML, CSS et JavaScript.",
        "Structure responsive et animations modernes.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  const experiencesContainer = document.getElementById("experiences-container");
  if (experiencesContainer) {
    experiences.forEach((exp) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";

      const descriptionHTML = exp.description
        .map((desc) => `<li>${desc}</li>`)
        .join("");
      const badgesHTML = exp.technologies
        .map((tech) => `<span class="badge">${tech}</span>`)
        .join("");

      timelineItem.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-content">
          <h3>${exp.titre}</h3>
          <h4>${exp.sousTitre}</h4>
          <ul>${descriptionHTML}</ul>
          <div class="badges">${badgesHTML}</div>
        </div>
      `;

      experiencesContainer.appendChild(timelineItem);
    });
  }

  // === 🎞️ Animation de la timeline ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });

  // === 📊 Animation des progress bars ===
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });

  // === 🎓 SECTION FORMATIONS ===
  const formations = [
    {
      titre: "Développement web – Programme D-CLIC",
      date: "30 Juin – 24 Septembre 2025",
      sousTitre: "Formation en Développement Web Fullstack JavaScript",
      lieu: "SIMPLON Guinée",
      competences: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      titre: "Formation WordPress",
      date: "24 – 26 Juin 2025",
      sousTitre: "Création de sites professionnels avec WordPress",
      lieu: "Orange Digital Center",
      competences: ["WordPress", "Elementor", "SEO"],
    },
    {
      titre: "Développement mobile avec Flutter",
      date: "Avril 2024",
      sousTitre: "Création d'applications mobiles cross-platform",
      lieu: "Orange Digital Center",
      competences: ["Dart", "Flutter"],
    },
    {
      titre: "Licence 4 Génie Informatique",
      date: "Novembre 2021 – Juin 2025",
      sousTitre: "Spécialité : Développement Web et Base de Données",
      lieu: "Institut Supérieur de Technologie de Mamou (IST-Mamou)",
      competences: ["Algorithmique", "Bases de données", "Développement Web"],
    },
    {
      titre: "Baccalauréat en Sciences Mathématiques",
      date: "Octobre 2020 – Juillet 2021",
      sousTitre: "Option Sciences Mathématiques",
      lieu: "Lycée Ibrahim Bah de Kissidougou",
      competences: ["Mathématiques", "Physique", "Informatique"],
    },
  ];

  const formationsContainer = document.getElementById("formations-container");
  if (formationsContainer) {
    formations.forEach((formation) => {
      const card = document.createElement("div");
      card.className = "card";

      const skillsHTML = formation.competences
        .map((comp) => `<span class="skill-badge">${comp}</span>`)
        .join("");

      card.innerHTML = `
        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">${formation.titre}</h3>
            <span class="badge">${formation.date}</span>
          </div>
          ${
            formation.sousTitre
              ? `<h4 class="card-subtitle">${formation.sousTitre}</h4>`
              : ""
          }
          <p class="card-text">${formation.lieu}</p>
          <div class="skills">${skillsHTML}</div>
        </div>
      `;

      formationsContainer.appendChild(card);
    });
  }

  // === ⚙️ SECTION COMPÉTENCES ===
  const competences = {
    techniques: [
      { nom: "HTML5", niveau: 95 },
      { nom: "CSS3", niveau: 90 },
      { nom: "JavaScript / TypeScript", niveau: 80 },
      { nom: "Python", niveau: 60 },
      { nom: "PHP", niveau: 50 },
    ],
    frameworks: [
      { nom: "Angular", niveau: 75 },
      { nom: "React JS", niveau: 70 },
      { nom: "Bootstrap / TailwindCSS", niveau: 85 },
      { nom: "Django REST Framework", niveau: 65 },
      { nom: "Node.js / Express", niveau: 70 },
      { nom: "Git / GitHub", niveau: 90 },
    ],
    design: [
      { nom: "Figma", niveau: 80 },
      { nom: "Adobe Photoshop", niveau: 70 },
      { nom: "Canva", niveau: 85 },
      { nom: "Illustrator", niveau: 60 },
    ],
  };

  const competencesContainer = document.getElementById("competences-container");
  if (competencesContainer) {
    const createSkillsColumn = (title, items) => {
      const column = document.createElement("div");
      column.className = "skills-column";
      column.innerHTML = `<h3 class="skills-title">${title}</h3>`;
      items.forEach((comp) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.innerHTML = `
          <div class="skill-info">
            <span>${comp.nom}</span>
            <span>${comp.niveau}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${comp.niveau}%"></div>
          </div>
        `;
        column.appendChild(skillItem);
      });
      competencesContainer.appendChild(column);
    };

    createSkillsColumn("Compétences Techniques", competences.techniques);
    createSkillsColumn("Frameworks & Outils", competences.frameworks);
    createSkillsColumn("Design UX/UI", competences.design);
  }

  // === 💻 SECTION PROJETS ===
  const projets = [
    {
      titre: "Plateforme de messagerie interne",
      date: "Octobre 2025 – Aujourd’hui",
      description:
        "Application web permettant la communication interne entre étudiants et enseignants d’un établissement.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      lien: "https://github.com/CAMARA62133/frontendSGM",
    },
    {
      titre: "Plateforme de suivi vaccinal",
      date: "Juin 2025 – Septembre 2025",
      description:
        "Application web de suivi des vaccinations, développée en équipe dans le cadre du programme D-CLIC.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      lien: "https://github.com/CAMARA62133/frontend-Vaxi-Strack",
    },
    {
      titre: "Application mobile Code-USSD",
      date: "Avril 2024",
      description:
        "Application mobile Android développée avec Flutter/Dart, permettant l’accès rapide à divers services via des codes USSD.",
      technologies: ["Flutter", "Dart"],
      lien: "https://github.com/MaximeKPOGHOMOU/Code-ussd",
    },
    {
      titre: "Gestion de la DPE Mamou",
      date: "Janvier 2024 – Avril 2025",
      description:
        "Plateforme de gestion administrative pour la DPE de Mamou, développée avec Angular et intégrée à une API Django REST.",
      technologies: ["Angular", "Django REST Framework", "Bootstrap"],
      lien: "https://github.com/CAMARA62133/frontendSGM",
    },
    {
      titre: "Portfolio personnel",
      date: "Décembre 2024 – Aujourd’hui",
      description:
        "Mon site web personnel présentant mes projets et mes compétences en développement web.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      lien: "https://github.com/CAMARA62133/Portfolio",
    },
  ];

  const projetsContainer = document.getElementById("projets-container");
  if (projetsContainer) {
    projets.forEach((projet) => {
      const card = document.createElement("div");
      card.className = "card";

      const skillsHTML = projet.technologies
        .map((tech) => `<span class="skill-badge">${tech}</span>`)
        .join("");

      card.innerHTML = `
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">${projet.titre}</h3>
          <span class="badge">${projet.date}</span>
        </div>
        <p class="card-text">${projet.description}</p>
        <div class="skills">${skillsHTML}</div>
        <div style="margin-top: 15px;">
          <a href="${projet.lien}" class="btn btn-primary" target="_blank">
            <i class="fab fa-github"></i> Voir sur GitHub
          </a>
        </div>
      </div>
    `;

      projetsContainer.appendChild(card);
    });
  }
});
