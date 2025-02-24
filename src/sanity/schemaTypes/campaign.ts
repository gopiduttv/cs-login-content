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
      default: true,
    },
    {
      name: "template",
      title: "Template",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fieldsets: [
    {
      name: "pillElement",
      title: "Pill Element",
      options: {
        collapsible: true,
        collapsed: true,
      },
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
      name: "colorTemplate",
      type: "array",
      title: "Color Schema",
      of: [{ type: "reference", to: [{ type: "backgroundLinearGradient" }] }],
      group: "template",
      validation: Rule => Rule.length(1).error('You can only select one item.') 
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
            value: "ct",
          },
          {
            title: "Right Image Left Text",
            value: "rilt",
          },
          {
            title: "Left Image Right Text",
            value: "lirt",
          },
        ],
      },
      group: "template",
    }),

    defineField({
      name: "themeMode",
      title: "Layout Theme Mode",
      type: "string",
      group: "template",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Dark Mode(white text)",
            value: "darkMode",
          },
          {
            title: "Light Mode(black text)",
            value: "lightMode",
          },
        ],
      },
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      group: "template",
    }),
    defineField({
      name: "isCookieShow",
      title: "Cookie Notification show",
      type: "boolean",
      group: "template",
    }),

    // strcture schema

    defineField({
      name: "structure",
      title: "Template Structure",
      group: "content",
      type: "document",
      fields: [
        defineField({
          name: "components",
          title: "",
          type: "array",
          of: [
            {
              type: "object",
              name: "topTemplateLogo",
              title: "Top Logo Component",
              fields: [
                {
                  name: "templateLogos",
                  title: "Top Logos",
                  type: "array",
                  of: [
                    {
                      type: "image",
                      title: "Logo",
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  logos: "templateLogos",
                },
                prepare(selection) {
                  const { logos } = selection;
                  return {
                    title: `Top Logos (${logos?.length || 0})`,
                    media: logos?.[0]?.asset?.url,
                  };
                },
              },
            },
            {
              type: "object",
              name: "pillElement",
              title: "Top Pills Component",
              fields: [
                {
                  name: "subTitle",
                  title: "Sub Title",
                  type: "string",
                },
                {
                  name: "templateEventType",
                  title: "Pill Text",
                  type: "string",
                },
                {
                  name: "templateEventDate",
                  title: "Pill Date and time",
                  type: "string",
                },
                {
                  name: "eventLocation",
                  title: "Pill Location",
                  type: "string",
                }
              ],
              preview: {
                prepare() {
                  return {
                    title: `Top Pills Component`,
                  };
                },
              },
            },
            // Heading Component
            {
              type: "object",
              name: "headingComponent",
              title: "Heading Component",
              fields: [
                {
                  name: "title",
                  title: "Heading",
                  type: "blockContent",
                },
              ],
              preview: {
                select: {
                  title: "title[0].children[0].text", // Display the first block's text
                },
                prepare({ title }) {
                  return {
                    title: "Heading Component",
                    subtitle: title || "No heading provided",
                  };
                },
              },
            },
            // Sub Heading Component
            {
              type: "object",
              name: "subHeadingComponent",
              title: "Sub Heading Component",
              fields: [
                {
                  name: "subTitle",
                  title: "Sub Heading",
                  type: "blockContent",
                },
              ],
              preview: {
                select: {
                  title: "subTitle[0].children[0].text", // Display the first block's text
                },
                prepare({ title }) {
                  return {
                    title: "Sub Title Component",
                    subtitle: title || "No heading provided",
                  };
                },
              },
            },
            // Paragraph Component
            {
              type: "object",
              name: "paragraphComponent",
              title: "Paragraph Component",
              fields: [
                {
                  name: "paragraph",
                  title: "Paragraph",
                  type: "blockContent",
                },
              ],
              preview: {
                select: {
                  title: "paragraph[0].children[0].text", // Display the first block's text
                },
                prepare({ title }) {
                  return {
                    title: "Paragraph Component",
                    subtitle: title || "No heading provided",
                  };
                },
              },
            },
            // Button Component
            {
              type: "object",
              name: "buttonComponents",
              title: "Button Component",
              fields: [
                {
                  name: "ctaBtn",
                  title: "Primary Button",
                  type: "object",
                  options: {
                    collapsed: true,
                    collapsible: true,
                  },
                  fields: [
                    {
                      name: "ctaBtnText",
                      title: "CTA Button Text",
                      type: "string",
                    },
                    {
                      name: "ctaBtnLink",
                      title: "CTA Button Link",
                      type: "url",
                    },
                    {
                      name: "ctaBtnColor",
                      title: "CTA Button Color",
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Red', value: '#FF5733' },
                          { title: 'Green', value: '#26A363' },
                          { title: 'Blue', value: '#007bff' },
                          { title: 'Yellow', value: '#FFEB3B' },
                          { title: 'Purple', value: '#6f42c1' },
                          { title: 'White', value: '#fff' },
                          { title: 'Black', value: '#000000' }
                        ], 
                        layout: 'dropdown',
                      },
                    },
                    {
                      name: "ctaBtnTextColor",
                      title: "CTA Button Text Color",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "White text",
                            value: "whiteMode",
                          },
                          {
                            title: "Black text",
                            value: "blackMode",
                          },
                        ],
                        layout: 'radio',
                      },
                    },
                  ],
                },
                {
                  type: "object",
                  name: "secondaryBtnComponent",
                  title: "Secondary Button Component",
                  options: {
                    collapsed: true,
                    collapsible: true,
                  },
                  fields: [
                    {
                      name: "secondaryBtnText",
                      title: "Secondary Button Text",
                      type: "string",
                    },
                    {
                      name: "videoDetails",
                      title: "Video Details",
                      type: "object",
                      fields: [
                        {
                          name: "videoPlatform",
                          title: "Video Platform",
                          type: "string",
                        },
                        {
                          name: "videoId",
                          title: "Video ID",
                          type: "string",
                        },
                        {
                          name: "videoTitle",
                          title: "Video Title",
                          type: "string",
                        },
                      ],
                    },
                    {
                      name: "ctaBtnColor",
                      title: "CTA Button Color",
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Red', value: '#FF5733' },
                          { title: 'Green', value: '#26A363' },
                          { title: 'Blue', value: '#007bff' },
                          { title: 'Yellow', value: '#FFEB3B' },
                          { title: 'Purple', value: '#6f42c1' },
                          { title: 'White', value: '#fff' },
                          { title: 'Black', value: '#000000' },
                          { title: 'Transparent', value: 'transparent' }
                        ], 
                        layout: 'dropdown',
                      },
                    },
                    {
                      name: "ctaBtnTextColor",
                      title: "CTA Button Text Color",
                      type: "string",
                      options: {
                        list: [
                          {
                            title: "White text",
                            value: "whiteMode",
                          },
                          {
                            title: "Black text",
                            value: "blackMode",
                          },
                        ],
                        layout: 'radio',
                      },
                    },
                  ],
                },
                {
                  name: "note",
                  title: "Note",
                  type: "blockContent",
                },
              ],
              preview: {
                select: {},
                prepare() {
                  return {
                    title:"Button Component",
                  };
                },
              },
            },
            {
              type: "object",
              name: "noteComponent",
              title: "Note Component",
              fields: [
                {
                  name: "disclaimer",
                  title: "Disclaimer",
                  type: "text",
                },
              ],
              preview: {
                select: {},
                prepare() {
                  return {
                    title: "Disclaimer Component",
                  };
                },
              },
            },
          ],      
        }),
        // Image Component
        defineField({
          name: "campaignImage",
          title: "Campaign Image",
          type: "image",
        }),
        defineField({
          name: "campaignCarousalImage",
          title: "Campaign Image For Carousel",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "speakerImage",
                  title: "Speaker Image",
                  type: "image",
                },
                {
                  name: "speakerName",
                  title: "Speaker Name",
                  type: "string",
                },
                {
                  name: "speakerDesignation",
                  title: "Speaker Designation",
                  type: "string",
                },
              ],
            },
          ],
        }),
      ], 
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
