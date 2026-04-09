import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { Star, ShieldCheck, Zap, ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-900 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-600 rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[120px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/binding-dark.png')] opacity-20" />
      </div>
      
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10 animate-fade-in-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border-emerald-500/30 text-gold-500 font-bold uppercase tracking-widest text-xs animate-bounce-subtle backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
              </span>
              World's Leading Online Quran Academy
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter">
              <span className="opacity-90 block mb-2">Master the</span>
              <span className="text-gold-500 drop-shadow-xl italic font-outfit">Holy Quran</span> <br />
              <span className="text-emerald-400 font-light text-4xl md:text-5xl lg:text-6xl block mt-2">With Pure Tajweed</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100/70 max-w-xl leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-gold-500">
              Personalized 1-on-1 sessions with expert Pakistani Qaris. Connect with your faith from the comfort of your home.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/courses">
                <Button size="lg" variant="gold" className="text-lg px-12 py-5 shadow-gold hover:scale-105 active:scale-95 transition-all group rounded-2xl">
                  Get Started <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-12 py-5 border-white/40 text-white hover:bg-white hover:text-primary-900 transition-all backdrop-blur-md rounded-2xl group">
                  <PlayCircle className="mr-2 group-hover:scale-110 transition-transform" /> Get Trial Class
                </Button>
              </Link>
            </div>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-10 pt-12 border-t border-white/10 mt-12 w-fit">
              <div className="flex flex-col gap-1">
                <div className="flex text-gold-500">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs uppercase font-bold tracking-widest text-white/60">5-Star Rated Academy</p>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" size={32} />
                <div>
                  <p className="font-bold text-lg leading-none">100% Secure</p>
                  <p className="text-[10px] uppercase tracking-widest text-emerald-200/40">Verified Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-gold-500" size={32} />
                <div>
                  <p className="font-bold text-lg leading-none">Global Access</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold-200/40">Students in 20+ Countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative group lg:block hidden animate-fade-in-right">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[16px] border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-1 group-hover:rotate-0 transition-all duration-1000 ease-out hover:scale-[1.02]">
               <img 
                 src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=1200" 
                 alt="Student learning Quran online" 
                 className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-12 -left-12 glass p-10 rounded-[2.5rem] shadow-2xl z-20 animate-float border-white/10 backdrop-blur-2xl">
               <div className="text-center">
                 <p className="text-5xl font-black text-primary-900 font-outfit uppercase tracking-tighter">1,000+</p>
                 <p className="text-[10px] uppercase font-bold text-primary-800/80 tracking-widest mt-2 border-t border-primary-900/10 pt-2">Students enrolled last year</p>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-10 -right-10 bg-gold-600 p-8 rounded-full shadow-2xl z-20 animate-spin-slow border-4 border-white/10 hidden xl:block">
               <div className="flex flex-col items-center justify-center">
                 <p className="text-sm font-bold uppercase tracking-widest text-center leading-tight">Authentic<br/>ijazah<br/>certified</p>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 border-[30px] border-gold-500/5 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 border-[40px] border-emerald-500/5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
