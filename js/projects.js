// ===== PROYECTOS DESTACADOS =====
class ProjectsManager {
    constructor() {
        this.currentModalProject = null;
        this.currentSlideIndex = 0;
        this.projectsData = [
            {
                id: 1,
                title: "Casa Residencial Moderna",
                shortDescription: "Diseño contemporáneo de 200m² con espacios abiertos y aprovechamiento de luz natural.",
                longDescription: "Proyecto integral de vivienda unifamiliar que combina modernidad y funcionalidad. El diseño arquitectónico incorpora amplios ventanales para maximizar la entrada de luz natural, espacios abiertos que favorecen la integración familiar, y acabados de primera calidad. Se desarrollaron planos arquitectónicos completos, diseño estructural, instalaciones sanitarias y eléctricas, además de la supervisión completa de la obra.",
                location: "San Juan de Miraflores, Lima",
                date: "2024",
                area: "200 m²",
                contractor: "Constructora González SAC",
                images: [
                    "images/WhatsApp Image 2025-12-13 at 1.46.20 PM.jpeg",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
                ]
            },
            {
                id: 2,
                title: "Remodelación Integral Residencial",
                shortDescription: "Ampliación y remodelación de vivienda familiar con nuevas instalaciones.",
                longDescription: "Proyecto de remodelación y ampliación que transformó completamente una vivienda existente. Se realizó la redistribución de espacios interiores, ampliación de 80m² adicionales, actualización completa de instalaciones eléctricas y sanitarias, y mejoramiento de fachadas. El proyecto incluyó el diseño de nuevos ambientes como sala de estar ampliada, cocina moderna integrada y dos dormitorios adicionales con baños propios.",
                location: "Miraflores, Lima",
                date: "2023",
                area: "280 m²",
                contractor: "Obras & Proyectos SAC",
                images: [
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
                    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80"
                ]
            },
            {
                id: 3,
                title: "Local Comercial - Centro Empresarial",
                shortDescription: "Diseño funcional para espacio comercial con optimización de flujos de trabajo.",
                longDescription: "Desarrollo de proyecto arquitectónico para local comercial de uso múltiple. El diseño contempla áreas de atención al público, oficinas administrativas, almacenes y servicios higiénicos. Se optimizaron los flujos de circulación para mejorar la experiencia del cliente y la eficiencia operativa. Incluye diseño de fachada comercial moderna, iluminación especializada y sistemas de climatización. Se gestionaron todos los trámites municipales correspondientes.",
                location: "San Isidro, Lima",
                date: "2023",
                area: "350 m²",
                contractor: null,
                images: [
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80",
                    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80"
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
                    <span class="metadata-label">Área Construida</span>
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
