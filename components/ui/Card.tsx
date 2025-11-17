"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className, hover = true, gradient = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      className={cn(
        "rounded-2xl p-8 transition-all duration-300",
        gradient 
          ? "bg-gradient-to-br from-purple-50 to-white border border-purple-200 hover:border-purple-400 hover:shadow-xl" 
          : "bg-white border border-gray-200 hover:border-purple-300 hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

