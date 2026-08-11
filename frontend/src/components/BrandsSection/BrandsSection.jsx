import React from 'react';
import shineProduct from '../../assets/fenyl.jpg';
import royalProduct from '../../assets/makeup.jpg';
import kamakhyaLogo from '../../assets/Group 9.png';

const shineFeatures = [
  { label: 'Powerful\nPerformance', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9.5 2.5l1.5 4.5h5l-3.5 3 1.5 4.5-4.5-3-4.5 3 1.5-4.5L2 7h5z"/></svg>
  )},
  { label: 'Eco\nConscious', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M8 12c0-2 2-4 4-4s4 2 4 4"/><path d="M12 16v-4"/></svg>
  )},
  { label: 'Germ\nProtection', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/></svg>
  )},
  { label: 'Refreshing\nFragrance', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 22c4-3 8-7 8-12A8 8 0 004 10c0 5 4 9 8 12z"/><path d="M12 10v4"/><path d="M10 12h4"/></svg>
  )},
];

const royalFeatures = [
  { label: 'Premium\nIngredients', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
  )},
  { label: 'Skin\nTested', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
  )},
  { label: 'Paraben\nFree', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
  )},
  { label: 'Cruelty\nFree', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 21c-4-3-8-7-8-12a8 8 0 0116 0c0 5-4 9-8 12z"/><path d="M12 10v4"/></svg>
  )},
];

const BrandCard = ({ image, badge, badgeBg, badgePosition, brandName, brandNameColor, tagline, taglineColor, description, features, featureColor, buttonColor, buttonText }) => (
  <div className="bg-white rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden w-[420px] shrink-0 max-sm:w-full">
    <div className="relative h-[260px] overflow-hidden">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1230]/80 to-transparent" />
      <div className={`absolute top-4 ${badgePosition} w-12 h-16 ${badgeBg} flex items-end justify-center pb-2`}>
        <img src={badge} alt="" className="w-7 h-7 brightness-0 invert" />
      </div>
      <div className="absolute bottom-5 left-6 right-6">
        <p className="text-white font-body text-[15px] font-semibold m-0">100+ Product Variants</p>
        <p className="text-[#c9a24b] font-body text-[13px] m-0 mt-1 flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"/></svg>
          {tagline}
        </p>
      </div>
    </div>
    <div className="px-8 pt-6 pb-7 text-center">
      <h3 className="font-title text-[28px] font-semibold m-0" style={{ color: brandNameColor }}>{brandName}</h3>
      <p className="font-body text-[14px] m-0 mt-1" style={{ color: taglineColor }}>{tagline}</p>
      <div className="w-[80px] h-px mx-auto mt-4 mb-5" style={{ borderStyle: 'dashed', borderWidth: '1px', borderColor: featureColor }} />
      <p className="font-body text-[13px] text-[#777] leading-relaxed m-0">{description}</p>
      <div className="grid grid-cols-4 gap-2 mt-6 mb-6">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-[48px] h-[48px] rounded-full border flex items-center justify-center" style={{ borderColor: featureColor, color: featureColor }}>
              {f.icon}
            </div>
            <span className="font-body text-[11px] leading-tight whitespace-pre-line text-center" style={{ color: featureColor }}>{f.label}</span>
          </div>
        ))}
      </div>
      <button
        className="w-full py-3 rounded-[8px] font-body text-[14px] font-semibold cursor-pointer transition-colors duration-200"
        style={{ color: buttonColor, border: `1.5px solid ${buttonColor}`, background: 'transparent' }}
      >
        Explore Colletctions →
      </button>
    </div>
  </div>
);

const BrandsSection = () => {
  return (
    <section className="bg-[#fdfaf6] py-[70px] px-6 max-sm:py-10 max-sm:px-4 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-[13px] font-semibold text-[#c9a24b] tracking-[3px] uppercase m-0">Our Brands</p>
          <h2 className="font-title text-[36px] font-semibold text-[#1a1a5c] m-0 mt-2">Two Brands, One Promise</h2>
          <svg viewBox="0 0 120 20" className="w-[100px] h-[18px] mx-auto mt-3 mb-4" fill="none" stroke="#c9a24b" strokeWidth="1.5">
            <path d="M10 10 Q30 2 50 10 T90 10" />
            <path d="M20 14 Q40 6 60 14 T100 14" />
          </svg>
          <p className="font-body text-[15px] text-[#666] leading-relaxed max-w-[620px] mx-auto m-0">
            Kamakhya Cosmetics brings you two distinctive brands crafted with premium ingredients
            and advanced care, delivering exceptional beauty every day.
          </p>
        </div>

        <div className="flex items-center justify-center gap-0 max-lg:flex-col max-lg:gap-10">
          <BrandCard
            image={shineProduct}
            badge={shineProduct}
            badgeBg="bg-[#1a5c2a]"
            badgePosition="right-0"
            brandName="Shine"
            brandNameColor="#1a5c2a"
            tagline="Fresh & Clean"
            taglineColor="#c9a24b"
            description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
            features={shineFeatures}
            featureColor="#1a5c2a"
            buttonColor="#1a5c2a"
          />

          <div className="flex flex-col items-center shrink-0 px-6 max-sm:px-3">
            <div className="relative">
              <div className="w-[180px] h-[180px] rounded-full border-[1.5px] border-[#c9a24b]/40 flex items-center justify-center bg-white relative z-[1]">
                <img src={kamakhyaLogo} alt="Kamakhya Cosmetics" className="w-[100px] h-[100px] object-contain" />
              </div>
              <div className="absolute top-1/2 -left-[60px] w-[60px] h-px border-t-[1.5px] border-dashed border-[#c9a24b]" style={{ borderStyle: 'dashed' }} />
              <div className="absolute top-1/2 -right-[60px] w-[60px] h-px border-t-[1.5px] border-dashed border-[#c9a24b]" style={{ borderStyle: 'dashed' }} />
              <div className="absolute top-1/2 -left-[66px] w-2.5 h-2.5 rounded-full bg-[#c9a24b] -translate-y-1/2" />
              <div className="absolute top-1/2 -right-[66px] w-2.5 h-2.5 rounded-full bg-[#c9a24b] -translate-y-1/2" />
            </div>
            <div className="w-px h-12 border-l-[1.5px] border-dashed border-[#c9a24b] mt-2" />
            <div className="w-[52px] h-[52px] rounded-full bg-[#c9a24b]/15 flex items-center justify-center mt-2">
              <svg viewBox="0 0 24 24" fill="#c9a24b" className="w-5 h-5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <p className="font-body text-[14px] text-[#555] leading-relaxed text-center max-w-[180px] mt-4 m-0">
              Driven by our promise of{' '}
              <span className="font-bold text-[#c9a24b]">BEAUTY, CARE & TRUST.</span>{' '}
              we Create products that enhance everyday life.
            </p>
          </div>

          <BrandCard
            image={royalProduct}
            badge={royalProduct}
            badgeBg="bg-[#2e3192]"
            badgePosition="left-0"
            brandName="Royal Luxury"
            brandNameColor="#2e3192"
            tagline="A Pure Experience"
            taglineColor="#c9a24b"
            description="Daily care and household essentials designed for freshness, hygiene, and lasting performance."
            features={royalFeatures}
            featureColor="#2e3192"
            buttonColor="#2e3192"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
