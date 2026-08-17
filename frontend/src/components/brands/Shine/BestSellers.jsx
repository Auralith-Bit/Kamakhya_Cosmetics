import { useState } from "react";
import { Link } from "react-router-dom";
import vector1 from "../../../assets/Vector (1).svg";
import group56 from "../../../assets/Group 56.svg";
import intersect from "../../../assets/Intersect.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const PRODUCTS = [
  { id: "detergent-powder", title: "Detergent Powder", image: group56, tint: "#F5F3F6" },
  { id: "dish-washer", title: "Dish Washer", image: intersect, tint: "#E7DED3" },
  { id: "detergent-powder-2", title: "Detergent Powder", image: group56, tint: "#F5F3F6" },
  { id: "dish-washer-2", title: "Dish Washer", image: intersect, tint: "#E7DED3" },
];

const DESC = "Nail Polish is the best things in the world and were for protection. i love…";

/* ---------- icons ---------- */
const Spark = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M7 0l1.8 5.2L14 7l-5.2 1.8L7 14 5.2 8.8 0 7l5.2-1.8L7 0z" fill="#C89B4A" />
  </svg>
);
const Heart = ({ filled }) => (
  <svg width="18" height="16" viewBox="0 0 18 16" fill={filled ? "#2E3192" : "none"} aria-hidden="true">
    <path d="M9 15.2 2.1 8.3C.8 7 .8 4.9 2.1 3.6c1.3-1.3 3.4-1.3 4.7 0L9 5.8l2.2-2.2c1.3-1.3 3.4-1.3 4.7 0 1.3 1.3 1.3 3.4 0 4.7L9 15.2z" stroke="#2E3192" strokeWidth="1.6" />
  </svg>
);
const BoxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C89B4A" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" />
  </svg>
);
const CalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C89B4A" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

/* ---------- card ---------- */
function BestSellerCard({ p }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={`/products/${p.id}`} className="bs-card group">
      {/* media */}
      <div className="bs-media" style={{ backgroundColor: p.tint }}>
        <span className="bs-badge"><Spark /> BEST SELLER</span>
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
          className="bs-wish"
        >
          <Heart filled={liked} />
        </button>
        <img src={p.image} alt={p.title} loading="lazy" />
        <svg className="bs-arc" viewBox="0 0 371 42" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0c96 42 275 42 371 0v42H0V0z" fill="#ffffff" />
          <path d="M0 0c96 42 275 42 371 0" stroke="#C89B4A" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* body */}
      <div className="bs-body">
        <h3 className="bs-name">{p.title}</h3>
        <p className="bs-desc">{DESC}</p>

        <div className="bs-meta">
          <div className="bs-meta-item">
            <span className="bs-meta-ico"><BoxIcon /></span>
            <span>
              <span className="bs-meta-label">MOQ</span>
              <span className="bs-meta-value">500 pcs</span>
            </span>
          </div>
          <span className="bs-div" />
          <div className="bs-meta-item">
            <span className="bs-meta-ico"><CalIcon /></span>
            <span>
              <span className="bs-meta-label">Lead Time</span>
              <span className="bs-meta-value">7–10 days</span>
            </span>
          </div>
        </div>

        <span className="bs-cta">
          View Products
          <span className="bs-cta-arrow"><Arrow /></span>
        </span>
      </div>
    </Link>
  );
}

/* ---------- section ---------- */
export default function BestSellers() {
  return (
    <section id="best-sellers" className="bs-sec">
      <style>{`
        .bs-sec{position:relative;width:100%;background:#FCF9F2;padding:4.0104vw 0 5.2083vw;overflow:hidden;}
        .bs-head{text-align:center;max-width:78vw;margin:0 auto 3.2292vw;}
        .bs-eyebrow{color:#E38F2E;font-family:${sans};font-size:0.7292vw;font-weight:700;letter-spacing:0.35em;text-transform:uppercase;}
        .bs-title{margin-top:0.7813vw;color:#2E3192;font-family:${serif};font-size:2.0833vw;font-weight:700;line-height:1.2;}
        .bs-squiggle{display:block;margin:0.7813vw auto 0.9375vw;width:9.25vw;height:auto;}
        .bs-sub{color:#666666;font-family:${sans};font-size:0.8854vw;line-height:1.4583vw;}

        .bs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.6667vw;width:82.2917vw;margin:0 auto;}

        /* ✅ CARD HOVER (matches video): gentle lift + deeper shadow */
        .bs-card{display:flex;flex-direction:column;border-radius:0.5208vw;background:#ffffff;
          box-shadow:0 12px 30px rgba(43,46,126,0.08);
          transition:transform .35s ease, box-shadow .35s ease;}
        .bs-card:hover{transform:translateY(-0.3125vw);box-shadow:0 22px 44px rgba(43,46,126,0.16);}

        .bs-media{position:relative;height:17.7083vw;overflow:hidden;border-radius:0.5208vw 0.5208vw 0 0;}
        .bs-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;
          transition:transform .55s ease;}
        /* ✅ IMAGE HOVER (matches video): smooth ~6% zoom */
        .bs-card:hover .bs-media img{transform:scale(1.06);}

        .bs-arc{position:absolute;bottom:-1px;left:0;width:100%;height:2.1875vw;display:block;}

        .bs-badge{position:absolute;top:0.9375vw;left:0.9375vw;z-index:2;display:inline-flex;align-items:center;gap:0.4167vw;
          background:#ffffff;border-radius:50vw;padding:0.4688vw 0.8333vw;color:#C89B4A;
          font-family:${sans};font-size:0.625vw;font-weight:700;letter-spacing:0.12em;}
        .bs-wish{position:absolute;top:0.8333vw;right:0.8333vw;z-index:2;width:2.3438vw;height:2.3438vw;border-radius:50%;
          background:#FAF8F4;border:0.1042vw solid rgba(200,155,74,0.5);display:grid;place-items:center;cursor:pointer;transition:transform .25s;}
        .bs-wish:hover{transform:scale(1.08);}
        .bs-wish svg{width:0.9375vw;height:0.8333vw;}

        .bs-body{flex:1;display:flex;flex-direction:column;padding:1.1979vw 1.0417vw 1.25vw;text-align:center;}
        .bs-name{color:#333333;font-family:${serif};font-size:1.1458vw;font-weight:700;margin-bottom:0.625vw;}
        .bs-desc{color:#666666;font-family:${sans};font-size:0.7813vw;line-height:1.25vw;margin-bottom:0.9375vw;
          display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}

        .bs-meta{display:flex;align-items:center;justify-content:space-between;gap:0.625vw;
          border-top:1px solid #E8D6BA;padding:0.7292vw 0.1042vw;}
        .bs-meta-item{display:flex;align-items:center;gap:0.5208vw;text-align:left;}
        .bs-meta-item > span > span{display:block;}
        .bs-meta-ico{width:2.3438vw;height:2.3438vw;border-radius:50%;background:#F7F1E8;display:grid;place-items:center;flex-shrink:0;}
        .bs-meta-ico svg{width:0.9375vw;height:0.9375vw;}
        .bs-meta-label{color:#C89B4A;font-family:${sans};font-size:0.6771vw;font-weight:600;}
        .bs-meta-value{color:#333333;font-family:${sans};font-size:0.7292vw;font-weight:600;}
        .bs-div{width:1px;height:2.0313vw;background:#E4E4E4;}

        /* ✅ CTA stays outlined on hover (no fill) — as shown in the video */
        .bs-cta{margin-top:0.9375vw;display:flex;align-items:center;justify-content:space-between;
          border:0.1042vw solid #2E3192;border-radius:50vw;padding:0.4688vw 0.5208vw 0.4688vw 1.1458vw;
          color:#2E3192;font-family:${sans};font-size:0.8333vw;font-weight:600;background:#ffffff;}
        .bs-cta-arrow{width:1.6667vw;height:1.6667vw;border-radius:50%;background:#C7C9EA;color:#2E3192;
          display:grid;place-items:center;}
        .bs-cta-arrow svg{width:0.8333vw;height:0.8333vw;}

        @media (max-width:1280px){
          .bs-grid{grid-template-columns:repeat(2,1fr);width:90vw;}
          .bs-eyebrow{font-size:1.2vw;} .bs-title{font-size:2.6vw;} .bs-sub{font-size:1.3vw;}
          .bs-media{height:26vw;} .bs-name{font-size:1.7vw;} .bs-desc{font-size:1.2vw;line-height:1.8vw;}
          .bs-meta-label{font-size:1vw;} .bs-meta-value{font-size:1.1vw;} .bs-cta{font-size:1.2vw;}
          .bs-badge{font-size:1vw;padding:0.7vw 1.2vw;} .bs-wish{width:3.4vw;height:3.4vw;}
          .bs-arc{height:3.2vw;} .bs-meta-ico{width:2.9vw;height:2.9vw;} .bs-cta-arrow{width:2.4vw;height:2.4vw;}
          .bs-div{height:2.9vw;} .bs-squiggle{width:12vw;}
          .bs-card:hover{transform:translateY(-4px);}
        }
        @media (max-width:640px){
          .bs-grid{grid-template-columns:1fr;}
          .bs-media{height:70vw;} .bs-title{font-size:5vw;} .bs-sub{font-size:3vw;}
          .bs-name{font-size:4vw;} .bs-desc{font-size:3vw;line-height:4.4vw;}
          .bs-eyebrow{font-size:2.4vw;} .bs-meta-label{font-size:2.4vw;} .bs-meta-value{font-size:2.6vw;}
          .bs-cta{font-size:3vw;} .bs-badge{font-size:2.2vw;} .bs-wish{width:8vw;height:8vw;}
          .bs-arc{height:8vw;} .bs-meta-ico{width:7vw;height:7vw;} .bs-cta-arrow{width:6vw;height:6vw;}
          .bs-div{height:7vw;} .bs-squiggle{width:24vw;}
        }
      `}</style>

      <header className="bs-head">
        <span className="bs-eyebrow">Best Sellers</span>
        <h2 className="bs-title">Our Cleaning Best Sellers</h2>
        <img className="bs-squiggle" src={vector1} alt="" aria-hidden="true" />
        <p className="bs-sub">
          Discover our best-selling home care essentials trusted by thousands for a cleaner,
          fresher home—crafted with powerful, safe, and effective cleaning formulas.
        </p>
      </header>

      <div className="bs-grid">
        {PRODUCTS.map((p, i) => (
          <BestSellerCard key={`${p.id}-${i}`} p={p} />
        ))}
      </div>
    </section>
  );
}