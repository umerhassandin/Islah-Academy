import React from "react";
import { CheckCircle } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

export default function HeadTeacher() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Teacher Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-primary-50 shadow-2xl group">
              <img
                src="/images/qari-saleem-ur-rehman.png"
                alt="Qari Saleem Ur Rehman"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary-900 text-white px-4 py-1 font-bold text-xs rounded-full">
                Head Teacher
              </div>
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-gold-500/10 rounded-full animate-float" />
          </div>

          {/* Teacher Info */}
          <div className="animate-fade-in-right">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Meet our Leader</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">Qari Saleem Ur Rehman</h2>
            <p className="text-lg text-primary-700/80 mb-8 leading-relaxed italic">
              A distinguished Qari and educator with over 20 years of experience in teaching the Holy Quran with perfect Tajweed rules and a melodiously authentic Pakistani recitation style.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Certified Ijazah Reciter",
                "Expert in Qira'at (Melodious Recitation)",
                "Dedicated Mentor for worldwide students",
                "Masters in Islamic Studies"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-primary-800 font-medium">
                  <CheckCircle className="text-gold-600 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button variant="primary" className="shadow-lg hover:scale-105">
                Learn More About Our Head Teacher
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
