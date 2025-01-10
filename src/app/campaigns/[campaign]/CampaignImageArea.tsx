import Image from "next/image";
import React from "react";

function CampaignImageArea({ campaignImage, className }: any) {
  return (
    <div className={className}>
      <Image
        className="h-[350px]"
        alt={campaignImage?.image.url || 'campaign Image'}
        src={campaignImage?.campaignImage.url}
        width={500}
        height={500}
      />
    </div>
  );
}

export default CampaignImageArea;
