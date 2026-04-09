import React from "react";
import { Check, Star, Zap } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

const PACKAGES = [
  {
    name: "Starter",
    price: "30",
    description: "Perfect for beginners starting their journey.",
    features: ["2 Classes per week", "30 Min sessions", "1-on-1 Focus", "Monthly Assessment"],
    isPopular: false,
    color: "emerald-600",
  },
  {
    name: "Standard",
    price: "55",
    description: "Most popular for consistent progress.",
    features: ["4 Classes per week", "30 Min sessions", "1-on-1 Focus", "Weekly Progress reports", "Free Trial included"],
    isPopular: true,
    color: "gold-600",
  },
  {
    name: "Premium",
    price: "80",
    description: "Intensive learning for rapid growth.",
    features: ["6 Classes per week", "30 Min sessions", "1-on-1 Focus", "Direct Mentor Access", "Certification upon completion"],
    isPopular: false,
    color: "primary-900",
  },
];

export default function MembershipPreview() {
  return (
    <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
           <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 block">Flexible Plans</span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Choose Your Learning Path</h2>
           <p className="text-emerald-100/60 max-w-2xl mx-auto italic">
             Quality education shouldn't be expensive. We offer affordable packages tailored to your schedule and goals.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center transition duration-500 hover:-translate-y-2 group animate-fade-in-up shadow-premium ${pkg.isPopular ? "ring-4 ring-gold-600/30 scale-105 z-10" : "scale-100 opacity-90"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Star size={14} className="fill-white" /> Recommended
                </div>
              )}

              <h4 className="text-xl font-bold text-primary-900 mb-2 uppercase tracking-widest">{pkg.name}</h4>
              <p className="text-primary-700/60 text-sm mb-6 pb-6 border-b border-primary-50 w-full">{pkg.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary-900 leading-none tracking-tighter">${pkg.price}</span>
                <span className="text-primary-700/40 font-bold text-lg">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left w-full">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-primary-800/80 font-medium text-sm">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto w-full">
                <Link href="/contact">
                  <Button variant={pkg.isPopular ? "gold" : "primary"} className="w-full shadow-lg group-hover:scale-105 transition-transform py-4 font-bold uppercase tracking-widest text-xs">
                    Enroll Now <Zap size={14} className="ml-2 group-hover:animate-pulse" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <Link href="/packages" className="text-gold-500 font-bold hover:underline underline-offset-8 decoration-2 decoration-gold-600/30 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 group">
             View All Pricing Options <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
           </Link>
        </div>
      </div>
    </section>
  );
}
