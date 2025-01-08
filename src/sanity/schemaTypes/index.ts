import { type SchemaTypeDefinition } from "sanity";

import { campaign } from "./campaign";
import { viewport } from "./viewport";
import { Banner } from "./Banner";
import { blockContent } from "./objects/BlockContent"; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    campaign,
    viewport,
    Banner,
    blockContent,
  ],
};
