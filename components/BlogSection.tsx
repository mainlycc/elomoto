import React from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';

export const BlogSection: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-2">
              BLOG & WIADOMOŚCI
            </p>
            <h2 className="text-4xl font-black text-gray-900 uppercase">CO NOWEGO W ŚWIECIE EV?</h2>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('/blog')}
            className="hidden md:block text-gray-900 font-extrabold text-xs uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-all active:scale-95"
          >
            Zobacz wszystkie wpisy
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Ładowanie wpisów…</p>
        ) : null}
        {error && posts.length === 0 ? (
          <p className="text-red-600 text-sm mb-4">Nie udało się załadować bloga.</p>
        ) : null}
        {!loading && posts.length === 0 ? (
          <p className="text-gray-500 text-sm">Brak opublikowanych wpisów.</p>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <button
                type="button"
                onClick={() => navigateTo(`/blog/${post.slug}`)}
                className="text-left w-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-64 shadow-md">
                  <img
                    src={getImage(`blog_${post.slug}`, post.image)}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-extrabold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <time className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest">
                    {post.date}
                  </time>
                  <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors uppercase">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="pt-2">
                    <span className="text-primary font-extrabold text-xs uppercase tracking-wider flex items-center group-hover:translate-x-2 transition-transform">
                      Czytaj więcej
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
