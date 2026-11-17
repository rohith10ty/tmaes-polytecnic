import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Cpu, 
  ChevronRight, 
  GraduationCap, 
  Mail, 
  Briefcase,
  ChevronDown,
  Building2,
  FileCheck
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import ApplicationModal from '../components/ApplicationModal';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus'); // 'overview', 'syllabus', 'outcomes', 'labs', 'hod'
  const [openSemester, setOpenSemester] = useState(0); // Index of open semester accordion
  const [applyModalOpen, setApplyModalOpen] = useState(false);

  const course = COURSES.find((c) => c.id === id) || COURSES[0];

  const tabs = [
    { id: 'syllabus', label: 'Semester Syllabus', icon: BookOpen },
    { id: 'overview', label: 'Branch Overview', icon: FileCheck },
    { id: 'outcomes', label: 'Learning Outcomes & Careers', icon: Award },
    { id: 'labs', label: 'Laboratories & Facilities', icon: Cpu },
    { id: 'hod', label: 'Department Head & Faculty', icon: Users },
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-brand-dark transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/courses" className="hover:text-brand-dark transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-brand-blue font-semibold">{course.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Header Banner */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-dark text-white">
                  {course.code}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-blue/10 text-brand-blue">
                  {course.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                  AICTE Approved
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Fast Facts Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block">Duration:</span>
                  <span className="font-bold text-brand-dark text-sm">{course.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Annual Intake:</span>
                  <span className="font-bold text-brand-dark text-sm">{course.intake}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Tuition Fee:</span>
                  <span className="font-bold text-brand-blue text-sm">{course.annualFee} / yr</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Student Rating:</span>
                  <span className="font-bold text-brand-dark text-sm">
                    {course.rating} / 5.0 ({course.reviewsCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Course Preview Card */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-subtle space-y-4">
                <div className="h-44 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Academic Body:</span>
                    <span className="font-semibold text-brand-dark">DTE Karnataka</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Eligibility:</span>
                    <span className="font-semibold text-brand-dark">10th / SSLC Pass (35%)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Scholarship Support:</span>
                    <span className="font-semibold text-brand-blue">Govt SSP Eligible</span>
                  </div>
                </div>

                <button
                  onClick={() => setApplyModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for this Diploma Course</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Navigation Tabs */}
      <div className="border-b border-slate-200 bg-white sticky top-[60px] md:top-[70px] z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Tab Content Area */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Cols: Dynamic Tab Content */}
            <div className="lg:col-span-8">
              
              {/* TAB 1: SYLLABUS BREAKDOWN */}
              {activeTab === 'syllabus' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-brand-dark">
                      6-Semester Complete Diploma Syllabus
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Conforming strictly to the Directorate of Technical Education (DTE), Govt. of Karnataka C-20 curriculum standards.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {course.syllabus.map((sem, sIdx) => {
                      const isOpen = openSemester === sIdx;
                      return (
                        <div
                          key={sIdx}
                          className="border border-slate-200 rounded-xl overflow-hidden transition-all shadow-subtle"
                        >
                          <button
                            onClick={() => setOpenSemester(isOpen ? -1 : sIdx)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left bg-slate-50/80 hover:bg-slate-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold text-xs">
                                0{sIdx + 1}
                              </span>
                              <span className="font-bold text-sm text-brand-dark">
                                {sem.semester}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500 hidden sm:inline">
                                {sem.subjects.length} Modules & Practical Labs
                              </span>
                              <ChevronDown
                                className={`w-4 h-4 text-slate-400 transition-transform ${
                                  isOpen ? 'rotate-180 text-brand-blue' : ''
                                }`}
                              />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="p-5 bg-white border-t border-slate-100 animate-in fade-in duration-150">
                              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                Prescribed Subjects & Laboratory Work:
                              </h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                                {sem.subjects.map((subj, subIdx) => (
                                  <li 
                                    key={subIdx} 
                                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                                    <span className="leading-snug">{subj}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-brand-dark">
                      Program Overview & Academic Vision
                    </h3>
                  </div>
                  <div className="prose text-sm text-slate-600 space-y-4 leading-relaxed">
                    <p>{course.overview}</p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-sm text-brand-dark flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      Eligibility & Admission Criteria
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.eligibility}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: OUTCOMES & CAREERS */}
              {activeTab === 'outcomes' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-brand-dark">
                      Graduate Learning Outcomes & Industry Pathways
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Core competencies every student attains upon completion of this 3-year diploma.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {course.outcomes.map((outcome, oIdx) => (
                      <div 
                        key={oIdx}
                        className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-subtle"
                      >
                        <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          {oIdx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Career Roles */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-sm font-bold text-brand-dark mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-blue" />
                      Typical Job Designations for Graduates
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.careerPaths.map((career, cIdx) => (
                        <span 
                          key={cIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-brand-dark"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: LABORATORIES */}
              {activeTab === 'labs' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-brand-dark">
                      Department Specialized Laboratories
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fully equipped with licensed software, calibrated hardware test rigs, and safety enclosures.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.labs.map((lab, lIdx) => (
                      <div 
                        key={lIdx}
                        className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3 shadow-subtle"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          L{lIdx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-brand-dark">{lab}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Equipped for 30 students per practical batch session.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: HOD & FACULTY */}
              {activeTab === 'hod' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-brand-dark">
                      Head of Department & Academic Mentors
                    </h3>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-brand-blue/30 flex-shrink-0 shadow-sm">
                      <img
                        src={course.hod.photo}
                        alt={course.hod.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                        Head of Department
                      </span>
                      <h4 className="text-lg font-bold text-brand-dark">
                        {course.hod.name}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {course.hod.qualification}
                      </p>
                      <p className="text-xs text-slate-500">
                        {course.hod.experience}
                      </p>
                      <div className="pt-2">
                        <a 
                          href={`mailto:${course.hod.email}`}
                          className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:underline font-semibold"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>{course.hod.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Quick Info Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Top Corporate Recruiters for this branch */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-blue" />
                  Top Placement Partners
                </h4>
                <div className="space-y-2">
                  {course.topRecruiters.map((rec, rIdx) => (
                    <div 
                      key={rIdx}
                      className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-brand-dark flex items-center justify-between"
                    >
                      <span>{rec}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions Helpline */}
              <div className="p-6 bg-brand-dark text-white rounded-2xl border border-slate-800 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                  Admissions Office
                </span>
                <h4 className="text-base font-bold text-white">
                  Have Questions Regarding {course.shortTitle}?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our department counselor for counseling dates, DCET syllabus books, and fee waiver guidance.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+918394228145"
                    className="w-full py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Call Helpline: (08394) 228145</span>
                  </a>
                </div>
              </div>

              {/* Other Diploma Courses */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                  Other Popular Programs
                </h4>
                <div className="space-y-2">
                  {COURSES.filter((c) => c.id !== course.id).slice(0, 4).map((other) => (
                    <Link
                      key={other.id}
                      to={`/courses/${other.id}`}
                      className="block p-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <p className="text-xs font-bold text-brand-dark hover:text-brand-blue line-clamp-1">
                        {other.title}
                      </p>
                      <span className="text-[11px] text-slate-400">
                        {other.intake} • {other.annualFee}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        preselectedCourseId={course.id}
      />
    </div>
  );
}
