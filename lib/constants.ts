export const SITE_CONFIG = {
  name: "KaizenSpark Tech",
  tagline: "Continuous Innovation, Exponential Growth",
  description: "AI-powered solutions and custom software development",
  url: "https://kaizenspark.tech",
  email: "hello@kaizenspark.tech",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 12345",
  social: {
    twitter: "https://twitter.com/kaizenspark",
    linkedin: "https://linkedin.com/company/kaizenspark",
    github: "https://github.com/kaizenspark",
    facebook: "https://facebook.com/kaizenspark",
  },
};

export const NAVIGATION_LINKS = [
  {
    name: "Services",
    href: "/services",
    megaMenu: true,
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export const SERVICES = [
  {
    id: "custom-software",
    icon: "Code",
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to perfectly match your unique business requirements and scale with your growth.",
    features: ["Full-stack development", "Scalable architecture", "Agile methodology"],
    href: "/services/custom-software",
  },
  {
    id: "ai-ml",
    icon: "Brain",
    title: "AI/ML Solutions",
    description: "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and stay ahead of competition.",
    features: ["Predictive analytics", "Natural language processing", "Computer vision"],
    href: "/services/ai-ml",
  },
  {
    id: "web-development",
    icon: "Globe",
    title: "Web Development",
    description: "Modern, responsive, and high-performing web applications that deliver exceptional user experiences across all devices.",
    features: ["React/Next.js", "Progressive web apps", "E-commerce solutions"],
    href: "/services/web-development",
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth on iOS and Android.",
    features: ["iOS & Android", "Cross-platform", "App modernization"],
    href: "/services/mobile-apps",
  },
  {
    id: "cloud-solutions",
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-effective cloud infrastructure and migration services on AWS, Azure, and Google Cloud.",
    features: ["Cloud migration", "DevOps automation", "Microservices"],
    href: "/services/cloud-solutions",
  },
  {
    id: "digital-transformation",
    icon: "Rocket",
    title: "Digital Transformation",
    description: "Comprehensive strategy and execution to modernize your business operations and unlock new growth opportunities.",
    features: ["Process automation", "Legacy modernization", "Change management"],
    href: "/services/digital-transformation",
  },
];

export const TECHNOLOGIES = {
  frontend: [
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "Vue", logo: "/logos/vue.svg" },
    { name: "Angular", logo: "/logos/angular.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  ],
  backend: [
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: ".NET", logo: "/logos/dotnet.svg" },
    { name: "Go", logo: "/logos/go.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
  ],
  cloud: [
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Azure", logo: "/logos/azure.svg" },
    { name: "Google Cloud", logo: "/logos/gcp.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
    { name: "Terraform", logo: "/logos/terraform.svg" },
  ],
  aiml: [
    { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
    { name: "PyTorch", logo: "/logos/pytorch.svg" },
    { name: "OpenAI", logo: "/logos/openai.svg" },
    { name: "Hugging Face", logo: "/logos/huggingface.svg" },
    { name: "LangChain", logo: "/logos/langchain.svg" },
    { name: "Anthropic", logo: "/logos/anthropic.svg" },
  ],
  mobile: [
    { name: "React Native", logo: "/logos/react-native.svg" },
    { name: "Flutter", logo: "/logos/flutter.svg" },
    { name: "Swift", logo: "/logos/swift.svg" },
    { name: "Kotlin", logo: "/logos/kotlin.svg" },
    { name: "Expo", logo: "/logos/expo.svg" },
    { name: "Ionic", logo: "/logos/ionic.svg" },
  ],
  database: [
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "Redis", logo: "/logos/redis.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Elasticsearch", logo: "/logos/elasticsearch.svg" },
    { name: "Supabase", logo: "/logos/supabase.svg" },
  ],
};

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "KaizenSpark transformed our entire tech infrastructure. Their AI solutions helped us increase efficiency by 300% and reduce operational costs significantly.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc",
    logo: "/logos/clients/techflow.svg",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with KaizenSpark was a game-changer. They delivered our mobile app ahead of schedule and exceeded all our expectations in terms of quality and performance.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "MobileFirst Solutions",
    logo: "/logos/clients/mobilefirst.svg",
    rating: 5,
  },
  {
    id: 3,
    quote: "The team's expertise in cloud architecture is unmatched. They migrated our entire infrastructure to AWS with zero downtime and saved us 40% on hosting costs.",
    author: "Emily Thompson",
    role: "VP of Engineering",
    company: "CloudScale",
    logo: "/logos/clients/cloudscale.svg",
    rating: 5,
  },
  {
    id: 4,
    quote: "KaizenSpark's custom software solution perfectly fit our unique business needs. Their agile approach and constant communication made the entire process smooth.",
    author: "David Kim",
    role: "Director of Operations",
    company: "OptiFlow Systems",
    logo: "/logos/clients/optiflow.svg",
    rating: 5,
  },
];

export const STATS = [
  {
    number: "500+",
    label: "Projects Delivered",
    suffix: "",
  },
  {
    number: "98",
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    number: "15+",
    label: "Countries Served",
    suffix: "",
  },
  {
    number: "50+",
    label: "Technologies Mastered",
    suffix: "",
  },
];

export const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    description: "HIPAA-compliant solutions for modern healthcare",
    capabilities: ["Telemedicine platforms", "Patient portals", "Healthcare analytics"],
    gradient: "from-red-600 to-pink-600",
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: "DollarSign",
    description: "Secure financial technology solutions",
    capabilities: ["Payment processing", "Banking apps", "Blockchain integration"],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: "ShoppingCart",
    description: "Scalable online retail platforms",
    capabilities: ["Marketplace development", "Inventory management", "Payment integration"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Innovative EdTech solutions",
    capabilities: ["Learning management", "Virtual classrooms", "Assessment tools"],
    gradient: "from-purple-600 to-violet-600",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    description: "Industry 4.0 digital solutions",
    capabilities: ["IoT integration", "Supply chain optimization", "Quality control"],
    gradient: "from-orange-600 to-amber-600",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: "Truck",
    description: "Smart logistics and supply chain",
    capabilities: ["Route optimization", "Fleet management", "Real-time tracking"],
    gradient: "from-indigo-600 to-blue-600",
  },
];

