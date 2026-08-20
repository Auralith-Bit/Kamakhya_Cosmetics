import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/image 27.svg";
import shade from "../../../assets/Rectangle 4615.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const HomeIcon = () => (
  <svg className="ic-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);
const Chev = () => (
  <svg className="ic-chev" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ShineHero = () => (
  <section id="shine-hero" className="sh-hero">
    <style>{`
      /* ================= DESKTOP (>1280): Figma-exact ================= */
      .sh-hero{
        position:relative;
        width:100%;
        height:23.4375vw;
        min-height:340px;
        background:#F6EDE3;
        overflow:hidden;
      }
      .sh-bg{position:absolute;inset:0;width:100%;height:100%;
        object-fit:cover;object-position:center;}
      .sh-shade{position:absolute;top:-1.6146vw;left:-10.9375vw;
        width:98.9583vw;height:26.5625vw;object-fit:fill;
        z-index:1;pointer-events:none;}
      .sh-copy{position:absolute;
        left:clamp(16px, 9.1667vw, 176px);
        top:clamp(16px, 4.1667vw, 80px);
        width:clamp(280px, 40.625vw, 780px);
        z-index:2;}
      .sh-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
        font-family:${serif};
        font-size:clamp(12px, 1.25vw, 24px);
        font-weight:700;white-space:nowrap;}
      .sh-crumb a{color:#2E3192;text-decoration:none;}
      .ic-home{width:clamp(14px, 1.0417vw, 20px);height:clamp(14px, 1.0417vw, 20px);}
      .ic-chev{width:clamp(6px, 0.4688vw, 9px);height:clamp(9px, 0.7292vw, 14px);}
      .sh-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
        font-size:clamp(12px, 1.25vw, 24px);font-weight:500;}
      .sh-rule{width:clamp(52px, 5.4167vw, 104px);height:clamp(2px, 0.1563vw, 3px);
        background:#E38F2E;margin-top:0.625vw;border-radius:0.1042vw;}
      .sh-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
        font-size:clamp(26px, 2.6042vw, 50px);font-weight:400;line-height:1.1;}
      .sh-p{margin-top:1.1458vw;color:#5A6673;font-family:${sans};
        font-size:clamp(12px, 1.0417vw, 20px);
        line-height:clamp(18px, 1.5104vw, 29px);
        max-width:100%;}

      /* ============ ≤1280 (tablets AND phone layout-widths ~980px)
         same tier as BestSellers → this is what makes phones react ============ */
      @media (max-width:1280px){
        .sh-hero{height:32vw;}
        .sh-copy{left:7vw;top:5vw;width:55vw;}
        .sh-crumb{font-size:1.8vw;gap:0.8vw;}
        .ic-home{width:1.5vw;height:1.5vw;}
        .ic-chev{width:0.7vw;height:1.1vw;}
        .sh-tag{font-size:1.8vw;}
        .sh-rule{width:8vw;height:0.25vw;}
        .sh-title{font-size:3.8vw;}
        .sh-p{font-size:1.5vw;line-height:2.2vw;max-width:55vw;}
      }

      /* ============ ≤640 (real phones): stack copy → banner ============ */
      @media (max-width:640px){
        .sh-hero{height:auto;min-height:0;display:flex;flex-direction:column;}
        .sh-copy{position:static;order:1;width:auto;padding:6vw 5vw 4vw;}
        .sh-crumb{flex-wrap:wrap;white-space:normal;
          column-gap:2.2vw;row-gap:1.2vw;font-size:3.6vw;}
        .ic-home{width:4vw;height:4vw;}
        .ic-chev{width:1.7vw;height:2.5vw;}
        .sh-tag{margin-top:4.5vw;margin-bottom:1.5vw;font-size:3.8vw;}
        .sh-rule{width:18vw;height:1vw;margin-top:0;border-radius:0.5vw;}
        .sh-title{margin-top:3.5vw;font-size:8.5vw;line-height:1.15;}
        .sh-p{margin-top:3.5vw;font-size:3.9vw;line-height:5.8vw;max-width:100%;}
        .sh-bg{position:relative;inset:auto;order:2;display:block;
          width:100%;max-width:100%;height:auto;object-fit:contain;}
        .sh-shade{display:none;}
      }
    `}</style>

    <img className="sh-bg" src={banner} alt="Shine Clean & Fresh — dishwash liquid, toilet cleaner, detergent powder, hand wash, surface cleaner" />
    <img className="sh-shade" src={shade} alt="" aria-hidden="true" />

    <div className="sh-copy">
      <nav className="sh-crumb" aria-label="Breadcrumb">
        <HomeIcon />
        <Link to="/">Home</Link>
        <Chev />
        <Link to="/brands/shine">Brands</Link>
        <Chev />
        <span>Shine</span>
      </nav>

      <p className="sh-tag">A Kamakhya Cosmetics House</p>
      <div className="sh-rule" />
      <h1 className="sh-title">Shine</h1>

      <p className="sh-p">
        Explore premium home-care and cleaning products designed for powerful
        performance, everyday freshness, and dependable quality.
      </p>
    </div>
  </section>
);

export default ShineHero;