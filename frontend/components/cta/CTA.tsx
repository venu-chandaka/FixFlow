"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-24 scroll-mt-24 selection:bg-blue-300 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-slate-900 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0" />
      
      <div className="container relative z-10 mx-auto max-w-4xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Fix Smarter?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Experience AI-powered home services with instant diagnosis, transparent pricing, and trusted professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto rounded-xl h-14 px-8 bg-blue-500 hover:bg-blue-400 text-white text-base font-semibold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5">
              Book Service Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl h-14 px-8 border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:border-slate-600 text-base font-semibold transition-all hover:-translate-y-0.5 backdrop-blur-sm">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}