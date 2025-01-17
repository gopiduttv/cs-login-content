import React from "react";

export interface CtaBtnProps {
  ctaText: string;
  cookieMode: boolean;
}

export default function CookieCTAButton({ ctaText, cookieMode }: CtaBtnProps) {
  return (
    <button
      className={`font-semibold text-center py-3 px-8 rounded-lg  ${cookieMode ? "text-white bg-[#1e8fa3]" : "text-white bg-transparent !border-[#1e8fa3]"}`}
    >
      {ctaText}
    </button>
  );
}
