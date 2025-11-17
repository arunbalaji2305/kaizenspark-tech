"use client";

import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-violet-600 to-purple-900
        text-white
      "
      aria-labelledby="cta-title"
    >
      {/* soft radial glow */}
      <div
        className="pointer-events-none absolute -inset-x-10 -top-48 h-96 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden="true"
      />
      {/* subtle inner divider glow to ease into footer */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-10 bg-gradient-to-b from-transparent to-purple-950/70" />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <h2
          id="cta-title"
          className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/90">
          Let&apos;s build something amazing together. Start your digital transformation journey today.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact"
            className="
              inline-flex items-center gap-2 rounded-full
              bg-gradient-to-r from-indigo-500 to-indigo-400
              px-6 py-3 text-base font-semibold text-white
              shadow-[0_8px_30px_rgba(0,0,0,0.2)]
              transition will-change-transform hover:scale-[1.02]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
          >
            Start Your Project <ArrowRight size={18} />
          </a>

          <a
            href="/contact#book"
            className="
              inline-flex items-center gap-2 rounded-full border border-white/30
              bg-white/5 px-6 py-3 text-base font-semibold text-white/95
              backdrop-blur transition hover:bg-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            "
          >
            <CalendarDays size={18} /> Schedule a Call
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/85">
          <Badge>Free consultation</Badge>
          <Dot />
          <Badge>No commitment required</Badge>
          <Dot />
          <Badge>Response in 24 hours</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 size={16} className="text-indigo-300" />
      <span>{children}</span>
    </span>
  );
}

function Dot() {
  return <span className="text-white/40">•</span>;
}


