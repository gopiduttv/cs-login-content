import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";
import CampaignImageArea from "../CampaignImageArea";
import CampaignHeader from "@/app/components/CampaignHeader";

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
  const banner = bannerID
    ? await runQuery(getBannerByID(), { bannerID })
    : null;

  return (
    <Section className="w-full h-screen overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-500">
      <Container className={` flex flex-col  pt-4 md:pt-16 gap-3`}>
          {campaign?.templateLogo?.url && (
            <CampaignHeader
              logoUrl={campaign?.templateLogo?.url}
              templateHeader={campaign?.templateText}
              eventType={campaign?.templateEventType}
              eventDate={campaign?.templateEventDate}
            />
          )}
        <div className="flex items-center gap-3 pb-8">
          <CampaignImageArea campaignImage={campaign} className="w-1/2" />
          <CampaignTextArea campaign={campaign} className="w-1/2" />
        </div>
        <Banner className="" banner={banner} disabled={!Boolean(bannerID)} />
      </Container>
    </Section>
  );
}
