import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";
import CampaignImageArea from "../CampaignImageArea";
import CampaignHeader from "@/app/components/CampaignHeader";

export default async function RightImageLeftText({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { campaign: campaignID } = await params;
  const { banner: bannerID } = await searchParams;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  const banner = bannerID
    ? await runQuery(getBannerByID(), { bannerID })
    : null;
  return (
    <Section bgColor={campaign?.backgroundColorGradient}
    //  className={`w-full h-screen`}
     >
      <Container className={` flex flex-col px-4 md:px-12 pt-4 md:py-8  gap-3  ${banner?.isFullScreen ? "flex-1" : ""}`}>
        <div className="flex-grow flex items-center gap-4 lg:gap-24">
          <CampaignTextArea
            campaign={campaign}
            className="flex flex-col"
          />
          <CampaignImageArea
            campaignImage={campaign}
            className="flex flex-col items-center min-w-[500px] hidden lg:block"
          />
        </div>
      </Container>
        {bannerID && <Banner className="h-[30vh]" banner={banner} /> }
    </Section>
  );
}
