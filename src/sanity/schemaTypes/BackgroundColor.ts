import { defineField, defineType } from "sanity";

export const BackgroundColor = defineType({
  name: "backgroundLinearGradient",
  title: "Background Color",
  type: "document",
  fields: [
    defineField({
      name: "selectedBgColor",
      title: "Select Background Color Gradient",
      type: "string",
      initialValue: "Blue Gradient Dark",
      options: {
        list: [
          {
            title: "Blue Gradient Dark",
            value: "linear-gradient(76.86deg, #1D4ED8 0%, #111827 98.41%)",
          },
          {
            title: "Teal Gradient Dark",
            value: "linear-gradient(76.86deg, #15803D 0%, #111827 98.41%)",
          },
          {
            title: "Teal Gradient Dark",
            value: "linear-gradient(63.18deg, #0F766E 0%, #111827 100%)",
          },
          {
            title: "Orange Gradient Dark 1",
            value: "linear-gradient(76.86deg, #C2410C 0%, #111827 98.41%)",
          },
          {
            title: "Purple Gradient Dark 1",
            value: "linear-gradient(76.86deg, #7E22CE 0%, #111827 98.41%)",
          },
        ],
      },
    }),
  ],
});
