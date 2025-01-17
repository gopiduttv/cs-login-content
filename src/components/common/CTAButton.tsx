import React from "react";

export interface CtaBtnProps {
  ctaText: string;
  themeMode: string;
  cookieMode: boolean;
}

export default function CTAButton({
  ctaText,
  themeMode,
  cookieMode,
}: CtaBtnProps) {
  return (
    <button
      className={`font-semibold text-center py-3 px-8 rounded-lg ${
        themeMode === "darkMode" ? "text-black bg-white" : themeMode === "lightMode" ? "text-white bg-black" : ""
      } ${cookieMode ? "text-white bg-[#1e8fa3]" : "text-white bg-transparent !border-[#1e8fa3]"} `}
    >
      {ctaText}
    </button>
  );
}
