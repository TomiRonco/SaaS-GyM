"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import { companyData } from "@/lib/data";
import { Button, Badge, DashboardPreview, FeatureList } from "@/components/ui";

const Hero = () => {
  const heroFeatures = [
    "Sin configuración inicial",
    "Cancela cuando quieras", 
    "Soporte 24/7"
  ];

  return (
    <section id="inicio" className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline" size="md" className="mb-6 bg-primary-50 text-primary-700 border-primary-200">
                  <span>{companyData.messages.hero.badge}</span>
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  {companyData.messages.hero.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {companyData.messages.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#demo">
                    <Button size="xl">
                      {companyData.messages.hero.cta}
                      <ChevronRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <Button variant="outline" size="xl">
                    <PlayIcon className="mr-2 h-5 w-5" />
                    Ver Demo
                  </Button>
                </div>

                <FeatureList features={heroFeatures} />
              </motion.div>
            </div>

            {/* Visual */}
            <div className="lg:pl-8">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;