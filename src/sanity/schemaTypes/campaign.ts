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
      title: "Targeted Region",
      name: "region",
      type: "string",
    }),
    defineField({
      title: "Targeted Customer Type",
      name: "customerType",
      type: "string",
      options: {
        list: [
          {
            title: "Small Scale",
            value: "smallScale"
          },
          {
            title: "Large Scale",
            value: "largeScale"
          }
        ]
      }
    }),
    defineField({
      title: "Adjacency Name",
      name: "adjacencyName",
      type: "string",
    }),
    defineField({
      title: "Campaign Audience",
      name: "audience",
      type: "string",
      options: {
        list: [
          {
            title: "Customer subscribed to this adjacency",
            value: "include"
          },
          {
            title: "Customer not subscribed to this adjacency",
            value: "exclude"
          }
        ]
      }
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
