import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Członek zespołu',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Imię i nazwisko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Stanowisko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legacyPhotoUrl',
      title: 'URL zdjęcia (gdy brak uploadu)',
      type: 'url',
      description: 'Opcja awaryjna — pełny adres obrazu. Jeśli wgrasz plik poniżej, ma pierwszeństwo.',
    }),
    defineField({
      name: 'photo',
      title: 'Zdjęcie (pionowe)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Tekst alternatywny',
        }),
      ],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const legacy = (context.parent as { legacyPhotoUrl?: string } | undefined)?.legacyPhotoUrl;
          if (!value && !legacy) {
            return 'Wgraj zdjęcie albo podaj URL zdjęcia';
          }
          return true;
        }),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność na liście',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'position',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Bez imienia i nazwiska',
        subtitle: subtitle || 'Bez stanowiska',
        media,
      };
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
