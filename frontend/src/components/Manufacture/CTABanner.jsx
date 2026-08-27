import { imgQuoteIcon } from "../../assets/figmaAssets";
import { useNavigate } from "react-router-dom";
import { contentMax, fluid, pagePadX, s } from "./figmaScale";

const CTABanner = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(57, 32),
        paddingBottom: fluid(57, 32),
      }}
      aria-label="Call to action"
    >
      <div className="absolute inset-0 bg-[#0A1230]" />

      <div
        className="absolute inset-0 border-y border-white/15 bg-white/5"
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex w-full flex-col items-start justify-between lg:flex-row lg:items-center"
        style={{
          minHeight: fluid(300, 180),
          maxWidth: contentMax,
          gap: fluid(231, 24),
        }}
      >
        <div
          className="flex w-full flex-col"
          style={{ maxWidth: s(859), gap: fluid(20, 12) }}
        >
          <div
            className="flex flex-col"
            style={{ maxWidth: s(651), gap: s(5) }}
          >
            <p
              className="font-['Poppins'] font-medium text-[#cca466]"
              style={{ fontSize: fluid(18, 14) }}
            >
              Ready to source from Kamakhya?
            </p>

            <h2
              className="font-['Playfair_Display'] font-medium text-white"
              style={{
                fontSize: fluid(38, 24),
                lineHeight: fluid(40, 30),
                fontVariationSettings: '"opsz" 12, "wdth" 100',
              }}
            >
              Start a reliable beauty and home-care partnership.
            </h2>
          </div>

          <p
            className="font-['Poppins'] font-normal text-[#d9d9d9]"
            style={{ fontSize: fluid(18, 14) }}
          >
            Tell us what you need, your target quantity and delivery market. Our
            trade team will prepare the appropriate next step.
          </p>
        </div>

        <div
          className="flex w-full flex-col items-stretch sm:w-auto sm:flex-row sm:items-center lg:shrink-0"
          style={{ gap: fluid(30, 12) }}
        >
          <button
            onClick={() => navigate("/bulk-quote")}
            className="flex w-full items-center justify-center bg-[#cca466] transition-colors hover:bg-[#b8935a] focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-[153px] sm:max-w-[153px]"
            style={{
              height: s(50),
              gap: s(7),
              borderRadius: s(7),
            }}
          >
            <span
              className="whitespace-nowrap font-['Poppins'] font-medium text-[#151642]"
              style={{ fontSize: fluid(18, 14) }}
            >
              Request Quote
            </span>

            <img
              src={imgQuoteIcon}
              alt=""
              style={{ height: s(12), width: s(14) }}
            />
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center justify-center border-2 border-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-[153px] sm:max-w-[153px]"
            style={{
              height: s(50),
              borderRadius: s(7),
            }}
          >
            <span
              className="whitespace-nowrap font-['Poppins'] font-medium text-white"
              style={{ fontSize: fluid(18, 14) }}
            >
              Explore Collections
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
