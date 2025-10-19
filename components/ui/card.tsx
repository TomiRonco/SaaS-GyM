import { HTMLAttributes, forwardRef } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg",
        outline: "bg-transparent border-gray-200 hover:border-gray-300",
        gradient: "bg-gradient-to-br from-primary-50 to-secondary-50 border-transparent",
        elevated: "bg-white border-gray-200 shadow-lg hover:shadow-xl",
        glass: "bg-white/95 backdrop-blur-sm border-gray-200/50"
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-12"
      },
      hover: {
        none: "",
        lift: "hover:-translate-y-1",
        scale: "hover:scale-105",
        glow: "hover:shadow-2xl hover:shadow-primary-500/20"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: "lift"
    }
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Versión animada de la card
export interface AnimatedCardProps extends Omit<CardProps, 'asChild'> {
  animate?: boolean;
  delay?: number;
  // Allow all Framer Motion props
  [key: string]: any;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant, size, padding, shadow, hover, animate = true, delay = 0, children, ...props }, ref) => {
    // Separate Framer Motion props from DOM props
    const {
      variants,
      initial,
      whileInView,
      viewport,
      transition,
      whileHover,
      whileTap,
      ...domProps
    } = props;

    const motionProps = {
      variants,
      initial,
      whileInView,
      viewport,
      transition,
      whileHover,
      whileTap,
    };

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover }), className)}
        {...motionProps}
        {...domProps}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

// Componentes específicos de Card
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-gray-600", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  AnimatedCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants
};