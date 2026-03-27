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
      name: 'bio',
      title: 'Krótki opis',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(20).max(320),
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
      validation: (Rule) => Rule.required(),
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
