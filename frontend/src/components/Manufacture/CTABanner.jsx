import { imgQuoteIcon } from "../../assets/figmaAssets";
import { useNavigate } from "react-router-dom";

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1230]" />

      <div
        className="absolute inset-0 border-y border-white/15 bg-white/5"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
        {/* Text */}
        <div className="flex max-w-full flex-col gap-4 lg:max-w-[640px] lg:gap-5">
          <div className="flex flex-col gap-1 lg:gap-[5px]">
            <p className="font-['Poppins'] text-[14px] font-medium text-[#cca466] lg:text-[18px]">
              Ready to source from Kamakhya?
            </p>

            <h2
              className="font-['Playfair_Display'] text-[26px] font-medium leading-[1.2] text-white lg:text-[34px]"
              style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
            >
              Start a reliable beauty and home-care partnership.
            </h2>
          </div>

          <p className="font-['Poppins'] text-[15px] text-[#d9d9d9] lg:text-[18px]">
            Tell us what you need, your target quantity and delivery market. Our
            trade team will prepare the appropriate next step.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center lg:shrink-0">
          {/* Request Quote */}
          <button
            onClick={() => navigate('/bulk-quote')}
            className="flex h-[50px] items-center justify-center gap-[7px] rounded-[7px] bg-[#cca466] px-6 transition-colors hover:bg-[#b8935a] focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-[210px] sm:px-0 lg:w-[220px]">
            <span className="whitespace-nowrap font-['Poppins'] text-[16px] font-medium text-[#151642] lg:text-[17px]">
              Request Quote
            </span>

            <img src={imgQuoteIcon} alt="" className="h-[12px] w-[14px]" />
          </button>

          {/* Explore Collections */}
          <button
            onClick={() => navigate('/')}
            className="flex h-[50px] items-center justify-center rounded-[7px] border-2 border-white px-6 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-[210px] sm:px-0 lg:w-[220px]">
            <span className="whitespace-nowrap font-['Poppins'] text-[16px] font-medium text-white lg:text-[17px]">
              Explore Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
