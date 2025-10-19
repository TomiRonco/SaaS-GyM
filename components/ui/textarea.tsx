"use client";

import { Field, ErrorMessage } from "formik";
import { cn } from "@/lib/utils";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: boolean;
  className?: string;
}

export const Textarea = ({ 
  label, 
  name, 
  placeholder, 
  rows = 4, 
  required = false, 
  error = false,
  className 
}: TextareaProps) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        rows={rows}
        className={cn(
          "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none",
          error ? "border-red-500" : "border-gray-300"
        )}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};