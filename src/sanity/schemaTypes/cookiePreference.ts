import { defineField, defineType } from "sanity";
import {BellIcon} from '@sanity/icons'

export const CookiePreference = defineType({
  name: "cookiePreference",
  title: "Cookie Preference",
  type: "document",
  icon: BellIcon,
  groups: [
    {
      name: "template",
      title: "Template",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "cookiesDetail",
      title: "Cookie Settings",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "ctaBtn",
      title: "Primary Button",
      type: "object",
      group: "content",
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
      ],
    }),
    defineField({
      name: "secondaryCtaBtn",
      title: "Secondary Button",
      type: "object",
      group: "content",
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        {
          name: "secondaryBtnText",
          title: "CTA Button Text",
          type: "string",
        },
      ],
    }),

    //gradient we provide schema with limited color access
    defineField({
      name: "templateName",
      title: "Template Name",
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
});
