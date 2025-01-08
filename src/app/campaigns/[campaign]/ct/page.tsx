import Banner from "@/components/common/BannerFooter/Banner";
import BannerHeader from "@/components/common/BannerHeader/BannerHeader";
import CTAbutton from "@/components/common/CTAButton";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import { runQuery } from "@/sanity/lib/client";
import { getBannerByID, getCampaignByID } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";
import CampaignTextArea from "../CampaignTextArea";

export default async function RightImageLeftText({
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

  console.log({bannerID, id: !!bannerID })

  const mainTitle =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";

  return (
    <Section className="w-full h-screen overflow-hidden bg-gradient-to-r from-cyan-500 to-cyan-500">
      <Container className={` flex flex-col  pt-4 md:pt-16 gap-3`}>
        <div className="flex items-center gap-3 pb-8">
        {/* <p>{campaign.slug.current}</p>
          <BannerHeader
            className="text-center py-20 w-1/2"
            mainTitle={mainTitle}
            subTitle="That’s a 45.5% increase over the 2019 average of $30,876."
            subText="CSPay offers the most streamlined card payments experience for dental offices. With card-on-file, auto-debit and text-to-pay capabilities, stay on step ahead of shifting patient behavior with CSPay"
            ctaText="Book Free Demo"
          />
          <div className="w-1/2">
            <Image
              className="w-full"
              alt=""
              src="https://cdn.sanity.io/images/bgk0i4de/production/1eb80062b72e340456591ed3936705883b9cae52-1140x1144.png"
              width={400}
              height={400}
            />
          </div> */}
          <CampaignTextArea/>
        </div>
        <Banner className="" banner={banner} disabled={!Boolean(bannerID)} />
      </Container>
    </Section>
  );
}
