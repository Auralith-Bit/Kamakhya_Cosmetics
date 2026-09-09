import vector1 from "../../assets/Vector (1).svg";
import group56 from "../../assets/BestSeller.svg";
import intersect from "../../assets/BestSeller.svg";
import ProductCard from "../Products/ProductCard";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const PRODUCTS = [
  { id: 2, title: "Nail Polish", image: group56 },
  { id: 5, title: "Nail Polish", image: intersect },
  { id: 2, title: "Nail Polish", image: group56 },
  { id: 5, title: "Nail Polish", image: intersect },
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
        .bs-sub{color:#666666;font-family:${sans};font-size:0.97vw;font-weight:500;letter-spacing:0.03em;line-height:1.4583vw;}

        @media (max-width:1023px){
          .bs-eyebrow{font-size:1.2vw;} .bs-title{font-size:2.6vw;}
          .bs-sub{font-size:1.3vw;line-height:2vw;} .bs-sub br{display:none;}
          .bs-squiggle{width:12vw;margin:0 auto;}
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
          <br/>
          crafted with powerful, safe, and effective cleaning formulas.
        </p>
      </header>

      <div
        className="relative z-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 px-[125px] max-lg:px-8 max-sm:px-5"
        style={{ gridAutoRows: '1fr' }}
      >
        {PRODUCTS.map((p, i) => (
          <ProductCard
            key={`${p.id}-${i}`}
            product={{ ...p, desc: DESC, moq: "500 pcs", lead: "7–10 days", tag: "Best Seller" }}
          />
        ))}
      </div>
    </section>
  );
}