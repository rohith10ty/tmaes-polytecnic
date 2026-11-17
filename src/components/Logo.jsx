import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  variant = 'horizontal', 
  theme = 'dark', 
  className = '', 
  showLink = true 
}) {
  const isDarkBg = theme === 'light'; // Light logo for dark background
  const textColor = isDarkBg ? 'text-white' : 'text-brand-dark';
  const subtitleColor = isDarkBg ? 'text-slate-400' : 'text-slate-500';
  const badgeBorder = isDarkBg ? 'border-brand-blue/40 text-blue-300' : 'border-brand-blue/30 text-brand-blue';

  const logoGraphic = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Technical Crest */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Base Shield / Monogram Foundation */}
          <rect 
            x="2" 
            y="2" 
            width="44" 
            height="44" 
            rx="12" 
            fill={isDarkBg ? '#1E293B' : '#0F172A'} 
            stroke="#2563EB" 
            strokeWidth="1.5"
            strokeOpacity={isDarkBg ? '0.7' : '0.4'}
          />

          {/* Precision Blueprint / Gear Guide */}
          <circle 
            cx="24" 
            cy="24" 
            r="16" 
            stroke="#2563EB" 
            strokeWidth="1.2" 
            strokeDasharray="2.5 2.5" 
            strokeOpacity="0.45"
          />

          {/* Technical Hexagon Anchor */}
          <path 
            d="M24 10L35 16.5V29.5L24 36L13 29.5V16.5L24 10Z" 
            fill="#2563EB" 
            fillOpacity={isDarkBg ? '0.25' : '0.18'} 
            stroke="#2563EB" 
            strokeWidth="1.6" 
            strokeLinejoin="round" 
          />

          {/* Bold Academic 'T' and Compass of Engineering */}
          <path 
            d="M16 17H32" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />
          <path 
            d="M24 17V33" 
            stroke="#FFFFFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />

          {/* Technical Pivot Points (2-Color Harmony) */}
          <circle cx="24" cy="17" r="2.2" fill="#2563EB" />
          <circle cx="24" cy="33.5" r="2" fill="#2563EB" />

          {/* Foundation Wings */}
          <path 
            d="M18 36.5C21 35.8 24 35.8 24 35.8C24 35.8 27 35.8 30 36.5" 
            stroke="#2563EB" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-bold tracking-tight text-xl leading-none font-sans ${textColor}`}>
            TMAES
          </span>
          <span className={`text-[10px] font-semibold tracking-wider px-1.5 py-0.5 rounded border uppercase ${badgeBorder} bg-brand-blue/5`}>
            ESTD 1984
          </span>
        </div>
        <span className={`text-[11px] font-medium tracking-[0.22em] uppercase leading-snug mt-0.5 ${subtitleColor}`}>
          Polytechnic
        </span>
      </div>
    </div>
  );

  if (!showLink) {
    return logoGraphic;
  }

  return (
    <Link to="/" className="group inline-flex items-center">
      {logoGraphic}
    </Link>
  );
}
