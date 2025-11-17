import Link from "next/link";
import { ArrowRight, Check, Smartphone, Zap, Users, BarChart } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Mobile App Development | KaizenSpark Tech",
  description: "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.",
};

const capabilities = [
  {
    icon: Smartphone,
    title: "Native & Cross-Platform",
    description: "Build for iOS and Android with native or cross-platform frameworks",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Smooth, fast, and responsive apps that users love",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Intuitive interfaces that follow platform-specific guidelines",
  },
  {
    icon: BarChart,
    title: "Analytics Integration",
    description: "Track user behavior and make data-driven decisions",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Define your app's purpose, target audience, and key features",
    duration: "1-2 weeks",
    deliverables: ["Market research", "Feature list", "User personas", "Platform strategy"],
  },
  {
    step: "02",
    title: "UI/UX Design",
    description: "Create beautiful, intuitive designs for iOS and Android",
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "UI designs", "Interactive prototypes", "Design system"],
  },
  {
    step: "03",
    title: "Development",
    description: "Build your mobile app with clean, maintainable code",
    duration: "8-16 weeks",
    deliverables: ["Working app", "API integration", "Backend setup", "Testing suite"],
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Thorough QA testing and App Store/Play Store submission",
    duration: "2-3 weeks",
    deliverables: ["QA testing", "Beta testing", "Store submission", "Launch support"],
  },
  {
    step: "05",
    title: "Maintenance & Updates",
    description: "Ongoing support, bug fixes, and feature enhancements",
    duration: "Ongoing",
    deliverables: ["Bug fixes", "OS updates", "New features", "Performance optimization"],
  },
];

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase",
  "iOS SDK", "Android SDK", "Node.js", "GraphQL", "Push Notifications", "In-App Purchases",
];

const caseStudies = [
  {
    client: "FitLife",
    industry: "Health & Fitness",
    title: "Cross-Platform Fitness App",
    results: ["500K+ downloads", "4.8★ average rating", "50% user retention"],
    image: "/case-studies/fitlife.jpg",
  },
  {
    client: "DeliverNow",
    industry: "Logistics",
    title: "On-Demand Delivery Platform",
    results: ["Real-time tracking", "100K+ deliveries", "99.9% uptime"],
    image: "/case-studies/delivernow.jpg",
  },
];

const faqs = [
  {
    question: "Should I build native or cross-platform?",
    answer: "It depends on your needs. Native apps (Swift/Kotlin) offer the best performance and platform-specific features. Cross-platform (React Native/Flutter) is more cost-effective and faster to market. We'll help you choose the right approach.",
  },
  {
    question: "How long does mobile app development take?",
    answer: "A simple app takes 3-4 months, a standard app with multiple features takes 4-6 months, and complex apps with advanced functionality can take 6-12 months or more.",
  },
  {
    question: "Do you handle App Store and Play Store submission?",
    answer: "Yes! We handle the entire submission process including preparing app store listings, screenshots, compliance requirements, and responding to review feedback.",
  },
  {
    question: "Can you integrate with existing backend systems?",
    answer: "Absolutely! We specialize in integrating mobile apps with existing APIs, databases, and third-party services. We can also build a new backend if needed.",
  },
  {
    question: "What about app maintenance after launch?",
    answer: "We offer comprehensive maintenance packages including bug fixes, OS updates, security patches, performance optimization, and new feature development to keep your app running smoothly.",
  },
  {
    question: "How much does mobile app development cost?",
    answer: "Costs vary based on complexity and features. Simple apps start around $30,000, standard apps range from $50,000-$150,000, and complex apps can exceed $200,000. We provide detailed estimates after understanding your requirements.",
  },
];

export default function MobileAppsPage() {
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
            <span className="text-purple-600 font-semibold">Mobile App Development</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile App
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Start Your App
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
            From consumer apps to enterprise solutions, we build mobile applications that deliver exceptional 
            user experiences and help your business thrive in the mobile-first world.
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
          title="From Concept to App Store"
          description="A proven process for successful mobile app launches"
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
          description="Modern frameworks and tools for powerful mobile apps"
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
          title="Mobile Apps in Action"
          description="Real results from successful app launches"
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
          description="Everything you need to know about mobile app development"
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-900 mb-8">
            Let&apos;s bring your app idea to life on iOS and Android
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



