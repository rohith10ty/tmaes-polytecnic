import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck,
  Check
} from 'lucide-react';

export default function CourseCard({ course, onQuickApply }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-brand-blue/40 transition-all duration-300 flex flex-col">
      {/* Course Image Header with Badges */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[11px] font-bold font-mono px-2.5 py-1 rounded-md bg-brand-dark/90 text-white backdrop-blur-sm border border-white/10">
            {course.code}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/90 text-brand-dark backdrop-blur-sm shadow-sm">
            {course.category}
          </span>
        </div>

        {/* Bottom overlay in image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-1 text-xs font-semibold bg-brand-dark/80 px-2 py-0.5 rounded backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-brand-blue fill-brand-blue" />
            <span>{course.rating}</span>
            <span className="text-slate-300 text-[10px]">({course.reviewsCount})</span>
          </div>
          <span className="text-xs font-bold text-white bg-brand-blue px-2.5 py-0.5 rounded shadow-sm">
            {course.annualFee} <span className="text-[10px] font-normal opacity-90">/ yr</span>
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Department */}
          <p className="text-[11px] uppercase tracking-wider font-semibold text-brand-blue mb-1">
            Department of {course.department}
          </p>

          {/* Title */}
          <Link to={`/courses/${course.id}`}>
            <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-1 leading-snug">
              {course.title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
            {course.tagline}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-blue" />
              <span>{course.intake}</span>
            </div>
          </div>

          {/* Top Recruiters preview */}
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="font-medium text-slate-500">Recruiters:</span>
            <span className="truncate">{course.topRecruiters.slice(0, 3).join(', ')}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/courses/${course.id}`}
            className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-xs font-semibold text-brand-dark text-center transition-all inline-flex items-center justify-center gap-1.5"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onQuickApply ? onQuickApply(course.id) : null}
            className="py-2 px-3 rounded-lg bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-all inline-flex items-center justify-center gap-1 shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Apply</span>
          </button>
        </div>
      </div>
    </div>
  );
}
