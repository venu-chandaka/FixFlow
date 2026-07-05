"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Services Completed" },
  { value: "95%", label: "AI Diagnosis Accuracy" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "15 Min", label: "Average Response Time" },
  { value: "500+", label: "Verified Professionals" },
  { value: "98%", label: "Customer Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white selection:bg-blue-100 border-y border-slate-100">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center mb-16">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base font-medium text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}