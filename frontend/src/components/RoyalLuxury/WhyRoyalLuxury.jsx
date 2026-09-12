import React from "react";
import vector1 from "../../assets/Vector (1).svg";
import centerImg from "../../assets/image 12.png";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ---- gold outline icons matched to the Royal design ---- */
const Leaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const Droplets = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05Z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);
const Rabbit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 16a3 3 0 0 1 2.24 5" />
    <path d="M18 12h.01" />
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
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
    <path d="M12 4l1.7 4.8 4.8 1.7-4.8 1.7L12 17l-1.7-4.8-4.8-1.7 4.8-1.7Z" />
    <circle cx="6.2" cy="17.8" r="1.7" />
    <path d="M18.5 15.5v4M16.5 17.5h4" />
  </svg>
);
const Crown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4.5 4L12 6l4.5 6L21 8l-2 10H5L3 8Z" />
    <path d="M9 21h6" />
  </svg>
);

const LEFT = [
  { cls: "wc-l1", Icon: Leaf,     title: "Premium Ingredients",  lines: ["Carefully selected for", "maximum effectiveness."] },
  { cls: "wc-l2", Icon: Droplets, title: "Dermatologist Tested", lines: ["Safe for all skin types", "even sensitive skin"] },
  { cls: "wc-l3", Icon: Rabbit,   title: "Cruelty Free",         lines: ["Beauty that's kind to", "animals"] },
];
const RIGHT = [
  { cls: "wc-r1", Icon: Flask, title: "Advanced Formulas", lines: ["Backed by science and", "innovation."] },
  { cls: "wc-r2", Icon: Spark, title: "Visible Results",   lines: ["Real results you can see", "and feel."] },
  { cls: "wc-r3", Icon: Crown, title: "Luxury Experience", lines: ["Indulge in elegance,", "every day."] },
];

const WhyRoyalLuxury = () => (
  <section id="shine-why" className="wc-sec">
    <style>{`
      /* ============ DESKTOP ≥1024 ============ */
      .wc-sec{position:relative;width:100%;height:56.7188vw;background:#FCF9F2;overflow:hidden;}

      /* ---- header ---- */
      .wc-tag{
        position:absolute;top:3.9vw;width:100%;text-align:center;color:#E38F2E;
        font-family:${sans};font-size:0.85vw;font-weight:700;font-style:normal;
        letter-spacing:0.18em;text-transform:uppercase;
      }
      .wc-title{
        position:absolute;top:5.2vw;width:100%;color:#2E3192;text-align:center;
        font-family:'Playfair Display', Georgia, serif;
        font-size:1.6vw;font-weight:700;line-height:normal;
        letter-spacing:0;text-transform:capitalize;
      }
      .wc-vector{position:absolute;top:7.4917vw;left:50%;transform:translateX(-50%);width:9.25vw;height:auto;}
      .wc-sub{
        position:absolute;top:9.2vw;width:100%;text-align:center;color:#666666;
        font-family:${sans};font-size:1.08vw;line-height:1.4583vw;
      }

      .wc-wires{position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;pointer-events:none;}

      .wc-wires-top{position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;pointer-events:none;}

      .wc-img{
        position:absolute;left:31.7708vw;top:15.0521vw;width:36.4583vw;height:36.4583vw;
        object-fit:contain;display:block;z-index:2;pointer-events:none;
        -webkit-mask-image:
          radial-gradient(ellipse 40% 49% at 50% 43%, #000 97%, transparent 100%),
          radial-gradient(ellipse 40% 24% at 50% 76%, #000 70%, transparent 100%);
        mask-image:
          radial-gradient(ellipse 40% 49% at 50% 43%, #000 97%, transparent 100%),
          radial-gradient(ellipse 40% 24% at 50% 76%, #000 70%, transparent 100%);
      }

      .wc-card{position:absolute;width:19.8958%;height:7.2396vw;background:#fff;
        border-radius:0.5208vw;z-index:3;
        box-shadow:0 0.4167vw 0.8333vw rgba(0,0,0,0.10),
                   0 1.0417vw 2.0833vw rgba(43,46,126,0.08);
        display:flex;align-items:center;gap:1.5625vw;padding:0 1.5625vw;
        transition:box-shadow .3s ease;
        cursor:pointer;
      }
      .wc-card:hover{
        box-shadow:0 0.625vw 1.25vw rgba(0,0,0,0.12),
                   0 1.5625vw 3.125vw rgba(43,46,126,0.20);
      }

      .wc-l1{left:8.8542%;top:17.5vw;}
      .wc-l2{left:8.8542%;top:27.8646vw;}
      .wc-l3{left:8.8542%;top:38.2292vw;}
      .wc-r1{left:71.25%;top:17.5vw;}
      .wc-r2{left:71.25%;top:27.8646vw;}
      .wc-r3{left:71.25%;top:38.2292vw;}

      .wc-ico{flex:0 0 4.6354vw;width:4.6354vw;height:4.6354vw;border-radius:50%;
        background:#FCFAF7;border:0.0521vw solid #E8D6BA;color:#CCA466;
        display:flex;align-items:center;justify-content:center;}
      .wc-ico svg{width:2.0833vw;height:2.0833vw;}

      .wc-card h3{color:#2E3192;font-family:${serif};font-size:1.0417vw;font-weight:700;margin-bottom:0.4167vw;}
      .wc-card p{color:#666666;font-family:${sans};font-size:0.7813vw;line-height:1.1979vw;}

      /* desktop-invisible additions */
      .wc-media{display:contents;}
      .wc-ring-m{display:none;}
      .wc-ring-m-top{display:none;}

      /* ============ MOBILE+TABLET ≤1023 — one template per ROW ============ */
      @media (max-width:1023px){
        .wc-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

        .wc-card{position:static;width:auto;height:auto;margin-top:3vw;
          padding:3.5vw 4vw;gap:3.5vw;border-radius:2vw;align-items:center;text-align:left;
          box-shadow:0 2px 6px rgba(0,0,0,0.08),
                     0 6px 16px rgba(43,46,126,0.08);}
        .wc-card:hover{box-shadow:0 4px 10px rgba(0,0,0,0.10),
                                  0 12px 24px rgba(43,46,126,0.18);}
        .wc-card p br{display:none;}
        .wc-l1,.wc-l2,.wc-l3,.wc-r1,.wc-r2,.wc-r3{left:auto;top:auto;}

        .wc-tag{order:1;position:static;font-size:clamp(12px, 1.4vw, 18px);}
        .wc-title{order:2;position:static;font-size:clamp(20px, 2.3vw, 32px);margin-top:2vw;}
        .wc-vector{order:3;position:static;transform:none;display:block;
          width:18%;margin:1vw auto -2vw;}
        .wc-sub{order:4;position:static;font-size:clamp(12px, 1.35vw, 17px);
          line-height:clamp(18px, 2vw, 26px);margin-top:2.5vw;}

        .wc-wires{display:none;}
        .wc-wires-top{display:none;}

        .wc-l1{order:5;margin-top:6vw;}
        .wc-l2{order:6;}
        .wc-l3{order:7;}

        .wc-media{order:8;display:block;position:relative;
          width:min(75vw,760px);margin:7vw auto 3vw;}
        .wc-media .wc-img{position:relative;left:auto;top:auto;z-index:2;
          width:100%;height:auto;margin:0;
          aspect-ratio:1 / 1;object-fit:contain;}

        /* ring behind (sides/bottom) */
        .wc-ring-m{display:block;position:absolute;left:50%;top:45%;
          width:90%;height:90%;transform:translate(-50%,-50%);
          z-index:1;pointer-events:none;}
        .wc-ring-m svg{width:100%;height:100%;display:block;}

        .wc-ring-m-top{display:block;position:absolute;left:50%;top:45%;
          width:90%;height:90%;transform:translate(-50%,-50%);
          z-index:3;pointer-events:none;}
        .wc-ring-m-top svg{width:100%;height:100%;display:block;}

        .wc-r1{order:9;margin-top:4vw;}
        .wc-r2{order:10;}
        .wc-r3{order:11;}

        .wc-ico{flex:0 0 clamp(40px, 6vw, 64px);
          width:clamp(40px, 6vw, 64px);height:clamp(40px, 6vw, 64px);}
        .wc-ico svg{width:clamp(18px, 2.8vw, 30px);height:clamp(18px, 2.8vw, 30px);}

        .wc-card h3{font-size:clamp(14px, 1.7vw, 21px);margin-bottom:1vw;}
        .wc-card p{font-size:clamp(11px, 1.25vw, 15px);
          line-height:clamp(16px, 1.8vw, 22px);}
      }

      /* ============ TABLET 640–1023 — 2-UP CARDS + CAPPED BOTTLE (identical to Shine) ============ */
      @media (min-width:640px) and (max-width:1023px){
        .wc-sec{padding:8vw 6vw;grid-template-columns:1fr 1fr;column-gap:16px;}
        .wc-tag,.wc-title,.wc-vector,.wc-sub,.wc-media{grid-column:1 / -1;}

        .wc-tag{font-size:13px;}
        .wc-title{font-size:28px;}
        .wc-sub{font-size:14px;line-height:1.6;}

        .wc-l1{order:5;margin-top:28px;}
        .wc-l2{order:6;margin-top:28px;}
        .wc-l3{order:7;margin-top:16px;}
        .wc-r1{order:8;margin-top:16px;}
        .wc-media{order:9;width:min(50vw,420px);margin:24px auto 8px;}
        .wc-r2{order:10;margin-top:16px;}
        .wc-r3{order:11;margin-top:16px;}

        .wc-card{padding:20px 22px;gap:16px;border-radius:16px;}
        .wc-ico{flex:0 0 48px;width:48px;height:48px;}
        .wc-ico svg{width:24px;height:24px;}
        .wc-card h3{font-size:16px;}
        .wc-card p{font-size:13px;line-height:1.5;}
      }
    `}</style>

    <p className="wc-tag">Why Choose Royal Luxury</p>
    <h2 className="wc-title">Luxury That Complements Your Beauty</h2>
    <img className="wc-vector" src={vector1} alt="" aria-hidden="true" />
    <p className="wc-sub">
      Explore premium makeup, skincare, haircare, and beauty essentials created to bring quality, 
      <br />
      care, and confidence to your everyday routine.
    </p>

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

      <circle cx="960" cy="605" r="315" stroke="#E38F2E" strokeWidth="3" mask="url(#wc-ringmask)" />

      <path d="M552 405.5 H668.5 L696 433"  stroke="#E38F2E" strokeWidth="3" />
      <path d="M552 604.5 H645"             stroke="#E38F2E" strokeWidth="3" />
      <path d="M552 803.5 H669.5 L696 777"  stroke="#E38F2E" strokeWidth="3" />

      <path d="M1368 405.5 H1251.5 L1224 433" stroke="#E38F2E" strokeWidth="3" />
      <path d="M1368 604.5 H1275"             stroke="#E38F2E" strokeWidth="3" />
      <path d="M1368 803.5 H1251.5 L1224 777" stroke="#E38F2E" strokeWidth="3" />

      <circle cx="696"  cy="433"   r="8" fill="#E38F2E" />
      <circle cx="645"  cy="604.5" r="8" fill="#E38F2E" />
      <circle cx="696"  cy="777"   r="8" fill="#E38F2E" />
      <circle cx="1224" cy="433"   r="8" fill="#E38F2E" />
      <circle cx="1275" cy="604.5" r="8" fill="#E38F2E" />
      <circle cx="1224" cy="777"   r="8" fill="#E38F2E" />
    </svg>

    <span className="wc-media">
      <img className="wc-img" src={centerImg} alt="Royal Luxury Radiance Serum" />
      <span className="wc-ring-m" aria-hidden="true">
        <svg viewBox="0 0 630 630" fill="none">
          <defs>
            <linearGradient id="wc-fade-m" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0.55" stopColor="#fff" />
              <stop offset="0.95" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="wc-ringmask-m">
              <rect x="0" y="0" width="630" height="630" fill="url(#wc-fade-m)" />
            </mask>
          </defs>
          <circle cx="315" cy="315" r="312" stroke="#E38F2E" strokeWidth="4" mask="url(#wc-ringmask-m)" />
        </svg>
      </span>
      <span className="wc-ring-m-top" aria-hidden="true">
        <svg viewBox="0 0 630 630" fill="none">
          <defs>
            <mask id="wc-topmask-m">
              <rect x="0" y="0" width="630" height="300" fill="#fff" />
            </mask>
          </defs>
          <circle cx="315" cy="315" r="312" stroke="#E38F2E" strokeWidth="4" mask="url(#wc-topmask-m)" />
        </svg>
      </span>
    </span>

    <svg className="wc-wires-top" viewBox="0 0 1920 1089" preserveAspectRatio="none" fill="none">
      <defs>
        <mask id="wc-topmask">
          <rect x="0" y="245" width="1920" height="375" fill="#fff" />
        </mask>
      </defs>
      <circle cx="960" cy="605" r="315" stroke="#E38F2E" strokeWidth="3" mask="url(#wc-topmask)" />
    </svg>

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

export default WhyRoyalLuxury;