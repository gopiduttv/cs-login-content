import React from "react";
import Section from "../structure/Section";
import Container from "../structure/Container";
import { PortableText } from "next-sanity";
import { formatCustomDate, formatDateChange } from "@/utils/page";
import Link from "next/link";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

const customComponents: any = {
  block: {
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-4xl font-bold">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="pt-4 text-2xl leading-8">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        className="text-gray-500 underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function Banner({ className, banner, disabled }: any) {

  if (disabled) {
    return <></>
  }
  
  return (
    <div style={{backgroundColor: banner?.backgroundColorGradient, padding: banner?.sectionPadding}}
      className="text-white rounded-lg"
    >
      <div className="container mx-auto" style={{padding: banner?.containerPadding}}>
        <div className="flex justify-between items-center">
          <div>
            <PortableText
              value={banner?.bannerHeading}
              components={customComponents}
            />
            <div className="flex gap-2 items-center mt-4">
              {banner?.eventLocationBadges?.map((item: any, i: number) => (
                <span
                  key={i}
                  style={{ backgroundColor: item?.badgeColor }}
                  className={`text-base md:text-lg font-semibold mr-2 rounded-sm px-2 py-1`}
                >
                  {item?.badgeTitle}
                </span>
              ))}
              <span className="text-lg md:text-xl">{formatCustomDate(banner?.eventDate)}</span>
            </div>
          </div>
          <Link href={banner?.ctaBtnTextLink} target="_blank">
            <button
              style={{ backgroundColor: banner?.ctaBtnColor, color:banner?.ctaBtnTextColor }}
              className={` font-bold text-lg py-2 px-4 rounded`}
            >
              {" "}
              {banner?.ctaBtnTextForEvent}
            </button>
          </Link>
        </div>
        <PortableText
          value={banner?.eventDescription}
          components={customComponents}
        />
      </div>
    </div>
  );
}
