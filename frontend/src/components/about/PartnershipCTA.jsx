import React from 'react';
import { Link } from 'react-router-dom';

const PartnershipCTA = () => {
  return (
    <section className="w-full bg-[#151642]">
      <div className="px-[125px] max-lg:px-8 max-sm:px-5 py-[70px]">
        <div className="flex items-center justify-between gap-[40px] max-lg:flex-col max-lg:text-center max-lg:items-center">
          {/* Left Content */}
          <div className="flex-1 max-w-[700px]">
            <p className="m-0 font-body text-[18px] font-medium italic text-[#CCA466] mb-[8px]">
              Ready to source from Kamakhya?
            </p>
            <h2 className="m-0 font-title text-[clamp(28px,3vw,36px)] font-bold leading-[1.3] text-white mb-[16px]">
              Start a reliable beauty and home-care partnership.
            </h2>
            <p className="m-0 font-body text-[clamp(14px,1.1vw,16px)] leading-[1.7] text-white/70 max-w-[620px]">
              Tell us what you need, your target quantity and delivery market. Our trade team will prepare the
              appropriate next step.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-[16px] shrink-0 max-lg:flex-wrap max-lg:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#CCA466] text-[#151642] font-body text-[15px] font-semibold px-[28px] py-[14px] rounded-[8px] no-underline transition-colors hover:bg-[#b8924e]"
            >
              Request Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center border border-white text-white font-body text-[15px] font-semibold px-[28px] py-[14px] rounded-[8px] no-underline transition-colors hover:bg-white hover:text-[#151642]"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
