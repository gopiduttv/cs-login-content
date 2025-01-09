import React from "react";
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
    normal: ({ children }: any) => (
      <p className="pt-4 text-2xl leading-8">{children}</p>
    ),
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

export default function Banner({ className, banner }: any) {
  const getMonths = (date: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const [year, month, day] = date.split("-");
    const formattedDate = `${months[parseInt(month, 10) - 1]} `;

    return formattedDate;
  };

  const getDate = (date: string) => {
    const currentDate = new Date(date); // Get the current date
    const day = String(currentDate.getDate()).padStart(2, "0");
    return day;
  };
  return (
    <div
      className="flex text-white"
      style={{
        backgroundColor: banner?.backgroundColorGradient,
      }}
    >
      <div
        className={`${banner?.isFullScreen ? "w-1/6 bg-slate-700 text-teal-400 font-semibold " : ""}`}
      >
        <div className="flex flex-col items-center h-full justify-center">
          <span className="text-lg md:text-xl ">
            {getMonths(banner?.eventStartingDate)}
          </span>
          <span className="text-4xl">
            {getDate(banner?.eventStartingDate)} -{" "}
            {getDate(banner?.eventEndingDate)}
          </span>
          <span className="text-lg md:text-xl text-white">
            {new Date(banner?.eventStartingDate).getFullYear()}
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: banner?.backgroundColorGradient,
          padding: banner?.sectionPadding,
        }}
        className={`text-white ${banner?.isFullScreen ? "flex-1" : "w-5/6 rounded-lg"}`}
      >
        <div
          className="container mx-auto"
          style={{ padding: banner?.containerPadding }}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center mb-4">
                {banner?.eventLocationBadges?.map((item: any, i: number) => (
                  <span
                    key={i}
                    style={{ backgroundColor: item?.badgeColor }}
                    className={`text-base md:text-lg font-semibold mr-2 rounded-sm px-2 py-1`}
                  >
                    {item?.badgeTitle}
                  </span>
                ))}

                <span>{banner?.eventLocation}</span>
              </div>
              <PortableText
                value={banner?.bannerHeading}
                components={customComponents}
              />
              <PortableText
                value={banner?.eventDescription}
                components={customComponents}
              />
            </div>

            <Link href={banner?.ctaBtnTextLink} target="_blank">
              <button
                style={{
                  backgroundColor: banner?.ctaBtnColor,
                  color: banner?.ctaBtnTextColor,
                }}
                className={` font-bold text-lg py-2 px-4 rounded`}
              >
                {" "}
                {banner?.ctaBtnTextForEvent}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
