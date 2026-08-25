import React from "react";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const CheckI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="m8.5 12.2 2.3 2.3 4.7-5" />
  </svg>
);

const POINTS = [
  "Factory-direct wholesale pricing",
  "Premium beauty & cleaning products",
  "Marketing & retailer support",
  "Reliable supply & market growth",
];

const DistributionPartnership = () => (
  <section id="distribution-partnership" className="dp-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 ============ */
      .dp-sec{width:100%;background:#252775;padding:5.2vw 0;}
      .dp-wrap{width:82.2917vw;margin:0 auto;display:grid;
        grid-template-columns:1fr 36.1vw;gap:4.5vw;align-items:center;}

      /* ---- left ---- */
      .dp-tag{
      color:var(--Orange-400, #DEC49C);
      font-family:${sans};
      font-size:0.83vw;
      font-weight:600;
      letter-spacing:2.16px;
      text-transform:uppercase;
      }

      .dp-rule{
      position:relative;
      width:15.625vw;
      height:0.4167vw;
      margin:0.45vw 0 0;
      display:flex;
      align-items:center;
      }

      .dp-rule::before,.dp-rule::after{content:"";position:absolute;top:50%;
        transform:translateY(-50%);width:46%;height:0.2083vw;}
      .dp-rule::before{left:0;
        background:linear-gradient(to right, rgba(216,198,155,0), #D8C69B);
        clip-path:polygon(0 50%, 100% 0, 100% 100%);}
      .dp-rule::after{right:0;
        background:linear-gradient(to left, rgba(216,198,155,0), #D8C69B);
        clip-path:polygon(100% 50%, 0 0, 0 100%);}
      .dp-rule span{width:0.4167vw;height:0.4167vw;border-radius:50%;background:#D8C69B;
        position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}

      .dp-title{
      color:#fff;
      font-family:${serif};
      font-size:1.7vw;
      font-weight:700;
      font-style: normal;
      margin-top: 1vw;
      line-height:1.2;
      }

      .dp-p{
      margin-top:1.5vw;
      color:#ffffff;
      font-family:${sans};
      font-size:0.89vw;
      letter-spacing: 0.01em;
      line-height:1.65;
      text-align:justify;
      max-width:41vw;
      }

      .dp-points{
      margin-top:2vw;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:1.5vw 3vw;
      list-style:none;padding:0;
      }

      .dp-points li{display:flex;align-items:center;gap:0.7vw;
        color:#ffffff;font-family:${sans};font-size:0.89vw;font-weight:400;}
      .dp-points svg{width:1.3542vw;height:1.3542vw;color:#D8C69B;flex-shrink:0;}

      /* ---- right card ---- */
      .dp-card{
      background:#ffffff;
      border: 3px solid var(--Orange-600, #BC975E);
      border-radius:0.5208vw;
      padding:2.3vw 2.35vw 2.1vw;
      box-shadow:0 0.8vw 2vw rgba(0,0,0,0.28);}

      .dp-card h3{
        color: var(--Blue-500, #2E3192);
        font-family: Playfair;
        font-size: 1.8vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
      }

      /* ✅ FINAL: size fills the card naturally; justify only trims the last
         few pixels so spacing looks like the design and no right gap remains */
      .dp-card-p{
      margin-top:1.1vw;
      color:#666666;
      font-family:${sans};
      font-size:0.9vw;
      line-height:1.6;
      }

      .dp-card-p .dp-line{display:block;text-align:justify;text-align-last:justify;
        text-justify:inter-word;}
      .dp-card-p .dp-line:last-child{display:block;text-align:left;text-align-last:left;}

      .dp-btn{
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      height:3.2vw;
      border-radius:0.4167vw;
      font-family:${sans};
      cursor:pointer;
      transition:background .2s,color .2s;
      }

      .dp-btn1{
      margin-top:1.7vw;
      background:#2E3192;
      border:0.0781vw solid #2E3192;
      color:#fff;
      font-size:0.95vw;
      font-weight:500;
      }

      .dp-btn2{margin-top:0.8vw;background:transparent;border:0.0781vw solid #2E3192;
        color:#2E3192;font-size:0.83vw;font-weight:600;letter-spacing:0.06em;
        text-transform:uppercase;}

      .dp-note{
      margin:1.5vw 0 0;
      padding:0 0 0 1vw;
      color:#333333;
      font-family:${sans};
      font-size:0.793vw;
      letter-spacing: 0.06em;
      line-height:1.6;
      list-style:disc;
      }

      /* ============ MOBILE+TABLET ≤1023 — stacked ============ */
      @media (max-width:1023px){
        .dp-sec{padding:10vw 5vw;}
        .dp-wrap{width:auto;grid-template-columns:1fr;gap:8vw;align-items:start;}
        .dp-tag{font-size:clamp(11px, 1.4vw, 16px);}
        .dp-rule{width:clamp(140px, 40vw, 300px);}
        .dp-rule::before,.dp-rule::after{height:4px;}
        .dp-rule span{width:8px;height:8px;}
        .dp-title{font-size:clamp(22px, 3.2vw, 34px);margin-top:4vw;}
        .dp-p{font-size:clamp(13px, 1.6vw, 17px);max-width:none;text-align:left;}
        .dp-points{grid-template-columns:1fr;gap:3.5vw;margin-top:6vw;}
        .dp-points li{font-size:clamp(13px, 1.6vw, 17px);}
        .dp-points svg{width:clamp(20px, 3vw, 28px);height:clamp(20px, 3vw, 28px);}

        .dp-card{padding:6vw 5vw 5.5vw;}
        .dp-card h3{font-size:clamp(18px, 2.6vw, 28px);}
        .dp-card-p{font-size:clamp(12px, 1.5vw, 16px);}
        .dp-card-p .dp-line{text-align:left;text-align-last:left;}
        .dp-btn{height:12vw;border-radius:2vw;}
        .dp-btn1{font-size:clamp(13px, 1.6vw, 17px);}
        .dp-btn2{font-size:clamp(12px, 1.5vw, 16px);}
        .dp-note{font-size:clamp(11px, 1.4vw, 15px);}
      }

      @media (min-width:640px) and (max-width:1023px){
        .dp-points{grid-template-columns:1fr 1fr;}
        .dp-btn{height:3.4vw;min-height:44px;}
      }
    `}</style>

    <div className="dp-wrap">
      {/* ---- left ---- */}
      <div>
        <span className="dp-tag">Distribution Partnership</span>
        <div className="dp-rule"><span /></div>

        <h2 className="dp-title">Build Your Business With Care</h2>

        <p className="dp-p">
          Partner with Kamakhya to deliver trusted beauty care and home care products to your
          market. Enjoy factory-direct pricing, dependable supply, premium quality, and
          dedicated business support to help your distribution network grow.
        </p>

        <ul className="dp-points">
          {POINTS.map((t) => (
            <li key={t}><CheckI /> {t}</li>
          ))}
        </ul>
      </div>

      {/* ---- right card ---- */}
      <div className="dp-card">
        <h3>Apply To Become A Partner</h3>
        <p className="dp-card-p">
          <span className="dp-line">Join Kamakhya’s growing network of distributors and retailers.</span>
          <span className="dp-line">Share your territory, sales channel, and expected volume, and</span>
          <span className="dp-line">our partnership team will guide your onboarding.</span>
        </p>

        <button className="dp-btn dp-btn1">Become Distributor</button>
        <button className="dp-btn dp-btn2">Request Bulk Quote</button>

        <ul className="dp-note">
          <li>For trade enquiries only. Product pricing is provided through formal quotation.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default DistributionPartnership;