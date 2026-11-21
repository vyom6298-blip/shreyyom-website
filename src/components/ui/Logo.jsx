import { Link } from 'react-router-dom';
import { SITE } from '../../lib/constants';

/**
 * Shreyyom Logo Component
 * Props:
 *  - size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
 *  - link: boolean (wrap in Link to '/')
 *  - height: number | string (optional override)
 *  - variant: 'light' | 'dark' | 'auto'
 *  - className: string (extra classes)
 */
export default function Logo({ size = 'md', link = true, height: customHeight, variant = 'auto', className = '' }) {
  const SIZES = {
    sm: 36,
    md: 48,
    lg: 58,
    xl: 72,
    '2xl': 88,
    '3xl': 104,
  };

  const calculatedHeight = typeof customHeight === 'number'
    ? customHeight
    : SIZES[size] || SIZES.md;

  const logoSrc = '/logo.png';

  const img = (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt={`${SITE.brandName} Logo`}
        style={{ height: typeof customHeight === 'string' ? customHeight : `${calculatedHeight}px`, width: 'auto' }}
        className="object-contain w-auto"
        draggable={false}
        loading="eager"
      />
    </div>
  );

  if (!link) return img;

  return (
    <Link
      to="/"
      className="inline-flex items-center transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
      aria-label={`${SITE.brandName} Home`}
    >
      {img}
    </Link>
  );
}
