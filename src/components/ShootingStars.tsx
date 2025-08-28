'use client';

import { useEffect, useState } from 'react';

export function ShootingStars() {
  const [, setIsIdle] = useState(false);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const resetTimer = () => {
      setIsIdle(false);
      setShowStars(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsIdle(true);
        setShowStars(true);
      }, 3000); // Reduced to 3 seconds for easier visibility
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Initial timer
    resetTimer();

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, []);

  // Generate static stars more naturally distributed and more visible
  const staticStars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1, // Increased size
    opacity: Math.random() * 0.9 + 0.3, // Increased opacity
    delay: Math.random() * 3,
  }));

  // Generate shooting stars from different positions and directions - more visible
  const shootingStars = Array.from({ length: 8 }, (_, i) => {
    const startSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let startX, startY, endX, endY;
    
    switch (startSide) {
      case 0: // From top
        startX = Math.random() * 100;
        startY = -20;
        endX = startX + (Math.random() * 60 - 30);
        endY = Math.random() * 80 + 50;
        break;
      case 1: // From right
        startX = 120;
        startY = Math.random() * 100;
        endX = Math.random() * 60;
        endY = startY + (Math.random() * 60 - 30);
        break;
      case 2: // From bottom
        startX = Math.random() * 100;
        startY = 120;
        endX = startX + (Math.random() * 60 - 30);
        endY = Math.random() * 60;
        break;
      default: // From left
        startX = -20;
        startY = Math.random() * 100;
        endX = Math.random() * 80 + 40;
        endY = startY + (Math.random() * 60 - 30);
    }

    return {
      id: i,
      startX,
      startY,
      endX,
      endY,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 2.5, // Slightly longer duration
      color: ['electric-blue', 'tech-purple', 'tech-emerald'][Math.floor(Math.random() * 3)]
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static stars background - always visible */}
      {staticStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-tech-light-gray animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}
      
      {/* Shooting stars - show when idle */}
      {showStars && (
        <>
          {shootingStars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.startX}%`,
                top: `${star.startY}%`,
                width: '4px',
                height: '4px',
                background: star.color === 'electric-blue' ? '#0ea5e9' : 
                           star.color === 'tech-purple' ? '#8b5cf6' : '#10b981',
                boxShadow: `0 0 12px ${star.color === 'electric-blue' ? '#0ea5e9' : 
                                     star.color === 'tech-purple' ? '#8b5cf6' : '#10b981'}, 
                           0 0 24px ${star.color === 'electric-blue' ? '#0ea5e9' : 
                                     star.color === 'tech-purple' ? '#8b5cf6' : '#10b981'}`,
                animation: `shoot-cosmic ${star.duration}s linear infinite`,
                animationDelay: `${star.delay}s`,
                '--start-x': `${star.startX}%`,
                '--start-y': `${star.startY}%`,
                '--end-x': `${star.endX}%`,
                '--end-y': `${star.endY}%`,
              } as React.CSSProperties & { [key: string]: string }}
            />
          ))}
        </>
      )}
      
      {/* Floating particles for extra cosmic feel - always visible */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            background: ['#0ea5e9', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 3)],
            animation: `float-cosmic ${Math.random() * 8 + 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Add some twinkling stars that are always visible */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={`twinkle-${i}`}
          className="absolute rounded-full bg-tech-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}