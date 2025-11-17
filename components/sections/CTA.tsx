"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: "#B7A3E3" }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let&apos;s build something amazing together. Start your digital transformation journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-white border-2 border-white/70 hover:bg-white/10">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free consultation</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No commitment required</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Response in 24 hours</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

