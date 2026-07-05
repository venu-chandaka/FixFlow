import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import{ HowItWorks} from "@/components/how-it-works/HowItWorks";
import WhyChooseUs from "@/components/why-us/WhyUs";
import AIFeatures from "@/components/ai-features/AIFeatures";
import Stats from "@/components/stats/Stats";
import {CTA} from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <AIFeatures />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}