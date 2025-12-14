// ===== NAVEGACIÓN Y MENU MÓVIL =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');
    
    // Inicializar tema
    initializeTheme();
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        toggleTheme();
    });
    
    // Toggle menu móvil
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Cerrar menu al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Cerrar menu al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ===== SISTEMA DE TEMAS =====
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light' || detectSystemTheme();
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    if (themeIcon) {
        if (savedTheme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    if (!themeToggle || !themeIcon) return;
    
    // Animación del botón
    themeToggle.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Cambiar icono
        if (newTheme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
        
        themeToggle.style.transform = 'scale(1)';
        
        // Tracking del evento
        trackEvent('theme_change', { theme: newTheme });
        
        // Notificación
        showNotification(
            `Modo ${newTheme === 'light' ? 'claro' : 'oscuro'} activado`, 
            'info'
        );
    }, 150);
}

// Detectar preferencia del sistema
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Escuchar cambios en preferencia del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
        }
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    if (themeIcon) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

// ===== NAVEGACIÓN ACTIVA =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    // Add/remove background on scroll
    if (scrollTop > 50) {
        header.style.backgroundColor = 'rgba(19, 26, 34, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMACIONES DE ENTRADA =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos a animar
const animatedElements = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .step, .feature');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== CONTADOR ANIMADO =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        // Observer para activar cuando sea visible
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
}

// Inicializar contadores
animateCounters();

// ===== FORMULARIO DE CONTACTO =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Validación básica
    if (!name || !email || !service || !message) {
        showNotification('Por favor completa todos los campos requeridos', 'error');
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Por favor ingresa un email válido', 'error');
        return;
    }
    
    // Crear mensaje para WhatsApp
    const serviceNames = {
        'diseño': 'Diseño y Proyectos',
        'tramites': 'Trámites Municipales',
        'supervision': 'Supervisión de Obra',
        'inspeccion': 'Inspección Municipal',
        'peritaje': 'Peritaje Arquitectónico',
        'consultoria': 'Consultoría'
    };
    
    const whatsappMessage = `*Consulta desde la web - P&R Arquitectos*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Teléfono:* ${phone || 'No proporcionado'}%0A` +
        `*Servicio:* ${serviceNames[service]}%0A` +
        `*Mensaje:* ${message}`;
    
    const whatsappURL = `https://wa.me/51998845602?text=${whatsappMessage}`;
    
    // Mostrar mensaje de éxito
    showNotification('Redirigiendo a WhatsApp...', 'success');
    
    // Abrir WhatsApp después de un breve delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        this.reset(); // Limpiar formulario
    }, 1000);
});

// ===== SISTEMA DE NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos CSS para notificaciones
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        }
        
        .notification-success {
            border-left: 4px solid #10B981;
        }
        
        .notification-error {
            border-left: 4px solid #EF4444;
        }
        
        .notification-info {
            border-left: 4px solid #3B82F6;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #374151;
        }
        
        .notification-success .notification-content i {
            color: #10B981;
        }
        
        .notification-error .notification-content i {
            color: #EF4444;
        }
        
        .notification-info .notification-content i {
            color: #3B82F6;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #6B7280;
            cursor: pointer;
            padding: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .notification-close:hover {
            background-color: #F3F4F6;
        }
        
        .notification.show {
            transform: translateX(0);
        }
    `;
    
    // Agregar estilos si no existen
    if (!document.getElementById('notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Función para cerrar
    const closeNotification = () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    };
    
    // Event listener para cerrar
    notification.querySelector('.notification-close').addEventListener('click', closeNotification);
    
    // Auto cerrar después de 5 segundos
    setTimeout(closeNotification, 5000);
}

// ===== LAZY LOADING PARA IMÁGENES =====
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ===== EFECTOS DE HOVER AVANZADOS =====
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== BÚSQUEDA DE SERVICIOS =====
function filterServices(searchTerm) {
    const serviceCards = document.querySelectorAll('.service-card');
    const term = searchTerm.toLowerCase();
    
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(term) || description.includes(term)) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// ===== TRACKING DE EVENTOS =====
function trackEvent(eventName, properties = {}) {
    // Aquí puedes integrar con Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, properties);
    
    // Ejemplo de integración con Google Analytics (GA4)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
}

// Track clicks en botones importantes
document.querySelectorAll('.whatsapp-btn, .whatsapp-float').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('whatsapp_click', {
            button_location: this.classList.contains('whatsapp-float') ? 'floating' : 'header'
        });
    });
});

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('cta_click', {
            button_text: this.textContent.trim(),
            section: this.closest('section')?.id || 'unknown'
        });
    });
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function para optimizar eventos
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Optimizar scroll events
const optimizedScrollHandler = debounce(() => {
    // Scroll handlers optimizados aquí
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos los componentes
    console.log('P&R Arquitectos - Website loaded successfully');
    
    // Precargar recursos críticos
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
    
    // Configurar meta tags dinámicos
    updateMetaTags();
});

// ===== META TAGS DINÁMICOS =====
function updateMetaTags() {
    const currentPath = window.location.pathname;
    const currentSection = window.location.hash.replace('#', '');
    
    let title = 'P&R Arquitectos - Diseños y Proyectos Profesionales | Lima, Perú';
    let description = 'P&R Arquitectos - 20 años de experiencia en diseños arquitectónicos, proyectos de construcción, supervisión de obras y trámites municipales en Lima, Perú.';
    
    if (currentSection) {
        switch (currentSection) {
            case 'servicios':
                title = 'Servicios de Arquitectura - P&R Arquitectos | Lima';
                description = 'Servicios profesionales de arquitectura: diseños, proyectos, trámites municipales, supervisión de obras en Lima, Perú.';
                break;
            case 'proyectos':
                title = 'Proyectos Arquitectónicos - P&R Arquitectos | Lima';
                description = 'Conoce nuestros proyectos arquitectónicos destacados en Lima. Diseños residenciales y comerciales de calidad.';
                break;
            case 'contacto':
                title = 'Contacto - P&R Arquitectos | Consulta Gratuita';
                description = 'Contáctanos para una consulta gratuita. WhatsApp: +51 998 845 602. Oficina en San Juan de Miraflores, Lima.';
                break;
        }
    }
    
    document.title = title;
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = description;
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Aquí puedes enviar errores a un servicio de monitoreo
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}