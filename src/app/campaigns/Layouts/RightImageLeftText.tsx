import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import React from "react";
import CampaignTextArea from "../../components/CampaignTextArea";
import CampaignImageArea from "../../components/CampaignImageArea";
import CookieShow from "@/components/common/cookieShow/cookieShow";
import DynamicStructure from "@/components/common/dynamicStructure";

export  interface Color{
  h1Color:string
  highlightColor:string
  paragraphColor:string
  selectedBgColor:string

}

export default function RightImageLeftText({
  campaign,
  cookies,
  banner = null,
  colors
}: {
  campaign: any;
  cookies: any;
  banner: any;
  colors:Color
}) {
  return (
  
    <Section
      bgColor={colors?.selectedBgColor}
      bgImage={campaign?.backgroundImage?.url}
    >
      {campaign?.isCookieShow &&
        <CookieShow cookie={cookies}  campaign={campaign}/>
      }
      <Container
        className={` flex flex-col px-4 md:px-12 pt-4 md:py-8  gap-3  ${banner?.isFullScreen ? "flex-1" : ""}`}
      >
        <div className="flex-grow flex items-center gap-4 lg:gap-24">
          {/* <CampaignTextArea campaign={campaign} className="flex flex-col max-w-xl xl:max-w-3xl" /> */}
          <DynamicStructure colors={colors} campaign={campaign} components={campaign?.structure?.components} className="flex flex-col max-w-xl xl:max-w-3xl" />
          <CampaignImageArea
            campaignImage={campaign}
            className="items-center max-w-[500px] hidden lg:block"
            isCarousal={
              campaign?.campaignCarousalImage?.length >= 1 ? true : false
            }
          />
            {/* <CampaignImageArea
            campaignImage={campaign}
            className="items-center max-w-[500px] hidden lg:block"
            isCarousal={
              campaign?.campaignCarousalImage?.length >= 1 ? true : false
            }
          /> */}
        </div>
      </Container>
      {banner && <Banner className="" banner={banner} />}
    </Section>
  );
}
