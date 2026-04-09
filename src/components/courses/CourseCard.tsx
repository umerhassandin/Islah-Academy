import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  compact?: boolean;
}

export default function CourseCard({ title, description, image, href = "/courses", compact = false }: CourseCardProps) {
  return (
    <div className={cn(
      "group bg-white rounded-[2.5rem] overflow-hidden border border-primary-50 shadow-premium hover:shadow-gold transition-all duration-500 hover:-translate-y-2 flex flex-col h-full",
      compact ? "p-0" : "p-2"
    )}>
      {/* Course Image Wrapper */}
      <div className="relative h-64 rounded-[2rem] overflow-hidden group-hover:scale-[1.02] transition duration-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent flex items-end p-6">
          <span className="glass-dark text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-full tracking-widest">
            Expert Guided
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="px-6 py-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-primary-700/60 text-sm mb-8 line-clamp-3 leading-relaxed font-light italic flex-grow">
          {description}
        </p>
        
        <div className="flex items-center justify-between border-t border-primary-50 pt-6">
          <Link href={href} className="text-gold-600 text-xs font-bold hover:underline tracking-widest uppercase">
            Learn More
          </Link>
          <Link href="/contact">
            <Button size="sm" variant="primary" className="text-[10px] uppercase font-bold tracking-widest py-3">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
