import imgHomeBanner from "../../assets/manufactureAssets/homeBanner.png"; // ✏️ UPDATED path
import { ChevronRight, Home } from "lucide-react";
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

const HERO_SHIFT = 8;

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: fluid(450, 220),
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
      }}
      aria-label="Hero banner"
    >
      {/* ✏️ REPLACED background image */}
      <img
        src={imgHomeBanner}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(247, 241, 232, 1) 0%, rgba(247, 241, 232, 0.7) 45%, rgba(247, 241, 232, 0) 65%)",
        }}
      />

      <div
        className="relative z-10 mx-auto flex w-full flex-col"
        style={{
          maxWidth: contentMax,
          gap: fluid(20, 12),
          paddingTop: fluid(97, 40),
          paddingBottom: fluid(97, 40),
          marginLeft: s(HERO_SHIFT), // ✅ editable shift (was centered)
        }}
      >
        <div
          className="flex w-full flex-col"
          style={{ maxWidth: s(372), gap: fluid(20, 12) }}
        >
          <nav aria-label="Breadcrumb">
            <ol
              className="flex flex-wrap items-center"
              style={{ gap: fluid(10, 8) }}
            >
              <li className="flex items-center" style={{ gap: s(8) }}>
                <Home
                  className="flex-none text-[#2e3192]"
                  strokeWidth={2.5}
                  style={{ height: s(32), width: s(32) }}
                  aria-hidden="true"
                />

                <a
                  href="/"
                  className="font-['Playfair_Display'] font-bold text-[#2e3192] hover:underline"
                  style={{ fontSize: fluid(28, 18) }}
                >
                  Home
                </a>
              </li>

              <li className="flex items-center">
                <ChevronRight
                  className="text-[#252775]"
                  strokeWidth={3.5} // ✅ BOLD chevron (default is 2, higher = thicker)
                  style={{ height: s(30), width: s(30) }}
                  aria-hidden="true"
                />
              </li>

              <li>
                <span
                  className="font-['Playfair_Display'] font-bold text-[#2e3192]"
                  style={{ fontSize: fluid(28, 18) }}
                  aria-current="page"
                >
                  Manufacturing
                </span>
              </li>
            </ol>
          </nav>

          <div
            className="flex w-full flex-col"
            style={{ maxWidth: s(320), gap: fluid(10, 6) }}
          >
            <p
              className="font-['Poppins'] font-medium text-[#e38f2e]"
              style={{ fontSize: fluid(28, 18) }}
            >
              Where Quality Begins
            </p>

            {/* ✅ ONLY CHANGE: img asset → coded rule (react element), exactly as the design */}
            <div
              aria-hidden="true"
              className="rounded-full bg-[#e38f2e]"
              style={{ height: s(3), width: s(135) }}
            />
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{ maxWidth: s(800), gap: fluid(10, 6) }}
        >
          <h1
            className="font-['Playfair_Display'] font-bold leading-tight text-[#2e3192]"
            style={{ fontSize: fluid(54, 28) }}
          >
            Our Manufacturing
          </h1>

          <p
            className="font-['Poppins'] font-medium text-[#70768a]"
            style={{ maxWidth: s(800), fontSize: fluid(20, 15) }}
          >
            Discover our advanced manufacturing process built on quality,
            innovation, and trust every day.
          </p>
        </div>
      </div>
    </section>
  );
}