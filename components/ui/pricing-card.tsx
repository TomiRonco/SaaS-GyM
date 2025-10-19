"use client";

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatedCard, Button, Badge } from "@/components/ui";

interface PricingCardProps {
  plan: {
    id: string;
    name: string;
    price: number;
    description: string;
    popular: boolean;
    features: string[];
    notIncluded: string[];
  };
  variants?: any;
  onSelectPlan?: (planId: string) => void;
}

export const PricingCard = ({ plan, variants, onSelectPlan }: PricingCardProps) => {
  return (
    <AnimatedCard
      key={plan.id}
      variants={variants}
      variant={plan.popular ? "elevated" : "outline"}
      padding="lg"
      hover="lift"
      className={`relative h-full flex flex-col ${
        plan.popular 
          ? 'border-primary-500 scale-105' 
          : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="default" size="lg">
            Más Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
          <span className="text-gray-600 ml-2">/mes</span>
        </div>
      </div>

      <div className="space-y-3 mb-6 flex-grow">
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-sm">
            <CheckIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
        {plan.notIncluded.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center opacity-50 text-sm">
            <XMarkIcon className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
            <span className="text-gray-500">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        variant={plan.popular ? "primary" : "outline"}
        size="lg"
        className="w-full mt-auto"
        onClick={() => onSelectPlan?.(plan.id)}
      >
        {plan.popular ? 'Comenzar Ahora' : 'Elegir Plan'}
      </Button>
    </AnimatedCard>
  );
};