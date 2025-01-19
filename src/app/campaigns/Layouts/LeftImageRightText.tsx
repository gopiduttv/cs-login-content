import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import React from "react";
import CampaignTextArea from "../../components/CampaignTextArea";
import CampaignImageArea from "../../components/CampaignImageArea";
import CookieShow from "@/components/common/cookieShow/cookieShow";

export default function LeftImageRightText({
  campaign,
  cookies,
  banner = null,
}: {
  campaign: any;
  cookies: any;
  banner: any;
}) {
  return (
    <Section
      bgColor={campaign?.backgroundColorGradient}
      //  className={`w-full h-screen`}
    >
       {campaign?.isCookieShow &&
              <CookieShow cookie={cookies}  campaign={campaign}/>
            }
      <Container
        className={` flex flex-col px-4 md:px-12 pt-4 md:py-8 gap-3  `}
      >
        <div className="flex items-center gap-4 lg:gap-24 pb-8">
          <CampaignImageArea
            campaignImage={campaign}
            className="xl:min-w-[500px] min-w-[400px] "
          />
          <CampaignTextArea campaign={campaign} className="" />
        </div>
      </Container>
      {banner && <Banner className="" banner={banner} />}
    </Section>
  );
}
