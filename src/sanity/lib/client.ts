import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const runQuery = async (query: any, params: any = {}, tags: any = []) =>
  await client.fetch(query, params, { next: { tags: [...tags] } });
