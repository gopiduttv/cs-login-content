import { defineArrayMember, defineType } from 'sanity';
import React from 'react'

const HighlightIcon = () => (
  <span style={{ fontWeight: 'bold' }}>H</span>
)
const HighlightDecorator = (props: any) => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        // { title: 'H1', value: 'h1' },
        // { title: 'H2', value: 'h2' },
        // { title: 'H3', value: 'h3' },
        // { title: 'H4', value: 'h4' },
        // { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Highlight',
            value: 'highlight',
            icon: () => <span style={{fontWeight: 'bold'}}>H</span>,
            component: (props: any) => <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>,
          }
        ],
        annotations: [
          { type: 'textColor' },
          // {
          //   title: 'Highlight',
          //   name: 'highlight',
          //   type: 'object',
          //   fields: [
          //     {
          //       title: 'Text Color',
          //       name: 'textColor',
          //       type: 'string',
          //       description: 'Specify a text color (e.g., #ff0000, red, rgb(255,0,0))',
          //     }
          //   ],
          // },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                name: 'backgroundColor',
                title: 'Background color',
                type: 'simplerColor',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'width',
          type: 'number',
          title: 'Image Width',
        },
        {
          name: 'height',
          type: 'number',
          title: 'Image Height',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: { isHighlighted: true }, // Highlights the field in the image editor
        },
      ],
    }),
  ],
});
