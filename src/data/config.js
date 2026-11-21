export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '916353818863';
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '+91 63538 18863';
export const EMAIL = import.meta.env.VITE_EMAIL || 'info@shreyyom.com';
export const OFFICE_ADDRESS =
  import.meta.env.VITE_OFFICE_ADDRESS ||
  'B/23, Manila Society, Near Naranpura Railway Crossing, Shastrinagar, Ahmedabad, Gujarat – 380013, India';
export const WORKING_HOURS = import.meta.env.VITE_WORKING_HOURS || 'Monday–Saturday, 9:00 AM–7:00 PM IST';
export const WEBSITE = import.meta.env.VITE_WEBSITE || 'www.shreyyom.com';

export const getWhatsAppLink = (context = '') => {
  const msg = context
    ? `Hello Shreyyom Team, I would like professional assistance regarding ${context}. Please guide me about eligibility, documents and process.`
    : `Hello Shreyyom Team, I would like professional assistance regarding funding and government schemes. Please guide me about eligibility, documents and process.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
