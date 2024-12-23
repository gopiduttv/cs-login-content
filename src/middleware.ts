import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const { searchParams } = request.nextUrl;

  const domain = searchParams.get("domain");
  if (!domain) return;

  const domainSubs = {
    osd: [
      {
        name: "carestack",
        subbed: true,
      },
      {
        name: "cs-conversations",
        subbed: false,
      },
      {
        name: "cs-pay",
        subbed: false,
      },
    ],
    rzq: [
      {
        name: "carestack",
        subbed: true,
      },
      {
        name: "cs-conversations",
        subbed: true,
      },
      {
        name: "cs-pay",
        subbed: false,
      },
    ],
    tso: [
      {
        name: "carestack",
        subbed: false,
      },
      {
        name: "cs-conversations",
        subbed: false,
      },
      {
        name: "cs-pay",
        subbed: false,
      },
    ],
  } as any;
  
  const campaignsForDomain = domainSubs[domain]
    .filter((adj: any) => adj.subbed == false)
    .map((adj: any) => adj.name);

  const domainLocale = "en";
  url.pathname = `/campaigns/${campaignsForDomain[Math.floor(Math.random() * campaignsForDomain.length)]}/${domainLocale}`;

  return NextResponse.rewrite(url);
}
