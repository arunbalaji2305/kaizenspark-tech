"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { TECHNOLOGIES } from "@/lib/constants";

const TechRow = ({ 
  title, 
  technologies, 
  reverse = false 
}: { 
  title: string; 
  technologies: Array<{ name: string; logo: string }>; 
  reverse?: boolean;
}) => {
  // Duplicate the array for infinite scroll effect
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">{title}</h3>
      <div className="relative overflow-hidden py-3">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{
            x: reverse ? [0, "-50%"] : ["-50%", 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-40 h-28 bg-white rounded-xl border-2 border-gray-200 flex items-center justify-center hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <span className="text-gray-700 group-hover:text-purple-600 transition-colors font-semibold text-sm text-center px-4">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function TechnologyStack() {
  return (
    <Section id="technologies" background="default">
      <SectionHeader
        eyebrow="OUR TECHNOLOGY STACK"
        title="Powered by Cutting-Edge Technology"
        description="Industry-specific capabilities with robust and specialized AI to deliver enterprise-grade solutions"
      />

      <div className="space-y-8">
        <TechRow title="Frontend" technologies={TECHNOLOGIES.frontend} />
        <TechRow title="Backend" technologies={TECHNOLOGIES.backend} reverse />
        <TechRow title="Cloud & DevOps" technologies={TECHNOLOGIES.cloud} />
        <TechRow title="AI & Machine Learning" technologies={TECHNOLOGIES.aiml} reverse />
        <TechRow title="Mobile" technologies={TECHNOLOGIES.mobile} />
        <TechRow title="Database" technologies={TECHNOLOGIES.database} reverse />
      </div>
    </Section>
  );
}

