import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";
import CampaignHeader from "@/app/components/CampaignHeader";

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
  const banner = bannerID
    ? await runQuery(getBannerByID(), { bannerID })
    : null;
  return (
    <Section
      bgColor={campaign?.backgroundColorGradient}
      // className={`w-full h-screen`}
    >
      <Container
        className={`flex flex-col justify-center px-4  md:px-8  pt-4 md:pb-8 gap-3 ${banner?.isFullScreen ? "flex-1" : ""}`}
      >
        <div className="text-center gap-3 pb-8 w-full">
          <CampaignTextArea campaign={campaign} className="w-full justify-items-center" />
        </div>
      </Container>
      {bannerID && <Banner className="h-[30vh]" banner={banner} />}
    </Section>
  );
}
