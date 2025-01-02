import React from "react";

export interface ctaBtnProps {
  className: string;
  ctaText: string;
}

export default function CtaButton({ className, ctaText }: ctaBtnProps) {
  return <button className={`${className} p-4 w-auto h-auto rounded-md `}>{ctaText}</button>;
}
