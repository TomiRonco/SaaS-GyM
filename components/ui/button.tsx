import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl focus-visible:ring-primary-500",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg hover:shadow-xl focus-visible:ring-secondary-500",
        outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-gray-500",
        "outline-primary": "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500",
        "outline-secondary": "border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50 focus-visible:ring-secondary-500",
        ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500",
        link: "text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline focus-visible:ring-primary-500"
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

// Versión animada del botón con propiedades específicas de Motion
interface AnimatedButtonProps extends Omit<ButtonProps, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  whileHover?: any;
  whileTap?: any;
  initial?: any;
  animate?: any;
  exit?: any;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, loading, leftIcon, rightIcon, children, disabled, whileHover, whileTap, initial, animate, exit, ...props }, ref) => {
    // Filtrar props específicas de motion para evitar conflictos
    const { onDrag, onDragStart, onDragEnd, ...buttonProps } = props as any;
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        whileHover={whileHover || { scale: 1.02 }}
        whileTap={whileTap || { scale: 0.98 }}
        initial={initial}
        animate={animate}
        exit={exit}
        {...buttonProps}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { Button, AnimatedButton, buttonVariants };