import React from "react";

const COUNTRIES = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Jordan", flag: "🇯🇴" },
];

// Duplicate for seamless infinite scroll
const MARQUEE_ITEMS = [...COUNTRIES, ...COUNTRIES];

const TRUST_LOGOS = [
  { name: "Al-Azhar Certified", icon: "🎓" },
  { name: "Ijazah Verified", icon: "📜" },
  { name: "100% Secure Payments", icon: "🔒" },
  { name: "Quran Foundation Partner", icon: "🕌" },
  { name: "ISO Quality Standards", icon: "✅" },
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 text-center mb-16">
        <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 block">
          Worldwide Community
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
          Students from{" "}
          <span className="text-gold-500">20+ Countries</span> Trust Us
        </h2>
        <div className="w-20 h-1.5 bg-gold-500 mx-auto rounded-full mb-8" />
        <p className="max-w-2xl mx-auto text-emerald-100/60 leading-relaxed italic">
          Islah Academy connects Muslim families across the globe with
          authentic Quranic education — right from their homes.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden mb-16">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-primary-900 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-primary-900 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((country, i) => (
            <div
              key={`${country.name}-${i}`}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 cursor-default shrink-0"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-sm font-semibold text-white/80 tracking-wide">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Stats */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "20+", label: "Countries", color: "text-gold-500" },
            { value: "1,200+", label: "Active Students", color: "text-emerald-400" },
            { value: "98%", label: "Satisfaction Rate", color: "text-blue-400" },
            { value: "5 ★", label: "Average Rating", color: "text-gold-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <p className={`text-4xl font-black tracking-tighter mb-1 ${stat.color} group-hover:scale-110 transition-transform inline-block`}>
                {stat.value}
              </p>
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {TRUST_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 transition-all group cursor-default"
            >
              <span className="text-xl">{logo.icon}</span>
              <span className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
