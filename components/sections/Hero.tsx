"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import HeroDashboard from "@/components/sections/HeroDashboard";

export default function Hero() {
  // lightweight inline data for KPI tiles and chart (marketing-grade)
  const kpis = [
    {
      id: "value",
      label: "Value Delivered",
      value: "$8.2M",
      sub: "last 90 days",
      delta: "+12%",
      trend: [20, 24, 28, 36, 40, 44, 48, 56, 60, 66, 72, 78],
    },
    {
      id: "deploy",
      label: "Deployment Frequency",
      value: "2.3 min",
      sub: "avg to ship",
      delta: "faster",
      trend: [70, 62, 60, 55, 50, 48, 46, 44, 43, 42, 40, 38],
    },
    {
      id: "quality",
      label: "Quality & Reliability",
      value: "98/100",
      sub: "release quality · MTTR 2.1h",
      trend: [86, 88, 90, 91, 92, 94, 95, 96, 96, 97, 98, 98],
    },
    {
      id: "outcomes",
      label: "Client Outcomes",
      value: "350%",
      sub: "avg ROI · Satisfaction 98%",
      trend: [40, 42, 45, 48, 50, 55, 58, 62, 68, 74, 80, 85],
    },
  ];

  const chartDelivered = [22, 28, 35, 40, 46, 52, 58, 66, 72, 78, 83, 88];
  const chartTarget =    [28, 32, 40, 46, 52, 58, 64, 70, 76, 82, 86, 90];

  const toPath = (vals: number[], width: number, height: number) => {
    const step = width / (vals.length - 1);
    return vals
      .map((v, i) => {
        const x = i * step;
        const y = height - (v / 100) * height;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-20">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Hero Text Content - centered */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow Text */}
          <p className="text-sm text-purple-600 uppercase mb-6 tracking-wider font-semibold">
            ⚡ Continuous Innovation, Exponential Growth
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
            TRANSFORM YOUR BUSINESS WITH{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-POWERED
            </span>
            <br />
            CUSTOM SOFTWARE SOLUTIONS
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            We build intelligent, scalable software that drives growth. From AI/ML solutions to full-stack development, 
            we turn your vision into reality with cutting-edge technology and expert craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full transition-all duration-200"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <PlayCircle className="w-5 h-5" />
              View Our Work
            </a>
          </div>
        </div>

        {/* Trusted by - moved to top of visual */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">
            Trusted by 500+ Global Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {["TechFlow", "MobileFirst", "CloudScale", "OptiFlow", "DataSync", "InnovateLab"].map((company) => (
              <div
                key={company}
                className="text-gray-500 font-bold text-lg hover:text-purple-600 transition-colors duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual - centered */}
        <div className="mt-16 relative">
          <div className="relative max-w-6xl mx-auto flex justify-center">
            <HeroDashboard />
          </div>
        </div>

      </div>

      {/* Scroll indicator removed by request */}
    </section>
  );
}
