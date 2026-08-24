import React from 'react';

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BusinessContactCard = () => {
  return (
    <div className="bg-white rounded-[10px] border border-[#CBCBE4] py-[50px] px-[40px] max-sm:py-[30px] max-sm:px-5">
      <div className="flex items-center gap-[10px] mb-[10px] pb-4 border-b border-[#CBCBE4]">
        <span className="text-hero-orange"><UserIcon /></span>
        <h2 className="m-0 font-title text-brand-blue text-[20px] font-bold leading-tight">
          Business Contact
        </h2>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-semibold text-gray-800">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-semibold text-gray-800">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
          <div className="flex flex-col gap-[10px]">
            <label className="text-[14px] font-semibold text-gray-800">
              Business Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="info@business.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="text-[14px] font-semibold text-gray-800">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Your Ph. number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContactCard;