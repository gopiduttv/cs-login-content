import { type SchemaTypeDefinition } from "sanity";

import { campaign } from "./campaign";
import { viewport } from "./viewport";
import { Banner } from "./Banner";
import { blockContent } from "./objects/BlockContent";
import { BackgroundColor } from "./BackgroundColor";
import { CookiePreference } from "./cookiePreference";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, viewport, Banner, blockContent, BackgroundColor, CookiePreference],
};
