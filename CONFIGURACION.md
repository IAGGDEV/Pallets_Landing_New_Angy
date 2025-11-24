# 🔧 CONFIGURACIÓN DE LA LANDING PAGE - PALLETS PREMIUM

## 📱 **1. CONFIGURAR NÚMEROS DE WHATSAPP**

Abre el archivo **`index.html`** y busca esta sección (líneas 12-25):

```html
<script>
    window.CONFIG = {
        // Números de WhatsApp
        whatsappPrimary: '5215512345678', // ⚠️ CAMBIAR POR TU NÚMERO
        whatsappSecondary: '5215587654321', // CAMBIAR POR SEGUNDO NÚMERO (OPCIONAL)
        
        // Mensajes predeterminados
        mensajeHero: 'Hola! Quiero mi pallet hoy mismo 🔥',
        mensajeOferta: 'Hola! Me interesa conocer las ofertas de pallets',
        mensajeCierre: 'Hola! Quiero empezar a ganar con Pallets Premium',
        
        // Imagen de fondo del Hero
        imagenFondoHero: 'hero-bg.jpg' // Cambiar ruta según tu imagen
    };
</script>
```

### **📞 Formato del número de WhatsApp:**

```
Código país + Número sin espacios ni guiones
```

**Ejemplos:**
- México: `52` + `1` + `5512345678` = `5215512345678`
- México: `52` + `1` + `3312345678` = `5213312345678`

---

## 🖼️ **2. CAMBIAR IMAGEN DE FONDO DEL HERO**

### **Opción A: Usar archivo local**

1. Guarda tu imagen en el mismo directorio que `index.html`
2. Nómbrala: `hero-bg.jpg` (o cualquier nombre)
3. Actualiza la configuración:

```javascript
imagenFondoHero: 'hero-bg.jpg'  // Si está en el mismo directorio
imagenFondoHero: 'images/hero-bg.jpg'  // Si está en carpeta images
```

### **Opción B: Usar URL externa**

```javascript
imagenFondoHero: 'https://tu-sitio.com/ruta/imagen.jpg'
```

### **Opción C: Sin imagen de fondo (solo degradado)**

Abre `styles.css` y busca `.hero-background-image` (línea ~190):

```css
.hero-background-image {
    display: none; /* Ocultar la imagen */
}
```

---

## ✏️ **3. PERSONALIZAR MENSAJES DE WHATSAPP**

Los mensajes se envían automáticamente cuando el cliente hace clic en los botones.

### **Cambiar mensajes:**

En `index.html` (configuración):

```javascript
mensajeHero: 'Tu mensaje personalizado aquí',
mensajeOferta: 'Mensaje cuando piden oferta',
mensajeCierre: 'Mensaje del cierre final',
```

### **Mensajes específicos por paquete:**

Los mensajes de ofertas específicas (100 piezas, 50 piezas, etc.) están en `script.js` líneas 38-68:

```javascript
// Ejemplo para paquete 1
const mensaje = encodeURIComponent('Hola! Quiero el paquete de 100 piezas caballero ($23,500)');
```

**Puedes cambiarlos directamente ahí.**

---

## 🎨 **4. CAMBIAR COLORES DE LA MARCA**

Abre `styles.css` y busca la sección `:root` (líneas 9-25):

```css
:root {
    /* Colores basados en el logo */
    --color-primary: #F5A623;        /* Dorado - CAMBIAR AQUÍ */
    --color-primary-dark: #D68910;   /* Dorado oscuro */
    --color-secondary: #2C2C2C;      /* Negro */
    --color-accent: #FFB84D;         /* Dorado claro */
    /* ... más colores */
}
```

**Cambia los valores hexadecimales según tu paleta:**

```css
--color-primary: #FF0000;  /* Ejemplo: Rojo */
--color-secondary: #000000; /* Negro */
```

Los colores se aplicarán automáticamente en toda la página.

---

## 💰 **5. ACTUALIZAR PRECIOS Y PAQUETES**

Abre `index.html` y busca la **Sección 5: Oferta** (líneas ~180-290):

### **Cambiar precios:**

```html
<div class="pricing-price">$23,500</div>  <!-- CAMBIAR PRECIO AQUÍ -->
<div class="pricing-shipping">con envío gratis</div>  <!-- O "+ envío" -->
```

### **Cambiar cantidad de piezas:**

```html
<div class="pricing-pieces">100 piezas</div>  <!-- CAMBIAR CANTIDAD -->
<div class="pricing-type">Caballero</div>     <!-- CAMBIAR TIPO -->
```

### **Agregar o quitar paquetes:**

Copia/pega un `<div class="pricing-card">...</div>` completo para agregar más paquetes.

Para destacar un paquete como "MÁS POPULAR":

```html
<div class="pricing-card pricing-featured animate-on-scroll">
    <div class="pricing-badge">MÁS POPULAR</div>
    <!-- ... resto del contenido -->
</div>
```

---

## ❓ **6. EDITAR PREGUNTAS FRECUENTES (FAQ)**

Abre `index.html` y busca la **Sección 7: FAQ** (líneas ~320-390):

### **Cambiar una pregunta:**

```html
<div class="faq-item animate-on-scroll">
    <div class="faq-question">
        <span class="faq-number">1.</span>
        <span>¿Tu pregunta aquí?</span>  <!-- CAMBIAR PREGUNTA -->
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
        <p>Tu respuesta aquí</p>  <!-- CAMBIAR RESPUESTA -->
    </div>
</div>
```

### **Agregar nueva pregunta:**

Copia un bloque `<div class="faq-item">...</div>` completo y pégalo.

---

## 🔗 **7. AGREGAR REDES SOCIALES (OPCIONAL)**

Abre `index.html` y busca el **Footer** (línea ~400).

Agrega antes del cierre `</div class="footer-content">`:

```html
<div class="footer-social">
    <a href="https://facebook.com/tu-pagina" target="_blank">
        <img src="facebook-icon.svg" alt="Facebook">
    </a>
    <a href="https://instagram.com/tu-perfil" target="_blank">
        <img src="instagram-icon.svg" alt="Instagram">
    </a>
</div>
```

Luego agrega estilos en `styles.css`:

```css
.footer-social {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
}

.footer-social img {
    width: 32px;
    height: 32px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.footer-social img:hover {
    opacity: 1;
}
```

---

## 📊 **8. AGREGAR GOOGLE ANALYTICS (OPCIONAL)**

Abre `index.html` y agrega antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID-AQUI"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'TU-ID-AQUI');
</script>
```

Reemplaza `TU-ID-AQUI` con tu ID de Google Analytics (formato: `G-XXXXXXXXXX`).

---

## 🎭 **9. CAMBIAR TEXTOS PRINCIPALES**

Todos los textos están en `index.html`. Las secciones principales:

- **Hero (Líneas 35-85):** Headline, subtítulo, tagline
- **Problema-Solución (Líneas 90-110):** Descripción del problema
- **Beneficios (Líneas 115-165):** Títulos y descripciones
- **Características (Líneas 170-200):** Lista de características
- **Oferta (Líneas 205-300):** Precios y bonos
- **FAQ (Líneas 320-390):** Preguntas y respuestas
- **Cierre (Líneas 395-410):** Mensaje final

**Cambia el contenido entre las etiquetas HTML manteniendo la estructura.**

---

## 🚀 **10. PUBLICAR LA LANDING PAGE**

### **Opción A: Hosting gratuito (Vercel - RECOMENDADO)**

1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta gratuita
3. Arrastra la carpeta del proyecto
4. Tu landing estará en línea en segundos
5. Dominio gratuito: `tu-proyecto.vercel.app`

### **Opción B: Netlify**

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Dominio gratuito: `tu-proyecto.netlify.app`

### **Opción C: GitHub Pages**

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en configuración
4. Dominio gratuito: `tu-usuario.github.io/tu-repo`

---

## 🛠️ **11. SOLUCIÓN DE PROBLEMAS COMUNES**

### **Problema: Los botones de WhatsApp no funcionan**

✅ **Solución:** Verifica que el número esté en formato correcto:
```javascript
whatsappPrimary: '5215512345678'  // Código país + número completo
```

### **Problema: La imagen de fondo no aparece**

✅ **Solución:** 
1. Verifica que el archivo exista: `hero-bg.jpg`
2. Verifica la ruta en la configuración
3. Usa ruta absoluta si no funciona: `https://...`

### **Problema: Los colores no cambian**

✅ **Solución:**
1. Limpia la caché del navegador: `Ctrl + Shift + R`
2. Verifica que cambiaste `:root` en `styles.css`

### **Problema: El FAQ no se abre/cierra**

✅ **Solución:**
1. Verifica que `script.js` esté cargando correctamente
2. Abre la consola del navegador (F12) y revisa errores

---

## 📋 **CHECKLIST ANTES DE PUBLICAR**

- [ ] Cambié los números de WhatsApp
- [ ] Actualicé los precios de los paquetes
- [ ] Cambié la imagen de fondo (o la dejé sin imagen)
- [ ] Guardé el logo como `logo.png`
- [ ] Probé todos los botones de WhatsApp
- [ ] Revisé que todos los textos sean correctos
- [ ] Probé en móvil y desktop
- [ ] El FAQ abre y cierra correctamente
- [ ] Los colores representan mi marca

---

## 💡 **TIPS PRO**

1. **Optimiza las imágenes:** Usa herramientas como [TinyPNG](https://tinypng.com) para reducir el tamaño
2. **Prueba en móvil:** La mayoría del tráfico vendrá de teléfonos
3. **Velocidad:** Mantén las imágenes bajo 500KB cada una
4. **Backup:** Guarda una copia del proyecto antes de hacer cambios grandes
5. **Dominio personalizado:** Considera comprar un dominio (.com.mx) para más profesionalismo

---

## 📞 **¿NECESITAS AYUDA?**

Si algo no funciona o necesitas personalización adicional, revisa:

- `RESUMEN_MEJORAS_LOGO.txt` - Info sobre el logo
- `OPCIONES_LOGO.md` - Estilos del logo
- `README.md` - Documentación técnica
- `test-logo.html` - Prueba de estilos del logo

---

**¡Tu landing page está lista para generar ventas!** 🚀💰

