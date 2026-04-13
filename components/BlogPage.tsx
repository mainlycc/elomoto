import React from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useI18n } from '../i18n/I18nProvider';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';

/** Jak `/realizacje`: szerokość i padding pod lewą krawędź logo w navbarze. */
const blogPageShellClass = 'max-w-7xl mx-auto pl-3 pr-4 sm:pl-5 sm:pr-6 lg:pl-7 lg:pr-8';

const blogListHeaderClass = 'mb-12 w-full max-w-6xl text-left';

export const BlogPage: React.FC = () => {
  const { t } = useI18n();
  const { posts, loading, error } = useBlogPosts();

  return (
    <section className="pt-12 pb-24 md:pt-14 bg-white">
      <div className={blogPageShellClass}>
        <div className={blogListHeaderClass}>
          <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-3">{t('blogPage.eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-4">{t('blogPage.title')}</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl text-left leading-relaxed">{t('blogPage.intro')}</p>
        </div>

        {loading ? (
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8 text-left w-full max-w-6xl">
            {t('blog.loading')}
          </p>
        ) : null}
        {error && posts.length === 0 ? (
          <div className="text-red-600 text-sm mb-8 space-y-2 w-full max-w-6xl text-left">
            <p>{t('blogPage.listError')}</p>
            <p className="text-xs text-red-700/80 font-semibold">
              {error.message}
            </p>
            {String(error.message).toLowerCase().includes('cors') ||
            String(error.message).toLowerCase().includes('failed to fetch') ? (
              <p className="text-xs text-red-700/80">
                {t('blog.corsHint')}
              </p>
            ) : null}
          </div>
        ) : null}
        {!loading && posts.length === 0 ? (
          <p className="text-gray-500 text-sm w-full max-w-6xl text-left">{t('blog.empty')}</p>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <button
                type="button"
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="text-left w-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-72 sm:h-80 md:h-96 shadow-md">
                  <img
                    src={getImage(`blog_${post.slug}`, post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <time className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors uppercase">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="pt-2">
                    <span className="text-primary font-extrabold text-xs uppercase tracking-wider flex items-center group-hover:translate-x-2 transition-transform">
                      {t('blog.readMore')}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
