# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

## 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Crea una cuenta gratuita
3. Verifica tu email

## 2. Configurar el servicio de email
1. En el dashboard, ve a "Email Services"
2. Añade un nuevo servicio (Gmail, Outlook, etc.)
3. Sigue las instrucciones para conectar tu email
4. Anota el **Service ID**

## 3. Crear template de email
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa estas variables en tu template:
   - `{{from_name}}` - Nombre del usuario
   - `{{from_email}}` - Email del usuario
   - `{{company}}` - Nombre del gimnasio
   - `{{phone}}` - Teléfono del usuario
   - `{{message}}` - Mensaje del usuario
   - `{{to_email}}` - Tu email (destino)
4. Anota el **Template ID**

## 4. Obtener Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key**

## 5. Configurar en el código
Abre el archivo `components/sections/Contact.tsx` y reemplaza:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',     // ← Reemplaza con tu Service ID
  'YOUR_TEMPLATE_ID',    // ← Reemplaza con tu Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // ← Reemplaza con tu Public Key
);
```

## 6. También actualiza el email destino
En el mismo archivo, cambia:
```typescript
to_email: "tu@email.com" // ← Reemplaza con tu email real
```

## Template de ejemplo para EmailJS:

```
Asunto: Nuevo contacto desde GymSaaS - {{from_name}}

Hola,

Has recibido un nuevo mensaje de contacto desde la landing page de GymSaaS:

**Datos del contacto:**
- Nombre: {{from_name}}
- Email: {{from_email}}
- Gimnasio/Empresa: {{company}}
- Teléfono: {{phone}}

**Mensaje:**
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de GymSaaS.
```

Una vez configurado, el formulario enviará emails directamente a tu bandeja de entrada cuando los usuarios llenen el formulario de contacto.