import React from "react";
import { PortableText } from "next-sanity";
import { formatCustomDate, formatDateChange } from "@/utils/page";
import Link from "next/link";
import Image from "next/image";
import locIcon from "../../../../public/Frame.svg";
import { urlFor } from "@/sanity/lib/image";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

const customComponents: any = {
  block: {
    h2: ({ children }: any) => (
      <h2 className=" text-3xl  font-semibold pb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-semibold">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="pt-4 text-[16px] text-[#FFFFFFBF] font-normal">{children}</p>
    ),
  },
  marks: {
    textColor: ({ children, value }: any) => (
      <span style={{ color: value.value }}>{children}</span>
    ),
    highlightColor: ({ children, value }: any) => (
      <span style={{ background: value.value }}>{children}</span>
    ),
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
  types: {
    image: ({ value }: any) => (
      <div>
        <img
          src={urlFor(value?.asset).url()}
          alt={value?.alt || "Image"}
          width={value?.width ?? 20}
          height={value?.height ?? 20}
        />
      </div>
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
      className={`flex text-white bottom-0 w-full ${banner?.isFullScreen ? "" : "max-w-7xl m-auto rounded-lg"}`}
      style={{
        backgroundColor: banner?.backgroundColorGradient,
      }}
    >
      {banner?.isFullScreen ? (
        <div className="w-1/6 bg-slate-800 text-teal-400 font-medium">
          <div className="flex flex-col items-center h-full justify-center w-52">
            <span className="md:font-medium text-base md:text-lg">
              {getMonths(banner?.eventStartingDate)}
            </span> 
            <span className="text-4xl font-medium">
              {getDate(banner?.eventStartingDate)}-
              {getDate(banner?.eventEndingDate)}
            </span>
            <span className="text-base md:text-lg font-medium text-white">
              {new Date(banner?.eventStartingDate).getFullYear()}
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          backgroundColor: banner?.backgroundColorGradient,
          padding: banner?.sectionPadding,
        }}
        className={`text-white ${banner?.isFullScreen ? "flex-1 w-5/6 " : "rounded-lg"}`}
      >
        <div
          className="container mx-auto"
          style={{ padding: banner?.containerPadding }}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center mb-4 pb-4 border-b-[0.5px] border-b-slate-700">
                {banner?.eventLocationBadges?.map((item: any, i: number) => (
                  <span
                    key={i}
                    style={{ backgroundColor: item?.badgeColor }}
                    className={`text-xs font-semibold p-2 text-center uppercase rounded text-[#CBD5E1]`}
                  >
                    {item?.badgeTitle}
                  </span>
                ))}
                <div className="flex gap-2">
                  <Image src={locIcon} alt="location" width={20} height={20} />
                  <span className="text-lg font-medium">{banner?.eventLocation}</span>
                </div>
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
                className={` font-bold text-lg h-11 w-40 rounded`}
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
