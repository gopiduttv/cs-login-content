import React, { CSSProperties, ReactNode } from "react";
type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  id?: string | undefined;
};

export default function Section(props: Props) {
  return (
    <section
      id={props?.id}
      className={`w-full flex justify-center px-4 md:px-8 ${props.className}`}
    >
      {props.children}
    </section>
  );
}
