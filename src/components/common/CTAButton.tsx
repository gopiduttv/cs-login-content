import React from "react";

export interface CtaBtnProps {
  ctaText: string;
  themeMode: string;
}

export default function CTAButton({ ctaText, themeMode }: CtaBtnProps) {
  return (
    <button
      className={`font-medium text-center w-52 h-10 rounded-lg ${
        themeMode === "darkMode" ?  "text-black bg-white" : "text-white bg-black" 
      }`}
    >
      {ctaText}
    </button>
  );
}
