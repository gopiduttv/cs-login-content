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
      name: "templateLogo",
      title: "Template Logo",
      type: "image",
      group: "content",
    }),
    defineField({
      name: "templateText",
      title: "Template Text",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "templateEventType",
      title: "Template Event Type",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "templateEventDate",
      title: "Template Event Date",
      type: "date",
      group: "content",
    }),
    defineField({
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'Start time and end time of the event',
      group: "content",
    }),
    defineField({
      name: 'eventTimeZone',
      title: 'Event Time Zone',
      type: 'string',
      description: 'Time zone for the event (e.g., ET for Eastern Time)',
      group: "content",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "blockContent",
      group: "content",
    }),


    defineField({
      name: "ctaBtn",
      title: "Primary Button",
      type: "object",
      group: "content",
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
      ],
    }),
    defineField({
      name: "secondaryBtn",
      title: "Secondary Button",
      type: "object",
      group: "content",
      fields: [
        {
          name: "secondaryBtnText",
          title: "Secondary Button Text",
          type: "string",
        },
        {
          type: "object",
          name: "videoDetails",
          title: "Video Details",
          fields: [
            {
              name: "videoPlatform",
              title: "Video Platform",
              type: "string",
            },
            {
              name: "videoId",
              title: "Video Id",
              type: "string",
            },
            {
              name: "videotitle",
              title: "Video Title",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "image",
      title: "Campaign Image",
      type: "image",
      group: "content",
    }),

    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
      group: "content",
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
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
