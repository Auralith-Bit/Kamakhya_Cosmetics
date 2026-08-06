import React from 'react';
import heroImage from '../../assets/shine1.png';

const TRUST_BADGES = [
  {
    id: 'badge-quality',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#c9a24b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 14.52l-5.62 3.97 2.09-6.26L3 8.26h6.91z" />
      </svg>
    ),
    label1: 'Premium',
    label2: 'Quality',
  },
  {
    id: 'badge-ingredients',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#c9a24b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label1: 'Safe & Pure',
    label2: 'Ingredients',
  },
  {
    id: 'badge-certified',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#c9a24b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="14" rx="2" />
        <path d="M9 17v4M15 17v4M7 21h10" />
        <path d="M9 10l2 2 4-4" />
      </svg>
    ),
    label1: 'ISO',
    label2: 'Certified',
  },
  {
    id: 'badge-eco',
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#c9a24b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M5 12c0-4.4 3.1-8 7-8s7 3.6 7 8" />
        <path d="M5 12c1.8-1.3 4-2 7-2s5.2.7 7 2" />
      </svg>
    ),
    label1: 'Eco',
    label2: 'Conscious',
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero Banner"
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 130px)',
        minHeight: '840px',
        maxHeight: '900px',
        background: 'linear-gradient(120deg, #f8ede0 0%, #f5e8d8 35%, #f0e0cc 100%)',
        overflow: 'hidden',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* ── HERO IMAGE ──
          Converted from 1920px design (scale = 1280/1920 = 2/3):
          design width 1572 → 1048px
          design height 885  → 590px
          design left 348    → 232px
          0px padding on the right, 40px on the left
      */}
      <div
        className="hero-image-wrap"
        style={{
          position: 'absolute',
          left: '232px',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%',
          zIndex: 1,
        }}
      >
        <img
          src={heroImage}
          alt="Kamakhya Cosmetics – Shine and Royal Luxury product collection"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            display: 'block',
          }}
        />
      </div>

      {/* ── LEFT CONTENT ──
          Converted from 1920px design (scale = viewport / 1920):
          design width 726 → 37.81vw
          design height 690 → 63.89vh
          design top 100   → 9.26vh
          design left 170  → 8.85vw
          design gap 88    → 4.58vw
      */}
      <div
        className="hero-content"
        style={{
          position: 'absolute',
          left: 'clamp(40px, 8.85vw, 170px)',
          top: 'clamp(40px, 9.26vh, 100px)',
          width: 'clamp(300px, 37.81vw, 726px)',
          height: 'auto',
          minHeight: 'clamp(460px, 63.89vh, 690px)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 'clamp(20px, 4.58vw, 88px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Premium label
            Design specs (1920px): Playfair / 700 / Bold / 36px / line-height 100% / letter-spacing 0% / bg #E38F2E
            Converted font-size 36 → clamp(18px, 1.875vw, 36px)
        */}
        <p style={{
          fontFamily: "'Playfair Display', 'Playfair', serif",
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: 'clamp(18px, 1.875vw, 36px)',
          lineHeight: 1,
          letterSpacing: '0',
          color: '#E38F2E',
          margin: '0',
          textTransform: 'uppercase',
        }}>
          Premium Beauty &amp; Home Care
        </p>

        {/* Main headline
            Design specs (1920px): Playfair / 700 / Bold / 86px / line-height 96px / letter-spacing 0% / color #2E3192
            Converted font-size 86 → clamp(30px, 4.48vw, 86px); line-height 96/86 = 1.12
            Reduced text by 10px → clamp(25px, 3.96vw, 76px); margin reduced by 20px
        */}
        <h1 style={{
          fontFamily: "'Playfair Display', 'Playfair', serif",
          fontWeight: 700,
          fontStyle: 'normal',
          fontSize: 'clamp(25px, 3.96vw, 76px)',
          lineHeight: 1.12,
          letterSpacing: '0',
          color: '#2E3192',
          textTransform: 'uppercase',
          margin: '-40px 0',
        }}>
          Beauty Crafted<br />With Care
        </h1>

        {/* Description
            Design specs (1920px): Poppins / 500 / Medium / 20px / line-height 100% / letter-spacing 0% / color #333333
            Converted font-size 20 → clamp(13px, 1.04vw, 20px)
            Text size +1px → clamp(14px, 1.09vw, 21px); line gap +2px → line-height 1.1
        */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: 'clamp(14px, 1.09vw, 21px)',
          lineHeight: 1.2,
          letterSpacing: '0',
          color: '#333333',
          margin: '0',
        }}>
          Premium cosmetics and household solutions <br /> crafted with trusted ingredients and modern <br />
          innovation for everyday living
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {/* Primary - filled blue */}
          <a
            href="#contact"
            id="hero-cta-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background: '#2e3192',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#20236f'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2e3192'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            REQUEST QUOTE
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline' }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>

          {/* Secondary - gold outline */}
          <a
            href="#about"
            id="hero-cta-about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background: 'transparent',
              color: '#c9a24b',
              border: '2px solid #c9a24b',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9a24b'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a24b'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            ABOUT US
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline' }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }} role="list">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              id={badge.id}
              role="listitem"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '52px' }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1.5px solid #d4b06a',
                background: 'rgba(255,255,255,0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {badge.icon}
              </div>
              <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#444', textAlign: 'center', lineHeight: 1.3 }}>
                {badge.label1}<br />{badge.label2}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive fallback for smaller screens */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-section { height: auto; min-height: auto; display: flex; flex-direction: column; padding-bottom: 40px; }
          .hero-image-wrap { position: static; transform: none; width: 100%; max-width: 1048px; height: auto; aspect-ratio: 16 / 9; margin: 0 auto; order: -1; }
          .hero-content { position: static; width: 100%; height: auto; gap: 24px; padding: 40px 24px; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
