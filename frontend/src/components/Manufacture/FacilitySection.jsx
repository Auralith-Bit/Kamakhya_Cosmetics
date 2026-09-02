import vectorGold from "../../assets/Vector (1) Gold.svg";
import imgManufacturing from "../../assets/manufactureAssets/aboutManu.png"; // ✏️ REPLACED: local image
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

/* ✅ inline icons — no asset dependency, always render */
const IconFlask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3h5M9.5 3v6l-5.2 8.6A2.4 2.4 0 0 0 6.4 21h11.2a2.4 2.4 0 0 0 2.1-3.4L14.5 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9" />
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5" />
    <path d="M9.5 13.5 8 21l4-2 4 2-1.5-7.5" />
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1b1b1b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 5.5v13l11-6.5Z" />
  </svg>
);

const FEATURES = [
  { Icon: IconFlask,  label: "Advanced\nManufacturing" },
  { Icon: IconShield, label: "Quality\nAssurance" },
  { Icon: IconAward,  label: "International\nCertifications" },
  { Icon: IconLeaf,   label: "Sustainable\nPractices" },
];

const FacilitySection = () => {
  return (
    <section
      className="bg-[#f5f7fa]"
      style={{
        paddingLeft: fluid(178, 20),
        paddingRight: fluid(50, 20),
        paddingTop: fluid(100, 40),
        paddingBottom: fluid(100, 40),
      }}
      aria-labelledby="facility-heading"
    >
      <div
        className="mx-auto flex w-full flex-col items-center lg:flex-row"
        style={{
          maxWidth: "100%",
          /* ✅ DESKTOP GAP widened 100 → 160; mobile gap (24) untouched.
             Right column is lg:flex-1, so it naturally compresses to fit —
             no mobile shift, no alignment changes. */
          columnGap: fluid(160, 24),
          rowGap: fluid(60, 24),
        }}
      >
        {/* Left: Video / Image */}
        <div
          className="relative w-full overflow-hidden lg:w-auto lg:shrink-0"
          style={{
            width: s(950),
            height: "auto",
            aspectRatio: "890 / 590",
            maxWidth: "100%",
            borderRadius: s(10),
          }}
        >
          <img
            src={imgManufacturing}
            alt="Inside Kamakhya Cosmetics manufacturing facility"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* dark tint overlay — matches the Figma original */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "rgba(0, 0, 0, 0.28)" }}
          />

          <button
            aria-label="Play manufacturing facility video"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform "
            style={{ height: s(72), width: s(72), borderRadius: s(12) }}
          >
            <span style={{ height: s(30), width: s(30), display: "block", alignItems: "center", justifyContent: "center" }}>
              <PlayIcon />
            </span>
          </button>
        </div>

        {/* Right: Content */}
        <div
          className="flex w-full flex-col lg:flex-1"
          style={{ maxWidth: s(800), gap: fluid(48, 24) }}
        >
          <div className="flex flex-col" style={{ gap: fluid(28, 16) }}>
            <div className="flex flex-col" style={{ gap: fluid(30, 16) }}>
              {/* --- TAG / EYEBROW --- */}
              <div
                className="flex flex-col justify-center"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  gap: fluid(12, 8),
                }}
              >
                <p
                  className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
                  style={{ fontSize: fluid(17, 15), letterSpacing: "0.15em" }}
                >
                  Our Manufacturing Facility
                </p>

                <img
                  src={vectorGold}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: s(90),
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>

              {/* --- TITLE --- */}
              <h2
                id="facility-heading"
                className="font-['Playfair_Display'] font-bold leading-[1.25] lg:whitespace-nowrap"
                style={{ fontSize: fluid(25, 20), maxWidth: "100%", letterSpacing: "0.095em" }}
              >
                <span className="text-[#2e3192]">The World-Class </span>
                <span className="text-[#e38f2e]">Manufacturing</span>
                <span className="text-[#2e3192]">, You Can Trust</span>
              </h2>
            </div>

            {/* --- PARAGRAPHS --- */}
            <div
              className="flex w-full flex-col font-poppins text-left lg:text-justify"
              style={{
                gap: fluid(24, 14),
                fontSize: fluid(16, 15),
                fontWeight: 400,
                color: "#121212",
                textAlign: "justify",
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "0.0011em",
                lineHeight: 1.7,
              }}
            >
              <p>
                Our modern manufacturing facility combines advanced technology,
                skilled professionals, and strict quality standards to produce
                premium beauty and home care products with precision, safety,
                and consistency.
              </p>
              <p>
                Every stage—from raw material selection and production to
                quality testing and packaging—is carefully monitored to ensure
                products you can trust.
              </p>
            </div>
          </div>

          {/* Feature icons */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              gap: fluid(16, 12),
              width: "100%",
            }}
          >
            {FEATURES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col items-center"
                style={{ gap: fluid(19, 10) }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full border-[#e38f2e] text-[#e38f2e]"
                  style={{ height: s(74), width: s(74), borderWidth: s(1.5) }}
                >
                  <span style={{ height: s(34), width: s(34), display: "block", alignItems: "center", justifyContent: "center" }}>
                    <Icon />
                  </span>
                </div>

                <p
                  className="whitespace-pre-line text-center font-['Poppins'] font-medium leading-snug text-[#121212]"
                  style={{ fontSize: fluid(18, 14) }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;