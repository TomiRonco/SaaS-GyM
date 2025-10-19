"use client";

import { Button } from "@/components/ui";

interface PricingToggleProps {
  isMonthly: boolean;
  onToggle: (isMonthly: boolean) => void;
  className?: string;
}

export const PricingToggle = ({ isMonthly, onToggle, className = "" }: PricingToggleProps) => {
  return (
    <div className={`inline-flex items-center bg-white rounded-lg p-1 border border-gray-200 ${className}`}>
      <Button
        variant={isMonthly ? "primary" : "ghost"}
        size="sm"
        onClick={() => onToggle(true)}
        className="text-sm font-medium"
      >
        Mensual
      </Button>
      <Button
        variant={!isMonthly ? "primary" : "ghost"}
        size="sm"
        onClick={() => onToggle(false)}
        className="text-sm font-medium"
      >
        Anual (20% descuento)
      </Button>
    </div>
  );
};