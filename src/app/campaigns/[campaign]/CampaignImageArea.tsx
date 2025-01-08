import Image from "next/image";
import React from "react";

function CampaignImageArea({campaignImage}:any) {
  console.log("tt", campaignImage);

  return (
    <div className="w-1/2">
      <Image
        style={{ width: "100%" }}
        alt=""
        src={campaignImage?.image.url}
        width={400}
        height={400}
      />
    </div>
  );
}

export default CampaignImageArea;
