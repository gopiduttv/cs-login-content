import React from "react";
import CtaButton from "../CTAButton";

export interface IBannerInterface {
  mainTitle?: string;
  subTitle?: string;
  ctaText: string;
  subText?: string;
  className?: string;
}

export default function BannerHeader({
  mainTitle,
  subTitle,
  ctaText,
  subText,
  className,
}: IBannerInterface) {
  return (
    <div className={className}>
      <h1 className={"text-white text-5xl  font-semibold pb-4"}>{mainTitle}</h1>
      <h3 className="text-3xl text-yellow-600">{subTitle}</h3>
      <p className="text-white text-2xl py-4">{subText}</p>
      <CtaButton
        className={"text-white font-medium text-center bg-[#2D353E]"}
        ctaText={ctaText}
      />
    </div>
  );
}
