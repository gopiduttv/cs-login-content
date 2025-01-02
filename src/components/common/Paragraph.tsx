import React from "react";

interface paragraph {
  className?: string;
  text?: string;
}

export default function Paragraph({ className, text }: paragraph) {
  return <p className={`${className}`}>{text}</p>;
}
