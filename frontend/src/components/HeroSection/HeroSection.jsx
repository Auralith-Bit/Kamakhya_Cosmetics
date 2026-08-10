import React from 'react';
import heroImage from '../../assets/shine1.png';
import badgeDiamond from '../../assets/ion_diamond-outline.png';
import badgeCertificate from '../../assets/certificate.png';
import badgeLeaf from '../../assets/leaf.png';
import badgeEnergy from '../../assets/energy.png';

const TRUST_BADGES = [
  {
    id: 'badge-quality',
    image: badgeDiamond,
    label1: 'Premium',
    label2: 'Quality',
  },
  {
    id: 'badge-ingredients',
    image: badgeLeaf,
    label1: 'Safe & Pure',
    label2: 'Ingredients',
  },
  {
    id: 'badge-certified',
    image: badgeCertificate,
    label1: 'ISO',
    label2: 'Certified',
  },
  {
    id: 'badge-eco',
    image: badgeEnergy,
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
        height: 'calc((100vw - 242px) * 9 / 16)',
        minHeight: '600px',
        background: 'linear-gradient(120deg, #f8ede0 0%, #f5e8d8 35%, #f0e0cc 100%)',
        overflow: 'hidden',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      
      <div
        className="hero-image-wrap"
        style={{
          position: 'absolute',
          left: '242px',
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

       
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(18px, 1.82vw, 35px)', height: 'clamp(30px, 3.18vw, 61px)', margin: '-40px 0 0' }}>
          {/* Primary - filled blue */}
          <a
            href="#contact"
            id="hero-cta-quote"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'clamp(121px, 12.6vw, 242px)',
              height: '100%',
              gap: 'clamp(5px, 0.52vw, 10px)',
              padding: '0 clamp(14px, 1.56vw, 30px)',
              borderRadius: 'clamp(4px, 0.36vw, 7px)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background: '#2E3192',
              border: '3px solid #252775',
              color: '#ffffff',
              boxSizing: 'border-box',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
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
              justifyContent: 'center',
              width: 'clamp(109px, 11.35vw, 218px)',
              height: '100%',
              gap: 'clamp(5px, 0.52vw, 10px)',
              padding: '0 clamp(14px, 1.56vw, 30px)',
              borderRadius: 'clamp(4px, 0.36vw, 7px)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              background: '#FCFAF7',
              border: '3px solid #CCA466',
              color: '#CCA466',
              boxSizing: 'border-box',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
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
              {badge.image ? (
                <img
                  src={badge.image}
                  alt={`${badge.label1} ${badge.label2}`}
                  style={{
                    width: '41px',
                    height: '48px',
                    objectFit: 'contain',
                    opacity: 1,
                    transform: 'rotate(0deg)',
                    display: 'block',
                  }}
                />
              ) : (
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1.5px solid #d4b06a',
                  background: 'rgba(255,255,255,0.55)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {badge.icon}
                </div>
              )}
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: 1,
                letterSpacing: '0',
                textAlign: 'center',
                color: '#333333',
              }}>
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
