import React from 'react';
import iconBrands from '../../assets/Group.svg';
import iconVariants from '../../assets/Vector copy.svg';
import iconQuality from '../../assets/search.svg';
import iconPartners from '../../assets/handshake.svg';
import statsBg from '../../assets/bgimg.png';

const STATS = [
  {
    icon: iconBrands,
    number: '2',
    title: 'Owned Brands',
    desc: 'Beauty and home care',
  },
  {
    icon: iconVariants,
    number: '100+',
    title: 'Product Variants',
    desc: 'Across multiple categories',
  },
  {
    icon: iconQuality,
    number: '100%',
    title: 'Quality Checked',
    desc: 'Every batch inspected',
  },
  {
    icon: iconPartners,
    number: '500+',
    title: 'Partners',
    desc: 'Across multiple sectors',
  },
];

const Divider = () => (
  <div className="hidden lg:block w-px self-stretch bg-white/40 shrink-0 mx-2" />
);

const StatsBar = () => {
  return (
    <section
      aria-label="Key Statistics"
      className="relative py-[80px] px-6 max-sm:py-10 max-sm:px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      <div className="absolute inset-0 bg-[#0a1230]/55" />
      <div className="relative z-10 max-w-[1250px] mx-auto flex items-center justify-center max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-y-10">
        {STATS.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center text-center gap-4 pt-1 pb-1">
              {/* Icon circle */}
              <div className="w-[68px] h-[68px] rounded-full bg-[#f5f0e8] flex items-center justify-center max-sm:w-[56px] max-sm:h-[56px]">
                <img src={stat.icon} alt="" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
              </div>

              {/* Number */}
              <span
                className="font-body text-[36px] font-bold leading-normal text-white text-center w-[187px] max-sm:text-[32px]"
                style={{ fontFeatureSettings: "'dlig' on" }}
              >
                {stat.number}
              </span>

              {/* Title */}
              <span className="font-title text-[32px] font-medium leading-normal text-white text-center max-sm:text-[28px]">
                {stat.title}
              </span>

              {/* Description */}
              <span className="font-body text-[14px] text-[#999] leading-relaxed max-sm:text-[13px]">
                {stat.desc}
              </span>
            </div>
            {i < STATS.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
