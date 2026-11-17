import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  UserCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Logo from '../components/Logo';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // 'student', 'faculty', 'applicant'
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.identifier.trim()) {
      errs.identifier = role === 'student' ? 'Registration No. or Email is required' : 'Faculty ID or Email is required';
    }
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
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
      setAuthSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-50 subtle-grid-bg px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Left 5 Cols: Brand Showcase & Institutional Assurance */}
        <div className="md:col-span-5 bg-brand-dark p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle light glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <Logo theme="light" />

            <div className="pt-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                Institutional Portal
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                Welcome to TMAES Campus Cloud
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Access internal examination marks, attendance records, digital library resources, and placement drives.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Internal Continuous Assessment Records</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Board Examination Hall Tickets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Placement Cell Drive Registrations</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-400 relative z-10">
            <p>Protected by 256-bit institutional encryption.</p>
            <p className="text-slate-500 mt-0.5">Need help? Contact college registrar office.</p>
          </div>
        </div>

        {/* Right 7 Cols: Login Console */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          
          <div className="mb-6">
            <h3 className="text-2xl font-extrabold text-brand-dark tracking-tight">
              Sign In to Your Account
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select your institutional role and enter credentials to continue.
            </p>

            {/* Role Switcher Tabs */}
            <div className="flex rounded-xl bg-slate-100 p-1 mt-4 gap-1">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  role === 'student'
                    ? 'bg-white text-brand-dark shadow-sm'
                    : 'text-slate-600 hover:text-brand-dark'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('faculty')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  role === 'faculty'
                    ? 'bg-white text-brand-dark shadow-sm'
                    : 'text-slate-600 hover:text-brand-dark'
                }`}
              >
                Faculty / Staff
              </button>
              <button
                type="button"
                onClick={() => setRole('applicant')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  role === 'applicant'
                    ? 'bg-white text-brand-dark shadow-sm'
                    : 'text-slate-600 hover:text-brand-dark'
                }`}
              >
                Applicant 2025
              </button>
            </div>
          </div>

          {authSuccess ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto border border-brand-blue/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-brand-dark">Authentication Successful!</h4>
              <p className="text-xs text-slate-500">Redirecting to TMAES Campus Portal...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* User Identifier */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  {role === 'student' 
                    ? 'Student Reg. Number or Email' 
                    : role === 'faculty' 
                    ? 'Staff ID or Institutional Email' 
                    : 'Application ID or Registered Email'} *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    placeholder={
                      role === 'student' 
                        ? 'e.g. 145CS21045 or student@tmaes.edu' 
                        : 'e.g. FAC-CSE-08 or faculty@tmaes.edu'
                    }
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                      errors.identifier 
                        ? 'border-red-500 bg-red-50/20' 
                        : 'border-slate-200 focus:border-brand-blue bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                </div>
                {errors.identifier && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.identifier}</p>
                )}
              </div>

              {/* Password with Visibility Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-brand-dark">
                    Password *
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link has been dispatched to your registered mobile."); }} className="text-[11px] text-brand-blue hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your security password"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-xs text-brand-dark outline-none transition-all ${
                      errors.password 
                        ? 'border-red-500 bg-red-50/20' 
                        : 'border-slate-200 focus:border-brand-blue bg-slate-50/50 focus:bg-white'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-dark p-0.5"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="accent-brand-blue rounded"
                  />
                  <span>Remember this device for 30 days</span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In to {role.toUpperCase()} Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Switch to Sign Up */}
              <p className="text-center text-xs text-slate-500 pt-3">
                New candidate or not yet registered?{' '}
                <Link to="/signup" className="text-brand-blue font-semibold hover:underline">
                  Create an Applicant Account
                </Link>
              </p>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
