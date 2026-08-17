import React from "react";
import { Link } from "react-router-dom";
import brandImg from "../../../assets/image 67.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);

const OtherBrands = () => (
  <section id="shine-other-brands" className="ob-sec">
    <style>{`
      .ob-sec{position:relative;width:100%;height:40.8854vw;background:#fff;overflow:hidden;}

      /* ---- panel 170/70.5 1580x644 ---- */
      .ob-panel{position:absolute;left:8.8542vw;top:3.6719vw;width:82.2917vw;height:33.5417vw;
        background:#FCF9F2;border:0.0521vw solid #E8D6BA;border-radius:0.5208vw;overflow:hidden;}

      /* ---- left image 859x644, rounded left corners ---- */
      .ob-img{position:absolute;left:0;top:0;width:44.7396vw;height:33.5417vw;
        object-fit:cover;display:block;}

      /* ---- right column x1093 ---- */
      .ob-right{position:absolute;left:48.0729vw;top:8.6719vw;width:30vw;}
      
      .ob-tag{
      color:#E38F2E;
      font-family:${sans};
      font-size:0.8333vw;
      font-weight:600;
      letter-spacing:0.25em;
      }
      
      .ob-rule{width:2.6042vw;height:0.1563vw;background:#CCA466;margin-top:0.7813vw;border-radius:0.0781vw;}
      .ob-title{
      margin-top:1.5vw;
      color:#2E3192;
      font-family:${serif};
      font-size:2.0833vw;
      font-weight:600;
      font-style: bold;
      letter-spacing: 0.039em;
      line-height:normal;
      text-transform:capitalize;
      }
      
      .ob-para{
      margin-top:1.3021vw;
      color:#666666;
      font-family:${sans};
      font-size:0.89vw;
      letter-spacing: 0.025em;
      line-height:1.4583vw;
      }

      /* ---- outline button → routes to Royal Luxury ---- */
      .ob-btn{margin-top:2.0833vw;display:inline-flex;align-items:center;gap:0.5208vw;
        padding:0.7813vw 1.5625vw;border:0.1302vw solid #2E3192;border-radius:0.4167vw;
        color:#2E3192;font-family:${sans};font-size:0.8333vw;font-weight:600;
        text-decoration:none;transition:none;}
      .ob-btn:hover{background:transparent;color:#2E3192;}
      .ob-btn svg{width:0.9375vw;height:0.625vw;}
    `}</style>

    <div className="ob-panel">
      <img className="ob-img" src={brandImg} alt="Royal Luxury — a pure essence collection" />

      <div className="ob-right">
        <p className="ob-tag">Also From Kamakhya Cosmetics</p>
        <div className="ob-rule" />
        <h2 className="ob-title">Royal Luxury</h2>
        <p className="ob-para">
          Luxury skincare and cosmetic collections crafted with
          <br />
          premium ingredients for timeless beauty.
        </p>
        <Link className="ob-btn" to="/brands/royal-luxury">
          Explore Royal Luxury <Arrow />
        </Link>
      </div>
    </div>
  </section>
);

export default OtherBrands;