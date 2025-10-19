"use client";

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
  <div className="flex items-center">
    <span className="text-green-500 mr-2">✓</span>
    {text}
  </div>
);

interface FeatureListProps {
  features: string[];
  className?: string;
}

export const FeatureList = ({ features, className = "" }: FeatureListProps) => {
  return (
    <div className={`flex items-center space-x-8 text-sm text-gray-500 ${className}`}>
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  );
};