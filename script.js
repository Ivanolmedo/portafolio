// Datos
const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#2965f1" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "React", icon: "fab fa-react", color: "#61dafb" },
    { name: "Firebase", icon: "fas fa-database", color: "#FFCA28" },
    { name: "Unity", icon: "fas fa-gamepad", color: "#000000" },
    { name: "C#", icon: "fas fa-code", color: "#178600" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "Responsive", icon: "fas fa-mobile-alt", color: "#9147ff" },
    { name: "API Maps", icon: "fas fa-map-marked-alt", color: "#4285F4" }
];
const projects = [
    { 
        title: "React E-commerce", 
        description: "Tienda online completa con React y Firebase.",
        longDescription: "Proyecto final del curso de React en Coderhouse. E-commerce completo con backend en Firebase que incluye:",
        features: [
            "Autenticación de usuarios con Firebase Auth",
            "Base de datos en tiempo real con Firestore",
            "Context API para estado global",
            "Sistema de órdenes de compra",
            "Panel de administración",
            "Filtrado y búsqueda de productos",
            "Pasarela de pagos integrada"
        ],
        tags: ["React", "Firebase", "JavaScript", "Context API"], 
        image: "assets/images/project-5.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/CreaTuLanding-Olmedo.git"
    },
    { 
        title: "Reposteria", 
        description: "E-commerce con JavaScript para funcionalidades interactivas.",
        longDescription: "Proyecto donde implementé JavaScript para crear una experiencia de usuario completa. Lo más destacado:",
        features: [
            "Animaciones fluidas con JavaScript",
            "Calculadora de precios con descuentos",
            "Formulario de contacto con validación",
            "Integración de Google Maps API",
            "Carrito de compras interactivo",
            "Filtrado de productos en tiempo real"
        ],
        tags: ["HTML", "CSS", "JavaScript", "API"], 
        image: "assets/images/project-4.jpg",
        demo: "https://ivanolmedo.github.io/Ivan-olmedo-coder/",
        code: "https://github.com/Ivanolmedo/Ivan-olmedo-coder.git"
    },
    { 
        title: "Tienda Online", 
        description: "Store desarrollada con HTML y CSS mejorando Grid y Flexbox.",
        longDescription: "Segundo proyecto web donde profundicé en el uso de layouts modernos. Lo que aprendí y apliqué:",
        features: [
            "Maquetación avanzada con CSS Grid",
            "Diseño flexible con Flexbox",
            "Efectos hover mejorados",
            "Sistema de cards para productos",
            "Diseño responsive pulido"
        ],
        tags: ["HTML", "CSS", "Grid", "Flexbox"],
        image: "assets/images/project-3.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/FrontEnd-Store.git"
    },
    { 
        title: "Portafolio 2022", 
        description: "Mi primer portafolio profesional desarrollado con HTML y CSS puro.",
        longDescription: "Primer acercamiento al desarrollo web profesional. Realizado con HTML y CSS vanilla. Características:",
        features: [
            "Diseño responsive con media queries",
            "Estructura semántica HTML5",
            "Animaciones CSS",
            "Formulario de contacto funcional"
        ],
        tags: ["HTML", "CSS", "Responsive"], 
        image: "assets/images/project-1.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/Pagina-Freelancer.git"
    },
    { 
        title: "FPS 3D", 
        description: "Shooter en primera persona con física de destrucción de objetos.",
        longDescription: "Mi primer proyecto 3D en Unity donde exploré el desarrollo de shooters en primera persona:",
        features: [
            "Movimiento FPS estándar",
            "Sistema de disparos con partículas",
            "Física de destrucción de objetos",
            "Entorno 3D navegable"
        ],
        tags: ["Unity", "C#", "3D Game", "FPS"], 
        image: "assets/images/project-2.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/Sci-Fi-Demo.git"
    }
];

// DOM Elements
const elements = {
    techGrid: document.getElementById('tech-grid'),
    projectsGrid: document.getElementById('projects-grid'),
    modal: document.getElementById('project-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalImage: document.getElementById('modal-image'),
    modalTags: document.getElementById('modal-tags'),
    modalDemo: document.getElementById('modal-demo'),
    modalCode: document.getElementById('modal-code'),
    navbar: document.querySelector('.navbar'),
    heroSection: document.querySelector('.hero-section'),
    navLinks: document.querySelectorAll('.nav-link')
};

// Funciones principales
const renderTechnologies = () => {
    elements.techGrid.innerHTML = technologies.map(tech => `
        <div class="tech-card">
            <div class="tech-icon" style="color: ${tech.color}">
                <i class="${tech.icon}"></i>
            </div>
            <h3>${tech.name}</h3>
        </div>
    `).join('');
};

const renderProjects = () => {
    elements.projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image" style="background-image: url('${project.image}')">
                <div class="project-image-text">${project.title}</div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => openProjectModal(projects[index]));
    });
};

const openProjectModal = (project) => {
    elements.modalTitle.textContent = project.title;
    elements.modalDescription.innerHTML = `
        <p>${project.longDescription}</p>
        <ul class="modal-features">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    elements.modalImage.src = project.image;
    elements.modalImage.alt = project.title;
    elements.modalTags.innerHTML = project.tags.map(tag => 
        `<span class="modal-tag">${tag}</span>`
    ).join('');
    elements.modalDemo.href = project.demo;
    elements.modalCode.href = project.code;
    
    elements.modal.classList.add('show');
    document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
    elements.modal.classList.remove('show');
    document.body.style.overflow = 'auto';
};

const setupNavigation = () => {
    const heroHeight = elements.heroSection.offsetHeight;
    
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > heroHeight * 0.7;
        document.body.classList.toggle('scrolled', isScrolled);
        elements.navbar.classList.toggle('scrolled', isScrolled);
        
        const scrollPosition = window.scrollY + 100;
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                elements.navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    });
    
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                const offset = elements.navbar.classList.contains('scrolled') ? 70 : 20;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Inicialización
const init = () => {
    renderTechnologies();
    renderProjects();
    setupNavigation();
    
    document.querySelector('.close-modal').addEventListener('click', closeProjectModal);
    elements.modal.addEventListener('click', (e) => e.target === elements.modal && closeProjectModal());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeProjectModal());
    
    console.log('Portafolio cargado correctamente');
};

document.addEventListener('DOMContentLoaded', init);