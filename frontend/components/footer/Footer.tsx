import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl font-extrabold text-blue-600 mb-6">FixFlow AI</h1>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Book trusted home services in minutes with the power of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">AI Diagnosis</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Booking</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 FixFlow AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-100 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-100 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-slate-200 hover:bg-blue-100 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}