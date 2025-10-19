"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

interface CtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  gradient?: boolean;
}

export const CtaCard = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  className = "",
  gradient = true 
}: CtaCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-center mt-16"
    >
      <div className={`
        ${gradient 
          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
          : 'bg-white border border-gray-200 text-gray-900'
        } 
        rounded-2xl p-8 lg:p-12 ${className}
      `}>
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          gradient ? 'opacity-90' : 'text-gray-600'
        }`}>
          {description}
        </p>
        <Button
          variant={gradient ? "secondary" : "primary"}
          size="lg"
          onClick={onButtonClick}
          className={gradient ? "bg-white text-primary-600 hover:bg-gray-50 shadow-lg" : ""}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};