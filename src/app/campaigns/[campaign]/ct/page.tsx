import Banner from "@/components/common/BannerFooter/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID, getCampaignLayoutByID, getViewPorts } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";

export default async function CenterText({
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
      <Container className={` flex flex-col justify-center pt-4 md:pt-16 gap-3`}>
        <div className="flex flex-row justify-center gap-3 pb-8 w-full">
          <CampaignTextArea campaign={campaign} className="w-full" />
        </div>
        <Banner className="w-1/2" banner={banner} disabled={!Boolean(bannerID)} />
      </Container>
    </Section>
  );
}
