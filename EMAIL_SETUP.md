# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

## 🚀 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Crea una cuenta gratuita
3. Verifica tu email

## 📧 2. Configurar el servicio de email

1. En el dashboard, ve a "Email Services"
2. Añade un nuevo servicio (Gmail, Outlook, etc.)
3. Sigue las instrucciones para conectar tu email
4. Anota el **Service ID**

## 📝 3. Crear template de email

1. Ve a "Email Templates"
2. Crea un nuevo template
3. **Nombre sugerido**: `gym_saas_contact_template`
4. **Subject**: `🏋️ [GymSaaS] Nuevo contacto de {{from_name}}`
5. Usa el HTML template proporcionado en este proyecto
6. Configura estas variables en tu template:

### Variables disponibles:

- `{{from_name}}` - Nombre del usuario
- `{{from_email}}` - Email del usuario
- `{{company}}` - Nombre del gimnasio (puede ser "No especificado")
- `{{phone}}` - Teléfono del usuario (puede ser "No especificado")
- `{{message}}` - Mensaje del usuario
- `{{to_email}}` - Tu email destino
- `{{current_date}}` - Fecha formateada en español
- `{{current_time}}` - Hora formateada en español
- `{{website_url}}` - URL del sitio web
- `{{timestamp}}` - Timestamp ISO para tracking
- `{{user_agent}}` - Información del navegador

7. Anota el **Template ID**

## 🔑 4. Obtener Public Key

1. Ve a "Account" → "General"
2. Copia tu **Public Key**

## ⚙️ 5. Configurar en el código

Actualiza el archivo `/lib/data.ts` en la sección `emailjs`:

```typescript
emailjs: {
  serviceId: "service_73dzyr7",        // ← Reemplaza aquí
  templateId: "template_bosa0ga",      // ← Reemplaza aquí
  publicKey: "IHJR_LzQ6ZLe09SZ8",        // ← Reemplaza aquí
  toEmail: "roncoronit@gmail.com"    // ← Tu email destino
}
```

## 📨 Template HTML Completo

Usa este template HTML en EmailJS (copia y pega en el campo Content):

```html
[Aquí iría el template HTML completo que te proporcioné anteriormente]
```

## ✅ 6. Prueba el formulario

1. Guarda todos los cambios
2. Reinicia el servidor de desarrollo
3. Llena el formulario de contacto
4. Verifica que recibas el email

## 🔧 Variables que envía el formulario actualizado:

```javascript
{
  from_name: "Nombre del usuario",
  from_email: "email@usuario.com",
  company: "Gimnasio XYZ" o "No especificado",
  phone: "+54 341 123 4567" o "No especificado",
  message: "Mensaje del usuario",
  to_email: "roncoronit@gmail.com",
  current_date: "viernes, 19 de octubre de 2025",
  current_time: "14:30 GMT-3",
  website_url: "https://tudominio.com",
  timestamp: "2025-10-19T17:30:00.000Z",
  user_agent: "Mozilla/5.0..."
}
```

## 🎨 Características del formulario actualizado:

- ✅ **Validación mejorada** con límites de caracteres
- ✅ **Campos opcionales** claramente marcados
- ✅ **Placeholders informativos** con ejemplos
- ✅ **Mensajes de éxito/error** personalizados
- ✅ **Indicador de carga** con spinner
- ✅ **Logging** para debugging
- ✅ **Variables adicionales** para tracking
- ✅ **Formato de fecha/hora** en español
- ✅ **Manejo de errores** mejorado

## 🚨 Troubleshooting

**Si el email no llega:**

1. Verifica que el Service ID, Template ID y Public Key sean correctos
2. Revisa la consola del navegador para errores
3. Asegúrate de que el servicio de email esté conectado correctamente
4. Verifica que no esté en spam

**Si hay errores de validación:**

- Los campos obligatorios son: nombre, email y mensaje
- Los campos opcionales son: empresa y teléfono
- El mensaje debe tener entre 10-1000 caracteres
- El email debe tener formato válido

Una vez configurado, recibirás emails profesionales con toda la información del contacto organizada y formateada. 🎉
