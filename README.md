# Ipora Landing

Landing page profesional para **Ipora**, un estudio boutique de software a medida basado en Buenos Aires.

![Ipora Landing](https://img.shields.io/badge/Ipora-Software%20Boutique-orange?style=for-the-badge&color=e05c2a)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Sobre el Proyecto

Esta landing page comunica autoridad técnica, muestra un mockup interactivo del panel de cliente, y cierra con un formulario de contacto. Diseñada con enfoque **mobile-first** para brindar la mejor experiencia en cualquier dispositivo.

### Características

- ✅ **Diseño Mobile-First** - Optimizado para celulares con touch targets grandes y navegación fluida
- ✅ **Bilingüe (ES/EN)** - Cambio de idioma persistente en localStorage
- ✅ **Tipografía Premium** - Syne (display) + Lato (body) via next/font
- ✅ **Mockup Interactivo** - Preview animado del sistema en el Hero
- ✅ **Menú Hamburguesa** - Drawer lateral con animaciones suaves
- ✅ **Formulario Funcional** - Con estado de éxito y validación
- ✅ **Login Magic Link** - Flujo completo de autenticación visual
- ✅ **Scroll Suave** - Navegación anclada entre secciones
- ✅ **Paleta Navy** - Colores profesionales: #1a1a2e + #e05c2a

## 🚀 Tecnologías

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Fuentes:** [Google Fonts](https://fonts.google.com/) (Syne, Lato) via next/font
- **Íconos:** SVG inline optimizados

## 📁 Estructura

```
ipora-landing/
├── app/
│   ├── layout.tsx          # Root layout con fuentes
│   ├── page.tsx            # Landing page
│   ├── login/page.tsx      # Login magic link
│   └── globals.css         # Design tokens + Tailwind
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero + navegación
│   │   ├── services.tsx    # Tres principios
│   │   ├── process.tsx     # Cómo trabajamos
│   │   ├── contact.tsx     # Formulario de contacto
│   │   └── footer.tsx      # Footer
│   ├── app-mockup.tsx      # Mockup del sistema
│   └── hamburger-menu.tsx  # Drawer lateral
├── lib/
│   └── copy.ts             # Contenido ES/EN
└── public/                 # Assets estáticos
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/ipora-landing.git
cd ipora-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en http://localhost:3000
```

## 📦 Build para Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 Design Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#1a1a2e` | Navy - títulos, botones |
| `highlight` | `#e05c2a` | Naranja - CTAs, acentos |
| `bg` | `#ffffff` | Fondo principal |
| `bg2` | `#f5f5f0` | Secciones alternadas |
| `text` | `#1a1a1a` | Texto principal |
| `text-muted` | `#777770` | Labels, captions |

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter ESLint

## 👤 Autor

**Ipora** - Software Boutique · Buenos Aires

---

© 2026 Ipora. Todos los derechos reservados.
