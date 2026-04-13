import { PortableText } from '@portabletext/react';
import React from 'react';
import { useBlogPostBySlug } from '../hooks/useBlogPostBySlug';
import { useI18n } from '../i18n/I18nProvider';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';
import { blogPortableTextComponents } from './portableTextComponents';

/** Jak `/realizacje`: szerokość i padding pod lewą krawędź logo w navbarze. */
const blogPostShellClass = 'max-w-7xl mx-auto pl-3 pr-4 sm:pl-5 sm:pr-6 lg:pl-7 lg:pr-8';

/** Szeroka kolumna od lewej krawędzi shell; typografia wyśrodkowana w jej obrębie. */
const blogArticleColumnClass = 'w-full max-w-6xl text-left';

const blogProseClass =
  'prose-blog w-full text-left [&_p]:text-center [&_h2]:text-left [&_h3]:text-left [&_ul]:mx-auto [&_ul]:text-left [&_ul]:max-w-2xl [&_ol]:mx-auto [&_ol]:text-left [&_ol]:max-w-2xl';

const blogContentVerticalClass = 'pt-12 pb-24 md:pt-14 bg-white';

interface Props {
  slug: string;
}

export const BlogPostPage: React.FC<Props> = ({ slug }) => {
  const { t } = useI18n();
  const { post, loading, error } = useBlogPostBySlug(slug);

  if (loading) {
    return (
      <section className={`${blogContentVerticalClass} min-h-[50vh]`}>
        <div className={blogPostShellClass}>
          <div className={`${blogArticleColumnClass} text-gray-500 text-sm font-bold uppercase tracking-widest`}>
            {t('common.loading')}
          </div>
        </div>
      </section>
    );
  }

  if (error && !post) {
    return (
      <section className={`${blogContentVerticalClass} min-h-[50vh]`}>
        <div className={blogPostShellClass}>
          <div className={blogArticleColumnClass}>
            <p className="text-red-600 text-sm mb-4">{t('blogPost.errorLoad')}</p>
            <button
              type="button"
              onClick={() => navigateTo('/blog')}
              className="text-primary font-extrabold text-xs uppercase tracking-wider border-b-2 border-primary pb-1"
            >
              {t('blogPost.backToBlog')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className={`${blogContentVerticalClass} min-h-[50vh]`}>
        <div className={blogPostShellClass}>
          <div className={blogArticleColumnClass}>
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
        </div>
      </section>
    );
  }

  const coverSrc = getImage(`blog_${post.slug}`, post.image);

  return (
    <article className={blogContentVerticalClass}>
      <div className={blogPostShellClass}>
        <div className={blogArticleColumnClass}>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="text-gray-500 font-extrabold text-xs uppercase tracking-widest mb-8 hover:text-primary transition-colors block w-full text-left"
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

          <div className="relative overflow-hidden rounded-2xl mb-10 h-80 md:h-96 lg:h-[28rem] shadow-md w-full">
            <img
              src={coverSrc}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {post.excerpt ? (
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-10 border-t-4 border-primary pt-6 max-w-4xl text-left">
              {post.excerpt}
            </p>
          ) : null}

          {post.body && post.body.length > 0 ? (
            <div className={blogProseClass}>
              <PortableText value={post.body} components={blogPortableTextComponents} />
            </div>
          ) : (
            <p className="text-gray-500 text-sm italic">
              {t('blogPost.bodyEmpty')}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};
