"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud, 
  Rocket, 
  ArrowRight,
  LucideIcon 
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Rocket,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0]; index: number }) => {
  const Icon = iconMap[service.icon];

  return (
    <Link href={service.href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="h-full rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-md">
          <Icon className="w-9 h-9 text-purple-600" />
        </div>

        {/* Title */}
        <h3 className="relative text-2xl font-bold text-gray-800 group-hover:text-purple-700 mb-4 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="relative text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="relative space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="relative flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
          Learn More
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};

export default function Services() {
  return (
    <Section id="services" background="default" className="bg-[#F6F0FF]">
      <SectionHeader
        eyebrow="WHO WE HELP"
        title="Tailored Solutions for Every Team"
        description="Specialized solutions and best practices for your specific team’s goals"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}

