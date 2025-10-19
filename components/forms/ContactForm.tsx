"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { companyData } from "@/lib/data";
import { Button, Input } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import { FormRow, FormField, StatusMessage } from "@/components/ui/form";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es obligatorio'),
  company: Yup.string()
    .min(2, 'El nombre del gimnasio debe tener al menos 2 caracteres'),
  phone: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Teléfono inválido'),
  message: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .required('El mensaje es obligatorio')
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        company: values.company,
        phone: values.phone,
        message: values.message,
        to_email: companyData.emailjs.toEmail
      };

      await emailjs.send(
        companyData.emailjs.serviceId,
        companyData.emailjs.templateId,
        templateParams,
        companyData.emailjs.publicKey
      );

      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
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
      validationSchema={validationSchema}
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
                placeholder="Tu nombre completo"
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
                placeholder="tu@email.com"
                required
              />
            </FormField>
          </FormRow>

          <FormRow columns={2}>
            <FormField>
              <Input
                label="Gimnasio/Empresa"
                name="company"
                value={values.company}
                onChange={handleChange}
                variant={errors.company && touched.company ? "error" : "default"}
                error={errors.company && touched.company ? errors.company : undefined}
                placeholder="Nombre de tu gimnasio"
              />
            </FormField>
            
            <FormField>
              <Input
                label="Teléfono"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                variant={errors.phone && touched.phone ? "error" : "default"}
                error={errors.phone && touched.phone ? errors.phone : undefined}
                placeholder="+54 341 000 0000"
              />
            </FormField>
          </FormRow>

          <FormField>
            <Textarea
              label="Mensaje"
              name="message"
              placeholder="Cuéntanos sobre tu gimnasio y qué necesitas..."
              error={!!(errors.message && touched.message)}
              required
            />
          </FormField>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Demo Gratuita'}
            </Button>
          </div>

          {submitStatus === 'success' && (
            <StatusMessage
              type="success"
              title="¡Mensaje enviado correctamente!"
              message={companyData.messages.contact.successMessage.split('!')[1]}
            />
          )}
          
          {submitStatus === 'error' && (
            <StatusMessage
              type="error"
              title="Error al enviar el mensaje"
              message={companyData.messages.contact.errorMessage}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};