import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Building2, 
  Users, 
  Cpu, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import ApplicationModal from './ApplicationModal';

export default function Hero() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-white subtle-grid-bg">
      {/* Subtle minimalist brand glow highlights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/20 text-xs font-semibold text-brand-blue">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AICTE Approved • DTE Karnataka Code: 145 • Estd. 1984</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.12]">
              Engineering India’s Foremost{' '}
              <span className="text-brand-blue relative inline-block">
                Technical Leaders
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-2 text-brand-blue/20" 
                  viewBox="0 0 100 12" 
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              For over 40 years, <strong>TMAES Polytechnic</strong> has delivered industry-certified technical education, 45+ advanced engineering laboratories, and proven career placement pathways into Fortune 500 conglomerates and premier B.E. programs.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-glow inline-flex items-center gap-2 group"
              >
                <span>Explore Diploma Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setApplyModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-dark border border-slate-300 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
              >
                <GraduationCap className="w-4 h-4 text-brand-blue" />
                <span>Apply for Admission 2025–26</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Zero Capitation Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Govt SSP Scholarships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>DCET Lateral B.E. Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>On-Campus Hostels & Bus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80"
                  alt="TMAES Polytechnic Advanced Engineering Workshop"
                  className="w-full h-[430px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle gradient overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

                {/* Content inside image footer */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-left p-4 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-blue-400">
                      Center of Excellence
                    </span>
                    <span className="text-[10px] bg-brand-blue/30 text-blue-200 px-2 py-0.5 rounded border border-brand-blue/40 font-mono">
                      Lab Batch 2025
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Advanced CNC, Robotics & Cloud Computing Facilities
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                    Hands-on practical training with modern Industry 4.0 simulation setups.
                  </p>
                </div>
              </div>

              {/* Floating Glass Badge: Placement Record */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold text-sm">
                  98%
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-brand-dark">Placement Record</p>
                  <p className="text-[11px] text-slate-500">120+ On-Campus Recruiters</p>
                </div>
              </div>

              {/* Floating Glass Badge: Top Recruiter Network */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-brand-dark">Premier Corporate Recruiters</p>
                  <p className="text-[11px] text-brand-blue font-medium">L&T • Infosys • Bosch • ABB • Tata</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Real-Time Key Statistics Counter Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark font-sans">
                40<span className="text-brand-blue">+</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                Years of Legacy
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Estd. 1984 in Karnataka</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark font-sans">
                98.4<span className="text-brand-blue">%</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                Placement Success
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Across Top Multinational Firms</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark font-sans">
                16k<span className="text-brand-blue">+</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                Distinguished Alumni
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Global Engineers & Leaders</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-blue/30 transition-colors">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-dark font-sans">
                45<span className="text-brand-blue">+</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                State-of-the-Art Labs
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Industry 4.0 Standard</p>
            </div>

          </div>
        </div>

      </div>

      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </section>
  );
}
