import CampaignHeader from "@/app/components/CampaignHeader";
import CTAButton from "@/components/common/CTAButton";
import SecondaryCTABtn from "@/components/common/SecondaryCTABtn";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import React from "react";

function CampaignTextArea({ campaign, className, colors }: any) {
  const titleComponent: any = {
    block: {
      normal: ({ children }: any) => (
        <p
          style={{ color: colors?.paragraphColor }}
          className="text-3xl lg:text-5xl font-extrabold py-4 !leading-tight font-manrope"
        >
          {children}
        </p>
      ),
    },
    marks: {
      highlight: ({ children, value }: any) => (
        <span style={{ color: colors?.highlightColor }}>
          {children}
        </span>
      ),
    },
  };
  const subTitleComponent: any = {
    block: {
      normal: ({ children }: any) => (
        <p className="text-2xl lg:text-3xl  font-semibold py-4 !leading-snug">
          {children}
        </p>
      ),
    },
    marks: {
      highlight: ({ children, value }: any) => (
        <span style={{ color: colors?.highlightColor }}>
          {children}
        </span>
      ),
    },
  };

  const paragraphComponents: any = {
    block: {
      normal: ({ children }: any) => (
        <p
          style={{ color: colors?.paragraphColor }}
          className="xl:text-lg pb-2 pt-1"
        >
          {children}
        </p>
      ),
    },
    marks: {
      highlight: ({ children, value }: any) => (
        <span style={{ color: colors?.highlightColor }}>
          {children}
        </span>
      ),
    },
  };
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
          eventTime={campaign?.eventTime}
          eventTimezone={campaign?.eventTimeZone}
        />
      )}
      {campaign?.title && (
        <PortableText value={campaign?.title} components={titleComponent} />
      )}
      {campaign?.subTitle && (
        <div
          className={`${campaign?.subTitle[0]?._type == "image" ? "text-left" : ""} flex items-center gap-10`}
        >
          <PortableText
            value={campaign?.subTitle}
            components={subTitleComponent}
          />
        </div>
      )}
      {campaign?.paragraph && (
        <PortableText
          value={campaign?.paragraph}
          components={paragraphComponents}
        />
      )}
      <div className="flex gap-6 mt-6 items-center	">
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
        {campaign?.Note && <PortableText value={campaign?.Note} />}
      </div>
    </div>
  );
}

export default CampaignTextArea;
