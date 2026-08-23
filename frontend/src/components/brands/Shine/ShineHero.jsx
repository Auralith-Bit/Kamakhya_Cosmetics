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
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .sh-hero{
        position:relative;
        width:100%;
        height:23.4375vw;            /* 👈 height responsive with width */
        background:#F6EDE3;
        overflow:hidden;
      }
      .sh-bg{position:absolute;inset:0;width:100%;height:100%;
        object-fit:cover;object-position:center;}
      .sh-shade{position:absolute;top:-1.6146vw;left:-10.9375vw;
        width:98.9583vw;height:26.5625vw;object-fit:fill;
        z-index:1;pointer-events:none;}
      .sh-copy{position:absolute;left:9.1667vw;top:4.1667vw;width:40.625vw;z-index:2;}
      .sh-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
        font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
      .sh-crumb a{color:#2E3192;text-decoration:none;}
      .ic-home{width:1.0417vw;height:1.0417vw;}
      .ic-chev{width:0.4688vw;height:0.7292vw;}
      .sh-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
        font-size:1.25vw;font-weight:500;}
      .sh-rule{width:5.4167vw;height:0.1563vw;background:#E38F2E;
        margin-top:0.625vw;border-radius:0.1042vw;}
      .sh-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
        font-size:2.6042vw;font-weight:400;line-height:1.1;}
      .sh-p{margin-top:1.1458vw;color:#5A6673;font-family:${sans};
        font-size:1.0417vw;line-height:1.5104vw;max-width:40.625vw;}

      /* ============ MOBILE+TABLET ≤1023 — same as your approved version,
         only the tuck deepened so the top edge hides behind the copy on
         EVERY device (copy is z-2 above the image, so nothing else moves) ============ */
      @media (max-width:1023px){
        .sh-hero{height:auto;display:flex;flex-direction:column;background:#F6EDE3;}

        .sh-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
          order:1;padding:10vw 6vw 0;}
        .sh-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
        .ic-home{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
        .ic-chev{width:clamp(6px, 0.9vw, 10px);height:clamp(10px, 1.4vw, 15px);}
        .sh-tag{margin-top:4vw;font-size:clamp(12px, 1.5vw, 18px);}
        .sh-rule{width:clamp(40px, 10vw, 70px);height:3px;margin-top:2vw;border-radius:2px;}
        .sh-title{margin-top:3vw;font-size:clamp(28px, 6vw, 44px);}
        .sh-p{margin-top:4vw;font-size:clamp(13px, 1.6vw, 18px);
          line-height:1.6;max-width:none;}

        /* ✅ -56vw → -62vw : deepens overlap just past the tallest copy
           render, so no cream sliver can show above the image */
        .sh-bg{position:relative;z-index:1;inset:auto;width:100%;display:block;
          order:2;margin-top:-62vw;}

        .sh-shade{display:none;}
      }

      /* ============ PHONES <640 — unchanged crop ============ */
      @media (max-width:639px){
        .sh-bg{aspect-ratio:16/10;object-fit:cover;object-position:62% center;}
      }

      /* ============ TABLET 640–1023 — unchanged crop/type, tuck -36 → -42 ============ */
      @media (min-width:640px) and (max-width:1023px){
        .sh-copy{padding:8vw 6vw 0;}
        .sh-crumb{font-size:15px;}
        .sh-tag{font-size:14px;}
        .sh-title{font-size:40px;}
        .sh-p{font-size:15px;}
        .sh-bg{margin-top:-42vw;aspect-ratio:21/9;object-fit:cover;object-position:center;}
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