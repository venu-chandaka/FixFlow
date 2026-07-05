"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BadgeDollarSign, ShieldCheck, Activity, Zap, Lightbulb } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "AI-Powered Diagnosis" },
  { icon: BadgeDollarSign, title: "Transparent Pricing" },
  { icon: ShieldCheck, title: "Verified Professionals" },
  { icon: Activity, title: "Live Service Tracking" },
  { icon: Zap, title: "Fast Response Time" },
  { icon: Lightbulb, title: "Smart Recommendations" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white selection:bg-blue-100">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-16">
          Why Choose FixFlow AI?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 transition-colors group cursor-pointer"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {reason.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}