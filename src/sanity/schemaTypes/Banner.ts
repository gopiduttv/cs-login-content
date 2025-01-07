import { defineField, defineType } from "sanity";
import {DocumentIcon} from '@sanity/icons'

export const Banner = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  icon: DocumentIcon,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "template",
      title: "Template",
    },
  ],
  fields: [
    defineField({
      name: "bannerHeading",
      title: "Banner Heading",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
      group: "content",
    }),
    defineField({
      name: "ctaBtnTextForEvent",
      title: "CTA Button Text for Event",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "ctaBtnTextLink",
      title: "CTA Button Text Link",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "eventDescription",
      title: "Event Description",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "eventLocation",
      title: "Event Location",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "sectionPadding",
      title: "Section Padding (in px)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "containerPadding",
      title: "Container Padding (in px)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "ctaBtnColor",
      title: "CTA Button color (Hex)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "ctaBtnTextColor",
      title: "CTA Text color (Hex)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "backgroundColorGradient",
      title: "Background Color (CSS color)",
      type: "string",
      group: "template",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      group: "template",
    }),
  ],
});
