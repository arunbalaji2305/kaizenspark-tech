"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <Section background="default">
      <SectionHeader
        eyebrow="TESTIMONIALS"
        title="What Our Raving Fans Say"
        description="Real results from real clients who transformed their businesses with KaizenSpark"
      />

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl shadow-xl p-8 md:p-12"
              style={{
                borderWidth: 2,
                borderColor: "#B7A3E3",
                background:
                  "linear-gradient(180deg, #EBD6FB 0%, #FFFFFF 85%)",
              }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 mb-6" style={{ color: "#B7A3E3" }} />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500 drop-shadow" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-800 font-semibold mb-8 leading-relaxed">
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-gray-500">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-purple-600 font-medium mt-1">
                    {currentTestimonial.company}
                  </p>
                </div>

                {/* Remove empty blurred box; show compact pill instead */}
                <div
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "#EBD6FB",
                    border: "1px solid #B7A3E3",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-md"
                    style={{ backgroundColor: "#F3E7FF", border: "1px solid #B7A3E3" }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#6B4BBE" }}>
                    {currentTestimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #B7A3E3",
                color: "#3F3F46",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8" : ""
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? "#B7A3E3" : "#E2E8F0",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: "#FFFFFF",
                border: "2px solid #B7A3E3",
                color: "#3F3F46",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* All Testimonials Preview (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl border transition-all duration-300 text-left"
              style={
                index === currentIndex
                  ? { backgroundColor: "#EBD6FB", borderColor: "#B7A3E3" }
                  : { backgroundColor: "#F6ECFF", borderColor: "#EBD6FB" }
              }
            >
              <p className="text-sm mb-2" style={{ color: "#6B4BBE" }}>
                {testimonial.company}
              </p>
              <p className="font-medium text-sm text-gray-800">{testimonial.author}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </Section>
  );
}

