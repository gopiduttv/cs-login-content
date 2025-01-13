import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import customerDB from "../database.json";
import { runQuery } from "./sanity/lib/client";
import {
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
  getCampaignLayoutByID,
} from "./sanity/lib/queries";

/*
  From customer metadata get eligible campaigns based on adjacencies the customer is subscribed to.
*/
async function getEligibleAdjacencyCampaignsIds(customer: any, campaigns: any) {
  const DB: any = customerDB;
  if (!customer || !DB[customer]) return [];
  const adjacencies = DB[customer].subscriptions;
  const customerType =
    DB[customer].locations >= 15 ? "largeScale" : "smallScale";

  const eligibleCampaigns = (
    await Promise.all(
      adjacencies.map(async (adjacency: any) => {
        const campaign = await runQuery(getCampaignIdsByAdjacency(), {
          adjacency: adjacency.adjacencyName,
          campaignIds: campaigns.map((campaign: any) => campaign._ref),
          customerType
        });

        return campaign.filter(
          (campaign: any) =>
            (adjacency.subscriptionStatus == false &&
              campaign.audience == "exclude") ||
            (adjacency.subscriptionStatus == true &&
              campaign.audience == "include")
        );
      })
    )
  ).reduce((a, b) => a.concat(b));

  console.log("eligible",eligibleCampaigns.map((campaign: any) => campaign.name));
  return eligibleCampaigns;
}

const getCampaignFromPool = (campaigns: any[], selectMode: any = null) => {
  return selectMode == "random"
    ? campaigns[Math.floor(Math.random() * campaigns.length)]
    : campaigns[0];
};

const getTotalCampaignPool = (
  poolOne: any,
  poolTwo: any,
  combiningMode: any
) => (combiningMode == "override" ? poolTwo : poolOne.concat(poolTwo));

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  try {
    const { searchParams } = request.nextUrl;

    const customer = searchParams.get("domain");
    const country = searchParams.get("country") ?? "us";

    const viewportData = await runQuery(getViewPortByRegion(), {
      region: country,
    });

    const adjacencyOrientedCampaigns: any =
      await getEligibleAdjacencyCampaignsIds(
        customer,
        viewportData.selectedAdjacencyCampaigns
      );

    const totalCampaignPool: any = getTotalCampaignPool(
      adjacencyOrientedCampaigns,
      viewportData.additionalCampaigns.map((campaign: any) => {
        return { _id: campaign._ref };
      }),
      viewportData.combiningMode
    );

    const campaign = getCampaignFromPool(totalCampaignPool, "random");

    const campaignLayout = (await runQuery(getCampaignLayoutByID(), { campaignID: campaign._id }))?.selectedLayout

    url.pathname = `/campaigns/${campaign._id}/${campaignLayout}`;

    if (viewportData.showBanner) {
      url.searchParams.set("banner", viewportData.selectedBanner[0]._ref)
    } 
    
    console.log("[ Middleware " + url.pathname + " ]");
    return NextResponse.rewrite(url);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export const config = {
  matcher:
    "/((?!studio|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.css|.*\\.js|.*\\.png|.*\\.jpg).*)",
};
