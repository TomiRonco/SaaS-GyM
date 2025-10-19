# 📋 Sistema de Validaciones Centralizadas

## 🎯 Objetivo

Este sistema centraliza todas las validaciones del proyecto en un solo lugar, facilitando el mantenimiento y la consistencia en toda la aplicación.

## 📂 Ubicación

```
/lib/validations.ts
```

## 🚀 Características

- ✅ **Validaciones reutilizables** para campos comunes
- ✅ **Esquemas de Yup** predefinidos para formularios completos
- ✅ **Mensajes de error consistentes** en español
- ✅ **Funciones de utilidad** para validaciones personalizadas
- ✅ **Tipos de TypeScript** incluidos
- ✅ **Ejemplos y placeholders** centralizados

## 📝 Validaciones Disponibles

### 🔍 Validaciones Individuales

```typescript
// Email
emailValidation.required     // "El email es obligatorio"
emailValidation.invalid      // "Ingresa un email válido"
emailValidation.example      // "juan@gmail.com"

// Nombres
nameValidation.required      // "El nombre es obligatorio"
nameValidation.minLength     // "El nombre debe tener al menos 2 caracteres"
nameValidation.maxLength     // "El nombre no puede exceder 50 caracteres"
nameValidation.pattern       // "Solo se permiten letras y espacios"

// Teléfono
phoneValidation.invalid      // "Formato de teléfono inválido"
phoneValidation.example      // "+54 341 123 4567"
phoneValidation.pattern      // "Usa formato: +código área número"

// Empresa/Gimnasio
companyValidation.maxLength  // "El nombre del gimnasio no puede exceder 100 caracteres"
companyValidation.example    // "Fitness Center Premium"

// Mensajes
messageValidation.required   // "El mensaje es obligatorio"
messageValidation.minLength  // "El mensaje debe tener al menos 10 caracteres"
messageValidation.maxLength  // "El mensaje no puede exceder 1000 caracteres"
messageValidation.example    // "Describe tus necesidades..."

// Contraseñas
passwordValidation.required  // "La contraseña es obligatoria"
passwordValidation.minLength // "La contraseña debe tener al menos 8 caracteres"
passwordValidation.pattern   // "Debe contener al menos una mayúscula..."
passwordValidation.confirm   // "Las contraseñas no coinciden"
```

### 📋 Esquemas Predefinidos

```typescript
// Formulario de Contacto
contactFormSchema

// Login
loginSchema

// Registro
registerSchema

// Perfil de Gimnasio
gymProfileSchema

// Precios
pricingSchema
```

## 🛠️ Cómo Usar

### 1. **En un formulario con Formik**

```typescript
import { contactFormSchema, emailValidation } from '@/lib/validations';

<Formik
  validationSchema={contactFormSchema}
  // ...
>
  <Input
    placeholder={emailValidation.example}
    // ...
  />
</Formik>
```

### 2. **Validaciones manuales**

```typescript
import { isValidEmail, isValidPhone } from '@/lib/validations';

if (!isValidEmail(email)) {
  setError('Email inválido');
}

if (!isValidPhone(phone)) {
  setError('Teléfono inválido');
}
```

### 3. **Función genérica de validación**

```typescript
import { validateForm, contactFormSchema } from '@/lib/validations';

const result = await validateForm(contactFormSchema, formValues);

if (result.isValid) {
  // Enviar formulario
} else {
  // Mostrar errores: result.errors
}
```

### 4. **Crear esquema personalizado**

```typescript
import * as Yup from 'yup';
import { emailValidation, nameValidation } from '@/lib/validations';

const customSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, nameValidation.minLength)
    .required(nameValidation.required),
  
  email: Yup.string()
    .email(emailValidation.invalid)
    .required(emailValidation.required)
});
```

## 📱 Ejemplos de Implementación

### ✅ **Formulario de Contacto**
```typescript
// Ya implementado en /components/forms/ContactForm.tsx
import { contactFormSchema, emailValidation } from '@/lib/validations';
```

### 🔄 **Formulario de Registro** (pendiente)
```typescript
// Usar registerSchema cuando se necesite
import { registerSchema, passwordValidation } from '@/lib/validations';
```

### 🔄 **Formulario de Login** (pendiente)
```typescript
import { loginSchema } from '@/lib/validations';
```

### 🏢 **Formulario de Perfil de Gimnasio** (pendiente)
```typescript
import { gymProfileSchema } from '@/lib/validations';
```

## 🔧 Funciones de Utilidad

```typescript
// Validar email
isValidEmail('test@email.com')        // true/false

// Validar teléfono
isValidPhone('+54 341 123 4567')      // true/false

// Validar contraseña segura
isValidPassword('MyPass123!')         // true/false

// Sanitizar texto
sanitizeText('<script>alert</script>') // 'scriptalert'

// Formatear teléfono
formatPhone('5434112345678')          // '+54 341 1234 5678'

// Mensaje de error personalizado
getValidationMessage('email', 'required') // 'El campo email es obligatorio'
```

## 📊 Ventajas del Sistema

### ✅ **Mantenimiento Centralizado**
- Todos los mensajes de error en un solo lugar
- Cambios globales con una sola edición
- Consistencia garantizada en toda la app

### ✅ **Reutilización**
- Un esquema sirve para múltiples formularios
- Validaciones compartidas entre componentes
- Reducción de código duplicado

### ✅ **Escalabilidad**
- Fácil agregar nuevas validaciones
- Estructura modular y organizada
- Tipos TypeScript incluidos

### ✅ **Localización**
- Todos los mensajes en español
- Fácil cambiar idioma en el futuro
- Formatos locales (fechas, teléfonos)

## 🎨 Integración con UI Components

Las validaciones se integran perfectamente con los componentes UI:

```typescript
// Los placeholders usan los ejemplos de validaciones
<Input placeholder={emailValidation.example} />

// Los mensajes de error son consistentes
<StatusMessage message={emailValidation.invalid} />

// Los esquemas validan automáticamente
<Formik validationSchema={contactFormSchema}>
```

## 🔮 Extensiones Futuras

### 📅 **Validaciones de Fechas**
```typescript
// Próximamente
dateValidation.required
dateValidation.future
dateValidation.past
```

### 💰 **Validaciones de Precios**
```typescript
// Próximamente  
priceValidation.positive
priceValidation.currency
priceValidation.range
```

### 🏋️ **Validaciones Específicas de Gimnasio**
```typescript
// Próximamente
gymValidation.capacity
gymValidation.hours
gymValidation.equipment
```

## 🚨 Buenas Prácticas

1. **Siempre usar esquemas predefinidos** antes de crear nuevos
2. **Importar validaciones desde el archivo central** `/lib/validations.ts`
3. **Usar los ejemplos como placeholders** para consistencia
4. **Extender esquemas existentes** en lugar de duplicar
5. **Documentar validaciones nuevas** que agregues

## 📋 Checklist para Nuevos Formularios

- [ ] ¿Existe un esquema de validación para este formulario?
- [ ] ¿Los campos usan validaciones existentes?
- [ ] ¿Los placeholders usan los ejemplos centralizados?
- [ ] ¿Los mensajes de error son consistentes?
- [ ] ¿El formulario maneja estados de carga y errores?
- [ ] ¿Se documentó el nuevo esquema si se creó uno?

---

**Resultado**: Sistema de validaciones 100% centralizado, reutilizable y escalable 🚀