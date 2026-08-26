import {
  imgQualityBadge,
  imgQualityDecor,
  imgISOIcon,
  imgGMPIcon,
  imgQAIcon,
  imgSafetyIcon,
  imgRoyalLuxuryLogoImg,
  imgSubtract,
  imgFeatureIcon1,
  imgFeatureIcon2,
  imgFeatureIcon3,
  imgFeatureIcon4,
  imgFeature1,
  imgFeature2,
  imgFeature3,
  imgFeature4,
} from "../../assets/figmaAssets";

import shineLogo from "../../assets/shine.png";

const BADGES = [
  { icon: imgISOIcon, label: "ISO\nCertified" },
  { icon: imgGMPIcon, label: "GMP\nComplaint" },
  { icon: imgQAIcon, label: "Quality\nAssured" },
  { icon: imgSafetyIcon, label: "Safety\nFirst" },
];

const BRANDS = [
  {
    logo: shineLogo,
    name: "Shine",
    tagline: "Premium Home Care Collections.",
  },
  {
    logo: imgRoyalLuxuryLogoImg,
    name: "Royal Luxury",
    tagline: "Skincare, Makeup & Beauty.",
  },
];

const FEATURES = [
  {
    icon: imgFeatureIcon1,
    iconBg: "rgba(251,192,45,0.35)",
    title: "Authentic Quality",
    desc: "Crafted with trusted ingredients and quality.",
    bgImg: imgFeature1,
  },
  {
    icon: imgFeatureIcon2,
    iconBg: "rgba(196,160,240,0.5)",
    title: "Expert Craftsmanship",
    desc: "Every product is crafted with precision & care.",
    bgImg: imgFeature2,
  },
  {
    icon: imgFeatureIcon3,
    iconBg: "rgba(34,197,94,0.25)",
    title: "Trusted Ingredients",
    desc: "Selected for safety, quality, and performance.",
    bgImg: imgFeature3,
  },
  {
    icon: imgFeatureIcon4,
    iconBg: "rgba(211,47,47,0.18)",
    title: "Sustainable Practices",
    desc: "Committed to eco-friendly production.",
    bgImg: imgFeature4,
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-[12px] border border-[#e8e8e8] bg-white">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={feature.bgImg}
          alt=""
          className="absolute right-0 top-0 h-full w-[58%] object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff 38%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0) 75%)",
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex max-w-[60%] flex-col gap-3 p-5">
        {/* Icon */}
        <div
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: feature.iconBg }}
        >
          <img src={feature.icon} alt="" className="h-6 w-6" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <h4
            className="font-['Playfair_Display'] text-[17px] font-bold leading-snug text-[#2e3192] lg:text-[19px]"
            style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
          >
            {feature.title}
          </h4>

          <p className="font-['Poppins'] text-[13px] leading-relaxed text-[#444] lg:text-[14px]">
            {feature.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const QualitySection = () => {
  return (
    <section
      className="bg-[#f5f5f5] px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16"
      aria-labelledby="quality-heading"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Main Container */}
        <div className="flex flex-col overflow-hidden rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] lg:flex-row">
          {/* Left Panel */}
          <div className="flex w-full flex-col items-center gap-7 bg-[#1c1c1c] px-6 py-10 sm:px-8 lg:w-[360px] lg:shrink-0 xl:w-[400px]">
            {/* Quality Badge */}
            <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border-2 border-[#cca466] bg-[radial-gradient(circle,#3a3020_0%,#1c1c1c_100%)]">
              <img src={imgQualityBadge} alt="" className="h-11 w-9" />
            </div>

            {/* Quality Heading */}
            <div className="flex w-full flex-col items-center gap-2">
              <h3
                className="text-center font-['Playfair_Display'] text-[26px] font-bold text-[#d4a85a] lg:text-[28px]"
                style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
              >
                Quality Assured
              </h3>

              <img
                src={imgQualityDecor}
                alt=""
                className="h-[10px] w-[190px]"
              />
            </div>

            {/* Description */}
            <p className="max-w-[300px] text-center font-['Poppins'] text-[14px] leading-relaxed text-[#cccccc] lg:text-[15px]">
              Manufactured in our ISO-certified facility, adhering to quality,
              safety, and hygiene standards for premium product excellence.
            </p>

            {/* Badges */}
            <div className="grid w-full grid-cols-4 gap-2">
              {BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-[6px]"
                >
                  <img src={badge.icon} alt="" className="h-[22px] w-[22px]" />

                  <p className="whitespace-pre-line text-center font-['Poppins'] text-[11px] leading-tight text-white lg:text-[12px]">
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px w-full bg-white/15" />

            {/* Brands */}
            <div className="flex w-full flex-col items-center gap-5">
              <div className="flex flex-col items-center gap-2">
                <h3
                  className="text-center font-['Playfair_Display'] text-[22px] font-bold text-[#d4a85a] lg:text-[24px]"
                  style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
                >
                  Our Two Brands
                </h3>

                <img
                  src={imgQualityDecor}
                  alt=""
                  className="h-[10px] w-[160px]"
                />
              </div>

              {/* Brand Cards */}
              <div className="grid w-full grid-cols-2 gap-3">
                {BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-center rounded-[10px] border border-[#e2ddd4] bg-[#f9f4ea] px-3 py-6"
                  >
                    <div className="flex flex-col items-center gap-[6px]">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-[60px] w-[60px] object-contain"
                      />

                      <p
                        className="text-center font-['Playfair_Display'] text-[16px] font-bold text-[#2e3192] lg:text-[17px]"
                        style={{
                          fontVariationSettings: '"opsz" 12, "wdth" 100',
                        }}
                      >
                        {brand.name}
                      </p>

                      <div className="h-[2px] w-[40px] rounded-full bg-[#cca466]" />

                      <p className="text-center font-['Poppins'] text-[11px] leading-snug text-[#555] lg:text-[12px]">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-1 flex-col gap-6 bg-white p-6 sm:p-8 lg:p-10">
            {/* Heading */}
            <div className="flex flex-col gap-1">
              <p className="font-['Poppins'] text-[14px] font-semibold uppercase tracking-[2.5px] text-[#e38f2e] lg:text-[18px]">
                Why You'll Love It
              </p>

              <h2
                id="quality-heading"
                className="font-['Playfair_Display'] text-[26px] font-bold leading-tight text-[#2e3192] lg:text-[34px]"
                style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
              >
                Experience The Kamakhya Difference
              </h2>

              <img
                src={imgSubtract}
                alt=""
                className="mt-1 h-[10px] w-[200px] lg:w-[260px]"
              />
            </div>

            {/* Feature Cards */}
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
