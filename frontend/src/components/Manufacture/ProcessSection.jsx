import {
  imgImage37,
  imgImage38,
  imgImage40,
  imgImage39,
  imgImage41,
  imgIconProcess1,
  imgIconProcess2,
  imgIconProcess3,
  imgIconProcess4,
  imgIconProcess5,
} from "../../assets/figmaAssets";

const STEPS = [
  {
    step: "01",
    title: "Raw Material Selection",
    description:
      "We source finest natural and premium ingredients from trusted suppliers.",
    image: imgImage37,
    icon: imgIconProcess2,
    lower: false,
  },
  {
    step: "02",
    title: "Research & Formulation",
    description:
      "Our expert team blends science and nature to create safe, effective beauty formulas.",
    image: imgImage38,
    icon: imgIconProcess3,
    lower: true,
  },
  {
    step: "03",
    title: "Manufacturing & Process",
    description:
      "Using advanced technology, we manufacture every product with precision and hygiene.",
    image: imgImage40,
    icon: imgIconProcess1,
    lower: false,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Every batch undergoes rigorous testing to ensure safety, purity, and quality.",
    image: imgImage39,
    icon: imgIconProcess4,
    lower: true,
  },
  {
    step: "05",
    title: "Packaging & Distribution",
    description:
      "Products are carefully packaged, sealed, and delivered with quality standards.",
    image: imgImage41,
    icon: imgIconProcess5,
    lower: false,
  },
];

const WAVE_HEIGHT = 560;
const ICON_SIZE = 52;
const TOP_POSITION = 26;
const BOTTOM_POSITION = TOP_POSITION + 220;

const POSITIONS = [
  { x: 100, y: TOP_POSITION },
  { x: 300, y: BOTTOM_POSITION },
  { x: 500, y: TOP_POSITION },
  { x: 700, y: BOTTOM_POSITION },
  { x: 900, y: TOP_POSITION },
];

const Wave = () => {
  let path = `M ${POSITIONS[0].x} ${POSITIONS[0].y}`;

  for (let i = 0; i < POSITIONS.length - 1; i++) {
    const current = POSITIONS[i];
    const next = POSITIONS[i + 1];
    const middleX = (current.x + next.x) / 2;

    path += ` C ${middleX} ${current.y}, ${middleX} ${next.y}, ${next.x} ${next.y}`;
  }

  return (
    <svg
      viewBox={`0 0 1000 ${WAVE_HEIGHT}`}
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="#CCA466" strokeWidth="2" strokeLinecap="round" />

      {POSITIONS.map((position, index) => (
        <circle
          key={index}
          cx={position.x}
          cy={position.y}
          r="5"
          fill="#CCA466"
        />
      ))}
    </svg>
  );
};

const Underline = () => {
  return (
    <svg
      width="160"
      height="22"
      viewBox="0 0 160 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 8 14 C 30 4, 50 20, 80 11 S 130 4, 152 14"
        stroke="#CCA466"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const ProcessCard = ({ step }) => {
  return (
    <article className="relative w-full overflow-visible rounded-[16px] border border-[#d7dae4] bg-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.1)]">
      {/* Step Number */}
      <div className="absolute -top-[14px] left-7 z-10 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#fcf9f2] bg-[#2e3192]">
        <span className="font-['Poppins'] text-[11px] font-bold text-[#f2e8d9]">
          {step.step}
        </span>
      </div>

      {/* Image */}
      <div className="h-[155px] overflow-hidden rounded-t-[16px]">
        <img
          src={step.image}
          alt={step.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 p-3 text-center">
        <h3
          className="font-['Playfair_Display'] text-[14px] font-bold leading-snug text-[#2e3192]"
          style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
        >
          {step.title}
        </h3>

        <p className="font-['Poppins'] text-[12px] leading-relaxed text-[#444]">
          {step.description}
        </p>
      </div>
    </article>
  );
};

const ProcessSection = () => {
  return (
    <section
      className="bg-[#fcf9f2] px-4 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="flex max-w-[700px] flex-col items-center gap-2 text-center">
          <p className="font-['Poppins'] text-[14px] font-semibold uppercase tracking-[2px] text-[#e38f2e] lg:text-[18px]">
            Why Our Manufacturing
          </p>

          <h2
            id="process-heading"
            className="font-['Playfair_Display'] text-[26px] font-bold capitalize leading-tight text-[#2e3192] lg:text-[34px]"
            style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}
          >
            Where Quality Meets Precision
          </h2>

          <Underline />

          <p className="font-['Poppins'] text-[15px] font-medium leading-relaxed text-[#555] lg:text-[18px]">
            From premium ingredients to advanced production and rigorous quality
            checks, every step of our manufacturing process ensures safe,
            consistent, and high-quality products.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden w-full lg:block">
          <div
            className="relative w-full"
            style={{ height: `${WAVE_HEIGHT}px` }}
          >
            <Wave />

            <div className="absolute inset-0 flex items-start justify-between">
              {STEPS.map((step, index) => {
                const position = POSITIONS[index];
                const iconTop = position.y - ICON_SIZE / 2;
                const cardTop = iconTop + ICON_SIZE + 8;

                return (
                  <div key={step.step} className="relative mx-1 h-full flex-1">
                    {/* Icon */}
                    <div
                      className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fcf9f2] bg-[#2e3192]"
                      style={{
                        top: `${iconTop}px`,
                        width: `${ICON_SIZE}px`,
                        height: `${ICON_SIZE}px`,
                      }}
                    >
                      <img src={step.icon} alt="" className="h-7 w-7" />
                    </div>

                    {/* Card */}
                    <div
                      className="absolute left-0 right-0"
                      style={{ top: `${cardTop}px` }}
                    >
                      <ProcessCard step={step} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden w-full grid-cols-2 gap-6 sm:grid lg:hidden">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className={
                step.step === "05"
                  ? "col-span-2 mx-auto w-full max-w-[360px]"
                  : ""
              }
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-4 border-[#fcf9f2] bg-[#2e3192]">
                  <img src={step.icon} alt="" className="h-[22px] w-[22px]" />
                </div>

                <ProcessCard step={step} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col gap-6 sm:hidden">
          {STEPS.map((step) => (
            <div key={step.step} className="flex flex-col items-center gap-2">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-4 border-[#fcf9f2] bg-[#2e3192]">
                <img src={step.icon} alt="" className="h-[22px] w-[22px]" />
              </div>

              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
