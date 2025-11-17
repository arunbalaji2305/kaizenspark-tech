import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "dark" | "gradient";
}

export default function Section({ 
  children, 
  className, 
  id,
  background = "default" 
}: SectionProps) {
  const backgrounds = {
    default: "bg-white",
    dark: "bg-gray-50",
    gradient: "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50",
  };

  return (
    <section 
      id={id}
      className={cn(
        "section-padding",
        backgrounds[background],
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}

