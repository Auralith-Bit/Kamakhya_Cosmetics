/**
 * FILE : frontend/src/components/brands/shine/ShineHero.jsx
 * ROUTE: /brands/shine — section 1 (hero banner)
 * DESIGN CONTRACT: the 1920 x 450 Figma frame is rendered ONCE and scaled
 *   uniformly (scale = vw/1920) at EVERY viewport width.
 *   No breakpoints, no stacked fallback, no cropping → the presented
 *   design NEVER changes, on any device or window size.
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/image 27.svg";
import shade from "../../../assets/Rectangle 4615.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const W = 1920;
const H = 450;   /* Figma frame */

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);

const Chev = () => (
  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ShineHero = () => {
  const [vw, setVw] = useState(() => (typeof window !== "undefined" ? window.innerWidth : W));
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = vw / W;   /* the ONLY responsive value — everything else is fixed */

  return (
    <section id="shine-hero" className="sh-hero" style={{ height: Math.round(H * scale) }}>
      <style>{`
        .sh-hero{position:relative;width:100%;background:#F6EDE3;overflow:hidden;}
        .sh-stage{position:relative;transform-origin:top left;}

        /* ---- exact Figma coordinates — never altered ---- */
        .sh-bg{position:absolute;top:0;left:0;width:1920px;height:450px;
          object-fit:cover;object-position:center;}
        .sh-shade{position:absolute;top:-31px;left:-210px;width:1900px;height:510px;
          object-fit:fill;z-index:1;pointer-events:none;}
        .sh-copy{position:absolute;left:176px;top:80px;width:780px;z-index:2;}
        .sh-crumb{display:flex;align-items:center;gap:10px;color:#2E3192;
          font-family:${serif};font-size:24px;font-weight:700;white-space:nowrap;}
        .sh-crumb a{color:#2E3192;text-decoration:none;}
        .sh-tag{margin-top:25px;color:#E38F2E;font-family:${sans};font-size:24px;font-weight:500;}
        .sh-rule{width:104px;height:3px;background:#E38F2E;margin-top:12px;border-radius:2px;}
        .sh-title{margin-top:20px;color:#2E3192;font-family:${serif};font-size:50px;
          font-weight:400;line-height:1.1;}
        .sh-p{margin-top:22px;color:#5A6673;font-family:${sans};font-size:20px;
          line-height:29px;max-width:780px;}
      `}</style>

      {/* the single, immutable design frame — scaled uniformly everywhere */}
      <div className="sh-stage" style={{ transform: `scale(${scale})`, width: W, height: H }}>
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
      </div>
    </section>
  );
};

export default ShineHero;