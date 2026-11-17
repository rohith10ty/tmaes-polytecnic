import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Users, 
  Building2, 
  Clock, 
  ArrowRight,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { 
  INSTITUTE_INFO, 
  LEADERSHIP, 
  MILESTONES, 
  FACILITIES,
  STATS 
} from '../data/instituteData';

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200 subtle-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              About TMAES Polytechnic
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mt-3">
              A Legacy of Technical Competence, Innovation & Integrity
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Established in 1984 under the visionary patronage of Taralabalu Medical & Arts Education Society, TMAES Polytechnic has nurtured over 16,000 engineering technicians across Karnataka and global industries.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                Approved by AICTE, New Delhi
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Building2 className="w-4 h-4 text-brand-blue" />
                Recognised by DTE Karnataka (Code: 145)
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Award className="w-4 h-4 text-brand-blue" />
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institutional Overview & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Foundational Legacy
              </span>
              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
                Empowering Youth Through Applied Technical Dexterity
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                T.M.A.E. Society’s Polytechnic was founded with the resolute objective of demystifying engineering and making world-class technical education accessible to students from all socio-economic backgrounds.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Spread over a scenic 15-acre campus with over 150,000 sq.ft. of built-up instructional space, the institution operates 45+ specialized laboratories, advanced CNC workshops, computing centers, and an expansive technical library. Our curriculum emphasizes the synergy between foundational physics and real-world industrial practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-brand-dark text-sm mb-1">Affiliated to Board</h4>
                  <p className="text-xs text-slate-500">Board of Technical Examinations, Bengaluru with complete semester syllabus alignment.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-brand-dark text-sm mb-1">Statewide DCET Ranks</h4>
                  <p className="text-xs text-slate-500">Consistent top rankers securing direct 2nd-year admissions into RVCE, BMS, and UVCE.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?w=800&auto=format&fit=crop&q=80"
                  alt="TMAES Polytechnic Main Building"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-white space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                    Campus Infrastructure
                  </span>
                  <h4 className="text-base font-bold text-brand-dark">
                    Hosapete-Ballari Academic Center
                  </h4>
                  <p className="text-xs text-slate-500">
                    Equipped with modern lecture theaters, seminar halls, sports ground, Wi-Fi campus, and dedicated student hostels.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:border-brand-blue/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Eye className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To emerge as an institution of international repute in technical diploma education, recognized for cultivating competent, ethically anchored, and globally competitive technicians who lead industrial modernization and social development.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:border-brand-blue/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Target className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-dark">Our Mission</h3>
              <ul className="text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span>Deliver rigorous experiential technical training adhering to contemporary AICTE and industry paradigms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span>Maintain state-of-the-art laboratory infrastructure that mirrors real industrial manufacturing and computing systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span>Instill professional ethics, continuous self-learning, and entrepreneurial resilience in our students.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Leadership & Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Institutional Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3">
              Leadership & Academic Council
            </h2>
            <p className="text-sm text-slate-600 mt-2.5">
              Guided by veteran academicians, research leaders, and corporate placement veterans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-60 overflow-hidden bg-slate-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider block">
                      {leader.role}
                    </span>
                    <h3 className="text-base font-bold text-brand-dark">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {leader.qualification}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <blockquote className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Milestones & Timeline */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              40 Years of Progress
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-3">
              Historic Milestones
            </h2>
            <p className="text-sm text-slate-600 mt-2.5">
              Key moments that have shaped TMAES Polytechnic into a technical benchmark.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {MILESTONES.map((mile, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-brand-blue/40 transition-all"
              >
                <div className="w-16 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold font-mono text-sm flex-shrink-0 shadow-sm">
                  {mile.year}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-brand-dark">
                    {mile.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {mile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accreditations & Statutory Compliance */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Statutory Approvals & Accreditation
              </span>
              <h3 className="text-2xl font-bold text-white">
                Committed to Complete Regulatory Transparency
              </h3>
              <p className="text-xs text-slate-300">
                All diploma courses operate with formal annual extension of approvals (EOA) from AICTE, New Delhi and DTE, Bengaluru.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/courses"
                className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>View All Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/admissions"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>Admission Process</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
