import React from "react";

export interface CtaBtnProps {
  ctaText?: string;
  themeMode?: string;
  ctaBtnColor?: string;
  ctaBtnTextColor?: string;
}

export default function CTAButton({
  ctaText,
  themeMode,
  ctaBtnColor,
  ctaBtnTextColor,
}: CtaBtnProps) {
  return (
    <div>
      <button
        className={`font-semibold text-center py-3 px-8 rounded-lg  ${
          themeMode === "darkMode" ? "text-black " : "text-white"
        }`}
        style={{
          background: ctaBtnColor
            ? ctaBtnColor
            : themeMode === "darkMode"
              ? "#ffffff"
              : "#000000",
          color:
            ctaBtnTextColor === "blackMode"
              ? "#000000"
              : ctaBtnTextColor === "whiteMode"
                ? "#ffffff"
                : "",
        }}
      >
        {ctaText}
      </button>
    </div>
  );
}
