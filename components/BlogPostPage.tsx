import { PortableText } from '@portabletext/react';
import React from 'react';
import { useBlogPostBySlug } from '../hooks/useBlogPostBySlug';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';
import { blogPortableTextComponents } from './portableTextComponents';

interface Props {
  slug: string;
}

export const BlogPostPage: React.FC<Props> = ({ slug }) => {
  const { post, loading, error } = useBlogPostBySlug(slug);

  if (loading) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Ładowanie…</p>
        </div>
      </section>
    );
  }

  if (error && !post) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-sm mb-4">Nie udało się załadować wpisu. Spróbuj ponownie później.</p>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="text-primary font-extrabold text-xs uppercase tracking-wider border-b-2 border-primary pb-1"
          >
            Wróć do bloga
          </button>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase mb-4">Nie znaleziono wpisu</h1>
          <p className="text-gray-600 text-sm mb-6">Sprawdź adres URL lub wróć do listy artykułów.</p>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-primary text-white text-xs font-extrabold tracking-wider uppercase shadow-lg hover:opacity-95 active:scale-95 transition-all"
          >
            Wszystkie artykuły
          </button>
        </div>
      </section>
    );
  }

  const coverSrc = getImage(`blog_${post.slug}`, post.image);

  return (
    <article className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateTo('/blog')}
          className="text-gray-500 font-extrabold text-xs uppercase tracking-widest mb-8 hover:text-primary transition-colors"
        >
          ← Blog
        </button>

        <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-3">
          {post.category || 'Blog'}
        </p>
        <time className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest block mb-4">
          {post.date}
        </time>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight mb-8">
          {post.title}
        </h1>

        <div className="relative overflow-hidden rounded-2xl mb-10 h-64 md:h-80 shadow-md">
          <img
            src={coverSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {post.excerpt ? (
          <p className="text-gray-600 text-base leading-relaxed font-medium mb-10 border-l-4 border-primary pl-4">
            {post.excerpt}
          </p>
        ) : null}

        {post.body && post.body.length > 0 ? (
          <div className="prose-blog">
            <PortableText value={post.body} components={blogPortableTextComponents} />
          </div>
        ) : (
          <p className="text-gray-500 text-sm italic">
            Pełna treść artykułu pojawi się tutaj po uzupełnieniu pola „Treść artykułu” w CMS.
          </p>
        )}
      </div>
    </article>
  );
};
