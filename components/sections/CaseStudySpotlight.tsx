"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CaseStudySpotlight() {
  return (
    <Section background="default">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-eyebrow text-accent-cyan uppercase mb-4">
            SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Real Results That Inspire
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:pr-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-3xl" />
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-gray-200 flex items-center justify-center relative overflow-hidden p-6">
                {/* Inline multi-series analytics chart */}
                <svg viewBox="0 0 560 300" className="w-full h-full">
                  <defs>
                    <linearGradient id="rev-stroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="rev-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  {(() => {
                    const w = 560;
                    const h = 260; // leave top space for legend
                    const ox = 20, oy = 280; // origin bottom-left
                    const weeks = 12;
                    const step = (w - ox * 2) / (weeks - 1);
                    // normalized 0..1 series
                    const revenue = [0.13,0.2,0.27,0.33,0.4,0.5,0.6,0.7,0.8,0.9,0.97,1]; // 300% growth normalized
                    const time =    [0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.88,0.91,0.93,0.95]; // 95% target
                    const users =   [0.1,0.15,0.2,0.3,0.35,0.45,0.55,0.65,0.75,0.85,0.92,1]; // 10k normalized
                    const to = (arr: number[]) => arr.map((v,i)=>({x: ox + i*step, y: oy - v*h}));
                    const path = (pts: {x:number;y:number}[]) =>
                      pts.map((p,i)=>`${i===0?"M":"L"} ${p.x} ${p.y}`).join(" ");
                    const revPts = to(revenue);
                    const timePts = to(time);
                    const userPts = to(users);
                    return (
                      <g>
                        {/* area under revenue */}
                        <path d={`${path(revPts)} L ${ox + (weeks-1)*step} ${oy} L ${ox} ${oy} Z`} fill="url(#rev-fill)" />
                        {/* target guide for time saved (dashed) */}
                        <path d={path(to(Array(weeks).fill(0.95)))} stroke="rgba(0,0,0,0.25)" strokeDasharray="6 6" strokeWidth="2" fill="none" />
                        {/* lines */}
                        <path d={path(revPts)} stroke="url(#rev-stroke)" strokeWidth="3" fill="none" />
                        <path d={path(timePts)} stroke="#10B981" strokeWidth="2.5" fill="none" />
                        <path d={path(userPts)} stroke="#EC4899" strokeWidth="2.5" fill="none" />
                        {/* dots */}
                        {revPts.map((p,i)=>(<circle key={`rd${i}`} cx={p.x} cy={p.y} r="3" fill="#06B6D4" stroke="white" strokeWidth="1.5" />))}
                        {timePts.map((p,i)=>(<circle key={`td${i}`} cx={p.x} cy={p.y} r="2.5" fill="#10B981" stroke="white" strokeWidth="1.2" />))}
                        {userPts.map((p,i)=>(<circle key={`ud${i}`} cx={p.x} cy={p.y} r="2.5" fill="#EC4899" stroke="white" strokeWidth="1.2" />))}
                        {/* legend */}
                        <g>
                          <rect x="24" y="8" rx="8" ry="8" width="190" height="46" fill="white" opacity="0.9" />
                          <g transform="translate(36,22)">
                            <rect width="10" height="10" fill="url(#rev-stroke)" rx="2" />
                            <text x="16" y="10" className="fill-gray-700 text-[12px]">Revenue Growth (300%)</text>
                          </g>
                          <g transform="translate(36,38)">
                            <rect width="10" height="10" fill="#10B981" rx="2" />
                            <text x="16" y="10" className="fill-gray-700 text-[12px]">Time Saved (95%)</text>
                          </g>
                          <g transform="translate(200,22)">
                            <rect width="10" height="10" fill="#EC4899" rx="2" />
                            <text x="16" y="10" className="fill-gray-700 text-[12px]">Active Users (10K+)</text>
                          </g>
                        </g>
                      </g>
                    );
                  })()}
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pl-6"
          >
            {/* Client Badge */}
            <div className="inline-block bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-purple-700 font-semibold">TechFlow Inc • SaaS • Enterprise</span>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How TechFlow 3x&apos;d Their Revenue with AI-Powered Analytics
            </h3>

            {/* Challenge */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">The Challenge</h4>
              <p className="text-gray-600 leading-relaxed">
                TechFlow struggled with fragmented data sources and manual reporting processes that took weeks to complete, hindering their ability to make data-driven decisions.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Our Solution</h4>
              <p className="text-gray-600 leading-relaxed">
                We built a custom AI-powered analytics platform that unified all data sources, automated reporting, and provided real-time predictive insights using machine learning.
              </p>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-2xl font-bold">300%</span>
                </div>
                <p className="text-xs text-gray-700 font-medium">Revenue Growth</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                <div className="flex items-center gap-2 text-purple-600 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-xs text-gray-700 font-medium">Time Saved</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4 border-2 border-pink-200">
                <div className="flex items-center gap-2 text-pink-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-xs text-gray-700 font-medium">Active Users</p>
              </div>
            </div>

            <Link href="/case-studies/techflow">
              <Button variant="primary" icon={ArrowRight}>
                Read Full Case Study
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

