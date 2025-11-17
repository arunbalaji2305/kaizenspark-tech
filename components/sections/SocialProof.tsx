"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { STATS } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

const StatCounter = ({ end, suffix }: { end: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const numericValue = parseInt(end.replace(/\D/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              setHasAnimated(true);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      {end.includes('+') ? `${count}+` : count}
      {suffix}
    </div>
  );
};

export default function SocialProof() {
  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Winning Organizations Choose KaizenSpark
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          Trusted by industry leaders across the globe
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <StatCounter end={stat.number} suffix={stat.suffix} />
            <p className="text-gray-600 mt-4 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

