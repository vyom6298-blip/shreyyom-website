import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from '../../lib/gsap';

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  strength = 0.25,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const setX = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power2.out' });
    const setY = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power2.out' });

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setX(x * strength);
      setY(y * strength);
    };
    const onLeave = () => { setX(0); setY(0); };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  const variants = {
    primary: 'bg-[#EA580C] text-white hover:bg-[#C2410C] shadow-[0_10px_25px_-8px_rgba(234,88,12,0.45)]',
    orange: 'bg-[#EA580C] text-white hover:bg-[#C2410C] shadow-[0_10px_25px_-8px_rgba(234,88,12,0.45)]',
    green: 'bg-[#15803D] text-white hover:bg-[#166534] shadow-[0_10px_25px_-8px_rgba(21,128,61,0.4)]',
    forest: 'bg-[#061A12] text-white hover:bg-[#0A241A] border border-[#166534]/50 shadow-md',
    outline: 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#EA580C] hover:text-[#EA580C] shadow-sm',
    blue: 'bg-[#EA580C] text-white hover:bg-[#C2410C] shadow-[0_10px_25px_-8px_rgba(234,88,12,0.45)]',
    gold: 'bg-[#EA580C] text-white hover:bg-[#C2410C] shadow-[0_10px_25px_-8px_rgba(234,88,12,0.45)]',
    whatsapp: 'bg-[#16A34A] text-white hover:bg-[#15803D] shadow-[0_10px_25px_-8px_rgba(22,163,74,0.35)]',
    ghost: 'text-[#1F2937] hover:bg-[#EA580C]/10 hover:text-[#EA580C]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wide',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide',
  };

  const base = `group relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 will-change-transform active:scale-[0.98] ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (to) return <Link ref={ref} to={to} className={base} {...rest}>{inner}</Link>;
  if (href) return <a ref={ref} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={base} {...rest}>{inner}</a>;
  return <button ref={ref} onClick={onClick} className={base} {...rest}>{inner}</button>;
}
