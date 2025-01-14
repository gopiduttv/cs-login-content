import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import customerDB from "../database.json";
import { runQuery } from "./sanity/lib/client";
import {
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
  getCampaignLayoutByID,
} from "./sanity/lib/queries";
import { cookies } from "next/headers";

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
          customerType,
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

  return eligibleCampaigns;
}

/* motive of below function is to generate a
 unique banner based of each refresh based on available campaign*/

async function getNextCampaign(params: any[]) {
  const cookieStore = await cookies();
  const currentCampaignValue = Number(
    cookieStore.get("currentCampaign")?.value
  );
  if (isNaN(currentCampaignValue) || currentCampaignValue >= params.length) {
    cookieStore.set("currentCampaign", "0");
    return 0;
  }

  const nextCampaignOrder = currentCampaignValue + 1;
  if (nextCampaignOrder >= params.length) {
    cookieStore.set("currentCampaign", "0");
    return 0;
  }
  cookieStore.set("currentCampaign", nextCampaignOrder.toString());
  return nextCampaignOrder;
}

const getCampaignFromPool = async (
  campaigns: any[],
  selectMode: any = null
) => {
  const campaignIndex = await getNextCampaign(campaigns);
  console.log(
    campaigns?.length + "is the available number of Campaigns and",
    campaignIndex + "is the position of running campaign"
  );
  return selectMode === "random"
    ? campaigns[Number(campaignIndex)]
    : campaigns[0];
};

const getTotalCampaignPool = (
  poolOne: any,
  poolTwo: any,
  combiningMode: any
) => {
  return combiningMode === "override" ? poolTwo : poolOne.concat(poolTwo);
};

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

    const campaign = await getCampaignFromPool(totalCampaignPool, "random");

    const campaignLayout = (
      await runQuery(getCampaignLayoutByID(), { campaignID: campaign._id })
    )?.selectedLayout;

    url.pathname = `/campaigns/${campaign._id}/${campaignLayout}`;

    if (viewportData.showBanner) {
      url.searchParams.set("banner", viewportData.selectedBanner[0]._ref);
    }

    console.log("[ Middleware " + url.pathname + " ]");
    return NextResponse.rewrite(url);
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.error();
  }
}

export const config = {
  matcher:
    "/((?!studio|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.css|.*\\.js|.*\\.png|.*\\.jpg).*)",
};
