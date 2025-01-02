import React from "react";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

export default function Banner({
  className,
  bannerHeading,
  bannerText,
  registerBtnText,
}: IBannerInterface) {
  return <div className={`${className}`}>
    <h1>{bannerHeading}</h1>
    <p>{bannerText}</p>
    

  </div>;
}
