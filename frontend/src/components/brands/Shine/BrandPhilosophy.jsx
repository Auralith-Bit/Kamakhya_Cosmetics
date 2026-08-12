/**
 * FILE : frontend/src/components/brands/shine/BrandPhilosophy.jsx
 * ROUTE: /brands/shine — section 2 (Our Brand Philosophy)
 * DESIGN: 1920x900 — copy + 3 cards + button left, Group 3658.svg right
 * RESPONSIVE: every value in vw (designPx/19.2); height = 46.875vw
 */
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
      .bp-sec{position:relative;width:100%;height:46.875vw;background:#fff;overflow:hidden;}

      /* right photo + play button overlay */
      .bp-photo{
      position:absolute;
      margin-top: 55px;
      margin-right: 55px;
      margin-left: 900px;
      width:530px;
      height:600px;
      object-fit:fill;
      object-position:center;
      }
      
      .bp-play{
      position:absolute;
      left:72.1875vw;
      top:20.8333vw;
      width:100px;
      height:100px;
      cursor:pointer;
      }

      /* left copy block */
      .bp-copy{
      position:absolute;
      left:8.8542vw;
      top:6.9271vw;
      width:880px;
      }
      
      .bp-tag{color:#E38F2E;font-family:${sans};font-size:0.8333vw;font-weight:600;
        letter-spacing:0.18em;text-transform:uppercase;}
      .bp-rule{width:2.6042vw;height:0.1563vw;background:#E38F2E;margin-top:0.68vw;border-radius:0.0781vw;}
      .bp-title{margin-top:1.5885vw;color:#2E3192;font-family:${serif};
        font-size:1.5625vw;font-weight:700;line-height:1.2;}
      
      .bp-p{
        margin-top:1.94vw;             /* title(220) → line-1(257.68) */
        color:#333333;
        font-family:${sans};           /* Poppins */
        font-weight:380;
        letter-spacing:0;
        font-size:0.9375vw;            /* 👈 18px @1920 (was 16px → lines were ~11% short) */
        line-height:1.4063vw;          /* 27px @1920 */
        width:44.5vw;                  /* 👈 854px @1920 — lets line-2 (852px) sit on ONE line */
      }
      .bp-line{ display:block; } 

      /* three philosophy cards */
      .bp-cards{
      position:absolute;
      left:7.0542vw;
      top:19.8958vw;
      display:flex;
      }
      
      .bp-cards img{
      width:230px;
      height:285px;
      border-radius:0.5208vw;
      display:block;

      
      }

      /* green CTA */
      .bp-btn{position:absolute;left:8.8542vw;top:37.3438vw;width:17.8125vw;height:2.8646vw;
        border-radius:0.3646vw;background:#176B22;border:0.1563vw solid #176B22;
        color:#fff;font-family:${sans};font-size:0.8854vw;font-weight:600;letter-spacing:0.05em;
        cursor:pointer;transition:background .2s;}
      .bp-btn:hover{background:#0f5217;}
    `}</style>

    <img className="bp-photo" src={photo} alt="Shine home-care products caring for a clean home" />
    <img className="bp-play" src={play} alt="Watch the Shine story" />

    <div className="bp-copy">
      <p className="bp-tag">Our Brand Philosophy</p>
      <div className="bp-rule" />
      <h2 className="bp-title">Clean That You Can Trust</h2>
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
      <img src={card1} alt="Shine philosophy — powerful clean" />
      <img src={card2} alt="Shine philosophy — safe & pure" />
      <img src={card3} alt="Shine philosophy — fresh & lasting" />
    </div>

    <button className="bp-btn">Explore All Products</button>
  </section>
);

export default BrandPhilosophy;