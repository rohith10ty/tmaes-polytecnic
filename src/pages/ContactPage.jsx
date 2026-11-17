import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';
import { COURSES } from '../data/coursesData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Admission Inquiry',
    courseInterest: 'computer-science',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please provide a valid 10-digit number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or question';
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
    }, 800);
  };

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-14 border-b border-slate-200 subtle-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mt-3">
              Campus & Admissions Office
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              We welcome prospective students, parents, and corporate recruiters to visit our 15-acre campus or connect with our administrative officers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Contact Cards */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-brand-dark">Campus Location</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {INSTITUTE_INFO.name}, Hosapete - Ballari Road, Karnataka 583201
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-brand-dark">Direct Helplines</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Landline: {INSTITUTE_INFO.phone}<br />
                Mobile: {INSTITUTE_INFO.admissionsHelpline}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-brand-dark">Official Inquiries</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {INSTITUTE_INFO.email}<br />
                {INSTITUTE_INFO.principalEmail}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-brand-dark">Office Timings</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monday – Saturday: 9:30 AM – 5:00 PM<br />
                Sunday: Closed (Helpline open)
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Contact Form & Institutional Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 7 Cols: Contact Form with Validation */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-subtle">
                <h3 className="text-2xl font-bold text-brand-dark mb-1">
                  Send an Inquiry to Admissions Office
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details and our admission counselor will respond within 24 working hours.
                </p>

                {isSuccess ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto border border-brand-blue/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">
                      Inquiry Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your query has been assigned to the Admissions Desk. We have sent a confirmation email to <strong>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Admission Inquiry',
                          courseInterest: 'computer-science',
                          message: ''
                        });
                      }}
                      className="mt-4 px-6 py-2 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blueHover transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-dark mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Sharma"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-brand-dark outline-none bg-white transition-all ${
                            errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-dark mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit number"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-brand-dark outline-none bg-white transition-all ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-dark mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-brand-dark outline-none bg-white transition-all ${
                            errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-dark mb-1">
                          Branch of Interest
                        </label>
                        <select
                          value={formData.courseInterest}
                          onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs font-medium text-brand-dark outline-none bg-white focus:border-brand-blue"
                        >
                          {COURSES.map((course) => (
                            <option key={course.id} value={course.id}>
                              {course.shortTitle} ({course.code})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark mb-1">
                        Inquiry Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-brand-dark outline-none bg-white focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-dark mb-1">
                        Your Message / Question *
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your specific questions regarding admission, hostel facilities, or syllabus..."
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-brand-dark outline-none bg-white transition-all ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-brand-blue'
                        }`}
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right 5 Cols: Department Directory & Public Transit */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Department Key Contacts */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Institutional Contact Directory
                </h4>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-brand-dark">Principal’s Secretariat</p>
                    <p className="text-slate-500">Dr. H. M. Veerabhadraiah</p>
                    <p className="text-brand-blue font-medium mt-1">principal@tmaespolytechnic.edu.in</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-brand-dark">Training & Corporate Placement Cell</p>
                    <p className="text-slate-500">Mr. Rajeshwar V., Head of Placement</p>
                    <p className="text-brand-blue font-medium mt-1">placements@tmaespolytechnic.edu.in</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-brand-dark">Examination & Board Section</p>
                    <p className="text-slate-500">DTE Examination Custodian</p>
                    <p className="text-brand-blue font-medium mt-1">examcell@tmaespolytechnic.edu.in</p>
                  </div>
                </div>
              </div>

              {/* Transit & Commute */}
              <div className="p-6 bg-brand-dark text-white rounded-3xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  How to Reach Campus
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Located strategically on the Hosapete-Ballari highway corridor. Easily accessible via KSRTC bus routes and situated 4.5 km from Hosapete Railway Junction.
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white transition-colors font-medium"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Google Maps Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-subtle relative bg-slate-100">
            {/* Embedded Responsive Interactive Map */}
            <div className="w-full h-96 relative">
              <iframe
                title="TMAES Polytechnic Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123282.80917637849!2d76.3262657!3d15.2758123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd8982b6b23%3A0x6b63c7b2a9e33552!2sHosapete%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[40%] contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping" />
                  <h5 className="font-bold text-xs text-brand-dark">TMAES Polytechnic Main Campus</h5>
                </div>
                <p className="text-[11px] text-slate-500">
                  Hosapete - Ballari Road, Karnataka 583201
                </p>
                <div className="mt-2 text-[10px] text-brand-blue font-semibold">
                  Visitor Parking & Reception at Gate 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
