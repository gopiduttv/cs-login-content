import { type SchemaTypeDefinition } from "sanity";

import { campaign } from "./campaign";
import { viewport } from "./viewport";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, viewport],
};
