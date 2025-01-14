import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";
import CampaignImageArea from "../CampaignImageArea";

export default async function LeftImageRightText({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { campaign: campaignID } = await params;
  const { banner: bannerID } = await searchParams;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  const banner = bannerID ? await runQuery(getBannerByID(), { bannerID }) : null;
  return (
    <Section bgColor={campaign?.backgroundColorGradient}
    //  className={`w-full h-screen`}
     >
      <Container className={` flex flex-col px-4 md:px-8 pt-4 md:py-8 gap-3  `}>
        <div className="flex items-center gap-4 lg:gap-24 pb-8">
          <CampaignImageArea campaignImage={campaign} className="max-w-500"/>
          <CampaignTextArea  campaign={campaign} className="w-1/2"/>
        </div>
      </Container>
        {bannerID && <Banner className="h-[30vh]" banner={banner} /> }
    </Section>
  );
}
