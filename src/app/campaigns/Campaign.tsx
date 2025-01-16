import { runQuery } from "@/sanity/lib/client";
import { getCampaignLayoutByID } from "@/sanity/lib/queries";
import CenterText from "./Layouts/CenterText";
import RightImageLeftText from "./Layouts/RightImageLeftText";
import LeftImageRightText from "./Layouts/LeftImageRightText";

async function Campaign({
  campaignID,
  bannerID,
}: {
  campaignID: any;
  bannerID: any;
}) {
  const layout = (
    await runQuery(getCampaignLayoutByID(), { campaignID: campaignID })
  )?.selectedLayout;

  if (layout == "rilt") {
    return <RightImageLeftText campaignID={campaignID} bannerID={bannerID} />;
  }
  if (layout == "lirt") {
    return <LeftImageRightText campaignID={campaignID} bannerID={bannerID} />;
  }

  return <CenterText campaignID={campaignID} bannerID={bannerID} />;
}

export default Campaign;
