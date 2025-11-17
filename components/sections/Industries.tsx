"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  GraduationCap, 
  Factory, 
  Truck,
  LucideIcon
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Factory,
  Truck,
};

// Icon color mapping for subtle accents
const iconColorMap: Record<string, string> = {
  "healthcare": "text-red-600",
  "fintech": "text-green-600",
  "ecommerce": "text-blue-600",
  "education": "text-purple-600",
  "manufacturing": "text-orange-600",
  "logistics": "text-indigo-600",
};

const iconBgMap: Record<string, string> = {
  "healthcare": "bg-red-50",
  "fintech": "bg-green-50",
  "ecommerce": "bg-blue-50",
  "education": "bg-purple-50",
  "manufacturing": "bg-orange-50",
  "logistics": "bg-indigo-50",
};

export default function Industries() {
  return (
    <Section background="default" className="bg-[#F6F0FF]">
      <SectionHeader
        eyebrow="INDUSTRIES WE SERVE"
        title="Tailored Solutions for Every Industry"
        description="Specialized expertise and compliance for your specific industry needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((industry, index) => {
          const Icon = iconMap[industry.icon];
          return (
            <Link key={industry.id} href={`/industries/${industry.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group h-full overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-400 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-md">
                  <Icon className="w-9 h-9 text-purple-600" strokeWidth={2} />
                </div>

                {/* Title & Description */}
                <h3 className="relative text-2xl font-bold text-gray-800 group-hover:text-purple-700 mb-3 transition-colors">
                  {industry.name}
                </h3>
                <p className="relative text-gray-600 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Capabilities */}
                <ul className="relative space-y-3">
                  {industry.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

