import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    id: "techflow",
    title: "TechFlow Inc",
    category: "AI/ML Solutions",
    description: "AI-powered customer service platform with 300% efficiency boost",
    image: "/placeholder-project.jpg",
    tags: ["AI/ML", "Python", "TensorFlow", "React"],
    results: ["300% efficiency increase", "50% cost reduction", "98% satisfaction"],
  },
  {
    id: "mobilefirst",
    title: "MobileFirst App",
    category: "Mobile Development",
    description: "Cross-platform mobile app with 100k+ downloads",
    image: "/placeholder-project.jpg",
    tags: ["React Native", "Node.js", "AWS", "MongoDB"],
    results: ["100k+ downloads", "4.8/5 rating", "Zero downtime"],
  },
  {
    id: "cloudscale",
    title: "CloudScale Platform",
    category: "Cloud Solutions",
    description: "Enterprise cloud migration with zero downtime",
    image: "/placeholder-project.jpg",
    tags: ["AWS", "Kubernetes", "Docker", "Terraform"],
    results: ["Zero downtime", "40% cost savings", "10x scalability"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      <Section background="default">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses transform their operations with cutting-edge software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/case-studies/${item.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-gray-400 text-sm font-semibold">Project Image</div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {item.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-pink-600 transition-colors">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}

