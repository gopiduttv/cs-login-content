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
      className={`w-full flex justify-center ${props.className}`}
    >
      {props.children}
    </section>
  );
}
