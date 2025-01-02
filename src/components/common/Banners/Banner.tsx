import React from "react";
import Section from "../structure/Section";
import Container from "../structure/Container";

export interface IBannerInterface {
  className: string;
  bannerText?: string;
  bannerHeading?: string;
  registerBtnText?: string;
}

export default function Banner({
  className,
  bannerHeading,
  bannerText,
  registerBtnText
}: IBannerInterface) {
  return(
    <Section className={`${className} bg-blue-800`}>
      <Container className="bg-gray-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{bannerHeading}</h2>
                <span className="text-sm font-light">Feb 6-8, 2025 | Gaylord Palms, Orlando, FL</span>
              </div>
              <a href="#" className="bg-white hover:bg-green-600 text-black font-bold py-2 px-4 rounded">
                {registerBtnText}
              </a>
            </div>
            <p className="pt-4">{bannerText}</p>
          </div>
      </Container>
    </Section>

  )
}
