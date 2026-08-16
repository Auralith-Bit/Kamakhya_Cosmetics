import React from "react";
import vector1 from "../../../assets/Vector (1).svg";
import centerImg from "../../../assets/image 34.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ---- gold outline icons (#CCA466) ---- */
const Leaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-8.5 0-14 5-15 13 3.5 2.5 7.5 3 10.5 1C19.5 15.5 20 9 20 4Z" />
    <path d="M5 17c3-5.5 7-8.5 11-10" />
  </svg>
);
const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9" />
  </svg>
);
const Rabbit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6C8 3.5 5.5 2.6 4.8 4c-.6 1.3.4 3.2 2.2 4.2" />
    <path d="M12 6c1-2.5 3.5-3.4 4.2-2 .6 1.3-.4 3.2-2.2 4.2" />
    <circle cx="10.5" cy="13.5" r="5" />
    <path d="M15.5 13.5h2.5l1.5 1.5-1.5 1.5h-3" />
  </svg>
);
const Flask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 3h5M9.5 3v6l-5.2 8.6A2.4 2.4 0 0 0 6.4 21h11.2a2.4 2.4 0 0 0 2.1-3.4L14.5 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);
const Spark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3 .9 2.6L15.5 6.5l-2.6.9L12 10l-.9-2.6L8.5 6.5l2.6-.9Z" />
    <path d="M6 14c2 0 2 1.3 4 1.3S12 14 14 14s2 1.3 4 1.3" />
    <path d="M6 17.5c2 0 2 1.3 4 1.3s2-1.3 4-1.3 2 1.3 4 1.3" />
  </svg>
);
const HomeLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10.5 12 4l8 6.5" />
    <path d="M6 9.5V19h12V9.5" />
    <path d="M12 16c.4-2.4 1.8-3.8 4-4-.2 2.4-1.6 3.8-4 4Z" />
  </svg>
);

const LEFT = [
  { cls: "wc-l1", Icon: Leaf,   title: "Plant-Based",         lines: ["Plant-based ingredients", "for powerful cleaning."] },
  { cls: "wc-l2", Icon: Shield, title: "Kills 99.9% Germs",   lines: ["Removes germs and", "bacteria effectively."] },
  { cls: "wc-l3", Icon: Rabbit, title: "Cruelty Free",        lines: ["Gentle on animals.", "Tough on dirt."] },
];
const RIGHT = [
  { cls: "wc-r1", Icon: Flask,    title: "Advanced Formulas",     lines: ["Science-backed deep", "cleaning and freshness."] },
  { cls: "wc-r2", Icon: Spark,    title: "Lasting Freshness",     lines: ["Clean with refreshing", "and long-lasting scent."] },
  { cls: "wc-r3", Icon: HomeLeaf, title: "Safe for Everyday use", lines: ["Safe for your family,", "pets, and surroundings."] },
];

const WhyChooseShine = () => (
  <section id="shine-why" className="wc-sec">
    <style>{`
      .wc-sec{position:relative;width:100%;height:56.7188vw;background:#FCF9F2;overflow:hidden;}

      /* ---- header ---- */
      .wc-tag{
        position:absolute;top:3.9vw;width:100%;text-align:center;color:#E38F2E;
        font-family:${sans};font-size:0.85vw;font-weight:700;font-style:normal;
        letter-spacing:0.18em;text-transform:uppercase;
      }
      .wc-title{
        position:absolute;top:5.2vw;width:100%;text-align:center;color:#2E3192;
        font-family:${serif};font-size:1.875vw;font-style:normal;font-weight:700;
        line-height:normal;text-transform:capitalize;
      }
      .wc-vector{position:absolute;top:7.4917vw;left:50%;transform:translateX(-50%);width:9.25vw;height:auto;}
      .wc-sub{
        position:absolute;top:9.2vw;width:100%;text-align:center;color:#666666;
        font-family:${sans};font-size:1.08vw;line-height:1.4583vw;
      }

      /* ---- ring + connectors overlay (design coords 1920x1089) ---- */
      .wc-wires{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;pointer-events:none;}

      /* ---- center artwork 700² @610/289 ---- */
      .wc-img{position:absolute;left:31.7708vw;top:15.0521vw;width:36.4583vw;height:36.4583vw;
        object-fit:contain;display:block;z-index:2;pointer-events:none;}

      /* ---- cards 382x139 @ x170/1368, y336/535/734 ---- */
      .wc-card{position:absolute;width:19.8958vw;height:7.2396vw;background:#fff;
        border-radius:0.5208vw;z-index:3;
        box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.05);
        display:flex;align-items:center;gap:1.5625vw;padding:0 1.5625vw;}
      .wc-l1{left:8.8542vw;top:17.5vw;}
      .wc-l2{left:8.8542vw;top:27.8646vw;}
      .wc-l3{left:8.8542vw;top:38.2292vw;}
      .wc-r1{left:71.25vw;top:17.5vw;}
      .wc-r2{left:71.25vw;top:27.8646vw;}
      .wc-r3{left:71.25vw;top:38.2292vw;}

      .wc-ico{flex:0 0 4.6354vw;width:4.6354vw;height:4.6354vw;border-radius:50%;
        background:#FCFAF7;border:0.0521vw solid #E8D6BA;color:#CCA466;
        display:flex;align-items:center;justify-content:center;}
      .wc-ico svg{width:2.0833vw;height:2.0833vw;}

      .wc-card h3{color:#2E3192;font-family:${serif};font-size:1.0417vw;font-weight:700;margin-bottom:0.4167vw;}
      .wc-card p{color:#666666;font-family:${sans};font-size:0.7813vw;line-height:1.1979vw;}
    `}</style>

    <p className="wc-tag">Why Choose Shine</p>
    <h2 className="wc-title">Clean &amp; Fresh, Every Day</h2>
    <img className="wc-vector" src={vector1} alt="" aria-hidden="true" />
    <p className="wc-sub">
      Experience powerful cleaning with safe, effective formulas that keep your home spotless,
      <br />
      fresh, and hygienic every day.
    </p>

    {/* ring + 45° elbow connectors + node dots — elbows end exactly on the ring */}
    <svg className="wc-wires" viewBox="0 0 1920 1089" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="wc-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="wc-ringmask">
          <rect x="600" y="245" width="720" height="720" fill="url(#wc-fade)" />
        </mask>
      </defs>

      {/* green ring Ø630 @ (960,605), fades behind the flowers */}
      <circle cx="960" cy="605" r="315" stroke="#176B22" strokeWidth="3" mask="url(#wc-ringmask)" />

      {/* left connectors — horizontal at card mid-height, 45° elbow to ring node */}
      <path d="M552 405.5 H668.5 L696 433"  stroke="#176B22" strokeWidth="3" />
      <path d="M552 604.5 H645"             stroke="#176B22" strokeWidth="3" />
      <path d="M552 803.5 H669.5 L696 777"  stroke="#176B22" strokeWidth="3" />

      {/* right connectors (mirrored) */}
      <path d="M1368 405.5 H1251.5 L1224 433" stroke="#176B22" strokeWidth="3" />
      <path d="M1368 604.5 H1275"             stroke="#176B22" strokeWidth="3" />
      <path d="M1368 803.5 H1251.5 L1224 777" stroke="#176B22" strokeWidth="3" />

      {/* node dots — centered on the ring points */}
      <circle cx="696"  cy="433"   r="8" fill="#176B22" />
      <circle cx="645"  cy="604.5" r="8" fill="#176B22" />
      <circle cx="696"  cy="777"   r="8" fill="#176B22" />
      <circle cx="1224" cy="433"   r="8" fill="#176B22" />
      <circle cx="1275" cy="604.5" r="8" fill="#176B22" />
      <circle cx="1224" cy="777"   r="8" fill="#176B22" />
    </svg>

    <img className="wc-img" src={centerImg} alt="Shine multi-surface cleaner — clean & fresh" />

    {LEFT.map(({ cls, Icon, title, lines }) => (
      <div className={`wc-card ${cls}`} key={title}>
        <span className="wc-ico"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <p>{lines[0]}<br />{lines[1]}</p>
        </div>
      </div>
    ))}
    {RIGHT.map(({ cls, Icon, title, lines }) => (
      <div className={`wc-card ${cls}`} key={title}>
        <span className="wc-ico"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <p>{lines[0]}<br />{lines[1]}</p>
        </div>
      </div>
    ))}
  </section>
);

export default WhyChooseShine;