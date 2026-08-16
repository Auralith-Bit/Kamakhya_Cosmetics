import React from 'react';
import shineProduct from '../../assets/fenyl.jpg';
import royalProduct from '../../assets/makeup.jpg';
import kamakhyaLogo from '../../assets/Group 9.png';
import shineBadge from '../../assets/girl.png';
import royalBadge from '../../assets/crown.png';

/* ─── Feature icon SVGs ─────────────────────────────────────────────── */
const ShineIcons = {
  PowerfulPerformance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  EcoConscious: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M2 22c0 0 4-8 10-8s10 8 10 8" strokeLinecap="round"/>
      <path d="M12 14V6" strokeLinecap="round"/>
      <path d="M12 6C12 6 8 9 8 12" strokeLinecap="round"/>
      <path d="M12 6C12 6 16 9 16 12" strokeLinecap="round"/>
    </svg>
  ),
  GermProtection: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5Z" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  RefreshingFragrance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M12 22C12 22 5 16 5 10a7 7 0 0114 0c0 6-7 12-7 12z" strokeLinejoin="round"/>
      <path d="M12 10v3M10.5 11.5h3" strokeLinecap="round"/>
    </svg>
  ),
};

const RoyalIcons = {
  PremiumIngredients: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M12 2L14 8H20.5L15.5 12L17.5 18L12 14.5L6.5 18L8.5 12L3.5 8H10Z" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  SkinTested: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 12.5l2.5 2.5 5.5-5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ParabenFree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <circle cx="12" cy="12" r="9"/>
      <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round"/>
    </svg>
  ),
  CrueltyFree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round"/>
    </svg>
  ),
};

const shineFeatures = [
  { label: 'Powerful\nPerformance', icon: ShineIcons.PowerfulPerformance },
  { label: 'Eco\nConscious',       icon: ShineIcons.EcoConscious },
  { label: 'Germ\nProtection',     icon: ShineIcons.GermProtection },
  { label: 'Refreshing\nFragrance',icon: ShineIcons.RefreshingFragrance },
];

const royalFeatures = [
  { label: 'Premium\nIngredients', icon: RoyalIcons.PremiumIngredients },
  { label: 'Skin\nTested',         icon: RoyalIcons.SkinTested },
  { label: 'Paraben\nFree',        icon: RoyalIcons.ParabenFree },
  { label: 'Cruelty\nFree',        icon: RoyalIcons.CrueltyFree },
];

/* ─── Decorative cursive underline ─────────────────────────────────── */
const CursiveUnderline = () => (
  <svg
    viewBox="0 0 160 28"
    width="130"
    height="22"
    fill="none"
    aria-hidden="true"
    style={{ display: 'block', margin: '4px auto 0' }}
  >
    <path
      d="M10 16 Q40 4 80 14 Q120 24 150 10"
      stroke="#c9a24b"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M22 22 Q55 10 95 20 Q130 28 158 16"
      stroke="#c9a24b"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.55"
    />
  </svg>
);

/* ─── Brand Card ────────────────────────────────────────────────────── */
const BrandCard = ({
  image,
  badge,
  badgeBg,
  badgeSide,
  categoryTag,
  brandName,
  brandColor,
  tagline,
  description,
  features,
}) => (
  <div style={{
    background: '#fff',
    borderRadius: '14px',
    boxShadow: '0 4px 28px rgba(0,0,0,0.09)',
    overflow: 'hidden',
    width: 'min(430px, 100%)',
    flexShrink: 0,
  }}>
    {/* Image area */}
    <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
      <img
        src={image}
        alt={brandName}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,18,48,0.82) 0%, rgba(10,18,48,0.18) 55%, transparent 100%)',
      }} />

      {/* Ribbon badge */}
      <div style={{
        position: 'absolute',
        top: 0,
        [badgeSide]: 0,
        width: '52px',
        height: '70px',
        background: badgeBg,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '8px',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
      }}>
        <img
          src={badge}
          alt=""
          style={{ width: '28px', height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Bottom text overlay */}
      <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
        <p style={{
          margin: 0,
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: 1.3,
        }}>
          100+ Product Variants
        </p>
        <p style={{
          margin: '5px 0 0',
          color: '#c9a24b',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
          </svg>
          {categoryTag}
        </p>
      </div>
    </div>

    {/* Card body */}
    <div style={{
      padding: '22px 28px 26px',
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <h3 style={{
        margin: 0,
        fontFamily: "'Playfair Display', serif",
        fontSize: '26px',
        fontWeight: 700,
        color: brandColor,
        lineHeight: 1.2,
      }}>
        {brandName}
      </h3>

      <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#c9a24b', fontWeight: 500 }}>
        {tagline}
      </p>

      {/* Dashed separator */}
      <div style={{
        width: '64px',
        height: 0,
        margin: '12px auto 14px',
        borderTop: `1.5px dashed ${brandColor}`,
      }} />

      <p style={{ margin: 0, fontSize: '13px', color: '#777', lineHeight: 1.65 }}>
        {description}
      </p>

      {/* Features grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px 6px',
        marginTop: '18px',
        marginBottom: '20px',
      }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: `1.5px solid ${brandColor}`,
              color: brandColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {f.icon}
            </div>
            <span style={{
              fontSize: '10.5px',
              color: brandColor,
              lineHeight: 1.35,
              whiteSpace: 'pre-line',
              textAlign: 'center',
              fontWeight: 500,
            }}>
              {f.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <button
        style={{
          width: '100%',
          padding: '11px 0',
          borderRadius: '8px',
          border: `1.5px solid ${brandColor}`,
          background: 'transparent',
          color: brandColor,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '0.2px',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = brandColor; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = brandColor; }}
      >
        Explore Colletctions →
      </button>
    </div>
  </div>
);

/* ─── Main Section ──────────────────────────────────────────────────── */
const BrandsSection = () => (
  <section style={{ background: '#fdfaf6', padding: '72px 0 80px', overflow: 'hidden' }}>
    <div className="px-[170px] max-lg:px-8 max-sm:px-5">

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <p style={{
          margin: 0,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          color: '#c9a24b',
          letterSpacing: '3.5px',
          textTransform: 'uppercase',
        }}>
          OUR BRANDS
        </p>

        <h2 style={{
          margin: '8px 0 0',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(26px, 3.2vw, 34px)',
          fontWeight: 700,
          color: '#1a1a5c',
          lineHeight: 1.25,
        }}>
          Two Brands, One Promise
        </h2>

        <CursiveUnderline />

        <p style={{
          margin: '14px auto 0',
          fontFamily: 'Poppins, sans-serif',
          fontSize: 'clamp(13px, 1.4vw, 14.5px)',
          color: '#666',
          lineHeight: 1.7,
          maxWidth: '580px',
        }}>
          Kamakhya Cosmetics brings you two distinctive brands crafted with premium ingredients
          and advanced care, delivering exceptional beauty every day.
        </p>
      </div>

      {/* Three-column: card | connector | card */}
      <div className="flex items-center justify-between gap-0 max-lg:flex-col max-lg:gap-10" style={{ display: 'flex' }}>

        {/* Left card – Shine */}
        <BrandCard
          image={shineProduct}
          badge={shineBadge}
          badgeBg="#1a5c2a"
          badgeSide="right"
          categoryTag="Everyday home care"
          brandName="Shine"
          brandColor="#1a5c2a"
          tagline="Fresh & Clean"
          description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
          features={shineFeatures}
        />

        {/* Center connector */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '250px',
        }}>
          {/* Horizontal dashes + circle */}
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c9a24b', flexShrink: 0, zIndex: 2 }} />
            <div style={{ flex: 1, height: 0, borderTop: '1.5px dashed #c9a24b' }} />
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              border: '1.5px solid rgba(201,162,75,0.45)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 18px rgba(201,162,75,0.12)',
              zIndex: 2,
            }}>
              <img
                src={kamakhyaLogo}
                alt="Kamakhya Cosmetics"
                style={{ width: '104px', height: '104px', objectFit: 'contain' }}
              />
            </div>
            <div style={{ flex: 1, height: 0, borderTop: '1.5px dashed #c9a24b' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#c9a24b', flexShrink: 0, zIndex: 2 }} />
          </div>

          {/* Vertical dashed line */}
          <div style={{ width: 0, height: '44px', borderLeft: '1.5px dashed #c9a24b', marginTop: '2px' }} />

          {/* Heart icon */}
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(201,162,75,0.13)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2px',
          }}>
            <svg viewBox="0 0 24 24" fill="#c9a24b" width="20" height="20">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>

          {/* Tagline */}
          <p style={{
            margin: '14px 0 0',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13px',
            color: '#555',
            lineHeight: 1.65,
            textAlign: 'center',
            maxWidth: '175px',
          }}>
            Driven by our promise of{' '}
            <strong style={{ color: '#c9a24b', fontWeight: 700 }}>
              BEAUTY, CARE &amp; TRUST.
            </strong>{' '}
            we Create products that enhance everyday life.
          </p>
        </div>

        {/* Right card – Royal Luxury */}
        <BrandCard
          image={royalProduct}
          badge={royalBadge}
          badgeBg="#2e3192"
          badgeSide="left"
          categoryTag="Premium Beauty care"
          brandName="Royal Luxury"
          brandColor="#2e3192"
          tagline="A Pure Expereicne"
          description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
          features={royalFeatures}
        />
      </div>

    </div>
  </section>
);

export default BrandsSection;
