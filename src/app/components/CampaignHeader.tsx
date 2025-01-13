import { formatDateChange, formatShortDateChange } from "@/utils/page";
import Image from "next/image";
import React from "react";

interface ICampaignHeader {
  logoUrl: string;
  templateHeader: string;
  eventType: string;
  eventDate: string;
}

export default function CampaignHeader({
  logoUrl,
  templateHeader,
  eventType,
  eventDate,
}: ICampaignHeader) {
  return (
    <div className="flex gap-8 flex-col">
      {logoUrl && (
          <Image src={logoUrl} width={300} height={300} alt={"sampleText"} />
      )}
      {(templateHeader || eventType || eventDate) && (
        <div className="flex items-center gap-3 text-sm uppercase">
          <h2 className="text-green-700 font-semibold">{templateHeader}</h2>
          {eventType && (
            <button className="bg-zinc-300 font-medium text-slate-900 p-2 rounded-lg">
              {eventType}
            </button>
          )}
          {eventDate && (
            <button className="text-white bg-zinc-400	 font-medium p-2 rounded-lg">
              {formatDateChange(eventDate)}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
