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
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

const BADGES = [
  { icon: imgISOIcon, label: "ISO Certified" },
  { icon: imgGMPIcon, label: "GMP Complaint" },
  { icon: imgQAIcon, label: "Quality Assured" },
  { icon: imgSafetyIcon, label: "Safety First" },
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
    iconBg: "rgba(251, 192, 45, 0.4)",
    title: "Authentic Quality",
    desc: "Crafted with trusted ingredients and quality.",
    bgImg: imgFeature1,
  },
  {
    icon: imgFeatureIcon2,
    iconBg: "#D1B0FB",
    title: "Expert Craftsmanship",
    desc: "Every product is crafted with precision & care.",
    bgImg: imgFeature2,
  },
  {
    icon: imgFeatureIcon3,
    iconBg: "rgba(34, 197, 94, 0.2)",
    title: "Trusted Ingredients",
    desc: "Selected for safety, quality, and performance.",
    bgImg: imgFeature3,
  },
  {
    icon: imgFeatureIcon4,
    iconBg: "rgba(211, 47, 47, 0.2)",
    title: "Sustainable Practices",
    desc: "Committed to eco-friendly production.",
    bgImg: imgFeature4,
  },
];

const FeatureCard = ({ feature }) => {
  return (
    <div
      className="relative w-full overflow-hidden border border-[#d7dae4] bg-white"
      style={{ height: fluid(279, 180), borderRadius: s(10) }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={feature.bgImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(217, 217, 217, 0) 35%, rgba(244, 244, 244, 1) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 flex h-full flex-col justify-center"
        style={{ maxWidth: s(242), gap: fluid(20, 12), paddingLeft: s(30), paddingRight: s(30) }}
      >
        <div
          className="flex shrink-0 items-center justify-center rounded-full"
          style={{
            height: s(89),
            width: s(89),
            backgroundColor: feature.iconBg,
          }}
        >
          <img src={feature.icon} alt="" style={{ height: s(35), width: s(35) }} />
        </div>

        <div className="flex flex-col" style={{ gap: fluid(10, 6) }}>
          <h4
            className="font-['Playfair_Display'] font-bold leading-snug text-[#2e3192]"
            style={{
              fontSize: fluid(24, 16),
              fontVariationSettings: '"opsz" 12, "wdth" 100',
            }}
          >
            {feature.title}
          </h4>

          <p
            className="font-['Poppins'] font-normal text-[#333]"
            style={{ fontSize: fluid(18, 13) }}
          >
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
      className="bg-white"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(70, 32),
      }}
      aria-labelledby="quality-heading"
    >
      <div className="mx-auto w-full" style={{ maxWidth: contentMax }}>
        <div className="flex flex-col overflow-hidden lg:flex-row" style={{ borderRadius: s(24) }}>
          <div
            className="flex w-full flex-col items-center lg:w-[373px] lg:shrink-0 lg:rounded-l-[16px] lg:rounded-tr-none"
            style={{
              gap: fluid(40, 20),
              backgroundColor: "#333333",
              paddingLeft: s(25),
              paddingRight: s(25),
              paddingTop: s(29),
              paddingBottom: s(47),
            }}
          >
            <div
              className="flex w-full flex-col items-center lg:max-w-none"
              style={{ maxWidth: s(510), gap: fluid(50, 24) }}
            >
              <div className="flex w-full flex-col items-center" style={{ gap: fluid(25, 14) }}>
                <div
                  className="flex shrink-0 items-center justify-center rounded-full border-[#cca466] bg-[#fcf9f2]"
                  style={{ height: s(100), width: s(100), borderWidth: s(5) }}
                >
                  <img src={imgQualityBadge} alt="" style={{ height: s(45), width: s(36) }} />
                </div>

                <div className="flex w-full flex-col items-center" style={{ gap: s(5) }}>
                  <h3
                    className="text-center font-['Playfair_Display'] font-bold text-[#dec49c]"
                    style={{
                      fontSize: fluid(32, 22),
                      fontVariationSettings: '"opsz" 12, "wdth" 100',
                    }}
                  >
                    Quality Assured
                  </h3>

                  <img
                    src={imgQualityDecor}
                    alt=""
                    className="max-w-full"
                    style={{ height: s(10), width: s(250) }}
                  />

                  <p
                    className="text-center font-['Poppins'] font-normal text-[#f4f4f4]"
                    style={{ fontSize: fluid(18, 14) }}
                  >
                    Manufactured in our ISO-certified facility, adhering to
                    quality, safety, and hygiene standards for premium product
                    excellence.
                  </p>
                </div>
              </div>

              <div
                className="flex w-full items-center justify-between"
                style={{ maxWidth: s(420), gap: s(8) }}
              >
                {BADGES.map((badge, index) => (
                  <div key={badge.label} className="flex items-center">
                    <div
                      className="flex flex-col items-center"
                      style={{ width: s(85), gap: s(10) }}
                    >
                      <img src={badge.icon} alt="" style={{ height: s(30), width: s(30) }} />
                      <p
                        className="text-center font-['Playfair_Display'] font-medium leading-tight text-white"
                        style={{ fontSize: fluid(20, 11) }}
                      >
                        {badge.label}
                      </p>
                    </div>
                    {index < BADGES.length - 1 && (
                      <div
                        className="hidden sm:block"
                        style={{
                          marginLeft: s(4),
                          marginRight: s(4),
                          height: s(70),
                          width: s(2),
                          borderRadius: s(10),
                          backgroundColor: "rgba(217,217,217,0.3)",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex w-full flex-col items-stretch"
              style={{ maxWidth: s(510), gap: fluid(25, 14) }}
            >
              <div className="flex flex-col items-center" style={{ gap: s(5) }}>
                <h3
                  className="text-center font-['Playfair_Display'] font-bold text-[#dec49c]"
                  style={{
                    fontSize: fluid(32, 22),
                    fontVariationSettings: '"opsz" 12, "wdth" 100',
                  }}
                >
                  Our Two Brands
                </h3>

                <img
                  src={imgQualityDecor}
                  alt=""
                  className="max-w-full"
                  style={{ height: s(10), width: s(250) }}
                />
              </div>

              <div
                className="flex w-full flex-col items-center justify-center sm:flex-row"
                style={{ gap: s(15) }}
              >
                {BRANDS.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex w-full items-center justify-center border border-[#d7dae4] bg-[#fcf9f2]"
                    style={{
                      height: s(212),
                      maxWidth: s(245),
                      borderRadius: s(10),
                      paddingLeft: s(30),
                      paddingRight: s(30),
                      paddingTop: s(60),
                      paddingBottom: s(60),
                    }}
                  >
                    <div className="flex flex-col items-center" style={{ gap: s(3) }}>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="object-contain"
                        style={{ height: s(60), width: s(60) }}
                      />

                      <p
                        className="text-center font-['Playfair_Display'] font-bold text-[#2e3192]"
                        style={{
                          fontSize: fluid(24, 16),
                          fontVariationSettings: '"opsz" 12, "wdth" 100',
                        }}
                      >
                        {brand.name}
                      </p>

                      <div
                        className="bg-[#cca466]"
                        style={{ height: s(3), width: s(65), borderRadius: s(20) }}
                      />

                      <p
                        className="text-center font-['Poppins'] font-normal leading-snug text-[#333]"
                        style={{ fontSize: fluid(18, 12) }}
                      >
                        {brand.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="flex flex-1 flex-col justify-center border border-[#d7dae4] bg-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)]"
            style={{
              gap: fluid(40, 20),
              padding: fluid(40, 24),
              borderTopRightRadius: s(20),
              borderBottomRightRadius: s(20),
            }}
          >
            <div className="flex flex-col" style={{ maxWidth: s(770) }}>
              <p
                className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
                style={{ fontSize: fluid(18, 13), letterSpacing: "0.12em" }}
              >
                Why You'll Love It
              </p>

              <h2
                id="quality-heading"
                className="font-['Playfair_Display'] font-bold capitalize leading-tight text-[#2e3192]"
                style={{
                  fontSize: fluid(36, 24),
                  fontVariationSettings: '"opsz" 12, "wdth" 100',
                }}
              >
                Experience the Kamakhya Difference
              </h2>

              <img
                src={imgSubtract}
                alt=""
                className="max-w-full"
                style={{ marginTop: s(14), height: s(10), width: s(300) }}
              />
            </div>

            <div className="grid flex-1 grid-cols-1 sm:grid-cols-2" style={{ gap: fluid(40, 16) }}>
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
