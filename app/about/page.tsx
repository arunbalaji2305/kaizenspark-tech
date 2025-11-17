import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users, Award, Zap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "About Us | KaizenSpark Tech",
  description: "Learn about KaizenSpark Tech - our mission, values, and the team behind innovative technology solutions.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue excellence in every line of code, every design decision, and every client interaction.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay at the forefront of technology, continuously learning and adopting cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real business value.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in transparent communication and working as an extension of your team.",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Years Combined Experience" },
  { number: "50+", label: "Technologies Mastered" },
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "15+ years in software development and digital transformation",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Former tech lead at Fortune 500, AI/ML specialist",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    bio: "Award-winning designer with focus on user experience",
  },
  {
    name: "Emily Thompson",
    role: "VP of Engineering",
    bio: "Cloud architecture expert, certified AWS solutions architect",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future,
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">One Innovation at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a team of passionate technologists, designers, and strategists dedicated to transforming businesses through intelligent technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower businesses of all sizes with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation. We believe every company deserves access to world-class software 
              development and AI capabilities.
            </p>
          </div>
          <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the trusted technology partner for ambitious businesses worldwide, known for delivering 
              exceptional results, fostering innovation, and creating lasting impact through transformative 
              digital solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          eyebrow="OUR VALUES"
          title="What Drives Us"
          description="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Stats */}
      <Section background="light">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader
          eyebrow="OUR TEAM"
          title="Meet the Experts"
          description="Passionate professionals dedicated to your success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-purple-100 rounded-2xl p-6 text-center hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <SectionHeader
          title="Why Partner With Us"
          description="What sets us apart from other development agencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Award className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Proven Track Record
            </h3>
            <p className="text-gray-600 leading-relaxed">
              500+ successful projects across diverse industries with measurable results and satisfied clients.
            </p>
          </div>
          <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Agile & Transparent
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Clear communication, regular updates, and flexible approach that adapts to your needs.
            </p>
          </div>
          <div className="bg-white border border-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Dedicated Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ongoing support and maintenance to ensure your solutions continue to deliver value.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to transform your business with intelligent technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02]">
              View Our Work
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

