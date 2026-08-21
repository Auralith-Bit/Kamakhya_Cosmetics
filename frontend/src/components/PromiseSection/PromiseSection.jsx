import React from 'react';
import promiseImg from '../../assets/products.png';

const GOLD = '#c9a24b';
const ORANGE = '#e0912f';
const ICON = '#cf8b2e';
const TITLE = '#000000';
const TEXT = '#000000';

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="172"
    height="24"
    viewBox="0 0 172 24"
    fill="none"
    aria-hidden="true"
    style={{ display: 'block', margin: '8px auto 0' }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill={GOLD} />
  </svg>
);

const Feature = ({ icon, title, text }) => (
  <div style={{ textAlign: 'center', maxWidth: '315px' }}>
    <div style={{
      width: '56px', height: '56px', margin: '0 auto', borderRadius: '50%',
      border: `1.5px solid ${ICON}`, color: ICON,
      display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent',
    }}>
      {icon}
    </div>
    <h4 style={{
      margin: '14px 0 0', fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(16px, 0.9vw, 19px)', fontWeight: 700, color: TITLE, lineHeight: 1.4,
    }}>
      {title}
    </h4>
    <div style={{ width: '45px', height: '2px', background: GOLD, margin: '11px auto 13px' }} />
      <p style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(14px, 0.63vw, 15px)', color: TEXT, lineHeight: 1.6 }}>
      {text}
    </p>
  </div>
);

const PromiseSection = () => (
  <section style={{ background: '#f5f0e4', padding: '85px 0 90px', overflow: 'hidden', minHeight: '521px' }}>
    {/* clip shape: deep concave top + fully round bottom (as in video) */}
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <clipPath id="promiseShape" clipPathUnits="objectBoundingBox">
          <path d="M0 0 Q0.5 0.20 1 0 L1 0.623 Q1.1 0.92 0.5 1 Q-0.1 0.92 0 0.623 Z" />
        </clipPath>
      </defs>
    </svg>

    <div className="px-[125px] max-lg:px-8 max-sm:px-5">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <p style={{ margin: 0, fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 600, color: ORANGE, letterSpacing: '3.5px', textTransform: 'uppercase' }}>
          OUR PROMISE
        </p>
        <h2 style={{ margin: '6px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.2vw, 34px)', fontWeight: 700, color: '#2e3192', lineHeight: 1.25 }}>
          Beauty, Care &amp; Cleanliness
        </h2>
        <CursiveUnderline />
        <p style={{ margin: '12px auto 0', fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(13px, 1.4vw, 14.5px)', color: '#666', lineHeight: 1.7, maxWidth: '620px' }}>
          Clean ingredients, expert formulations, and uncompromising quality come together to create
          Products that truly performs.
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

        {/* Bottom bracket frame – side lines (57px) + bottom line with gap for image */}
        {/* Left bracket segment */}
        <div className="max-lg:hidden" style={{
          position: 'absolute', left: '0', bottom: '9px',
          width: 'calc(32% - 1px)', height: '51px',
          borderLeft: '1px solid #3f3f3f', borderBottom: '1px solid #3f3f3f',
          borderRadius: '0 0 0 26px',
          pointerEvents: 'none', zIndex: 0,
        }} />
        {/* Right bracket segment */}
        <div className="max-lg:hidden" style={{
          position: 'absolute', right: '0', bottom: '9px',
          width: 'calc(32% - 1px)', height: '51px',
          borderRight: '1px solid #3f3f3f', borderBottom: '1px solid #3f3f3f',
          borderRadius: '0 0 26px 0',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="max-lg:flex-col max-lg:items-center max-lg:gap-16"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '36px', position: 'relative' }}>

          {/* Left features */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '45px', paddingTop: '27px', zIndex: 1 }}>
            <Feature icon={Icons.flask} title="Science-Backed Formulas"
              text="Advanced skincare solutions developed with cutting-edge research and clinically proven ingredients." />
            <Feature icon={Icons.personHeart} title="Personalized Beauty Solutions"
              text="Skincare that adapts to your unique needs, skin type, and personal wellness journey." />
          </div>

          {/* Center shaped image */}
          <div className="promise-img" style={{
            width: 'min(387px, 75%)', height: '499px', flexShrink: 0,
            clipPath: 'url(#promiseShape)', zIndex: 2,
            background: 'linear-gradient(to bottom, #f4a0a0 0%, #f5c89a 35%, #e8dcc8 60%, #d4e5ef 100%)',
            position: 'relative', overflow: 'hidden',
          }}>
            <img src={promiseImg} alt="Kamakhya Cosmetics products"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom', display: 'block', position: 'absolute', bottom: 0, left: 0 }} />
          </div>

          {/* Right features */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '45px', paddingTop: '27px', zIndex: 1 }}>
            <Feature icon={Icons.shieldCheck} title="Quality You Can Trust"
              text="Dermatologically tested, certified and manufactured under the highest quality standards." />
            <Feature icon={Icons.leaves} title="Safe & Pure Ingredients"
              text="We use high-quality, non-toxic, and ethically sourced ingredients that are safe for your environment" />
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 1023px) { .promise-img { height: 380px !important; } }
      @media (max-width: 600px) { .promise-img { height: 300px !important; width: 80% !important; } }
    `}</style>
  </section>
);

export default PromiseSection;