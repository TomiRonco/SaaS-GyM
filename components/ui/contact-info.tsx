"use client";

import { Button } from "@/components/ui";
import { companyData } from "@/lib/data";

interface ContactInfoProps {
  className?: string;
}

export const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={className}>
      <p className="text-gray-600 mb-4">¿Prefieres contactarnos directamente?</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
        <Button
          variant="link"
          size="md"
          onClick={() => window.location.href = `mailto:${companyData.contact.email}`}
        >
          {companyData.contact.email}
        </Button>
        <Button
          variant="link"
          size="md"
          onClick={() => window.location.href = `tel:${companyData.contact.phone}`}
        >
          {companyData.contact.phoneDisplay}
        </Button>
      </div>
    </div>
  );
};