import { useState, useRef, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { INDIA_MAP_DATA } from '../../data/indiaMapData';

// City network coordinates on viewBox 0 0 612 696
const NETWORK_NODES = [
  { name: 'Delhi', x: 258, y: 195, tag: 'Northern Hub' },
  { name: 'Kolkata', x: 420, y: 340, tag: 'Eastern Hub' },
  { name: 'Mumbai', x: 168, y: 380, tag: 'Financial Capital' },
  { name: 'Hyderabad', x: 260, y: 430, tag: 'Tech Corridor' },
  { name: 'Bengaluru', x: 235, y: 510, tag: 'Innovation Hub' },
  { name: 'Chennai', x: 305, y: 500, tag: 'Industrial Corridor' },
];

// Ahmedabad HQ precisely positioned inside Gujarat (23.02°N, 72.57°E)
const AHMEDABAD_HQ = { x: 90, y: 340, name: 'Ahmedabad' };

export default function HeroMap3D({ onSelectState }) {
  const [hoveredState, setHoveredState] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 4D Interactive Perspective Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -(y * 10), // Tilts up/down
      y: x * 10,   // Tilts left/right
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    setHoveredState(null);
    setHoveredCity(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center select-none overflow-x-clip"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Tilted Wrapper */}
      <div
        className="relative w-full max-w-[500px] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ============ FLOATING 3D CARD: COMPASS RADAR (Top-Right) ============ */}
        <div
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20"
          style={{ transform: `translateZ(${isHovered ? '30px' : '15px'})` }}
        >
          <div
            className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#FED7AA] flex items-center justify-center shadow-md transition-transform duration-300 hover:rotate-45"
            title="Pan-India Sovereign Map Explorer"
          >
            <Compass className="w-5 h-5 text-[#EA580C] transition-transform duration-300" />
          </div>
        </div>

        {/* ============ MAIN 3D VECTOR MAP SVG CONTAINER ============ */}
        <div
          className="relative w-full max-w-[440px] mx-auto mt-6 sm:mt-10"
          style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
        >
          <svg
            viewBox={INDIA_MAP_DATA.viewBox}
            className="w-full h-auto drop-shadow-[0_20px_35px_rgba(6,26,18,0.14)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sovereign Emerald Green Map Gradient (Exact brand alignment, 0% blue) */}
              <linearGradient id="shreyIndiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#15803D" />
                <stop offset="50%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>

              {/* Hover Highlight Gradient (Vibrant Saffron Sunrise) */}
              <linearGradient id="stateHoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>

              {/* 3D Depth Shadow Filter */}
              <filter id="indiaMapGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="2" dy="6" stdDeviation="8" floodOpacity="0.2" floodColor="#061A12" />
              </filter>
            </defs>

            {/* All 36 Indian States & UTs with interactive hover */}
            <g filter="url(#indiaMapGlow)">
              {INDIA_MAP_DATA.locations.map((loc) => {
                const isCurrentHovered = hoveredState?.id === loc.id;
                const isGujarat = loc.id === 'gj' || loc.name.toLowerCase().includes('gujarat');

                return (
                  <path
                    key={loc.id}
                    d={loc.path}
                    className="transition-all duration-200 cursor-pointer"
                    fill={
                      isCurrentHovered
                        ? 'url(#stateHoverGradient)'
                        : isGujarat
                        ? '#059669' // Distinct highlighted tint for Gujarat (Shreyyom Home State)
                        : 'url(#shreyIndiaGradient)'
                    }
                    stroke={isCurrentHovered ? '#FFFFFF' : '#064E3B'}
                    strokeWidth={isCurrentHovered ? '1.5' : '0.55'}
                    strokeOpacity={isCurrentHovered ? '1' : '0.75'}
                    onMouseEnter={() => setHoveredState(loc)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => onSelectState && onSelectState(loc)}
                  />
                );
              })}
            </g>

            {/* Connecting Flight Arcs from Ahmedabad HQ to Metros */}
            <g
              stroke="#EA580C"
              strokeWidth="1.8"
              fill="none"
              opacity="0.5"
              strokeDasharray="6 5"
              className="pointer-events-none"
            >
              {NETWORK_NODES.map((city) => (
                <path
                  key={city.name}
                  d={`M ${AHMEDABAD_HQ.x},${AHMEDABAD_HQ.y} Q ${(AHMEDABAD_HQ.x + city.x) / 2 + 20},${(AHMEDABAD_HQ.y + city.y) / 2 - 20} ${city.x},${city.y}`}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-22"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
              ))}
            </g>

            {/* City Nodes */}
            {NETWORK_NODES.map((city) => {
              const isCityHovered = hoveredCity?.name === city.name;

              return (
                <g
                  key={city.name}
                  className="cursor-pointer transition-transform duration-200"
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isCityHovered ? '8' : '6'}
                    fill="white"
                    stroke="#EA580C"
                    strokeWidth={isCityHovered ? '2.5' : '1.8'}
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isCityHovered ? '3.5' : '2.5'}
                    fill="#EA580C"
                  />
                  <text
                    x={city.x + 10}
                    y={city.y + 4}
                    fontSize="13"
                    fontWeight="700"
                    fill="#1F2937"
                    fontFamily="'Sora', 'Inter', system-ui, sans-serif"
                    className="select-none drop-shadow-xs"
                  >
                    {city.name}
                  </text>
                </g>
              );
            })}

            {/* ============ AHMEDABAD HQ RADAR BEACON ============ */}
            <g className="cursor-pointer">
              {/* Radar Pulsing Wave 1 */}
              <circle
                cx={AHMEDABAD_HQ.x}
                cy={AHMEDABAD_HQ.y}
                r="16"
                fill="#EA580C"
                opacity="0.35"
              >
                <animate
                  attributeName="r"
                  values="12;32;12"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.02;0.4"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Radar Pulsing Wave 2 (delayed) */}
              <circle
                cx={AHMEDABAD_HQ.x}
                cy={AHMEDABAD_HQ.y}
                r="24"
                fill="#EA580C"
                opacity="0.2"
              >
                <animate
                  attributeName="r"
                  values="16;40;16"
                  dur="2.2s"
                  begin="0.7s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0;0.3"
                  dur="2.2s"
                  begin="0.7s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Outer White Glow Ring */}
              <circle
                cx={AHMEDABAD_HQ.x}
                cy={AHMEDABAD_HQ.y}
                r="12"
                fill="#EA580C"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="drop-shadow-md"
              />

              {/* Center HQ text in beacon */}
              <text
                x={AHMEDABAD_HQ.x}
                y={AHMEDABAD_HQ.y + 3.2}
                fontSize="8.5"
                fontWeight="900"
                fill="#FFFFFF"
                textAnchor="middle"
                fontFamily="'Sora', 'Inter', system-ui, sans-serif"
                letterSpacing="0.04em"
              >
                HQ
              </text>
            </g>
          </svg>

          {/* Floating Ahmedabad Pill Badge (Mathematically anchored to HQ beacon at 14.7%, 48.8%) */}
          <div
            className="absolute z-20 pointer-events-none transition-transform duration-300"
            style={{
              left: '14.7%',
              top: '48.8%',
              transform: `${isMobile ? 'translate(14px, -50%)' : 'translate(-108%, -50%)'} translateZ(${isHovered ? '38px' : '24px'})`,
            }}
          >
            <div className="bg-[#EA580C] text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-[0_8px_20px_rgba(234,88,12,0.4)] text-[10px] sm:text-xs font-extrabold whitespace-nowrap flex items-center gap-1.5 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Ahmedabad</span>
            </div>
          </div>
        </div>

        {/* ============ FLOATING 3D CARD 4: PAN-INDIA REACH (Bottom-Right) ============ */}
        <div
          className="absolute -bottom-2 right-2 sm:bottom-2 sm:right-2 z-20 transition-transform duration-500 ease-in-out pointer-events-none"
          style={{
            transform: `translateZ(${isHovered ? '35px' : '20px'})`,
            animation: 'heroFloat 4.2s ease-in-out infinite 1.2s',
          }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_15px_35px_rgba(6,26,18,0.1)] border border-[#E5E7EB]">
            <p className="text-[9px] sm:text-[10px] font-bold text-[#EA580C] uppercase tracking-wider">
              HQ AHMEDABAD
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
              <p className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                Pan-India Reach
              </p>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM LEGEND (Matches screenshot) ============ */}
        <div
          className="mt-4 sm:mt-6 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold text-[#4B5563]"
          style={{ transform: 'translateZ(15px)' }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
            <span>HQ (Ahmedabad)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#6B7280] bg-white" />
            <span>Metro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#15803D]" />
            <span>State Network</span>
          </div>
        </div>

        {/* ============ LIVE STATE HOVER TOOLTIP ============ */}
        {hoveredState && (
          <div
            className="absolute bottom-14 left-1/2 -translate-x-1/2 z-40 bg-[#061A12]/95 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#166534] pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
            style={{ transform: 'translateZ(60px) translateX(-50%)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="font-bold text-white">{hoveredState.name}</span>
              <span className="text-[10px] text-gray-300">· Central & State Subsidies Active</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Animation Keyframe injected once */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) translateZ(30px); }
          50% { transform: translateY(-7px) translateZ(30px); }
        }
      `}</style>
    </div>
  );
}
