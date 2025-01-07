import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  icon: UserIcon,
  groups: [
    {
      name: "basic",
      title: "Basic",
    },
    {
      name: "dataset",
      title: "Content",
    },
    {
      name: "template",
      title: "Template",
    },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "basic",
    }),
    defineField({
      title: "Campagin Slug",
      name: "slug",
      type: "slug",
      group: "basic",
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Campaign Type",
      name: "campaignType",
      type: "string",
      group: "basic",
      options: {
        list: [
          {
            title: "Normal",
            value: "normal",
          },
          {
            title: "Adjacency Oriented",
            value: "adjacencyOriented",
          },
        ],
      },
    }),
    defineField({
      title: "Targeted Region",
      name: "region",
      type: "string",
      group: "basic",
    }),
    defineField({
      title: "Targeted Customer Type",
      name: "customerType",
      type: "string",
      group: "basic",
      options: {
        list: [
          {
            title: "Others",
            value: "smallScale",
          },
          {
            title: "DSO's ",
            value: "largeScale",
          },
        ],
      },
    }),
    defineField({
      title: "Adjacency Name",
      name: "adjacencyName",
      type: "string",
      group: "basic",
    }),
    defineField({
      title: "Campaign Audience",
      name: "audience",
      type: "string",
      group: "basic",
      options: {
        list: [
          {
            title: "Customer subscribed to this adjacency",
            value: "include",
          },
          {
            title: "Customer not subscribed to this adjacency",
            value: "exclude",
          },
        ],
      },
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "blockContent",
      group: "dataset",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "blockContent",
      group: "dataset",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "blockContent",
      group: "dataset",
    }),
    defineField({
      name: "ctaBtnText",
      title: "CTA Button Text",
      type: "string",
      group: "dataset",
    }),
    defineField({
      name: "ctaBtnLink",
      title: "CTA Button Link",
      type: "string",
      group: "dataset",
    }),
    defineField({
      name: "image",
      title: "Campaign Image",
      type: "image",
      group: "dataset",
    }),

    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
      group: "dataset",
    }),

    defineField({
      name: "campaignLayoutTemplate",
      title: "Add Campaign Template",
      type: "array",
      group: "template",
      validation: (Rule) => Rule.max(1),
      of: [
        {
          type: "reference",
          to: [{ type: "campaignTemplate" }],
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
