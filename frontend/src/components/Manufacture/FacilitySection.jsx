import {
  imgManufacturing,
  imgPlayBtn,
  imgFacilityIcon1,
  imgFacilityIcon2,
  imgFacilityIcon3,
  imgFacilityIcon4,
} from "../../assets/figmaAssets";

const FEATURES = [
  {
    icon: imgFacilityIcon1,
    label: "Advanced\nManufacturing",
  },
  {
    icon: imgFacilityIcon2,
    label: "Quality Assurance",
  },
  {
    icon: imgFacilityIcon3,
    label: "International\nCertifications",
  },
  {
    icon: imgFacilityIcon4,
    label: "Sustainable Practices",
  },
];

const FacilitySection = () => {
  return (
    <section
      className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16"
      aria-labelledby="facility-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:flex-row lg:gap-12">
        {/* Facility Image */}
        <div className="relative aspect-[820/520] w-full overflow-hidden rounded-[10px] lg:w-[560px] lg:shrink-0">
          <img
            src={imgManufacturing}
            alt="Inside Kamakhya Cosmetics manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          <button
            aria-label="Play manufacturing facility video"
            className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] bg-white shadow-[0px_20px_12px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 lg:h-[72px] lg:w-[72px]"
          >
            <img
              src={imgPlayBtn}
              alt=""
              className="h-7 w-7 lg:h-[30px] lg:w-[30px]"
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-8 lg:flex-1 lg:gap-[40px]">
          {/* Heading */}
          <div className="flex flex-col gap-4 lg:gap-[25px]">
            <div className="flex flex-col gap-2">
              <p className="font-['Poppins'] text-[14px] font-semibold uppercase tracking-[2px] text-[#e38f2e] lg:text-[18px]">
                Our Manufacturing Facility
              </p>

              <div className="h-[3px] w-[55px] rounded-[10px] bg-[#cca466]" />
            </div>

            <h2
              id="facility-heading"
              className="font-['Playfair_Display'] text-[26px] font-bold leading-tight lg:text-[34px]"
              style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
            >
              <span className="text-[#2e3192]">The World-Class </span>
              <span className="text-[#e38f2e]">Manufacturing</span>
              <span className="text-[#2e3192]">, You Can Trust</span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 font-['Poppins'] text-[15px] leading-relaxed text-[#121212] lg:text-[18px]">
            <p>
              Our modern manufacturing facility combines advanced technology,
              skilled professionals, and strict quality standards to produce
              premium beauty and home care products with precision, safety, and
              consistency.
            </p>

            <p>
              Every stage—from raw material selection and production to quality
              testing and packaging—is carefully monitored to ensure products
              you can trust.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#e38f2e] lg:h-[54px] lg:w-[54px]">
                  <img
                    src={feature.icon}
                    alt=""
                    className="h-5 w-5 lg:h-6 lg:w-6"
                  />
                </div>

                <p className="whitespace-pre-line text-center font-['Poppins'] text-[14px] font-medium leading-tight text-[#333] lg:text-[16px]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-[#e2e6e9]" />
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
