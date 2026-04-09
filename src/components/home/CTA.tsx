import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary-900 relative overflow-hidden text-center rounded-3xl mx-4 sm:mx-8 -mb-24 z-20 shadow-2xl border border-white/5">
      <div className="absolute inset-0 bg-gold-600/10 skew-x-12 translate-x-1/2 -z-10 blur-3xl" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" />
      
      <div className="section-container relative z-10 px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tight">Begin Your Path to Quran Mastery</h2>
        <p className="text-xl md:text-2xl text-emerald-100/70 mb-12 max-w-3xl mx-auto italic font-light">
          "The best among you is the one who learns the Quran and teaches it." (Sahih Bukhari)
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/contact">
             <Button size="lg" variant="gold" className="text-lg px-12 py-4 shadow-xl shadow-gold-600/20 hover:scale-105 active:scale-95 transition-all">
                Request Free Trial Class
             </Button>
          </Link>
          <div className="text-white/60 text-sm italic font-medium">
             No credit card required. Cancel anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
