
import React from 'react';
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Brain } from "lucide-react";
import ScrollSection from "@/components/ScrollSection";

const FeaturesSection = () => {
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

  return (
    <ScrollSection>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Why Choose clever?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional financial advisors charge 1% annually. Our financial llm assistant gives you the same quality advice 
            for a fraction of the cost, available 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-card/80 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default FeaturesSection;
