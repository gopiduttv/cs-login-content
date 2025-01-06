import { defineField, defineType } from "sanity";

export const campaignTemplate = defineType({
  name: "campaignTemplate",
  title: "Campaign Template",
  type: "document",
  fields: [
    defineField({
      name: "selectedLayout",
      title: "Choose Campaign Layout",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Center Aligned",
            value: "centerAligned",
          },
          {
            title: "Right Image Left Text",
            value: "exclude",
          },
          {
            title: "Right Image Left Text",
            value: "exclude",
          },
        ],
      },
    }),

    defineField({
      name: "sectionPadding",
      title: "Section Padding (in px)",
      type: "string",
    }),
    defineField({
      name: "containerPadding",
      title: "Container Padding (in px)",
      type: "string",
    }),
    defineField({
      name: "ctaBtnColor",
      title: "CTA Button color (Hex)",
      type: "string",
    }),
    defineField({
      name: "ctaBtnTextColor",
      title: "CTA Text color (Hex)",
      type: "string",
    }),
    defineField({
      name: "backgroundColorGradient",
      title: "Background Color (CSS color)",
      type: "string",
    }),
  ],
});
