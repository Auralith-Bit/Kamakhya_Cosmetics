import React from 'react';
import { Link } from 'react-router-dom';
import aboutHeroBg from '../../assets/abouthero.png';

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);

const Chev = () => (
  <svg width="7" height="11" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      aria-label="About Hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '23.4375vw',
        overflow: 'hidden',
        backgroundColor: '#f5e6d3',
      }}
    >
      {/* Full-width background image */}
      <img
        src={aboutHeroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* Left-side gradient overlay for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(245,230,211,0.78) 0%, rgba(245,230,211,0.62) 35%, rgba(245,230,211,0.18) 58%, rgba(245,230,211,0) 70%)',
          pointerEvents: 'none',
        }}
      />

{/* Content overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          minHeight: '23.4375vw',
          width: '100%',
          boxSizing: 'border-box',
          padding: '0 clamp(20px, 8.68vw, 125px)',
        }}
      >
        {/* Left Text Panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(6px, 0.9vw, 14px)',
            maxWidth: 'clamp(260px, 38vw, 540px)',
            padding: 'clamp(20px, 4vw, 56px) 0',
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(11px, 0.85vw, 14px)',
              fontWeight: 700,
              color: '#2e3192',
            }}
          >
            <HomeIcon />
            <Link
              to="/"
              style={{ color: '#2e3192', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E38F2E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#2e3192')}
            >
              Home
            </Link>
            <Chev />
            <span style={{ color: '#2e3192' }}>About</span>
          </nav>

          {/* Orange tagline */}
          <p
            style={{
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(12px, 1vw, 16px)',
              fontWeight: 500,
              color: '#E38F2E',
              lineHeight: 1.2,
            }}
          >
            We Believe in Beauty
          </p>

          {/* Orange underline accent */}
          <div
            style={{
              width: 'clamp(32px, 2.6vw, 50px)',
              height: '2.5px',
              borderRadius: '2px',
              background: '#E38F2E',
              marginTop: '-4px',
            }}
          />

          {/* Main heading */}
          <h1
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', 'Playfair', serif",
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.6vw, 52px)',
              lineHeight: 1.12,
              color: '#2e3192',
              letterSpacing: '-0.3px',
            }}
          >
            Our Story
          </h1>

          {/* Description */}
          <p
            style={{
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(11.5px, 0.88vw, 14px)',
              lineHeight: 1.75,
              color: '#5a5a6e',
              maxWidth: '400px',
            }}
          >
            Discover Kamakhya Cosmetics — where beauty, care, and trust come together
            to make everyday self-care special.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
