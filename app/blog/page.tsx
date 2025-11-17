"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, User, CheckCircle, Brain, Cloud, Shield, Layers, Palette, Zap } from "lucide-react";

const blogPosts = [
  {
    id: "ai-transformation-2024",
    title: "The AI Transformation: How Businesses Are Leveraging AI in 2024",
    excerpt: "Explore the latest trends in AI adoption and learn how companies are using artificial intelligence to gain competitive advantages.",
    category: "AI & Machine Learning",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    author: "Sarah Johnson",
    gradient: "from-purple-500 to-pink-500",
    icon: Brain,
  },
  {
    id: "cloud-migration-guide",
    title: "Cloud Migration Strategy: A Complete Guide for Enterprises",
    excerpt: "A comprehensive guide to planning and executing a successful cloud migration, from assessment to optimization.",
    category: "Cloud Solutions",
    date: "Nov 5, 2024",
    readTime: "12 min read",
    author: "Michael Chen",
    gradient: "from-blue-500 to-cyan-500",
    icon: Cloud,
  },
  {
    id: "security-best-practices",
    title: "10 Security Best Practices Every Developer Should Know",
    excerpt: "Essential security practices to protect your applications and data from modern cyber threats.",
    category: "Security",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    author: "Emily Rodriguez",
    gradient: "from-green-500 to-emerald-500",
    icon: Shield,
  },
  {
    id: "microservices-architecture",
    title: "Building Scalable Applications with Microservices Architecture",
    excerpt: "Learn how microservices can help you build more scalable, maintainable, and resilient applications.",
    category: "Architecture",
    date: "Oct 20, 2024",
    readTime: "10 min read",
    author: "David Park",
    gradient: "from-orange-500 to-red-500",
    icon: Layers,
  },
  {
    id: "ux-design-trends",
    title: "UX Design Trends Shaping Digital Products in 2024",
    excerpt: "Discover the latest UX design trends and how they&apos;re influencing user experience across industries.",
    category: "Design",
    date: "Oct 15, 2024",
    readTime: "7 min read",
    author: "Jessica Lee",
    gradient: "from-indigo-500 to-purple-500",
    icon: Palette,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    excerpt: "How to implement effective DevOps automation to accelerate development and improve code quality.",
    category: "DevOps",
    date: "Oct 8, 2024",
    readTime: "9 min read",
    author: "Alex Kumar",
    gradient: "from-pink-500 to-rose-500",
    icon: Zap,
  },
];

const categories = [
  "All Posts",
  "AI & Machine Learning",
  "Cloud Solutions",
  "Security",
  "Architecture",
  "Design",
  "DevOps",
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-20">
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <Section background="default">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and industry updates from our team of technology experts
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                category === selectedCategory
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "bg-white text-gray-700 border-2 border-purple-200 hover:border-purple-400 hover:text-purple-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => {
            const PostIcon = post.icon;
            return (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-purple-100 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10"></div>
                <PostIcon className="w-24 h-24 text-white relative z-10 drop-shadow-lg" strokeWidth={1.5} />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest insights and updates delivered directly to your inbox every week.
          </p>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="blog-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px]"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-purple-600/30 border-t-purple-600 rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="blog-success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-md mx-auto"
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex items-center justify-center gap-3 text-purple-600"
                  >
                    <CheckCircle className="w-8 h-8" />
                    <div className="text-left">
                      <p className="font-bold text-lg">Successfully Subscribed!</p>
                      <p className="text-gray-600 text-sm">Check your inbox for confirmation</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </main>
  );
}

