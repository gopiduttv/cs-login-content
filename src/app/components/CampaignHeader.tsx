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
    <div className="flex gap-4 flex-col">
      <div>
        <Image src={logoUrl} width={300} height={300} alt={"sampleText"} />
      </div>
      <div className="flex items-center gap-3">
        <h2 className="text-green-700 font-semibold">{templateHeader}</h2>
        <button className="bg-white font-medium text-slate-900 p-1 rounded-sm">
          {eventType}
        </button>
        <button className="text-white bg-gray-500 font-medium p-1 rounded-sm">
          {eventDate}
        </button>
      </div>
    </div>
  );
}
