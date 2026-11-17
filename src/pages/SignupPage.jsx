import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import Logo from '../components/Logo';
import { COURSES } from '../data/coursesData';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coursePreference: 'computer-science',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit number';
    }
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must agree to institutional terms';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSignupSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-50 subtle-grid-bg px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Left 5 Cols: Brand Column */}
        <div className="md:col-span-5 bg-brand-dark p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <Logo theme="light" />

            <div className="pt-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                New Candidate Registration
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                Join 16,000+ TMAES Polytechnic Engineers
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Create an applicant account to track your diploma admission status, submit scholarship documentation, and schedule campus counseling.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Immediate Application ID Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Direct Access to DCET Preparation Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>DTE Karnataka Counseling Alerts</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-400 relative z-10">
            <p>Approved by AICTE, New Delhi & DTE Karnataka</p>
            <p className="text-slate-500 mt-0.5">College Code: 145</p>
          </div>
        </div>

        {/* Right 7 Cols: Registration Form */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="mb-6">
            <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight">
              Register Student Account
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Enter your basic academic information to start your 2025–26 application.
            </p>
          </div>

          {signupSuccess ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto border border-brand-blue/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark">Registration Completed!</h4>
              <p className="text-xs text-slate-500">Redirecting to login portal...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Full Name (As per 10th Marks Card) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh K. Patil"
                    className={`w-full pl-10 pr-3.5 py-2 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`w-full pl-10 pr-3.5 py-2 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit number"
                      className={`w-full pl-10 pr-3.5 py-2 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Branch Preference */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Intended Diploma Discipline
                </label>
                <select
                  value={formData.coursePreference}
                  onChange={(e) => setFormData({ ...formData, coursePreference: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-brand-dark outline-none bg-white focus:border-brand-blue"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.code})
                    </option>
                  ))}
                </select>
              </div>

              {/* Password & Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Min. 6 chars"
                      className={`w-full pl-10 pr-9 py-2 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                        errors.password ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-dark p-0.5"
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Re-enter password"
                      className={`w-full pl-10 pr-9 py-2 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                        errors.confirmPassword ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-dark p-0.5"
                    >
                      {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-[11px] text-red-500 mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="accent-brand-blue rounded mt-0.5"
                  />
                  <span>
                    I certify that information given is accurate and I agree to TMAES Polytechnic academic regulations.
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-[11px] text-red-500 mt-1">{errors.agreeTerms}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <span>Complete Candidate Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Switch to Login */}
              <p className="text-center text-xs text-slate-500 pt-2">
                Already registered?{' '}
                <Link to="/login" className="text-brand-blue font-semibold hover:underline">
                  Sign In Here
                </Link>
              </p>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
