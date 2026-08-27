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
  imgWaveDecor,
} from "../../assets/figmaAssets";
import { contentMax, fluid, pagePadX, s, SCALE } from "./figmaScale";

const STEPS = [
  {
    step: "01",
    title: "Raw Material Selection",
    description:
      "We source finest natural and premium ingredients from trusted suppliers.",
    image: imgImage37,
    icon: imgIconProcess2,
    align: "bottom",
    numberSide: "left",
  },
  {
    step: "02",
    title: "Research & Formulation",
    description:
      "Our expert team blends science and nature to create safe, effective beauty formulas.",
    image: imgImage38,
    icon: imgIconProcess3,
    align: "top",
    numberSide: "right",
  },
  {
    step: "03",
    title: "Manufacturing & Process",
    description:
      "Using advanced technology, we manufacture every product with precision and hygiene.",
    image: imgImage40,
    icon: imgIconProcess1,
    align: "bottom",
    numberSide: "left",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Every batch undergoes rigorous testing to ensure safety, purity, and quality.",
    image: imgImage39,
    icon: imgIconProcess4,
    align: "top",
    numberSide: "right",
  },
  {
    step: "05",
    title: "Packaging & Distribution",
    description:
      "Products are carefully packaged, sealed, and delivered with quality standards.",
    image: imgImage41,
    icon: imgIconProcess5,
    align: "mid",
    numberSide: "left",
  },
];

const WAVE_VIEW = { w: 1580, h: 1116 };

const ICON_CENTERS = [
  { x: 189, y: 641 },
  { x: 478, y: 599 },
  { x: 803, y: 513 },
  { x: 1093, y: 497 },
  { x: 1390, y: 303 },
];

const DESKTOP_LAYOUT = [
  { left: 0, top: 601 },
  { left: 316, top: 100 },
  { left: 640, top: 473 },
  { left: 901, top: 0 },
  { left: 1254, top: 263 },
];

const Wave = () => {
  let path = `M ${ICON_CENTERS[0].x} ${ICON_CENTERS[0].y}`;

  for (let i = 0; i < ICON_CENTERS.length - 1; i++) {
    const current = ICON_CENTERS[i];
    const next = ICON_CENTERS[i + 1];
    const middleX = (current.x + next.x) / 2;
    path += ` C ${middleX} ${current.y}, ${middleX} ${next.y}, ${next.x} ${next.y}`;
  }

  return (
    <svg
      viewBox={`0 0 ${WAVE_VIEW.w} ${WAVE_VIEW.h}`}
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="#E38F2E" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};

const ProcessCard = ({ step }) => {
  return (
    <article
      className="relative w-full overflow-visible border border-[#d7dae4] bg-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)]"
      style={{ borderRadius: s(20) }}
    >
      <div
        className="absolute z-10 flex items-center justify-center rounded-full border-[#fcf9f2] bg-[#2e3192]"
        style={{
          top: s(-20),
          height: s(40),
          width: s(40),
          borderWidth: s(4),
          [step.numberSide === "right" ? "right" : "left"]:
            step.numberSide === "right" ? s(23) : s(37),
        }}
      >
        <span
          className="font-['Poppins'] font-bold text-[#f2e8d9]"
          style={{ fontSize: fluid(16, 11) }}
        >
          {step.step}
        </span>
      </div>

      <div className="overflow-hidden" style={{ height: s(233), borderRadius: `${s(20)} ${s(20)} 0 0` }}>
        <img
          src={step.image}
          alt={step.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="flex flex-col items-center text-center"
        style={{ gap: s(6), paddingLeft: s(16), paddingRight: s(16), paddingTop: s(15), paddingBottom: s(15) }}
      >
        <h3
          className="font-['Playfair_Display'] font-bold leading-snug text-[#2e3192]"
          style={{
            fontSize: fluid(24, 16),
            fontVariationSettings: '"opsz" 12, "wdth" 100',
          }}
        >
          {step.title}
        </h3>

        <p
          className="font-['Poppins'] font-normal text-[#121212]"
          style={{ fontSize: fluid(18, 13) }}
        >
          {step.description}
        </p>
      </div>
    </article>
  );
};

const ProcessColumn = ({ step }) => {
  const icon = (
    <div
      className="relative z-10 flex shrink-0 items-center justify-center rounded-full border-[#f2e8d9] bg-[#2e3192]"
      style={{ height: s(80), width: s(80), borderWidth: s(8) }}
    >
      <img src={step.icon} alt="" style={{ height: s(35), width: s(35) }} />
    </div>
  );

  const connector = (
    <div
      className="w-0 border-[#e38f2e]"
      style={{ height: s(57), borderLeftWidth: s(3) }}
      aria-hidden="true"
    />
  );

  return (
    <div className="flex w-full flex-col items-center">
      {step.align === "top" ? (
        <>
          <ProcessCard step={step} />
          {connector}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {connector}
          <ProcessCard step={step} />
        </>
      )}
    </div>
  );
};

const ProcessSection = () => {
  const timelineH = 1116 * SCALE;

  return (
    <section
      className="bg-[#fcf9f2]"
      style={{
        paddingLeft: pagePadX,
        paddingRight: pagePadX,
        paddingTop: fluid(70, 32),
        paddingBottom: fluid(100, 40),
      }}
      aria-labelledby="process-heading"
    >
      <div
        className="mx-auto flex w-full flex-col items-center"
        style={{ maxWidth: contentMax, gap: fluid(50, 24) }}
      >
        <div
          className="flex w-full flex-col items-center text-center"
          style={{ maxWidth: s(948) }}
        >
          <p
            className="font-['Poppins'] font-semibold uppercase text-[#e38f2e]"
            style={{ fontSize: fluid(18, 13), letterSpacing: "0.12em" }}
          >
            Why Our Manufacturing
          </p>

          <h2
            id="process-heading"
            className="font-['Playfair_Display'] font-bold capitalize leading-tight text-[#2e3192]"
            style={{
              fontSize: fluid(36, 24),
              fontVariationSettings: '"opsz" 12, "wdth" 100',
            }}
          >
            Where Quality Meets Precision
          </h2>

          <img
            src={imgWaveDecor}
            alt=""
            style={{ height: s(24), width: s(172) }}
          />

          <p
            className="font-['Poppins'] font-medium text-[#666]"
            style={{ maxWidth: s(943), fontSize: fluid(20, 14) }}
          >
            From premium ingredients to advanced production and rigorous quality
            checks, every step of our manufacturing process ensures safe,
            consistent, and high-quality products.
          </p>
        </div>

        <div className="relative hidden w-full xl:block">
          <div className="relative mx-auto w-full" style={{ height: `${timelineH}px`, maxWidth: contentMax }}>
            <Wave />
            {STEPS.map((step, index) => {
              const pos = DESKTOP_LAYOUT[index];
              return (
                <div
                  key={step.step}
                  className="absolute z-10"
                  style={{
                    left: `${(pos.left / WAVE_VIEW.w) * 100}%`,
                    top: pos.top * SCALE,
                    width: `${(325 / WAVE_VIEW.w) * 100}%`,
                  }}
                >
                  <ProcessColumn step={step} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden w-full grid-cols-2 sm:grid xl:hidden" style={{ gap: fluid(40, 20) }}>
          {STEPS.map((step) => (
            <div
              key={step.step}
              className={
                step.step === "05"
                  ? "col-span-2 mx-auto w-full"
                  : "mx-auto w-full"
              }
              style={{ maxWidth: s(325) }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex items-center justify-center rounded-full border-[#f2e8d9] bg-[#2e3192]"
                  style={{ height: s(80), width: s(80), borderWidth: s(8) }}
                >
                  <img src={step.icon} alt="" style={{ height: s(35), width: s(35) }} />
                </div>
                <div className="w-0 border-[#e38f2e]" style={{ height: s(24), borderLeftWidth: s(3) }} />
                <ProcessCard step={step} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center sm:hidden" style={{ gap: fluid(40, 20) }}>
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="flex w-full flex-col items-center"
              style={{ maxWidth: s(325) }}
            >
              <div
                className="flex items-center justify-center rounded-full border-[#f2e8d9] bg-[#2e3192]"
                style={{ height: s(80), width: s(80), borderWidth: s(8) }}
              >
                <img src={step.icon} alt="" style={{ height: s(35), width: s(35) }} />
              </div>
              <div className="w-0 border-[#e38f2e]" style={{ height: s(24), borderLeftWidth: s(3) }} />
              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
