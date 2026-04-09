import dynamic from "next/dynamic";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { CheckCircle, Clock, Users, Award, ArrowRight, BookOpen } from "lucide-react";

const CourseCard = dynamic(() => import("../../components/courses/CourseCard"));

const ALL_COURSES = [
  {
    title: "Noorani Qaida",
    description: "The foundational course for beginners. Learn the basics of Arabic letters, pronunciation, and connecting words with professional guidance from our expert Qaris.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=500",
    duration: "3-4 Months",
    level: "Beginner",
  },
  {
    title: "Quran Reading with Tajweed",
    description: "Focus on the correct pronunciation of every letter and master the rules of Tajweed. Perfect for those who want to recite with elegance and precision.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=500",
    duration: "6-12 Months",
    level: "Intermediate",
  },
  {
    title: "Quran Memorization (Hifz)",
    description: "A structured program designed for dedicated students to memorize the Holy Quran. Personalized sessions help in long-term retention and mastery of recitation.",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=500",
    duration: "2-5 Years",
    level: "Advanced",
  },
  {
    title: "Quran Translation & Tafsir",
    description: "Understand the deep meaning and context of the Quranic verses. This course explores the linguistic and spiritual depth of the holy book.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=500",
    duration: "12 Months",
    level: "Intermediate",
  },
  {
    title: "Arabic Language",
    description: "Basic to intermediate Arabic language for Quranic understanding. Learn the structure of the language to connect more deeply with the divine message.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=500",
    duration: "6-9 Months",
    level: "Beginner–Intermediate",
  },
  {
    title: "Daily Supplications (Dua)",
    description: "Learn the essential Masnoon Duas for daily life, ensuring you stay connected with your Creator throughout the day.",
    image: "https://images.unsplash.com/photo-1519817650390-64a993c9d936?auto=format&fit=crop&q=80&w=500",
    duration: "1-2 Months",
    level: "All Levels",
  }
];

const FEATURES = [
  { icon: Users, title: "1-on-1 Sessions", desc: "Every student gets undivided attention and a customized learning pace." },
  { icon: Clock, title: "Flexible Timing", desc: "Students from any country can choose class timings according to their own convenience and time zone." },
  { icon: Award, title: "Certified Qaris", desc: "All teachers hold authentic Ijazah certification for Quran recitation." },
  { icon: BookOpen, title: "Structured Syllabi", desc: "Carefully designed courses that build skills step by step." },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col gap-0 pb-32">
      {/* Page Hero */}
      <section className="bg-primary-900 py-40 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gold-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="section-container relative z-10">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-4 block">Programs &amp; Curriculum</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">Our Specialized<br /><span className="text-gold-500 italic">Courses</span></h1>
          <p className="text-xl md:text-2xl text-emerald-100/60 max-w-3xl mx-auto italic font-light leading-relaxed">
            Comprehensive Quranic education for all ages and levels, taught by world-class Pakistani Qaris.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {["6 Courses Available", "All Ages Welcome", "Flexible Timings", "Free Trial"].map(tag => (
              <div key={tag} className="flex items-center gap-2 px-5 py-2 rounded-full glass border-gold-500/10 text-sm font-bold tracking-wide text-gold-400">
                <CheckCircle size={16} /> {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Why Study With Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4 tracking-tight uppercase">The Islah Difference</h2>
            <div className="w-20 h-1.5 bg-gold-600 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="p-8 rounded-[2rem] bg-secondary/20 border border-primary-50 text-center hover:bg-white hover:shadow-xl hover:border-gold-200 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600 transition-colors duration-300">
                  <f.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-primary-900 mb-2">{f.title}</h4>
                <p className="text-primary-700/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Visual */}
      <section className="py-20 bg-primary-900/5 border-y border-primary-50">
        <div className="section-container text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4 uppercase tracking-tight">Recommended Learning Path</h3>
          <p className="text-primary-700/60 mb-12 max-w-xl mx-auto text-sm">Not sure where to start? Follow this recommended sequence for the best results.</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Noorani Qaida", "Nazra Quran", "Tajweed Rules", "Quran Hifz", "Translation & Tafsir"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-4">
                <div className="px-6 py-3 rounded-full bg-white border border-primary-100 shadow-sm text-sm font-bold text-primary-900 hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all duration-300 cursor-default">
                  {i + 1}. {step}
                </div>
                {i < arr.length - 1 && <ArrowRight size={20} className="text-gold-600 shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight">All Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ALL_COURSES.map((course, index) => (
               <div key={course.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
               </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-secondary/40 rounded-3xl border border-primary-50 text-center animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">Don't See What You're Looking For?</h3>
            <p className="text-primary-700/70 mb-8 max-w-2xl mx-auto">
              We offer customized learning plans based on individual needs. Whether it's intensive revision or specific Surah memorization, we're here to help.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary" className="shadow-lg hover:scale-105 active:scale-95 transition-all">
                Discuss Your Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compare: Online vs Traditional */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Online vs Traditional <span className="text-gold-500 italic">Learning</span></h2>
            <p className="text-emerald-100/50 mt-4 italic">See why online Quran learning with us beats the traditional approach.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-5 px-6 text-gold-500 uppercase tracking-widest text-xs border-b border-white/10">Feature</th>
                  <th className="py-5 px-6 text-emerald-400 uppercase tracking-widest text-xs border-b border-white/10">Islah Academy (Online)</th>
                  <th className="py-5 px-6 text-white/40 uppercase tracking-widest text-xs border-b border-white/10">Traditional (Local)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Access from anywhere", "✅ Yes", "❌ No"],
                  ["Certified Ijazah Teachers", "✅ Yes", "⚠️ Varies"],
                  ["Flexible Timings", "✅ 24/7", "❌ Fixed"],
                  ["1-on-1 Personalized", "✅ Always", "❌ Group Classes"],
                  ["Free Trial", "✅ Yes", "❌ No"],
                  ["Progress Reports", "✅ Weekly", "❌ Rarely"],
                ].map(([feature, us, them]) => (
                  <tr key={feature} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-white/80 text-sm">{feature}</td>
                    <td className="py-4 px-6 text-emerald-400 font-bold text-sm">{us}</td>
                    <td className="py-4 px-6 text-white/30 text-sm">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" variant="gold" className="shadow-gold hover:scale-105 px-12">
                Book Your Free Trial Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
