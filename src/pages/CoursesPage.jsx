import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ArrowUpDown,
  GraduationCap
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import ApplicationModal from '../components/ApplicationModal';
import { COURSES, CATEGORIES } from '../data/coursesData';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState(null);

  const handleQuickApply = (courseId) => {
    setSelectedCourseForApply(courseId);
    setApplyModalOpen(true);
  };

  const filteredAndSortedCourses = useMemo(() => {
    let result = [...COURSES];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((c) => c.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.careerPaths.some((p) => p.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'fee-low') {
      const getFee = (s) => parseInt(s.replace(/[^0-9]/g, ''), 10);
      result.sort((a, b) => getFee(a.annualFee) - getFee(b.annualFee));
    } else if (sortBy === 'intake') {
      const getSeats = (s) => parseInt(s.replace(/[^0-9]/g, ''), 10);
      result.sort((a, b) => getSeats(b.intake) - getSeats(a.intake));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('default');
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-14 border-b border-slate-200 subtle-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Academic Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mt-3">
              Diploma Engineering Programs
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Explore our 8 AICTE-approved, 3-year technical diploma disciplines. Equipped with hands-on lab experimentation, CNC tooling, and direct corporate placement pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Filtering Console */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[60px] md:top-[70px] z-30 shadow-subtle backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, branch codes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium text-brand-dark outline-none focus:border-brand-blue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-brand-dark"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <ArrowUpDown className="w-3.5 h-3.5 text-brand-blue" />
                <span className="hidden sm:inline">Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-200 text-brand-dark font-medium bg-slate-50 focus:bg-white outline-none focus:border-brand-blue cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="rating">Highest Rating</option>
                <option value="intake">Highest Seat Intake</option>
                <option value="fee-low">Annual Fee (Lowest)</option>
              </select>

              {(searchQuery || selectedCategory !== 'All' || sortBy !== 'default') && (
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg text-slate-500 hover:text-brand-dark hover:bg-slate-100 transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Indicators */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
            <span>
              Showing <strong>{filteredAndSortedCourses.length}</strong> of {COURSES.length} Diploma Programs
            </span>
            {selectedCategory !== 'All' && (
              <span className="text-brand-blue font-semibold">
                Filter: {selectedCategory}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 3. Courses Grid or Empty State */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedCourses.length === 0 ? (
            <div className="py-20 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">
                No courses matched your query
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Try loosening your search keywords or switching to "All Departments" to view all diploma disciplines.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-brand-blue text-white text-xs font-semibold rounded-lg hover:bg-brand-blueHover transition-colors shadow-sm"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onQuickApply={handleQuickApply}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Curriculum Standards Notice */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-subtle">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-dark">
                  Need Help Choosing the Right Engineering Branch?
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Speak directly with our senior academic counselors for branch counseling, DCET prospects, and career roadmaps.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedCourseForApply('computer-science');
                setApplyModalOpen(true);
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blueHover transition-colors whitespace-nowrap shadow-sm"
            >
              Request Free Career Counseling
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourseId={selectedCourseForApply}
      />
    </div>
  );
}
