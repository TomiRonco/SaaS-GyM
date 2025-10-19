"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({ children, className }: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
};

interface FormRowProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

export const FormRow = ({ children, columns = 1, className }: FormRowProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3"
  };

  return (
    <div className={cn("grid gap-6", gridCols[columns], className)}>
      {children}
    </div>
  );
};

interface FormSectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const FormSection = ({ children, title, description, className }: FormSectionProps) => {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

interface StatusMessageProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  className?: string;
}

export const StatusMessage = ({ type, title, message, className }: StatusMessageProps) => {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-700",
    error: "bg-red-50 border-red-200 text-red-700",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
    info: "bg-blue-50 border-blue-200 text-blue-700"
  };

  const messageStyles = {
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
    info: "text-blue-600"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "p-4 rounded-lg border text-center",
        styles[type],
        className
      )}
    >
      <p className="font-medium">{title}</p>
      {message && (
        <p className={cn("text-sm mt-1", messageStyles[type])}>
          {message}
        </p>
      )}
    </motion.div>
  );
};