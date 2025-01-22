import CampaignHeader from "@/app/components/CampaignHeader";
import { PortableText } from "next-sanity";
import React from "react";
import CTAButton from "./CTAButton";
import SecondaryCTABtn from "./SecondaryCTABtn";

const DynamicComponents = ({
  campaign,
  components,
  className,
  colors,
}: any) => {
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
      highlight: ({ children }: any) => (
        <span style={{ color: colors?.highlightColor }}>{children}</span>
      ),
    },
  };

  const subTitleComponent: any = {
    block: {
      normal: ({ children }: any) => (
        <p className="text-2xl lg:text-3xl font-semibold py-4 !leading-snug">
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
// console.log("com",components)
  return (
    <div
      className={`${className} ${
        campaign?.themeMode == "lightMode" ? "text-black" : "text-white"
      }`}
    >
      {components?.map((component: any, index: number) => {
        switch (component._type) {
          // case "topTemplateLogo":
          //   return (
          //     <div key={`topTemplateLogo-${index}`} className="">
          //       {component?.templateLogo?.length > 1 ? (
          //         component?.templateLogo?.map((item: any, i: number) => (
          //           <div className="flex" key={`logo-${i}`}>
          //             <img
          //               src={item?.url}
          //               alt={"sampleText"}
          //               className="max-h-full"
          //             />
          //           </div>
          //         ))
          //       ) : (
          //         <img
          //           src={component?.templateLogo[0]?.url}
          //           alt={"sampleText"}
          //           className="max-h-full"
          //         />
          //       )}
          //     </div>
          //   );

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
              <PortableText
                key={`headingComponent-${index}`}
                value={component?.title}
                components={titleComponent}
              />
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
                    themeMode={campaign?.themeMode}
                  />
                )}
                {component?.secondaryBtnComponent?.secondaryBtnText && (
                  <SecondaryCTABtn
                    ctaText={component?.secondaryBtnComponent?.secondaryBtnText}
                    themeMode={campaign?.themeMode}
                    isSecondaryBtn={true}
                    videoDetails={component?.secondaryBtn?.videoDetails}
                  />
                )}
                {component?.note && <PortableText value={component?.note} />}
              </div>
            );

          default:
            return <div key={`unknown-${index}`}>Unknown component</div>;
        }
      })}
    </div>
  );
};

export default DynamicComponents;
