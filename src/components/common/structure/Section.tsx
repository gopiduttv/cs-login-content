import React, { CSSProperties, ReactNode } from "react";
type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string | undefined;
  bgColor?: string;
  bgImage?: string;
};

export default function Section(props: Props) {
  return (
    <section
      id={props?.id}
      style={{
        background: `${props?.bgColor} , url(${props?.bgImage}) no-repeat center/cover`,
      }}
      className={`w-full flex flex-col h-screen justify-center relative ${props.className}`}
    >
      {props.children}
    </section>
  );
}
