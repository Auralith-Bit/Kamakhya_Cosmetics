import React, { useState } from "react";
import { Link } from "react-router-dom";
import catImg from "../../../assets/Product.svg";
import Curve from "../../../assets/Curve.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CATS = [
  { name: "Body Care",  count: "18+ Products", img: catImg },
  { name: "Body Care",   count: "18+ Products",  img: catImg },
  { name: "Body Care", count: "18+ Products", img: catImg },
  { name: "Body Care",        count: "18+ Products", img: catImg },
  { name: "Body Care",  count: "18+ Products", img: catImg },
];
const SLOTS = ["pc-c1", "pc-c2", "pc-c3", "pc-c4", "pc-c5"];
const DOTS = [0, 1, 2, 3];

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);
const ChevL = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 1.5 2 7l5.5 5.5" />
  </svg>
);
const ChevR = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ProductCategories = () => {
  const [items, setItems] = useState(CATS);
  const [dot, setDot] = useState(1);

  const next = () => { setItems(a => [...a.slice(1), a[0]]); setDot(d => (d + 1) % DOTS.length); };
  const prev = () => { setItems(a => [a[a.length - 1], ...a.slice(0, -1)]); setDot(d => (d + DOTS.length - 1) % DOTS.length); };

  return (
    <section id="shine-categories" className="pc-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 — 5 CARDS, capped at 1720px (no infinite vw enlargement) ============ */
        .pc-sec{position:relative;width:100%;background:#FCF9F2;padding:72px 24px 64px;overflow:hidden;}

        .pc-head{text-align:center;max-width:1720px;margin:0 auto;}
        .pc-tag{color:#E38F2E;font-family:${sans};font-size:15px;font-weight:600;
          letter-spacing:0.18em;text-transform:uppercase;}
        .pc-title{margin-top:10px;color:#2E3192;font-family:${serif};
          font-size:clamp(30px, 2.6vw, 44px);font-weight:700;line-height:1.2;}
        .pc-vector{display:block;width:150px;height:auto;margin:14px auto 0;}
        .pc-sub{margin:14px auto 0;color:#666666;font-family:${sans};
          font-size:16px;line-height:1.6;max-width:50%;}

        /* ✅ 5-up grid, capped container */
        .pc-row{display:grid;grid-template-columns:repeat(5, 1fr);gap:24px;
          max-width:1720px;margin-top:48px;margin-left: 7.3vw;margin-right: 4.9vw;}

        .pc-card{position:relative;display:block;background:#fff;border-radius:10px;
          overflow:hidden;text-decoration:none;cursor:pointer;
          box-shadow:0 2px 6px rgba(0,0,0,0.08), 0 8px 20px rgba(43,46,126,0.08);
          transition:box-shadow .3s ease;
          animation:pc-in .45s ease;}
        .pc-card:hover{box-shadow:0 4px 12px rgba(0,0,0,0.12), 0 14px 28px rgba(43,46,126,0.20);}
        @keyframes pc-in{from{opacity:0;transform:translateX(24px);}to{opacity:1;transform:none;}}

        .pc-img{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:cover;
          transition:transform .5s ease;}
        .pc-card:hover .pc-img{transform:scale(1.06);}

        .pc-name{margin:14px 16px 6px;color:#2E3192;font-family:${serif};font-size:18px;font-weight:700;}
        .pc-count{margin:0 16px 18px;color:#666666;font-family:${sans};font-size:13px;}
        .pc-arrow{position:absolute;right:14px;bottom:14px;width:38px;height:38px;
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          background:transparent;color:#2E3192;transition:background .3s ease;}
        .pc-arrow svg{width:16px;height:auto;transition:transform .3s ease;}
        .pc-card:hover .pc-arrow{background:#E4E4F0;}
        .pc-card:hover .pc-arrow svg{transform:rotate(-45deg);}

        .pc-ctrl{display:flex;align-items:center;justify-content:center;gap:32px;margin-top:44px;}
        .pc-nav{width:48px;height:48px;border-radius:50%;background:#F5F5FA;
          border:1px solid #A1A2CE;color:#2E3192;display:flex;align-items:center;
          justify-content:center;cursor:pointer;transition:border-color .3s;}
        .pc-nav:hover{border-color:#2E3192;}
        .pc-nav svg{width:10px;height:auto;}
        .pc-dots{display:flex;align-items:center;gap:10px;}
        .pc-dot{width:22px;height:12px;border-radius:6px;background:#CBCCE4;
          border:1px solid #7779B8;padding:0;cursor:pointer;transition:all .3s;}
        .pc-dot.active{width:46px;height:14px;border-radius:7px;background:#2E3192;border:none;}

        /* tighter type for small desktops / laptops */
        @media (min-width:1024px) and (max-width:1280px){
          .pc-row{gap:16px;}
          .pc-name{font-size:16px;margin:12px 14px 4px;}
          .pc-count{font-size:12px;margin:0 14px 14px;}
          .pc-arrow{right:12px;bottom:12px;width:34px;height:34px;}
          .pc-arrow svg{width:14px;}
        }

        /* ============ TABLET 640–1023 — ✅ 3 CARDS (4 on 900–1023) ============ */
        @media (min-width:640px) and (max-width:1023px){
          .pc-sec{padding:56px 24px;}
          .pc-title{font-size:32px;}
          .pc-sub{font-size:14px;}
          .pc-vector{width:130px;}

          .pc-row{grid-template-columns:repeat(3, 1fr);gap:20px;margin-top:36px;}
          .pc-c4,.pc-c5{display:none;}   /* ✅ show 3 of 5; arrows cycle which 3 */

          .pc-name{font-size:16px;margin:12px 14px 4px;}
          .pc-count{font-size:12px;margin:0 14px 14px;}
          .pc-arrow{right:12px;bottom:12px;width:34px;height:34px;}
          .pc-arrow svg{width:14px;}

          .pc-ctrl{margin-top:32px;gap:24px;}
          .pc-nav{width:44px;height:44px;}
        }

        /* ✅ wide tablets get 4 cards */
        @media (min-width:900px) and (max-width:1023px){
          .pc-row{grid-template-columns:repeat(4, 1fr);}
          .pc-c4{display:block;}
        }

        /* ============ MOBILE ≤639 — ✅ SINGLE CARD carousel ============ */
        @media (max-width:639px){
          .pc-sec{padding:48px 20px 56px;}
          .pc-tag{font-size:13px;}
          .pc-title{font-size:26px;}
          .pc-vector{width:120px;margin:12px auto 0;}
          .pc-sub{font-size:14px;margin-top:12px;max-width:100%;}

          .pc-row{display:block;margin-top:32px;}
          .pc-card{width:min(85vw, 340px);margin:0 auto;}
          .pc-c2,.pc-c3,.pc-c4,.pc-c5{display:none;}   /* ✅ one card at a time */

          .pc-name{font-size:16px;margin:12px 16px 4px;}
          .pc-count{font-size:12px;margin:0 16px 16px;}
          .pc-arrow{right:12px;bottom:12px;width:36px;height:36px;}
          .pc-arrow svg{width:15px;}

          .pc-ctrl{margin-top:28px;gap:18px;}
          .pc-nav{width:44px;height:44px;}
          .pc-dot{width:18px;height:10px;border-radius:5px;}
          .pc-dot.active{width:36px;height:12px;border-radius:6px;}
        }
      `}</style>

      <div className="pc-head">
        <p className="pc-tag">SHOP BY CATEGORY</p>
        <h2 className="pc-title">Care For Every Space </h2>
        <img className="pc-vector" src={Curve} alt="" aria-hidden="true" />
        <p className="pc-sub">
             Explore the Shine range by household routine, from kitchen and laundry to surface and
             personal care.
        </p>
      </div>

      <div className="pc-row">
        {items.map((c, i) => (
          <Link to="/products" className={`pc-card ${SLOTS[i]}`} key={`${c.name}-${i}`}>
            {c.img && <img className="pc-img" src={c.img} alt={`Royal Luxury ${c.name}`} />}
            <p className="pc-name">{c.name}</p>
            <p className="pc-count">{c.count}</p>
            <span className="pc-arrow"><Arrow /></span>
          </Link>
        ))}
      </div>

      <div className="pc-ctrl">
        <button className="pc-nav prev" aria-label="Previous" onClick={prev}><ChevL /></button>
        <div className="pc-dots">
          {DOTS.map(i => (
            <button key={i} className={`pc-dot${dot === i ? " active" : ""}`} aria-label={`Page ${i + 1}`} onClick={() => setDot(i)} />
          ))}
        </div>
        <button className="pc-nav next" aria-label="Next" onClick={next}><ChevR /></button>
      </div>
    </section>
  );
};

export default ProductCategories;