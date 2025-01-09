import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";
import CampaignImageArea from "../CampaignImageArea";

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
  const banner = bannerID ? await runQuery(getBannerByID(), { bannerID }) : null;

  return (
    <Section className="w-full h-screen overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-500">
      <Container className={` flex flex-col  pt-4 md:pt-16 gap-3`}>
        <div className="h-[50vh] flex items-center gap-3 pb-8">
          <CampaignTextArea  campaign={campaign} className="w-1/2 flex flex-col items-center"/>
          <CampaignImageArea campaignImage={campaign} className="w-1/2 flex flex-col items-center" />
        </div>
        <Banner className="h-[30vh]" banner={banner} disabled={!Boolean(bannerID)} />
      </Container>
    </Section>
  );
}
