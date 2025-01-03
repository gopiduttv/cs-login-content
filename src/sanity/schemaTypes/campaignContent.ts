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
      name: "campaignLayout",
      title: "Choose Campaign Layout",
      type: "array",
      validation: (Rule) => Rule.max(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'campaignTemplate' }],
        },
      ],
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

    defineField({
      name: "bannerDetails",
      title: "Banner Details",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "bannerHeading",
          title: "Banner Heading",
          type: "text",
        }),
        defineField({
          name: "showBanner",
          type: "boolean",
        }),
        defineField({
          name: "eventDate",
          title: "Event Date",
          type: "date",
        }),
        defineField({
          name: "ctaBtnTextForEvent",
          title: "CTA Button Text for Event",
          type: "string",
        }),
        defineField({
          name: "eventDescription",
          title: "Event Description",
          type: "text",
        }),
        defineField({
          name: "eventLocation",
          title: "Event Location",
          type: "string",
        }),
      ],
    }),
  ],
});
