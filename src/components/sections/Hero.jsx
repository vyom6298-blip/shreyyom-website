import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Sparkles, Check, Phone, ShieldCheck, ChevronDown, CheckCircle2, Compass } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '../../lib/constants';
import HeroMap3D from './HeroMap3D';

export default function Hero() {
  const navigate = useNavigate();

  // Active view toggle: 'map' (startupsupportadvisory 3D map) or 'match' (Funding Match calculator)
  const [activeHeroTab, setActiveHeroTab] = useState('map');

  // Interactive Funding Match State
  const [formData, setFormData] = useState({
    businessType: '',
    businessAge: '',
    annualTurnover: '',
    fundingRequired: '',
    purpose: '',
    state: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormError('');
  };

  const handleMatchSubmit = (e) => {
    e.preventDefault();
    // Build payload for diagnostic engine
    const profile = {
      businessType: formData.businessType || 'private-limited',
      businessAge: formData.businessAge || 'less-than-2',
      turnover: formData.annualTurnover || 'less-than-25l',
      funding: formData.fundingRequired || '25l-1cr',
      support: [formData.purpose || 'working-capital', 'msme-schemes'],
      state: formData.state || 'gujarat',
      timestamp: Date.now(),
    };

    try {
      sessionStorage.setItem('shreyyom_eligibility', JSON.stringify(profile));
      sessionStorage.setItem('certwinx_eligibility', JSON.stringify(profile));
    } catch (err) {
      // Storage fallback
    }

    navigate('/eligibility/results');
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-[#FCFBF9]">
      {/* Warm Ambient Brand Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-0 w-[550px] h-[550px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, #FED7AA 0%, rgba(254, 215, 170, 0) 70%)' }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
          style={{ background: 'radial-gradient(circle, #BBF7D0 0%, rgba(187, 247, 208, 0) 70%)' }}
        />
      </div>

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ============ LEFT COLUMN: HERO HEADLINE & CTAs ============ */}
          <div className="lg:col-span-6 xl:col-span-6 relative z-10">
            {/* Pill Badge matching live website screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3E2] border border-[#FED7AA] text-xs font-semibold text-[#15803D] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
              <span>MSME Funding Intelligence Platform</span>
            </div>

            {/* Exact Headline from live screenshot */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-[#0F172A] leading-[1.12] tracking-tight text-balance mb-5">
              Turn Your Business<br />
              Potential Into the<br />
              <span className="text-[#EA580C]">Funded</span>{' '}
              <span className="text-[#15803D]">Reality</span>
            </h1>

            {/* Exact Subtitle from live screenshot */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mb-8 font-normal">
              Explore MSME loans, government schemes, grants, subsidies and startup funding options with structured eligibility assessment and expert guidance.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <Link
                to="/eligibility"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_-8px_rgba(234,88,12,0.45)] hover:scale-102 active:scale-98 transition-all"
              >
                <span>Check Scheme Eligibility</span>
                <ArrowUpRight size={16} />
              </Link>

              <button
                type="button"
                onClick={() => window.openLeadPopup?.('MSME Funding & Scheme Advisory')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#EA580C] hover:text-[#EA580C] text-[#374151] font-bold text-sm shadow-xs transition-colors"
              >
                <span>Talk to Funding Expert</span>
              </button>

              <a
                href={getWhatsAppLink('MSME funding advisory')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-sm transition-colors"
                aria-label="Contact Shreyyom on WhatsApp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-3 gap-3 max-w-lg text-left">
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-[#0F172A]">18+</p>
                <p className="text-[11px] sm:text-xs text-[#6B7280] font-medium leading-tight mt-0.5">Sovereign Schemes</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-[#EA580C]">₹100 Cr+</p>
                <p className="text-[11px] sm:text-xs text-[#6B7280] font-medium leading-tight mt-0.5">Subsidies Facilitated</p>
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-[#15803D]">99%</p>
                <p className="text-[11px] sm:text-xs text-[#6B7280] font-medium leading-tight mt-0.5">Filing Accuracy</p>
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: 3D/4D INDIA MAP & FUNDING MATCH SWITCHER ============ */}
          <div className="lg:col-span-6 xl:col-span-6 relative z-10">
            {/* View Switcher Pills */}
            <div className="flex items-center justify-end mb-3">
              <div className="inline-flex p-1 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveHeroTab('map')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeHeroTab === 'map'
                      ? 'bg-[#FEF3E2] text-[#EA580C] shadow-xs border border-[#FED7AA]'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                  aria-label="View Pan-India 3D Network Map"
                >
                  <Compass size={13} className={activeHeroTab === 'map' ? 'text-[#EA580C]' : ''} />
                  <span>Pan-India 3D Map</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHeroTab('match')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeHeroTab === 'match'
                      ? 'bg-[#FEF3E2] text-[#EA580C] shadow-xs border border-[#FED7AA]'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                  aria-label="View Funding Match Calculator"
                >
                  <span>✨ Funding Match</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT */}
            {activeHeroTab === 'map' ? (
              <div className="relative">
                <HeroMap3D onSelectState={(state) => navigate(`/funding?state=${state.id}`)} />
              </div>
            ) : (
              <div className="relative bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(6,26,18,0.08)] animate-in fade-in zoom-in-95 duration-200">

              {/* LIVE MATCHING BADGE (Top Right) */}
              <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#15803D] text-white text-[11px] font-bold tracking-wider uppercase shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200" />
                </span>
                <span>LIVE MATCHING</span>
              </div>

              {/* CARD HEADER */}
              <div className="mb-6 pr-24">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#EA580C] text-lg font-black">✨</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Funding Match
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  Tell us about your business — we'll find relevant schemes.
                </p>
              </div>

              {/* 2-COLUMN SELECT FORM */}
              <form onSubmit={handleMatchSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* 1. Business Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Business Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.businessType}
                        onChange={(e) => handleChange('businessType', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="private-limited">Private Limited Company</option>
                        <option value="llp">Limited Liability Partnership (LLP)</option>
                        <option value="opc">One Person Company (OPC)</option>
                        <option value="proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership Firm</option>
                        <option value="unregistered">New / Pre-incorporation Startup</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Business Age */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Business Age
                    </label>
                    <div className="relative">
                      <select
                        value={formData.businessAge}
                        onChange={(e) => handleChange('businessAge', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="idea">Idea Stage / New</option>
                        <option value="less-than-2">Less than 2 Years</option>
                        <option value="2-5-years">2 to 5 Years</option>
                        <option value="5-10-years">5 to 10 Years</option>
                        <option value="10-plus">10+ Years Established</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* 3. Annual Turnover */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Annual Turnover
                    </label>
                    <div className="relative">
                      <select
                        value={formData.annualTurnover}
                        onChange={(e) => handleChange('annualTurnover', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="zero">Pre-revenue / Zero</option>
                        <option value="under-25l">Below ₹25 Lakhs</option>
                        <option value="25l-1cr">₹25 Lakhs – ₹1 Crore</option>
                        <option value="1cr-5cr">₹1 Crore – ₹5 Crore</option>
                        <option value="5cr-25cr">₹5 Crore – ₹25 Crore</option>
                        <option value="25cr-plus">₹25 Crore+</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* 4. Funding Required */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Funding Required
                    </label>
                    <div className="relative">
                      <select
                        value={formData.fundingRequired}
                        onChange={(e) => handleChange('fundingRequired', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="5l-25l">₹5 Lakhs – ₹25 Lakhs</option>
                        <option value="25l-50l">₹25 Lakhs – ₹50 Lakhs</option>
                        <option value="50l-2cr">₹50 Lakhs – ₹2 Crore</option>
                        <option value="2cr-5cr">₹2 Crore – ₹5 Crore</option>
                        <option value="5cr-10cr">₹5 Crore – ₹10 Crore</option>
                        <option value="10cr-plus">₹10 Crore+</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* 5. Purpose */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Purpose
                    </label>
                    <div className="relative">
                      <select
                        value={formData.purpose}
                        onChange={(e) => handleChange('purpose', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="working-capital">Working Capital / Cash Credit</option>
                        <option value="machinery">Plant, Machinery & Equipment</option>
                        <option value="rnd">Technology R&D / Innovation Grant</option>
                        <option value="expansion">Business Expansion & Infrastructure</option>
                        <option value="80iac-tax">Section 80-IAC 100% Tax Holiday</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                  {/* 6. State */}
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      State
                    </label>
                    <div className="relative">
                      <select
                        value={formData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl bg-white border border-[#D1D5DB] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition-all cursor-pointer"
                      >
                        <option value="">Select</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi NCR</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="uttar-pradesh">Uttar Pradesh</option>
                        <option value="all-india">All India / Central Scheme</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Submit Match Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(234,88,12,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Find Matching Schemes & Subsidies</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Instant Guarantee note */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] pt-1">
                  <ShieldCheck size={14} className="text-[#15803D]" />
                  <span>Verified algorithms · 100% Free instant scheme assessment</span>
                </div>
              </form>

            </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
