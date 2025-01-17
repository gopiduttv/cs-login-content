"use client";

import CenterText from "./Layouts/CenterText";
import RightImageLeftText from "./Layouts/RightImageLeftText";
import LeftImageRightText from "./Layouts/LeftImageRightText";
import { useEffect, useState } from "react";
import { cookies } from "next/headers";

const setCookie = (name: string, value: number) => {
  document.cookie = `${name}=${value}; path=/; SameSite=None; Secure`;
};

const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

function Campaign({ campaigns, cookies, banner }: { campaigns: any; cookies: any; banner: any }) {
  const [campaignIdx, selectedCampaignIdx] = useState<any>(null);
  console.log(campaigns);

  useEffect(() => {
    if (parseInt(getCookie("_csi_idx") ?? "0") >= campaigns.length - 1) {
      setCookie("_csi_idx", 0);
    } else {
      setCookie("_csi_idx", parseInt(getCookie("_csi_idx") ?? "0") + 1);
    }
    selectedCampaignIdx(parseInt(getCookie("_csi_idx") ?? "0"));
  }, []);

  if (!(campaignIdx || campaignIdx == 0))
    return <></>;

  if (campaigns[campaignIdx]?.selectedLayout == "rilt") {
    return (
      <RightImageLeftText campaign={campaigns[campaignIdx]} banner={banner} cookies={cookies}/>
    );
  }
  if (campaigns[campaignIdx]?.selectedLayout == "lirt") {
    return (
      <LeftImageRightText campaign={campaigns[campaignIdx]} banner={banner} cookies={cookies}/>
    );
  }

  return <CenterText campaign={campaigns[campaignIdx]} banner={banner} cookies={cookies}/>;
}

export default Campaign;
