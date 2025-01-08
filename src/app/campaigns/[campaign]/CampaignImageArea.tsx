import Image from "next/image";
import React from "react";

function CampaignImageArea({ campaignImage, className }: any) {
  console.log("tt", campaignImage);

  return (
    <div className={className}>
      <Image
        className="h-[350px]"
        alt=""
        src={campaignImage?.image.url}
        width={400}
        height={400}
      />
    </div>
  );
}

export default CampaignImageArea;
