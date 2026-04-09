import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 pt-16 pb-8 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Academy Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo.jpg"
                alt="Islah Quran Academy logo"
                className="w-10 h-10 rounded-xl object-cover shadow-lg transform rotate-3"
              />
              <span className="font-outfit font-bold text-2xl tracking-tight">Islah Quran Academy</span>
            </div>
            <p className="text-emerald-100/60 mb-8 leading-relaxed font-light">
              Empowering students globally with authentic Quranic education. Join thousands of learners mastering the holy book with precision and spiritual depth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gold-500 transition-colors duration-200">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gold-500 transition-colors duration-200">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-gold-500 transition-colors duration-200">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-gold-500 transition-colors duration-200">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-xl mb-6 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Courses", "Packages", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`} className="text-emerald-100 hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-outfit font-bold text-xl mb-6 border-b border-white/20 pb-2">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-100">
                <Phone className="shrink-0 mt-1" size={20} />
                <div>
                  <p>+92 349 5554421</p>
                  <p>+92 302 0644414</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <Mail className="shrink-0 mt-1" size={20} />
                <p>info@islahquranacademy.com</p>
              </li>
              <li className="flex items-start gap-3 text-emerald-100">
                <MapPin className="shrink-0 mt-1" size={20} />
                <p>Mansehra Road, <br />Abbottabad, Pakistan</p>
              </li>
            </ul>
          </div>

          {/* Trust Mark */}
          <div className="bg-primary-800/50 p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
            <h4 className="font-outfit font-bold text-xl mb-4 text-emerald-400 italic">Global Excellence</h4>
            <p className="text-sm text-emerald-100/60 italic leading-relaxed font-light">
              "We are dedicated to providing the highest quality Quran education to seekers of knowledge worldwide. Your spiritual growth is our ultimate mission."
            </p>
            <div className="mt-6 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gold-600/20 flex items-center justify-center text-gold-500 font-bold">QS</div>
               <p className="text-sm font-medium text-white italic">— Qari Saleem Ur Rehman</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-emerald-200/60 text-sm">
          <p>© {currentYear} Islah Quran Academy. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-emerald-100 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-100 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
