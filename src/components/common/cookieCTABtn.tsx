"use client";
import { PortableText } from "next-sanity";
import React, { useState } from "react";

export interface CtaBtnProps {
  ctaText: string;
  cookieMode: boolean;
}

export default function CookieCTAButton({ ctaText, cookieMode }: CtaBtnProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <button
        className={`font-semibold text-center py-3 px-8 rounded-lg  ${cookieMode ? "text-white bg-[#1e8fa3]" : "text-white bg-transparent border-[#1e8fa3]"}`}
        onClick={toggleDrawer}
        data-drawer-target="drawer-bottom-example"
        data-drawer-show="drawer-bottom-example"
        data-drawer-placement="bottom"
        aria-controls="drawer-bottom-example"
      >
        {ctaText}
      </button>
     
     <div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        } z-10`}
        style={{ height: "calc(100% - 64px)" }} // Adjust based on top button height
      >
         <button
            onClick={toggleDrawer}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
          {/* <PortableText value={}/> */}
      </div>
    </>
  );
}
