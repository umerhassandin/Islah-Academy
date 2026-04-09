import React from "react";
import Link from "next/link";
import Button from "../../components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    slug: "importance-of-tajweed-in-quran-recitation",
    title: "The Importance of Tajweed in Quran Recitation",
    excerpt: "Tajweed is not just about pronunciation; it's about honoring the divine word. Learn why mastering Tajweed is crucial for every Muslim student.",
    date: "April 1, 2026",
    author: "Qari Saleem Ur Rehman",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    slug: "why-pakistani-qaris-highly-sought-after",
    title: "Why Pakistani Qaris are Highly Sought After for Quran Teaching",
    excerpt: "The heritage of Quranic recitation in Pakistan is world-renowned. Explore the reasons behind the global demand for Pakistani Quranic education.",
    date: "March 25, 2026",
    author: "Academy Staff",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c7ad02?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    slug: "balance-quran-learning-with-busy-schedule",
    title: "How to Balance Quran Learning with a Busy Modern Schedule",
    excerpt: "Life can be demanding. Our tips and strategies help you integrate Quranic studies seamlessly into your daily routine, no matter where you are.",
    date: "March 15, 2026",
    author: "Student Success Team",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-0 pb-32">
      {/* Banner */}
      <section className="bg-primary-900 py-32 text-center text-white">
        <div className="section-container relative z-10">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 block">Knowledge Base</span>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Islah Quran Blog</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto italic leading-relaxed">
            Tips, insights, and spiritual guidance to enrich your Quranic learning journey.
          </p>
        </div>
      </section>

      {/* Blog List Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden border border-primary-100 shadow-xl shadow-primary-900/[0.03] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden mb-8 group-hover:scale-[1.02] transition duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gold-600 text-white px-4 py-1.5 font-bold text-xs rounded-full uppercase tracking-widest animate-pulse-subtle">
                    New Post
                  </div>
                </div>

                <div className="px-8 pb-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-xs text-primary-700/50 mb-4 font-bold uppercase tracking-widest italic transition-colors group-hover:text-gold-600">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-2 border-l border-primary-100 pl-6"><User size={14} /> {post.author}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-gold-600 transition-colors uppercase tracking-tight leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-primary-700/70 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`} className="group/btn inline-flex items-center gap-3 text-gold-600 font-bold uppercase tracking-widest text-xs hover:gap-5 transition-all">
                    Read Full Article
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center animate-fade-in-up">
            <Button variant="outline" className="px-12 py-4 text-emerald-900 hover:scale-105 active:scale-95 transition-all">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
