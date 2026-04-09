import React from "react";
import { Globe, Users, Clock, Award } from "lucide-react";

const FEATURES = [
  {
    title: "Global Quran Community",
    description: "Join students from across the globe in a diverse and welcoming learning environment designed for all cultures.",
    icon: Globe,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "One-on-One Sessions",
    description: "Receive personalized attention with interactive private classes tailored to your individual learning pace.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Flexible Global Timings",
    description: "Our teachers are available around the clock to accommodate every time zone on the planet.",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Ijazah Certified Tutors",
    description: "Learn from highly qualified educators who hold authentic certifications in Quranic sciences.",
    icon: Award,
    color: "text-gold-600",
    bg: "bg-gold-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Benefits</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">Why Islah Quran Academy?</h2>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full mb-8" />
          <p className="max-w-2xl mx-auto text-primary-700/80 leading-relaxed italic">
            Connecting students across the globe with the pure essence of Quranic recitation through our expert pedagogical approach.
          </p>
          <p className="max-w-2xl mx-auto text-primary-700/80 leading-relaxed italic mt-4">
            Female teachers available for sisters and kids. Students from any country can choose class timings according to their own convenience and time zone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group p-8 rounded-3xl border border-primary-100 hover:border-gold-500 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-gold-600 transition-colors">{feature.title}</h3>
              <p className="text-primary-700/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
