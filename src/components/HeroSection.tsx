
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [animatedWords, setAnimatedWords] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);

  const words = ["Your", "everyday", "financial", "llm", "assistant"];

  useEffect(() => {
    const animateWords = async () => {
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setAnimatedWords(prev => [...prev, words[i]]);
      }
      await new Promise(resolve => setTimeout(resolve, 300));
      setShowButton(true);
    };

    animateWords();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight min-h-[400px] flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {animatedWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block animate-fade-in ${
                  word === "financial" || word === "llm" || word === "assistant"
                    ? "bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Get personalized investment strategies, debt payoff plans, and tax optimization tips 
          in minutes. Powered by advanced language models, backed by fiduciary-level financial expertise.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 ${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Button 
            onClick={() => navigate(user ? "/onboard" : "/auth")}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg"
          >
            Try it now - It's free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">✓ No credit card required ✓ 2-minute setup</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
