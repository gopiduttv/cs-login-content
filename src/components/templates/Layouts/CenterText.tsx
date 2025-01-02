import React from "react";
import Paragraph from "@/components/common/Paragraph";
import Banner from "@/components/common/Banners/Banner";

interface ICenterText {
  className?: string;
  props?: any
}

export default function CenterText(props:any) { debugger
    console.log(props)
  const paragraphText =
    "In 2023, the average dental office ran $44,925 in credit card payments per month. ";
  return (
    <div className={`${props.className} w-auto h-max`}>
        {props.children}
      <Paragraph
        className={"text-white bg-gradient-to-r from-cyan-500 to-blue-500 "}
        text={paragraphText}
      />
      <Banner className={"bg-slate-500"} />
    </div>
  );
}
