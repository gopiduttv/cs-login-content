import Banner from "@/components/common/BannerFooter/Banner";
import BannerHeader from "@/components/common/BannerHeader/BannerHeader";
import CTAbutton from "@/components/common/CTAButton";
import React from "react";

export default function CenterText(props: any) {
  const mainTitle =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";

  return (
    <div
      className={`${props.className} w-auto h-max flex flex-col items-center pt-48 gap-3`}
    >
      {props.children}
      <BannerHeader 
        mainTitle={mainTitle}
        subTitle="That’s a 45.5% increase over the 2019 average of $30,876."
        subText="CSPay offers the most streamlined card payments experience for dental offices. With card-on-file, auto-debit and text-to-pay capabilities, stay on step ahead of shifting patient behavior with CSPay"
        ctaText="Book Free Demo" />
      <Banner
        className=""
        bannerHeading="Inner Circle 2025 - Get Early Bird Tickets!"
        bannerText="CS Customers receive an additional $100 off on early bird pricing available through September 13, 2024. Registration is limited to the first 150 dental practices."
        registerBtnText="Register Now"
      />
    </div>
  );
}
