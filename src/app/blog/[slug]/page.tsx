import React from "react";
import Link from "next/link";
import Button from "../../../components/ui/Button";
import { ArrowLeft, Calendar, User, Facebook, Twitter, Link as LinkIcon, Mail } from "lucide-react";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;

   // Mock data fetching for individual post
   const post = {
      title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      date: "April 1, 2026",
      author: "Qari Saleem Ur Rehman",
      image: "https://picsum.photos/id/1025/1200/600",
      content: `
      <p className="text-xl mb-10 leading-relaxed italic text-primary-900/80 first-letter:text-5xl first-letter:font-bold first-letter:text-gold-600 first-letter:float-left first-letter:mr-4">
        Discover the profound impact of mastering Quranic recitation. The Quran is not just a book to be read; it is a melody to be experienced with the heart.
      </p>
      
      <h2 className="text-3xl font-bold text-primary-900 mb-6 uppercase tracking-tight mt-12">The Essence of Learning</h2>
      <p className="text-primary-800 leading-relaxed mb-8 text-lg">
        Many students struggle with the complexities of Arabic phonetics, but with the right guidance from experienced Pakistani Qaris, the journey becomes a spiritual upliftment. We focus on the precise placement of letters (Makharij) and the rhythmic flow (Tajweed) that brings the holy words to life.
      </p>

      <div className="my-12 p-10 bg-gold-50 rounded-3xl border-l-8 border-gold-600 shadow-xl shadow-gold-500/5 italic leading-relaxed text-xl">
         "The best among you is the one who learns the Quran and teaches it." (Sahih Bukhari)
      </div>

      <h3 className="text-2xl font-bold text-primary-900 mb-4 mt-12 uppercase tracking-tight">Structured Progress</h3>
      <p className="text-primary-800 leading-relaxed mb-8 text-lg">
        Our methodology is root in centuries-old traditions of Pakistani Quranic scholarship, adapted for students living in the USA. We understand the challenges of a busy schedule, which is why our one-on-one sessions are designed to be both intensive and flexible.
      </p>

      <h4 className="text-xl font-bold text-primary-900 mb-4 mt-12 uppercase tracking-tight">Conclusion</h4>
      <p className="text-primary-800 leading-relaxed mb-12 text-lg">
        Whether you are starting with Noorani Qaida or embarking on the noble path of Hifz, Islah Quran Academy is your partner in excellence. Join hundreds of students who have transformed their recitation and connection with the Quran.
      </p>
    `
   };

   return (
      <article className="pb-32 bg-white selection:bg-gold-500 selection:text-white">
         {/* Header Banner */}
         <section className="bg-primary-900 pt-40 pb-24 text-center text-white relative">
            <div className="section-container relative z-10 px-8">
               <Link href="/blog" className="inline-flex items-center gap-3 text-gold-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs">
                  <ArrowLeft size={18} />
                  Back to Blog
               </Link>
               <h1 className="text-4xl md:text-7xl font-bold mb-10 max-w-5xl mx-auto uppercase tracking-tight leading-tight italic">{post.title}</h1>

               <div className="flex items-center justify-center gap-8 text-xs text-emerald-200/60 font-bold uppercase tracking-widest border-t border-white/10 pt-10">
                  <span className="flex items-center gap-3"><Calendar size={18} className="text-gold-500" /> {post.date}</span>
                  <span className="flex items-center gap-3 border-l border-white/20 pl-8"><User size={18} className="text-gold-500" /> {post.author}</span>
               </div>
            </div>
         </section>

         {/* Featured Image */}
         <div className="section-container -mt-16 relative z-20 px-8">
            <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-primary-900/10 transform hover:scale-[1.01] transition-transform duration-500">
               <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[600px]" />
            </div>
         </div>

         {/* Post Content */}
         <div className="section-container mt-20 px-8">
            <div className="max-w-4xl mx-auto">
               <div className="prose prose-xl prose-emerald" dangerouslySetInnerHTML={{ __html: post.content }} />

               {/* Share and Tags */}
               <div className="mt-24 pt-12 border-t border-primary-100 flex flex-col md:flex-row justify-between items-center gap-10">
                  <div>
                     <h5 className="text-xs font-bold text-primary-900/40 uppercase tracking-widest mb-6">Share this article</h5>
                     <div className="flex gap-4">
                        <button className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 hover:bg-primary-900 hover:text-white transition-all cursor-pointer">
                           <Facebook size={24} />
                        </button>
                        <button className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 hover:bg-primary-900 hover:text-white transition-all cursor-pointer">
                           <Twitter size={24} />
                        </button>
                        <button className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 hover:bg-primary-900 hover:text-white transition-all cursor-pointer">
                           <Mail size={24} />
                        </button>
                        <button className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-900 hover:bg-primary-900 hover:text-white transition-all cursor-pointer">
                           <LinkIcon size={24} />
                        </button>
                     </div>
                  </div>

                  <div className="text-center md:text-right">
                     <h5 className="text-xs font-bold text-primary-900/40 uppercase tracking-widest mb-6">Enroll in a Course</h5>
                     <Link href="/contact">
                        <Button variant="gold" size="lg" className="shadow-lg shadow-gold-600/20 hover:scale-105 active:scale-95 transition-all">
                           Request Free Trial Now
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
}
