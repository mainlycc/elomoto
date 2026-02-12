import React from 'react';
import { BLOG_POSTS } from '../constants';
import { getImage } from '../utils/db';

export const BlogPage: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-primary font-extrabold uppercase tracking-widest text-xs mb-3">
            Blog & wiadomości
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-4">
            Wszystkie artykuły o elektromobilności
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Zebraliśmy w jednym miejscu nasze artykuły, aktualności i poradniki związane z ładowaniem
            samochodów elektrycznych oraz rozwojem infrastruktury EV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, index) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-64 shadow-md">
                <img
                  src={getImage(`blog_${index}`, post.image)}
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
                <h2 className="text-xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors uppercase">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

