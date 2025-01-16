import { runQuery } from "@/sanity/lib/client";
import { getViewPortByProductRegion, getViewPorts } from "@/sanity/lib/queries";
import { getCampaigns } from "@/utils/getCurrentCampagin";
import Campaign from "../campaigns/Campaign";

export async function generateStaticParams() {
  const viewports = await runQuery(getViewPorts());
  return viewports.map((port: any) => ({
    viewport: port.dimensionValue.current,
  }));
}

export default async function ViewPort({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { viewport } = await params;
  const { domain } = await searchParams;
  const viewportData = await runQuery(getViewPortByProductRegion(), {
    productRegion: viewport,
  });

  if (!viewportData) {
    return <>Something went wrong ...</>
  }
    
  const campaigns = await getCampaigns(domain, viewportData);
  const bannerID = viewportData.showBanner
    ? viewportData.selectedBanner?.[0]?._ref
    : null;

  const campaign = campaigns[Math.floor(Math.random() * campaigns.length)];
  return <Campaign campaignID={campaign._id} bannerID={bannerID} />;
}
