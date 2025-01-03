import React from "react";

export interface ctaBtnProps {
  className: string;
  ctaText: string;
}

export default function CTAButton({ className, text }: ctaBtnProps) {
  return <div className={`${className} w-52 h-14'`}>{text}</div>;
}
