"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  name: string;
  href?: string;
  className?: string;
}

export const Logo = ({ name, href = "/", className = "" }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Link href={href} className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">G</span>
        </div>
        <span className="text-xl font-bold text-gray-900">{name}</span>
      </Link>
    </motion.div>
  );
};