// Datos de tecnologías actualizadas
const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#2965f1" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "React", icon: "fab fa-react", color: "#61dafb" },
    { name: "Firebase", icon: "fas fa-database", color: "#FFCA28" },
    { name: "Unity", icon: "fas fa-gamepad", color: "#000000" },
    { name: "C#", icon: "fas fa-code", color: "#178600" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "Responsive", icon: "fas fa-mobile-alt", color: "#9147ff" },
    { name: "API Maps", icon: "fas fa-map-marked-alt", color: "#4285F4" }
];


// Datos de proyectos (con tu Portafolio 2022 como primer proyecto)
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
            "Animaciones fluidas con GSAP o vanilla JS",
            "Calculadora de precios con descuentos",
            "Formulario de contacto con validación",
            "Integración de Google Maps API",
            "Carrito de compras interactivo",
            "Filtrado de productos en tiempo real",
            "Efectos de scroll personalizados"
        ],
        tags: ["HTML", "CSS", "JavaScript", "API", "Responsive","JavaScript", "GSAP", "Google Maps API", "FormValidation"], 
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
            "Diseño responsive pulido",
            "Organización de código CSS modular"
        ],
        tags: ["HTML", "CSS", "Grid", "Flexbox", "Responsive"],
        image: "assets/images/project-3.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/FrontEnd-Store.git"
    },
    { 
        title: "Portafolio 2022", 
        description: "Mi primer portafolio profesional desarrollado con HTML y CSS puro.",
        longDescription: "Este fue mi primer acercamiento al desarrollo web profesional. Realizado completamente con HTML y CSS vanilla, sin frameworks ni librerías. Fue mi proyecto de graduación del curso de Desarrollo Web en Coderhouse. Características principales:",
        features: [
            "Diseño responsive básico usando media queries",
            "Estructura semántica HTML5",
            "Animaciones CSS con keyframes",
            "Sección de proyectos con cards básicas",
            "Formulario de contacto funcional",
            "Diseño minimalista con paleta morada"
        ],
        tags: ["HTML", "CSS", "Responsive Design"], 
        image: "assets/images/project-1.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/Pagina-Freelancer.git"
    },
    { 
        title: "FPS 3D", 
        description: "Shooter en primera persona con física de destrucción de objetos.",
        longDescription: "Mi primer proyecto 3D en Unity donde exploré el desarrollo de shooters en primera persona y sistemas de física. Aunque no incluye enemigos, el juego se centra en:",
        features: [
            "Movimiento FPS estándar (WASD + mouse)",
            "Sistema de disparos con efectos de partículas",
            "Física de destrucción de objetos (Rigidbody)",
            "Entorno 3D completamente navegable",
            "Sistema de recarga de armas",
            "Efectos de sonido básicos",
            "Optimización para PC de gama media"
        ],
        tags: ["Unity", "C#", "3D Game", "FPS", "Physics"], 
        image: "assets/images/project-2.jpg",
        demo: "#",
        code: "https://github.com/Ivanolmedo/Sci-Fi-Demo.git"
    }
];

// Función para cargar tecnologías
function loadTechnologies() {
    const techGrid = document.getElementById('tech-grid');
    
    technologies.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.className = 'tech-card';
        techCard.innerHTML = `
            <div class="tech-icon" style="color: ${tech.color}">
                <i class="${tech.icon}"></i>
            </div>
            <h3>${tech.name}</h3>
        `;
        techGrid.appendChild(techCard);
    });
}

// Función para cargar proyectos
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const tagsHTML = project.tags.map(tag => 
            `<span class="project-tag">${tag}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                ${project.title}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">${tagsHTML}</div>
            </div>
        `;
        
        // Agregar evento de clic para abrir el modal
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// Función para abrir el modal del proyecto
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalTags = document.getElementById('modal-tags');
    const modalDemo = document.getElementById('modal-demo');
    const modalCode = document.getElementById('modal-code');
    
    // Llenar el modal con los datos del proyecto
    modalTitle.textContent = project.title;
    
    // Construir descripción completa
    let descriptionHTML = `<p>${project.longDescription}</p>`;
    if (project.features) {
        descriptionHTML += `<ul class="modal-features">`;
        project.features.forEach(feature => {
            descriptionHTML += `<li>${feature}</li>`;
        });
        descriptionHTML += `</ul>`;
    }
    modalDescription.innerHTML = descriptionHTML;
    
    // Imagen del proyecto
    modalImage.src = project.image;
    modalImage.alt = project.title;
    
    // Tags del proyecto
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'modal-tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });
    
    // Enlaces
    modalDemo.href = project.demo;
    modalCode.href = project.code;
    
    // Mostrar modal y deshabilitar scroll del body
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Configuración de navegación
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const heroHeight = heroSection.offsetHeight;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll para navbar flotante
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight * 0.7) {
            document.body.classList.add('scrolled');
            navbar.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
        }
        
        // Resaltar sección activa
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Scroll suave para enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = navbar.classList.contains('scrolled') ? 70 : 20;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicialización
function init() {
    loadTechnologies();
    loadProjects();
    setupNavigation();
    
    // Evento para cerrar modal
    document.querySelector('.close-modal').addEventListener('click', closeProjectModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('project-modal')) {
            closeProjectModal();
        }
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
    
    console.log('Portafolio cargado correctamente');
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', init);