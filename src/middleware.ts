import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import data from "../data.json";
import { client } from "./sanity/lib/client";
import { groq } from "next-sanity";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const { searchParams } = request.nextUrl;

  const domain = searchParams.get("domain");
  const country = searchParams.get("country") ?? "us";

  const defaultCampaign = "carestack";

  if (!domain) {
    url.pathname = `/campaigns/${defaultCampaign}/${country}`;
    return NextResponse.rewrite(url);
  }

  const region = "US";
  const campaigns = await client.fetch(
    groq`*[_type == "campaign" && region == $region]{_id}`,
    { region }
  );
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
