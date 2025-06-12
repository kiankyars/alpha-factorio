
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, Brain, Users, DollarSign, Mic, Target, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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
    { number: "10M+", label: "Users Served" },
    { number: "2.3x", label: "Avg. Savings Increase" },
    { number: "89%", label: "User Satisfaction" }
  ];

  const premiumFeatures = [
    {
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      title: "Voice LLM Assistant Meetings",
      description: "Talk with your financial assistant via voice calls - like having a personal advisor on speed dial"
    },
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Smart Spending Challenges",
      description: "Clever spots and targets your problem spending with personalized challenges to help you save"
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-600" />,
      title: "Accountability Check-ins",
      description: "Regular check-ins to keep you on track with your financial goals and spending habits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Clever
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              How it works
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Button>
            <Button 
              onClick={() => navigate("/onboard")}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your everyday
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}financial LLM assistant
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get personalized investment strategies, debt payoff plans, and tax optimization tips 
              in minutes. Powered by advanced language models, backed by fiduciary-level financial expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate("/onboard")}
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
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clever?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional financial advisors charge 1% annually. Our LLM gives you the same quality advice 
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
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World's Most Affordable LLM Financial Assistant
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200 bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">Forever free</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Personalized financial analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Investment recommendations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Chat support during session</span>
                </li>
              </ul>
              <Button 
                onClick={() => navigate("/onboard")}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white"
              >
                Get Started Free
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-green-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Clever Plus</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$4.99</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Mic className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Voice LLM Assistant Meetings</span>
                    <p className="text-sm text-gray-600">Talk with your financial assistant via voice calls</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Smart Spending Challenges</span>
                    <p className="text-sm text-gray-600">Clever spots and targets your problem spending</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Accountability Check-ins</span>
                    <p className="text-sm text-gray-600">Regular check-ins to keep you on track</p>
                  </div>
                </li>
              </ul>
              <Button 
                onClick={() => navigate("/onboard")}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
              >
                Start Free Trial
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to optimize your finances?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who have already improved their financial future with LLM-powered advice.
          </p>
          <Button 
            onClick={() => navigate("/onboard")}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Start Your Free Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
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
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
                <span className="hover:text-white cursor-pointer">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
