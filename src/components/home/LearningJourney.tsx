import React from "react";
import { Heart, Mic, BookMarked, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

const MILESTONES = [
  {
    phase: "Phase 1",
    title: "Noorani Qaida",
    duration: "1–2 Months",
    description:
      "Master the Arabic alphabet, basic phonics, and letter connections. The essential foundation every student starts with.",
    icon: BookMarked,
    color: "emerald",
    courses: ["Arabic Alphabet", "Letter Pronunciation", "Basic Joining Rules"],
  },
  {
    phase: "Phase 2",
    title: "Quran Reading",
    duration: "2–4 Months",
    description:
      "Begin reading the Holy Quran fluently with correct pronunciation. Build confidence verse by verse.",
    icon: Mic,
    color: "blue",
    courses: ["Fluent Reading", "Word Recognition", "Short Surahs"],
  },
  {
    phase: "Phase 3",
    title: "Tajweed Mastery",
    duration: "3–6 Months",
    description:
      "Learn the divine rules of Tajweed to recite perfectly as the Prophet ﷺ taught his companions. Earn your Tajweed certificate.",
    icon: Heart,
    color: "gold",
    courses: ["Makhaarij Rules", "Sifaat Rules", "Waqf & Ibtida", "Certification"],
  },
  {
    phase: "Phase 4",
    title: "Hifz (Memorization)",
    duration: "1–3 Years",
    description:
      "For dedicated students — systematically memorize the entire Quran under our Ijazah-certified Huffaz with proven revision techniques.",
    icon: GraduationCap,
    color: "purple",
    courses: ["Daily Sabaq", "Manzil Revision", "Dhor System", "Ijazah Award"],
  },
];

const COLOR_MAP: Record<string, { border: string; bg: string; text: string; badge: string; dot: string }> = {
  emerald: {
    border: "border-emerald-200 hover:border-emerald-400",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
  blue: {
    border: "border-blue-200 hover:border-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  gold: {
    border: "border-gold-200 hover:border-gold-400",
    bg: "bg-gold-50",
    text: "text-gold-700",
    badge: "bg-gold-100 text-gold-700",
    dot: "bg-gold-500",
  },
  purple: {
    border: "border-purple-200 hover:border-purple-400",
    bg: "bg-purple-50",
    text: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
    dot: "bg-purple-500",
  },
};

export default function LearningJourney() {
  return (
    <section className="py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tighter">
            The Complete Learning Journey
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-primary-700/70 leading-relaxed">
            A structured, phase-based curriculum designed to take you from complete beginner to a confident, certified Quran reciter.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-gold-300 to-purple-300" />

          <div className="space-y-16">
            {MILESTONES.map((milestone, index) => {
              const c = COLOR_MAP[milestone.color];
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={milestone.phase}
                  className={`relative flex flex-col lg:flex-row ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className={`lg:w-5/12 w-full`}>
                    <div className={`bg-white rounded-[2rem] p-8 border-2 ${c.border} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group`}>
                      {/* Phase badge */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <milestone.icon size={22} />
                        </div>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
                            {milestone.phase}
                          </span>
                          <p className="text-[10px] text-primary-700/40 uppercase tracking-widest font-bold">
                            {milestone.duration}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-700/70 text-sm leading-relaxed mb-6">
                        {milestone.description}
                      </p>
                      {/* Course tags */}
                      <div className="flex flex-wrap gap-2">
                        {milestone.courses.map((course) => (
                          <span key={course} className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-6 h-6 ${c.dot} rounded-full border-4 border-white shadow-lg z-10 ring-4 ring-offset-2 ring-current opacity-60`} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="lg:w-5/12 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-primary-900 font-bold text-sm uppercase tracking-widest border-b-2 border-gold-500 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors group"
          >
            Explore Full Curriculum
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
