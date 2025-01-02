import Banner from "@/components/common/Banners/Banner";
import { runQuery } from "@/sanity/lib/client";
import { getCampaignByID } from "@/sanity/lib/queries";
import React from "react";

export default async function Campaign({ params }: { params: any }) {
  const { campaign: campaignID } = await params;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  return <div><Banner  className="" bannerHeading="Inner Circle 2025 - Get Early Bird Tickets!" bannerText="CS Customers receive an additional $100 off on early bird pricing available through September 13, 2024. Registration is limited to the first 150 dental practices." registerBtnText="Register Now"/></div>;
}
