import Link from "next/link";
import { ArrowRight, Check, Rocket, TrendingUp, Settings, Users } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Digital Transformation Services | KaizenSpark Tech",
  description: "Comprehensive strategy and execution to modernize your business operations and unlock new growth opportunities.",
};

const capabilities = [
  {
    icon: Rocket,
    title: "Process Automation",
    description: "Streamline operations and eliminate manual tasks with intelligent automation",
  },
  {
    icon: TrendingUp,
    title: "Legacy Modernization",
    description: "Transform outdated systems into modern, efficient digital solutions",
  },
  {
    icon: Settings,
    title: "Digital Strategy",
    description: "Comprehensive roadmap for your digital transformation journey",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Guide your team through digital adoption and cultural transformation",
  },
];

const process = [
  {
    step: "01",
    title: "Assessment & Vision",
    description: "Evaluate current state and define digital transformation vision and goals",
    duration: "2-3 weeks",
    deliverables: ["Digital maturity assessment", "Vision statement", "Gap analysis", "ROI projections"],
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description: "Create comprehensive strategy and phased implementation roadmap",
    duration: "3-4 weeks",
    deliverables: ["Transformation strategy", "Implementation roadmap", "Budget planning", "Risk mitigation plan"],
  },
  {
    step: "03",
    title: "Pilot & Validation",
    description: "Launch pilot projects to validate approach and demonstrate value",
    duration: "6-8 weeks",
    deliverables: ["Pilot implementation", "Performance metrics", "Lessons learned", "Stakeholder feedback"],
  },
  {
    step: "04",
    title: "Scale & Implementation",
    description: "Roll out transformation initiatives across the organization",
    duration: "3-12 months",
    deliverables: ["Full-scale implementation", "Training programs", "Process documentation", "Performance dashboards"],
  },
  {
    step: "05",
    title: "Optimize & Evolve",
    description: "Continuous improvement and adaptation to new opportunities",
    duration: "Ongoing",
    deliverables: ["Performance optimization", "New capabilities", "Best practices", "Innovation initiatives"],
  },
];

const technologies = [
  "Process Mining", "RPA", "Low-Code Platforms", "API Integration", "Data Analytics", "Cloud Services",
  "AI/ML", "IoT", "Blockchain", "DevOps", "Microservices", "Digital Twins",
];

const caseStudies = [
  {
    client: "ManufactureCo",
    industry: "Manufacturing",
    title: "Industry 4.0 Transformation",
    results: ["60% productivity increase", "40% cost reduction", "Real-time visibility"],
    image: "/case-studies/manufactureco.jpg",
  },
  {
    client: "RetailPlus",
    industry: "Retail",
    title: "Omnichannel Digital Transformation",
    results: ["150% online sales growth", "Unified customer experience", "90% faster checkout"],
    image: "/case-studies/retailplus.jpg",
  },
];

const faqs = [
  {
    question: "What is digital transformation?",
    answer: "Digital transformation is the strategic process of leveraging digital technologies to fundamentally reimagine business processes, culture, and customer experiences. It goes beyond simple digitization—it's about creating new value, improving efficiency, and building competitive advantage in the digital age.",
  },
  {
    question: "How long does digital transformation take?",
    answer: "Digital transformation is a journey, not a destination. Initial pilots can show results in 2-3 months, comprehensive transformations typically take 1-3 years. We use phased approaches to deliver value continuously throughout the journey.",
  },
  {
    question: "How much does digital transformation cost?",
    answer: "Costs vary widely based on scope, organization size, and complexity. Investments typically range from $100,000 for focused initiatives to millions for enterprise-wide transformations. We help you prioritize initiatives for maximum ROI.",
  },
  {
    question: "What are the biggest challenges in digital transformation?",
    answer: "Common challenges include resistance to change, legacy systems integration, skill gaps, and unclear strategy. Our comprehensive approach addresses these through change management, training, phased implementation, and strong leadership alignment.",
  },
  {
    question: "Do we need to replace all our existing systems?",
    answer: "Not necessarily! We assess your current systems and recommend modernization approaches - from integration and enhancement to selective replacement. The goal is to maximize value from existing investments while adding new capabilities.",
  },
  {
    question: "How do you measure digital transformation success?",
    answer: "Success metrics vary by goals but typically include efficiency gains, cost reduction, revenue growth, customer satisfaction, employee productivity, and time-to-market improvements. We establish clear KPIs and track progress throughout the journey.",
  },
];

export default function DigitalTransformationPage() {
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
            <span className="text-purple-600 font-semibold">Digital Transformation</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Transformation
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive strategy and execution to modernize your business operations and unlock new growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Start Your Transformation
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
            From strategy to execution, we guide your organization through complete digital transformation - 
            modernizing processes, adopting new technologies, and creating a culture of continuous innovation.
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
          title="Transformation Journey"
          description="A structured approach to successful digital transformation"
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
          title="Digital Technologies"
          description="Cutting-edge tools and platforms for transformation"
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
          title="Transformation in Action"
          description="Real results from digital transformation initiatives"
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
          description="Everything you need to know about digital transformation"
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s discuss your vision and create a roadmap for digital success
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




