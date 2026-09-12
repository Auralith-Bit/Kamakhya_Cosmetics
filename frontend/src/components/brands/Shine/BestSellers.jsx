import vector1 from "../../../assets/Vector (1).svg";
import group56 from "../../../assets/Group 56.svg";
import intersect from "../../../assets/Intersect.svg";
import ProductCard from "../../Products/ProductCard";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const PRODUCTS = [
  { cardId: "shineBestSeller1", id: 12, title: "Dish Soap",        image: group56 },
  { cardId: "shineBestSeller2", id: 13, title: "Glass Cleaner",    image: intersect },
  { cardId: "shineBestSeller3", id: 14, title: "Floor Cleaner",    image: group56 },
  { cardId: "shineBestSeller4", id: 15, title: "Bathroom Cleaner", image: intersect },
];

const DESC = "Nail Polish is the best things in the world and were for protection. i love…";

export default function BestSellers() {
  return (
    <section id="shine-best-sellers" className="bs-sec">
      <style>{`
        /* ============ SECTION HEADER ============ */
        .bs-sec{position:relative;width:100%;padding:4.0104vw 0 5.2083vw;background:#FCF9F2;overflow:hidden;}
        .bs-head{text-align:center;max-width:78vw;margin:0 auto 3.2292vw;}
        .bs-eyebrow{color:#E38F2E;font-family:${sans};font-size:0.83vw;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;}
        .bs-title{margin-top:0.5vw;color:#2E3192;font-family:${serif};font-size:1.75vw;font-weight:700;line-height:normal;text-transform:capitalize;}
        .bs-squiggle{display:block;margin-left:34.5vw;margin-right:34.5vw;width:9.25vw;height:auto;}
        .bs-sub{color:#666666;font-family:${sans};font-size:0.97vw;font-weight:500;letter-spacing:0.03em;line-height:1.4583vw;max-width:51vw;margin:0 auto;}

        /* ============ PRODUCT GRID — scoped CSS, no Tailwind variants ============
           ✅ DESKTOP ≥1024: 4 cards in ONE row
           ✅ TABLET 640–1023: 2 cards per row (2×2)
           ✅ MOBILE ≤639: 1 card per row                                    */
        .bs-grid{
          position:relative;z-index:10;
          display:grid;
          grid-template-columns:repeat(4, 1fr);   /* ✅ 4-up on desktop */
          gap:24px;
          padding:0 6vw;
          align-items:stretch;
        }

        /* design margins on large desktops */
        @media (min-width:1280px){
          .bs-grid{padding:0 125px;}
        }

        /* tighter cards for 1024–1279 laptops so 4-up never crushes */
        @media (min-width:1024px) and (max-width:1279px){
          .bs-grid{gap:16px;}
        }

        /* ✅ TABLET: 2 per row (switch to repeat(3, 1fr) here if you ever
           carry 6+ products and want 3-up) */
        @media (min-width:640px) and (max-width:1023px){
          .bs-grid{grid-template-columns:repeat(2, 1fr);gap:20px;padding:0 6vw;}
        }

        /* ✅ MOBILE: single column */
        @media (max-width:639px){
          .bs-grid{grid-template-columns:1fr;gap:24px;padding:0 20px;}
          .bs-sub{max-width:100%;}
        }

        @media (max-width:1023px){
          .bs-eyebrow{font-size:1.2vw;} .bs-title{font-size:2.6vw;}
          .bs-sub{font-size:1.3vw;line-height:2vw;} .bs-sub br{display:none;}
          .bs-squiggle{width:12vw;margin:0 auto;}
        }

        /* ============ TABLET 640–1023 (header type) ============ */
        @media (min-width:640px) and (max-width:1023px){
          .bs-sec{padding:64px 0 72px;}
          .bs-head{max-width:none;margin:0 auto 48px;padding:0 32px;}
          .bs-eyebrow{font-size:13px;}
          .bs-title{font-size:28px;margin-top:8px;}
          .bs-squiggle{width:18%;margin:8px auto 0;}
          .bs-sub{font-size:14px;line-height:1.6;max-width:90%;}
        }

        @media (max-width:639px){
          .bs-title{font-size:5vw;} .bs-sub{font-size:3vw;line-height:4.6vw;}
          .bs-eyebrow{font-size:2.4vw;} .bs-squiggle{width:24vw;}
        }
      `}</style>

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
          </clipPath>
        </defs>
      </svg>

      <header className="bs-head">
        <span className="bs-eyebrow">Best Sellers</span>
        <h2 className="bs-title">Our Cleaning Best Sellers</h2>
        <img className="bs-squiggle" src={vector1} alt="" aria-hidden="true" />
        <p className="bs-sub">
          Discover our best-selling home care essentials trusted by thousands for a cleaner, fresher home—
          crafted with powerful, safe, and effective cleaning formulas.
        </p>
      </header>

      {/* ✅ plain class — column counts now controlled by the scoped CSS above */}
      <div className="bs-grid">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.cardId}
            product={{ ...p, desc: DESC, moq: "500 pcs", lead: "7–10 days", tag: "Best Seller" }}
          />
        ))}
      </div>
    </section>
  );
}