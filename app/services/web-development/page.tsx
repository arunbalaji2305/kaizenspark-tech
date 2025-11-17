import Link from "next/link";
import { ArrowRight, Check, Globe, Zap, Shield, Smartphone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Web Development Services | KaizenSpark Tech",
  description: "Modern, responsive, and high-performing web applications that deliver exceptional user experiences across all devices.",
};

const capabilities = [
  {
    icon: Globe,
    title: "Modern Web Apps",
    description: "React, Next.js, and cutting-edge frameworks for blazing-fast applications",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast load times and smooth interactions",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security and infrastructure that grows with you",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Perfect experience on every device, from mobile to desktop",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understand your goals, users, and requirements to create a solid plan",
    duration: "1 week",
    deliverables: ["Project roadmap", "Technical specifications", "User research", "Wireframes"],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create beautiful, user-centered designs and interactive prototypes",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Design system", "Interactive prototypes", "User flows"],
  },
  {
    step: "03",
    title: "Development",
    description: "Build your web application with clean, maintainable code",
    duration: "6-12 weeks",
    deliverables: ["Production code", "API integration", "Testing suite", "Documentation"],
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Comprehensive testing and smooth deployment to production",
    duration: "1-2 weeks",
    deliverables: ["QA testing", "Performance optimization", "Live deployment", "Launch support"],
  },
  {
    step: "05",
    title: "Support & Growth",
    description: "Ongoing maintenance, updates, and feature enhancements",
    duration: "Ongoing",
    deliverables: ["Bug fixes", "Feature updates", "Performance monitoring", "Security patches"],
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular",
  "Node.js", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Vercel",
];

const caseStudies = [
  {
    client: "EcomPlus",
    industry: "E-commerce",
    title: "High-Performance Shopping Platform",
    results: ["3x faster page loads", "45% conversion increase", "1M+ monthly users"],
    image: "/case-studies/ecomplus.jpg",
  },
  {
    client: "FinanceHub",
    industry: "FinTech",
    title: "Secure Financial Dashboard",
    results: ["Bank-grade security", "Real-time updates", "99.99% uptime"],
    image: "/case-studies/financehub.jpg",
  },
];

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer: "We primarily use React and Next.js for modern web applications, along with TypeScript for type safety, Tailwind CSS for styling, and various backend technologies depending on project requirements.",
  },
  {
    question: "How long does it take to build a web application?",
    answer: "Timeline varies based on complexity. A simple website takes 4-6 weeks, a standard web app takes 8-12 weeks, and complex enterprise applications can take 3-6 months or more.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our web applications are fully responsive and optimized for all devices - from smartphones to tablets to desktops. Mobile-first design is our standard approach.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes! We offer managed hosting solutions and maintenance packages including updates, security patches, backups, and ongoing support to keep your web application running smoothly.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Yes, we specialize in integrating with third-party services, APIs, databases, and legacy systems. We can work with your existing infrastructure and create seamless connections.",
  },
  {
    question: "What about SEO and performance?",
    answer: "SEO and performance are built into every project. We use Next.js for server-side rendering, implement proper meta tags, optimize images, and follow best practices for Core Web Vitals.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-purple-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-purple-600 font-semibold">Web Development</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Development
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Modern, responsive, and high-performing web applications that deliver exceptional user experiences across all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From landing pages to complex web applications, we create digital experiences that engage users, 
            drive conversions, and help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 shadow-sm rounded-2xl p-8 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-accent-purple flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="dark">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="From Concept to Launch"
          description="A streamlined process for delivering exceptional web experiences"
        />

        <div className="space-y-8">
          {process.map((phase, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 shadow-sm rounded-2xl p-8 hover:border-purple-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-gradient">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                      {phase.title}
                    </h3>
                    <span className="text-purple-600 font-semibold">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-3">Deliverables:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <Section>
        <SectionHeader
          title="Technologies We Use"
          description="Modern tech stack for fast, scalable web applications"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 bg-purple-50 border-2 border-purple-200 rounded-full text-purple-700 hover:bg-purple-100 hover:border-purple-300 transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section background="dark" id="case-studies">
        <SectionHeader
          eyebrow="SUCCESS STORIES"
          title="Web Development in Action"
          description="Real results from real projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-purple-600 font-semibold">Case Study Visual</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span>{study.client}</span>
                  <span>•</span>
                  <span>{study.industry}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-success mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.client.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about web development"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border-2 border-gray-200 shadow-sm rounded-xl p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
            >
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <span className="text-purple-600 text-2xl group-open:rotate-45 transition-transform duration-300">
                  +
                </span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s create a web experience that your users will love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}




