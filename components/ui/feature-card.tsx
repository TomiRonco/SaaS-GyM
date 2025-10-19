"use client";

import { AnimatedCard } from "@/components/ui";

interface FeatureCardProps {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: 'primary' | 'secondary';
  variants?: any;
}

export const FeatureCard = ({ name, description, icon: Icon, color, variants }: FeatureCardProps) => {
  return (
    <AnimatedCard
      variants={variants}
      variant="default"
      padding="lg"
      hover="lift"
      className="group relative h-full"
    >
      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl mb-6 ${
          color === 'primary' 
            ? 'bg-primary-100 text-primary-600' 
            : 'bg-secondary-100 text-secondary-600'
        }`}>
          <Icon className="h-7 w-7" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
          {name}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </AnimatedCard>
  );
};