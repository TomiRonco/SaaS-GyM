"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  linkClassName?: string;
  onItemClick?: () => void;
}

export const NavigationMenu = ({ 
  items, 
  className = "", 
  linkClassName = "text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
  onItemClick 
}: NavigationMenuProps) => {
  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={className}
        >
          <Link
            href={item.href}
            className={linkClassName}
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </>
  );
};