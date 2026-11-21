import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppLink } from '../../lib/constants';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-[400] flex flex-col items-center gap-3 pointer-events-auto">
      {/* WhatsApp Floating Button (Vibrant Green) */}
      <a
        href={getWhatsAppLink('Instant Website Inquiry')}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(22,163,74,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 group relative"
        aria-label="Chat with Shreyyom on WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white/20" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-gray-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          WhatsApp Support
        </span>
      </a>

      {/* Direct Phone Call Button (Vibrant Orange) */}
      <a
        href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(234,88,12,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 group relative"
        aria-label="Call Shreyyom Advisory Helpline"
      >
        <Phone size={24} className="text-white fill-white/20" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-gray-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
          Direct Helpline: +91 6353818863
        </span>
      </a>
    </div>
  );
}
