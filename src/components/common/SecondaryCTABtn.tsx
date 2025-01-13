"use client";
import PlayButton from "@/app/components/PlayButton";
import  VideoRender  from "@/app/components/VideoModal";
import React, { useState } from "react";

export interface VideoModal {
  videoId: string;
  videoPlatform: string;
  videoTitle: string;
  title:string
}
export interface CtaBtnProps {
  ctaText: string;
  themeMode: string;
  isSecondaryBtn: boolean;
  videoDetails:VideoModal ;
}

export default function SecondaryCTABtn({
  ctaText,
  themeMode,
  isSecondaryBtn = true,
  videoDetails
}: CtaBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <button
        className={`font-semibold text-center flex justify-center border border-slate-900 items-center gap-5 w-[162px] h-10 rounded-lg ${
          themeMode !== "darkMode"
            ? "text-black bg-white"
            : "text-white bg-black"
        }`}
        onClick={(e: React.SyntheticEvent) => setIsOpen(!isOpen)}
      >
        {isSecondaryBtn && (
          <PlayButton color={themeMode == "darkMode" ? "white" : "black"} />
        )}
        {ctaText}
      </button>
      {isOpen && (
        <VideoRender
          isPopup={true}
          videoDetails={videoDetails}
          className={`pt-9 flex items-start`}
          onClose={() => setIsOpen(false)}
          openForm={() => setOpenForm(true)}
          hasDemoBanner={true}
        />
      )}
    </div>
  );
}
