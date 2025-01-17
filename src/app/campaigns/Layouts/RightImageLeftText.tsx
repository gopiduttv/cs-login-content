import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID, getCookiesData } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../../components/CampaignTextArea";
import CampaignImageArea from "../../components/CampaignImageArea";
import CookieShow from "@/components/common/cookieShow/cookieShow";

export default async function RightImageLeftText({
  campaignID,
  bannerID,
}: {
  campaignID: any;
  bannerID: any;
}) {
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  const banner = bannerID
    ? await runQuery(getBannerByID(), { bannerID })
    : null;
    
    const cookies = await runQuery(getCookiesData());

  return (
    <Section bgColor={campaign?.backgroundColorGradient} bgImage={campaign?.backgroundImage?.url}>
      {campaign?.isCookieShow &&
        <CookieShow cookie={cookies}  campaign={campaign}/>
      }
      <Container
        className={` flex flex-col px-4 md:px-12 pt-4 md:py-8  gap-3  ${banner?.isFullScreen ? "flex-1" : ""}`}
      >
        <div className="flex-grow flex items-center gap-4 lg:gap-24">
          <CampaignTextArea campaign={campaign} className="flex flex-col" />
          <CampaignImageArea
            campaignImage={campaign}
            className="items-center min-w-[500px] hidden lg:block"
            isCarousal={
              campaign?.campaignCarousalImage?.length >= 1 ? true : false
            }
          />
        </div>
      </Container>
      {bannerID && <Banner className="" banner={banner} />}
    </Section>
  );
}
