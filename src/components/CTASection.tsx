
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ScrollSection from "@/components/ScrollSection";

const CTASection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <ScrollSection className="bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl font-bold mb-4">
          Ready to optimize your finances?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Start your journey with the world's most affordable financial llm assistant.
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
  );
};

export default CTASection;
