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
      className="relative w-full h-[calc((100vw-242px)*9/16)] min-h-[600px] bg-[linear-gradient(120deg,#f8ede0_0%,#f5e8d8_35%,#f0e0cc_100%)] overflow-hidden font-sans max-lg:h-auto max-lg:min-h-0 max-lg:flex max-lg:flex-col max-lg:pb-10"
    >
      
      <div
        className="absolute left-[242px] right-0 top-1/2 -translate-y-1/2 h-full z-[1] max-lg:static max-lg:translate-y-0 max-lg:w-full max-lg:max-w-[1048px] max-lg:h-auto max-lg:aspect-[16/9] max-lg:mx-auto max-lg:order-first"
      >
        <img
          src={heroImage}
          alt="Kamakhya Cosmetics – Shine and Royal Luxury product collection"
          className="w-full h-full object-contain object-right block"
        />
      </div>

      
      <div
        className="absolute left-[clamp(40px,8.85vw,170px)] top-[clamp(40px,9.26vh,100px)] w-[clamp(300px,37.81vw,726px)] h-auto min-h-[clamp(460px,63.89vh,690px)] z-[2] flex flex-col justify-start gap-[clamp(20px,4.58vw,88px)] box-border max-lg:static max-lg:w-full max-lg:h-auto max-lg:gap-6 max-lg:px-6 max-lg:py-10"
      >
        
        <p className="font-title font-bold text-[clamp(18px,1.875vw,36px)] leading-none tracking-normal text-hero-orange m-0 uppercase">
          Premium Beauty &amp; Home Care
        </p>

        
        <h1 className="font-title font-bold text-[clamp(25px,3.96vw,76px)] leading-[1.12] tracking-normal text-brand-blue uppercase -my-10">
          Beauty Crafted<br />With Care
        </h1>

        
        <p className="font-body font-medium text-[clamp(14px,1.09vw,21px)] leading-[1.2] tracking-normal text-hero-ink m-0">
          Premium cosmetics and household solutions <br /> crafted with trusted ingredients and modern <br />
          innovation for everyday living
        </p>

       
        <div className="flex items-stretch gap-[clamp(18px,1.82vw,35px)] h-[clamp(30px,3.18vw,61px)] -mt-10">
          {/* Primary - filled blue */}
          <a
            href="#contact"
            id="hero-cta-quote"
            className="inline-flex items-center justify-center w-[clamp(121px,12.6vw,242px)] h-full gap-[clamp(5px,0.52vw,10px)] px-[clamp(14px,1.56vw,30px)] rounded-[clamp(4px,0.36vw,7px)] text-[12px] font-bold tracking-[1.2px] no-underline uppercase bg-brand-blue border-[3px] border-navy-700 text-white box-border cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
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
            className="inline-flex items-center justify-center w-[clamp(109px,11.35vw,218px)] h-full gap-[clamp(5px,0.52vw,10px)] px-[clamp(14px,1.56vw,30px)] rounded-[clamp(4px,0.36vw,7px)] text-[12px] font-bold tracking-[1.2px] no-underline uppercase bg-hero-cream border-[3px] border-hero-gold text-hero-gold box-border cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
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
              <span className="font-body font-normal text-[16px] leading-none tracking-normal text-center text-hero-ink">
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
