import React from "react";
import vector1 from "../../../assets/Vector (1).svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✏️ All copy editable here */
const CARDS = [
  { title: "Enzyme Action", body: ["Targets everyday stains while remaining", "effective in cold-water washes."] },
  { title: "Citrus Degreasers", body: ["Cuts through kitchen grease and rinses clean", "without heavy residue."] },
  { title: "Plant-Derived Surfactants", body: ["Supports effective cleansing with a considered", "everyday profile."] },
  { title: "Glycerin Care", body: ["Helps hand-wash formulas feel comfortable", "through frequent use."] },
  { title: "Fresh Fragrance", body: ["Light, clean scent designed to complement", "rather than overpower a space."] },
  { title: "Fast-Dry Technology", body: ["Helps glass and hard surfaces dry with", "minimal streaking."] },
];

const FormulaSpotlight = () => (
  <section id="shine-formula" className="fs-sec">
    <style>{`
      .fs-sec{position:relative;width:100%;height:40.3125vw;background:#fff;overflow:hidden;}

      /* ---- header ---- */
      .fs-tag{
      position:absolute;
      top:3.8vw;
      width:100%;
      text-align:center;
      color:#E38F2E;     
      font-family:${sans};
      font-size:0.85vw;
      font-weight:600;
      letter-spacing:0.18em;
      text-transform:uppercase;
      }
      
      .fs-title{
      position:absolute;
      top:5vw;
      width:100%;
      text-align:center;
      color:#2E3192;
      font-family:${serif};
      font-size:1.65vw;
      font-weight:600;
      line-height:normal;
      text-transform:capitalize;
      }
      
      .fs-vector{
      position:absolute;
      top:7.2917vw;
      left:50%;
      transform:translateX(-50%);
      width:9.4583vw;
      height:auto;
      }
      
      .fs-sub{
      position:absolute;
      top:8.9063vw;
      width:100%;
      text-align:center;
      color:#666666;
       font-family:${sans};
       font-size:0.93vw;
       letter-spacing: 0.045em;
       line-height:1.5625vw;
       }

      /* ---- 3x2 card grid (500x180, gap 40) ---- */
      .fs-grid{position:absolute;left:8.8542vw;top:14.375vw;width:82.2917vw;
        display:grid;grid-template-columns:repeat(3, 26.0417vw);gap:2.0833vw;}

      .fs-card{
      background:#FCF9F2;
      border:0.0521vw solid #D7DAE4;
      border-radius:0.5208vw;
      height:9.375vw;
      padding:2.0833vw 1.5625vw;
      box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.05), 0 1.0417vw 1.3021vw rgba(0,0,0,0.04);
      /* 👇 NEW — animate border, shadow and lift */
      cursor:pointer;
      transition:border-color .3s ease, box-shadow .3s ease, transform .3s ease;
      }

      /* 👇 NEW — Figma hover: gold border + deeper shadow + slight lift */
      .fs-card:hover{
      border-color:#CCA466;
      box-shadow:0 0.4167vw 0.625vw rgba(0,0,0,0.08), 0 1.0417vw 1.3021vw rgba(0,0,0,0.06);
      transform:translateY(-0.1042vw);   /* -2px @1920 */
      }
      
      .fs-card h3{
      color:#2E3192;
      font-family:${serif};
      font-size:1.0417vw;
      font-style: normal;
      font-weight:600;
      letter-spacing: 0.025em;
      line-height: normal;
      }
      .fs-rule{width:2.6042vw;height:0.1563vw;background:#CCA466;margin-top:0.625vw;border-radius:0.0781vw;}
      .fs-card p{margin-top:0.8333vw;color:#666666;font-family:${sans};
        font-size:0.8333vw;line-height:1.4063vw;}
    `}</style>

    <p className="fs-tag">Formula Spotlight</p>
    <h2 className="fs-title">Clean Science For Daily Life</h2>
    <img className="fs-vector" src={vector1} alt="" aria-hidden="true" />
    <p className="fs-sub">
      Each Shine formula is built around a defined performance requirement rather than a
      <br />
      general-purpose base.
    </p>

    <div className="fs-grid">
      {CARDS.map((c) => (
        <div className="fs-card" key={c.title}>
          <h3>{c.title}</h3>
          <div className="fs-rule" />
          <p>{c.body[0]}<br />{c.body[1]}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FormulaSpotlight;