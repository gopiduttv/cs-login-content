import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const viewport = defineType({
  name: "viewport",
  title: "Viewport",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "id",
      type: "slug",
    }),
    defineField({
      name: "dimension",
      type: "string",
    }),
    defineField({
      name: "dimensionValue",
      type: "slug",
    }),
    defineField({
      title: "Campaign Combining Mode",
      name: "combiningMode",
      type: "string",
      options: {
        list: [
          {
            title: "Concat",
            value: "concat",
          },
          {
            title: "Override",
            value: "override",
          },
        ],
      },
    }),
    defineField({
      name: "selectedAdjacencyCampaigns",
      type: "array",
      title: "Selected Adjacency Oriented Campaigns",
      of: [{ type: "reference", to: [{ type: "campaign" }] }],
    }),
    defineField({
      name: "additionalCampaigns",
      type: "array",
      title: "Additional Campaigns",
      of: [{ type: "reference", to: [{ type: "campaign" }] }],
    }),

    defineField({
      name:'showBanner',
      title:"Toggle Banner",
      type:"boolean"
    }),
    defineField({
      name: "selectedBanner",
      type: "array",
      title: "Selected Banner",
      validation: (Rule) => Rule.max(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'banner' }],
        },
      ],
    }),

  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
