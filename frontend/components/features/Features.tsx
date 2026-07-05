"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Camera, Video, Mic, Brain, Calculator, UserCheck } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Upload Images",
    description: "Upload photos of damaged appliances or home issues for instant AI analysis.",
  },
  {
    icon: Video,
    title: "Upload Videos",
    description: "Record a short video so AI can better understand complex problems.",
  },
  {
    icon: Mic,
    title: "Voice Diagnosis",
    description: "Simply explain the issue naturally using your voice.",
  },
  {
    icon: Brain,
    title: "Instant AI Diagnosis",
    description: "Receive an AI-powered diagnosis with confidence score.",
  },
  {
    icon: Calculator,
    title: "Smart Cost Estimation",
    description: "Know the estimated repair cost before booking.",
  },
  {
    icon: UserCheck,
    title: "Smart Technician Matching",
    description: "AI recommends the most suitable technician based on skills, ratings, ETA, and availability.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Features() {
  return (
    <section className="py-24 bg-white selection:bg-blue-100">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Can Do with FixFlow AI
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Powerful AI tools that help you identify problems, estimate costs, and connect with trusted professionals—all from a single platform.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-slate-50 border border-slate-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle glassmorphism gradient accent on hover */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}