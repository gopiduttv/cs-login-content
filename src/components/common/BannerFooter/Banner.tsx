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
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold">{children}</h2>
    ),
    normal: ({ children }: any) => <p className="pt-4">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-[#42ba78]">{children}</strong>
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
            <div className="flex gap-2 items-center">
              {banner?.eventLocationBadges?.map((item: any, i: number) => (
                <span
                  key={i}
                  style={{ backgroundColor: item?.badgeColor }}
                  className={`text-sm mr-2 rounded-sm font-light px-4 py-2`}
                >
                  {item?.badgeTitle}
                </span>
              ))}
              <span>{formatCustomDate(banner?.eventDate)}</span>
            </div>
          </div>
          <Link href={banner?.ctaBtnTextLink} target="_blank">
            <button
              style={{ backgroundColor: banner?.ctaBtnColor, color:banner?.ctaBtnTextColor }}
              className={` font-bold py-2 px-4 rounded`}
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
