"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users, Shield } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Zap,
    title: "AI-First Approach",
    description: "Leverage cutting-edge AI and machine learning technologies to build intelligent solutions that give you a competitive advantage in the market.",
    stat: "10x",
    statLabel: "Faster Development",
  },
  {
    icon: Target,
    title: "Agile Excellence",
    description: "Our proven agile methodology ensures rapid delivery, continuous improvement, and complete transparency throughout the development process.",
    stat: "2-4",
    statLabel: "Week Sprints",
  },
  {
    icon: Users,
    title: "Full-Stack Mastery",
    description: "End-to-end expertise from frontend to backend, cloud to mobile, with a dedicated team of senior engineers and solution architects.",
    stat: "50+",
    statLabel: "Technologies",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security standards, compliance certifications, and rigorous testing ensure your data and applications are always protected.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
  },
];

export default function WhyChooseUs() {
  return (
    <Section background="default" className="bg-[#F6F0FF]">
      <SectionHeader
        eyebrow="WHY CHOOSE US"
        title="Why Leading Teams Choose KaizenSpark"
        description="From startups to enterprises, businesses trust us to deliver exceptional results"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white border-2 border-gray-200 hover:border-purple-400 rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-2xl group cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-md">
                <Icon className="w-9 h-9 text-purple-600" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-gray-800 group-hover:text-purple-700 mb-3 transition-colors">
                {reason.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed mb-6">
                {reason.description}
              </p>

              {/* Stat */}
              <div className="relative flex items-baseline gap-2">
                <span className="text-4xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors">
                  {reason.stat}
                </span>
                <span className="text-gray-600 font-medium">
                  {reason.statLabel}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

