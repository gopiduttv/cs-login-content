import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import data from "../data.json";
import { runQuery } from "./sanity/lib/client";
import {
  getViewPortByRegion,
  getCampaignByAdjacency,
} from "./sanity/lib/queries";

/*
  TODO
  From customer data get eligible campaign based on adjacencies the customer is subscribed to.
*/
async function getEligibleCampaignsIds(customerMetaData: any) {
  
  console.log(await runQuery(getViewPortByRegion(), { region: "us" }));
  console.log({
    adjCamp: await runQuery(getCampaignByAdjacency(), {
      adjacency: "cs-conversation",
    }),
  });
  return ["cs-conversation", "cs-pay"]
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();


  const { searchParams } = request.nextUrl;

  const domain = searchParams.get("domain");
  const country = searchParams.get("country") ?? "us";

  const defaultCampaign = "carestack";

  if (!domain) {
    return NextResponse.error()
  }

  const region = "US";
  const campaigns = await 
  console.log({ campaigns });

  const cusData: any = data;
  const campaignsForDomain = cusData[domain]
    .filter((adj: any) => adj.subbed == false)
    .map((adj: any) => adj.name);

  const campaign =
    campaignsForDomain[Math.floor(Math.random() * campaignsForDomain.length)] ??
    "carestack";

  url.pathname = `/campaigns/${campaign}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher:
    "/((?!studio|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.css|.*\\.js|.*\\.png|.*\\.jpg).*)",
};
