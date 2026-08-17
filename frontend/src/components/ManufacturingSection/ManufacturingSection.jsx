import React from 'react';
import manufacturingImg from '../../assets/scientist.png';

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M9 3v7.2c0 .3-.2.6-.4.8L5 14.4V18a2 2 0 002 2h10a2 2 0 002-2v-3.6l-3.6-3.4c-.2-.2-.4-.5-.4-.8V3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3h6" strokeLinecap="round"/>
        <path d="M12 13v4" strokeLinecap="round"/>
        <path d="M10 17h4" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Advanced\nManufacturing',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M12 2L3 7v6c0 5.25 3.75 10.13 9 11.25C17.25 23.13 21 18.25 21 13V7l-9-5z" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Quality\nAssurance',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <circle cx="12" cy="8" r="6"/>
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'International\nCertifications',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Sustainable\nPractices',
  },
];

const ManufacturingSection = () => {
  return (
    <section
      id="manufacturing"
      aria-label="Manufacturing Standards"
      className="w-full py-[85px] box-border max-sm:py-10"
      style={{ background: '#f5f6f8' }}
    >
      <div className="w-full px-[125px] max-lg:px-8 max-sm:px-5 grid grid-cols-2 items-center gap-[70px] max-lg:grid-cols-1 max-lg:gap-9">

        {/* ── LEFT: exactly as it was previously ── */}
        <div className="flex flex-col">
          {/* Label */}
          <span
            style={{
              fontFamily: FONT_BODY,
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#E38F2E',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            MANUFACTURING STANDARDS
          </span>
          <div style={{ width: '42px', height: '2px', background: '#E38F2E', marginBottom: '16px' }} />

          {/* Heading */}
          <h2
            style={{
              fontFamily: FONT_TITLE,
              fontSize: 'clamp(26px, 2.2vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.25,
              margin: 0,
              marginBottom: '16px',
            }}
          >
            <span style={{ color: '#2E3192' }}>The World-Class </span>
            <span style={{ color: '#E38F2E' }}>Manufacturing</span>
            <span style={{ color: '#2E3192' }}>, You Can Trust</span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: 'clamp(13.5px, 0.95vw, 15px)',
              lineHeight: 1.7,
              color: '#666',
              margin: 0,
              marginBottom: '32px',
            }}
          >
            State-of-the-art facilities, strict quality standards, &amp; expert professionals
            ensure every product meets global benchmarks. From sourcing to final
            packaging, excellence is embedded in every stage of the process.
          </p>

          {/* Features row */}
          <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-sm:gap-y-6 mb-[36px]">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-[52px] h-[52px] rounded-full border border-[#E8D6B8] flex items-center justify-center text-[#E38F2E]"
                >
                  {f.icon}
                </div>
                <span
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#292929',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.4,
                  }}
                >
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#manufacturing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: '#2E3192',
                color: '#fff',
                fontFamily: FONT_BODY,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#252775'}
              onMouseLeave={e => e.currentTarget.style.background = '#2E3192'}
            >
              EXPLORE MANUFACTURING
            </a>
          </div>
        </div>

        {/* ── RIGHT: improved to match the design ── */}
        <div
          className="relative w-full"
          style={{
            aspectRatio: '1.48 / 1',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          }}
        >
          {/* photo fills the frame */}
          <img
            src={manufacturingImg}
            alt="Kamakhya Cosmetics – Scientist"
            className="absolute inset-0 w-full h-full object-cover block"
          />

          {/* indigo wash overlay */}
          <div className="absolute inset-0" style={{ background: 'rgba(46,49,146,0.42)' }} />

          {/* play tile 90×80 with outlined triangle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center cursor-pointer"
              style={{
                width: '65px',
                height: '55px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d1f4e" strokeWidth="1.8" width="24" height="24">
                <path d="M8.5 5.5v13l11-6.5z" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingSection;