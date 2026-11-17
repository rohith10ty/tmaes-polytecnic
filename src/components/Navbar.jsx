import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  User, 
  GraduationCap, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import SearchModal from './SearchModal';
import ApplicationModal from './ApplicationModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Global shortcut cmd/ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Diploma Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* Top Minimal Notification / Accreditation Bar */}
        <div className="bg-brand-dark text-slate-300 border-b border-slate-800 text-[11px] sm:text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                AICTE Approved • DTE Karnataka Code: 145
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">
                Admissions Open 2025–26 (1st Year & Lateral Entry)
              </span>
            </div>

            <div className="flex items-center gap-5 text-slate-300">
              <a 
                href="tel:+918394228145" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-brand-blue" />
                <span>+91 (08394) 228145</span>
              </a>
              <span className="text-slate-600">|</span>
              <a 
                href="mailto:admissions@tmaespolytechnic.edu.in" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-brand-blue" />
                <span>admissions@tmaespolytechnic.edu.in</span>
              </a>
              <span className="text-slate-600">|</span>
              <Link 
                to="/login" 
                className="flex items-center gap-1 text-white hover:text-blue-300 transition-colors font-medium"
              >
                <User className="w-3 h-3 text-brand-blue" />
                <span>Student / Staff Portal</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Minimalist Sticky Navigation Bar */}
        <nav 
          className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
            isScrolled 
              ? 'border-slate-200/80 shadow-subtle py-2.5' 
              : 'border-slate-100 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/5 font-semibold'
                        : 'text-brand-darkMuted hover:text-brand-dark hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Cluster (Search, Apply CTA, Portal) */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-500 hover:text-brand-dark hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all group"
                title="Search courses (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                <span className="hidden xl:inline">Search courses...</span>
                <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-200 rounded font-mono text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Portal Link */}
              <Link
                to="/login"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-brand-dark border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                <User className="w-3.5 h-3.5" />
                <span>Portal</span>
              </Link>

              {/* Apply Now Primary CTA */}
              <button
                onClick={() => setApplyModalOpen(true)}
                className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blueHover transition-all shadow-sm hover:shadow-glow group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Actions: Search Trigger & Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-brand-dark" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-brand-dark hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            {/* Quick Mobile Search */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500 text-left"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-brand-blue" />
                  Search diploma courses & syllabus...
                </span>
                <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  Search
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 mb-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/5 font-semibold'
                        : 'text-brand-dark hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </NavLink>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setApplyModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Admission 2025–26</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  className="py-2 px-3 text-center rounded-lg border border-slate-200 text-xs font-medium text-brand-dark hover:bg-slate-50"
                >
                  Student Portal
                </Link>
                <Link
                  to="/signup"
                  className="py-2 px-3 text-center rounded-lg border border-slate-200 text-xs font-medium text-brand-dark hover:bg-slate-50"
                >
                  Register Account
                </Link>
              </div>

              {/* Mobile Contact Quick Strip */}
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Helpline: +91 (08394) 228145</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                  <span>DTE Code: 145 • AICTE Approved</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <ApplicationModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
    </>
  );
}
