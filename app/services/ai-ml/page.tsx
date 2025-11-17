import Link from "next/link";
import { ArrowRight, Check, Brain, Sparkles, TrendingUp, Target } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "AI/ML Solutions | KaizenSpark Tech",
  description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and stay ahead of the competition.",
};

const capabilities = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes with advanced machine learning models",
  },
  {
    icon: Sparkles,
    title: "Natural Language Processing",
    description: "Extract insights from text, automate communication, and understand sentiment",
  },
  {
    icon: Target,
    title: "Computer Vision",
    description: "Image recognition, object detection, and visual quality control",
  },
  {
    icon: TrendingUp,
    title: "Deep Learning",
    description: "Complex pattern recognition and decision-making systems",
  },
];

const process = [
  {
    step: "01",
    title: "Problem Definition",
    description: "Identify use cases and define success metrics for AI implementation",
    duration: "1 week",
    deliverables: ["Use case analysis", "Success metrics", "Data assessment", "ROI projection"],
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Collect, clean, and prepare data for model training",
    duration: "2-4 weeks",
    deliverables: ["Data pipeline", "Feature engineering", "Data validation", "Training datasets"],
  },
  {
    step: "03",
    title: "Model Development",
    description: "Build, train, and optimize machine learning models",
    duration: "4-8 weeks",
    deliverables: ["Trained models", "Performance metrics", "Model documentation", "Test results"],
  },
  {
    step: "04",
    title: "Integration & Deployment",
    description: "Deploy models to production with monitoring and scaling",
    duration: "2-3 weeks",
    deliverables: ["Production API", "Monitoring dashboard", "Deployment guide", "Performance tracking"],
  },
  {
    step: "05",
    title: "Continuous Learning",
    description: "Monitor, retrain, and improve models based on new data",
    duration: "Ongoing",
    deliverables: ["Model updates", "Performance reports", "A/B testing", "Optimization"],
  },
];

const technologies = [
  "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain", "Anthropic",
  "scikit-learn", "Keras", "FastAPI", "MLflow", "Weights & Biases", "Azure AI",
];

const caseStudies = [
  {
    client: "RetailCorp",
    industry: "Retail",
    title: "AI-Powered Demand Forecasting",
    results: ["40% reduction in inventory costs", "95% forecast accuracy", "30% sales increase"],
    image: "/case-studies/retailcorp.jpg",
  },
  {
    client: "HealthTech",
    industry: "Healthcare",
    title: "Medical Image Analysis",
    results: ["98% diagnostic accuracy", "60% faster analysis", "HIPAA compliant"],
    image: "/case-studies/healthtech.jpg",
  },
];

const faqs = [
  {
    question: "What's the difference between AI and ML?",
    answer: "AI (Artificial Intelligence) is the broader concept of machines being able to carry out tasks intelligently. ML (Machine Learning) is a subset of AI that enables machines to learn from data without explicit programming.",
  },
  {
    question: "Do I need a lot of data for AI/ML projects?",
    answer: "It depends on the use case. While more data generally leads to better models, we can leverage transfer learning, pre-trained models, and data augmentation techniques to work with smaller datasets.",
  },
  {
    question: "How long does it take to see ROI from AI implementation?",
    answer: "ROI timelines vary by project. Simple automation tasks can show returns in 2-3 months, while complex predictive models might take 6-12 months to fully optimize and demonstrate significant business impact.",
  },
  {
    question: "Is AI/ML secure and compliant?",
    answer: "Yes! We implement security best practices, data encryption, privacy-preserving techniques, and ensure compliance with regulations like GDPR, HIPAA, and industry-specific standards.",
  },
  {
    question: "Can you integrate AI with our existing systems?",
    answer: "Absolutely! We specialize in integrating AI/ML solutions with existing infrastructure through APIs, microservices, and various integration patterns to ensure seamless adoption.",
  },
  {
    question: "What if the AI model accuracy decreases over time?",
    answer: "This is called model drift. We implement continuous monitoring and automated retraining pipelines to maintain model performance and adapt to changing patterns in your data.",
  },
];

export default function AIMLPage() {
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
            <span className="text-purple-600 font-semibold">AI/ML Solutions</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI & Machine Learning
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Start Your AI Journey
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
            From predictive analytics to natural language processing, our AI/ML solutions help you make better decisions, 
            automate complex tasks, and unlock insights hidden in your data.
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
          title="AI Implementation Journey"
          description="A proven methodology from problem to production"
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
          title="AI/ML Technologies"
          description="Cutting-edge tools and frameworks for intelligent solutions"
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
          title="AI/ML in Action"
          description="Real-world results from AI implementations"
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
          description="Everything you need to know about AI/ML solutions"
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s discuss how AI and machine learning can transform your business
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




