import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import React from "react";
import CampaignTextArea from "../../components/CampaignTextArea";
import CampaignImageArea from "../../components/CampaignImageArea";
import CookieShow from "@/components/common/cookieShow/cookieShow";
import { Color } from "./RightImageLeftText";

export default function LeftImageRightText({
  campaign,
  cookies,
  banner = null,
  colors,
}: {
  campaign: any;
  cookies: any;
  banner: any;
  colors: Color;
}) {
  console.log(colors)
  return (
    <Section
      bgColor={colors?.selectedBgColor}
      //  className={`w-full h-screen`}
    >
      {campaign?.isCookieShow && (
        <CookieShow cookie={cookies} campaign={campaign} />
      )}
      <Container
        className={` flex flex-col px-4 md:px-12 pt-4 md:py-8 gap-3  `}
      >
        <div className="flex items-center gap-4 lg:gap-24 pb-8">
          <CampaignImageArea
            campaignImage={campaign}
            className=" max-w-[500px] hidden lg:block"
          />
          <CampaignTextArea
            colors={colors}
            campaign={campaign}
            className="max-w-xl xl:max-w-3xl"
          />
        </div>
      </Container>
      {banner && <Banner className="" banner={banner} />}
    </Section>
  );
}
