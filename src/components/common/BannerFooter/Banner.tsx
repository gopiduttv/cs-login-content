import React from "react";
import Section from "../structure/Section";
import Container from "../structure/Container";
import { PortableText } from "next-sanity";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

export default function Banner({banner}: any) {
  return(
      <Container className={`bg-[${banner?.backgroundColorGradient}] text-white p-${banner?.sectionPadding} rounded-lg`}>
          <div className={`container mx-auto px-${banner?.containerPadding}`}>
            <div className="flex justify-between items-center">
              <div>
                {/* <h2 className="text-2xl font-bold">{banner?.bannerHeading}</h2> */}
                <PortableText value={banner?.bannerHeading}/>
                <span className="text-sm font-light">{banner?.eventLocation}</span>
              </div>
              <a href="#" className={`bg-[${banner?.ctaBtnColor}] text-[${banner?.ctaBtnTextColor}] font-bold py-2 px-4 rounded`}>
                {banner?.ctaBtnTextForEvent}
              </a>
            </div>
            {/* <p className="pt-4">{banner?.eventDescription}</p> */}
            <PortableText value={banner?.eventDescription}/>
          </div>
      </Container>
  )
}
