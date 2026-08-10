import React from 'react';
import iconBrands from '../../assets/Group.svg';
import iconVariants from '../../assets/Vector copy.svg';
import iconQuality from '../../assets/search.svg';
import iconPartners from '../../assets/handshake.svg';

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

const StatsBar = () => {
  return (
    <section
      aria-label="Key Statistics"
      className="bg-black py-[60px] px-6 max-sm:py-10 max-sm:px-4"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-10">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center gap-4 ${
              i < STATS.length - 1
                ? 'lg:border-r lg:border-[#c9a24b]/30'
                : ''
            }`}
          >
            {/* Icon circle */}
            <div className="w-[68px] h-[68px] rounded-full bg-[#f5f0e8] flex items-center justify-center max-sm:w-[56px] max-sm:h-[56px]">
              <img src={stat.icon} alt="" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
            </div>

            {/* Number */}
            <span className="font-title text-[42px] font-bold leading-none text-[#c9a24b] max-sm:text-[32px]">
              {stat.number}
            </span>

            {/* Title */}
            <span className="font-title text-[18px] font-semibold text-white leading-tight max-sm:text-[16px]">
              {stat.title}
            </span>

            {/* Description */}
            <span className="font-body text-[14px] text-[#999] leading-relaxed max-sm:text-[13px]">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
