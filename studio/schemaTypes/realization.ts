import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'realization',
  title: 'Realizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność na liście',
      type: 'number',
      description: 'Niższa wartość = wyżej na liście. Używane też do etykiety „realizacja 0X”.',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Tekst alternatywny',
        }),
      ],
    }),
    defineField({
      name: 'legacyImageUrl',
      title: 'URL zdjęcia (gdy brak uploadu)',
      type: 'url',
    }),
    defineField({
      name: 'intro',
      title: 'Wstęp pod tytułem',
      type: 'text',
      rows: 3,
      description: 'Krótki opis zamiast domyślnego tekstu szablonu.',
    }),
    defineField({
      name: 'body',
      title: 'Pełny opis (case study)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current', media: 'mainImage' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Bez tytułu', subtitle: subtitle ? `/${subtitle}` : '', media };
    },
  },
  orderings: [
    {
      title: 'Kolejność',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
