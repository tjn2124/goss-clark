
import {
  defineType,
  defineArrayMember,
  defineField,
} from "sanity";
import { ImageIcon } from "@sanity/icons/Image";

/**
 * Schema for rich-text content used in Journal posts.
 *
 * Supports:
 * - Paragraphs and headings
 * - Blockquotes
 * - Bullet lists
 * - Bold and italic text
 * - Links
 * - Inline images with alt text and captions
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",

  of: [
    // Rich-text editor
    defineArrayMember({
      type: "block",

      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],

      lists: [
        { title: "Bullet", value: "bullet" },
      ],

      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],

        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),

    // Images inserted within an article
    defineArrayMember({
      type: "image",
      icon: ImageIcon,

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description:
              "Describe the image for accessibility and screen readers.",
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: "caption",
          title: "Image Caption",
          type: "string",
          description:
              "Optional text displayed underneath the image in the article.",
        }),
      ],

      preview: {
        select: {
          media: "asset",
          title: "caption",
          subtitle: "alt",
        },
        prepare({ media, title, subtitle }) {
          return {
            media,
            title: title || "Article Image",
            subtitle: subtitle || "No alternative text",
          };
        },
      },
    }),
  ],
});
