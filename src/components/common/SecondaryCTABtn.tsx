import PlayButton from "@/app/components/PlayButton";
import React from "react";

export interface CtaBtnProps {
  ctaText: string;
  themeMode: string;
  isSecondaryBtn: boolean;
}

export default function SecondaryCTABtn({
  ctaText,
  themeMode,
  isSecondaryBtn = true,
}: CtaBtnProps) {
  return (
    <div>
      <button
        className={`font-semibold text-center flex justify-center  items-center gap-5 w-[162px] h-14 rounded-lg ${
          themeMode !== "darkMode"
            ? "text-black bg-white"
            : "text-white bg-black"
        }`}
      >
        {isSecondaryBtn && (
          <PlayButton color={themeMode == "darkMode" ? "white" : "black"} />
        )}
        {ctaText}
      </button>
    </div>
  );
}
