import React from "react";
import Link from "next/link";
import CourseCard from "../courses/CourseCard";
import Button from "../ui/Button";

const FEATURED_COURSES = [
  {
    title: "Noorani Qaida",
    description: "The foundational course for beginners. Learn the basics of Arabic letters, pronunciation, and connecting words with professional guidance.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Quran Reading with Tajweed",
    description: "Focus on the correct pronunciation of every letter and master the rules of Tajweed. Perfect for those who want to recite as the Prophet (PBUH) did.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Quran Memorization (Hifz)",
    description: "A structured program designed for dedicated students to memorize the Holy Quran. Individual attention helps in long-term retention.",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=600",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-3 block">Programs & Curriculum</span>
            <h2 className="text-3xl md:text-6xl font-bold text-primary-900 mb-6 tracking-tighter uppercase">Master the Quran</h2>
            <p className="text-primary-700/60 leading-relaxed font-light italic text-lg">
              Unlock the secrets of divine recitation with our globally recognized curriculum. From foundational learning to advanced mastery.
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="text-primary-900 group-hover:scale-105">
              Explore All Courses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_COURSES.map((course, index) => (
            <div key={course.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
