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
      name: 'locale',
      title: 'Język / Language',
      type: 'string',
      options: {
        list: [
          { title: 'Polski (PL)', value: 'pl' },
          { title: 'English (EN)', value: 'en' },
        ],
        layout: 'radio',
      },
      initialValue: 'pl',
      description:
        'Wersja językowa wpisu. Dla angielskiej strony utwórz osobny dokument (treść i slug po angielsku) i ustaw EN. Puste pole = traktowane jak PL.',
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
    select: { title: 'title', media: 'mainImage', locale: 'locale', subtitle: 'slug.current' },
    prepare({ title, media, locale, subtitle }) {
      const lang = locale === 'en' ? 'EN' : 'PL';
      const slugPart = subtitle ? ` /${subtitle}` : '';
      return { title: title || 'Bez tytułu', subtitle: `${lang}${slugPart}`, media };
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
