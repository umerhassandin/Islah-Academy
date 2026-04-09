import React from "react";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { Check, Star, ShieldCheck, Zap, Heart, Clock } from "lucide-react";

const PACKAGES = [
  {
    name: "Basic",
    price: 35,
    subtitle: "Ideal for beginners",
    features: [
      "2 Classes per Week",
      "30 Minutes per Class",
      "One-on-One Session",
      "Monthly Progress Reports",
      "Free 3-Day Trial",
    ],
    highlight: false,
    color: "bg-primary-900",
  },
  {
    name: "Standard",
    price: 65,
    subtitle: "Most popular for steady progress",
    features: [
      "3 Classes per Week",
      "45 Minutes per Class",
      "One-on-One Session",
      "Monthly Progress Reports",
      "Tajweed Review Support",
      "Free 3-Day Trial",
    ],
    highlight: true,
    color: "bg-gold-600",
  },
  {
    name: "Premium",
    price: 110,
    subtitle: "For dedicated students",
    features: [
      "5 Classes per Week",
      "60 Minutes per Class",
      "One-on-One Session",
      "Weekly Detailed Feedback",
      "Special Focus on Hifz",
      "24/7 Teacher Support (Messaging)",
      "Free 3-Day Trial",
    ],
    highlight: false,
    color: "bg-emerald-700",
  },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col gap-0 pb-32">
       {/* Banner */}
       <section className="bg-primary-900 py-40 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-gold-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="section-container relative z-10">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-[10px] mb-4 block px-4 py-1.5 glass w-fit mx-auto rounded-full">Global Enrollment Open</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Tuition <span className="text-gold-500 italic">&</span> Plans</h1>
          <p className="text-xl md:text-2xl text-emerald-100/60 max-w-3xl mx-auto font-light leading-relaxed">
            Invest in your spiritual future with our flexible and globally accessible pricing plans. High-quality education for seekers everywhere.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { icon: ShieldCheck, label: "No Hidden Fees" },
              { icon: Heart, label: "Family Discounts" },
              { icon: Clock, label: "Pause Anytime" },
              { icon: Zap, label: "Instant Enrollment" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 text-emerald-200/70 font-medium text-sm">
                <item.icon size={18} className="text-gold-500" /> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-white relative overflow-hidden px-4">
        <div className="section-container">
           {/* Quarterly Discount Notice */}
           <div className="mb-20 p-8 bg-gold-50 rounded-3xl border-2 border-dashed border-gold-500 text-center animate-bounce-subtle">
             <Star className="text-gold-600 mx-auto mb-4" size={32} />
             <h4 className="text-xl md:text-2xl font-bold text-gold-700 mb-2">Special Offer: Get 15% OFF on Quarterly Plans</h4>
             <p className="text-gold-600/80 font-medium">Or pay for a full year and get 2 months FREE. All prices shown in USD.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {PACKAGES.map((pkg, index) => (
               <div 
                 key={pkg.name} 
                 className={`relative p-10 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col group animate-fade-in-up ${pkg.highlight ? 'border-primary-900 bg-white shadow-xl scale-105' : 'border-primary-100 bg-white hover:border-primary-900/40'}`}
                 style={{ animationDelay: `${index * 150}ms` }}
               >
                 {pkg.highlight && (
                   <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-600 text-white px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest animate-pulse shadow-lg shadow-gold-500/20">
                     Recommended
                   </div>
                 )}
                 <h3 className="text-2xl font-bold text-primary-900 mb-2">{pkg.name}</h3>
                 <p className="text-primary-700/60 text-sm mb-8 leading-relaxed uppercase font-bold tracking-tight">{pkg.subtitle}</p>
                 
                 <div className="flex items-baseline gap-2 mb-10 border-b border-primary-50 pb-8">
                   <span className="text-4xl md:text-6xl font-bold text-primary-900 tracking-tighter">${pkg.price}</span>
                   <span className="text-primary-700/60 text-lg italic">/ month</span>
                 </div>
                 
                 <ul className="space-y-6 mb-12 flex-grow">
                   {pkg.features.map(feature => (
                     <li key={feature} className="flex items-center gap-3 text-primary-800 font-medium group-hover:translate-x-1 transition-transform">
                       <Check className="text-emerald-600 shrink-0" size={22} />
                       {feature}
                     </li>
                   ))}
                 </ul>
                 
                 <Link href={`/contact?package=${pkg.name.toLowerCase()}`} className="w-full">
                    <Button 
                      variant={pkg.highlight ? "gold" : "primary"} 
                      className={`w-full py-5 text-lg font-bold shadow-lg hover:scale-105 active:scale-95 transition-all text-center rounded-2xl ${pkg.highlight ? 'shadow-gold-600/20' : ''}`}
                    >
                      Choose {pkg.name} Plan
                    </Button>
                 </Link>
               </div>
             ))}
           </div>
           
           <div className="mt-24 text-center">
             <p className="text-primary-700/60 leading-relaxed italic text-lg max-w-2xl mx-auto border-t border-primary-50 pt-10">
               *Customized family packages and sibling discounts are available upon request. Contact us for bulk enrollment details.
             </p>
           </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-24 bg-emerald-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="section-container relative z-10">
          <ShieldCheck className="mx-auto mb-6 text-gold-500" size={64} />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Promise to You</h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto text-lg leading-relaxed mb-12 italic">
            We are so confident in the quality of our teachers that we offer a <strong className="text-gold-400">3-day free trial</strong> with no commitment required. If you are not satisfied within the first week, we will fully refund any payment — no questions asked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { label: "Free Trial", value: "3 Days", icon: "🎁" },
              { label: "Satisfaction Guarantee", value: "100%", icon: "🏆" },
              { label: "Response Time", value: "< 24 Hrs", icon: "⚡" },
            ].map(item => (
              <div key={item.label} className="p-6 rounded-2xl glass border-white/10 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-black text-gold-400 mb-1">{item.value}</div>
                <div className="text-emerald-200/60 text-xs uppercase font-bold tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Features */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-16 uppercase tracking-tight">Included in Every Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "One-on-one live sessions via Zoom/Skype",
              "Certified Ijazah-holder teachers",
              "Female teachers available for sisters and kids",
              "Students from any country can choose class timings according to their own convenience and time zone",
              "Flexible scheduling across all time zones",
              "Personalized curriculum based on your level",
              "Free trial lesson before committing",
              "Monthly or weekly progress reports",
              "WhatsApp support from your teacher",
              "Session recordings available on request",
              "Zero enrollment or hidden fees",
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/20 border border-primary-50 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Check size={14} />
                </div>
                <p className="text-primary-800 font-medium text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button size="lg" variant="gold" className="hover:scale-105 shadow-gold px-12">
                Start Your Free Trial Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
