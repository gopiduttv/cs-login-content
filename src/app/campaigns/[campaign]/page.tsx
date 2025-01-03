import { H2 } from "@/components/common/HeadingTag";
import CenterText from "@/components/templates/Layouts/CenterText";
import Banner from "@/components/common/BannerFooter/Banner";
import { runQuery } from "@/sanity/lib/client";
import { getCampaignByID } from "@/sanity/lib/queries";
import React from "react";
import LeftImageRightText from "@/components/templates/Layouts/LeftImageRightText";
import RightImageLeftText from "@/components/templates/Layouts/RightImageLeftText";
import BannerHeader from "@/components/common/BannerHeader/BannerHeader";

export default async function Campaign({ params }: { params: any }) {
  const { campaign: campaignID } = await params;
  const campaign = await runQuery(getCampaignByID(), { campaignID });
  const mainTitle =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";
  return (
    <div className="w-full h-[100vh] overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
      <RightImageLeftText>
        {
          <>
            <H2
              className={" text-yellow-500 text-3xl font-b"}
              text={campaign.slug.current}
            />
            <BannerHeader
              mainTitle={mainTitle}
              subTitle="That’s a 45.5% increase over the 2019 average of $30,876."
              subText="CSPay offers the most streamlined card payments experience for dental offices. With card-on-file, auto-debit and text-to-pay capabilities, stay on step ahead of shifting patient behavior with CSPay"
              ctaText="Book Free Demo"
            />
          </>
        }
      </RightImageLeftText>
    </div>
  );
}
