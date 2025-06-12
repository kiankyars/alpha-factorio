
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const ChatDemo = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "How do I plan for my retirement?",
    "What's my biggest hidden cost?",
    "Should I pay off debt or invest?",
    "How can I save for a house?",
    "What's the best investment strategy for me?"
  ];

  useEffect(() => {
    const message = messages[currentMessageIndex];
    let charIndex = 0;
    setIsTyping(true);
    setCurrentText('');

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        setCurrentText(message.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait 2 seconds then move to next message
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex]);

  return (
    <div className="max-w-md mx-auto">
      <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Financial LLM Assistant</span>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-3 min-h-[50px] flex items-center">
            <span className="text-gray-700">
              {currentText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatDemo;
