// ===== CONFIGURACIÓN Y DATOS CENTRALIZADOS =====
// main.js - Sistema de gestión de contenido dinámico para P&R Arquitectos

const SITE_DATA = {
    // Información de la empresa
    company: {
        name: "P&R ARQUITECTOS",
        fullName: "P&R Arquitectos S.R.L.",
        tagline: "Transforma tus ideas en proyectos reales",
        ruc: "20511083967",
        founded: "2005",
        experience: "20+",
        description: "25 años de experiencia creando espacios únicos y funcionales. Especialistas en proyectos arquitectónicos, obras de edificación y gestiones públicas.",
        description2: "",
    },

    // Contacto
    contact: {
        phone: "(01) 276****",
        whatsapp: "+51 998 845 602",
        whatsappLink: "51998845602",
        email: "dip_arquitecto_@hotmail.com",
        address: {
            street: "Jr. Jesús Morales Nº 536 Zona E",
            district: "San Juan de Miraflores",
            city: "Lima"
        },
        schedule: {
            weekdays: "Lun - Vie: 8:00 AM - 6:00 PM",
            saturday: "Sáb: 9:00 AM - 2:00 PM"
        },
        social: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    },

    // Hero Section
    hero: {
        title: "Transforma tu idea en una",
        titleHighlight: "realidad",
        subtitle: "25 años de experiencia creando espacios únicos y funcionales. Especialistas en proyectos arquitectónicos, obras de edificación y gestiones públicas.",
        primaryButton: {
            text: "Ver Servicios",
            link: "#servicios"
        },
        secondaryButton: {
            text: "Reserva tu consulta",
            icon: "fab fa-whatsapp"
        },
        stats: [
            {
                number: "25+",
                label: "Años de experiencia"
            },
            {
                number: "300+",
                label: "Proyectos completados"
            }
        ]
    },

    // Servicios
    services: {
        sectionTitle: "Nuestros Servicios",
        sectionSubtitle: "Soluciones integrales para tu proyecto arquitectónico",
        items: [
            {
                id: 1,
                icon: "fas fa-home",
                title: "Diseño y ejecución de proyectos arquitectónicos",
                description: "Incluimos todos los servicios necesarios para llevar a cabo el diseño y la ejecución completa de proyectos de arquitectura o ingeniería.",
                features: [
                    "Ejecución de obra",
                    "Viviendas unifamiliares y multifamiliares",
                    "Viviendas campo, playa",
                    "Ampliaciones y remodelaciones",
                    "Proyectos comerciales",
                    "Proyectos de educación"
                ],
                featured: true,
                buttonText: "Solicitar Cotización",
                large: true
            },
            {
                id: 45,
                icon: "fas fa-building",
                title: "Ejecución de obras",
                description: "Si cuentas con un proyecto arquitectónico o de ingeniería, nosotros nos encargamos de la ejecución integral de la obra, asegurando calidad y cumplimiento en cada etapa del proceso.",
                featured: false,
                linkText: "Más información" 
            },
            {
                id: 2,
                icon: "fas fa-clipboard-list",
                title: "Trámites Municipales y de Registros Públicos",
                description: "Te ayudamos con todos los trámites y gestiones municipales necesarios para tu proyecto.",
                features: [
                    "Licencias de edificación, remodelación, ampliación, demolición",
                    "Declaratoria de fábrica",
                    "Independización",
                    "Conformidad de obra"
                ],
                featured: true,
                linkText: "Más información"
            },
            {
                id: 3,
                icon: "fas fa-hard-hat",
                title: "Supervisión de Obra",
                description: "Supervisión profesional durante el proceso de construcción para garantizar la calidad y el cumplimiento del proyecto aprobado.",
                featured: true,
                features: [
                    "Superviciones públicas y privadas de proyectos en general",
                ],
                linkText: "Más información"
            },
            {
                id: 4,
                icon: "fas fa-search",
                title: "Inspección Municipal de Obra (IMO)",
                description: "Toda obra que cuenta con licencia de edificación requiere obligatoriamente un IMO en modalidades A, B, C o D (Decreto Supremo N° 002-2017-Vivienda).",
                featured: false,
                linkText: "Más información"
            },
            {
                id: 5,
                icon: "fas fa-balance-scale",
                title: "Peritajes Arquitectónicos",
                description: "Tazación y valuación de inmuebles con fines comerciales y legales.",
                featured: true,
                features: [
                    "Tazación de bienes inmuebles (viviendas, oficinas, locales comerciales, entre otros)"
                ],
                linkText: "Más información"
            },
            {
                id: 7,
                icon: "fas fa-check-circle",
                title: "Revisores Urbanos",
                description: "Revisión técnica de proyectos de edificación y habilitación urbana para verificar el cumplimiento del Reglamento Nacional de Edificaciones y normas urbanísticas vigentes.",
                features: [
                  "Verificación técnica del proyecto",
                  "Emisión de Informe Técnico Favorable (ITF)",
                  "Agilización del trámite de licencias municipales",
                  "Certificación en modalidades B, C y D",
                  "Evaluación en categorías I, II y III"
                ],
                featured: false,
                linkText: "Más información"
            },              
            {
                id: 6,
                icon: "fas fa-users",
                title: "Consultoría Profesional",
                description: "Ofrecemos consultorías en diversas áreas relacionadas con la arquitectura y la ingeniería desde la concepción, ejecucion e inscripción en los registros públicos.",
                featured: false,
                linkText: "Más información"
            }
        ]
    },

    // Proceso de trabajo
    process: {
        sectionTitle: "Nuestro Proceso de Trabajo",
        sectionSubtitle: "Un enfoque sistemático para garantizar el éxito de tu proyecto",
        steps: [
            {
                number: "01",
                title: "Consulta Inicial",
                description: "Evaluamos tus necesidades y objetivos del proyecto"
            },
            {
                number: "02",
                title: "Diseño y Planificación",
                description: "Creamos los planos y diseños arquitectónicos"
            },
            {
                number: "03",
                title: "Trámites y Permisos",
                description: "Gestionamos todos los permisos municipales"
            },
            {
                number: "04",
                title: "Supervisión y Ejecución de Obra",
                description: "Acompañamos la construcción hasta su finalización"
            }
        ]
    },

    // Proyectos (se cargan desde projects.js)
    projects: {
        sectionTitle: "Proyectos Destacados",
        sectionSubtitle: "Algunos de nuestros trabajos más representativos",
        ctaButton: {
            text: "Ver Más Proyectos",
            icon: "fab fa-whatsapp"
        }
    },

    // Sobre Nosotros
    about: {
        sectionTitle: "Sobre P&R Arquitectos",
        sectionSubtitle: "20 años construyendo confianza y excelencia",
        features: [
            {
                icon: "fas fa-award",
                title: "Buen Contribuyente",
                description: "Certificados por SUNAT desde 2022"
            },
            {
                icon: "fas fa-certificate",
                title: "RNP Registrado",
                description: "Registro Nacional de Proveedores vigente"
            },
            {
                icon: "fas fa-handshake",
                title: "REMYPE Acreditado",
                description: "Micro empresa acreditada con beneficios"
            }
        ],
        image: {
            icon: "fas fa-users",
            title: "Equipo Profesional",
            description: "Arquitectos e ingenieros con amplia experiencia",
            src: "images/quesigalacumbia.png"
        }
    },

    // Testimonios
    testimonials: {
        sectionTitle: "Lo que dicen nuestros clientes",
        sectionSubtitle: "Testimonios reales de proyectos exitosos",
        items: [
            {
                quote: "Excelente trabajo en el diseño de nuestra casa. Muy profesionales y cumplieron con todos los plazos. Recomendados al 100%.",
                author: "María González",
                position: "Propietaria - San Juan de Miraflores"
            },
            {
                quote: "Nos ayudaron con todos los trámites municipales. Su experiencia nos ahorró mucho tiempo y problemas.",
                author: "Carlos Mendoza",
                position: "Constructor - Lima"
            },
            {
                quote: "Supervisión impecable durante toda la construcción. Siempre pendientes de cada detalle.",
                author: "Ana Torres",
                position: "Propietaria - Miraflores"
            }
        ]
    },

    // Call to Action
    cta: {
        title: "¿Listo para empezar tu proyecto?",
        subtitle: "Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos hacer realidad tu proyecto arquitectónico.",
        primaryButton: {
            text: "Consulta Gratuita",
            icon: "fab fa-whatsapp"
        },
        secondaryButton: {
            text: "Llamar Ahora",
            icon: "fas fa-phone",
            link: "tel:+51276****"
        }
    },

    // Contacto
    contactForm: {
        sectionTitle: "Contacto",
        sectionSubtitle: "Estamos aquí para ayudarte con tu proyecto",
        fields: {
            name: {
                placeholder: "Tu nombre completo",
                type: "text",
                required: true
            },
            email: {
                placeholder: "Tu email",
                type: "email",
                required: true
            },
            phone: {
                placeholder: "Tu teléfono",
                type: "tel",
                required: false
            },
            service: {
                placeholder: "Selecciona un servicio",
                type: "select",
                required: true,
                options: [
                    { value: "", text: "Selecciona un servicio" },
                    { value: "diseño", text: "Diseño y Proyectos" },
                    { value: "tramites", text: "Trámites Municipales" },
                    { value: "supervision", text: "Supervisión de Obra" },
                    { value: "inspeccion", text: "Inspección Municipal" },
                    { value: "peritaje", text: "Peritaje Arquitectónico" },
                    { value: "consultoria", text: "Consultoría" }
                ]
            },
            message: {
                placeholder: "Cuéntanos sobre tu proyecto...",
                type: "textarea",
                required: true,
                rows: 5
            }
        },
        submitButton: {
            text: "Enviar Mensaje",
            icon: "fas fa-paper-plane"
        }
    },

    // Footer
    footer: {
        description: "20 años de experiencia en arquitectura e ingeniería. Transformamos ideas en proyectos reales.",
        links: {
            services: {
                title: "Servicios",
                items: [
                    { text: "Diseño Arquitectónico", link: "#servicios" },
                    { text: "Trámites Municipales", link: "#servicios" },
                    { text: "Supervisión de Obra", link: "#servicios" },
                    { text: "Inspección Municipal", link: "#servicios" },
                    { text: "Peritajes", link: "#servicios" }
                ]
            },
            legal: {
                title: "Información Legal",
                items: [
                    "RUC: 20511083967",
                    "Buen Contribuyente",
                    "RNP Registrado",
                    "REMYPE Acreditado"
                ]
            }
        },
        copyright: "© 2025 P&R Arquitectos S.R.L. Todos los derechos reservados.",
        developed: "Desarrollado con profesionalismo para arquitectura de calidad."
    },

    // SEO
    seo: {
        title: "P&R Arquitectos - Diseños y Proyectos Profesionales | Lima, Perú",
        description: "P&R Arquitectos - 20 años de experiencia en diseños arquitectónicos, proyectos de construcción, supervisión de obras y trámites municipales en Lima, Perú.",
        keywords: "arquitectos lima, diseño arquitectónico, proyectos construcción, trámites municipales, supervisión obras, arquitectura perú"
    }
};

// ===== SISTEMA DE RENDERIZADO DINÁMICO =====
class ContentRenderer {
    constructor() {
        this.data = SITE_DATA;
    }

    // Inicializar todo el contenido
    init() {
        this.renderHero();
        this.renderServices();
        this.renderProcess();
        this.renderAbout();
        this.renderTestimonials();
        this.renderCTA();
        this.renderContact();
        this.renderFooter();
        this.updateSEO();
    }

    // Renderizar Hero Section
    renderHero() {
        const hero = this.data.hero;
        
        document.querySelector('.hero-text h1').innerHTML = 
            `${hero.title} <span class="highlight">${hero.titleHighlight}</span>`;
        
        document.querySelector('.hero-subtitle').textContent = hero.subtitle;
        
        // Botones
        const buttons = document.querySelector('.hero-buttons');
        buttons.innerHTML = `
            <a href="${hero.primaryButton.link}" class="btn btn-primary">${hero.primaryButton.text}</a>
            <a href="https://wa.me/${this.data.contact.whatsappLink}" class="btn btn-secondary" target="_blank">
                <i class="${hero.secondaryButton.icon}"></i> ${hero.secondaryButton.text}
            </a>
        `;
        
        // Stats
        const statsContainer = document.querySelector('.hero-stats');
        statsContainer.innerHTML = hero.stats.map(stat => `
            <div class="stat">
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }

    // Renderizar Servicios
    renderServices() {
        const services = this.data.services;
        
        document.querySelector('#servicios .section-header h2').textContent = services.sectionTitle;
        document.querySelector('#servicios .section-header p').textContent = services.sectionSubtitle;
        
        const grid = document.querySelector('.services-grid');
        grid.innerHTML = services.items.map(service => {
            const largedClass = service.large ? 'larged' : '';
          
            return `
                <div class="service-card ${largedClass}">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    ${service.features && service.features.length > 0 ? `
                    <ul class="service-features">
                        ${service.features.map(feature => `
                            <li><i class="fas fa-check"></i> ${feature}</li>
                        `).join('')}
                    </ul>
                    ` : ''}
                    ${service.buttonText ? `
                    <a href="https://wa.me/${this.data.contact.whatsappLink}" class="service-btn" target="_blank">${service.buttonText}</a>
                    ` : ''}

                    ${service.linkText ? `
                    <a href="https://wa.me/${this.data.contact.whatsappLink}" class="service-link" target="_blank">${service.linkText}</a>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    // Renderizar Proceso
    renderProcess() {
        const process = this.data.process;
        
        document.querySelector('.process .section-header h2').textContent = process.sectionTitle;
        document.querySelector('.process .section-header p').textContent = process.sectionSubtitle;
        
        const stepsContainer = document.querySelector('.process-steps');
        stepsContainer.innerHTML = process.steps.map(step => `
            <div class="step">
                <div class="step-number">${step.number}</div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Renderizar Sobre Nosotros
    renderAbout() {
        const about = this.data.about;
        const company = this.data.company;
        
        document.querySelector('#nosotros .section-header h2').textContent = about.sectionTitle;
        document.querySelector('#nosotros .section-header p').textContent = about.sectionSubtitle;
        
        const descriptions = document.querySelectorAll('.about-description p');
        descriptions[0].textContent = company.description;
        descriptions[1].textContent = company.description2;
        
        const featuresContainer = document.querySelector('.about-features');
        featuresContainer.innerHTML = about.features.map(feature => `
            <div class="feature">
                <i class="${feature.icon}"></i>
                <div>
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `).join('');
        
        // Imagen o placeholder
        const aboutImage = document.querySelector('.about-image');
        if (about.image.src) {
            aboutImage.innerHTML = `<img src="${about.image.src}" alt="${about.image.title}">`;
        } else {
            aboutImage.innerHTML = `
                <div class="about-placeholder">
                    <i class="${about.image.icon}"></i>
                    <h3>${about.image.title}</h3>
                    <p>${about.image.description}</p>
                </div>
            `;
        }
    }

    // Renderizar Testimonios
    renderTestimonials() {
        const testimonials = this.data.testimonials;
        
        document.querySelector('.testimonials .section-header h2').textContent = testimonials.sectionTitle;
        document.querySelector('.testimonials .section-header p').textContent = testimonials.sectionSubtitle;
        
        const grid = document.querySelector('.testimonials-grid');
        grid.innerHTML = testimonials.items.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <i class="fas fa-quote-left"></i>
                    <p>"${testimonial.quote}"</p>
                </div>
                <div class="testimonial-author">
                    <h4>${testimonial.author}</h4>
                    <span>${testimonial.position}</span>
                </div>
            </div>
        `).join('');
    }

    // Renderizar CTA
    renderCTA() {
        const cta = this.data.cta;
        
        document.querySelector('.cta-content h2').textContent = cta.title;
        document.querySelector('.cta-content p').textContent = cta.subtitle;
        
        const buttons = document.querySelector('.cta-buttons');
        buttons.innerHTML = `
            <a href="https://wa.me/${this.data.contact.whatsappLink}" class="btn btn-primary" target="_blank">
                <i class="${cta.primaryButton.icon}"></i> ${cta.primaryButton.text}
            </a>
            <a href="${cta.secondaryButton.link}" class="btn btn-secondary">
                <i class="${cta.secondaryButton.icon}"></i> ${cta.secondaryButton.text}
            </a>
        `;
    }

    // Renderizar Contacto
    renderContact() {
        const contact = this.data.contact;
        const form = this.data.contactForm;
        
        document.querySelector('#contacto .section-header h2').textContent = form.sectionTitle;
        document.querySelector('#contacto .section-header p').textContent = form.sectionSubtitle;
        
        // Info de contacto
        const contactInfo = document.querySelector('.contact-info');
        contactInfo.innerHTML = `
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Ubicación</h4>
                    <p>${contact.address.street}<br>${contact.address.district}, ${contact.address.city}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                    <h4>Teléfono</h4>
                    <p>${contact.phone}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fas fa-mobile-alt"></i>
                <div>
                    <h4>WhatsApp</h4>
                    <p>${contact.whatsapp}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>Email</h4>
                    <p>${contact.email}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <i class="fas fa-clock"></i>
                <div>
                    <h4>Horarios</h4>
                    <p>${contact.schedule.weekdays}<br>${contact.schedule.saturday}</p>
                </div>
            </div>
        `;
        
        // Formulario
        const formElement = document.querySelector('#contactForm');
        formElement.innerHTML = `
            <div class="form-group">
                <input type="${form.fields.name.type}" id="name" name="name" 
                    placeholder="${form.fields.name.placeholder}" 
                    ${form.fields.name.required ? 'required' : ''}>
            </div>
            
            <div class="form-group">
                <input type="${form.fields.email.type}" id="email" name="email" 
                    placeholder="${form.fields.email.placeholder}" 
                    ${form.fields.email.required ? 'required' : ''}>
            </div>
            
            <div class="form-group">
                <input type="${form.fields.phone.type}" id="phone" name="phone" 
                    placeholder="${form.fields.phone.placeholder}">
            </div>
            
            <div class="form-group">
                <select id="service" name="service" ${form.fields.service.required ? 'required' : ''}>
                    ${form.fields.service.options.map(option => 
                        `<option value="${option.value}">${option.text}</option>`
                    ).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <textarea id="message" name="message" 
                    placeholder="${form.fields.message.placeholder}" 
                    rows="${form.fields.message.rows}" 
                    ${form.fields.message.required ? 'required' : ''}></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">
                <i class="${form.submitButton.icon}"></i> ${form.submitButton.text}
            </button>
        `;
    }

    // Renderizar Footer
    renderFooter() {
        const footer = this.data.footer;
        const company = this.data.company;
        const contact = this.data.contact;
        
        // Logo y descripción
        document.querySelector('.footer-logo span').textContent = company.name;
        document.querySelector('.footer-info > p').textContent = footer.description;
        
        // Contacto en footer
        const footerContact = document.querySelector('.footer-contact');
        footerContact.innerHTML = `
            <p><i class="fas fa-phone"></i> ${contact.phone}</p>
            <p><i class="fab fa-whatsapp"></i> ${contact.whatsapp}</p>
            <p><i class="fas fa-envelope"></i> ${contact.email}</p>
        `;
        
        // Enlaces de servicios
        document.querySelector('.footer-links h4').textContent = footer.links.services.title;
        const servicesLinks = document.querySelector('.footer-links ul');
        servicesLinks.innerHTML = footer.links.services.items.map(item => 
            `<li><a href="${item.link}">${item.text}</a></li>`
        ).join('');
        
        // Info legal
        document.querySelector('.footer-legal h4').textContent = footer.links.legal.title;
        const legalInfo = document.querySelector('.footer-legal ul');
        legalInfo.innerHTML = footer.links.legal.items.map(item => 
            `<li>${item}</li>`
        ).join('');
        
        // Copyright
        const footerBottom = document.querySelector('.footer-bottom');
        footerBottom.innerHTML = `
            <p>${footer.copyright}</p>
            <p>${footer.developed}</p>
        `;
    }

    // Actualizar SEO
    updateSEO() {
        const seo = this.data.seo;
        document.title = seo.title;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = seo.description;
        }
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    const renderer = new ContentRenderer();
    renderer.init();
    console.log('✓ Contenido cargado dinámicamente desde main.js');
});

// Exportar para uso global
window.SITE_DATA = SITE_DATA;
window.ContentRenderer = ContentRenderer;
