import Banner from "@/components/common/BannerFooter/Banner";
import BannerHeader from "@/components/common/BannerHeader/BannerHeader";
import CTAbutton from "@/components/common/CTAButton";
import Container from "@/components/common/structure/Container";
import Section from "@/components/common/structure/Section";
import Image from "next/image";
import React from "react";

export default function LeftImageRightText({data}: any) {
  const mainTitle =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";

  return (
    <Section className="w-full h-screen overflow-hidden bg-gradient-to-r from-teal-500 to-teal-500">
      <Container
        className={` flex flex-col  pt-4 md:pt-16 gap-3`}
      >
        <div className="flex items-center gap-3 pb-8">
          <Image
            style={{ width: "50%" }}
            alt=""
            src="https://cdn.sanity.io/images/bgk0i4de/production/1eb80062b72e340456591ed3936705883b9cae52-1140x1144.png"
            width={500}
            height={500}
          />
          <BannerHeader
            mainTitle={mainTitle}
            subTitle="That’s a 45.5% increase over the 2019 average of $30,876."
            subText="CSPay offers the most streamlined card payments experience for dental offices. With card-on-file, auto-debit and text-to-pay capabilities, stay on step ahead of shifting patient behavior with CSPay"
            ctaText="Book Free Demo"
            className="text-center py-20 w-2/4"
          />
        </div>
        <Banner banner={data} />
      </Container>
    </Section>
  );
}
