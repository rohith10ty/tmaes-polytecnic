import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import { COURSES } from '../data/coursesData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = COURSES.filter((c) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      c.title.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.department.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q) ||
      c.careerPaths.some((p) => p.toLowerCase().includes(q))
    );
  });

  const handleSelect = (courseId) => {
    onClose();
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-brand-dark/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-brand-blue flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search diploma courses, departments, careers (e.g. Computer Science, AI, CNC)..."
            className="w-full bg-transparent text-brand-dark text-base outline-none placeholder:text-slate-400 font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-brand-dark px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-brand-dark hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-50">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-[1.5]" />
              <p className="font-medium text-brand-dark">No courses found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for Computer, Mechanical, AI, Civil, or Electrical.</p>
            </div>
          ) : (
            filtered.map((course) => (
              <div
                key={course.id}
                onClick={() => handleSelect(course.id)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-brand-blue/5 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-brand-blue flex items-center justify-center font-bold text-xs flex-shrink-0 border border-slate-200 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    {course.code.split(' ')[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">
                        {course.title}
                      </h4>
                      <span className="text-[10px] uppercase font-bold text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded">
                        {course.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {course.tagline}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {course.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        {course.intake}
                      </span>
                      <span>•</span>
                      <span className="font-medium text-brand-dark">
                        {course.annualFee} / yr
                      </span>
                    </div>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity pl-3 flex-shrink-0">
                  <span className="p-2 rounded-lg bg-brand-blue text-white inline-flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>{filtered.length} Diploma Programs Available</span>
          <span className="text-slate-400 text-[11px]">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
