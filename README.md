# Iglesia Bautista Hebrón - Sitio Web Oficial

![Logo IBH](src/assets/img/logo.png)

> "Somos una gran familia de Dios"

## 📋 Descripción del Proyecto

Sitio web oficial de la Iglesia Bautista Hebrón ubicada en Tegucigalpa, Honduras. Este proyecto es una aplicación web moderna desarrollada con React y TypeScript que presenta información sobre la iglesia, sus doctrinas, ministerios, predicaciones y formas de contacto.

## 🎯 Características Principales

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Fluidas**: Implementación de Framer Motion para transiciones y efectos parallax
- **Navegación Intuitiva**: Sistema de rutas con React Router para una experiencia de usuario fluida
- **Componentes Reutilizables**: Arquitectura basada en componentes con UI components de shadcn/ui
- **Integración Multimedia**: Reproducción de predicaciones desde YouTube
- **Formulario de Contacto**: Interfaz para comunicación directa con la iglesia
- **Integración con Redes Sociales**: Enlaces a Facebook, Instagram, YouTube y WhatsApp

## 🛠️ Tecnologías Utilizadas

### Core
- **React 18**: Biblioteca principal para la construcción de la interfaz
- **TypeScript**: Tipado estático para mayor robustez del código
- **Vite**: Herramienta de build rápida y moderna

### Routing
- **React Router DOM**: Manejo de navegación y rutas de la aplicación

### Estilos y UI
- **Tailwind CSS**: Framework de CSS utility-first
- **shadcn/ui**: Componentes de UI accesibles y personalizables
- **Radix UI**: Primitivos de UI sin estilos para componentes complejos
- **tw-animate-css**: Animaciones CSS integradas con Tailwind

### Animaciones
- **Framer Motion**: Biblioteca de animaciones para React
- **Embla Carousel**: Carrusel de imágenes ligero y personalizable

### Iconos
- **React Icons**: Colección de iconos (Font Awesome incluido)
- **Lucide React**: Iconos modernos y ligeros

### Utilidades
- **class-variance-authority**: Gestión de variantes de clases CSS
- **clsx**: Utilidad para concatenar clases condicionales
- **tailwind-merge**: Fusión inteligente de clases de Tailwind

## 📁 Estructura del Proyecto

```
iglesia-bautista-hebron/
├── src/
│   ├── assets/
│   │   ├── icon/          # Iconos y logos
│   │   └── img/           # Imágenes del sitio
│   ├── components/
│   │   └── ui/            # Componentes reutilizables de UI
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── item.tsx
│   │       ├── navigation-menu.tsx
│   │       └── separator.tsx
│   ├── lib/
│   │   └── utils.ts       # Funciones utilitarias
│   ├── pages/
│   │   ├── main/          # Páginas principales
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── main.tsx
│   │   │   ├── principal.tsx
│   │   │   ├── mantenimiento.tsx
│   │   │   └── notfound.tsx
│   │   ├── doctrina/
│   │   │   └── doctrina.tsx
│   │   ├── ministerios/
│   │   │   └── ministerio.tsx
│   │   ├── predicaciones/
│   │   │   └── predicacion.tsx
│   │   └── contacto/
│   │       └── contacto.tsx
│   ├── rooters/
│   │   └── rooter.tsx     # Configuración de rutas
│   ├── App.css            # Estilos globales
│   ├── index.css          # Estilos base
│   ├── main.tsx           # Punto de entrada
│   └── root.tsx           # Componente raíz
├── public/                # Archivos públicos estáticos
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── vite.config.ts        # Configuración de Vite
└── tailwind.config.js    # Configuración de Tailwind
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd iglesia-bautista-hebron
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Construir para producción**
```bash
npm run build
# o
yarn build
```

5. **Previsualizar build de producción**
```bash
npm run preview
# o
yarn preview
```

## 📄 Páginas del Sitio

### 1. **Inicio (Home)**
- Hero section con imagen parallax
- Horarios de servicios (Martes y Domingo)
- Ubicación con mapa de Google Maps integrado
- Sección de misión con 4 pilares fundamentales:
  - Discipulado
  - Evangelismo
  - Familias Consagradas
  - Misiones

### 2. **Nuestra Doctrina**
- Hero section con efecto parallax
- Timeline vertical con 6 principios doctrinales:
  - Iglesia Cristocéntrica
  - Lectura Bíblica
  - Oración
  - Teología
  - Música
  - Vida Espiritual
- Diseño alternado con imágenes ilustrativas

### 3. **Ministerios**
- Actualmente en mantenimiento
- Página temporal con animación parallax

### 4. **Predicaciones**
- Video principal destacado con autoplay
- Galería de predicaciones anteriores
- Integración con YouTube
- Grid responsivo de videos

### 5. **Contacto**
- Formulario de contacto funcional
- Enlaces a redes sociales:
  - WhatsApp
  - Facebook
  - YouTube
  - Instagram
- Diseño con parallax en background

## 🎨 Sistema de Diseño

### Paleta de Colores

#### Modo Claro
- **Background**: `oklch(1 0 0)` - Blanco puro
- **Primary**: `oklch(0.208 0.042 265.755)` - Azul oscuro
- **Secondary**: `oklch(0.968 0.007 247.896)` - Gris muy claro
- **Accent**: `oklch(0.968 0.007 247.896)` - Gris claro

#### Modo Oscuro
- **Background**: `oklch(0.129 0.042 264.695)` - Azul muy oscuro
- **Primary**: `oklch(0.929 0.013 255.508)` - Gris muy claro
- **Card**: `oklch(0.208 0.042 265.755)` - Azul oscuro

### Tipografía
- **Font Family**: System UI, Avenir, Helvetica, Arial, sans-serif
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Espaciado
- Sistema de espaciado basado en Tailwind CSS
- Radius base: `0.625rem` (10px)

## 🔧 Componentes Reutilizables

### Accordion
Componente expandible/colapsable para mostrar contenido de forma organizada.

### Button
Botón con múltiples variantes:
- `default`: Estilo primario
- `destructive`: Para acciones destructivas
- `outline`: Con borde
- `secondary`: Estilo secundario
- `ghost`: Sin fondo
- `link`: Estilo de enlace

### Card
Tarjeta contenedora con sub-componentes:
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`
- `CardAction`

### Carousel
Carrusel de contenido con controles de navegación.

### Item
Sistema de listas con componentes:
- `ItemGroup`
- `ItemMedia`
- `ItemContent`
- `ItemTitle`
- `ItemDescription`
- `ItemActions`

### Navigation Menu
Menú de navegación con dropdown y efectos de transición.

## 🌐 Rutas de la Aplicación

```typescript
/               → Redirige a /home
/home          → Página principal
/doctrina      → Nuestra doctrina
/ministerios   → Ministerios (en mantenimiento)
/predicacion   → Predicaciones
/contacto      → Contacto
/*             → Página 404
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Breakpoints de Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎭 Animaciones

### Efectos Parallax
Implementados en múltiples secciones usando Framer Motion:
- Hero sections con imágenes de fondo
- Movimiento basado en scroll
- Transformaciones de escala y opacidad

### Transiciones
- Fade in/out
- Slide in desde diferentes direcciones
- Scale animations
- Stagger animations en listas

## 📞 Información de Contacto

**Iglesia Bautista Hebrón**
- **Dirección**: Cerro grande zona 5, carretera a Olancho, frente a gasolinera Shell, Tegucigalpa, Honduras
- **WhatsApp**: +504 9231-6056
- **Facebook**: [Iglesia Bautista Hebrón](https://www.facebook.com/profile.php?id=100081298615573)
- **YouTube**: [@iglesiabautistahebron1905](https://www.youtube.com/@iglesiabautistahebron1905)

### Horarios de Servicio
- **Martes**: Culto de Oración - 7:00 PM
- **Domingo**: Servicio General - 10:00 AM

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es propiedad de la Iglesia Bautista Hebrón. Todos los derechos reservados © 2026.

## 👥 Equipo de Desarrollo

Desarrollado con ❤️ para la Iglesia Bautista Hebrón.

## 🐛 Reporte de Errores

Si encuentras algún error o tienes sugerencias, por favor abre un issue en el repositorio o contáctanos a través de nuestras redes sociales.

## 📚 Recursos Adicionales

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Nota**: Este proyecto utiliza HashRouter para compatibilidad con hosting estático. Las rutas incluyen `#` en la URL.