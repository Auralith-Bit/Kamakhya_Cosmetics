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

const StatsBar = () => {
  return (
    <section
      aria-label="Key Statistics"
      className="relative min-h-[360px] py-[70px] max-sm:py-10 overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${statsBg})` }}
      />
      <div className="absolute inset-0 bg-[#151642]/15" />
      <div className="relative z-10 w-full px-[170px] max-lg:px-8 max-sm:px-5">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-8">
        {STATS.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center text-center" style={{ gap: '10px' }}>
              <div className="w-[68px] h-[68px] rounded-full bg-[#f5f0e8] flex items-center justify-center max-sm:w-[56px] max-sm:h-[56px]">
                <img src={stat.icon} alt="" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
              </div>
              <span
                className="font-body text-[36px] font-bold leading-normal text-white text-center max-sm:text-[32px]"
                style={{ fontFeatureSettings: "'dlig' on" }}
              >
                {stat.number}
              </span>
              <span className="font-title text-[32px] font-medium leading-normal text-white text-center max-sm:text-[28px]">
                {stat.title}
              </span>
              <span className="font-body text-[14px] text-white/70 leading-relaxed max-sm:text-[13px]">
                {stat.desc}
              </span>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden lg:block w-px h-[180px] bg-white/30 mx-auto" />
            )}
          </React.Fragment>
        ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
