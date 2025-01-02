import React from "react";

export interface ctaBtnProps {
  className: string;
  text: string;
}

export default function CtaButton({ className, text }: ctaBtnProps) {
  return <div className={`${className} p-4 w-auto h-auto rounded-md cursor-pointer `}>{text}</div>;
}
