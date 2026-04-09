import React from "react";
import { UserPlus, CalendarCheck, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Sign Up & Book a Free Trial",
    description:
      "Register in minutes and schedule a complimentary trial class with one of our expert Qaris — no payment required.",
    icon: UserPlus,
    color: "from-emerald-500 to-emerald-700",
    shadow: "shadow-emerald-500/20",
    glow: "bg-emerald-500/10",
  },
  {
    step: "02",
    title: "Meet Your Personal Qari",
    description:
      "Get matched with a certified Ijazah Qari who adapts lessons to your level, schedule, and learning goals.",
    icon: CalendarCheck,
    color: "from-gold-500 to-gold-700",
    shadow: "shadow-gold-500/20",
    glow: "bg-gold-500/10",
  },
  {
    step: "03",
    title: "Begin Your Quran Journey",
    description:
      "Attend live 1-on-1 sessions online, track your progress with assessments, and earn certification upon completion.",
    icon: BookOpen,
    color: "from-primary-700 to-primary-900",
    shadow: "shadow-primary-900/20",
    glow: "bg-primary-900/10",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/40 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tighter">
            Start Learning in 3 Easy Steps
          </h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-primary-700/70 leading-relaxed">
            Join thousands of students worldwide and begin your Quranic journey today — it&apos;s easier than you think.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-gradient-to-r from-emerald-300 via-gold-300 to-primary-300 z-0" />

          {STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Number Glow Ring */}
              <div className={`w-32 h-32 ${step.glow} rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} ${step.shadow} shadow-2xl rounded-full flex items-center justify-center text-white`}>
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-1 -right-1 w-8 h-8 bg-white border-2 border-primary-100 rounded-full text-xs font-black text-primary-900 flex items-center justify-center shadow-md">
                  {step.step}
                </span>
              </div>

              {/* Arrow between steps (mobile) */}
              {index < STEPS.length - 1 && (
                <div className="md:hidden flex justify-center my-2">
                  <ArrowRight className="text-gold-400 rotate-90" size={24} />
                </div>
              )}

              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-gold-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-primary-700/70 leading-relaxed text-sm max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-900 to-emerald-800 text-white font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm group"
          >
            Book Your Free Trial Class
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
