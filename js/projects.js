// ===== PROYECTOS DESTACADOS =====
class ProjectsManager {
    constructor() {
        this.currentModalProject = null;
        this.currentSlideIndex = 0;
        this.keyHandler = null; // Guardar referencia al handler
        this.isTransitioning = false; // Prevenir clicks múltiples
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
                "shortDescription": "Equipamiento comercial de dos niveles definido por una imponente cobertura metálica de grandes luces, diseñada para maximizar la espacialidad operativa del mercado y albergar áreas administrativas en una planta superior de alta eficiencia estructural.",
                "longDescription": "La edificación destaca por una propuesta de arquitectura industrial fundamentada en el uso de estructuras metálicas de grandes luces. Este sistema de techumbre de acero permite generar plantas libres de gran altura, optimizando la ventilación natural y la fluidez del tránsito masivo. La solución estructural no solo define la estética funcionalista del conjunto, sino que jerarquiza volumétricamente el segundo nivel, reduciendo la carga puntual y facilitando la organización de 153 unidades comerciales en planta baja (24 exteriores y 129 interiores). La ligereza del acero en el nivel superior articula las oficinas administrativas y terrazas, logrando un equilibrio entre durabilidad técnica y flexibilidad operativa frente al uso intensivo del mercado.",
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
                "id": 4,
                "title": "Proyecto Multifamiliar San Martín",
                "shortDescription": "Modernización arquitectónica y reconversión de vivienda unifamiliar en un edificio multifamiliar contemporáneo con núcleo de acceso independiente.",
                "longDescription": "Esta intervención consistió en la transformación integral de una vivienda preexistente en un edificio multifamiliar de cuatro niveles, optimizando el uso del suelo en un terreno de 140 m². El diseño destaca por la modernización total de la fachada, utilizando una volumetría limpia y una paleta de colores neutros. El elemento protagonista es el núcleo de circulación vertical independiente, jerarquizado visualmente mediante un muro cortina de cristal que permite la independencia de los departamentos y dota de iluminación natural a las escaleras. La propuesta integra amplios ventanales y balcones metálicos que renuevan la estética urbana del sector, garantizando ventilación y confort en cada unidad residencial.",
                "location": "San Martín de Porres, Lima",
                "date": "2017",
                "area": "140 m²",
                "contractor": null,
                "images": [
                    "images/proy4_img1.png",
                    "images/proy4_img2.png",
                    "images/proy4_img3.png"
                ]
            },
            {
                "id": 5,
                "title": "Master Suite & Spa Residencial",
                "shortDescription": "Diseño de interiores de vanguardia en una suite de 30 m² que integra un área de spa privada y baño de concepto abierto con acabados de alta gama.",
                "longDescription": "Este proyecto de interiorismo transforma un espacio residencial en una experiencia de lujo hotelero dentro del hogar. La propuesta se centra en la integración de un jacuzzi de hidromasaje revestido en mármol y piedra natural, complementado por un sistema de iluminación LED indirecta que acentúa las texturas. El diseño destaca por el uso extensivo de palillería de madera y muros de piedra rústica, creando una atmósfera cálida y orgánica. El programa optimiza los 30 m² al incorporar un baño moderno con ducha de cristal templado y mobiliario a medida, logrando una transición fluida entre la zona de descanso y el área de bienestar sin sacrificar la sofisticación.",
                "location": "San Juan de Miraflores, Lima",
                "date": "2012",
                "area": "30 m²",
                "contractor": null,
                "images": [
                    "images/proy5_img1.png",
                    "images/proy5_img2.png",
                    "images/proy5_img3.png"
                ]
            },
            {
                "id": 6,
                "title": "Complejo Educativo San Juan de Lurigancho",
                "shortDescription": "Diseño de infraestructura educativa moderna caracterizado por una volumetría contemporánea y un imponente ingreso jerarquizado mediante muro cortina de vidrio.",
                "longDescription": "Este proyecto de arquitectura institucional plantea un edificio de cuatro niveles diseñado para responder a las demandas pedagógicas contemporáneas en un entorno urbano denso. La propuesta estética se fundamenta en un juego de volúmenes contrastados en tonos gris antracita y blanco, utilizando acabados de alta durabilidad y bajo mantenimiento. El elemento arquitectónico protagonista es el núcleo de acceso principal, resuelto con un sofisticado muro cortina de vidrio que dota al edificio de transparencia, modernidad y una escala monumental hacia la vía pública. El diseño integra ventanales horizontales rítmicos que garantizan una iluminación natural óptima y ventilación cruzada en todas las aulas, creando un ambiente de aprendizaje confortable y tecnológicamente integrado.",
                "location": "San Juan de Lurigancho, Lima",
                "date": "2017",
                "area": "Privada",
                "contractor": null,
                "images": [
                    "images/proy6_img1.png",
                    "images/proy6_img2.png",
                    "images/proy6_img3.png"
                ]
            },
            {
                "id": 7,
                "title": "Centro Recreativo, Cultural y Juvenil Santa Eulalia",
                "shortDescription": "Estudio y programación arquitectónica de un complejo integral destinado al desarrollo social, cultural y deportivo de la juventud.",
                "longDescription": "Este proyecto de tesis desarrolla una propuesta exhaustiva para un equipamiento metropolitano diseñado para potenciar el bienestar de la población juvenil. El programa arquitectónico se fundamenta en un análisis estadístico de la población nacional y local hasta el año 2000, identificando necesidades críticas de infraestructura social. La propuesta técnica destaca por una diversificada zona de esparcimiento que incluye gimnasio, sauna y salas de juegos, complementada con un complejo deportivo de alto nivel que contempla canchas de tenis, bádminton, frontón, básquetbol y fútbol con medidas reglamentarias. El diseño se orienta a crear un núcleo de interacción comunitaria que integre la recreación física con espacios culturales en un entorno natural privilegiado.",
                "location": "Santa Eulalia, Huarochirí",
                "date": "2000",
                "area": "Área programada integral",
                "contractor": null,
                "images": [
                    "images/quesigalacumbia.png",
                    "images/proy7_img1.png",
                    "images/proy7_img2.png"
                ]
            },
            {
                "id": 8,
                "title": "Residencia de Campo & Bungalows Asia",
                "shortDescription": "Exclusivo complejo residencial de campo de 20,384 m² que integra una vivienda principal con piscina, bungalows independientes y áreas administrativas bajo un lenguaje arquitectónico rústico-contemporáneo.",
                "longDescription": "Este ambicioso proyecto de vivienda de campo se despliega sobre una vasta extensión de terreno en el distrito de Asia, proponiendo un conjunto arquitectónico que equilibra el lujo y la naturaleza. El programa se organiza alrededor de una imponente casa principal de dos niveles con azotea, definida por el uso de piedra natural, techos de teja y amplios ventanales que capturan la iluminación del entorno. El conjunto incluye dos bungalows privados, un chalet independiente y oficinas anexas, todos articulados por una piscina central con acabados en piedra y extensas áreas verdes. Los interiores destacan por sus espacios de doble altura con acabados en madera y una transición fluida hacia el exterior, logrando un refugio rural de alta sofisticación y confort térmico.",
                "location": "Distrito de Asia, Cañete",
                "date": "2023",
                "area": "20,384 m²",
                "contractor": null,
                "images": [
                    "images/proy8_img1.png",
                    "images/proy8_img2.png",
                    "images/proy8_img3.png"
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
                            <a href="https://wa.me/51945756713" class="btn btn-primary" target="_blank">
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
        
        // Prevenir cambios durante transición
        if (this.isTransitioning) return;
        
        // Si es el mismo índice, no hacer nada
        if (this.currentSlideIndex === index) return;
        
        this.isTransitioning = true;
        this.currentSlideIndex = index;
        
        const modal = document.getElementById('project-modal');
        const mainImage = modal.querySelector('.gallery-image');
        const thumbnails = modal.querySelectorAll('.gallery-thumbnail');
        
        // Actualizar imagen principal con fade
        mainImage.style.opacity = '0';
        
        // Esperar a que termine el fade out
        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.onload = () => {
                mainImage.style.opacity = '1';
                this.isTransitioning = false;
            };
            
            // Fallback si la imagen no carga
            setTimeout(() => {
                this.isTransitioning = false;
            }, 500);
        }, 200);
        
        // Actualizar thumbnails activos
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
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
        
        // Remover event listeners anteriores si existen
        this.removeModalEventListeners();
        
        // Botón cerrar
        const closeBtn = modal.querySelector('.modal-close');
        const closeHandler = () => this.closeModal();
        closeBtn.removeEventListener('click', closeHandler); // Limpiar primero
        closeBtn.addEventListener('click', closeHandler);
        
        // Overlay
        const overlay = modal.querySelector('.modal-overlay');
        const overlayHandler = () => this.closeModal();
        overlay.removeEventListener('click', overlayHandler); // Limpiar primero
        overlay.addEventListener('click', overlayHandler);
        
        // Navegación de galería
        const prevBtn = modal.querySelector('.gallery-nav.prev');
        const nextBtn = modal.querySelector('.gallery-nav.next');
        
        const prevHandler = () => this.prevSlide();
        const nextHandler = () => this.nextSlide();
        
        // Remover listeners antiguos y agregar nuevos
        prevBtn.removeEventListener('click', prevHandler);
        nextBtn.removeEventListener('click', nextHandler);
        prevBtn.addEventListener('click', prevHandler);
        nextBtn.addEventListener('click', nextHandler);
        
        // Guardar referencias para limpieza posterior
        this.modalHandlers = {
            closeBtn,
            closeHandler,
            overlay,
            overlayHandler,
            prevBtn,
            prevHandler,
            nextBtn,
            nextHandler
        };
        
        // Teclado - Usar handler con bind para poder removerlo después
        this.keyHandler = (e) => {
            if (!modal.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                this.closeModal();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        };
        
        // Remover listener anterior si existe
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler);
        }
        
        document.addEventListener('keydown', this.keyHandler);
    }
    
    removeModalEventListeners() {
        // Remover keyboard listener
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler);
            this.keyHandler = null;
        }
        
        // Remover otros listeners si existen
        if (this.modalHandlers) {
            const { closeBtn, closeHandler, overlay, overlayHandler, prevBtn, prevHandler, nextBtn, nextHandler } = this.modalHandlers;
            
            if (closeBtn && closeHandler) {
                closeBtn.removeEventListener('click', closeHandler);
            }
            if (overlay && overlayHandler) {
                overlay.removeEventListener('click', overlayHandler);
            }
            if (prevBtn && prevHandler) {
                prevBtn.removeEventListener('click', prevHandler);
            }
            if (nextBtn && nextHandler) {
                nextBtn.removeEventListener('click', nextHandler);
            }
            
            this.modalHandlers = null;
        }
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
        
        // Limpiar event listeners
        this.removeModalEventListeners();
        
        // Resetear estado
        this.currentModalProject = null;
        this.currentSlideIndex = 0;
        this.isTransitioning = false;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsManager();
});
