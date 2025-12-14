# P&R Arquitectos S.R.L. - Corporate Website

[![Project Status](https://img.shields.io/badge/Status-Active-success)](https://github.com)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com)
[![License](https://img.shields.io/badge/License-Proprietary-red)](https://github.com)

## Abstract

Professional corporate website developed for P&R Arquitectos S.R.L., a leading architecture and engineering firm with 20 years of experience in Lima, Peru. The platform implements a modern, responsive design with dynamic content management, emphasizing user experience and conversion optimization through strategic call-to-action placements and direct client communication channels.

## Author & Development

**Cesar Aaron Perales Rosales**  
Computer Scientist | Full Stack Developer  
Contact available through repository

## Project Objectives

### Business Requirements
- Establish professional digital presence for P&R Arquitectos S.R.L.
- Showcase architectural services and portfolio through interactive interfaces
- Implement direct client communication channels via WhatsApp integration
- Ensure cross-device compatibility and responsive design
- Provide modern user experience with fluid interactions

### Technical Requirements
- Modular and maintainable code architecture
- Search Engine Optimization (SEO) implementation
- Scalable and reusable components
- Dynamic content management through JavaScript
- Performance optimization with lazy loading strategies

## System Architecture

### Design Patterns & Methodologies
- **Object-Oriented JavaScript**: ES6+ class-based architecture
- **Separation of Concerns**: Modular CSS and JS file organization
- **Progressive Enhancement**: Core functionality without JavaScript degradation
- **Mobile-First Approach**: Responsive design from small to large viewports
- **Event Delegation**: Optimized event handling patterns

### Key Features Implementation

#### 1. Dynamic Hero Carousel System
A fully-featured image carousel implementing the following specifications:

**Technical Features:**
- Automatic slide transition (configurable interval: 5000ms)
- Manual navigation controls (previous/next buttons, dot indicators)
- Touch gesture support (swipe detection with threshold validation)
- Keyboard navigation (ArrowLeft/ArrowRight key bindings)
- Mouse hover pause functionality
- Visibility API integration for performance optimization
- Custom opacity layer for content readability enhancement

**Implementation Details:**
```javascript
class HeroCarousel {
    constructor()
    init()
    createCarouselStructure()
    setupEventListeners()
    setupTouchEvents()
    goToSlide(index)
    startAutoplay()
    pauseAutoplay()
}
```

#### 2. Dynamic Project Management System
JSON-driven project portfolio with modal-based detail views.

**Data Structure:**
```javascript
interface Project {
    id: number;
    title: string;
    shortDescription: string;      // Card preview
    longDescription: string;       // Modal detailed view
    location: string;
    date: string;
    area: string;
    contractor: string | null;     // Optional field
    images: string[];              // Image URL array
}
```

**Modal System Features:**
- Dynamic card generation from JSON data source
- Interactive modal with image gallery carousel
- Visual metadata display with icon system:
  - Geographic location indicator
  - Construction year timestamp
  - Built area measurement
  - Contractor information (conditional rendering)

**Responsive Layout:**
- Desktop: Split-view layout (50% gallery | 50% information)
- Mobile: Stacked layout (gallery above, information below)
- Tablet: Adaptive breakpoint handling

**User Interaction:**
- Multiple modal dismissal methods:
  - Close button (X) with rotation animation
  - Overlay click detection
  - ESC key binding
- Dark overlay (85% opacity with backdrop blur)
- Thumbnail-based image navigation
- Keyboard shortcuts for image cycling

#### 3. Theme System Implementation
Dual-theme support with user preference persistence:

**Theme Configuration:**
```css
/* Dark Theme (Default) */
--primary-color: #131a22;
--secondary-color: #1a2129;
--accent-color: #3C4B9C;
--complementary-color: #EAE1C3;

/* Light Theme */
--primary-color: #ffffff;
--secondary-color: #f8fafc;
--accent-color: #3C4B9C;
--complementary-color: #131a22;
```

**Features:**
- CSS Custom Properties for dynamic theming
- LocalStorage persistence for user preferences
- Smooth transition animations (300ms)
- System preference detection via `prefers-color-scheme`

### Website Sections

The application implements a single-page architecture with the following sections:

1. **Hero Section**: Full-viewport introduction with carousel background
2. **Services Grid**: Six-service layout with featured card emphasis
3. **Process Workflow**: Four-step visual process representation
4. **Project Portfolio**: Dynamic project grid with modal interactions
5. **About Section**: Company history and certifications
6. **Testimonials**: Client feedback carousel
7. **Call-to-Action**: Strategic conversion sections
8. **Contact Form**: Lead capture with validation
9. **Footer**: Comprehensive site information and navigation

### Communication Integration
- Persistent WhatsApp floating action button (FAB)
- Strategic CTA button placement throughout sections
- Contact form with field validation
- Direct phone call linking

## File Structure

```
pag-web-dip/
├── css/
│   ├── styles.css              # Core application styles
│   └── modal_styles.css        # Modal-specific styles
├── js/
│   ├── carousel.js             # HeroCarousel class implementation
│   ├── projects.js             # ProjectsManager class implementation
│   └── script.js               # Global utilities and initializations
├── images/
│   └── [project-images]        # Image assets directory
├── index.html                  # Main HTML document
├── manifest.json               # PWA manifest configuration
├── robots.txt                  # Search engine crawler directives
└── README.md                   # Project documentation
```

### Code Organization

#### CSS Architecture
- **styles.css**: CSS variables, layout systems, component styles, responsive breakpoints
- **modal_styles.css**: Isolated modal component styles with animations

#### JavaScript Modules
- **carousel.js**: `HeroCarousel` class with carousel logic and event handlers
- **projects.js**: `ProjectsManager` class for project data management and modal control
- **script.js**: Theme management, navigation control, form handling, and global utilities

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup with ARIA attributes for accessibility
- **CSS3**: 
  - CSS Grid and Flexbox for layout systems
  - CSS Custom Properties for dynamic theming
  - CSS Animations and Transforms for interactions
- **JavaScript (ECMAScript 2015+)**:
  - Class-based object-oriented programming
  - Arrow functions and template literals
  - Promise-based asynchronous patterns
  - Event delegation patterns
- **Font Awesome 6**: Icon library integration

### Technical Implementation Details

#### Performance Optimizations
- **Lazy Loading**: Progressive image loading with `loading="lazy"` attribute
- **Event Optimization**: Passive event listeners for scroll performance
- **CSS Optimization**: Transform-based animations for GPU acceleration
- **Debouncing**: Throttled event handlers for scroll and resize events
- **Code Splitting**: Modular JavaScript file organization

#### SEO Implementation
- Semantic HTML5 structure
- Meta tag optimization (title, description, Open Graph)
- Structured data markup ready
- robots.txt configuration
- PWA manifest for enhanced search presence
- Alt text implementation for images

#### Accessibility Features
- ARIA labels and roles
- Keyboard navigation support
- Focus state management
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader optimizations

## Browser Compatibility Matrix

| Browser | Version | Status |
|---------|---------|--------|
| Chrome/Edge | 90+ | Full Support |
| Firefox | 88+ | Full Support |
| Safari | 14+ | Full Support |
| Mobile Safari | iOS 12+ | Full Support |
| Chrome Mobile | Android 8+ | Full Support |

## Color Palette Specification

### Dark Theme (Default)
| Variable | Hex Code | Usage |
|----------|----------|-------|
| Primary | `#131a22` | Background, text containers |
| Secondary | `#1a2129` | Section backgrounds |
| Accent | `#3C4B9C` | Interactive elements, CTAs |
| Complementary | `#EAE1C3` | Highlights, emphasis |

### Light Theme
| Variable | Hex Code | Usage |
|----------|----------|-------|
| Primary | `#ffffff` | Background, cards |
| Secondary | `#f8fafc` | Alternate backgrounds |
| Accent | `#3C4B9C` | Interactive elements, CTAs |
| Complementary | `#131a22` | Text, headings |

## Installation & Deployment

### Local Development Setup

```bash
# Clone repository
git clone [repository-url]
cd pag-web-dip

# Method 1: Direct file access
open index.html

# Method 2: Python HTTP Server
python -m http.server 8000

# Method 3: Node.js server
npx serve

# Access application
http://localhost:8000
```

### Production Deployment
The application is deployment-ready for static hosting services:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any standard web server (Apache, Nginx)

## Maintenance & Extension Guide

### Adding New Projects

Edit `js/projects.js` and append to the `projectsData` array:

```javascript
{
    id: 4,
    title: "Project Title",
    shortDescription: "Brief description for card preview",
    longDescription: "Comprehensive project description for modal view",
    location: "Geographic location",
    date: "YYYY",
    area: "XXX m²",
    contractor: "Company Name",  // or null
    images: [
        "path/to/image1.jpg",
        "path/to/image2.jpg"
    ]
}
```

### Modifying Carousel Configuration

Edit `js/carousel.js` to adjust carousel parameters:

```javascript
// Slide interval (milliseconds)
this.autoplayDelay = 5000;

// Image sources
this.slides = [
    { url: 'path/to/image.jpg', alt: 'Description' }
];
```

### Theme Customization

Modify CSS custom properties in `css/styles.css`:

```css
:root {
    --primary-color: #custom-color;
    --accent-color: #custom-accent;
    /* Additional variables */
}
```

## Performance Metrics

The application implements various optimization strategies targeting:
- First Contentful Paint (FCP) < 1.5s
- Time to Interactive (TTI) < 3.0s
- Lighthouse Performance Score > 90
- Core Web Vitals compliance

## Future Development Roadmap

### Planned Features
- Content Management System (CMS) integration
- Blog platform for project updates
- Advanced project filtering system
- Budget estimation calculator
- Live chat implementation
- Internationalization (i18n) - Spanish/English
- Google Maps API integration
- Online appointment scheduling system

### Potential Technical Improvements
- Service Worker implementation for offline functionality
- Build process integration (Webpack/Vite)
- TypeScript migration for type safety
- Unit testing suite (Jest/Vitest)
- E2E testing implementation (Cypress/Playwright)
- CI/CD pipeline configuration

## Client Information

**P&R Arquitectos S.R.L.**

| Attribute | Value |
|-----------|-------|
| Tax ID (RUC) | 20511083967 |
| Established | 2005 |
| Experience | 20+ years |
| Address | Jr. Jesús Morales Nº 536 Zona E, San Juan de Miraflores, Lima |
| Phone | (01) 276**** |
| WhatsApp | +51 998 845 602 |
| Email | dip_arquitecto_@hotmail.com |

**Certifications:**
- SUNAT Good Taxpayer (Buen Contribuyente) - 2022
- National Provider Registry (RNP) - Active
- REMYPE Accredited Micro-Enterprise

## License

This project is proprietary software developed exclusively for P&R Arquitectos S.R.L.  
Copyright (c) 2025 P&R Arquitectos S.R.L. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software,
via any medium, is strictly prohibited without explicit written permission.

---

**Development Credits**  
Cesar Aaron Perales Rosales | Computer Scientist  
December 2025

**Version History**
- v1.0.0 (December 2025) - Initial release with core functionality

