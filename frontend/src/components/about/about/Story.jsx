import React from 'react';
import warehouseImage from '../../../assets/work.png';

const AboutStory = () => {
  return (
    <section
      id="about-story"
      aria-label="About Us - Our Story"
      className="w-full bg-white py-[85px] flex items-center box-border max-sm:py-10 overflow-hidden"
    >
      <div className="w-full px-[125px] max-lg:px-8 max-sm:px-5 grid grid-cols-2 items-center gap-[70px] max-nav:grid-cols-1 max-nav:gap-9">
        
        {/* ── LEFT: Warehouse / Manufacturing Image ── */}
        <div className="relative w-[calc(100%+20px)] mr-[-20px] aspect-[3/2.08] rounded-[10px] overflow-hidden bg-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-nav:w-full max-nav:mr-0 max-nav:max-h-[380px]">
                  <img
                    src={warehouseImage}
                    alt="Kamakhya Cosmetics – Manufacturing Facility"
                    className="w-full h-full object-cover block"
                  />
                </div>
                

        {/* ── RIGHT: Story Content ── */}
        <div className="flex flex-col w-full justify-center">
          
          {/* Label / Subheading */}
          <div className="flex flex-col gap-1.5 mb-[clamp(8px,0.75vw,14px)]">
            <span className="font-body text-[14px] font-bold tracking-[0.18em] text-hero-orange uppercase">OUR STORY</span>
            <span className="w-[42px] h-[2px] bg-hero-gold"></span>
          </div>

          {/* Heading */}
          <h2 className="font-title text-[clamp(26px,2.5vw,38px)] font-bold leading-[1.25] m-0 mb-[16px]">
            <span className="text-brand-blue block">The Story Behind</span>
            <span className="text-hero-orange">Kamakhya Cosmetics</span>
          </h2>

          {/* Description */}
          <div className="flex flex-col gap-5 max-nav:max-w-full text-justify">
            <p className="font-body text-[clamp(14px,1vw,16px)] leading-[1.7] text-about-text m-0 font-normal">
              Kamakhya Cosmetics was born from a simple belief- that true beauty comes from 
              the perfect harmony of science , naature and trust. We create skincare that 
              empowers confidence through safe, effective, and luxurious care.
            </p>
            <p className="font-body text-[clamp(14px,1vw,16px)] leading-[1.7] text-about-text m-0 font-normal">
              What began as a vision to create safe, effective, and luxurious products has today 
              grown into a premium manufacturing brand trusted by businesses around the 
              world. Driven by innovation and uncompromising quality, we continue to set new 
              standards in beauty and personal care
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;
