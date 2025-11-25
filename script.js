// ==========================================
// PALLETS PREMIUM - Landing Page Script
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // CONFIGURACIÓN DE BOTONES DE WHATSAPP
    // ==========================================
    function setupWhatsAppButtons() {
        const config = window.CONFIG || {};
        const whatsappNumber = config.whatsappPrimary || '5215512345678';
        
        // CTA Hero
        const ctaHero = document.getElementById('ctaHero');
        if (ctaHero) {
            const mensaje = encodeURIComponent(config.mensajeHero || 'Hola! Quiero mi pallet hoy mismo');
            ctaHero.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaHero.target = '_blank';
            ctaHero.rel = 'noopener noreferrer';
        }
        
        // CTA Ofertas individuales
        const ctaOferta1 = document.getElementById('ctaOferta1');
        const ctaOferta2 = document.getElementById('ctaOferta2');
        const ctaOferta3 = document.getElementById('ctaOferta3');
        const ctaOferta4 = document.getElementById('ctaOferta4');
        const ctaOferta5 = document.getElementById('ctaOferta5');
        
        if (ctaOferta1) {
            const mensaje = encodeURIComponent('Hola Angy! Quiero el paquete de 100 piezas caballero ($23,500)');
            ctaOferta1.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaOferta1.target = '_blank';
            ctaOferta1.rel = 'noopener noreferrer';
        }
        
        if (ctaOferta2) {
            const mensaje = encodeURIComponent('Hola Angy! Quiero el paquete de 50 piezas dama ($10,000)');
            ctaOferta2.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaOferta2.target = '_blank';
            ctaOferta2.rel = 'noopener noreferrer';
        }
        
        if (ctaOferta3) {
            const mensaje = encodeURIComponent('Hola Angy! Quiero el paquete de 100 piezas dama ($19,500) ⭐');
            ctaOferta3.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaOferta3.target = '_blank';
            ctaOferta3.rel = 'noopener noreferrer';
        }
        
        if (ctaOferta4) {
            const mensaje = encodeURIComponent('Hola Angy! Quiero el paquete de 200 piezas dama ($36,000)');
            ctaOferta4.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaOferta4.target = '_blank';
            ctaOferta4.rel = 'noopener noreferrer';
        }

        if (ctaOferta5) {
            const mensaje = encodeURIComponent('Hola Angy! Quiero el paquete de 50 piezas caballero ($14,500)');
            ctaOferta5.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaOferta5.target = '_blank';
            ctaOferta5.rel = 'noopener noreferrer';
        }
        
        // CTA Cierre
        const ctaCierre = document.getElementById('ctaCierre');
        if (ctaCierre) {
            const mensaje = encodeURIComponent(config.mensajeCierre || 'Hola Angy! Quiero empezar a ganar con Pallets Premium');
            ctaCierre.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaCierre.target = '_blank';
            ctaCierre.rel = 'noopener noreferrer';
        }
        
        // CTA Floating
        const ctaFloating = document.getElementById('ctaFloating');
        if (ctaFloating) {
            const mensaje = encodeURIComponent(config.mensajeHero || 'Hola Angy! Quiero mi pallet hoy mismo');
            ctaFloating.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
            ctaFloating.target = '_blank';
            ctaFloating.rel = 'noopener noreferrer';
        }
        
        // Configurar todos los botones con clase .cta-whatsapp sin ID específico
        document.querySelectorAll('.cta-whatsapp').forEach(button => {
            if (!button.id) {
                const mensaje = encodeURIComponent(config.mensajeOferta || 'Hola! Me interesa Pallets Premium');
                button.href = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
                button.target = '_blank';
                button.rel = 'noopener noreferrer';
            }
        });
    }
    
    // Ejecutar configuración de WhatsApp
    setupWhatsAppButtons();
    
    // ==========================================
    // CONFIGURACIÓN DE IMÁGENES DESDE URLs
    // ==========================================
    function setupImages() {
        const config = window.CONFIG || {};
        
        // Logo principal en Hero
        const mainLogo = document.getElementById('mainLogo');
        if (mainLogo && config.logoUrl) {
            mainLogo.src = config.logoUrl;
            mainLogo.onerror = function() {
                console.error('Error cargando logo desde URL:', config.logoUrl);
                this.style.display = 'none';
            };
        }
        
        // Logo en header/navbar si existe
        const logoImg = document.querySelector('.logo');
        if (logoImg && config.logoUrl && !logoImg.id) {
            logoImg.src = config.logoUrl;
            logoImg.onerror = function() {
                console.error('Error cargando logo desde URL:', config.logoUrl);
                this.style.display = 'none';
            };
        }
        
        // Imagen de fondo Hero
        const heroBackground = document.querySelector('.hero-background-image');
        if (heroBackground && config.imagenFondoHero) {
            heroBackground.style.backgroundImage = `url('${config.imagenFondoHero}')`;
        }
        
        // Logo en footer
        const footerLogo = document.querySelector('.footer-logo-img');
        if (footerLogo && config.logoUrl) {
            footerLogo.src = config.logoUrl;
            footerLogo.onerror = function() {
                this.style.display = 'none';
            };
        }
        
        // Imágenes de productos en galería
        const galeriaItems = document.querySelectorAll('.galeria-item img');
        if (galeriaItems.length > 0 && config.producto1) {
            if (galeriaItems[0]) galeriaItems[0].src = config.producto1;
        }
        if (galeriaItems.length > 1 && config.producto2) {
            if (galeriaItems[1]) galeriaItems[1].src = config.producto2;
        }
    }
    
    // Ejecutar configuración de imágenes
    setupImages();
    
    
    // ==========================================
    // FLOATING CTA VISIBILITY
    // ==========================================
    const floatingCTA = document.querySelector('.floating-cta');
    const heroSection = document.querySelector('.hero');
    
    function handleFloatingCTA() {
        if (!floatingCTA || !heroSection) return;
        
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > heroBottom + 200) {
            floatingCTA.classList.add('visible');
        } else {
            floatingCTA.classList.remove('visible');
        }
    }
    
    // Ejecutar al cargar y al hacer scroll
    handleFloatingCTA();
    window.addEventListener('scroll', handleFloatingCTA);
    
    
    // ==========================================
    // SMOOTH SCROLL PARA ENLACES INTERNOS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 80px de offset para header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ==========================================
    // ANIMACIÓN DE APARICIÓN AL HACER SCROLL
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos con la clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
    
    
    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items (opcional - comentar para permitir múltiples abiertos)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle del item actual
            item.classList.toggle('active');
        });
    });
    
    
    // ==========================================
    // TRACKING DE CLICS EN CTAS (preparado para analytics)
    // ==========================================
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ctaText = this.textContent.trim();
            const ctaLocation = this.classList.contains('cta-floating') ? 'floating' : 'hero';
            
            // Aquí puedes integrar Google Analytics o Facebook Pixel
            console.log('CTA Click:', {
                text: ctaText,
                location: ctaLocation,
                timestamp: new Date().toISOString()
            });
            
            // Ejemplo para Google Analytics (descomentar cuando esté configurado)
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': ctaLocation,
                    'value': ctaText
                });
            }
            */
            
            // Ejemplo para Facebook Pixel (descomentar cuando esté configurado)
            /*
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead', {
                    content_name: ctaText,
                    content_category: ctaLocation
                });
            }
            */
        });
    });
    
    
    // ==========================================
    // PERFORMANCE: Lazy Loading de imágenes
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    
    // ==========================================
    // DETECCIÓN DE MOBILE PARA AJUSTES ESPECÍFICOS
    // ==========================================
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('is-mobile');
    }
    
    
    // ==========================================
    // PREVENCIÓN DE SPAM EN FORMULARIOS (preparado)
    // ==========================================
    let lastSubmitTime = 0;
    const submitCooldown = 3000; // 3 segundos
    
    window.validateFormSubmit = function() {
        const now = Date.now();
        if (now - lastSubmitTime < submitCooldown) {
            alert('Por favor espera un momento antes de enviar nuevamente.');
            return false;
        }
        lastSubmitTime = now;
        return true;
    };
    
    
    // ==========================================
    // DEBUGGING INFO (solo en desarrollo)
    // ==========================================
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🚀 Pallets Premium Landing Page cargada correctamente');
        console.log('📱 Dispositivo:', isMobile ? 'Mobile' : 'Desktop');
        console.log('🖥️ Viewport:', window.innerWidth + 'x' + window.innerHeight);
    }
    
});


// ==========================================
// UTILIDADES GLOBALES
// ==========================================

/**
 * Función para formatear números a moneda mexicana
 */
window.formatCurrency = function(amount) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(amount);
};

/**
 * Función para compartir en redes sociales
 */
window.shareOnSocial = function(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Descubre Pallets Premium - Mercancía de calidad desde Estados Unidos');
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        whatsapp: `https://wa.me/?text=${text}%20${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
};

