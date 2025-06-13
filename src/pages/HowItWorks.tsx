
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload, Brain, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CleverLogo from "@/components/CleverLogo";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts via Plaid. Your data is encrypted and never stored permanently."
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "LLM Analysis",
      description: "Our financial llm assistant analyzes your spending, income, and financial goals to create a personalized plan."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Get Recommendations",
      description: "Receive specific investment allocations, debt strategies, and savings goals tailored to your situation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Track Progress",
      description: "Monitor your financial health with regular check-ins and adaptive recommendations as your situation changes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-green-50 dark:from-slate-900 dark:via-background dark:to-slate-800">
      {/* Header */}
      <header className="px-6 py-4 border-b bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <CleverLogo size="sm" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              clever
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={() => navigate("/pricing")}>
              Pricing
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

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            How clever Works
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get personalized financial advice in just 4 simple steps. Our financial llm assistant makes professional-grade financial planning accessible to everyone.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">STEP {index + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join others who are already improving their financial future with our financial llm assistant.
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

export default HowItWorks;
