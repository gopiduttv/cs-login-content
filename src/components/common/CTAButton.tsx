import React from "react";

export interface ctaBtnProps {
  className: string;
  text: string;
}

export default function CTAbutton({ className, text }: ctaBtnProps) {
  return <div className={`${className} w-52 h-14'`}>{text}</div>;
}
