"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold",
    secondary: "bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 rounded-full font-semibold",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full font-semibold",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
}

