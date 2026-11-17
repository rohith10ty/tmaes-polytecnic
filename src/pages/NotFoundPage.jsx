import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen, GraduationCap } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-slate-50 subtle-grid-bg px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-card">
        <span className="text-6xl sm:text-7xl font-extrabold text-brand-dark font-mono block">
          4<span className="text-brand-blue">0</span>4
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-brand-dark mt-4">
          Page Not Found
        </h1>
        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          The requested institutional page does not exist or has been relocated to another academic wing.
        </p>

        <div className="pt-6 space-y-2.5">
          <Link
            to="/"
            className="w-full py-2.5 px-4 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/courses"
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-brand-blue text-brand-dark text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-brand-blue" />
            <span>Explore Diploma Courses</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
