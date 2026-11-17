import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';
import { COURSES } from '../data/coursesData';

export default function ApplicationModal({ isOpen, onClose, preselectedCourseId = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    parentName: '',
    courseId: preselectedCourseId || 'computer-science',
    entryType: '1st-year', // '1st-year' or 'lateral-2nd-year'
    qualification: 'SSLC / 10th Standard',
    marksPercentage: '',
    category: 'General',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.marksPercentage.trim()) {
      errs.marksPercentage = 'Marks percentage is required';
    } else {
      const val = parseFloat(formData.marksPercentage);
      if (isNaN(val) || val < 35 || val > 100) {
        errs.marksPercentage = 'Must be between 35% and 100%';
      }
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
      setIsSuccess(true);
    }, 1000);
  };

  const selectedCourse = COURSES.find((c) => c.id === formData.courseId) || COURSES[0];

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-brand-dark leading-tight">
                Admission Application 2025–26
              </h3>
              <p className="text-xs text-slate-500">TMAES Polytechnic • AICTE Approved</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-brand-dark hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto mb-4 border border-brand-blue/20">
                <CheckCircle2 className="w-10 h-10 stroke-[2]" />
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2">Application Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-brand-dark">{formData.fullName}</strong>. Your provisional application for <strong className="text-brand-dark">{selectedCourse.title}</strong> has been registered.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1.5 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Application ID:</span>
                  <span className="font-mono font-bold text-brand-dark">TMAES-2025-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Branch:</span>
                  <span className="font-semibold text-brand-dark">{selectedCourse.shortTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Verification Status:</span>
                  <span className="text-brand-blue font-semibold">Provisional • Document Call Scheduled</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Our admissions counselor will call you on <strong className="text-brand-dark">{formData.phone}</strong> within 24 working hours with reporting guidelines.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blueHover transition-colors shadow-sm"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">
                  Select Preferred Diploma Branch *
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-brand-dark focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.code}) — {course.annualFee}/yr
                    </option>
                  ))}
                </select>
              </div>

              {/* Admission Entry Type */}
              <div className="grid grid-cols-2 gap-3">
                <label 
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs transition-all ${
                    formData.entryType === '1st-year'
                      ? 'border-brand-blue bg-brand-blue/5 text-brand-dark font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="entryType"
                    checked={formData.entryType === '1st-year'}
                    onChange={() => setFormData({ ...formData, entryType: '1st-year' })}
                    className="accent-brand-blue"
                  />
                  <span>1st Year (After 10th / SSLC)</span>
                </label>
                <label 
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs transition-all ${
                    formData.entryType === 'lateral-2nd-year'
                      ? 'border-brand-blue bg-brand-blue/5 text-brand-dark font-semibold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="entryType"
                    checked={formData.entryType === 'lateral-2nd-year'}
                    onChange={() => setFormData({ ...formData, entryType: 'lateral-2nd-year' })}
                    className="accent-brand-blue"
                  />
                  <span>Lateral 2nd Year (ITI / 12th)</span>
                </label>
              </div>

              {/* Student Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patil"
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm text-brand-dark outline-none transition-all ${
                      errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-brand-blue'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm text-brand-dark outline-none transition-all ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-brand-blue'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Qualifying Marks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm text-brand-dark outline-none transition-all ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-brand-blue'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    10th / SSLC Marks (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.marksPercentage}
                    onChange={(e) => setFormData({ ...formData, marksPercentage: e.target.value })}
                    placeholder="e.g. 78.5"
                    className={`w-full px-3.5 py-2 rounded-lg border text-sm text-brand-dark outline-none transition-all ${
                      errors.marksPercentage ? 'border-red-500 bg-red-50/30' : 'border-slate-200 focus:border-brand-blue'
                    }`}
                  />
                  {errors.marksPercentage && <p className="text-[11px] text-red-500 mt-1">{errors.marksPercentage}</p>}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Govt. of Karnataka DTE Counseling Code: <strong>145</strong>. Zero capitation fee policy.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 rounded-xl bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blueHover transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit Application for {selectedCourse.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
