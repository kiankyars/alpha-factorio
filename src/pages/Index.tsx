
import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";
import ChatDemo from "@/components/ChatDemo";

const Index = () => {
  const { user } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.pageYOffset;
      setScrollProgress((currentProgress / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-background to-green-50 dark:from-slate-900 dark:via-background dark:to-slate-800">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <ScrollSection className="pt-20">
        <HeroSection />
      </ScrollSection>

      {/* clever's Got You Covered Section */}
      <ScrollSection className="bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-white mb-8">
              clever's got you covered
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Ask your financial llm assistant anything about your finances
            </p>
            <ChatDemo />
          </div>
        </div>
      </ScrollSection>

      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
