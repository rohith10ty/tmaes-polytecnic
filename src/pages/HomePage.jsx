import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Layers, 
  Building2,
  PhoneCall,
  FileText
} from 'lucide-react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import RecruiterMarquee from '../components/RecruiterMarquee';
import ApplicationModal from '../components/ApplicationModal';
import { COURSES, CATEGORIES } from '../data/coursesData';
import { HIGHLIGHTS, FACILITIES, INSTITUTE_INFO } from '../data/instituteData';

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState(null);

  const quickBranches = [
    { name: 'Computer Science', id: 'computer-science' },
    { name: 'AI & Machine Learning', id: 'ai-machine-learning' },
    { name: 'Mechanical Engineering', id: 'mechanical-engineering' },
    { name: 'Civil Engineering', id: 'civil-engineering' },
    { name: 'Electrical & Electronics', id: 'electrical-electronics' },
    { name: 'Electronics & Comm', id: 'electronics-communication' },
    { name: 'Automobile Engg', id: 'automobile-engineering' },
    { name: 'Mechatronics', id: 'mechatronics-automation' },
  ];

  const handleQuickApply = (courseId) => {
    setSelectedCourseForApply(courseId);
    setApplyModalOpen(true);
  };

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* 1. Best Hero Section */}
      <Hero />

      {/* 2. Recruiter Corporate Network */}
      <RecruiterMarquee />

      {/* Popular Engineering Disciplines Quick Bar (Moved further down from Hero) */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
              Popular Engineering Disciplines:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {quickBranches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => navigate(`/courses/${branch.id}`)}
                  className="text-xs px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50/80 hover:bg-brand-blue hover:text-white hover:border-brand-blue text-brand-dark transition-all font-medium"
                >
                  {branch.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars / Why TMAES Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 subtle-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              The TMAES Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3">
              Why Foremost Aspirants Choose TMAES Polytechnic
            </h2>
            <p className="text-sm text-slate-600 mt-2.5">
              Four decades of academic rigor, hands-on industrial training, and steadfast institutional values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => {
              const icons = {
                Cpu: Cpu,
                Briefcase: Briefcase,
                GraduationCap: GraduationCap,
                Award: Award,
              };
              const IconComponent = icons[item.icon] || Cpu;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card-hover hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-brand-blue">
                    <span>Verified Pillar</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Diploma Programs with Category Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                Technical Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-2.5">
                AICTE Approved Diploma Programs
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Choose from 8 industry-certified 3-year diploma engineering programs designed for direct employability and high DCET lateral B.E. admission rates.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.slice(0, 8).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onQuickApply={handleQuickApply}
              />
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-brand-dark text-sm font-semibold hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              <span>Explore All 8 Courses & Download Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Campus Facilities & Laboratories Showcase */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3">
              15-Acre Sprawling Engineering Campus
            </h2>
            <p className="text-sm text-slate-600 mt-2.5">
              Designed to foster hands-on dexterity with modern simulation software, heavy machine shops, and high-speed research facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITIES.slice(0, 6).map((fac, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-brand-blue flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  {fac.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Student & Alumni Placement Testimonials */}
      <Testimonials />

      {/* 7. Grand Admissions 2025–26 Call To Action Banner */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        {/* Subtle accent light */}
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-14 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 text-blue-300 text-xs font-semibold border border-brand-blue/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>Admissions Now Open for Academic Year 2025–26</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Secure Your Engineering Future at Karnataka’s Premier Polytechnic
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Eligible after 10th / SSLC with 35% marks. Direct 2nd-year lateral entry for ITI / 12th Vocational certificate holders. Transparent fee structure with full scholarship assistance.
              </p>
              <div className="flex items-center gap-6 pt-2 text-xs text-slate-400">
                <span>• DTE College Code: <strong>145</strong></span>
                <span>• Zero Capitation Fee</span>
                <span>• 98.4% Placement Record</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setApplyModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-glow flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply Online Now</span>
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue" />
                <span>Helpline / Campus Visit</span>
              </Link>
            </div>
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
