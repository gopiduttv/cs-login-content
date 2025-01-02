import { H2 } from "@/components/common/HeadingTag";
import CenterText from "@/components/templates/Layouts/CenterText";
import Banner from "@/components/common/Banners/Banner";
import { runQuery } from "@/sanity/lib/client";
import { getCampaignByID } from "@/sanity/lib/queries";
import React from "react";

export default async function Campaign({ params }: { params: any }) {
  const { campaign: campaignID } = await params;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  return (
    <div className="w-full h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <CenterText>
        {
          <H2
            className={" text-yellow-500 text-3xl font-b"}
            text={campaign.slug.current}
          />
        }
      </CenterText>
    </div>
  );
}
