import { formatDateChange, formatShortDateChange } from "@/utils/page";
import Image from "next/image";
import React from "react";

interface ICampaignHeader {
  logoUrl: string;
  templateHeader: string;
  eventType: string;
  eventDate: string;
  eventTime:string;
  eventTimezone:string;
}

export default function CampaignHeader({
  logoUrl,
  templateHeader,
  eventType,
  eventDate,
  eventTime,
  eventTimezone
}: ICampaignHeader) {
  return (
    <div className="flex gap-8 flex-col">
      {logoUrl && (
        // <Image
        //   src={logoUrl}
        //   width={300}
        //   height={300}
        //   alt={"sampleText"}
        //   className=""
        // />
        <div className="max-h-16">
          <img src={logoUrl} alt={"sampleText"} className="max-h-full"/>
        </div>
      )}
      {(templateHeader || eventType || eventDate) && (
        <div className="flex items-center gap-6 text-sm">
          {templateHeader && (
            <h2 className="text-green-700 font-semibold uppercase">
              {templateHeader}
            </h2>
          )}
          {eventType && (
            <button
              className="font-medium xl:w-32 xl:h-8 p-2 rounded-lg uppercase"
              style={{ backgroundColor: "#FFFFFF29" }}
            >
              {eventType}
            </button>
          )}
          {eventDate && (
            <button
              className="text-white font-medium p-2 rounded-lg uppercase"
              style={{ backgroundColor: "#FFFFFF66" }}
            >
              {formatDateChange(eventDate)} {eventTime? " | " : ""} {eventTime} {eventTimezone}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
