
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mic, Target, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CleverLogo from "@/components/CleverLogo";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <CleverLogo size="sm" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Clever
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              How it works
            </Button>
            <Button 
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              World's Most Affordable Financial LLM Assistant
            </h1>
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
                onClick={() => navigate("/auth")}
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
                    <span className="font-medium">Financial LLM Assistant Meetings</span>
                    <p className="text-sm text-gray-600">Talk with your Financial LLM Assistant via voice calls</p>
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
                onClick={() => navigate("/auth")}
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
            Start your journey with the world's most affordable Financial LLM Assistant.
          </p>
          <Button 
            onClick={() => navigate("/auth")}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Start Your Free Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
