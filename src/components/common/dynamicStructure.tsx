import CampaignHeader from "@/app/components/CampaignHeader";
import { PortableText } from "next-sanity";
import React, { Children } from "react";
import CTAButton from "./CTAButton";
import SecondaryCTABtn from "./SecondaryCTABtn";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
const builder = urlBuilder(client);

const DynamicComponents = ({
  campaign,
  components,
  className,
  colors,
}: any) => {
  const urlBuilder: any = (source: any) => urlBuilder(client).image(source);

  const ImageComponent = ({ value, isInline }: any) => {
    if (!value?.asset?._ref) return null;
  
    const { width, height } = value.asset.metadata?.dimensions || { width: 800, height: 600 };
  
    return (
      <img
        src={builder.image(value).width(isInline ? 100 : 100).fit('max').auto('format').url()}
        alt={value.alt || 'Sanity Image'}
        // className="w-24 h-6"
        loading="eager"
        style={{
         
          aspectRatio: width / height,
          width:value?.width,
          height:value?.height

        }}
      />
    );
  };
  
  const titleComponent: any = {
    block: {
      normal: ({ children }: any) => (
        <p
          style={{ color: colors?.h1Color }}
          className="text-3xl lg:text-5xl font-extrabold py-4 !leading-tight font-manrope"
        >
          {children}
        </p>
      ),
    },
    marks: {
      highlight: ({ children }: any) => (
        <span style={{ color: colors?.highlightColor }}>{children}</span>
      ),
    },
    types: {
      image: ImageComponent
      
    },
  };

  const subTitleComponent: any = {
    block: {
      normal: ({ children }: any) => (
        <p
          style={{ color: colors?.subtitleText }}
          className="text-2xl lg:text-3xl font-semibold py-4 !leading-snug"
        >
          {children}
        </p>
      ),
    },
    marks: {
      highlight: ({ children }: any) => (
        <span style={{ color: colors?.highlightColor }}>{children}</span>
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
      highlight: ({ children }: any) => (
        <span style={{ color: colors?.highlightColor }}>{children}</span>
      ),
    },
  };

  return (
    <div
      className={`${className} ${
        campaign?.themeMode == "lightMode"
          ? "text-[#000000B2]"
          : "text-[#FFFFFFB2]"
      }`}
    >
      {components?.map((component: any, index: number) => {
        switch (component._type) {
          case "topTemplateLogo":
            return (
              <div key={`topTemplateLogo-${index}`} className="">
                {campaign?.templateLogos?.components[0]?.templateLogos?.length >
                1 ? (
                  <div className="flex gap-6 flex-wrap">
                    {campaign?.templateLogos?.components[0]?.templateLogos?.map(
                      (item: any, i: number) => (
                        <Image
                          className="w-auto h-16"
                          src={item?.asset?.url}
                          width={
                            item?.asset?.metadata?.dimensions?.width || 200
                          }
                          height={
                            item?.asset?.metadata?.dimensions?.height || 200
                          }
                          alt={"sampleText"}
                          key={item?.asset?._id}
                        />
                      )
                    )}
                  </div>
                ) : (
                  <Image
                    src={
                      campaign?.templateLogos?.components[0]?.templateLogos[0]
                        ?.asset?.url
                    }
                    alt={"sampleText"}
                    // className="max-h-full"
                    width={
                      campaign?.templateLogos?.components[0]?.templateLogos[0]
                        ?.asset?.metadata?.dimensions?.width || 200
                    }
                    height={
                      campaign?.templateLogos?.components[0]?.templateLogos[0]
                        ?.asset?.metadata?.dimensions?.height || 200
                    }
                    key={
                      campaign?.templateLogos?.components[0]?.templateLogos[0]
                        ?.asset?._id
                    }
                  />
                )}
              </div>
            );

          case "pillElement":
            return (
              <CampaignHeader
                key={`pillElement-${index}`}
                logoUrl={component?.templateLogo?.url}
                templateHeader={component?.templateText}
                eventType={component?.templateEventType}
                eventDate={component?.templateEventDate}
                eventLocation={component?.eventLocation}
              />
            );

          case "headingComponent":
            return (
              <div className="flex"  key={`headingComponent-${index+Math.random()}`}>
              <PortableText
                key={`headingComponent-${index}`}
                value={component?.title}
                components={titleComponent}
              />
              </div>
            );

          case "subHeadingComponent":
            return (
              <div
                key={`subHeadingComponent-${index}`}
                className="flex items-center gap-10"
              >
                <PortableText
                  value={component?.subTitle}
                  components={subTitleComponent}
                />
              </div>
            );

          case "paragraphComponent":
            return (
              <PortableText
                key={`paragraphComponent-${index}`}
                value={component?.paragraph}
                components={paragraphComponents}
              />
            );

          case "buttonComponents":
            return (
              <div
                key={`buttonComponents-${index}`}
                className="flex gap-6 mt-6 items-center"
              >
                {component?.ctaBtn?.ctaBtnText && (
                  <CTAButton
                    ctaText={component?.ctaBtn?.ctaBtnText}
                    ctaBtnColor={component?.ctaBtn?.ctaBtnColor}
                    themeMode={campaign?.themeMode}
                    ctaBtnTextColor={component?.ctaBtn?.ctaBtnTextColor}
                  />
                )}
                {component?.secondaryBtnComponent?.secondaryBtnText && (
                  <SecondaryCTABtn
                    ctaText={component?.secondaryBtnComponent?.secondaryBtnText}
                    themeMode={campaign?.themeMode}
                    isSecondaryBtn={true}
                    ctaBtnTextColor={component?.secondaryBtnComponent?.ctaBtnTextColor}
                    ctaBtnColor={component?.secondaryBtnComponent?.ctaBtnColor}
                    videoDetails={component?.secondaryBtn?.videoDetails}
                  />
                )}
                {component?.note && <PortableText value={component?.note} />}
              </div>
            );
          case "noteComponent":
            return (
              <p className="mt-8 text-base" key={`disclaimer-${index}`}>
                {component?.disclaimer}
              </p>
            );

          default:
            return <div key={`unknown-${index}`}>Unknown component</div>;
        }
      })}
    </div>
  );
};

export default DynamicComponents;
