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
      title: 'Wstęp / case study (nad zdjęciem)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Tekst główny pod krótkim wstępem (intro) — akapity, nagłówki, listy.',
    }),
    defineField({
      name: 'detailLead',
      title: 'Lead pod nagłówkiem „Realizacje elomoto.eco”',
      type: 'text',
      rows: 4,
      description:
        'Opcjonalny akapit pod dużym tytułem strony szczegółu. Pusty = domyślny tekst z szablonu.',
    }),
    defineField({
      name: 'scopeTitle',
      title: 'Tytuł kolumny obok zdjęcia',
      type: 'string',
      initialValue: 'Zakres projektu',
    }),
    defineField({
      name: 'scopeContent',
      title: 'Treść: zakres projektu (obok zdjęcia)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Akapit i lista punktów obok głównego zdjęcia.',
    }),
    defineField({
      name: 'effectsTitle',
      title: 'Tytuł sekcji efektów',
      type: 'string',
      initialValue: 'Efekty dla inwestora',
    }),
    defineField({
      name: 'effectsLead',
      title: 'Wstęp do sekcji efektów',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'effectsHighlights',
      title: 'Karty efektów (np. komfort, wizerunek, dane)',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'effectHighlight',
          fields: [
            defineField({
              name: 'label',
              title: 'Etykieta',
              type: 'string',
              description: 'Krótka etykieta nad opisem (np. „komfort”).',
            }),
            defineField({
              name: 'text',
              title: 'Opis',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'text' },
          },
        }),
      ],
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
