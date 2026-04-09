import React from "react";
import { CheckCircle, Globe, GraduationCap, MapPin } from "lucide-react";
import Button from "../../components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-32">
      {/* Banner */}
      <section className="bg-primary-900 py-32 text-center text-white relative">
        <div className="absolute inset-0 bg-gold-600/5 rotate-12 translate-x-1/4 -z-10 blur-3xl opacity-30 px-8" />
        <div className="section-container relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">About Our Mission</h1>
          <p className="text-xl md:text-2xl text-emerald-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering students across the globe with the pure essence of Quranic recitation through our world-class pedagogical approach.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
             <div className="p-12 rounded-[2.5rem] bg-white border border-primary-50 shadow-premium hover:border-gold-500 transition-all duration-500 group">
               <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary-900 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 shadow-lg">
                 <Globe size={40} />
               </div>
               <h3 className="text-2xl font-bold text-primary-900 mb-6 tracking-tight">Our Mission</h3>
               <p className="text-primary-700/60 text-sm leading-relaxed font-light italic">
                 Empowering students worldwide with authentic Quranic knowledge. We believe every soul deserves direct access to divine wisdom, regardless of geography.
               </p>
             </div>
             <div className="p-8 rounded-3xl border border-primary-100 hover:border-gold-500 hover:shadow-2xl transition-all duration-300">
               <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-600">
                 <GraduationCap size={32} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Our Methodology</h3>
               <p className="text-primary-700/70 text-sm leading-relaxed">
                 Combining traditional Pakistani teaching with modern, interactive technology for a seamless online learning journey.
               </p>
             </div>
             <div className="p-8 rounded-3xl border border-primary-100 hover:border-gold-500 hover:shadow-2xl transition-all duration-300">
               <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                 <CheckCircle size={32} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Our Standard</h3>
               <p className="text-primary-700/70 text-sm leading-relaxed">
                 Uncompromising quality in Tajweed, memorization, and understanding that stays with the student for life.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Head Teacher Detail */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Academy Head</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 uppercase tracking-tight">Qari Saleem Ur Rehman</h2>
              <div className="w-20 h-1.5 bg-gold-600 rounded-full mb-8" />
              <p className="text-lg text-primary-700/80 mb-8 leading-relaxed italic">
                Lead instructor and head of Islah Quran Academy, dedicated to ensuring every student receives the same quality and dedication as if it were an in-person session in Pakistan.
              </p>
              
              <div className="space-y-6 mb-12">
                 <div className="flex gap-4 p-4 rounded-xl bg-white border border-primary-50 shadow-sm hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary-900 text-white flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-primary-800 font-medium">Over 20 years of teaching experience with international students.</p>
                 </div>
                 <div className="flex gap-4 p-4 rounded-xl bg-white border border-primary-50 shadow-sm hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary-900 text-white flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-primary-800 font-medium">Certified Ijazah Holder in Quranic Recitation.</p>
                 </div>
                 <div className="flex gap-4 p-4 rounded-xl bg-white border border-primary-50 shadow-sm hover:translate-x-2 transition-transform duration-300">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary-900 text-white flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-primary-800 font-medium">A specialize in Tajweed and Arabic phonetics.</p>
                 </div>
              </div>

              <div className="flex items-center gap-4 bg-primary-900 p-6 rounded-2xl shadow-xl shadow-primary-900/10 text-white transform hover:scale-105 transition-transform duration-300">
                 <MapPin className="shrink-0 text-gold-600" size={32} />
                 <div>
                   <p className="font-bold text-gold-500 uppercase tracking-widest text-xs">Official Location</p>
                   <p className="text-lg leading-tight uppercase font-outfit">Mansehra Road, Abbottabad, Pakistan</p>
                 </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl group">
                 {/* Replace with actual image: Academy/Lead Teacher photo */}
                <img 
                  src="/images/qari-saleem-ur-rehman.png" 
                  alt="Qari Saleem Ur Rehman" 
                  className="w-full h-auto object-cover group-hover:rotate-1 transition duration-500 scale-105" 
                />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-600/10 rounded-full animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Foundation</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 uppercase tracking-tight">Current Core Values</h2>
            <div className="w-20 h-1.5 bg-gold-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honesty in every lesson and interaction.", icon: "⚖️" },
              { title: "Excellence", desc: "Striving for perfect Tajweed in every recitation.", icon: "🏆" },
              { title: "Accessibility", desc: "Making Quranic knowledge available to everyone.", icon: "🌍" },
              { title: "Tradition", desc: "Preserving the authentic prophetic way of recitation.", icon: "📜" }
            ].map((value, i) => (
              <div key={value.title} className="p-8 rounded-[2rem] bg-secondary/20 border border-primary-50 text-center hover:bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-primary-900 mb-2">{value.title}</h4>
                <p className="text-primary-700/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="py-24 bg-primary-900 text-white overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">The Student's Journey</h2>
            <p className="text-emerald-100/60 max-w-2xl mx-auto italic">From the first letter to complete mastery, we guide you every step of the way.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/10 hidden lg:block" />
            
            <div className="space-y-24">
              {[
                { stage: "Level 1: Foundation", title: "Noorani Qaida", desc: "Learning Arabic phonetics, alphabet, and pronunciation basics.", alignment: "left" },
                { stage: "Level 2: Recitation", title: "Nazra Quran", desc: "Fluent reading of the Holy Quran with basic Tajweed rules.", alignment: "right" },
                { stage: "Level 3: Mastery", title: "Advanced Tajweed", desc: "Perfecting the art of recitation with complex rules and rhythms.", alignment: "left" },
                { stage: "Level 4: Preservation", title: "Hifz (Memorization)", desc: "Committing the words of Allah to heart with spiritual dedication.", alignment: "right" }
              ].map((item, i) => (
                <div key={item.title} className={`flex flex-col lg:flex-row items-center gap-12 relative ${item.alignment === "right" ? "lg:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-600 rounded-full border-4 border-primary-900 z-10 hidden lg:block" />
                  
                  <div className={`lg:w-1/2 w-full ${item.alignment === "left" ? "lg:text-right" : "lg:text-left"} animate-fade-in-up`}>
                    <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2 block">{item.stage}</span>
                    <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                    <p className="text-emerald-100/60 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 ${item.alignment === 'left' ? 'lg:ml-auto' : 'lg:mr-auto'}">{item.desc}</p>
                  </div>
                  <div className="lg:w-1/2 w-full hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Global Reach */}
      <section className="py-24 bg-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-16 uppercase tracking-tight">Our Global Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
             {["USA", "UK", "Canada", "Australia", "Germany", "Norway"].map(country => (
               <div key={country} className="p-6 rounded-2xl border border-primary-50 bg-secondary/10 flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                 <div className="w-12 h-8 bg-primary-900/10 rounded flex items-center justify-center font-bold text-primary-900/40">{country.slice(0, 2)}</div>
                 <span className="font-bold text-primary-900 text-sm uppercase tracking-widest">{country}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Teaching Process (Re-integrated from existing) */}
      <section className="py-24 bg-secondary/30 text-center">
        <div className="section-container">
           <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-16 uppercase tracking-tight">Our Professional Process</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
             {/* Decorative Background Connection Line */}
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-900/5 -z-10 hidden lg:block" />
             
             {[
               {
                 title: "Assessment",
                 desc: "We start with a free trial to evaluate your current level and targets.",
               },
               {
                 title: "Personalized Plan",
                 desc: "Crafting a unique schedule and syllabus based on your available timings.",
               },
               {
                 title: "Regular Feedback",
                 desc: "Providing weekly reports and assessments to track progress.",
               }
             ].map((step, i) => (
               <div key={step.title} className="bg-white p-10 rounded-3xl border border-primary-50 shadow-xl shadow-primary-900/[0.02] hover:shadow-2xl transition duration-500 hover:-translate-y-2 group">
                 <div className="w-14 h-14 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-8 font-bold text-xl group-hover:bg-gold-600 group-hover:scale-110 transition-all duration-300">
                    {i + 1}
                 </div>
                 <h4 className="text-xl font-bold text-primary-800 mb-4 group-hover:text-gold-600 transition-colors uppercase tracking-tight">{step.title}</h4>
                 <p className="text-primary-700/70 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-20">
             <Link href="/contact">
               <Button size="lg" variant="gold" className="shadow-lg shadow-gold-600/20 hover:scale-105 px-12">
                  Enroll Today
               </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
