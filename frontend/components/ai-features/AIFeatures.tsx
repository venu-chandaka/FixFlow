"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanLine, Mic, Video, LineChart, FileBadge, Siren, Wrench, ShieldAlert } from "lucide-react";

const aiFeatures = [
  { icon: ScanLine, title: "Snap & Diagnose" },
  { icon: Video, title: "Video Analysis" },
  { icon: Siren, title: "Emergency Assistance" },
  { icon: ShieldAlert, title: "AI Repair Verification" },
];

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-24 scroll-mt-24 bg-slate-50 selection:bg-blue-100">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-16">
          Powerful AI Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative p-6 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-start gap-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}