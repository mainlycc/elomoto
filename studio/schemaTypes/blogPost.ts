import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Wpis na blogu',
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
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Krótki opis (lead)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Główne zdjęcie',
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
      title: 'URL zdjęcia (gdy brak uploadu w CMS)',
      type: 'url',
      description: 'Opcjonalnie: zewnętrzny URL (np. z migracji). Używane, gdy pole „Główne zdjęcie” jest puste.',
    }),
    defineField({
      name: 'body',
      title: 'Treść artykułu',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' },
    prepare({ title, media }) {
      return { title: title || 'Bez tytułu', media };
    },
  },
  orderings: [
    {
      title: 'Data publikacji, najnowsze',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
