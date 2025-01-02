import React from "react";

interface h2Interface {
  className: string;
  text: string;
}
export function H2({ className, text }: h2Interface) {
  return <h2 className={`${className}`}> {text}</h2>;
}
