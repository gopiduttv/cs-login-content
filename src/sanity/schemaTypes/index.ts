import { type SchemaTypeDefinition } from "sanity";

import { campaign } from "./campaign";
import { viewport } from "./viewport";
import { campaignContent } from "./campaignContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, viewport, campaignContent],
};
