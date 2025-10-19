"use client";

import { motion } from "framer-motion";
import { companyData } from "@/lib/data";
import { Card, SectionHeader, ContactInfo } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <section id="contacto" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={companyData.messages.contact.title}
            subtitle={companyData.messages.contact.subtitle}
            highlightWords={2}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
              <ContactForm />
              
              <ContactInfo className="mt-8 pt-8 border-t border-gray-200 text-center" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;