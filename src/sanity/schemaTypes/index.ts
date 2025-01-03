import { type SchemaTypeDefinition } from "sanity";

import { campaign } from "./campaign";
import { viewport } from "./viewport";
import { campaignContent } from "./campaignContent";
import { campaignTemplate } from "./CampaignTemplate";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, viewport, campaignTemplate, campaignContent],
};
