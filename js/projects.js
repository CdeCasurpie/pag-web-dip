// ===== PROYECTOS DESTACADOS =====
class ProjectsManager {
    constructor() {
        this.currentModalProject = null;
        this.currentSlideIndex = 0;
        this.projectsData = [
            {
                "id": 1,
                "title": "Multifamiliar Moderno",
                "shortDescription": "Edificio multifamiliar contemporáneo de tres niveles que destaca por su equilibrio volumétrico y la integración de texturas naturales como piedra y madera en la fachada.",
                "longDescription": "Este proyecto cuenta con tres departamentos independientes que se caracterizan exteriormente por un elemento vertical acristalado y el contraste material entre el revestimiento pétreo del acceso y la carpintería de madera. La edificación integra eficazmente dos estacionamientos y servicios comunes, logrando una síntesis entre funcionalidad habitacional y una estética sobria.",
                location: "San Miguel, Lima",
                date: "2013",
                area: "128 m²",
                contractor: null,
                images: [
                    "images/proy1_img1.png",
                    "images/proy1_img2.png",
                    "images/proy1_img3.png"
                ]
            },
            {
                "id": 2,
                "title": "Ampliación Multifamiliar",
                "shortDescription": "Proyecto de ampliación y remodelación que transforma una estructura existente en un edificio de cinco departamentos, destacando por su fachada de texturas rugosas y vegetación integrada.",
                "longDescription": "El proyecto representa una ampliación de vivienda unifamiliar a una multifamiliar. Desarrollado en tres pisos más azotea compuesto por 5 departamentos, unificando el volumen mediante un lenguaje de tonos tierra, jardineras centrales en voladizo y una marcada simetría vertical. El diseño optimiza la densidad habitacional integrando cerrajería de protección en planta baja y carpintería de madera en los niveles superiores, renovando la imagen urbana del predio.",
                "location": "San Juan de Miraflores, Lima",
                "date": "2009",
                "area": "160 m²",
                "contractor": null,
                "images": [
                    "images/proy2_img1.png",
                    "images/proy2_img2.png",
                    "images/proy2_img3.png"
                ]
            },{
                "id": 3,
                "title": "Mercado Las Flores de Villa",
                "shortDescription": "Adecuación arquitectónica de un equipamiento comercial de dos niveles que zonifica la actividad mercantil masiva en planta baja y la gestión administrativa en el nivel superior.",
                "longDescription": "La edificación presenta una estética funcionalista industrial, definida por una modulación perimetral de cerramientos metálicos enrollables y una cubierta ligera de acero que jerarquiza volumétricamente el segundo nivel. El programa arquitectónico optimiza la densidad operativa albergando 153 unidades comerciales en el primer piso (24 exteriores y 129 interiores), articulando las oficinas administrativas y terrazas superiores mediante núcleos de circulación vertical estratégicos.",
                location: "San Juan de Miraflores, Lima",
                date: "2018",
                area: "3250 m²",
                contractor: null,
                images: [
                    "images/proy3_img2.png",
                    "images/proy3_img1.png",
                    "images/proy3_img3.png"
                ]
            },
            {
                id: 4,
                title: "Local Comercial - Centro Empresarial",
                shortDescription: "Diseño funcional para espacio comercial con optimización de flujos de trabajo.",
                longDescription: "Desarrollo de proyecto arquitectónico para local comercial de uso múltiple. El diseño contempla áreas de atención al público, oficinas administrativas, almacenes y servicios higiénicos. Se optimizaron los flujos de circulación para mejorar la experiencia del cliente y la eficiencia operativa. Incluye diseño de fachada comercial moderna, iluminación especializada y sistemas de climatización. Se gestionaron todos los trámites municipales correspondientes.",
                location: "San Isidro, Lima",
                date: "2023",
                area: "350 m²",
                contractor: null,
                images: [
                    "images/proy4_img1.png",
                    "images/proy4_img2.png",
                    "images/proy4_img3.png"
                ]
            },
            {
                id: 5,
                title: "Local Comercial - Centro Empresarial",
                shortDescription: "Diseño funcional para espacio comercial con optimización de flujos de trabajo.",
                longDescription: "Desarrollo de proyecto arquitectónico para local comercial de uso múltiple. El diseño contempla áreas de atención al público, oficinas administrativas, almacenes y servicios higiénicos. Se optimizaron los flujos de circulación para mejorar la experiencia del cliente y la eficiencia operativa. Incluye diseño de fachada comercial moderna, iluminación especializada y sistemas de climatización. Se gestionaron todos los trámites municipales correspondientes.",
                location: "San Isidro, Lima",
                date: "2023",
                area: "350 m²",
                contractor: null,
                images: [
                    "images/proy5_img3.png",
                    "images/proy5_img1.png",
                    "images/proy5_img2.png"
                ]
            }
        ];
        
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.setupModalListeners();
    }
    
    renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        this.projectsData.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }
    
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="project-view-btn" data-project-id="${project.id}">
                        <i class="fas fa-eye"></i> Ver Proyecto
                    </button>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-details">
                    <span><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                    <span><i class="fas fa-calendar"></i> ${project.date}</span>
                </div>
            </div>
        `;
        
        // Event listener para abrir modal
        const viewBtn = card.querySelector('.project-view-btn');
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.openModal(project.id);
        });
        
        card.addEventListener('click', () => {
            this.openModal(project.id);
        });
        
        return card;
    }
    
    openModal(projectId) {
        const project = this.projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        this.currentModalProject = project;
        this.currentSlideIndex = 0;
        
        // Crear modal si no existe
        let modal = document.getElementById('project-modal');
        if (!modal) {
            modal = this.createModal();
            document.body.appendChild(modal);
        }
        
        // Llenar modal con datos del proyecto
        this.populateModal(project);
        
        // Mostrar modal
        setTimeout(() => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10);
    }
    
    createModal() {
        const modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'project-modal';
        
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <button class="modal-close" aria-label="Cerrar modal">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="modal-content">
                    <div class="modal-gallery">
                        <div class="gallery-main">
                            <button class="gallery-nav prev" aria-label="Imagen anterior">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <div class="gallery-image-container">
                                <img src="" alt="" class="gallery-image">
                            </div>
                            <button class="gallery-nav next" aria-label="Imagen siguiente">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div class="gallery-thumbnails"></div>
                    </div>
                    
                    <div class="modal-info">
                        <div class="modal-header">
                            <h2 class="modal-title"></h2>
                        </div>
                        
                        <div class="modal-description">
                            <p class="description-text"></p>
                        </div>
                        
                        <div class="modal-metadata"></div>
                        
                        <div class="modal-actions">
                            <a href="https://wa.me/51998845602" class="btn btn-primary" target="_blank">
                                <i class="fab fa-whatsapp"></i> Consultar Proyecto Similar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return modal;
    }
    
    populateModal(project) {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        // Título
        modal.querySelector('.modal-title').textContent = project.title;
        
        // Descripción
        modal.querySelector('.description-text').textContent = project.longDescription;
        
        // Metadata
        const metadataContainer = modal.querySelector('.modal-metadata');
        metadataContainer.innerHTML = `
            <div class="metadata-item">
                <div class="metadata-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="metadata-content">
                    <span class="metadata-label">Ubicación</span>
                    <span class="metadata-value">${project.location}</span>
                </div>
            </div>
            
            <div class="metadata-item">
                <div class="metadata-icon">
                    <i class="fas fa-calendar-alt"></i>
                </div>
                <div class="metadata-content">
                    <span class="metadata-label">Año</span>
                    <span class="metadata-value">${project.date}</span>
                </div>
            </div>
            
            <div class="metadata-item">
                <div class="metadata-icon">
                    <i class="fas fa-ruler-combined"></i>
                </div>
                <div class="metadata-content">
                    <span class="metadata-label">Área del Terreno</span>
                    <span class="metadata-value">${project.area}</span>
                </div>
            </div>
            
            ${project.contractor ? `
                <div class="metadata-item">
                    <div class="metadata-icon">
                        <i class="fas fa-hard-hat"></i>
                    </div>
                    <div class="metadata-content">
                        <span class="metadata-label">Contratista</span>
                        <span class="metadata-value">${project.contractor}</span>
                    </div>
                </div>
            ` : ''}
        `;
        
        // Galería de imágenes
        this.setupGallery(project.images);
        
        // Setup event listeners para el modal
        this.setupModalEventListeners();
    }
    
    setupGallery(images) {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        const mainImage = modal.querySelector('.gallery-image');
        const thumbnailsContainer = modal.querySelector('.gallery-thumbnails');
        
        // Mostrar primera imagen
        mainImage.src = images[0];
        mainImage.alt = this.currentModalProject.title;
        
        // Crear thumbnails
        thumbnailsContainer.innerHTML = '';
        images.forEach((image, index) => {
            const thumb = document.createElement('button');
            thumb.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${image}" alt="Vista ${index + 1}">`;
            thumb.addEventListener('click', () => this.goToSlide(index));
            thumbnailsContainer.appendChild(thumb);
        });
    }
    
    goToSlide(index) {
        if (!this.currentModalProject) return;
        
        const images = this.currentModalProject.images;
        if (index < 0 || index >= images.length) return;
        
        this.currentSlideIndex = index;
        
        const modal = document.getElementById('project-modal');
        const mainImage = modal.querySelector('.gallery-image');
        const thumbnails = modal.querySelectorAll('.gallery-thumbnail');
        
        // Actualizar imagen principal
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.style.opacity = '1';
        }, 200);
        
        // Actualizar thumbnails activos
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
    
    nextSlide() {
        if (!this.currentModalProject) return;
        const nextIndex = (this.currentSlideIndex + 1) % this.currentModalProject.images.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        if (!this.currentModalProject) return;
        const images = this.currentModalProject.images;
        const prevIndex = (this.currentSlideIndex - 1 + images.length) % images.length;
        this.goToSlide(prevIndex);
    }
    
    setupModalEventListeners() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        // Botón cerrar
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.closeModal());
        
        // Overlay
        const overlay = modal.querySelector('.modal-overlay');
        overlay.addEventListener('click', () => this.closeModal());
        
        // Navegación de galería
        const prevBtn = modal.querySelector('.gallery-nav.prev');
        const nextBtn = modal.querySelector('.gallery-nav.next');
        
        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Teclado
        const keyHandler = (e) => {
            if (!modal.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                this.closeModal();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        };
        
        document.addEventListener('keydown', keyHandler);
    }
    
    setupModalListeners() {
        // Event delegation para botones de proyectos
        document.addEventListener('click', (e) => {
            if (e.target.closest('.project-view-btn')) {
                const projectId = parseInt(e.target.closest('.project-view-btn').dataset.projectId);
                this.openModal(projectId);
            }
        });
    }
    
    closeModal() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        this.currentModalProject = null;
        this.currentSlideIndex = 0;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});
