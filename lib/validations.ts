import * as Yup from 'yup';

// 📧 Validaciones para Email
export const emailValidation = {
  required: 'El email es obligatorio',
  invalid: 'Ingresa un email válido',
  example: 'juan@gmail.com'
};

// 👤 Validaciones para Nombres
export const nameValidation = {
  required: 'El nombre es obligatorio',
  minLength: 'El nombre debe tener al menos 2 caracteres',
  maxLength: 'El nombre no puede exceder 50 caracteres',
  pattern: 'Solo se permiten letras y espacios'
};

// 📱 Validaciones para Teléfono
export const phoneValidation = {
  invalid: 'Formato de teléfono inválido',
  example: '+54 341 123 4567',
  pattern: 'Usa formato: +código área número'
};

// 🏢 Validaciones para Empresa/Gimnasio
export const companyValidation = {
  maxLength: 'El nombre del gimnasio no puede exceder 100 caracteres',
  example: 'Fitness Center Premium'
};

// 💬 Validaciones para Mensajes
export const messageValidation = {
  required: 'El mensaje es obligatorio',
  minLength: 'El mensaje debe tener al menos 10 caracteres',
  maxLength: 'El mensaje no puede exceder 1000 caracteres',
  example: 'Describe tus necesidades, horarios preferidos, tipo de gimnasio...'
};

// 🔒 Validaciones para Contraseñas
export const passwordValidation = {
  required: 'La contraseña es obligatoria',
  minLength: 'La contraseña debe tener al menos 8 caracteres',
  pattern: 'Debe contener al menos una mayúscula, una minúscula y un número',
  confirm: 'Las contraseñas no coinciden'
};

// 📊 Validaciones para Números
export const numberValidation = {
  required: 'Este campo es obligatorio',
  min: 'El valor debe ser mayor a',
  max: 'El valor debe ser menor a',
  positive: 'El valor debe ser positivo'
};

// ⚡ Esquemas de Validación con Yup

// 📝 Esquema para Formulario de Contacto
export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, nameValidation.minLength)
    .max(50, nameValidation.maxLength)
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, nameValidation.pattern)
    .required(nameValidation.required),
  
  email: Yup.string()
    .email(emailValidation.invalid)
    .required(emailValidation.required),
  
  company: Yup.string()
    .max(100, companyValidation.maxLength)
    .optional(),
  
  phone: Yup.string()
    .matches(/^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/, phoneValidation.invalid)
    .optional(),
  
  message: Yup.string()
    .min(10, messageValidation.minLength)
    .max(1000, messageValidation.maxLength)
    .required(messageValidation.required)
});

// 🔐 Esquema para Login
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(emailValidation.invalid)
    .required(emailValidation.required),
  
  password: Yup.string()
    .min(8, passwordValidation.minLength)
    .required(passwordValidation.required)
});

// 📝 Esquema para Registro
export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, nameValidation.minLength)
    .max(50, nameValidation.maxLength)
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, nameValidation.pattern)
    .required(nameValidation.required),
  
  email: Yup.string()
    .email(emailValidation.invalid)
    .required(emailValidation.required),
  
  password: Yup.string()
    .min(8, passwordValidation.minLength)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      passwordValidation.pattern
    )
    .required(passwordValidation.required),
  
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], passwordValidation.confirm)
    .required('Confirma tu contraseña')
});

// 🏢 Esquema para Perfil de Gimnasio
export const gymProfileSchema = Yup.object().shape({
  gymName: Yup.string()
    .min(2, 'El nombre del gimnasio debe tener al menos 2 caracteres')
    .max(100, companyValidation.maxLength)
    .required('El nombre del gimnasio es obligatorio'),
  
  address: Yup.string()
    .min(10, 'La dirección debe tener al menos 10 caracteres')
    .max(200, 'La dirección no puede exceder 200 caracteres')
    .required('La dirección es obligatoria'),
  
  phone: Yup.string()
    .matches(/^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/, phoneValidation.invalid)
    .required('El teléfono es obligatorio'),
  
  capacity: Yup.number()
    .min(1, 'La capacidad debe ser mayor a 0')
    .max(10000, 'La capacidad no puede exceder 10,000 personas')
    .required('La capacidad es obligatoria')
});

// 💰 Esquema para Precios
export const pricingSchema = Yup.object().shape({
  monthlyPrice: Yup.number()
    .min(0, numberValidation.positive)
    .max(100000, 'El precio no puede exceder $100,000')
    .required('El precio mensual es obligatorio'),
  
  yearlyPrice: Yup.number()
    .min(0, numberValidation.positive)
    .max(1000000, 'El precio anual no puede exceder $1,000,000')
    .optional(),
  
  currency: Yup.string()
    .oneOf(['USD', 'ARS', 'EUR'], 'Selecciona una moneda válida')
    .required('La moneda es obligatoria')
});

// 🛠️ Funciones de Utilidad para Validación

/**
 * Valida un email de forma simple
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida un teléfono básico
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  return phoneRegex.test(phone);
};

/**
 * Valida una contraseña segura
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8 && 
         /(?=.*[a-z])/.test(password) && 
         /(?=.*[A-Z])/.test(password) && 
         /(?=.*\d)/.test(password);
};

/**
 * Sanitiza texto removiendo caracteres especiales
 */
export const sanitizeText = (text: string): string => {
  return text.replace(/[<>\"'&]/g, '').trim();
};

/**
 * Formatea un teléfono para mostrar
 */
export const formatPhone = (phone: string): string => {
  // Remover todo excepto números y +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Si tiene código de país
  if (cleaned.startsWith('+')) {
    const country = cleaned.substring(0, 3);
    const area = cleaned.substring(3, 6);
    const number = cleaned.substring(6);
    return `${country} ${area} ${number}`;
  }
  
  return cleaned;
};

/**
 * Genera mensajes de error personalizados
 */
export const getValidationMessage = (field: string, type: 'required' | 'invalid' | 'minLength' | 'maxLength'): string => {
  const messages = {
    required: `El campo ${field} es obligatorio`,
    invalid: `El formato de ${field} es inválido`,
    minLength: `El campo ${field} es muy corto`,
    maxLength: `El campo ${field} es muy largo`
  };
  
  return messages[type];
};

// 📋 Tipos de TypeScript para las validaciones
export interface ValidationConfig {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  values: Record<string, any>;
}

/**
 * Función genérica para validar formularios
 */
export const validateForm = async (
  schema: Yup.Schema,
  values: Record<string, any>
): Promise<FormValidationResult> => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {
      isValid: true,
      errors: {},
      values
    };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errors: Record<string, string> = {};
      error.inner.forEach((err) => {
        if (err.path) {
          errors[err.path] = err.message;
        }
      });
      
      return {
        isValid: false,
        errors,
        values
      };
    }
    
    return {
      isValid: false,
      errors: { general: 'Error de validación inesperado' },
      values
    };
  }
};