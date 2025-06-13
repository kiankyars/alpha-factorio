
import React from 'react';
import { useNavigate } from "react-router-dom";
import CleverLogo from "@/components/CleverLogo";
import { Linkedin, X } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="px-6 py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CleverLogo size="sm" />
            <span className="text-xl font-bold">clever</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            LLM-powered financial guidance that helps you make smarter money decisions. Get personalized help on savings, investments, and debt management.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/company/cleverllm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://discord.gg/cleverllm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/cleverllm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 clever llm. All rights reserved.
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
  );
};

export default Footer;
