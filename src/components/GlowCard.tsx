'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'emerald';
  hoverable?: boolean;
  variant?: 'default' | 'glass' | 'solid';
}

export function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'blue',
  hoverable = true,
  variant = 'glass'
}: GlowCardProps) {
  const glowClasses = {
    blue: 'hover:shadow-electric-blue/20 hover:border-electric-blue/40',
    purple: 'hover:shadow-tech-purple/20 hover:border-tech-purple/40',
    emerald: 'hover:shadow-tech-emerald/20 hover:border-tech-emerald/40'
  };

  const variantClasses = {
    default: 'bg-tech-card/60 backdrop-blur-md border border-tech-slate/40',
    glass: 'glassmorphism-dark',
    solid: 'bg-tech-card border border-tech-slate/60'
  };

  return (
    <motion.div
      className={`
        ${variantClasses[variant]} rounded-2xl p-6
        transition-all duration-500 
        ${hoverable ? `hover:scale-[1.02] hover:shadow-2xl ${glowClasses[glowColor]}` : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hoverable ? { 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
    >
      {children}
    </motion.div>
  );
}