import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.png';
import badgeDiamond from '../../assets/ion_diamond-outline.png';
import badgeCertificate from '../../assets/certificate.png';
import badgeLeaf from '../../assets/leaf.png';
import badgeEnergy from '../../assets/energy.png';
import { ChevronRight, ArrowRight } from 'lucide-react';

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
      className="hero-sec relative bg-cover bg-left lg:bg-center lg:min-h-[clamp(480px,46.09vw,885px)]"
    >
      {/* ✅ background moved from inline style → class, so breakpoints can control it */}
      <style>{`
        /* mobile + desktop: product image as background */
        .hero-sec{
          background-image:url(${heroImage});
        }

        /* ✅ TABLET 640–1023: product image REMOVED — clean solid panel */
        @media (min-width:640px) and (max-width:1023px){
          .hero-sec{
            background-image:none;
            background-color:#F6E7DC;   /* brand peach — swap to #FCF9F2 / #fff if preferred */
          }
        }
      `}</style>

      <div className="px-5 sm:px-10 lg:px-[125px] py-14 sm:py-16 lg:py-20">
        <p className="text-[#E38F2E] font-title text-sm sm:text-lg tab:text-xl md:text-2xl  leading-[100%] tracking-[0%] font-bold mb-4 uppercase">
          PREMIUM BEAUTY & HOME CARE
        </p>

        <h1 className="text-[26px] sm:text-4xl tab:text-5xl md:text-6xl font-title font-bold text-[#2E3192] tracking-wider leading-tight uppercase mb-4">
          Beauty Crafted <br className="max-sm:hidden" />With Care
        </h1>

        {/* ✅ TABLET: paragraph spans ~80% of the panel (no empty right side);
           forced breaks render ONLY on desktop (lg+) where the design uses them */}
        <p className="max-w-[290px] sm:max-w-md tab:max-w-[80%] lg:max-w-md text-[13px] sm:text-sm tab:text-lg lg:text-base font-poppins text-[#333333] leading-relaxed mb-10">
          Premium cosmetics and household solutions <br className="hidden lg:inline" /> crafted with trusted ingredients and modern <br className="hidden lg:inline" />
          innovation for everyday living
        </p>

        {/* ✅ hover lift + hover shadow REMOVED from both buttons */}
        <div className="flex items-center gap-6 flex-wrap mt-5 max-sm:flex-col max-sm:items-stretch max-sm:w-full mb-12">
          <Link
            to="/bulk-quote"
            className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-[clamp(20px,2vw,32px)] rounded-lg text-xs sm:text-sm font-body font-bold tracking-wide uppercase bg-[#2E3192] text-white box-border cursor-pointer"
          >
            REQUEST QUOTE
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 inline">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>

          <Link
            to="/about"
            className="inline-flex text-[#E38F2E] items-center justify-center min-h-[44px] sm:min-h-[48px] px-[clamp(20px,2vw,32px)] rounded-lg text-xs sm:text-sm font-semi-bold tracking-wider  uppercase bg-white/80  border-2 border-[#CCA466] box-border cursor-pointer"
          >
            ABOUT US
            <ArrowRight className="ml-2 inline text-[#E38F2E]" size={15} />
          </Link>
        </div>

        <div className="flex items-center gap-5 flex-wrap  max-sm:gap-4" role="list">
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
                  className="w-[32px] h-[38px] sm:w-[36px] sm:h-[42px] md:w-[41px] md:h-[48px] object-contain block"
                />
              ) : (
                <div className="w-11 h-11 rounded-full border border-[#d4b06a] bg-white/60 flex items-center justify-center">
                  {badge.icon}
                </div>
              )}
              <span className="font-body font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-none tracking-normal text-center text-[#333]">
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