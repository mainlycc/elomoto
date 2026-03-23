import type { PortableTextComponents } from '@portabletext/react';

export const blogPortableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4 uppercase tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 text-sm md:text-base">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700 text-sm md:text-base">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === 'string' ? value.href : '#';
      return (
        <a
          href={href}
          className="text-primary font-bold underline underline-offset-2 hover:opacity-80"
          rel="noopener noreferrer"
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export const realizationPortableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h3 className="text-lg font-semibold text-white mt-8 mb-3">{children}</h3>
    ),
    h3: ({ children }) => (
      <h4 className="text-base font-semibold text-white mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-sm text-gray-200 leading-relaxed mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4 space-y-2 text-sm text-gray-200">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4 space-y-2 text-sm text-gray-200">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === 'string' ? value.href : '#';
      return (
        <a
          href={href}
          className="text-[#8ab925] font-semibold underline underline-offset-2 hover:opacity-90"
          rel="noopener noreferrer"
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    },
  },
};
