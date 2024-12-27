import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import customerDB from "../data.json";
import { runQuery } from "./sanity/lib/client";
import {
  getViewPortByRegion,
  getCampaignIdsByAdjacency,
} from "./sanity/lib/queries";

/*
  From customer metadata get eligible campaigns based on adjacencies the customer is subscribed to.
*/
async function getEligibleAdjacencyCampaignsIds(customer: any) {
  const DB: any = customerDB;
  const unsubscribedAdjacency = DB[customer]
    .filter((adjacency: any) => adjacency.subbed == false)
    .map((adjacency: any) => adjacency.name);

  const eligibleCampaigns = await Promise.all(
    unsubscribedAdjacency.map(
      async (adjacency: any) =>
        await runQuery(getCampaignIdsByAdjacency(), {
          adjacency,
        })
    )
  );

  return eligibleCampaigns.reduce((a, b) => a.concat(b));
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

    if (!customer) throw new Error("Invalid domain");

    const viewportData = await runQuery(getViewPortByRegion(), {
      region: country,
    });

    const adjacencyOrientedCampaigns: any =
      await getEligibleAdjacencyCampaignsIds(customer);

    const totalCampaignPool: any = getTotalCampaignPool(
      adjacencyOrientedCampaigns,
      viewportData.additionalCampaigns.map((campaign: any) => {
        return { _id: campaign._ref };
      }),
      viewportData.combiningMode
    );

    const campaign = getCampaignFromPool(totalCampaignPool, "random");
    url.pathname = `/campaigns/${campaign._id}`;
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
