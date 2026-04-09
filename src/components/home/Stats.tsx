import React from "react";
import { Users, BookOpen, Globe, Award } from "lucide-react";

const STATS = [
  {
    label: "Active Students",
    value: "1,200+",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Expert Qaris",
    value: "25+",
    icon: Award,
    color: "text-gold-600",
    bgColor: "bg-gold-100",
  },
  {
    label: "Classes Completed",
    value: "15,000+",
    icon: BookOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    label: "Countries Reached",
    value: "18+",
    icon: Globe,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div 
              key={stat.label} 
              className="p-8 rounded-3xl border border-primary-50 bg-secondary/20 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${stat.bgColor} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">{stat.value}</h3>
              <p className="text-primary-700/60 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
