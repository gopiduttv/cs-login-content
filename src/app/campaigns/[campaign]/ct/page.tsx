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
  const banner = bannerID ? await runQuery(getBannerByID(), { bannerID }) : null;
 console.log("medbhajq",banner)
  return (
    <Section className="w-full h-screen overflow-hidden flex flex-col bg-gray-900">
      <Container className={` flex flex-col justify-center px-4 md:px-8  pt-4 md:pt-16 gap-3 ${banner?.isFullScreen ? "flex-1" : ""}`}>
        <div className="flex flex-row justify-center gap-3 pb-8 w-full">
          {campaign?.templateLogo?.url && (
            <CampaignHeader
              logoUrl={campaign?.templateLogo?.url}
              templateHeader={campaign?.templateText}
              eventType={campaign?.templateEventType}
              eventDate={campaign?.templateEventDate}
            />
          )}
          <CampaignTextArea campaign={campaign} className="w-full" />
        </div>
      </Container>
      {bannerID && <Banner className="h-[30vh]" banner={banner} /> }
    </Section>
  );
}
