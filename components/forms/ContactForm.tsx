"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import { companyData } from "@/lib/data";
import { contactFormSchema, emailValidation, nameValidation, companyValidation, phoneValidation, messageValidation } from "@/lib/validations";
import { Button, Input } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import { FormRow, FormField, StatusMessage } from "@/components/ui/form";

// Utilizamos el esquema de validación centralizado
// const validationSchema ya no es necesario, usamos contactFormSchema

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const currentDate = new Date();
      
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        company: values.company || 'No especificado',
        phone: values.phone || 'No especificado',
        message: values.message,
        to_email: companyData.contact.email,
        current_date: currentDate.toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        current_time: currentDate.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        }),
        // Variables adicionales para mejor tracking
        website_url: typeof window !== 'undefined' ? window.location.origin : 'gymsaas.com',
        timestamp: currentDate.toISOString(),
        user_agent: typeof window !== 'undefined' ? navigator.userAgent : 'Unknown'
      };

      await emailjs.send(
        companyData.emailjs.serviceId,
        companyData.emailjs.templateId,
        templateParams,
        companyData.emailjs.publicKey
      );

      setSubmitStatus('success');
      resetForm();
      
      // Log exitoso para analytics (opcional)
      console.log('✅ Email enviado exitosamente:', {
        nombre: values.name,
        email: values.email,
        fecha: templateParams.current_date,
        hora: templateParams.current_time
      });
      
    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      setSubmitStatus('error');
      
      // Log del error para debugging (opcional)
      console.error('📧 Detalles del error EmailJS:', {
        error: error,
        serviceId: companyData.emailjs.serviceId,
        templateId: companyData.emailjs.templateId,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      }}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form className="space-y-6">
          <FormRow columns={2}>
            <FormField>
              <Input
                label="Nombre completo"
                name="name"
                value={values.name}
                onChange={handleChange}
                variant={errors.name && touched.name ? "error" : "default"}
                error={errors.name && touched.name ? errors.name : undefined}
                placeholder="Ej: Juan Pérez"
                required
              />
            </FormField>
            
            <FormField>
              <Input
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                variant={errors.email && touched.email ? "error" : "default"}
                error={errors.email && touched.email ? errors.email : undefined}
                placeholder={emailValidation.example}
                required
              />
            </FormField>
          </FormRow>

          <FormRow columns={2}>
            <FormField>
              <Input
                label="Gimnasio/Empresa (opcional)"
                name="company"
                value={values.company}
                onChange={handleChange}
                variant={errors.company && touched.company ? "error" : "default"}
                error={errors.company && touched.company ? errors.company : undefined}
                placeholder={companyValidation.example}
              />
            </FormField>
            
            <FormField>
              <Input
                label="Teléfono (opcional)"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                variant={errors.phone && touched.phone ? "error" : "default"}
                error={errors.phone && touched.phone ? errors.phone : undefined}
                placeholder={phoneValidation.example}
              />
            </FormField>
          </FormRow>

          <FormField>
            <Textarea
              label="Mensaje"
              name="message"
              placeholder={messageValidation.example}
              error={!!(errors.message && touched.message)}
              required
            />
          </FormField>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              className="w-full md:w-auto min-w-[200px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando mensaje...
                </>
              ) : (
                <>
                  📨 Solicitar Demo Gratuita
                </>
              )}
            </Button>
            
            {isSubmitting && (
              <p className="text-sm text-gray-500 mt-2">
                Procesando tu solicitud, por favor espera...
              </p>
            )}
          </div>

          {submitStatus === 'success' && (
            <StatusMessage
              type="success"
              title="¡Tu mensaje fue enviado exitosamente! 🎉"
              message="Gracias por tu interés en GymSaaS. Nuestro equipo revisará tu consulta y te contactaremos dentro de las próximas 24 horas para agendar tu demo personalizada."
            />
          )}
          
          {submitStatus === 'error' && (
            <StatusMessage
              type="error"
              title="Oops, algo salió mal 😕"
              message="No pudimos enviar tu mensaje en este momento. Por favor, inténtalo nuevamente o contáctanos directamente por WhatsApp al +54 341 664 8588."
            />
          )}
        </Form>
      )}
    </Formik>
  );
};