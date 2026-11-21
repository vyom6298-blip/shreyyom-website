import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, getWhatsAppLink } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061A12] border-t border-[#14382A] text-white overflow-hidden z-10">
      {/* Ambient forest glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#16A34A]/5 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#14382A]">

          {/* ============ COLUMN 1: BRAND & MISSION (4 cols) ============ */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block transition-transform hover:scale-[1.01]" aria-label="Shreyyom Consultancy Home">
              <img
                src="/logo.png"
                alt="Shreyyom Consultancy"
                className="h-12 sm:h-14 lg:h-[56px] w-auto object-contain"
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-normal">
              Turning business potential into funded reality. Premium MSME consultancy and funding advisory across India.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">Shreyyom Consultancy (OPC) Private Limited</p>
              <p>Registered Office: Ahmedabad, Gujarat · Operating Pan-India</p>
            </div>
          </div>

          {/* ============ COLUMN 2: SERVICES (2 cols) ============ */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link to="/msme" className="hover:text-[#4ADE80] transition-colors">
                  MSME Loan Facilitation
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-[#4ADE80] transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link to="/funding" className="hover:text-[#4ADE80] transition-colors">
                  Grants & Subsidies
                </Link>
              </li>
              <li>
                <Link to="/startup" className="hover:text-[#4ADE80] transition-colors">
                  Startup Funding
                </Link>
              </li>
              <li>
                <Link to="/services/private-limited-company" className="hover:text-[#4ADE80] transition-colors">
                  Company Incorporation
                </Link>
              </li>
            </ul>
          </div>

          {/* ============ COLUMN 3: SCHEMES (2 cols) ============ */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Schemes
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link to="/schemes/pmegp-subsidy" className="hover:text-[#4ADE80] transition-colors">
                  PMEGP Subsidy Loan
                </Link>
              </li>
              <li>
                <Link to="/schemes/cgtmse-credit-guarantee" className="hover:text-[#4ADE80] transition-colors">
                  CGTMSE Collateral Free
                </Link>
              </li>
              <li>
                <Link to="/schemes/mudra-loan" className="hover:text-[#4ADE80] transition-colors">
                  MUDRA Scheme
                </Link>
              </li>
              <li>
                <Link to="/startup" className="hover:text-[#4ADE80] transition-colors">
                  Startup India & DPIIT
                </Link>
              </li>
              <li>
                <Link to="/eligibility/80-iac" className="hover:text-[#4ADE80] transition-colors">
                  Section 80-IAC Tax Exemption
                </Link>
              </li>
            </ul>
          </div>

          {/* ============ COLUMN 4: RESOURCES (2 cols) ============ */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link to="/blog" className="hover:text-[#4ADE80] transition-colors">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-[#4ADE80] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-[#4ADE80] transition-colors">
                  Founder Tools & Calculators
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#4ADE80] transition-colors">
                  FAQ & Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#4ADE80] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ============ COLUMN 5: CONTACT (2 cols matching screenshot) ============ */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#EA580C] shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white font-semibold transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#EA580C] shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors truncate">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#EA580C] shrink-0 mt-0.5" />
                <span className="leading-snug">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>

            {/* WhatsApp Us Button (matching live screenshot) */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('Footer Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* ============ STATUTORY DISCLAIMER ============ */}
        <div className="pt-6 pb-4 text-[11px] text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-300">Disclaimer:</strong> Information on this website is provided for informational and advisory guidance. Shreyyom Consultancy (OPC) Private Limited is an autonomous private business consultancy firm. All government schemes, loans, grants, subsidies, and tax holiday approvals remain strictly subject to official guidelines, eligibility verification, and decisions of the respective government ministries and financial institutions.
          </p>
        </div>

        {/* ============ BOTTOM LEGAL BAR ============ */}
        <div className="pt-4 border-t border-[#14382A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {currentYear} Shreyyom Consultancy. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-[#4ADE80] transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-[#4ADE80] transition-colors">Terms</Link>
            <span>·</span>
            <Link to="/disclaimer" className="hover:text-[#4ADE80] transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
