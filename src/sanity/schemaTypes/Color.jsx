import { defineField, defineType } from "sanity";

export const Color = defineType({
  name: "color",
  title: "Color",
  type: "document",

  fields: [
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .custom((color) => {
            if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
              return "Enter a valid HEX color code (e.g., #ffffff or #fff)";
            }
            return true;
          }),
    }),
    defineField({
      name: "headingColor",
      title: "Heading Color",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .custom((color) => {
            if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
              return "Enter a valid HEX color code (e.g., #ffffff or #fff)";
            }
            return true;
          }),
    }),
    defineField({
      name: "highlightColor",
      title: "Highlight Color",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .custom((color) => {
            if (!/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
              return "Enter a valid HEX color code (e.g., #ffffff or #fff)";
            }
            return true;
          }),
    }),
  ],
  preview: {
    select: {
      backgroundColor: "backgroundColor",
      textColor: "textColor",
      headingColor: "headingColor",
    },
    prepare({ backgroundColor, textColor, headingColor }) {
      return {
        title: "Color Preview",
        subtitle: `BG: ${backgroundColor || "N/A"}, Text: ${textColor || "N/A"}, Heading: ${headingColor || "N/A"}`,
        media: () => (
          <div
            style={{
              display: "flex",
              gap: "4px",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Background Color */}
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: backgroundColor || "#ccc",
                border: "1px solid #ddd",
              }}
            />
            {/* Text Color */}
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: textColor || "#ccc",
                border: "1px solid #ddd",
              }}
            />
            {/* Heading Color */}
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: headingColor || "#ccc",
                border: "1px solid #ddd",
              }}
            />
          </div>
        ),
      };
    },
  },
});
