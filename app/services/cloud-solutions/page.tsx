import Link from "next/link";
import { ArrowRight, Check, Cloud, Shield, Zap, DollarSign } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Cloud Solutions | KaizenSpark Tech",
  description: "Scalable, secure, and cost-effective cloud infrastructure and migration services on AWS, Azure, and Google Cloud.",
};

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless migration from on-premise to cloud with zero downtime",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and industry compliance standards",
  },
  {
    icon: Zap,
    title: "DevOps Automation",
    description: "CI/CD pipelines and infrastructure as code for faster deployments",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Reduce infrastructure costs while improving performance",
  },
];

const process = [
  {
    step: "01",
    title: "Assessment & Strategy",
    description: "Evaluate current infrastructure and define cloud migration roadmap",
    duration: "1-2 weeks",
    deliverables: ["Infrastructure audit", "Cloud strategy", "Cost analysis", "Risk assessment"],
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Design scalable, secure cloud architecture tailored to your needs",
    duration: "2-3 weeks",
    deliverables: ["Architecture diagram", "Security design", "Disaster recovery plan", "Scalability plan"],
  },
  {
    step: "03",
    title: "Migration & Implementation",
    description: "Execute cloud migration with minimal disruption to operations",
    duration: "4-12 weeks",
    deliverables: ["Cloud infrastructure", "Data migration", "Application deployment", "Testing reports"],
  },
  {
    step: "04",
    title: "Optimization & Training",
    description: "Fine-tune performance and train your team on cloud operations",
    duration: "2-3 weeks",
    deliverables: ["Performance optimization", "Team training", "Documentation", "Best practices guide"],
  },
  {
    step: "05",
    title: "Managed Services",
    description: "Ongoing monitoring, maintenance, and continuous improvement",
    duration: "Ongoing",
    deliverables: ["24/7 monitoring", "Security updates", "Performance optimization", "Cost management"],
  },
];

const technologies = [
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
  "Jenkins", "GitLab CI", "CloudFormation", "Lambda", "S3", "RDS",
];

const caseStudies = [
  {
    client: "CloudScale",
    industry: "SaaS",
    title: "AWS Cloud Migration",
    results: ["40% cost reduction", "Zero downtime migration", "3x performance boost"],
    image: "/case-studies/cloudscale.jpg",
  },
  {
    client: "DataCorp",
    industry: "Enterprise",
    title: "Multi-Cloud Infrastructure",
    results: ["99.99% uptime", "50% faster deployments", "SOC 2 compliant"],
    image: "/case-studies/datacorp.jpg",
  },
];

const faqs = [
  {
    question: "Which cloud platform should I choose?",
    answer: "The choice depends on your specific needs, existing tech stack, and business requirements. AWS offers the most comprehensive service portfolio, Azure integrates seamlessly with Microsoft products, and Google Cloud excels in data analytics and AI. We'll help you choose the best fit for your business.",
  },
  {
    question: "How long does cloud migration take?",
    answer: "Timeline varies based on infrastructure complexity and data volume. Simple migrations take 4-8 weeks, while complex enterprise migrations can take 3-6 months. We use phased approaches to minimize disruption.",
  },
  {
    question: "Will there be downtime during migration?",
    answer: "We use proven strategies like blue-green deployments and gradual migration to minimize or eliminate downtime. For most projects, we achieve zero-downtime migrations through careful planning and execution.",
  },
  {
    question: "How much can I save by moving to the cloud?",
    answer: "Most organizations save 20-40% on infrastructure costs after cloud migration. Savings come from reduced hardware costs, pay-as-you-go pricing, better resource utilization, and reduced maintenance overhead.",
  },
  {
    question: "Is cloud infrastructure secure?",
    answer: "Yes! Major cloud providers offer enterprise-grade security, and we implement additional layers including encryption, access controls, network security, and compliance certifications to ensure your data is protected.",
  },
  {
    question: "Do you provide ongoing cloud management?",
    answer: "Yes! We offer managed cloud services including 24/7 monitoring, performance optimization, security updates, cost management, and incident response to keep your cloud infrastructure running smoothly.",
  },
];

export default function CloudSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-40 pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-purple-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-purple-600 font-semibold">Cloud Solutions</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Solutions
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">& Migration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalable, secure, and cost-effective cloud infrastructure and migration services on AWS, Azure, and Google Cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Start Cloud Journey
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
            From cloud migration to managed services, we help you leverage the power of cloud computing 
            to scale your business, reduce costs, and improve operational efficiency.
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
          title="Cloud Migration Journey"
          description="A proven approach for successful cloud transformation"
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
          title="Cloud Technologies"
          description="Leading cloud platforms and tools we work with"
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
          title="Cloud Solutions in Action"
          description="Real results from cloud transformations"
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
          description="Everything you need to know about cloud solutions"
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s discuss your cloud strategy and start your transformation journey
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




