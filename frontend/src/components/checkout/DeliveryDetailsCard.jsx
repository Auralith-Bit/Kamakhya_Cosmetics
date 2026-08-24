import React from 'react';

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DeliveryDetailsCard = () => {
  return (
    <div className="bg-white rounded-[10px] border border-[#CBCBE4] py-[50px] px-[40px] max-sm:py-[30px] max-sm:px-5">
      <div className="flex items-center gap-[10px] mb-[10px] pb-4 border-b border-[#CBCBE4]">
        <span className="text-hero-orange"><MapPinIcon /></span>
        <h2 className="m-0 font-title text-brand-blue text-[20px] font-bold leading-tight">
          Delivery Details
        </h2>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-semibold text-gray-800">
            Delivery address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your Delivery address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-[10px] max-sm:grid-cols-1">
          <div className="flex flex-col gap-[10px]">
            <label className="text-[14px] font-semibold text-gray-800">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the city"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label className="text-[14px] font-semibold text-gray-800">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            >
              <option value="" disabled>Select an Option</option>
              <option value="NP">Nepal</option>
              <option value="IN">India</option>
              <option value="BD">Bangladesh</option>
              <option value="LK">Sri Lanka</option>
              <option value="BT">Bhutan</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <label className="text-[14px] font-semibold text-gray-800">
            Order notes <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Packaging, documentation or delivery timing requirements"
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none resize-y min-h-[120px] transition-colors focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailsCard;