import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ label = 'Back', className = '' }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-graphite hover:text-[#EA580C] transition-all duration-300 ${className}`}
      aria-label="Go back"
    >
      <span className="w-8 h-8 rounded-full bg-white border border-line group-hover:border-[#FED7AA] group-hover:bg-[#FFF7ED] flex items-center justify-center transition-all shadow-sm">
        <ArrowLeft size={13} strokeWidth={2.5} className="text-graphite group-hover:text-[#EA580C] group-hover:-translate-x-0.5 transition-all" />
      </span>
      <span>{label}</span>
    </button>
  );
}
