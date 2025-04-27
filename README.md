# Maternity Care Landing Page

Este proyecto es un sitio web moderno para servicios de cuidado materno, diseñado para proporcionar información sobre servicios de acompañamiento durante el embarazo, parto y postparto.

## Características Técnicas

### Tecnologías Utilizadas

- **Framework**: Next.js 13.5.4 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Fuentes**: Sour Gummy (para títulos) e Inter (para contenido) de Google Fonts

### Estructura del Proyecto

\`\`\`
maternity-care-landing/
├── app/                    # Directorio principal de Next.js App Router
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── services/           # Página de servicios
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes de UI de shadcn
│   └── landing/            # Componentes específicos de la landing
│       ├── hero.tsx        # Sección de hero
│       ├── services.tsx    # Sección de servicios
│       ├── about.tsx       # Sección sobre mí
│       ├── testimonials.tsx # Sección de testimonios
│       ├── faq.tsx         # Sección de preguntas frecuentes
│       ├── contact.tsx     # Sección de contacto
│       ├── footer.tsx      # Pie de página
│       ├── navigation.tsx  # Menú de navegación
│       ├── whatsapp-button.tsx # Botón flotante de WhatsApp
│       └── scroll-to-top.tsx # Botón para volver arriba
├── public/                 # Archivos estáticos
└── ...
\`\`\`

### Características de Rendimiento

- **Optimización de Imágenes**: Uso del componente `Image` de Next.js para optimización automática
- **Animaciones Eficientes**: Uso de Framer Motion con técnicas de optimización
- **Componentes del Lado del Cliente**: Uso de `'use client'` para componentes interactivos
- **Lazy Loading**: Carga diferida de componentes e imágenes

## Guía de Estilo

### Colores

La paleta de colores se centra en tonos cálidos y acogedores, con énfasis en el naranja como color principal:

- **Primario**: Naranja (Tailwind orange-500)
- **Secundario**: Blanco (#ffffff)
- **Fondo**: Blanco/Gris muy claro (#f9fafb)
- **Texto**: Negro/Gris oscuro (#111827, #374151)
- **Acentos**: Variaciones de naranja claro (#fdeee4, #fef8f4)

### Tipografía

- **Fuente para Títulos**: Sour Gummy (sans-serif) - Actualizado
- **Fuente para Contenido**: Inter (sans-serif)
- **Tamaños de Fuente**:
  - Títulos principales: 4rem/5rem (64px/80px)
  - Subtítulos: 2rem/3rem (32px/48px)
  - Texto normal: 1rem/1.125rem (16px/18px)
  - Texto pequeño: 0.875rem (14px)
- **Pesos de Fuente**:
  - Regular: 400
  - Medio: 500
  - Semi-negrita: 600

### Espaciado

- **Sistema de Espaciado**: Basado en múltiplos de 4px
- **Espaciado Común**:
  - xs: 0.25rem (4px)
  - sm: 0.5rem (8px)
  - md: 1rem (16px)
  - lg: 1.5rem (24px)
  - xl: 2rem (32px)
  - 2xl: 3rem (48px)
  - 3xl: 4rem (64px)

### Bordes y Sombras

- **Radios de Borde**:
  - Pequeño: 0.25rem (4px)
  - Medio: 0.5rem (8px)
  - Grande: 1rem (16px)
  - Extra grande: 1.5rem (24px)
  - Circular: 9999px
- **Sombras**:
  - Ligera: 0 1px 2px rgba(0, 0, 0, 0.05)
  - Media: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  - Grande: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

### Componentes UI

- **Botones**:
  - Primario: Fondo naranja, texto blanco, bordes redondeados
  - Secundario: Borde naranja, texto naranja, fondo transparente
  - Tamaños: sm, md, lg
- **Tarjetas**:
  - Fondo blanco
  - Sombra ligera
  - Bordes redondeados
- **Formularios**:
  - Campos con bordes redondeados
  - Estados de foco con bordes naranjas
  - Etiquetas claras y accesibles

### Animaciones

- **Transiciones**: Suaves y naturales (0.3s - 0.5s)
- **Efectos Hover**: Sutiles cambios de escala y color
- **Animaciones de Página**: Entradas suaves y escalonadas
- **Parallax**: Efectos sutiles de parallax en algunas secciones

## Responsive Design

El sitio está diseñado para ser completamente responsive, con puntos de quiebre en:

- **Móvil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Desktop Grande**: > 1280px

## Accesibilidad

- **Contraste de Color**: Cumple con WCAG 2.1 AA
- **Navegación por Teclado**: Todos los elementos interactivos son accesibles por teclado
- **Textos Alternativos**: Todas las imágenes tienen textos alternativos descriptivos
- **Estructura Semántica**: Uso apropiado de elementos HTML semánticos
- **ARIA**: Atributos ARIA donde son necesarios

## Cambios Recientes

- **Actualización de tipografía**: Sour Gummy para títulos y mantenimiento de Inter para el contenido, usando Google Fonts.
- **Actualización del color principal**: Cambio del color naranja principal a #fd7c51.
- **Mejora del logo**: Implementación de un SVG escalable que se adapta al tamaño del texto adyacente.
- **Mejora de la coherencia visual**: Aplicación consistente de fuentes y colores a través de todo el sitio.
- **Mejora del menú móvil**: Rediseño completo del menú hamburguesa para dispositivos móviles, añadiendo animaciones y elementos decorativos para una experiencia más atractiva.
- **Optimización de la sección "Sobre Mí"**: Mejora del diseño responsive para dispositivos móviles, ajustando el tamaño y posición de la imagen.
- **Mejora de testimoniales**: Rediseño completo de la sección de testimonios para dispositivos móviles, implementando un diseño de tarjeta única con navegación optimizada para pantallas táctiles.

## Instalación y Ejecución

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar en desarrollo: `npm run dev`
4. Construir para producción: `npm run build`
5. Iniciar en producción: `npm start`

## Despliegue

El proyecto está configurado para ser desplegado en Vercel, pero puede ser desplegado en cualquier plataforma que soporte Next.js.
