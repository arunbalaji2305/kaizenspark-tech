"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Code, 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud, 
  Rocket,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const formSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  projectDetails: z.string().min(20, "Please provide at least 20 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  { id: "custom-software", name: "Custom Software", icon: Code },
  { id: "ai-ml", name: "AI/ML Solutions", icon: Brain },
  { id: "web", name: "Web Development", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  { id: "cloud", name: "Cloud Solutions", icon: Cloud },
  { id: "transformation", name: "Digital Transformation", icon: Rocket },
];

const budgets = [
  "Less than $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "More than $100,000",
];

const timelines = [
  "Less than 1 month",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "More than 12 months",
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const selectedService = watch("service");

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your API
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-24">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;ve received your information and will get back to you within 24 hours.
            </p>
            <Button variant="primary" onClick={() => window.location.href = "/"}>
              Return to Homepage
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-24">
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-sm text-purple-600 uppercase mb-4 tracking-wider font-semibold">
              LET&apos;S BUILD SOMETHING AMAZING
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Your Project
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your project and we&apos;ll get back to you within 24 hours
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step <= currentStep
                        ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                        : "bg-white border-2 border-gray-200 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                        step < currentStep ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Service</span>
              <span>Details</span>
              <span>Budget</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    What service are you interested in?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            setValue("service", service.id);
                            setTimeout(nextStep, 300);
                          }}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                            selectedService === service.id
                              ? "border-purple-500 bg-purple-50 shadow-lg"
                              : "border-purple-200 bg-white hover:border-purple-400 hover:shadow-md"
                          }`}
                        >
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4 shadow-md">
                            <Icon className="w-9 h-9 text-purple-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {service.name}
                          </h3>
                        </button>
                      );
                    })}
                  </div>
                  {errors.service && (
                    <p className="text-error text-sm">{errors.service.message}</p>
                  )}
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell us about your project
                  </h2>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">
                      Project Description *
                    </label>
                    <textarea
                      {...register("projectDetails")}
                      rows={8}
                      className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Describe your project, goals, challenges, and what you're looking to achieve..."
                    />
                    {errors.projectDetails && (
                      <p className="text-error text-sm mt-1">
                        {errors.projectDetails.message}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Budget & Timeline */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Budget & Timeline
                  </h2>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">
                      Budget Range *
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-error text-sm mt-1">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2 font-medium">
                      Timeline *
                    </label>
                    <select
                      {...register("timeline")}
                      className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-error text-sm mt-1">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Your Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 mb-2 font-medium">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-error text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-900 mb-2 font-medium">
                        Company (Optional)
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="text-error text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-900 mb-2 font-medium">
                        Phone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-error text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                type="button"
                variant="secondary"
                onClick={prevStep}
                icon={ArrowLeft}
                iconPosition="left"
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={nextStep}
                  icon={ArrowRight}
                >
                  Next Step
                </Button>
              ) : (
                <Button type="submit" variant="primary" icon={Check}>
                  Submit
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Mail className="w-9 h-9 text-purple-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-2">Email Us</h3>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 hover:text-purple-600 transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Phone className="w-9 h-9 text-purple-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-2">Call Us</h3>
            <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-600 hover:text-purple-600 transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
          <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-4 shadow-md">
              <MapPin className="w-9 h-9 text-purple-600" />
            </div>
            <h3 className="text-gray-900 font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              {SITE_CONFIG.address}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

