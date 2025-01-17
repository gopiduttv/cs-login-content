import React, { useState } from "react";
import { PortableText } from "next-sanity";
import {CloseIcon} from '@sanity/icons'

import CookieCTAButton from "../cookieCTABtn";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

const customComponents: any = {
  block: {
    normal: ({ children }: any) => (
      <p className="pt-4 text-[16px] text-white font-normal">
        {children}
      </p>
    ),
  },
  marks: {
    highlightColor: ({ children, value }: any) => (
      <span style={{ background: value.value }}>{children}</span>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        className="text-gray-500 underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function CookieShow({ cookie, campaign }: any) {
    console.log("hjg",cookie);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <>
    <div
      className={`flex text-white bottom-0 w-full`}
      style={{
        backgroundColor: cookie?.backgroundColorGradient,
      }}
    >
      <div
        style={{
          backgroundColor: cookie?.backgroundColorGradient,
        }}
        className={`flex text-white px-12 py-8 max-w-7xl m-auto`}
      >
        <PortableText value={cookie?.Content} />
        <div className="flex gap-6 mt-6">
          {cookie?.ctaBtn?.ctaBtnText && (
            <CookieCTAButton
              ctaText={cookie?.ctaBtn?.ctaBtnText}
              cookieMode={true}
            />
          )}
          {cookie?.secondaryCtaBtn?.secondaryBtnText && (
            <CookieCTAButton
              ctaText={cookie?.secondaryCtaBtn?.secondaryBtnText}
              cookieMode={false}
              toggleDrawer={toggleDrawer}
            />
          )}
        </div>
      </div>
    </div>
    <div
        style={{background: cookie?.backgroundColorGradient,  height: "calc(100% - 150px)" }}
        className={`fixed bottom-0 left-0 right-0 shadow-lg transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full"
        } z-10`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
         <CloseIcon/>
        </button>
          <PortableText value={cookie?.cookiesDetail}/>
      </div>
    </>
  );
}
