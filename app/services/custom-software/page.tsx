import Link from "next/link";
import { ArrowRight, Check, Code2, Zap, Shield, TrendingUp } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Custom Software Development Services | KaizenSpark Tech",
  description: "Tailored software solutions built from the ground up to perfectly match your unique business requirements and scale with your growth.",
};

const capabilities = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end software development from database to user interface",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quick MVPs to validate ideas and iterate based on feedback",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security standards and compliance certifications",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to handle growth from day one to millions of users",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your business needs, goals, and challenges to create a comprehensive project roadmap.",
    duration: "1-2 weeks",
    deliverables: ["Requirements document", "Technical specification", "Project timeline", "Cost estimate"],
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our designers and architects create user-centered designs and robust technical architecture.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "System architecture", "Database schema", "API specifications"],
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development sprints with continuous testing and quality assurance throughout.",
    duration: "8-16 weeks",
    deliverables: ["Working software", "Test reports", "Documentation", "Source code"],
  },
  {
    step: "04",
    title: "Deployment & Launch",
    description: "Seamless deployment to production with zero downtime and comprehensive monitoring.",
    duration: "1-2 weeks",
    deliverables: ["Production deployment", "Monitoring setup", "Training materials", "Support documentation"],
  },
  {
    step: "05",
    title: "Support & Scale",
    description: "Ongoing maintenance, support, and enhancements to ensure continued success.",
    duration: "Ongoing",
    deliverables: ["Bug fixes", "Feature updates", "Performance optimization", "24/7 support"],
  },
];

const technologies = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL",
  "AWS", "Docker", "Kubernetes", "GraphQL", "Redis", "Microservices",
];

const caseStudies = [
  {
    client: "TechFlow Inc",
    industry: "SaaS",
    title: "Enterprise Analytics Platform",
    results: ["300% revenue growth", "95% time saved", "10K+ active users"],
    image: "/case-studies/techflow.jpg",
  },
  {
    client: "MobileFirst",
    industry: "E-commerce",
    title: "Multi-vendor Marketplace",
    results: ["$2M+ in transactions", "50K+ vendors", "99.9% uptime"],
    image: "/case-studies/mobilefirst.jpg",
  },
];

const faqs = [
  {
    question: "How long does custom software development take?",
    answer: "Timeline varies based on project complexity. A typical MVP takes 3-4 months, while enterprise solutions can take 6-12 months. We use agile methodology to deliver working software in 2-week sprints.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies including React, Next.js, Node.js, Python, AWS, and more. The technology stack is chosen based on your specific requirements and long-term goals.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer comprehensive support and maintenance packages including bug fixes, updates, monitoring, and enhancements to ensure your software continues to perform optimally.",
  },
  {
    question: "How much does custom software development cost?",
    answer: "Costs vary based on complexity, features, and timeline. Projects typically range from $25,000 to $500,000+. We provide detailed estimates after understanding your requirements.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We can augment your team, work alongside your developers, or handle the entire project. We're flexible and adapt to your preferred collaboration model.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have expertise across healthcare, fintech, e-commerce, SaaS, education, and more. Our team includes domain experts who understand industry-specific requirements and compliance.",
  },
];

export default function CustomSoftwarePage() {
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
            <span className="text-purple-600 font-semibold">Custom Software Development</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Software
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tailored solutions built from the ground up to perfectly match your unique business requirements and scale with your growth.
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
            Whether you need to digitize manual processes, build a new product from scratch, or modernize legacy systems, 
            our custom software development services deliver solutions that drive real business value and competitive advantage.
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
          description="A proven methodology that delivers results on time and on budget"
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
          description="Modern, proven tech stack for scalable and maintainable solutions"
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
          title="Custom Software in Action"
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
          description="Everything you need to know about custom software development"
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
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s discuss your project and create software that perfectly fits your needs
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



