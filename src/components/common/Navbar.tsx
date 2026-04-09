"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="Islah Quran Academy logo"
              className="w-12 h-12 rounded-xl object-cover group-hover:scale-110 transition-all duration-300 shadow-premium transform group-hover:rotate-6"
            />
            <span className="font-outfit font-bold text-3xl text-primary-900 hidden sm:block tracking-tighter">
              Islah Quran Academy
            </span>
            <span className="font-outfit font-bold text-2xl text-primary-900 sm:hidden tracking-tighter">
              Islah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary-800 font-medium hover:text-gold-600 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="gold" size="md">
                Get Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-gold-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-white border-t border-primary-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-primary-800 font-medium border-b border-primary-50 hover:text-gold-600 hover:bg-primary-50 rounded-lg transition duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col items-stretch">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="gold" className="w-full">
                Get Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
