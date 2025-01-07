import { H2 } from "@/components/common/HeadingTag";
import CenterText from "@/components/templates/Layouts/CenterText";
import Banner from "@/components/common/BannerFooter/Banner";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID, getViewPortByRegion } from "@/sanity/lib/queries";
import React from "react";
import LeftImageRightText from "@/components/templates/Layouts/LeftImageRightText";
import RightImageLeftText from "@/components/templates/Layouts/RightImageLeftText";
import BannerHeader from "@/components/common/BannerHeader/BannerHeader";

export default async function Campaign({ params, searchParams }: { params: any, searchParams: any }) {
  const { campaign: campaignID } = await params;
  const { banner: bannerID } = await searchParams;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  const banner = await runQuery(getBannerByID(), { bannerID });

  const mainTitle =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";
  return (
    <>
      {campaign?.slug?.current == "cs-conversations-promo" ? (
        <RightImageLeftText campaignData={campaign.slug.current} data={banner}/>
      ) : campaign.slug.current == "cs-conversations-promo-2025" ? (
        <LeftImageRightText slug={campaign.slug.current} data={banner}/>
      ) : campaign.slug.current == "cs-membership-promo" ? (
        <RightImageLeftText slug={campaign.slug.current} data={banner}/>
      ) : campaign.slug.current == "inner-circle-2026" ? (
        <CenterText slug={campaign.slug.current} data={banner}/>
      ) : campaign.slug.current == "cs-conversation-event" ? (
        <LeftImageRightText slug={campaign.slug.current} data={banner}/>
      ) : campaign.slug.current == "cs-pay-promo" ? (
        <RightImageLeftText slug={campaign.slug.current} data={banner}/>
      ) : (
        ""
      )}
    </>
  );
}
