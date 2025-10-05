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

      {/* Orbital Ring System - 3 concentric rings */}
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full border border-electric-blue/20"
          style={{
            left: '50%',
            top: '50%',
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            transform: 'translate(-50%, -50%)',
            animation: `orbit ${20 + i * 10}s linear infinite`,
            opacity: 0.1 + Math.random() * 0.2,
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 6 }, (_, i) => {
        const shapes = [
          'polygon(50% 0%, 0% 100%, 100% 100%)', // triangle
          'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // diamond
          'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // hexagon
          'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)', // octagon
          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', // star
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // square
        ];
        
        return (
          <div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              width: '40px',
              height: '40px',
              clipPath: shapes[i % shapes.length],
              border: '2px solid rgba(139, 92, 246, 0.3)',
              animation: `float-shape ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        );
      })}

      {/* Data Streams - 4 vertical flowing bars */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute w-1 bg-gradient-to-b from-transparent via-tech-emerald to-transparent"
          style={{
            left: `${15 + i * 20}%`,
            top: '-100px',
            height: '200px',
            animation: `data-stream ${4 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Constellation Connections - SVG lines between nearby stars */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {staticStars.slice(0, 20).map((star1, i) => 
          staticStars.slice(i + 1, 21).map((star2, j) => {
            const distance = Math.sqrt(
              Math.pow(star1.left - star2.left, 2) + 
              Math.pow(star1.top - star2.top, 2)
            );
            
            if (distance < 25) { // Only connect nearby stars
              return (
                <line
                  key={`constellation-${i}-${j}`}
                  x1={`${star1.left}%`}
                  y1={`${star1.top}%`}
                  x2={`${star2.left}%`}
                  y2={`${star2.top}%`}
                  stroke="#0ea5e9"
                  strokeWidth="1"
                  opacity="0.2"
                  className="animate-pulse"
                  style={{
                    animation: 'constellation-pulse 3s ease-in-out infinite',
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>
    </div>
  );
}