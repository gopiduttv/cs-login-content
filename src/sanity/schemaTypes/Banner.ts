import { defineField, defineType } from "sanity";

export const Banner = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "bannerHeading",
      title: "Banner Heading",
      type: "text",
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
});
