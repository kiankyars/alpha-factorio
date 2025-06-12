
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, Brain, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import CleverLogo from "@/components/CleverLogo";
import ScrollSection from "@/components/ScrollSection";
import ChatDemo from "@/components/ChatDemo";

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
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

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "LLM-Powered Analysis",
      description: "Get personalized financial advice powered by advanced language models and fiduciary-level analysis"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Bank-Level Security",
      description: "Secure Plaid integration with 256-bit encryption. Your data is always protected."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Actionable Insights",
      description: "Get specific investment allocations, debt strategies, and tax optimization tips"
    }
  ];

  const stats = [
    { number: "2.3x", label: "Avg. Savings Increase" },
    { number: "89%", label: "User Satisfaction" },
    { number: "24/7", label: "Always Available" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 px-6 py-4 bg-white/80 backdrop-blur-sm border-b z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CleverLogo size="sm" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Clever
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => navigate("/how-it-works")}
            >
              How it works
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </Button>
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Welcome, {user.email}</span>
                <Button variant="outline" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <ScrollSection className="pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your everyday
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}Financial LLM Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get personalized investment strategies, debt payoff plans, and tax optimization tips 
              in minutes. Powered by advanced language models, backed by fiduciary-level financial expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate(user ? "/onboard" : "/auth")}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg"
              >
                Try it now - It's free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-gray-500">✓ No credit card required ✓ 2-minute setup</p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Clever's Got You Covered Section */}
      <ScrollSection className="bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold text-white mb-8">
              Clever's got you covered
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Ask your Financial LLM Assistant anything about your finances
            </p>
            <ChatDemo />
          </div>
        </div>
      </ScrollSection>

      {/* Stats Section */}
      <ScrollSection className="bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Features Section */}
      <ScrollSection>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose Clever?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional financial advisors charge 1% annually. Our Financial LLM Assistant gives you the same quality advice 
              for a fraction of the cost, available 24/7.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* CTA Section */}
      <ScrollSection className="bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">
            Ready to optimize your finances?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your journey with the world's most affordable Financial LLM Assistant.
          </p>
          <Button 
            onClick={() => navigate(user ? "/onboard" : "/auth")}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Start Your Free Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CleverLogo size="sm" />
              <span className="text-xl font-bold">Clever</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              LLM-powered financial guidance that helps you make smarter money decisions. Get personalized help on savings, investments, and debt management.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © 2025 Clever LLM. All rights reserved.
              </div>
              <div className="flex space-x-8 text-sm text-gray-400">
                <span 
                  className="hover:text-white cursor-pointer" 
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </span>
                <span 
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigate("/terms-of-service")}
                >
                  Terms of Service
                </span>
                <span 
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
