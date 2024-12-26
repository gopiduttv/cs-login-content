import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Campagin Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Campaign Type",
      name: "campaignType",
      type: "string",
      options: {
        list: [
          {
            title: "Normal",
            value: "normal"
          },
          {
            title: "Adjacency Oriented",
            value: "adjacencyOriented"
          }
        ]
      }
    }),
    defineField({
      title: "Adjacency Name",
      name: "adjacencyName",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
