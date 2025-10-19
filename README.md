# GymSaaS - Sistema de Gestión para Gimnasios# SaaS GyM - Sistema de Gestión para Gimnasios



Una landing page moderna y completamente responsive para una plataforma SaaS de gestión de gimnasios, construida con Next.js 15, React 19, TypeScript y Tailwind CSS.## 🏋️‍♂️ Descripción



## 🚀 CaracterísticasSaaS GyM es una plataforma completa para la gestión de gimnasios y centros de fitness. Desarrollada con tecnologías modernas para ofrecer una experiencia de usuario excepcional y funcionalidades robustas.



- **Diseño Responsive**: Optimizado para móvil, tablet y desktop## 🚀 Tecnologías

- **Arquitectura Modular**: Componentes reutilizables y bien organizados

- **Formulario de Contacto**: Con validaciones usando Formik + Yup y envío directo por email- **Frontend**: Next.js 15, React 18, TypeScript

- **Animaciones Fluidas**: Powered by Framer Motion- **Estilos**: Tailwind CSS v4

- **Datos Centralizados**: Sistema de configuración centralizada para fácil mantenimiento- **Animaciones**: Framer Motion

- **TypeScript**: Tipado completo para mejor experiencia de desarrollo- **Iconos**: Heroicons, Lucide React



## 📁 Estructura del Proyecto## 📱 Características



```- **Landing Page Moderna**: Diseño atractivo y responsivo

├── components/- **Gestión de Miembros**: Sistema completo de administración

│   ├── layout/- **Planes y Precios**: Configuración flexible de membresías

│   │   ├── Header.tsx       # Navegación principal- **Dashboard Intuitivo**: Panel de control fácil de usar

│   │   └── Footer.tsx       # Footer simplificado- **Responsive Design**: Optimizado para todos los dispositivos

│   └── sections/

│       ├── Hero.tsx         # Sección hero con CTA## 🛠️ Instalación

│       ├── Features.tsx     # Características del producto

│       ├── Pricing.tsx      # Planes de precios```bash

│       └── Contact.tsx      # Formulario de contacto# Clonar el repositorio

├── lib/git clone https://github.com/TomiRonco/SaaS-GyM.git

│   └── data.ts              # 🎯 Datos centralizados

├── app/# Instalar dependencias

│   ├── globals.css          # Estilos globalesnpm install

│   ├── layout.tsx           # Layout principal

│   └── page.tsx             # Página de inicio# Ejecutar en modo desarrollo

└── EMAIL_SETUP.md           # Guía de configuración EmailJSnpm run dev

```

# Compilar para producción

## 🎯 Componente de Datos Centralizadosnpm run build

```

El archivo `/lib/data.ts` contiene toda la información de la empresa y configuración del sitio:

## 🌐 Demo

### Información de Contacto

```typescriptVisita [localhost:3000](http://localhost:3000) después de ejecutar el proyecto localmente.

contact: {

  email: "roncoronit@gmail.com",## 📄 Licencia

  phone: "+54 341 664 8588",

  phoneDisplay: "341 664 8588",MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

  address: {

    country: "Argentina",## 👥 Contribuir

    city: "Rosario", 

    full: "Rosario, Argentina"Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

  }

}## 📧 Contacto

```

- **Autor**: Tomás Roncoroni

### Configuración de EmailJS- **GitHub**: [@TomiRonco](https://github.com/TomiRonco)

```typescript- **Proyecto**: [SaaS-GyM](https://github.com/TomiRonco/SaaS-GyM)
emailjs: {
  serviceId: "YOUR_SERVICE_ID",    // Configurar en EmailJS
  templateId: "YOUR_TEMPLATE_ID",  // Configurar en EmailJS
  publicKey: "YOUR_PUBLIC_KEY",    // Configurar en EmailJS
  toEmail: "roncoronit@gmail.com"  // Email destino
}
```

### Características del Producto
```typescript
features: [
  {
    id: "members",
    name: "Gestión de Miembros",
    description: "...",
    icon: "UserGroupIcon"
  },
  // ... más características
]
```

### Planes de Precios
```typescript
pricing: {
  currency: "USD",
  plans: [
    {
      id: "basic",
      name: "Básico", 
      price: 29,
      // ... configuración completa
    }
  ]
}
```

## 🔧 Configuración

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar EmailJS
1. Lee `EMAIL_SETUP.md` para instrucciones detalladas
2. Actualiza las credenciales en `/lib/data.ts`:
   ```typescript
   emailjs: {
     serviceId: "tu_service_id",
     templateId: "tu_template_id", 
     publicKey: "tu_public_key",
     toEmail: "roncoronit@gmail.com"
   }
   ```

### 3. Personalizar Información
Edita `/lib/data.ts` para actualizar:
- Información de contacto
- Textos y mensajes
- Características del producto
- Planes de precios
- Navegación del sitio

### 4. Ejecutar en Desarrollo
```bash
npm run dev
```

## 📱 Secciones de la Landing Page

1. **Header**: Navegación fija con menú responsive
2. **Hero**: Título impactante con demo visual y CTAs
3. **Features**: 6 características principales con animaciones
4. **Pricing**: 3 planes con comparación y alineación perfecta
5. **Contact**: Formulario con validaciones y envío por email
6. **Footer**: Enlaces esenciales e información de contacto

## ✨ Ventajas del Sistema de Datos Centralizados

- **Mantenimiento Fácil**: Cambia un dato y se actualiza en todo el sitio
- **Consistencia**: Misma información en todos los componentes
- **Escalabilidad**: Fácil agregar nuevos datos o secciones
- **Tipado**: TypeScript asegura que uses los datos correctos
- **Reutilización**: Usa los mismos datos en diferentes componentes

## 🎨 Personalización de Estilos

Los colores principales se configuran en `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... más tonos
    600: '#2563eb',
  },
  secondary: {
    // ... configuración similar
  }
}
```

## 📧 Configuración del Formulario

El formulario usa **Formik** para manejo de estado y **Yup** para validaciones:
- Validación en tiempo real
- Mensajes de error personalizados
- Estados de loading/éxito/error
- Envío directo por EmailJS

## 🚀 Despliegue

```bash
npm run build
npm start
```

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.

---

**Contacto**: roncoronit@gmail.com | +54 341 664 8588