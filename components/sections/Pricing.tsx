"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { companyData } from "@/lib/data";
import { SectionHeader, PricingCard, PricingToggle } from "@/components/ui";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = companyData.pricing.plans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSelectPlan = (planId: string) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Planes diseñados para cada tipo de gimnasio"
            subtitle="Desde gimnasios boutique hasta grandes cadenas, tenemos el plan perfecto para tu negocio."
            highlightWords={4}
            maxWidth="3xl"
          />

          <div className="flex justify-center mb-12">
            <PricingToggle
              isMonthly={isMonthly}
              onToggle={setIsMonthly}
            />
          </div>

          {/* Pricing Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
          >
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                variants={cardVariants}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;