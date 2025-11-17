import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, LineChart, Users, Rocket } from "lucide-react";

export const metadata = {
  title: "Solutions | KaizenSpark Tech",
  description: "Explore our comprehensive technology solutions tailored to transform your business operations and drive growth.",
};

const solutions = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Leverage artificial intelligence and machine learning to automate processes and gain intelligent insights.",
    icon: Sparkles,
    features: ["Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize your business operations with cloud-native solutions and digital-first strategies.",
    icon: Zap,
    features: ["Cloud Migration", "API Development", "System Integration", "Legacy Modernization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    description: "Protect your digital assets with comprehensive security solutions and compliance frameworks.",
    icon: Shield,
    features: ["Security Audits", "Compliance Solutions", "Data Protection", "Threat Detection"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    icon: LineChart,
    features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Reporting Dashboards"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    description: "Build exceptional customer experiences with modern web and mobile applications.",
    icon: Users,
    features: ["UX/UI Design", "Mobile Apps", "Web Portals", "Customer Analytics"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "growth-scaling",
    title: "Growth & Scaling",
    description: "Scale your business with robust infrastructure and performance optimization strategies.",
    icon: Rocket,
    features: ["Performance Optimization", "Load Balancing", "Auto-scaling", "DevOps Automation"],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Section background="default">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to solve real business challenges and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-400 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-md">
                  <Icon className="w-9 h-9 text-purple-600" />
                </div>
                
                {/* Title */}
                <h3 className="relative text-2xl font-bold text-gray-900 group-hover:text-purple-700 mb-4 transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features */}
                <ul className="relative space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <div className="relative flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  <Link href="/contact" className="flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let&apos;s discuss your specific challenges and build a tailored solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </main>
  );
}

