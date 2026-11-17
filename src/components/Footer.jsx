import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { INSTITUTE_INFO } from '../data/instituteData';
import { COURSES } from '../data/coursesData';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !/\S+@\S+\.\S+/.test(emailInput)) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Institution Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="light" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              T.M.A.E. Society’s Polytechnic is one of Karnataka’s foremost premier technical education institutions. Since 1984, we have provided rigorous technical curricula, hands-on industrial laboratory exposure, and career placement pathways.
            </p>

            {/* Accreditation Badges */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60 max-w-md">
                <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>AICTE Approved • DTE Karnataka Recognized • Code: <strong>145</strong></span>
              </div>
            </div>

            {/* Direct Contact Snapshot */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>{INSTITUTE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Helpline: {INSTITUTE_INFO.phone} / {INSTITUTE_INFO.admissionsHelpline.split('/')[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>{INSTITUTE_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Institutional Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>About TMAES Polytechnic</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>Diploma Programs</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>Admission Guidelines</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>Campus & Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-blue" />
                  <span>Student & Faculty Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Diploma Programs */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Diploma Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {COURSES.slice(0, 6).map((course) => (
                <li key={course.id}>
                  <Link 
                    to={`/courses/${course.id}`} 
                    className="hover:text-blue-400 transition-colors line-clamp-1 flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-blue" />
                    <span>{course.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/courses" className="text-brand-blue hover:underline inline-flex items-center gap-1 pt-1 font-semibold">
                  <span>View All 8 Programs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Admission Updates Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
              Admission Alerts
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe for DCET updates, DTE counseling notifications, and scholarship announcements.
            </p>

            {subscribed ? (
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/30 rounded-lg text-xs text-blue-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Thank you! You are subscribed to admission alerts.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white placeholder:text-slate-500 outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Subscribe Alerts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Statutory Links */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-500 space-y-1">
              <p>• Mandatory AICTE Disclosures</p>
              <p>• Anti-Ragging Affidavit Portal</p>
              <p>• Grievance Redressal Cell</p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} <strong>TMAES Polytechnic</strong>. All Rights Reserved. Approved by AICTE, New Delhi.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-slate-400 transition-colors">Academic Regulations</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Contact Directory</Link>
            <a 
              href="https://dte.karnataka.gov.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>DTE Karnataka</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
