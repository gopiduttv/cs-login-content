import Banner from "@/components/common/BannerFooter/Banner";
import React from "react";

export default function LeftImageRightText(props:any) {
  return (
    <div>
        {
            props?.children
        }
        <section className="max-w-3xl">

        </section>
      <Banner
        className=""
        bannerHeading="Inner Circle 2025 - Get Early Bird Tickets!"
        bannerText="CS Customers receive an additional $100 off on early bird pricing available through September 13, 2024. Registration is limited to the first 150 dental practices."
        registerBtnText="Register Now"
      />
    </div>
  );
}
