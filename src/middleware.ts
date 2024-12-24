import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import data from "../data.json"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const { searchParams } = request.nextUrl;

  const domain = searchParams.get("domain");
  if (!domain) return;
  
  const cusData: any = data 
  
  const campaignsForDomain = cusData[domain]
    .filter((adj: any) => adj.subbed == false)
    .map((adj: any) => adj.name);

  const domainLocale = "en-GB";
  url.pathname = `/campaigns/${campaignsForDomain[Math.floor(Math.random() * campaignsForDomain.length)]}/${domainLocale}`;
  

  const eventFlag = false 
  const eventName = "inner-circle"
  if (eventFlag)
    url.pathname = `/events/${eventName}/${domainLocale}`;
    
  return NextResponse.rewrite(url);
}
