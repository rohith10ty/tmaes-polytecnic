import React from 'react';
import { RECRUITERS } from '../data/instituteData';

export default function RecruiterMarquee() {
  return (
    <div className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Over 120+ Premier Corporate Recruiters Visit Our Campus Annually
        </p>

        {/* Minimal Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
          {RECRUITERS.map((name, idx) => (
            <div
              key={idx}
              className="py-3 px-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-brand-blue/40 hover:shadow-subtle transition-all duration-200 flex items-center justify-center"
            >
              <span className="text-xs sm:text-sm font-bold text-slate-700 tracking-tight font-sans">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
