'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function NeonButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  href,
  type = 'button'
}: NeonButtonProps) {
  const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 font-medium";
  
  const variants = {
    primary: "bg-gradient-to-r from-electric-blue to-tech-purple text-tech-white hover:shadow-lg tech-glow-blue",
    secondary: "glassmorphism-dark border border-electric-blue/30 text-tech-white hover:bg-electric-blue/10 hover:border-electric-blue/60",
    outline: "border-2 border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-tech-white tech-glow-purple",
    ghost: "text-tech-light-gray hover:text-electric-blue hover:bg-electric-blue/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center justify-center">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
    </motion.button>
  );
}