
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CleverLogo from "@/components/CleverLogo";

const Contact = () => {
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
          <Button variant="ghost" onClick={() => navigate("/")} className="text-gray-600 hover:text-gray-900">
            Back to Home
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Have questions about Clever LLM? We'd love to hear from you.
          </p>
          <p className="text-gray-600">
            This is a placeholder contact page. Please update this content with your actual contact information before going live.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
