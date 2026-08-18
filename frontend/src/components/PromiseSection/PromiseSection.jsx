import React from 'react';
import promiseImg from '../../assets/products.png';

const GOLD = '#c9a24b';
const ORANGE = '#e0912f';
const ICON = '#cf8b2e';
const TITLE = '#3a3a55';
const TEXT = '#555';

const Icons = {
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="38" height="38">
      <path d="M12 2.2l.9 1.8 1.8.9-1.8.9-.9 1.8-.9-1.8-1.8-.9 1.8-.9z" strokeLinejoin="round"/>
      <path d="M10 9.5h4" strokeLinecap="round"/><path d="M12 9.5v2" strokeLinecap="round"/>
      <circle cx="12" cy="16.5" r="5"/><path d="M9.6 16h4.8" strokeLinecap="round"/>
    </svg>
  ),
  personHeart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="38" height="38">
      <circle cx="9.5" cy="7" r="3.2"/>
      <path d="M3.5 19.5c.6-4.4 3-7 6-7s5.4 2.6 6 7" strokeLinecap="round"/>
      <g transform="translate(12.5,9.5) scale(0.5)">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round"/>
      </g>
    </svg>
  ),
  shieldCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="38" height="38">
      <path d="M12 2.8l7.2 2.9v5.1c0 5-3 8.7-7.2 10.4C7.8 19.5 4.8 15.8 4.8 10.8V5.7z" strokeLinejoin="round"/>
      <path d="m9.3 11.6 2 2 3.6-3.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leaves: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="38" height="38">
      <path d="M5 13C5 7.5 9.5 3.5 15.5 3.5c0 6-4.5 9.5-10.5 9.5z" strokeLinejoin="round"/>
      <path d="M12.5 20.5c0-3.8 3-6.5 7-6.5 0 3.8-3 6.5-7 6.5z" strokeLinejoin="round"/>
      <path d="M5 13c4.5 0 7.5 3 7.5 7.5" strokeLinecap="round"/>
    </svg>
  ),
};

const CursiveUnderline = () => (
  <svg viewBox="0 0 160 26" width="200" height="32" fill="none" aria-hidden="true"
    style={{ display: 'block', margin: '6px auto 0' }}>
    <path d="M8 16c10-10 24-11 28-5 3 5-3 9-8 7-6-2-2-10 8-11 12-1 20 3 34 3 18 0 34-4 48-7"
      stroke={GOLD} strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M62 19c8-7 18-8 22-3 3 4-2 8-6 6-5-2-1-8 7-8 10 0 18 2 30 1 12-1 22-4 30-7"
      stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const Feature = ({ icon, title, text }) => (
  <div style={{ textAlign: 'center', maxWidth: '350px' }}>
    <div style={{
      width: '62px', height: '62px', margin: '0 auto', borderRadius: '50%',
      border: `1.5px solid ${ICON}`, color: ICON,
      display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent',
    }}>
      {icon}
    </div>
    <h4 style={{
      margin: '16px 0 0', fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(15px, 1vw, 18px)', fontWeight: 700, color: TITLE, lineHeight: 1.4,
    }}>
      {title}
    </h4>
    <div style={{ width: '50px', height: '2px', background: GOLD, margin: '12px auto 14px' }} />
    <p style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(12px, 0.7vw, 14px)', color: TEXT, lineHeight: 1.6 }}>
      {text}
    </p>
  </div>
);

const PromiseSection = () => (
  <section style={{ background: '#f5f0e4', padding: '85px 0 90px', overflow: 'hidden', minHeight: '579px' }}>
    {/* clip shape: deep concave top + fully round bottom (as in video) */}
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="promiseShape" clipPathUnits="objectBoundingBox">
          <path d="M0 0 Q0.5 0.34 1 0 L1 0.65 Q1 1 0.5 1 Q0 1 0 0.65 Z" />
        </clipPath>
      </defs>
    </svg>

    <div className="px-[125px] max-lg:px-8 max-sm:px-5">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 600, color: ORANGE, letterSpacing: '3.5px', textTransform: 'uppercase' }}>
          OUR PROMISE
        </p>
        <h2 style={{ margin: '8px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 1.6vw, 40px)', fontWeight: 700, color: '#2e3192', lineHeight: 1.25 }}>
          Beauty, Care &amp; Cleanliness
        </h2>
        <CursiveUnderline />
        <p style={{ margin: '16px auto 0', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px, 1vw, 25px)', color: '#3d3d3d', lineHeight: 1.65, maxWidth: '1260px' }}>
          Clean ingredients, expert formulations, and uncompromising quality come together to create<br/> Products that truly performs.
        </p>
      </div>

      {/* Dashed arc – full container width, dashes 3,3 */}
      <svg viewBox="0 0 1670 160" preserveAspectRatio="none" fill="none" aria-hidden="true"
        style={{ display: 'block', width: '100%', margin: '0 auto', height: '160px', marginBottom: '-12px' }}>
        <path d="M0 156 Q835 -120 1670 156" stroke="#3f3f3f" strokeWidth="1"
          strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Content row */}
      <div style={{ position: 'relative' }}>

        {/* Bottom bracket frame – split to avoid overlapping the center image */}
        {/* Left bracket segment */}
        <div className="max-lg:hidden" style={{
          position: 'absolute', left: '0', top: '55%', bottom: '0',
          width: 'calc(32% - 1px)', borderLeft: '1px solid #3f3f3f',
          borderBottom: '1px solid #3f3f3f', borderRadius: '0 0 0 26px',
          pointerEvents: 'none', zIndex: 0,
        }} />
        {/* Right bracket segment */}
        <div className="max-lg:hidden" style={{
          position: 'absolute', right: '0', top: '55%', bottom: '0',
          width: 'calc(32% - 1px)', borderRight: '1px solid #3f3f3f',
          borderBottom: '1px solid #3f3f3f', borderRadius: '0 0 26px 0',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="max-lg:flex-col max-lg:items-center max-lg:gap-16"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px', position: 'relative' }}>

          {/* Left features */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', paddingTop: '30px', zIndex: 1 }}>
            <Feature icon={Icons.flask} title="Science-Backed Formulas"
              text="Advanced skincare solutions developed with cutting-edge research and clinically proven ingredients." />
            <Feature icon={Icons.personHeart} title="Personalized Beauty Solutions"
              text="Skincare that adapts to your unique needs, skin type, and personal wellness journey." />
          </div>

          {/* Center shaped image – 450px, 7:10 */}
          <div style={{
            width: 'min(450px, 75%)', aspectRatio: '7 / 10', flexShrink: 0,
            clipPath: 'url(#promiseShape)', zIndex: 2,
          }}>
            <img src={promiseImg} alt="Kamakhya Cosmetics products"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>

          {/* Right features */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px', paddingTop: '30px', zIndex: 1 }}>
            <Feature icon={Icons.shieldCheck} title="Quality You Can Trust"
              text="Dermatologically tested, certified and manufactured under the highest quality standards." />
            <Feature icon={Icons.leaves} title="Safe & Pure Ingredients"
              text="We use high-quality, non-toxic, and ethically sourced ingredients that are safe for your environment" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromiseSection;