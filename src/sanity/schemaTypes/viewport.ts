import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const viewport = defineType({
  name: "viewport",
  title: "Viewport",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "id",
      type: "slug",
    }),
    defineField({
      name: "dimension",
      type: "string",
    }),
    defineField({
      name: "dimensionValue",
      type: "slug",
    }),
    defineField({
      title: "Campaign Combining Mode",
      name: "combiningMode",
      type: "string",
      options: {
        list: [
          {
            title: "Concat",
            value: "concat"
          },
          {
            title: "Override",
            value: "override"
          }
        ]
      }
    }),
    defineField({
      name: "additionalCampaigns",
      type: "array",
      title: "Additional Campaigns",
      of: [{ type: "reference", to: [{ type: "campaign" }] }],
    })
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
