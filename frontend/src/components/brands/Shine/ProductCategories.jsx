import React from "react";
import strip from "../../../assets/Group 60.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CATS = [
  { name: "Dishwash Liquid",  count: "12 Products" },
  { name: "Toilet Cleaner",   count: "9 Products" },
  { name: "Detergent Powder", count: "15 Products" },
  { name: "Hand Wash",        count: "10 Products" },
  { name: "Surface Cleaner",  count: "8 Products" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
  </svg>
);
const ChevL = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 1.5-6 5.5 6 5.5" />
  </svg>
);
const ChevR = () => (
  <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ProductCategories = () => (
  <section id="shine-categories" className="pc-sec">
    <style>{`
      .pc-sec{position:relative;width:100%;height:42.6563vw;background:#FCF9F2;overflow:hidden;}

      /* centered header */
      .pc-head{position:absolute;left:0;top:4.4792vw;width:100%;text-align:center;}
      .pc-tag{color:#E38F2E;font-family:${sans};font-size:0.8333vw;font-weight:600;
        letter-spacing:0.18em;text-transform:uppercase;}
      .pc-title{margin-top:0.625vw;color:#2E3192;font-family:${serif};
        font-size:1.5625vw;font-weight:700;line-height:1.2;}
      .pc-sub{margin-top:1.5625vw;color:#666666;font-family:${sans};font-size:0.7813vw;}

      /* cards row: x170 → 82.2917vw wide (5 × 290 + 4 × 32.5) */
      .pc-row{position:absolute;left:8.8542vw;top:14.2708vw;width:82.2917vw;height:20.0521vw;}
      .pc-card{position:absolute;top:0;width:15.1042vw;height:20.0521vw;background:#fff;
        border-radius:0.5208vw;
        box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);}
      .pc-card:nth-child(1){left:0;}
      .pc-card:nth-child(2){left:16.7969vw;}
      .pc-card:nth-child(3){left:33.5938vw;}
      .pc-card:nth-child(4){left:50.3906vw;}
      .pc-card:nth-child(5){left:67.1875vw;}

      /* Group 60.svg = the 5-photo strip over the card tops */
      .pc-strip{position:absolute;left:0;top:0;width:100%;height:15.1042vw;
        object-fit:fill;z-index:1;pointer-events:none;}

      .pc-name{position:absolute;left:1.0417vw;top:16.5104vw;color:#2E3192;
        font-family:${serif};font-size:1.0417vw;font-weight:700;}
      .pc-count{position:absolute;left:1.0417vw;top:18.0729vw;color:#666666;
        font-family:${sans};font-size:0.7292vw;}
      .pc-arrow{position:absolute;right:1.0417vw;top:17.0833vw;width:0.8854vw;height:0.8854vw;
        color:#2E3192;}

      /* carousel controls */
      .pc-nav{position:absolute;top:36.4583vw;width:2.5vw;height:2.5vw;border-radius:50%;
        background:#2E3192;border:0;color:#F7F1E8;display:flex;align-items:center;
        justify-content:center;cursor:pointer;}
      .pc-nav svg{width:0.7292vw;height:1.0417vw;}
      .pc-nav.prev{left:39.7917vw;}
      .pc-nav.next{left:57.7083vw;}
      .pc-dots{position:absolute;left:46.0156vw;top:37.3438vw;display:flex;
        align-items:center;gap:0.5729vw;}
      .pc-dot{width:1.1979vw;height:0.625vw;border-radius:0.3125vw;background:#CBCCE4;
        border:0.1042vw solid #7779B8;padding:0;}
      .pc-dot.active{width:2.6042vw;height:0.7292vw;border-radius:0.3646vw;
        background:#2E3192;border:none;}
    `}</style>

    <div className="pc-head">
      <p className="pc-tag">Shop by Category</p>
      <h2 className="pc-title">Product Categories</h2>
      <p className="pc-sub">
        Explore our complete range of home-care products, crafted for every corner of your home.
      </p>
    </div>

    <div className="pc-row">
      {CATS.map((c) => (
        <div className="pc-card" key={c.name}>
          <p className="pc-name">{c.name}</p>
          <p className="pc-count">{c.count}</p>
          <span className="pc-arrow"><Arrow /></span>
        </div>
      ))}
      <img className="pc-strip" src={strip} alt="Shine product category range" />
    </div>

    <button className="pc-nav prev" aria-label="Previous"><ChevL /></button>
    <div className="pc-dots">
      <button className="pc-dot" aria-label="Page 1" />
      <button className="pc-dot active" aria-label="Page 2" />
      <button className="pc-dot" aria-label="Page 3" />
    </div>
    <button className="pc-nav next" aria-label="Next"><ChevR /></button>
  </section>
);

export default ProductCategories;