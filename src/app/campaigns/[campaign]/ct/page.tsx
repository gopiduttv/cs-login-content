import Banner from "@/components/common/Banner/Banner";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import {
  getAllCampaignsByLayout,
  getBannerByID,
  getCampaignByID,
} from "@/sanity/lib/queries";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";

// Next.js will invalidate the cache when a
// request comes in, at most once every 15 mins.
export let revalidate = 15 * 60
 
// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const campaigns = await runQuery(getAllCampaignsByLayout(), { layout: "ct" });

  return campaigns.map((campaign: any) => ({
    campaign: campaign._id, // Ensure IDs are strings
  }));
}

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
        className={`flex flex-col justify-center max-w-5xl px-4  md:px-8  pt-4 md:pb-8 gap-3 ${banner?.isFullScreen ? "flex-1" : ""}`}
      >
        <div className="text-center gap-3 pb-8 w-full max-w-[950px] m-auto">
          <CampaignTextArea
            campaign={campaign}
            className="w-full justify-items-center"
          />
        </div>
      </Container>
      {bannerID && <Banner className="h-[30vh]" banner={banner} />}
    </Section>
  );
}
