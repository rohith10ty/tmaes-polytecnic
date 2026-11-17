import React, { useState } from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Award, 
  ArrowRight,
  Phone,
  Mail,
  Download
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { INSTITUTE_INFO, FAQS } from '../data/instituteData';
import ApplicationModal from '../components/ApplicationModal';

export default function AdmissionsPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const documentChecklist = [
    'Original 10th Standard / SSLC Marks Card with 3 photocopies',
    'Transfer Certificate (T.C.) from the school last attended',
    'Study & Conduct Certificate (7 years study in Karnataka for domicile quota)',
    'Caste & Income Certificate (for SC / ST / Cat-1 / 2A / 2B / 3A / 3B categories)',
    'Aadhaar Card of the Student and Parent (photocopy)',
    '6 recent passport size and 4 stamp size photographs',
    'ITI / 12th Marks Card & TC (specifically for Lateral Entry candidates)'
  ];

  const steps = [
    {
      step: '01',
      title: 'Online or Campus Registration',
      description: 'Submit the preliminary application online or collect the admission form from our campus admissions counter in Hosapete.'
    },
    {
      step: '02',
      title: 'Document Verification & Counseling',
      description: 'Meet our academic counselors with original SSLC / ITI marks cards for verification and branch aptitude assessment.'
    },
    {
      step: '03',
      title: 'Seat Allocation & Formalities',
      description: 'Select your preferred engineering discipline based on merit and complete standard DTE Karnataka portal admission registration.'
    },
    {
      step: '04',
      title: 'Fee Payment & Identity Card Issuance',
      description: 'Pay the subsidized annual tuition fee and receive your official enrollment kit, laboratory lab-coat, and library card.'
    }
  ];

  return (
    <div className="pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-14 border-b border-slate-200 subtle-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
              Admissions 2025–26
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight mt-3">
              Your Pathway to Applied Engineering
            </h1>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Transparent, merit-guided admissions into 8 AICTE-approved diploma disciplines. DTE Karnataka College Code: <strong>145</strong>. Zero capitation fee policy.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setApplyModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blueHover text-white text-xs font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Fill Online Admission Application</span>
              </button>
              <a
                href="tel:+918394228145"
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 text-brand-dark text-xs font-semibold hover:border-brand-blue transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Admissions Helpline: (08394) 228145</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mt-2">
              How to Secure Admission
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding students and parents with complete clarity from application to classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-blue/40 shadow-subtle hover:shadow-card-hover transition-all space-y-3"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-dark text-brand-blue flex items-center justify-center font-bold text-sm">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-brand-dark">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Eligibility & Documents Checklist */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Eligibility Requirements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-brand-dark">
                Eligibility Criteria
              </h3>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue block">
                  Category A: 1st Year Diploma (3-Year Duration)
                </span>
                <h4 className="text-base font-bold text-brand-dark">
                  After 10th Standard / SSLC
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate must have passed Karnataka SSLC or CBSE/ICSE equivalent examination with a minimum of <strong>35% aggregate marks</strong> with Science and Mathematics subjects. No upper age bar.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue block">
                  Category B: Lateral Entry 2nd Year (2-Year Duration)
                </span>
                <h4 className="text-base font-bold text-brand-dark">
                  For ITI / 12th Vocational Holders
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidates who have passed 2-year ITI (in relevant engineering trade) or 10+2 Science with vocational technical subjects are eligible for direct admission into <strong>3rd Semester (2nd Year)</strong>.
                </p>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-brand-dark">
                Mandatory Verification Documents
              </h3>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle">
                <p className="text-xs text-slate-500 mb-4">
                  Please bring original copies along with 3 sets of attested photocopies at the time of admission:
                </p>
                <ul className="space-y-3">
                  {documentChecklist.map((doc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Fee Structure & Government Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              Transparent & Affordable
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight mt-2">
              Fee Structure & Scholarship Schemes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Strictly compliant with DTE Karnataka government fee norms. Maximum scholarship mobilization support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <h4 className="font-bold text-base text-brand-dark">Government Quota Seats</h4>
              <p className="text-xs text-slate-600">
                Allotted through DTE Karnataka centralized online counseling based on 10th standard merit.
              </p>
              <div className="pt-2 text-brand-blue font-bold text-lg">
                ₹18,500 – ₹24,500 <span className="text-xs font-normal text-slate-500">/ year</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-brand-blue/30 bg-brand-blue/5 space-y-3">
              <span className="text-[10px] font-bold uppercase text-brand-blue bg-white px-2 py-0.5 rounded border border-brand-blue/20">
                Most Popular
              </span>
              <h4 className="font-bold text-base text-brand-dark">Institutional Merit Seats</h4>
              <p className="text-xs text-slate-600">
                Direct institutional counseling seats with zero capitation fee and installments facility.
              </p>
              <div className="pt-2 text-brand-blue font-bold text-lg">
                ₹26,500 – ₹32,000 <span className="text-xs font-normal text-slate-500">/ year</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <h4 className="font-bold text-base text-brand-dark">State & Central Scholarships</h4>
              <p className="text-xs text-slate-600">
                Eligible for Karnataka State Scholarship Portal (SSP), SC/ST Post Matric, Pragati AICTE girl scheme.
              </p>
              <div className="pt-2 text-brand-dark font-bold text-lg">
                Up to 100% Tuition Waiver
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Admission FAQs */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Have doubts? Find instant answers to common admission and counseling questions.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm text-brand-dark flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-brand-blue ml-4">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />
    </div>
  );
}
