
import React from "react";

interface CleverLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CleverLogo = ({ className = "", size = "md" }: CleverLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex flex-col items-center justify-center text-white font-bold leading-none">
        <div className="text-[0.4em] tracking-wider">CLE</div>
        <div className="text-[0.4em] tracking-wider">VER</div>
      </div>
    </div>
  );
};

export default CleverLogo;
