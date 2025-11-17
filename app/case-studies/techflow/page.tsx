import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, Users, Clock, TrendingUp, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "TechFlow Case Study - 300% Revenue Growth | KaizenSpark Tech",
  description: "How we helped TechFlow achieve 300% revenue growth with an AI-powered analytics platform.",
};

const projectDetails = {
  client: "TechFlow Inc",
  industry: "SaaS / Enterprise Software",
  services: ["Custom Software Development", "AI/ML Solutions", "Cloud Architecture"],
  duration: "6 months",
  teamSize: "8 professionals",
  technologies: [
    "React", "Next.js", "Node.js", "Python", "TensorFlow", 
    "PostgreSQL", "AWS", "Docker", "Kubernetes", "GraphQL"
  ],
};

const challenges = [
  "Fragmented data sources across multiple systems making it impossible to get a unified view",
  "Manual reporting processes taking weeks to complete, hindering decision-making",
  "No predictive capabilities to forecast trends or identify opportunities",
  "Scalability issues with existing infrastructure unable to handle growth",
  "Poor data quality and inconsistencies across different departments",
];

const solutions = [
  {
    title: "Unified Data Platform",
    description: "Built a centralized data warehouse that automatically ingests and normalizes data from all sources in real-time.",
  },
  {
    title: "AI-Powered Analytics",
    description: "Developed machine learning models for predictive analytics, anomaly detection, and automated insights generation.",
  },
  {
    title: "Intuitive Dashboard",
    description: "Created a beautiful, user-friendly dashboard with customizable reports and real-time visualizations.",
  },
  {
    title: "Scalable Architecture",
    description: "Implemented microservices architecture on AWS with auto-scaling to handle growing data volumes.",
  },
];

const results = [
  {
    metric: "300%",
    label: "Revenue Growth",
    description: "Achieved through data-driven decision making and identifying new opportunities",
    icon: TrendingUp,
  },
  {
    metric: "95%",
    label: "Time Saved",
    description: "Automated reporting reduced time from weeks to minutes",
    icon: Clock,
  },
  {
    metric: "10,000+",
    label: "Active Users",
    description: "Platform adopted across entire organization and customer base",
    icon: Users,
  },
  {
    metric: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade reliability with 24/7 monitoring and support",
    icon: Check,
  },
];

const features = [
  "Real-time data synchronization from 20+ sources",
  "Predictive analytics with 85% accuracy",
  "Customizable dashboards and reports",
  "Automated anomaly detection and alerts",
  "Natural language query interface",
  "Role-based access control and security",
  "Mobile-responsive design",
  "API for third-party integrations",
];

const testimonial = {
  quote: "KaizenSpark transformed our entire tech infrastructure. Their AI solutions helped us increase efficiency by 300% and reduce operational costs significantly. The team was professional, responsive, and truly understood our business needs.",
  author: "Sarah Chen",
  role: "CTO",
  company: "TechFlow Inc",
};

export default function TechFlowCaseStudy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-white">TechFlow</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-900/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-gray-300">
                  {projectDetails.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How TechFlow Achieved
                <span className="block text-gradient">300% Revenue Growth</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming fragmented data into actionable insights with AI-powered analytics
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Start Your Project
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-purple/30 blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary-900/80 to-primary-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <div className="aspect-video bg-gradient-to-br from-primary-900 to-primary-950 rounded-lg border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gradient mb-2">300%</div>
                    <p className="text-gray-400">Revenue Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          <div>
            <p className="text-gray-400 text-sm mb-2">Client</p>
            <p className="text-white font-semibold">{projectDetails.client}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Industry</p>
            <p className="text-white font-semibold">{projectDetails.industry}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Duration</p>
            <p className="text-white font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {projectDetails.duration}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Team Size</p>
            <p className="text-white font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" />
              {projectDetails.teamSize}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-gray-400 text-sm mb-2">Services</p>
            <div className="flex flex-wrap gap-2">
              {projectDetails.services.map((service) => (
                <span key={service} className="text-xs px-2 py-1 bg-primary-900/50 border border-white/10 rounded text-gray-300">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {projectDetails.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-900/30 border border-white/10 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* Challenge */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Challenge
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            TechFlow was experiencing rapid growth but struggled with data fragmentation across multiple systems. 
            Their manual reporting processes were time-consuming and error-prone, making it difficult to make 
            data-driven decisions quickly. They needed a comprehensive solution that would:
          </p>
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
                <div className="w-6 h-6 rounded-full bg-error/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-error text-sm">✕</span>
                </div>
                <span className="leading-relaxed">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Solution
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            We designed and built a comprehensive AI-powered analytics platform that unified all data sources, 
            automated reporting, and provided real-time predictive insights. Our approach included:
          </p>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-primary-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Key Features Delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section background="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            The Results
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            The platform exceeded expectations, delivering measurable business impact across the organization
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className="bg-primary-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-accent-cyan mx-auto mb-4" />
                  <div className="text-5xl font-bold text-gradient mb-2">
                    {result.metric}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {result.label}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-900/80 to-primary-900/40 backdrop-blur-xl rounded-2xl border border-white/10 p-12">
            <div className="text-6xl text-accent-cyan mb-6">&quot;</div>
            <blockquote className="text-2xl text-white font-medium mb-8 leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="text-lg font-semibold text-white">{testimonial.author}</p>
              <p className="text-gray-400">{testimonial.role}</p>
              <p className="text-accent-cyan font-medium mt-1">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Next Steps CTA */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how we can transform your business with intelligent technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Start Your Project
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="secondary" size="lg" icon={ArrowLeft} iconPosition="left">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

