import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    location: "London, UK",
    text: "Islah Quran Academy has been a blessing for my children. The teachers are incredibly patient and their Tajweed is impeccable. My son has already memorized 5 Juz in just 6 months!",
    stars: 5,
    image: "https://i.pravatar.cc/150?u=ahmed",
  },
  {
    name: "Sara Mahmoud",
    location: "New York, USA",
    text: "As a convert, it was hard to find a place where I felt comfortable. Qari Saleem's academy is so welcoming and his teaching style is very effective for adults. Highly recommended!",
    stars: 5,
    image: "https://i.pravatar.cc/150?u=sara",
  },
  {
    name: "Omar Sharif",
    location: "Toronto, Canada",
    text: "The one-on-one sessions are what make this academy stand out. My daughter gets the full attention of the Qari, and she is now reciting with so much confidence. Mashallah!",
    stars: 5,
    image: "https://i.pravatar.cc/150?u=omar",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Real Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 uppercase tracking-tight">Parent & Student Feedback</h2>
          <div className="w-20 h-1.5 bg-gold-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.name}
              className="bg-white p-10 rounded-[2.5rem] border border-primary-50 shadow-premium hover:shadow-2xl transition duration-500 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <Quote className="text-primary-900/10 mb-6" size={48} />
              <p className="text-primary-700/80 leading-relaxed mb-8 italic">"{t.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-primary-50 pt-8">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-gold-400 p-0.5" />
                <div>
                  <h4 className="font-bold text-primary-900">{t.name}</h4>
                  <p className="text-primary-700/60 text-xs font-medium uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-900/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
