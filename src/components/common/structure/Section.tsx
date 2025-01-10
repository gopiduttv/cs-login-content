import React, { CSSProperties, ReactNode } from "react";
type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string | undefined;
  bgColor?:string
};

export default function Section(props: Props) { debugger
  console.log(props)
  return (
    <section
      id={props?.id}
      style={{background:props?.bgColor}}
      className={`w-full flex flex-col justify-center ${props.className}`}
    >
      {props.children}
    </section>
  );
}
