import React from "react";
import photo from "../../../assets/Group 3658.svg";
import play from "../../../assets/Button.svg";
import card1 from "../../../assets/Frame 2121455886.svg";
import card2 from "../../../assets/Frame 2121455887.svg";
import card3 from "../../../assets/Frame 2121455888.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const BrandPhilosophy = () => (
  <section id="shine-philosophy" className="bp-sec">
    <style>{`
      /* ================= DESKTOP — ORIGINAL DESIGN, UNTOUCHED ================= */
      .bp-sec{position:relative;width:100%;height:46.875vw;background:#fff;overflow:hidden;}

      .bp-photo{
        position:absolute;
        top:5.6646vw;
        left:60.875vw;
        width:31.6042vw;
        height:35.25vw;
        object-fit:fill;
        object-position:center;
      }

      .bp-play{
        position:absolute;
        left:73.6075vw;
        top:21.3vw;
        width:5.2083vw;
        height:5.2083vw;
        cursor:pointer;
      }

      .bp-copy{position:absolute;left:8.8542vw;top:6.9271vw;width:45.8333vw;}

      .bp-tag{
        color:#E38F2E;
        font-family:${sans};
        font-size:0.8333vw;
        margin-top:-1.25vw;
        font-weight:600;
        letter-spacing:0.18em;
        text-transform:uppercase;
      }

      .bp-rule{width:2.6042vw;height:0.1563vw;background:#E38F2E;
        margin-top:0.68vw;border-radius:0.0781vw;}

      .bp-title{
        color:#2E3192;
        font-family:${serif};
        font-size:1.5625vw;
        font-weight:700;
        margin-top:0.5vw;
        line-height:1.2;
      }

      .bp-accent{color:#E38F2E;}

      .bp-p{
        color:#333333;
        font-family:${sans};
        font-weight:400;
        letter-spacing:0;
        font-size:0.9375vw;
        margin-top:1.25vw;
        line-height:1.4063vw;
        width:44.5vw;
      }

      .bp-line{display:block;}

      .bp-cards{
        position:absolute;
        left:6.9vw;
        top:17.8958vw;
        display:flex;
      }

      .bp-cards img{
        width:15.9792vw;
        height:18.8438vw;
        border-radius:0.5208vw;
        display:block;
      }

      .bp-cards img + img{margin-left:-1.25vw;}

      .bp-btn{
        position:absolute;
        left:8.8542vw;
        top:36.8vw;
        width:17.8125vw;
        height:2.8646vw;
        border-radius:0.3646vw;
        background:#176B22;
        border:0.1563vw solid #176B22;
        color:#fff;
        font-family:${sans};
        font-size:0.8854vw;
        letter-spacing:0.05em;
        cursor:pointer;
        transition:background .2s;
        display:flex;align-items:center;justify-content:center;gap:0.5208vw;
      }

      .bp-btn:hover{background:#0f5217;}

      .bp-btn svg{width:0.4688vw;height:0.7292vw;flex-shrink:0;}

      .bp-btn2{
        left:28.125vw;
        width:15.5vw;
        background:#F7F5F0;
        border:0.1563vw solid #176B22;
        color:#176B22;
        font-weight:500;
        text-transform:uppercase;
      }

      .bp-btn2:hover{background:#eef0e9;}

      .bp-btn2 svg{width:1.0417vw;height:1.0417vw;flex-shrink:0;}

      /* ============ ≤1280 (tablets + phone layout-widths) — mobile-only tier ============ */
      @media (max-width:1280px){
        .bp-sec{height:58vw;}
        .bp-tag{font-size:1.2vw;}
        .bp-rule{width:3.6vw;height:0.22vw;}
        .bp-title{font-size:2.3vw;}
        .bp-p{font-size:1.35vw;line-height:2vw;width:46vw;}
        .bp-cards{top:24.5vw;}
        .bp-cards img{width:20vw;height:23.6vw;}
        .bp-cards img + img{margin-left:-1.6vw;}
        .bp-btn{top:51vw;height:4vw;font-size:1.2vw;width:24vw;}
        .bp-btn svg{width:0.7vw;height:1.1vw;}
        .bp-btn2{left:34.4vw;width:21vw;}
        .bp-btn2 svg{width:1.5vw;height:1.5vw;}
        .bp-play{left:72.7075vw;top:20.4vw;width:7vw;height:7vw;}
      }

      /* ============ ≤640 (real phones) — stacked, no DOM changes ============ */
      @media (max-width:640px){
        .bp-sec{height:auto;display:grid;grid-template-columns:1fr;
          padding:10vw 5vw 12vw;}

        .bp-copy{position:static;grid-column:1;grid-row:1;width:auto;}
        .bp-tag{font-size:3.2vw;margin-top:0;}
        .bp-rule{width:12vw;height:1vw;margin-top:2.5vw;}
        .bp-title{font-size:6vw;margin-top:2.5vw;}
        .bp-p{font-size:3.7vw;line-height:5.6vw;margin-top:3.5vw;width:100%;}
        .bp-line{display:inline;}

        /* cards: single column, full width, gap-4 */
        .bp-cards{position:static;grid-column:1;grid-row:2;
          flex-direction:column;gap:4vw;margin-top:7vw;}
        .bp-cards img{width:100%;height:auto;border-radius:3vw;}
        .bp-cards img + img{margin-left:0;}

        /* buttons: stacked, full-width touch targets */
        .bp-btn{position:static;grid-column:1;grid-row:3;width:100%;
          height:12vw;font-size:3.6vw;border-radius:2vw;margin-top:7vw;}
        .bp-btn svg{width:1.8vw;height:2.8vw;}
        .bp-btn2{grid-column:1;grid-row:4;left:auto;width:100%;margin-top:4vw;}
        .bp-btn2 svg{width:4vw;height:4vw;}

        /* video last: full width + aspect ratio; play centered over it
           (same grid cell = overlap, no wrapper needed) */
        .bp-photo{position:static;grid-column:1;grid-row:5;width:100%;
          height:auto;aspect-ratio:31.6042/35.25;object-fit:cover;margin-top:8vw;}
        .bp-play{position:static;grid-column:1;grid-row:5;place-self:center;
          width:14vw;height:14vw;z-index:2;}
      }
    `}</style>

    <img className="bp-photo" src={photo} alt="Shine home-care products caring for a clean home" />
    <img className="bp-play" src={play} alt="Watch the Shine story" />

    <div className="bp-copy">
      <p className="bp-tag">Our Brand Philosophy</p>
      <div className="bp-rule" />
      <h2 className="bp-title">Clean by Nature, <span className="bp-accent">Care in Every Touch</span></h2>
      <p className="bp-p">
        <span className="bp-line">
          Shine believes a clean home creates a happy home. Our products are thoughtfully formulated
        </span>
        <span className="bp-line">
          with safe, effective ingredients that care for your family, your home, and the environment—
        </span>
        <span className="bp-line">
          delivering reliable cleaning performance every single day.
        </span>
      </p>
    </div>

    <div className="bp-cards">
      <img src={card1} alt="Shine philosophy — clean formula" />
      <img src={card2} alt="Shine philosophy — trusted quality" />
      <img src={card3} alt="Shine philosophy — everyday care" />
    </div>

    <button className="bp-btn">
      EXPLORE OUR COLLECTION
      <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="m1.5 1.5 6 5.5-6 5.5" />
      </svg>
    </button>

    <button className="bp-btn bp-btn2">
      Download Catalog
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </button>
  </section>
);

export default BrandPhilosophy;