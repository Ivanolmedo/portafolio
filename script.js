// Datos de tecnologías
const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#2965f1" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "React", icon: "fab fa-react", color: "#61dafb" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "Responsive", icon: "fas fa-mobile-alt", color: "#9147ff" }
];

// Datos de proyectos (actualizados para el modal)
const projects = [
    { 
        title: "E-commerce Básico", 
        description: "Tienda online desarrollada con ReactJS y Firebase como backend.",
        longDescription: "Este proyecto fue desarrollado como parte de mi formación en React. Utilicé Firebase para el backend, implementando autenticación de usuarios, base de datos en tiempo real y funciones serverless. El e-commerce incluye:",
        features: [
            "Carrito de compras interactivo",
            "Sistema de autenticación con Firebase Auth",
            "Panel de administración para productos",
            "Búsqueda y filtrado de productos",
            "Pasarela de pagos simulada"
        ],
        tags: ["React", "Firebase", "CSS", "Context API"], 
        image: "https://via.placeholder.com/800x500?text=E-commerce+Project",
        demo: "#",
        code: "#"
    },
    { 
        title: "Aplicación del Clima", 
        description: "Aplicación que muestra el clima actual utilizando una API pública.",
        longDescription: "Aplicación desarrollada con JavaScript vanilla que consume la API de OpenWeatherMap. Características principales:",
        features: [
            "Búsqueda por ciudad o ubicación actual",
            "Pronóstico para 5 días",
            "Cambio de unidades (Celsius/Fahrenheit)",
            "Diseño responsive",
            "Animaciones CSS"
        ],
        tags: ["JavaScript", "API", "CSS", "Async/Await"], 
        image: "https://via.placeholder.com/800x500?text=Weather+App",
        demo: "#",
        code: "#"
    },
    { 
        title: "Portafolio Personal", 
        description: "Primera versión de mi portafolio desarrollado con HTML y CSS.",
        longDescription: "Este mismo portafolio que estás viendo, desarrollado completamente desde cero. Características:",
        features: [
            "Diseño responsive",
            "Efectos y transiciones CSS",
            "Modo oscuro/claro (próximamente)",
            "Navegación fluida",
            "Modal para proyectos"
        ],
        tags: ["HTML", "CSS", "JavaScript", "Responsive"], 
        image: "https://via.placeholder.com/800x500?text=Portfolio",
        demo: "#",
        code: "#"
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
    let descriptionHTML = `<p>${project.longDescription || project.description}</p>`;
    if (project.features) {
        descriptionHTML += `<ul class="modal-features">`;
        project.features.forEach(feature => {
            descriptionHTML += `<li>${feature}</li>`;
        });
        descriptionHTML += `</ul>`;
    }
    modalDescription.innerHTML = descriptionHTML;
    
    // Imagen del proyecto
    modalImage.src = project.image || 'https://via.placeholder.com/800x500?text=Project+Image';
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
    modalDemo.href = project.demo || '#';
    modalCode.href = project.code || '#';
    
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