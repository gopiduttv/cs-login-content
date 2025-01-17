import React from "react";
import { PortableText } from "next-sanity";
import { formatCustomDate, formatDateChange } from "@/utils/page";
import Link from "next/link";
import Image from "next/image";
import locIcon from "../../../../public/Frame.svg";
import { urlFor } from "@/sanity/lib/image";
import CTAButton from "../CTAButton";
import SecondaryCTABtn from "../SecondaryCTABtn";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

const customComponents: any = {
  block: {
    normal: ({ children }: any) => (
      <p className="pt-4 text-[16px] text-[#FFFFFFBF] font-normal">
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
  return (
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
        className={`text-white px-12 py-8 max-w-7xl m-auto`}
      >
        <PortableText value={cookie?.Content} />
        <div className="flex gap-6 mt-6">
          {cookie?.ctaBtn?.ctaBtnText && (
            <CTAButton
              ctaText={cookie?.ctaBtn?.ctaBtnText}
              cookieMode={true}
              themeMode={""}
            />
          )}
          {cookie?.secondaryCtaBtn?.secondaryBtnText && (
            <CTAButton
              ctaText={cookie?.secondaryCtaBtn?.secondaryBtnText}
              cookieMode={false}
              themeMode={""}
            />
          )}
        </div>
      </div>
    </div>
  );
}
