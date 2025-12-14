// ===== HERO CAROUSEL =====
class HeroCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.autoplayInterval = null;
        this.autoplayDelay = 2000; // 5 segundos
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.createCarouselStructure();
        this.setupEventListeners();
        this.startAutoplay();
    }
    
    createCarouselStructure() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        // Array de imágenes del carrusel
        this.slides = [
            {
                url: 'WhatsApp Image 2025-12-13 at 1.46.20 PM.jpeg',
                alt: 'Proyecto Arquitectónico 1'
            },
            {
                url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
                alt: 'Diseño Residencial Moderno'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
                alt: 'Arquitectura Contemporánea'
            },
            {
                url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
                alt: 'Proyecto de Construcción'
            }
        ];
        
        // Crear contenedor del carrusel
        const carouselHTML = `
            <div class="hero-carousel">
                <div class="carousel-slides">
                    ${this.slides.map((slide, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${slide.url}" alt="${slide.alt}" loading="${index === 0 ? 'eager' : 'lazy'}">
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-dots">
                    ${this.slides.map((_, index) => `
                        <button class="carousel-dot ${index === 0 ? 'active' : ''}" 
                                data-slide="${index}" 
                                aria-label="Ir a imagen ${index + 1}">
                        </button>
                    `).join('')}
                </div>
                <div class="opacity"></div>
                <button class="carousel-control prev" aria-label="Imagen anterior">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-control next" aria-label="Imagen siguiente">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
        
        // Insertar carrusel al inicio del hero
        heroSection.insertAdjacentHTML('afterbegin', carouselHTML);
        
        // Cache de elementos
        this.carousel = heroSection.querySelector('.hero-carousel');
        this.slidesContainer = heroSection.querySelector('.carousel-slides');
        this.slideElements = heroSection.querySelectorAll('.carousel-slide');
        this.dots = heroSection.querySelectorAll('.carousel-dot');
        this.prevBtn = heroSection.querySelector('.carousel-control.prev');
        this.nextBtn = heroSection.querySelector('.carousel-control.next');
    }
    
    setupEventListeners() {
        // Botones de navegación
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        // Dots de navegación
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.currentTarget.dataset.slide);
                this.goToSlide(slideIndex);
            });
        });
        
        // Pausar autoplay al hover
        this.carousel?.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.carousel?.addEventListener('mouseleave', () => this.startAutoplay());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isInViewport()) return;
            
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/Swipe support
        this.setupTouchEvents();
    }
    
    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel?.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.carousel?.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;
        
        this.isTransitioning = true;
        
        // Remover active de slide actual
        this.slideElements[this.currentSlide]?.classList.remove('active');
        this.dots[this.currentSlide]?.classList.remove('active');
        
        // Actualizar índice
        this.currentSlide = index;
        
        // Agregar active a nuevo slide
        this.slideElements[this.currentSlide]?.classList.add('active');
        this.dots[this.currentSlide]?.classList.add('active');
        
        // Permitir nueva transición después de la animación
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
        
        // Reiniciar autoplay
        this.startAutoplay();
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoplay() {
        this.pauseAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    isInViewport() {
        if (!this.carousel) return false;
        const rect = this.carousel.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new HeroCarousel();
});

// Pausar autoplay cuando la página no está visible
document.addEventListener('visibilitychange', () => {
    const carousel = window.heroCarouselInstance;
    if (carousel) {
        if (document.hidden) {
            carousel.pauseAutoplay();
        } else {
            carousel.startAutoplay();
        }
    }
});
