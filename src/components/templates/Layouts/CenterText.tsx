import Banner from "@/components/common/Banners/Banner";
import CTAbutton from "@/components/common/CTAButton";
import React from "react";

export default function CenterText(props: any) {
  const paragraphText =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";
  return (
    <div
      className={`${props.className} w-auto h-max flex flex-col items-center pt-72 gap-3`}
    >
      {props.children}
      <h1
        className={
          "text-white text-5xl text-center max-w-3xl font-semibold pb-4"
        }
      >
        {paragraphText}
      </h1>
      <h3 className="text-3xl text-yellow-600">
        That's a 45.5% increase over the 2019 average of $30,876.
      </h3>
      <CTAbutton className={' rounded-sm text-white font-medium text-center bg-[#2D353E]'} text={"Book Free Demo"}/>
      <Banner
        className=""
        bannerHeading="Inner Circle 2025 - Get Early Bird Tickets!"
        bannerText="CS Customers receive an additional $100 off on early bird pricing available through September 13, 2024. Registration is limited to the first 150 dental practices."
        registerBtnText="Register Now"
      />
    </div>
  );
}
