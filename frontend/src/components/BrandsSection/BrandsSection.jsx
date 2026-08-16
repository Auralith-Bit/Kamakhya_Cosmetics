import React from 'react';
import shineProduct from '../../assets/fenyl.jpg';
import royalProduct from '../../assets/makeup.jpg';
import kamakhyaLogo from '../../assets/Group 9.png';
import shineBadge from '../../assets/girl.png';
import royalBadge from '../../assets/crown.png';

const GOLD = '#c9a24b';
const ORANGE = '#e0912f';

/* ─── Feature icons (matched to video) ─────────────────────────────── */
const ShineIcons = {
  PowerfulPerformance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" strokeLinejoin="round"/>
      <path d="M20 3v4" strokeLinecap="round"/><path d="M22 5h-4" strokeLinecap="round"/>
    </svg>
  ),
  EcoConscious: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m14 16-3 3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  GermProtection: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" strokeLinejoin="round"/>
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  RefreshingFragrance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinejoin="round"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" strokeLinecap="round"/>
    </svg>
  ),
};

const RoyalIcons = {
  PremiumIngredients: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" strokeLinejoin="round"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" strokeLinecap="round"/>
    </svg>
  ),
  SkinTested: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" strokeLinejoin="round"/>
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" strokeLinejoin="round"/>
    </svg>
  ),
  ParabenFree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <path d="M7 20h10" strokeLinecap="round"/>
      <path d="M10 20c5.5-2.5.8-6.4 3-10" strokeLinecap="round"/>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" strokeLinejoin="round"/>
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" strokeLinejoin="round"/>
    </svg>
  ),
  CrueltyFree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
      <circle cx="12" cy="15" r="5"/>
      <path d="M9.5 10.5C8 8.5 8 5 9.5 3c1.5 2 2 4.5 1.5 7" strokeLinecap="round"/>
      <path d="M14.5 10.5c1.5-2 1.5-5.5 0-7.5-1.5 2-2 4.5-1.5 7" strokeLinecap="round"/>
    </svg>
  ),
};

const shineFeatures = [
  { label: 'Powerful\nPerformance', icon: ShineIcons.PowerfulPerformance },
  { label: 'Eco\nConscious', icon: ShineIcons.EcoConscious },
  { label: 'Germ\nProtection', icon: ShineIcons.GermProtection },
  { label: 'Refreshing\nFragrance', icon: ShineIcons.RefreshingFragrance },
];

const royalFeatures = [
  { label: 'Premium\nIngredients', icon: RoyalIcons.PremiumIngredients },
  { label: 'Skin\nTested', icon: RoyalIcons.SkinTested },
  { label: 'Paraben\nFree', icon: RoyalIcons.ParabenFree },
  { label: 'Cruelty\nFree', icon: RoyalIcons.CrueltyFree },
];

/* ─── Looped cursive flourish (like video) ─────────────────────────── */
const CursiveUnderline = () => (
  <svg viewBox="0 0 160 26" width="130" height="22" fill="none" aria-hidden="true"
    style={{ display: 'block', margin: '6px auto 0' }}>
    <path d="M8 16c10-10 24-11 28-5 3 5-3 9-8 7-6-2-2-10 8-11 12-1 20 3 34 3 18 0 34-4 48-7"
      stroke={GOLD} strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M62 19c8-7 18-8 22-3 3 4-2 8-6 6-5-2-1-8 7-8 10 0 18 2 30 1 12-1 22-4 30-7"
      stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

/* ─── Ornament divider: line • line ────────────────────────────────── */
const Divider = ({ color }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', margin: '10px auto 16px' }}>
    <span style={{ width: '55px', height: '1.5px', background: `linear-gradient(to left, ${color}, transparent)` }} />
    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color }} />
    <span style={{ width: '55px', height: '1.5px', background: `linear-gradient(to right, ${color}, transparent)` }} />
  </div>
);

const FlameIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M5 12h14" strokeLinecap="round"/><path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Brand Card ────────────────────────────────────────────────────── */
const BrandCard = ({ image, badge, badgeBg, badgeSide, overlayAlign, categoryTag, brandName, brandColor, tagline, description, features }) => (
  <div style={{
    background: '#fbfbf9', borderRadius: '12px', boxShadow: '0 4px 28px rgba(0,0,0,0.09)',
    overflow: 'hidden', width: 'min(470px, 100%)', flexShrink: 0,
  }}>
    {/* Image area */}
    <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
      <img src={image} alt={brandName} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,18,48,0.82) 0%, rgba(10,18,48,0.18) 55%, transparent 100%)',
      }} />

      {/* Ribbon badge */}
      <div style={{
        position: 'absolute', top: 0, [badgeSide]: 0, width: '56px', height: '92px',
        background: badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingBottom: '10px', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
      }}>
        <img src={badge} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
      </div>

      {/* Bottom text overlay – alignment differs per card */}
      <div style={{ position: 'absolute', bottom: '18px', left: '22px', right: '22px', textAlign: overlayAlign }}>
        <p style={{
          margin: 0, color: '#fff', fontFamily: "'Playfair Display', serif",
          fontSize: '17px', fontWeight: 600, letterSpacing: '0.5px', lineHeight: 1.3,
        }}>
          100+ Product Variants
        </p>
        <p style={{
          margin: '6px 0 0', color: ORANGE, fontFamily: 'Poppins, sans-serif', fontSize: '13px',
          display: 'flex', alignItems: 'center', gap: '6px',
          justifyContent: overlayAlign === 'right' ? 'flex-end' : 'flex-start',
        }}>
          <FlameIcon /> {categoryTag}
        </p>
      </div>
    </div>

    {/* Card body */}
    <div style={{ padding: '24px 30px 28px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
      <h3 style={{
        margin: 0, fontFamily: "'Playfair Display', serif", fontSize: '27px',
        fontWeight: 700, color: brandColor, lineHeight: 1.2,
      }}>
        {brandName}
      </h3>

      <p style={{ margin: '5px 0 0', fontSize: '14px', color: brandColor, fontWeight: 600 }}>
        {tagline}
      </p>

      <Divider color={brandColor} />

      <p style={{ margin: 0, fontSize: '13.5px', color: '#777', lineHeight: 1.65 }}>{description}</p>

      {/* Features grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px 6px', marginTop: '20px', marginBottom: '22px' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '50%', border: `1.5px solid ${brandColor}`,
              color: brandColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {f.icon}
            </div>
            <span style={{
              fontSize: '11.5px', color: brandColor, lineHeight: 1.4,
              whiteSpace: 'pre-line', textAlign: 'center', fontWeight: 500,
            }}>
              {f.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          width: '100%', padding: '12px 0', borderRadius: '8px', border: `1.5px solid ${brandColor}`,
          background: 'transparent', color: brandColor, fontFamily: 'Poppins, sans-serif', fontSize: '13.5px',
          fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          transition: 'background 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = brandColor; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = brandColor; }}
      >
        Explore Colletctions <ArrowRight />
      </button>
    </div>
  </div>
);

/* ─── Main Section ──────────────────────────────────────────────────── */
const BrandsSection = () => (
  <section style={{ background: '#f7f6f2', padding: '72px 0 80px', overflow: 'hidden' }}>
    <div className="px-[125px] max-lg:px-8 max-sm:px-5">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <p style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 600, color: ORANGE, letterSpacing: '3.5px', textTransform: 'uppercase' }}>
          OUR BRANDS
        </p>
        <h2 style={{ margin: '8px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.2vw, 34px)', fontWeight: 700, color: '#2e3192', lineHeight: 1.25 }}>
          Two Brands, One Promise
        </h2>
        <CursiveUnderline />
        <p style={{ margin: '14px auto 0', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(13px, 1.4vw, 14.5px)', color: '#666', lineHeight: 1.7, maxWidth: '620px' }}>
          Kamakhya Cosmetics brings you two distinctive brands crafted with premium ingredients
          and advanced care, delivering exceptional beauty every day.
        </p>
      </div>

      {/* card | connector | card */}
      <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-10" style={{ display: 'flex' }}>

        <BrandCard
          image={shineProduct} badge={shineBadge} badgeBg="#1e7e34" badgeSide="right" overlayAlign="left"
          categoryTag="Everyday home care" brandName="Shine" brandColor="#1e7e34" tagline="Fresh & Clean"
          description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
          features={shineFeatures}
        />

        {/* Center connector */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '330px' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: ORANGE, flexShrink: 0, zIndex: 2 }} />
            <div style={{ flex: 1, height: 0, borderTop: `2px dashed ${GOLD}` }} />
            {/* Double-ring circle */}
            <div style={{
              width: '230px', height: '230px', borderRadius: '50%', border: `1.5px solid ${GOLD}`,
              background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', flexShrink: 0, boxShadow: '0 2px 18px rgba(201,162,75,0.12)', zIndex: 2,
            }}>
              <div style={{ position: 'absolute', inset: '5px', borderRadius: '50%', border: '1px solid rgba(201,162,75,0.55)' }} />
              <img src={kamakhyaLogo} alt="Kamakhya Cosmetics" style={{ width: '145px', objectFit: 'contain' }} />
            </div>
            <div style={{ flex: 1, height: 0, borderTop: `2px dashed ${GOLD}` }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: ORANGE, flexShrink: 0, zIndex: 2 }} />
          </div>

          <div style={{ width: 0, height: '46px', borderLeft: `2px dashed ${GOLD}`, marginTop: '2px' }} />

          {/* Outlined heart circle */}
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%', border: `1.5px solid ${GOLD}`,
            background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg viewBox="0 0 24 24" fill={GOLD} width="24" height="24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>

          <p style={{ margin: '16px 0 0', fontFamily: 'Poppins, sans-serif', fontSize: '13.5px', color: '#555', lineHeight: 1.65, textAlign: 'center', maxWidth: '200px' }}>
            Driven by our promise of{' '}
            <strong style={{ color: ORANGE, fontWeight: 700 }}>BEAUTY, CARE &amp; TRUST.</strong>{' '}
            we Create products that enhance everyday life.
          </p>
        </div>

        <BrandCard
          image={royalProduct} badge={royalBadge} badgeBg="#2e3192" badgeSide="left" overlayAlign="right"
          categoryTag="Premium Beauty care" brandName="Royal Luxury" brandColor="#2e3192" tagline="A Pure Expereicne"
          description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
          features={royalFeatures}
        />
      </div>
    </div>
  </section>
);

export default BrandsSection;