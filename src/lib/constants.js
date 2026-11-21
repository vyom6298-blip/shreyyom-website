export const SITE = {
  name: 'Shreyyom',
  shortName: 'Shreyyom',
  brandName: 'Shreyyom Consultancy',
  fullName: 'Shreyyom Consultancy (OPC) Private Limited',
  director: 'Vyom Suthar',
  tagline: 'TURNING BUSINESS POTENTIAL INTO FUNDED REALITY',
  taglineShort: 'Turning Business Potential into Funded Reality',
  taglineHindi: 'बिज़नेस के सपनों को हकीकत में बदलने का सफर — भरोसा आपका, जिम्मेदारी हमारी',
  phone: '+91 63538 18863',
  whatsapp: '916353818863',
  email: 'info@shreyyom.com',
  address: 'B/23, Manila Society, Near Naranpura Railway Crossing, Shastrinagar, Ahmedabad, Gujarat – 380013, India',
  hours: 'Monday–Saturday, 9:00 AM–7:00 PM IST',
  website: 'www.shreyyom.com',
  domain: 'https://shreyyom.com',
};

export const getWhatsAppLink = (context = '') => {
  const msg = context
    ? `Hello Shreyyom Team, I would like professional assistance regarding ${context}. Please guide me on eligibility, documentation checklist and execution roadmap.`
    : `Hello Shreyyom Advisory Team, I would like professional funding & consultancy assistance for my venture. Please guide me regarding MSME loans, government schemes, DPIIT/80-IAC, and subsidies.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
};

/* ============ CONVENIENCE EXPORTS ============ */
export const WHATSAPP_NUMBER = SITE.whatsapp;
export const PHONE_NUMBER = SITE.phone;
export const EMAIL = SITE.email;
export const OFFICE_ADDRESS = SITE.address;
export const WORKING_HOURS = SITE.hours;
export const WEBSITE = SITE.website;
