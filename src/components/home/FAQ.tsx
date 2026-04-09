"use client";

import React from "react";
import { Plus, Minus, Search } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a completely free trial lesson for new students. This allows us to assess the student's level and for the student to experience our teaching methodology without any commitment.",
  },
  {
    question: "What are the timings for classes?",
    answer: "Our classes are highly flexible. We operate 24/7 to accommodate students from different time zones worldwide. You can choose a slot that fits your schedule.",
  },
  {
    question: "Are your teachers certified?",
    answer: "Yes, all our Qaris are certified Ijazah holders with extensive experience in teaching Tajweed and Quranic recitation. They undergo rigorous background checks and training.",
  },
  {
    question: "How long does it take to complete a course?",
    answer: "The duration depends on the student's pace, frequency of classes, and initial level. On average, a beginner can complete the Noorani Qaida in 3-4 months with regular attendance.",
  },
  {
    question: "Can girls and women study with female teachers?",
    answer: "Female teachers available for sisters and kids. Students from any country can choose class timings according to their own convenience and time zone.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
           <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3 block">Got Questions?</span>
           <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 uppercase tracking-tight">Frequently Asked Questions</h2>
           <div className="w-20 h-1.5 bg-emerald-600 rounded-full mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition duration-300 ${openIndex === index ? "border-emerald-500/30 bg-emerald-50/20" : "border-primary-100 bg-white hover:border-emerald-500/20 shadow-sm"}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-primary-900 text-lg pr-4">{item.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-emerald-600 text-white" : "bg-primary-50 text-emerald-600"}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="p-6 pt-0 text-primary-700/80 leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up">
           <div className="inline-flex items-center gap-4 p-4 rounded-full glass border-emerald-500/20 text-primary-900 font-medium">
             <Search size={20} className="text-emerald-600" />
             Still have questions? <a href="/contact" className="text-emerald-600 font-bold hover:underline">Contact Support Now</a>
           </div>
        </div>
      </div>
    </section>
  );
}
