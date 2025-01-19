import { PortableText } from "next-sanity";
import React, { useState } from "react";

export interface CtaBtnProps {
  ctaText: string;
  cookieMode: boolean;
  toggleDrawer?: any;
}

export default function CookieCTAButton({ ctaText, cookieMode, toggleDrawer }: CtaBtnProps) {

  return (
    <>
      <button
        className={`font-semibold w-28 md:text-sm text-center py-2 px-4 rounded-lg  ${cookieMode ? "text-white bg-[#1e8fa3]" : "text-white bg-transparent border  !border-[#1e8fa3]"}`}
        onClick={toggleDrawer}
      >
        {ctaText}
      </button>
     
    
    </>
  );
}
