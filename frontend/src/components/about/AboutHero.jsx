import React from 'react';
import { Link } from 'react-router-dom';
import aboutHeroBg from '../../assets/abouthero.png';

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);

const Chev = () => (
  <svg width="8" height="12" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      aria-label="About Hero"
      // FIX 1: Added bg-[#FDF6F0] to match the cream background in the design
      className="relative w-full min-h-[clamp(400px,46vw,620px)] overflow-hidden bg-[#FDF6F0]"
    >
      <img
        src={aboutHeroBg}
        alt=""
        aria-hidden="true"
        // FIX 2: Changed object-position to keep the building on the right side
        className="absolute inset-0 h-full w-full object-cover object-[center_65%] sm:object-[center_70%]"
      />

      {/* FIX 3: Changed px-[125px] to px-[6vw] lg:px-[125px] for better tablet responsiveness */}
      <div className="relative z-[2] h-full min-h-[clamp(400px,46vw,620px)] flex flex-col justify-center px-[6vw] lg:px-[125px] max-lg:px-8 max-sm:px-5 py-16 max-lg:py-12 max-sm:py-8">
        <nav className="mb-5 flex items-center gap-2 font-title text-[clamp(14px,1.1vw,16px)] font-bold text-brand-blue" aria-label="Breadcrumb">
          <HomeIcon />
          <Link to="/" className="text-brand-blue no-underline transition-colors duration-200 hover:text-hero-orange">
            Home
          </Link>
          <Chev />
          <span aria-current="page">About</span>
        </nav>

        <p className="mb-2.5 font-body text-[clamp(14px,1.25vw,18px)] font-medium text-hero-orange">
          We Believe in Beauty
        </p>

        <div className="mb-4 h-[2.5px] w-[42px] rounded-sm bg-hero-orange" />

        <h1 className="mb-4 font-title text-[clamp(32px,4.2vw,56px)] font-bold leading-[1.12] text-brand-blue">
          Our Story
        </h1>

        <p className="max-w-[520px] font-body text-[clamp(14px,1.1vw,16px)] leading-[1.75] text-[#555]">
          Discover Kamakhya Cosmetics — where beauty, care, and trust come together
          to make everyday self-care special.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;