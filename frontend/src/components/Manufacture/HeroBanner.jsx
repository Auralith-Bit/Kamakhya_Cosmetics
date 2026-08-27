import {
  imgImage36,
  imgHomeIcon,
  imgChevron,
  imgUnderline,
} from "../../assets/figmaAssets";

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[280px] overflow-hidden sm:min-h-[350px] lg:min-h-[450px]"
      aria-label="Hero banner"
    >
      {/* Background */}
      <img
        src={imgImage36}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8] via-[rgba(247,241,232,0.7)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 px-4 py-12 sm:px-8 lg:gap-5 lg:px-8 lg:py-20 xl:px-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li className="flex items-center gap-1.5">
              <img
                src={imgHomeIcon}
                alt=""
                className="h-5 w-5 lg:h-[22px] lg:w-[22px]"
              />

              <a
                href="/"
                className="font-['Playfair_Display'] text-[18px] font-bold text-[#2e3192] hover:underline lg:text-[22px]"
              >
                Home
              </a>
            </li>

            <li>
              <img
                src={imgChevron}
                alt=""
                className="h-[14px] w-[9px] -rotate-90 lg:h-[18px] lg:w-[11px]"
              />
            </li>

            <li>
              <span
                className="font-['Playfair_Display'] text-[18px] font-bold text-[#2e3192] lg:text-[22px]"
                aria-current="page"
              >
                Manufacturing
              </span>
            </li>
          </ol>
        </nav>

        {/* Tag */}
        <div>
          <p className="font-['Poppins'] text-[16px] font-medium text-[#e38f2e] lg:text-[18px]">
            Where Quality Begins
          </p>

          <img
            src={imgUnderline}
            alt=""
            className="mt-1 w-[100px] lg:w-[125px]"
          />
        </div>

        {/* Heading */}
        <div className="max-w-[712px]">
          <h1 className="font-['Playfair_Display'] text-[30px] font-bold leading-tight text-[#2e3192] sm:text-[38px] lg:text-[44px]">
            Our Manufacturing
          </h1>

          <p className="mt-2 max-w-[560px] font-['Poppins'] text-[15px] font-medium text-[#70768a] lg:mt-2.5 lg:text-[18px]">
            Discover our advanced manufacturing process built on quality,
            innovation, and trust every day.
          </p>
        </div>
      </div>
    </section>
  );
}
