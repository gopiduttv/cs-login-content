"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "@/sanity/lib/image";

interface ICampaignImageArea {
  campaignImage: any;
  className: string;
  isCarousal?: boolean;
}

function CampaignImageArea({
  campaignImage,
  className,
  isCarousal = false,
}: ICampaignImageArea) {
  const fontColor =
    campaignImage?.themeMode == "lightMode" ? "text-black" : "text-white";

  return (
    <div className={className}>
      {campaignImage?.campaignImage && !isCarousal && (
        <Image
          alt={
            campaignImage?.campaignImage?.metadata?.altText || "campaign Image"
          }
          src={campaignImage?.campaignImage?.url}
          width={500}
          height={500}
        />
      )}

      {isCarousal && campaignImage?.structure?.campaignCarousalImage?.length > 0 && (
        <Swiper
          navigation={true}
          // className="w-[500px]"
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
         {campaignImage?.structure?.campaignCarousalImage?.map(
            (e: any, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  className="max-h-[48vh] w-auto justify-self-end"
                  src={urlFor(e.speakerImage).url()}
                  alt={"campaign carousel image"}
                  width={500}
                  height={500}
                />
                <h3
                  className={`${fontColor} text-2xl text-right font-semibold break-words w-[500px] `}
                >
                  {e.speakerName}
                </h3>
                <p
                  className={`${fontColor} text-xl text-right font-normal break-words w-[500px]`}
                >
                  {e.speakerDesignation}
                </p>
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </div>
  );
}

export default CampaignImageArea;
