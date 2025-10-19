"use client";

import { motion } from "framer-motion";
import { companyData } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import { SectionHeader, FeatureCard, CtaCard } from "@/components/ui";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="caracteristicas" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Todo lo que necesitas para gestionar tu gimnasio"
            subtitle="Una plataforma completa que automatiza todas las operaciones de tu gimnasio, desde la gestión de miembros hasta el análisis de rendimiento."
            highlightWords={3}
            maxWidth="3xl"
          />

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companyData.features.map((feature) => (
              <FeatureCard
                key={feature.id}
                name={feature.name}
                description={feature.description}
                icon={getIcon(feature.icon)}
                color={feature.color}
                variants={itemVariants}
              />
            ))}
          </motion.div>

          <CtaCard
            title="¿Listo para transformar tu gimnasio?"
            description="Únete a más de 500 gimnasios que ya confían en nuestra plataforma para gestionar su negocio."
            buttonText="Comenzar Prueba Gratuita"
            onButtonClick={() => {
              const contactSection = document.getElementById('contacto');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;