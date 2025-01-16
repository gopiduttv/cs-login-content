import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../../components/CampaignTextArea";
import CampaignImageArea from "../../components/CampaignImageArea";

export default async function LeftImageRightText({
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
  return (
    <Section
      bgColor={campaign?.backgroundColorGradient}
      //  className={`w-full h-screen`}
    >
      <Container
        className={` flex flex-col px-4 md:px-12 pt-4 md:py-8 gap-3  `}
      >
        <div className="flex items-center gap-4 lg:gap-24 pb-8">
          <CampaignImageArea
            campaignImage={campaign}
            className="min-w-[500px]"
          />
          <CampaignTextArea campaign={campaign} className="" />
        </div>
      </Container>
      {bannerID && <Banner className="h-[30vh]" banner={banner} />}
    </Section>
  );
}
