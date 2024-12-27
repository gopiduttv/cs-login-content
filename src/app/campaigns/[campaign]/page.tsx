import { runQuery } from "@/sanity/lib/client";
import { getCampaignByID } from "@/sanity/lib/queries";
import React from "react";

export default async function Campaign({ params }: { params: any }) {
  const { campaign: campaignID } = await params;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  return <div>{campaign.slug.current}</div>;
}
