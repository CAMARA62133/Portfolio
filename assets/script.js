
// Menu mobile toggle
document.getElementById('navbarToggler').addEventListener('click', function() {
	document.getElementById('navbarMenu').classList.toggle('active');
	this.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
	link.addEventListener('click', () => {
		document.getElementById('navbarMenu').classList.remove('active');
		document.getElementById('navbarToggler').classList.remove('active');
	});
});

// Gestion du scroll pour la navbar
window.addEventListener('scroll', function() {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// Scroll doux pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		
		const targetId = this.getAttribute('href');
		if (targetId === '#') return;
		
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			// Calculer la position en prenant en compte la navbar fixed
			const navbarHeight = document.getElementById('navbar').offsetHeight;
			const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
			
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	});
});

// Mettre à jour l'année dans le footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Animation des éléments de la timeline lors du scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineItems() {
	timelineItems.forEach(item => {
		const itemTop = item.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		
		if (itemTop < windowHeight - 100) {
			item.classList.add('visible');
		}
	});
}

// Animation des progress bars
function animateProgressBars() {
	const progressBars = document.querySelectorAll('.progress-fill');
	
	progressBars.forEach(bar => {
		const width = bar.style.width;
		bar.style.width = '0';
		
		setTimeout(() => {
			bar.style.width = width;
		}, 100);
	});
}

// Vérifier les éléments au chargement
window.addEventListener('load', () => {
	checkTimelineItems();
	animateProgressBars();
});

// Vérifier les éléments lors du scroll
window.addEventListener('scroll', checkTimelineItems);

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
	contactForm.addEventListener('submit', function(e) {
		e.preventDefault();
		
		let isValid = true;
		const inputs = this.querySelectorAll('input, textarea');
		
		inputs.forEach(input => {
			const invalidMsg = input.nextElementSibling;
			
			if (!input.value.trim()) {
				invalidMsg.style.display = 'block';
				isValid = false;
			} else {
				invalidMsg.style.display = 'none';
			}
			
			// Validation spécifique pour l'email
			if (input.type === 'email' && input.value.trim()) {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(input.value)) {
					invalidMsg.style.display = 'block';
					invalidMsg.textContent = 'Veuillez entrer une adresse email valide.';
					isValid = false;
				}
			}
		});
		
		if (isValid) {
			// Ici, vous pourriez ajouter le code pour envoyer le formulaire
			alert('Message envoyé avec succès!');
			this.reset();
		}
	});
}
