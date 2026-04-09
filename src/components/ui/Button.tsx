import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-emerald-800 shadow-lg hover:shadow-emerald-900/20",
    gold: "bg-gradient-to-br from-gold-500 to-gold-700 text-white hover:from-gold-600 hover:to-gold-800 shadow-xl shadow-gold-700/20",
    outline: "border-2 border-primary-900/20 text-primary-900 hover:border-primary-900 hover:bg-primary-900 hover:text-white backdrop-blur-sm",
    ghost: "text-primary-900 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-widest",
    md: "px-8 py-3 text-sm uppercase tracking-widest",
    lg: "px-10 py-4 text-base uppercase tracking-widest",
  };

  return (
    <button
      className={cn(
        "rounded-2xl transition-all duration-500 font-bold inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
