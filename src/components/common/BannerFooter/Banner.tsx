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

const customComponents: any = {
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-bold">{children}</h2>,
    normal: ({ children }: any) => <p className="pt-4">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-[#42ba78]">{children}</strong>,
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-gray-500 underline text-sm" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function Banner({banner}: any) {
  
  return(
      <Container className={`bg-[${banner?.backgroundColorGradient}] text-white p-${banner?.sectionPadding} rounded-lg`}>
          <div className={`container mx-auto px-${banner?.containerPadding}`}>
            <div className="flex justify-between items-center">
              <div>
                <PortableText value={banner?.bannerHeading} components={customComponents}/>
                <span className="text-sm font-light">{banner?.eventLocation}</span>
              </div>
              <a href="#" className={`bg-[${banner?.ctaBtnColor}] text-[${banner?.ctaBtnTextColor}] font-bold py-2 px-4 rounded`}>
                {banner?.ctaBtnTextForEvent}
              </a>
            </div>
            <PortableText value={banner?.eventDescription}  components={customComponents}/>
          </div>
      </Container>
  )
}
