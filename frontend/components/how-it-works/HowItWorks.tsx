"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, BrainCircuit, Users, Map, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Describe Your Problem",
    description: "(Text, Voice, Image or Video)",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands the Issue",
    description: "Diagnosis • Cost Estimate • Repair Time",
  },
  {
    icon: Users,
    title: "Smart Technician Matching",
    description: "Nearest • Highest Rated • Best Skill Match",
  },
  {
    icon: Map,
    title: "Track Service Live",
    description: "Real-time location • ETA • Status updates",
  },
  {
    icon: CheckCircle2,
    title: "Problem Solved",
    description: "Repair completed • Verified by customer",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 selection:bg-blue-100">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How FixFlow AI Works
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From problem detection to repair completion in just a few simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 z-0" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 mb-6 relative z-10 transition-transform hover:scale-105">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {idx + 1}
                  </span>
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 max-w-[200px]">{step.description}</p>
                
                {/* Mobile vertical connector */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-slate-200 mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}