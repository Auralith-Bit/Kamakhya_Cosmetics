import React from 'react';
import warehouseImage from '../../assets/work.png';

const AboutStory = () => {
  return (
    <section
      id="about-story"
      aria-label="About Us - Our Story"
      className="w-full bg-white py-[65px] flex items-center box-border max-sm:py-10"
    >
      <div className="w-full px-[170px] max-lg:px-8 max-sm:px-5 grid grid-cols-2 items-center gap-[45px] max-nav:grid-cols-1 max-nav:gap-9">
        
        {/* ── LEFT: Warehouse / Manufacturing Image ── */}
        <div className="relative w-[calc(100%+4px)] mx-[-2px] aspect-[3/2] rounded-[10px] overflow-hidden bg-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-nav:max-h-[380px]">
          <img
            src={warehouseImage}
            alt="Kamakhya Cosmetics – Manufacturing Facility"
            className="w-full h-full object-contain block"
          />
        </div>

        {/* ── RIGHT: Story Content ── */}
        <div className="flex flex-col w-full h-full justify-between">
          
          {/* Label / Subheading */}
          <div className="flex flex-col gap-1.5 mb-0">
            <span className="font-body text-[13px] font-bold tracking-[2px] text-brand-gold uppercase">OUR STORY</span>
            <span className="w-[42px] h-[2px] bg-brand-gold"></span>
          </div>

          {/* Heading */}
          <h2 className="font-title text-[clamp(26px,2.2vw,36px)] font-bold leading-[1.25] m-0">
            <span className="text-brand-blue block">The Story Behind </span>
            <span className="text-brand-gold">Kamakhya Cosmetics</span>
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-4 mb-0 max-w-[540px] max-nav:max-w-full">
            <p className="font-body text-[clamp(13.5px,0.95vw,15px)] leading-[1.7] text-about-text m-0 font-normal">
              Kamakhya Cosmetics was born from a simple belief—that true beauty comes from 
              the perfect harmony of science, nature and trust. We create skincare that 
              empowers confidence through safe, effective, and luxurious care.
            </p>
            <p className="font-body text-[clamp(13.5px,0.95vw,15px)] leading-[1.7] text-about-text m-0 font-normal">
              What began as a vision to create safe, effective, and luxurious products has today 
              grown into a premium manufacturing brand trusted by businesses around the 
              world. Driven by innovation and uncompromising quality, we continue to set new 
              standards in beauty and personal care.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex items-center mt-auto">
            <a
              href="#story-details"
              className="inline-flex items-center justify-center gap-2.5 w-full max-w-[220px] min-h-[54px] px-6 bg-brand-blue border-2 border-navy-700 rounded-[7px] text-white font-body text-[13px] font-bold tracking-[1px] no-underline uppercase cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-700 hover:border-navy-800 hover:shadow-[0_6px_20px_rgba(46,49,146,0.3)] active:translate-y-0 max-sm:max-w-full"
            >
              READ THE STORY
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;
