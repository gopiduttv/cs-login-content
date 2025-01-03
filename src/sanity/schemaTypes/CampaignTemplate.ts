import { defineField, defineType } from "sanity";

export const campaignTemplate = defineType({
  name: "campaignTemplate",
  title: "Campaign Template",
  type: "document",
  fields: [
    defineField({
      name: "campaignLayoutName",
      title: "Campaign Layout Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cssClassName",
      title: "Add Tailwind CSS ClassName(for bg color and padding etc.)",
      type: "string",
      
    }),
    defineField({
      name: "bgImage",
      title: "Add Background Image or Color gradient",
      type: "string",
      
    }),
    
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
  ],
});
