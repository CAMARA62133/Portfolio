
// Script pour la navigation mobile
document.addEventListener('DOMContentLoaded', function () {
	const date= new Date()
	document.querySelector("#current-year").innerHTML=date.getFullYear();

    const navbarToggler = document.getElementById('navbarToggler');
    const navbarMenu = document.getElementById('navbarMenu');
    
    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
    
    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });
    
    // Changement de style de la navbar au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('scrolled');
        } else {
            document.getElementById('navbar').classList.remove('scrolled');
        }
    });
    
    // Mise à jour de l'année dans le footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Animation des éléments de la timeline lorsqu'ils deviennent visibles
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Animation des progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
    
    // Validation du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validation des champs
            const nom = document.getElementById('nom');
            const prenom = document.getElementById('prenom');
            const email = document.getElementById('email');
            const objet = document.getElementById('objet');
            const message = document.getElementById('message');
            
            // Réinitialiser les messages d'erreur
            document.querySelectorAll('.input-invalid').forEach(el => {
                el.style.display = 'none';
            });
            
            // Valider chaque champ
            if (!nom.value.trim()) {
                nom.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            if (!prenom.value.trim()) {
                prenom.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            if (!objet.value.trim()) {
                objet.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            if (!message.value.trim()) {
                message.nextElementSibling.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Ici vous pourriez ajouter le code pour envoyer le formulaire
                alert('Message envoyé avec succès!');
                contactForm.reset();
            }
        });
    }
});
