import { defineField, defineType } from "sanity";

export const campaignContent = defineType({
  name: "campaignContent",
  title: "campaignContent",
  type: "document",
  fields: [
    defineField({
      name: "campaignName",
      title: "Campaign Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "text",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "text",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text",
    }),
    defineField({
      name: "ctaBtnText",
      title: "CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaBtnLink",
      title: "CTA Button Link",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Adjacency/ Event Image",
      type: "image",
    }),

    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
});
