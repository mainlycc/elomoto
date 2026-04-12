import { PortableText } from '@portabletext/react';
import React from 'react';
import { useBlogPostBySlug } from '../hooks/useBlogPostBySlug';
import { useI18n } from '../i18n/I18nProvider';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';
import { blogPortableTextComponents } from './portableTextComponents';

interface Props {
  slug: string;
}

export const BlogPostPage: React.FC<Props> = ({ slug }) => {
  const { t } = useI18n();
  const { post, loading, error } = useBlogPostBySlug(slug);

  if (loading) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{t('common.loading')}</p>
        </div>
      </section>
    );
  }

  if (error && !post) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 text-sm mb-4">{t('blogPost.errorLoad')}</p>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="text-primary font-extrabold text-xs uppercase tracking-wider border-b-2 border-primary pb-1"
          >
            {t('blogPost.backToBlog')}
          </button>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase mb-4">{t('blogPost.notFoundTitle')}</h1>
          <p className="text-gray-600 text-sm mb-6">{t('blogPost.notFoundBody')}</p>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-primary text-white text-xs font-extrabold tracking-wider uppercase shadow-lg hover:opacity-95 active:scale-95 transition-all"
          >
            {t('blogPost.allArticles')}
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
          {t('blogPost.backLink')}
        </button>

        <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-3">
          {post.category || t('blogPost.categoryFallback')}
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
            {t('blogPost.bodyEmpty')}
          </p>
        )}
      </div>
    </article>
  );
};
