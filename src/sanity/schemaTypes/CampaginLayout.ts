import { defineField, defineType } from "sanity";

export const campaignContent = defineType({
  name: "campaignLayout",
  title: "Campaign Layout",
  type: "document",
  fields: [
    defineField({
      name: "campaignLayoutName",
      title: "Campaign Layout Name",
      type: "options",
    }),
    defineField({
      name: "campaignLayoutName",
      title: "Campaign Layout Name",
      type: "string",
    }),
  ],
});
