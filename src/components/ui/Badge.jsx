export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]',
    brand: 'bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]',
    green: 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]',
    gold: 'bg-gold-soft text-gold-deep border-gold/20',
    ink: 'bg-ink/5 text-ink border-ink/10',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}