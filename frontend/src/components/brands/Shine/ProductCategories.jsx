import React from "react";
import catImg from "../../../assets/Group 60.svg";
import vector1 from "../../../assets/Vector (1).svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CATS = [
  { cls: "pc-c1", name: "Dishwash Liquid",  count: "12 Products", img: catImg },
  { cls: "pc-c2", name: "Toilet Cleaner",   count: "9 Products", img: catImg },
  { cls: "pc-c3", name: "Detergent Powder", count: "15 Products", img: catImg },
  { cls: "pc-c4", name: "Hand Wash",        count: "10 Products", img: catImg },
  { cls: "pc-c5", name: "Surface Cleaner",  count: "8 Products", img: catImg },
];

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

const ProductCategories = () => (
  <section id="shine-categories" className="pc-sec">
    <style>{`
      .pc-sec{position:relative;width:100%;height:42.6563vw;background:#FCF9F2;overflow:hidden;}

      /* header — exact Figma y positions */
      .pc-head{position:absolute;left:0;top:0;width:100%;text-align:center;}
      
      .pc-tag{
      position:absolute;
      top:3.0104vw;
      width:100%;
      color:#E38F2E;
      font-family:${sans};
      font-size:0.88vw;
      font-weight:600;
      style: SemiBold;
      letter-spacing:0.18em;
      }
      
      .pc-title{
      position:absolute;
      top:4.6vw;
      width:100%;
      color:#2E3192;
      font-family:${serif};
      font-size:1.7vw;
      font-weight:700;
      line-height:1.2;
      }
      
      .pc-sub{
      position:absolute;
      top:9vw;
      width:100%;
      color:#666666;
      font-family:${sans};
      font-size:1vw;
      }
      
      .pc-vector{
      position:absolute;
      top:7.4167vw;
      left:50%;
      transform:translateX(-50%);
      width:9.25vw;
      height:auto;
      }

      /* cards — explicit lefts (Figma x170/492.5/815/1137.5/1460) */
      .pc-card{position:absolute;top:14.2708vw;width:15.1042vw;height:20.0521vw;
        background:#fff;border-radius:0.5208vw;
        box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);}
      .pc-c1{left:8.8542vw;}
      .pc-c2{left:25.651vw;}
      .pc-c3{left:42.4479vw;}
      .pc-c4{left:59.2448vw;}
      .pc-c5{left:76.0417vw;}

      .pc-img{position:absolute;top:0;left:0;width:100%;height:15.1042vw;
        object-fit:cover;border-radius:0.5208vw 0.5208vw 0 0;display:block;}

      .pc-name{position:absolute;left:1.0417vw;top:16.5104vw;color:#2E3192;
        font-family:${serif};font-size:1.0417vw;font-weight:700;}
      .pc-count{position:absolute;left:1.0417vw;top:18.0729vw;color:#666666;
        font-family:${sans};font-size:0.7292vw;}
      .pc-arrow{position:absolute;right:1.7708vw;top:17.2917vw;width:0.8854vw;
        height:0.5208vw;color:#2E3192;}
      .pc-arrow svg{width:100%;height:100%;}

      /* carousel — circles 48 @ (764/1108,700); pills @883.5,717 */
      .pc-nav{position:absolute;top:36.4583vw;width:2.5vw;height:2.5vw;border-radius:50%;
        background:#F5F5FA;border:0.1042vw solid #A1A2CE;color:#2E3192;
        display:flex;align-items:center;justify-content:center;cursor:pointer;}
      .pc-nav svg{width:0.4688vw;height:0.7292vw;}
      .pc-nav.prev{left:39.7917vw;}
      .pc-nav.next{left:57.7083vw;}
      .pc-dots{position:absolute;left:46.0156vw;top:37.3438vw;display:flex;
        align-items:center;gap:0.5729vw;}
      .pc-dot{width:1.1979vw;height:0.625vw;border-radius:0.3125vw;background:#CBCCE4;
        border:0.1042vw solid #7779B8;padding:0;cursor:pointer;}
      .pc-dot.active{width:2.6042vw;height:0.7292vw;border-radius:0.3646vw;
        background:#2E3192;border:none;}
    `}</style>

    <div className="pc-head">
      <p className="pc-tag">SHOP BY CATEGORY</p>
      <h2 className="pc-title">Care For Every Space</h2>
      <p className="pc-sub">
         Explore the Shine range by household routine, from kitchen and laundry to surface and
         <br/>
         personal care.
      </p>
      <img className="pc-vector" src={vector1} alt="" aria-hidden="true" />
    </div>

    {CATS.map((c) => (
      <div className={`pc-card ${c.cls}`} key={c.name}>
        {c.img && <img className="pc-img" src={c.img} alt={`Shine ${c.name}`} />}
        <p className="pc-name">{c.name}</p>
        <p className="pc-count">{c.count}</p>
        <span className="pc-arrow"><Arrow /></span>
      </div>
    ))}

    <button className="pc-nav prev" aria-label="Previous"><ChevL /></button>
    <div className="pc-dots">
      <button className="pc-dot" aria-label="Page 1" />
      <button className="pc-dot active" aria-label="Page 2" />
      <button className="pc-dot" aria-label="Page 3" />
      <button className="pc-dot" aria-label="Page 4" />
    </div>
    <button className="pc-nav next" aria-label="Next"><ChevR /></button>
  </section>
);

export default ProductCategories;