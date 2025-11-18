// === Script principal du portfolio ===
document.addEventListener("DOMContentLoaded", function () {
  // 🕓 Mise à jour automatique de l'année dans le footer
  const date = new Date();
  const yearEl = document.querySelector("#current-year");
  if (yearEl) yearEl.textContent = date.getFullYear();

  // === 🌐 NAVIGATION MOBILE ===
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarMenu = document.getElementById("navbarMenu");

  if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener("click", function () {
      navbarMenu.classList.toggle("hidden");
      navbarMenu.classList.toggle("flex");
      navbarMenu.classList.toggle("md:flex");

      // Pour mobile, positionner le menu correctement
      if (!navbarMenu.classList.contains("hidden")) {
        navbarMenu.classList.add(
          "fixed",
          "top-16",
          "left-0",
          "w-full",
          "h-[calc(100vh-4rem)]",
          "bg-dark",
          "flex-col",
          "p-5",
          "overflow-y-auto"
        );
      } else {
        navbarMenu.classList.remove(
          "fixed",
          "top-16",
          "left-0",
          "w-full",
          "h-[calc(100vh-4rem)]",
          "bg-dark",
          "flex-col",
          "p-5",
          "overflow-y-auto"
        );
      }
    });

    // Fermer le menu quand un lien est cliqué
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          navbarMenu.classList.add("hidden");
          navbarMenu.classList.remove("flex");
          navbarMenu.classList.remove(
            "fixed",
            "top-16",
            "left-0",
            "w-full",
            "h-[calc(100vh-4rem)]",
            "bg-dark",
            "flex-col",
            "p-5",
            "overflow-y-auto"
          );
        }
      });
    });
  }

  // === 🎨 Changement de style de la navbar au scroll ===
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add("py-3", "bg-dark/95");
      navbar.classList.remove("py-4");
    } else {
      navbar.classList.remove("py-3", "bg-dark/95");
      navbar.classList.add("py-4");
    }
  });

  // === ✉️ Validation du formulaire de contact ===
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const fields = ["nom", "prenom", "email", "objet", "message"];
      document.querySelectorAll(".input-invalid").forEach((el) => {
        el.classList.add("hidden");
      });

      fields.forEach((id) => {
        const field = document.getElementById(id);
        if (!field) return;

        if (
          !field.value.trim() ||
          (id === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()))
        ) {
          field.nextElementSibling.classList.remove("hidden");
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
      date: "Octobre 2025 – Aujourd'hui",
      titre: "Développeur Fullstack",
      sousTitre: "Plateforme de messagerie interne",
      description: [
        "Développement d'une application de messagerie entre les acteurs d'un établissement.",
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
        "Conception et développement d'une application web pour le suivi des vaccinations.",
        "Travail en équipe selon la méthodologie Agile (MERN Stack).",
        "Création d'une interface réactive avec React et TailwindCSS.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    },
    {
      date: "Avril 2024",
      titre: "Développeur Mobile Flutter",
      sousTitre: "Application Code-USSD",
      description: [
        "Développement en équipe d'une application mobile Android avec Flutter et Dart.",
        "Mise en place d'un système d'interaction USSD pour accéder à différents services.",
        "Création d'une interface fluide et responsive adaptée aux terminaux mobiles.",
      ],
      technologies: ["Flutter", "Dart"],
    },
    {
      date: "Janvier 2024 – Avril 2025",
      titre: "Développeur Frontend",
      sousTitre: "Gestion de la DPE de Mamou",
      description: [
        "Conception et développement de l'interface utilisateur avec Angular.",
        "Mise en place d'un tableau de bord dynamique et responsive pour la gestion des données.",
        "Optimisation de l'expérience utilisateur et intégration des API côté frontend.",
      ],
      technologies: ["Angular", "Bootstrap"],
    },
    {
      date: "Décembre 2024 – Aujourd'hui",
      titre: "Développeur",
      sousTitre: "Portfolio personnel",
      description: [
        "Création d'un site personnel avec HTML, CSS et JavaScript.",
        "Structure responsive et animations modernes.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  const experiencesContainer = document.getElementById("experiences-container");
  if (experiencesContainer) {
    experiences.forEach((exp) => {
      const timelineItem = document.createElement("div");
      timelineItem.className =
        "timeline-item relative mb-12 flex items-center opacity-0 translate-y-5 transition-opacity duration-500 transition-transform duration-500";

      const descriptionHTML = exp.description
        .map(
          (desc) => `<li class="mb-2 relative pl-5 text-gray-600">${desc}</li>`
        )
        .join("");
      const badgesHTML = exp.technologies
        .map(
          (tech) =>
            `<span class="badge bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">${tech}</span>`
        )
        .join("");

      timelineItem.innerHTML = `
        <div class="timeline-date absolute top-0 left-1/2 transform -translate-x-1/2 bg-secondary text-white py-2 px-4 font-semibold rounded-full z-10 text-sm">${exp.date}</div>
        <div class="timeline-content w-5/12 p-6 bg-white rounded-lg shadow-md ml-auto relative border-t-4 border-primary">
          <h3 class="text-xl mb-2 text-dark font-roboto-slab">${exp.titre}</h3>
          <h4 class="text-lg mb-4 text-primary font-medium">${exp.sousTitre}</h4>
          <ul class="mb-4">${descriptionHTML}</ul>
          <div class="badges flex flex-wrap gap-2 mt-4">${badgesHTML}</div>
        </div>
      `;

      experiencesContainer.appendChild(timelineItem);
    });

    // Ajouter la ligne de timeline
    experiencesContainer.insertAdjacentHTML(
      "beforebegin",
      '<div class="timeline-line absolute top-0 left-1/2 w-0.5 h-full bg-primary transform -translate-x-1/2"></div>'
    );
  }

  // === 🎞️ Animation de la timeline ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-5");
        }
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
      card.className =
        "card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border-t-4 border-primary hover:-translate-y-1 hover:shadow-lg";

      const skillsHTML = formation.competences
        .map(
          (comp) =>
            `<span class="skill-badge bg-cyan-50 text-primary py-1 px-3 rounded text-sm border border-cyan-200">${comp}</span>`
        )
        .join("");

      card.innerHTML = `
        <div class="card-body p-6">
          <div class="card-header flex justify-between items-center mb-4">
            <h3 class="card-title text-lg font-roboto-slab text-dark">${
              formation.titre
            }</h3>
            <span class="badge bg-secondary text-white py-1 px-3 rounded-full text-xs">${
              formation.date
            }</span>
          </div>
          ${
            formation.sousTitre
              ? `<h4 class="card-subtitle text-primary mb-4 font-medium">${formation.sousTitre}</h4>`
              : ""
          }
          <p class="card-text text-gray-600 mb-4">${formation.lieu}</p>
          <div class="skills flex flex-wrap gap-2">${skillsHTML}</div>
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
      column.className = "skills-column flex-1 min-w-[300px]";
      column.innerHTML = `<h3 class="skills-title text-center mb-8 text-xl font-roboto-slab text-dark relative pb-2">${title}</h3>`;
      items.forEach((comp) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item mb-5";
        skillItem.innerHTML = `
          <div class="skill-info flex justify-between mb-2 text-sm">
            <span class="text-dark font-medium">${comp.nom}</span>
            <span class="text-primary">${comp.niveau}%</span>
          </div>
          <div class="progress-bar h-2.5 bg-gray-200 rounded overflow-hidden">
            <div class="progress-fill h-full rounded bg-gradient-to-r from-primary to-secondary transition-all duration-1500 ease-in-out" style="width: ${comp.niveau}%"></div>
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
      date: "Octobre 2025 – Aujourd'hui",
      description:
        "Application web permettant la communication interne entre étudiants et enseignants d'un établissement.",
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
        "Application mobile Android développée avec Flutter/Dart, permettant l'accès rapide à divers services via des codes USSD.",
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
      date: "Décembre 2024 – Aujourd'hui",
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
      card.className =
        "card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border-t-4 border-primary hover:-translate-y-1 hover:shadow-lg";

      const skillsHTML = projet.technologies
        .map(
          (tech) =>
            `<span class="skill-badge bg-cyan-50 text-primary py-1 px-3 rounded text-sm border border-cyan-200">${tech}</span>`
        )
        .join("");

      card.innerHTML = `
      <div class="card-body p-6">
        <div class="card-header flex justify-between items-center mb-4">
          <h3 class="card-title text-lg font-roboto-slab text-dark">${projet.titre}</h3>
          <span class="badge bg-secondary text-white py-1 px-3 rounded-full text-xs">${projet.date}</span>
        </div>
        <p class="card-text text-gray-600 mb-4">${projet.description}</p>
        <div class="skills flex flex-wrap gap-2 mb-4">${skillsHTML}</div>
        <div class="mt-4">
          <a href="${projet.lien}" class="btn btn-primary flex items-center justify-center py-2 px-4 bg-primary text-white rounded font-medium transition-all duration-300 hover:bg-cyan-600" target="_blank">
            <i class="fab fa-github mr-2"></i> Voir sur GitHub
          </a>
        </div>
      </div>
    `;

      projetsContainer.appendChild(card);
    });
  }
});
