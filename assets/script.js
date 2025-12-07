
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const navMenu = document.getElementById('navMenu');
      
      mobileMenuBtn?.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
      });

      // Navigation active state
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          if (link.classList.contains('nav-link')) {
            link.classList.add('active');
          }
        });
      });

      // Expériences
      const experiences = [
        {
          date: "Octobre 2025 – Aujourd'hui",
          titre: "Développeur Fullstack",
          sousTitre: "Plateforme de messagerie interne",
          description: "Application web complète pour la communication interne. Stack: React, Node.js/Express, MongoDB, JWT."
        },
        {
          date: "Juin – Septembre 2025",
          titre: "Développeur Fullstack",
          sousTitre: "Plateforme de suivi vaccinal (D-CLIC)",
          description: "Développement MERN stack en approche Agile. Interface réactive avec React et TailwindCSS."
        },
        {
          date: "Avril 2024",
          titre: "Développeur Mobile Flutter",
          sousTitre: "Application Code-USSD",
          description: "Développement d'app mobile Android avec système d'interaction USSD en Dart/Flutter."
        },
        {
          date: "Janvier 2024 – Avril 2025",
          titre: "Développeur Frontend",
          sousTitre: "Gestion DPE Mamou",
          description: "Interface Angular responsive pour tableau de bord dynamique. Bootstrap et optimisation UX."
        }
      ];

      const expContainer = document.getElementById('experiencesContainer');
      experiences.forEach((exp, idx) => {
        const el = document.createElement('div');
        el.className = 'timeline-item card-hover p-8 rounded-xl bg-gray-900/50';
        el.style.animationDelay = `${idx * 0.1}s`;
        el.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 class="text-xl font-semibold mb-2">${exp.titre}</h3>
              <p class="text-primary font-medium mb-2">${exp.sousTitre}</p>
            </div>
            <span class="text-sm text-gray-400 whitespace-nowrap">${exp.date}</span>
          </div>
          <p class="text-gray-400 leading-relaxed">${exp.description}</p>
        `;
        expContainer.appendChild(el);
      });

      // Projets
      const projects = [
        {
          titre: "Messagerie Interne",
          date: "Oct 2025",
          description: "Platform de communication entre les élèves et enseignants",
          techs: ["React", "Node.js", "MongoDB", "JWT"],
          link: "https://github.com/CAMARA62133/frontendSGM"
        },
        {
          titre: "Gestion et suivi vaccinal",
          date: "Sept 2025",
          description: "Application web de suivi vaccinal avec dashboard",
          techs: ["React", "Node.js", "MongoDB", "TailwindCSS"],
          link: "https://github.com/CAMARA62133/frontend-Vaxi-Strack"
        },
        {
          titre: "Code-USSD",
          date: "Avril 2024",
          description: "Application mobile Android avec codes USSD",
          techs: ["Flutter", "Dart"],
          link: "https://github.com/MaximeKPOGHOMOU/Code-ussd"
        }
      ];

      const projContainer = document.getElementById('projectsContainer');
      projects.forEach((proj, idx) => {
        const el = document.createElement('div');
        el.className = 'project-card p-6 flex flex-col group';
        el.style.animationDelay = `${idx * 0.1}s`;
        el.innerHTML = `
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold group-hover:text-primary transition-colors">${proj.titre}</h3>
            <span class="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">${proj.date}</span>
          </div>
          <p class="text-gray-400 text-sm mb-4 flex-grow">${proj.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${proj.techs.map(t => `<span class="tech-badge">${t}</span>`).join('')}
          </div>
          <a href="${proj.link}" target="_blank" class="text-primary hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2">
            Voir sur GitHub <i class="fas fa-external-link-alt text-xs"></i>
          </a>
        `;
        projContainer.appendChild(el);
      });

      // Compétences
      const skills = {
        "Framework": [
          { nom: "React.js/Angular", niveau: 80 },
          { nom: "TailwindCSS/bootstrap", niveau: 85 },
          { nom: "Node.js/Express", niveau: 80 },
          { nom: "Flutter", niveau: 70 },
        
        ],
        "Langage de programmation": [
          { nom: "HTML5/CSS3", niveau: 95 },
          { nom: "JavaScript/Typescript", niveau: 85 },
          { nom: "Python", niveau: 60 },
          { nom: "Php", niveau: 70 },
        ],
        "Outils": [
          { nom: "Git/GitHub", niveau: 90 },
          { nom: "Vs code", niveau: 75 },
          { nom: "Déploiement VPS & cloud ", niveau: 70 },
          { nom: "Développement assisté par IA", niveau: 75 }
        ],
        "Design UX/UI": [
          { nom: "Photoshop", niveau: 80 },
          { nom: "Illustrator", niveau: 75 },
          { nom: "Canvas", niveau: 75 },
          { nom: "Figma ", niveau: 70 }
        ]
      };

      const skillContainer = document.getElementById('skillsContainer');
      Object.entries(skills).forEach(([category, items]) => {
        const col = document.createElement('div');
        col.className = 'card-hover p-6 rounded-xl bg-gray-900/50';
        col.innerHTML = `
          <h3 class="text-lg font-playfair font-semibold mb-6">${category}</h3>
          ${items.map(skill => `
            <div class="mb-5">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium">${skill.nom}</span>
                <span class="text-xs text-primary">${skill.niveau}%</span>
              </div>
              <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="skill-bar h-full" style="width: ${skill.niveau}%"></div>
              </div>
            </div>
          `).join('')}
        `;
        skillContainer.appendChild(col);
      });

      // Form validation
      const form = document.getElementById('contactForm');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fields = ['nom', 'prenom', 'email', 'objet', 'message'];
        let isValid = true;

        fields.forEach(id => {
          const field = document.getElementById(id);
          if (!field.value.trim() || (id === 'email' && !field.value.includes('@'))) {
            field.classList.add('border-red-500');
            isValid = false;
          } else {
            field.classList.remove('border-red-500');
          }
        });

        if (isValid) {
          alert('✅ Message envoyé avec succès !');
          form.reset();
        }
      });
    });
