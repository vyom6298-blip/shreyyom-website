import { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Mail,
  Headphones,
  Search,
  Building2,
  Users,
  Award,
  Landmark,
  FileCheck,
  Receipt,
  Scale,
  Percent,
  Sparkles,
  ShieldCheck,
  Globe,
  Coins,
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL, getWhatsAppLink } from '../../lib/constants';
import GlobalSearchModal from './GlobalSearchModal';

const SCHEMES_DROPDOWN = [
  { title: 'PMEGP Subsidy Scheme', desc: 'Up to 35% capital subsidy on manufacturing & service units', href: '/schemes/pmegp-subsidy', tag: '35% Subsidy' },
  { title: 'CGTMSE Credit Guarantee', desc: 'Collateral-free business loans up to ₹5 Crore from banks', href: '/schemes/cgtmse-credit-guarantee', tag: 'No Collateral' },
  { title: 'Section 80-IAC Tax Holiday', desc: '3 consecutive years 100% corporate tax exemption for startups', href: '/eligibility/80-iac', tag: '100% Tax Free' },
  { title: 'Startup India SISFS Grant', desc: 'Seed funding grants up to ₹20L and debt support up to ₹50L', href: '/schemes/startup-india-seed-fund', tag: '₹50L Seed' },
  { title: 'MUDRA Loan Scheme', desc: 'Shishu, Kishore, and Tarun business loans up to ₹10 Lakhs', href: '/schemes/mudra-loan', tag: 'Priority Credit' },
  { title: 'Explore All 18+ Schemes', desc: 'Directory of central and state government funding schemes', href: '/schemes', tag: 'Directory' },
];

const SERVICES_DROPDOWN = [
  { title: 'MSME Loan Facilitation', desc: 'End-to-end DPR project report & bank loan documentation', href: '/msme', icon: Landmark },
  { title: 'Private Limited Company', desc: 'MCA SPICe+ setup with PAN, TAN, GST, and statutory bank account', href: '/services/private-limited-company', icon: Building2 },
  { title: 'Limited Liability Partnership (LLP)', desc: 'Flexible corporate structure with limited liability protection', href: '/services/llp-registration', icon: Users },
  { title: 'Startup India DPIIT Recognition', desc: 'Official certificate for angel tax relief & sovereign privileges', href: '/services/dpiit-recognition', icon: Award },
  { title: 'MSME Udyam & ZED Certification', desc: 'Permanent registration with up to 80% certification subsidies', href: '/services/udyam-registration', icon: ShieldCheck },
  { title: 'GST & Corporate Tax Compliance', desc: 'Filing, statutory secretarial audits, and annual MCA compliance', href: '/services/gst-registration', icon: Receipt },
];

export default function Header() {
  const location = useLocation();
  const headerRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'schemes' | 'services' | null
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = useCallback((key) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const toggleDropdown = (key) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-[500] transition-all duration-300">
        
        {/* ============ TOP BAR (Deep Dark Forest Green #061A12 matching screenshot) ============ */}
        <div className="bg-[#061A12] border-b border-[#14382A] text-white py-2 text-xs">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left side: Phone & Email with Orange Icons */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-white/95 hover:text-white font-semibold transition-colors"
              >
                <Phone size={13} className="text-[#EA580C] shrink-0 fill-[#EA580C]/20" />
                <span>{PHONE_NUMBER}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={13} className="text-[#EA580C] shrink-0" />
                <span>{EMAIL}</span>
              </a>
            </div>

            {/* Right side: WhatsApp & Support */}
            <div className="flex items-center gap-4 sm:gap-5 text-xs">
              <a
                href={getWhatsAppLink('Top bar direct chat')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors font-medium"
              >
                <MessageCircle size={13} className="text-[#16A34A] shrink-0 fill-[#16A34A]/20" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors font-medium"
              >
                <Headphones size={13} className="text-[#EA580C] shrink-0" />
                <span>Support</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ============ MAIN NAVBAR (Pure 100% Solid White matching live website) ============ */}
        <div
          className={`transition-all duration-300 bg-white border-b border-[#E5E7EB] text-[#1F2937] ${
            scrolled ? 'py-2 sm:py-2.5 shadow-md' : 'py-3 sm:py-3.5 shadow-xs'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

            {/* Left Brand + Navigation Cluster (Prevents wide void and ensures prominent brand placement) */}
            <div className="flex items-center gap-6 xl:gap-10 min-w-0">
              {/* Brand Logo (User official logo.png) */}
              <Link
                to="/"
                className="inline-flex items-center transition-transform hover:scale-[1.01] shrink-0"
                aria-label="Shreyyom Consultancy Home"
              >
                <img
                  src="/logo.png"
                  alt="Shreyyom Consultancy"
                  className={`transition-all duration-300 w-auto object-contain ${
                    scrolled ? 'h-10 sm:h-11 lg:h-[48px]' : 'h-11 sm:h-13 lg:h-[56px] xl:h-[60px]'
                  }`}
                  loading="eager"
                />
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">

              {/* 1. Home (Exact peach pill when active) */}
              <Link
                to="/"
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  location.pathname === '/'
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                Home
              </Link>

              {/* 2. Schemes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('schemes')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown('schemes')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    activeDropdown === 'schemes' || location.pathname.startsWith('/schemes')
                      ? 'bg-[#FFF3EB] text-[#EA580C]'
                      : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                  }`}
                  aria-expanded={activeDropdown === 'schemes'}
                >
                  <span>Schemes</span>
                  <ChevronDown
                    size={14}
                    className={`shrink-0 transition-transform duration-200 ${
                      activeDropdown === 'schemes' ? 'rotate-180 text-[#EA580C]' : 'text-[#6B7280]'
                    }`}
                  />
                </button>

                {activeDropdown === 'schemes' && (
                  <div
                    className="absolute top-full left-0 pt-2 w-[390px] sm:w-[430px] z-[600] pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter('schemes')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] p-3 text-[#111827] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="space-y-1">
                        {SCHEMES_DROPDOWN.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group block p-2.5 rounded-xl hover:bg-[#FFF7ED] transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-[#111827] group-hover:text-[#EA580C] transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-semibold text-[#15803D] bg-[#F0FDF4] px-2 py-0.5 rounded-md border border-[#BBF7D0] shrink-0">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#6B7280] leading-snug mt-1">
                              {item.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown('services')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                    activeDropdown === 'services' || location.pathname.startsWith('/services') || location.pathname === '/msme'
                      ? 'bg-[#FFF3EB] text-[#EA580C]'
                      : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                  }`}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
                    className={`shrink-0 transition-transform duration-200 ${
                      activeDropdown === 'services' ? 'rotate-180 text-[#EA580C]' : 'text-[#6B7280]'
                    }`}
                  />
                </button>

                {activeDropdown === 'services' && (
                  <div
                    className="absolute top-full left-0 pt-2 w-[400px] sm:w-[450px] z-[600] pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter('services')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] p-3 text-[#111827] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="space-y-1">
                        {SERVICES_DROPDOWN.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FFF7ED] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#FEF3E2] flex items-center justify-center text-[#EA580C] shrink-0 mt-0.5 border border-[#FED7AA]">
                              <item.icon size={15} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold text-[#111827] group-hover:text-[#EA580C] transition-colors block">
                                {item.title}
                              </span>
                              <p className="text-[11px] text-[#6B7280] leading-snug mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Success Stories */}
              <Link
                to="/case-studies"
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  location.pathname === '/case-studies'
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                Success Stories
              </Link>

              {/* 5. Industries */}
              <Link
                to="/funding"
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  location.pathname === '/funding'
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                Industries
              </Link>

              {/* 6. Knowledge Hub */}
              <Link
                to="/blog"
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  location.pathname.startsWith('/blog')
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                Knowledge Hub
              </Link>

              {/* 7. About */}
              <Link
                to="/about"
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                About
              </Link>

              {/* 8. Contact */}
              <Link
                to="/contact"
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  location.pathname === '/contact'
                    ? 'bg-[#FFF3EB] text-[#EA580C]'
                    : 'text-[#374151] hover:text-[#EA580C] hover:bg-[#FFF7ED]'
                }`}
              >
                Contact
              </Link>

            </nav>
            </div>

            {/* Right Action: Search + Check Eligibility Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Search trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 border border-[#E5E7EB] text-xs font-medium text-[#4B5563] transition-colors cursor-pointer"
                aria-label="Search schemes and services"
              >
                <Search size={13} className="text-[#EA580C]" />
                <span>Search</span>
                <kbd className="text-[10px] bg-white border border-[#E5E7EB] px-1 py-0.2 rounded text-[#9CA3AF]">⌘K</kbd>
              </button>

              {/* Check Eligibility Button (Exact Vibrant Orange Pill from screenshot) */}
              <Link
                to="/eligibility"
                className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11.5px] sm:text-sm font-bold shadow-[0_4px_15px_rgba(234,88,12,0.35)] hover:scale-102 active:scale-98 transition-all whitespace-nowrap"
              >
                Check Eligibility
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-50 border border-[#E5E7EB] text-[#1F2937] hover:bg-gray-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* GLOBAL SEARCH MODAL */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* MOBILE DRAWER (< lg) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[600] lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white text-[#111827] shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-l border-[#E5E7EB]">
            <div>
              {/* Mobile Header */}
              <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
                <img
                  src="/logo.png"
                  alt="Shreyyom Consultancy"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Bar in Mobile Menu */}
              <div className="p-4 border-b border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-[#E5E7EB] text-xs text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Search size={14} className="text-[#EA580C]" />
                  <span>Search 18+ schemes & services...</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-1">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-xs font-bold ${
                    location.pathname === '/' ? 'bg-[#FFF3EB] text-[#EA580C]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/schemes"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Schemes
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  to="/case-studies"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Success Stories
                </Link>
                <Link
                  to="/funding"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Industries & Grants
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Knowledge Hub
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-4 border-t border-[#E5E7EB] space-y-2 bg-gray-50">
              <Link
                to="/eligibility"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EA580C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <span>Check Eligibility</span>
                <ArrowUpRight size={14} />
              </Link>
              <a
                href={getWhatsAppLink('Mobile Menu')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#16A34A] text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
