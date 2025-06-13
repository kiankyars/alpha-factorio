
import React from 'react';
import ScrollSection from "@/components/ScrollSection";

const StatsSection = () => {
  const stats = [
    { number: "2.3x", label: "Avg. Savings Increase" },
    { number: "89%", label: "User Satisfaction" },
    { number: "24/7", label: "Always Available" }
  ];

  return (
    <ScrollSection className="bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
};

export default StatsSection;
