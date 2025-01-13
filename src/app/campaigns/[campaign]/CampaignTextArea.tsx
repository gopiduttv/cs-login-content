import CampaignHeader from "@/app/components/CampaignHeader";
import CTAButton from "@/components/common/CTAButton";
import SecondaryCTABtn from "@/components/common/SecondaryCTABtn";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import React from "react";

const customComponents: any = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl xl:text-5xl  font-extrabold py-4 !leading-tight">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className=" text-3xl  font-semibold py-4">{children}</h2>
    ),
    h3: ({ children }: any) => <h3 className="text-2xl">{children}</h3>,
    normal: ({ children }: any) => <p className="xl:text-lg pb-2 pt-1 text-[#000000B2]">{children}</p>,
  },
  marks: {
    textColor: ({ children, value }: any) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
    highlightColor: ({ children, value }: any) => (
      <span style={{ background: value.value }}>{children}</span>
    ),
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
  types: {
    image: ({ value }: any) => (
      <div>
        <img
          src={urlFor(value).url()}
          width={value?.width ?? 20}
          height={value?.height ?? 20}
          alt={value?.alt || "Image"}
        />
      </div>
    ),
  },
};
function CampaignTextArea({ campaign, className }: any) {
  console.log("cc",campaign)
  return (
    <div
      className={`${className} ${campaign?.themeMode == "lightMode" ? "text-black" : "text-white"}`}
    >
      {campaign?.templateLogo?.url && (
        <CampaignHeader
          logoUrl={campaign?.templateLogo?.url}
          templateHeader={campaign?.templateText}
          eventType={campaign?.templateEventType}
          eventDate={campaign?.templateEventDate}
        />
      )}
      {campaign?.title && (
        <PortableText value={campaign?.title} components={customComponents} />  
      )}
      {campaign?.subTitle && (
        <div className={`${campaign?.subTitle[0]?._type == "image" ? "text-left":""} flex items-center gap-10`}>
          <PortableText
            value={campaign?.subTitle}
            components={customComponents}
          />
        </div>
      )}
      {campaign?.paragraph && (
        <PortableText
          value={campaign?.paragraph}
          components={customComponents}
        />
      )}
      <div className="flex gap-6">
        {campaign?.ctaBtn?.ctaBtnText && (
          <CTAButton
            ctaText={campaign?.ctaBtn?.ctaBtnText}
            themeMode={campaign?.themeMode}
          />
        )}
        {campaign?.secondaryBtn?.secondaryBtnText && (
          <SecondaryCTABtn
            ctaText={campaign?.secondaryBtn?.secondaryBtnText}
            themeMode={campaign?.themeMode}
            isSecondaryBtn={true}
            videoDetails={campaign?.secondaryBtn?.videoDetails}
          />
        )}
      </div>
    </div>
  );
}

export default CampaignTextArea;
