import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Building, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/instituteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-slate-50 subtle-dot-bg border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Alumni Placement Chronicles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Hear From Graduates Who Walked Our Halls
          </h2>
          <p className="text-sm text-slate-600 mt-2.5">
            Real stories from TMAES Polytechnic alumni now building careers across leading engineering and technology enterprises.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card border border-slate-200 p-8 sm:p-12 relative overflow-hidden">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-brand-blue/10 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Avatar & Batch */}
            <div className="flex flex-col items-center text-center flex-shrink-0">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-brand-blue/30 shadow-md mb-3">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                {active.batch}
              </span>
            </div>

            {/* Testimonial Quote & Identity */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-brand-blue">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>Verified Alumnus Placement Record</span>
              </div>

              <p className="text-base sm:text-lg text-brand-dark italic leading-relaxed font-sans">
                "{active.content}"
              </p>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold text-brand-dark">
                    {active.name}
                  </h4>
                  <p className="text-xs text-brand-blue font-medium">
                    {active.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    {active.course}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-brand-dark self-center sm:self-auto">
                  <Building className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Placed at {active.company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-8 bg-brand-blue' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
