import processBar from "../../assets/manufactureAssets/processBAR.png";
import {
  imgImage37,
  imgImage38,
  imgImage40,
  imgImage39,
  imgImage41,
  imgWaveDecor,
} from "../../assets/figmaAssets";
import iconPlant from "../../assets/manufactureAssets/Vector.svg";
import iconLab from "../../assets/manufactureAssets/lab.svg";
import iconSetting from "../../assets/manufactureAssets/setting.svg";
import iconBox from "../../assets/manufactureAssets/Box.svg";
import iconTruck from "../../assets/manufactureAssets/truck.svg";
import { contentMax, fluid, pagePadX, s, SCALE } from "./figmaScale";

/* ═══════════════════════════════════════════════════════════
   ✏️ EDIT EVERYTHING HERE
═══════════════════════════════════════════════════════════ */

const CANVAS = { w: 1580, h: 1116 }; // timeline design box

const DEBUG = false; // set true to see red ✕ anchors while adjusting

// ── SECTION HORIZONTAL POSITION ──
// 👉 move whole container LEFT:  decrease left / increase right
// 👉 move whole container RIGHT: increase left / decrease right
const SECTION_PAD = {
  left: 0,
  right: 150,
};
// ── THE CURVY LINE placement ──
const WAVE = {
  left: -70, // 👈 line left/right
  width: 1820, // 👈 line total width
  top: 200, // 👈 line up/down
};

// ── LINE CLIP: line is cut exactly at card-01 left / card-05 right ──
const LINE_CLIP = {
  left: 27,
  width: 2000,
};

const SIZE = {
  cardWidth: 325,
  cardRadius: 20,
  cardImageH: 233,
  badge: 40,
  badgeBorder: 4,
  circle: 80,
  circleBorder: 8,
  circleIcon: 35,
  connectorH: 57,
  connectorW: 3,
  dot: 12,
  cardTextGap: 10,
  cardPadX: 18,
  cardPadY: 20,
  descLineHeight: 1.6,
  desktopTopSpace: 110, // gap between heading & timeline (desktop only)
};

/* ⭐ TO PUT AN ICON ON THE LINE: change its x / y below. */
const STEPS = [
  {
    step: "01",
    title: "Raw Material Selection",
    description:
      "We source finest natural and premium ingredients from trusted suppliers.",
    image: imgImage37,
    icon: iconPlant,
    x: 189,
    y: 625, // ✅ on the line
    align: "bottom",
    numberSide: "left",
  },
  {
    step: "02",
    title: "Research & Formulation",
    description:
      "Our expert team blends science and nature to create safe, effective beauty formulas.",
    image: imgImage38,
    icon: iconLab,
    x: 465,
    y: 585,
    align: "top",
    numberSide: "right",
  },
  {
    step: "03",
    title: "Manufacturing & Process",
    description:
      "Using advanced technology, we manufacture every product with precision and hygiene.",
    image: imgImage40,
    icon: iconSetting,
    x: 850,
    y: 475,
    align: "bottom",
    numberSide: "left",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Every batch undergoes rigorous testing to ensure safety, purity, and quality.",
    image: imgImage39,
    icon: iconBox,
    x: 1150,
    y: 470,
    align: "top",
    numberSide: "right",
  },
  {
    step: "05",
    title: "Packaging & Distribution",
    description:
      "Products are carefully packaged, sealed, and delivered with quality standards.",
    image: imgImage41,
    icon: iconTruck,
    x: 1553,
    y: 215,
    align: "bottom",
    numberSide: "left",
  },
];

/* ═══════════════════════════════════════════════════════════
   Components
═══════════════════════════════════════════════════════════ */

const NumberBadge = ({ step }) => (
  <div
    className="absolute z-10 flex items-center justify-center rounded-full border-[#fcf9f2] bg-[#2e3192]"
    style={{
      top: s(-20),
      height: s(SIZE.badge),
      width: s(SIZE.badge),
      borderWidth: s(SIZE.badgeBorder),
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
);

const ProcessCard = ({ step }) => (
  <article
    className="relative w-full overflow-visible border border-[#eee9df] bg-white shadow-[0px_8px_24px_-6px_rgba(0,0,0,0.08),0px_20px_50px_-12px_rgba(0,0,0,0.05)]"
    style={{ borderRadius: s(SIZE.cardRadius) }}
  >
    <NumberBadge step={step} />
    <div
      className="overflow-hidden"
      style={{
        height: s(SIZE.cardImageH),
        borderRadius: `${s(SIZE.cardRadius)} ${s(SIZE.cardRadius)} 0 0`,
      }}
    >
      <img
        src={step.image}
        alt={step.title}
        className="h-full w-full object-cover"
      />
    </div>
    <div
      className="flex flex-col items-center text-center"
      style={{
        gap: s(SIZE.cardTextGap),
        padding: `${s(SIZE.cardPadY)} ${s(SIZE.cardPadX)}`,
      }}
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
        style={{ fontSize: fluid(18, 13), lineHeight: SIZE.descLineHeight }}
      >
        {step.description}
      </p>
    </div>
  </article>
);

const IconCircle = ({ step }) => (
  <div
    className="relative z-10 flex shrink-0 items-center justify-center rounded-full border-[#f2e8d9] bg-[#2e3192]"
    style={{
      height: s(SIZE.circle),
      width: s(SIZE.circle),
      borderWidth: s(SIZE.circleBorder),
    }}
  >
    <img
      src={step.icon}
      alt=""
      style={{ height: s(SIZE.circleIcon), width: s(SIZE.circleIcon) }}
    />
  </div>
);

const Connector = () => (
  <div
    className="w-0 border-[#e38f2e]"
    style={{ height: s(SIZE.connectorH), borderLeftWidth: s(SIZE.connectorW) }}
    aria-hidden="true"
  />
);

const Dot = () => (
  <div
    className="shrink-0 rounded-full bg-[#e38f2e]"
    style={{ width: s(SIZE.dot), height: s(SIZE.dot) }}
    aria-hidden="true"
  />
);

const ProcessColumn = ({ step }) => (
  <div className="flex w-full flex-col items-center">
    {step.align === "top" ? (
      <>
        <ProcessCard step={step} />
        <Dot />
        <Connector />
        <IconCircle step={step} />
      </>
    ) : (
      <>
        <IconCircle step={step} />
        <Connector />
        <Dot />
        <ProcessCard step={step} />
      </>
    )}
  </div>
);

const ProcessSection = () => {
  const timelineH = CANVAS.h * SCALE;

  return (
    <section
      className="bg-[#FCF9F2]"
      style={{
        paddingLeft: s(SECTION_PAD.left), // ✅ editable left/right position
        paddingRight: s(SECTION_PAD.right),
        paddingTop: fluid(70, 32),
        paddingBottom: fluid(100, 40),
      }}
      aria-labelledby="process-heading"
    >
      <div
        className="mx-auto flex w-full flex-col items-center"
        style={{ maxWidth: contentMax, gap: fluid(50, 24) }}
      >
        {/* ── Heading ── */}
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

        {/* ── Desktop timeline (xl+) ── */}
        <div
          className="relative hidden w-full xl:block"
          style={{ marginTop: s(SIZE.desktopTopSpace) }}
        >
          <div
            className="relative mx-auto w-full"
            style={{ height: `${timelineH}px`, maxWidth: contentMax }}
          >
            {/* ── processBAR.png —
                 ✅ clip box is now vertically HUGE (top -1000 / height 4000)
                 so the line's soft shadow is NEVER cut off top/bottom.
                 Only left/right is clipped (at card 01 / card 05 margins). ── */}
            <div
              className="pointer-events-none absolute overflow-hidden"
              style={{
                left: `${(LINE_CLIP.left / CANVAS.w) * 100}%`,
                width: `${(LINE_CLIP.width / CANVAS.w) * 100}%`,
                top: -1000,
                height: 4000,
              }}
            >
              <div
                className="absolute"
                style={{
                  left: `${((WAVE.left - LINE_CLIP.left) / LINE_CLIP.width) * 100}%`,
                  width: `${(WAVE.width / LINE_CLIP.width) * 100}%`,
                  top: WAVE.top * SCALE + 1000, // ✅ +1000 compensates the tall clip box
                }}
              >
                <img
                  src={processBar}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* ── DEBUG anchors ── */}
            {DEBUG &&
              STEPS.map((st) => (
                <div
                  key={st.step}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-[18px] font-bold text-red-500"
                  style={{
                    left: `${(st.x / CANVAS.w) * 100}%`,
                    top: st.y * SCALE,
                  }}
                >
                  ✕
                </div>
              ))}

            {/* ── Steps ── */}
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="absolute z-10 -translate-x-1/2"
                style={{
                  left: `${(step.x / CANVAS.w) * 100}%`,
                  width: `${(SIZE.cardWidth / CANVAS.w) * 100}%`,
                  ...(step.align === "top"
                    ? {
                        bottom: (CANVAS.h - step.y) * SCALE,
                        marginBottom: s(-SIZE.circle / 2),
                      }
                    : {
                        top: step.y * SCALE,
                        marginTop: s(-SIZE.circle / 2),
                      }),
                }}
              >
                <ProcessColumn step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Tablet (sm–xl) ── */}
        <div
          className="hidden w-full grid-cols-2 sm:grid xl:hidden"
          style={{ gap: fluid(40, 20) }}
        >
          {STEPS.map((step) => (
            <div
              key={step.step}
              className={
                step.step === "05"
                  ? "col-span-2 mx-auto w-full"
                  : "mx-auto w-full"
              }
              style={{ maxWidth: s(SIZE.cardWidth) }}
            >
              <div className="flex flex-col items-center">
                <IconCircle step={step} />
                <div
                  className="w-0 border-[#e38f2e]"
                  style={{ height: s(24), borderLeftWidth: s(3) }}
                />
                <ProcessCard step={step} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile ── */}
        <div
          className="flex w-full flex-col items-center sm:hidden"
          style={{ gap: fluid(40, 20) }}
        >
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="flex w-full flex-col items-center"
              style={{ maxWidth: s(SIZE.cardWidth) }}
            >
              <IconCircle step={step} />
              <div
                className="w-0 border-[#e38f2e]"
                style={{ height: s(24), borderLeftWidth: s(3) }}
              />
              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
