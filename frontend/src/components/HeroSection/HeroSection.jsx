import React from 'react';
import heroImage from '../../assets/hero.png';
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
      className="relative w-full h-[calc(100vw*885/1920)] min-h-[600px] bg-[linear-gradient(120deg,#f8ede0_0%,#f5e8d8_35%,#f0e0cc_100%)] overflow-hidden font-sans max-lg:h-auto max-lg:min-h-0"
    >
      
      <div
        className="absolute inset-0 top-1/2 -translate-y-1/2 h-full z-[1] max-lg:top-0 max-lg:bottom-0 max-lg:translate-y-0 max-lg:h-auto"
      >
        <img
          src={heroImage}
          alt="Kamakhya Cosmetics – Shine and Royal Luxury product collection"
          className="w-full h-full object-contain object-center block max-lg:object-cover"
        />
      </div>

      
      <div
        className="absolute left-[170px] top-[clamp(40px,9.26vh,100px)] w-[clamp(300px,37.81vw,726px)] h-auto min-h-[clamp(460px,63.89vh,690px)] z-[2] flex flex-col justify-start gap-[clamp(20px,4.58vw,88px)] box-border max-lg:static max-lg:min-w-0 max-lg:w-full max-lg:min-h-0 max-lg:gap-5 max-lg:px-8 max-lg:py-8 max-sm:gap-4 max-sm:px-4 max-sm:py-6"
      >
        
        <p className="font-title font-bold text-[clamp(18px,1.875vw,36px)] leading-none tracking-normal text-hero-orange m-0 uppercase">
          Premium Beauty &amp; Home Care
        </p>

        
        <h1 className="font-title font-bold text-[clamp(25px,3.96vw,76px)] leading-[1.12] tracking-normal text-brand-blue uppercase -my-10 max-lg:my-0 max-lg:text-[clamp(28px,8vw,44px)]">
          Beauty Crafted<br />With Care
        </h1>

        
        <p className="font-body font-medium text-[clamp(14px,1.09vw,21px)] leading-[1.2] tracking-normal text-hero-ink m-0">
          Premium cosmetics and household solutions <br /> crafted with trusted ingredients and modern <br />
          innovation for everyday living
        </p>

       
        <div className="flex items-stretch gap-[clamp(18px,1.82vw,35px)] h-[clamp(30px,3.18vw,61px)] -mt-10 max-lg:mt-0 max-sm:flex-col max-sm:items-stretch max-sm:h-auto max-sm:gap-3">
          {/* Primary - filled blue */}
          <a
            href="#contact"
            id="hero-cta-quote"
            className="inline-flex items-center justify-center w-[clamp(121px,12.6vw,242px)] h-full gap-[clamp(5px,0.52vw,10px)] px-[clamp(14px,1.56vw,30px)] rounded-[clamp(4px,0.36vw,7px)] text-[12px] font-body font-bold tracking-[1.2px] no-underline uppercase bg-brand-blue border-[3px] border-navy-700 text-white box-border cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 max-sm:w-full max-sm:min-h-[48px]"
          >
            REQUEST QUOTE
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>

          {/* Secondary - gold outline */}
          <a
            href="#about"
            id="hero-cta-about"
            className="inline-flex items-center justify-center w-[clamp(109px,11.35vw,218px)] h-full gap-[clamp(5px,0.52vw,10px)] px-[clamp(14px,1.56vw,30px)] rounded-[clamp(4px,0.36vw,7px)] text-[12px] font-body font-bold tracking-[1.2px] no-underline uppercase bg-hero-cream border-[3px] border-hero-gold text-hero-gold box-border cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 max-sm:w-full max-sm:min-h-[48px]"
          >
            ABOUT US
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex items-start gap-5 flex-wrap" role="list">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              id={badge.id}
              role="listitem"
              className="flex flex-col items-center gap-1.5 min-w-[52px]"
            >
              {badge.image ? (
                <img
                  src={badge.image}
                  alt={`${badge.label1} ${badge.label2}`}
                  className="w-[41px] h-[48px] object-contain block"
                />
              ) : (
                <div className="w-12 h-12 rounded-full border border-[#d4b06a] bg-white/55 flex items-center justify-center">
                  {badge.icon}
                </div>
              )}
              <span className="font-body font-normal text-[16px] leading-none tracking-normal text-center text-hero-ink max-sm:text-[13px]">
                {badge.label1}<br />{badge.label2}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
