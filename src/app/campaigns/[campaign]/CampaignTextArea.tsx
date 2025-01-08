import BannerHeader from "@/components/common/BannerHeader/BannerHeader";
import CTAButton from "@/components/common/CTAButton";
import { PortableText } from "next-sanity";
import React from "react";

const customComponents: any = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-white text-4xl  font-semibold pb-4">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl text-yellow-600">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-white text-xl py-4">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-[#42ba78]">{children}</strong>
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
function CampaignTextArea({ campaign, className }: any) {
  return (
    <div className={className}>
      <PortableText value={campaign?.title} components={customComponents} />
      <PortableText value={campaign?.subTitle} components={customComponents} />
      <PortableText value={campaign?.paragraph} components={customComponents} />
      <CTAButton
        className={"text-white font-medium text-center bg-[#2D353E]"}
        ctaText={campaign?.ctaBtnText}
      />
    </div>
  );
}

export default CampaignTextArea;
