import React, { CSSProperties, ReactNode } from "react";
type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string | undefined;
  bgColor?:string;
  bgImage?:string;
};

export default function Section(props: Props) {
  return (
    <>
      {props?.bgImage ?
      <section
      id={props?.id}
      style={{ backgroundImage: `url(${props?.bgImage})` }}
      className={`w-full flex flex-col h-screen justify-center relative ${props.className}`}
    >
      <div className="absolute left-0 top-0 w-full h-full z-10"  style={{background:props?.bgColor}}>
      </div>
      {props.children}
    </section>
      :
      <section
      id={props?.id}
      style={{background:props?.bgColor}}
      className={`w-full flex flex-col h-screen justify-center ${props.className}`}
    >
      {props.children}
    </section>
      }
    </>
     
  );
}
