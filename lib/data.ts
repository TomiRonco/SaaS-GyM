// Datos centralizados de la empresa
export const companyData = {
  // Información básica de la empresa
  name: "GymSaaS",
  tagline: "Sistema de Gestión para Gimnasios",
  description: "La plataforma de gestión más completa para gimnasios modernos. Automatiza tu negocio y enfócate en lo que realmente importa: tus miembros.",
  
  // Información de contacto
  contact: {
    email: "roncoronit@gmail.com",
    phone: "+54 341 664 8588", // Formato internacional para Argentina
    phoneDisplay: "341 664 8588", // Formato para mostrar
    address: {
      country: "Argentina",
      city: "Rosario",
      full: "Rosario, Argentina"
    }
  },

  // URLs y enlaces
  urls: {
    website: "https://gymsaas.com",
    demo: "#demo",
    privacy: "#privacy",
    terms: "#terms"
  },

  // Redes sociales (si las tienes)
  social: {
    twitter: "#",
    linkedin: "#",
    youtube: "#",
    instagram: "#"
  },

  // Información comercial
  business: {
    founded: "2025",
    location: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
    supportHours: "Lun-Vie 9:00-18:00 (ART)"
  },

  // Características principales del producto
  features: [
    {
      id: "members",
      name: "Gestión de Miembros",
      description: "Administra perfiles completos, historial de pagos, asistencia y progreso de entrenamiento de cada miembro.",
      icon: "UserGroupIcon",
      color: "primary" as const
    },
    {
      id: "payments",
      name: "Pagos Automatizados",
      description: "Procesa pagos recurrentes, gestiona facturas y maneja múltiples métodos de pago de forma automática.",
      icon: "CreditCardIcon",
      color: "secondary" as const
    },
    {
      id: "booking",
      name: "Reserva de Clases",
      description: "Sistema completo de reservas para clases grupales, entrenamientos personales y equipos especiales.",
      icon: "CalendarDaysIcon",
      color: "primary" as const
    },
    {
      id: "analytics",
      name: "Analytics Avanzado",
      description: "Métricas detalladas sobre ingresos, retención de miembros, clases populares y rendimiento del gimnasio.",
      icon: "ChartBarIcon",
      color: "secondary" as const
    },
    {
      id: "security",
      name: "Seguridad Total",
      description: "Datos encriptados, backups automáticos y cumplimiento GDPR para proteger la información de tus miembros.",
      icon: "ShieldCheckIcon",
      color: "primary" as const
    },
    {
      id: "mobile",
      name: "App Móvil",
      description: "Aplicación nativa para miembros con reservas, seguimiento de progreso y comunicación directa.",
      icon: "DevicePhoneMobileIcon",
      color: "secondary" as const
    }
  ],

  // Planes de precios
  pricing: {
    currency: "USD", // o "ARS" si prefieres pesos argentinos
    plans: [
      {
        id: "basic",
        name: "Básico",
        price: 29,
        description: "Perfecto para gimnasios pequeños",
        maxMembers: 100,
        popular: false,
        features: [
          "Hasta 100 miembros",
          "Gestión básica de pagos",
          "Reserva de clases",
          "Soporte por email",
          "App móvil básica"
        ],
        notIncluded: [
          "Analytics avanzado",
          "Integración con wearables",
          "API personalizada",
          "Soporte prioritario"
        ]
      },
      {
        id: "professional",
        name: "Profesional",
        price: 79,
        description: "La opción más popular",
        maxMembers: 500,
        popular: true,
        features: [
          "Hasta 500 miembros",
          "Pagos automatizados completos",
          "Sistema de reservas avanzado",
          "Analytics completo",
          "App móvil completa",
          "Integración con wearables",
          "Soporte por chat"
        ],
        notIncluded: [
          "API personalizada",
          "Soporte telefónico 24/7"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: 199,
        description: "Para cadenas de gimnasios",
        maxMembers: "unlimited",
        popular: false,
        features: [
          "Miembros ilimitados",
          "Todas las funcionalidades",
          "API personalizada",
          "Integraciones personalizadas",
          "Soporte dedicado 24/7",
          "Onboarding personalizado",
          "SLA garantizado",
          "Backups dedicados"
        ],
        notIncluded: []
      }
    ]
  },

  // Navegación del sitio
  navigation: {
    main: [
      { name: "Inicio", href: "#inicio" },
      { name: "Características", href: "#caracteristicas" },
      { name: "Precios", href: "#precios" },
      { name: "Contacto", href: "#contacto" }
    ],
    footer: [
      { name: "Características", href: "#caracteristicas" },
      { name: "Precios", href: "#precios" },
      { name: "Contacto", href: "#contacto" },
      { name: "Privacidad", href: "#privacy" },
      { name: "Términos", href: "#terms" }
    ]
  },

  // Configuración de EmailJS (para el formulario de contacto)
  emailjs: {
    serviceId: "YOUR_SERVICE_ID", // Reemplazar con tu Service ID
    templateId: "YOUR_TEMPLATE_ID", // Reemplazar con tu Template ID
    publicKey: "YOUR_PUBLIC_KEY", // Reemplazar con tu Public Key
    toEmail: "roncoronit@gmail.com" // Email destino para los mensajes
  },

  // Métricas y estadísticas para mostrar
  stats: {
    activeMembers: 248,
    monthlyRevenue: 12450, // En la moneda configurada
    occupancyRate: 78,
    gymsUsing: 500,
    satisfaction: 98
  },

  // Mensajes y textos
  messages: {
    hero: {
      badge: "🚀 Nuevo: Panel de control mejorado",
      title: "Gestiona tu gimnasio como nunca antes",
      subtitle: "Automatiza la gestión de miembros, pagos, clases y entrenadores con nuestra plataforma SaaS diseñada específicamente para gimnasios modernos.",
      cta: "Probar Gratis 14 Días"
    },
    contact: {
      title: "¿Listo para transformar tu gimnasio?",
      subtitle: "Solicita una demo personalizada y descubre cómo GymSaaS puede revolucionar la gestión de tu gimnasio.",
      successMessage: "¡Mensaje enviado correctamente! Te contactaremos pronto para agendar tu demo.",
      errorMessage: "Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente."
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      madeWith: "Hecho con ❤️ en Argentina",
      systemStatus: "Sistema en línea"
    }
  }
};

// Tipos TypeScript para mejor desarrollo
export type CompanyData = typeof companyData;
export type PricingPlan = typeof companyData.pricing.plans[0];
export type Feature = typeof companyData.features[0];
export type NavigationItem = typeof companyData.navigation.main[0];