"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightWords?: number; // Número de palabras al final del título para destacar
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
  maxWidth?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  highlightWords = 0,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
  maxWidth = "2xl"
}: SectionHeaderProps) => {
  const words = title.split(' ');
  const normalWords = words.slice(0, -highlightWords);
  const highlightedWords = words.slice(-highlightWords);

  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'none': ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
        titleClassName
      )}>
        {normalWords.length > 0 && (
          <>
            {normalWords.join(' ')}
            {highlightWords > 0 && ' '}
          </>
        )}
        {highlightWords > 0 && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            {highlightedWords.join(' ')}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-xl text-gray-600 mx-auto",
          maxWidthClasses[maxWidth as keyof typeof maxWidthClasses],
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};