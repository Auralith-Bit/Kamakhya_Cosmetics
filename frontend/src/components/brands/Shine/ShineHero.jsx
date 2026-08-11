/**
 * FILE : frontend/src/components/brands/shine/ShineHero.jsx
 * ROUTE: /brands/shine — section 1 (hero banner)
 * DESIGN: Figma frame 1920 x 450
 *         - image 27.svg FULL-BLEED (cream left, 5 products right — no crop, no seam)
 *         - Rectangle 4615.svg leaf-shadow behind the copy (left)
 * RESPONSIVE — covers every DevTools device:
 *   <360         Galaxy Z Fold 5 (closed)
 *   360–479      iPhone SE→16 Pro Max, Pixel 7–10, Galaxy S8+/S20 Ultra
 *   480–767      Surface Duo (single screen)
 *   768–1023     iPad Mini/Air/Pro portrait, Surface Pro 7 portrait
 *   ≥1024        exact 1920x450 frame scaled by vw/1920 (design never alters)
 *   landscape    max-height query for short phones
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/image 27.svg";
import shade from "../../../assets/Rectangle 4615.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const W = 1920;
const H = 450;   /* frame height from Figma */

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

  const desktop = vw >= 1024;
  const scale = vw / W;

  const layers = (
    <>
      {/* product photo — FULL FRAME, exactly as Figma (no right-box crop, no seam) */}
      <img className="sh-bg" src={banner} alt="Shine Clean & Fresh — dishwash liquid, toilet cleaner, detergent powder, hand wash, surface cleaner" />

      {/* transparent leaf-shadow rectangle behind the text */}
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
          <br className="sh-br" />
          performance, everyday freshness, and dependable quality.
        </p>
      </div>
    </>
  );

  return (
    <section id="shine-hero" className="sh-hero" style={desktop ? { height: Math.round(H * scale) } : undefined}>
      <style>{`
        /* ===== TIER 0: <360 (Z Fold closed) ===== */
        .sh-hero{position:relative;width:100%;background:#F6EDE3;overflow:hidden;
          display:flex;flex-direction:column-reverse;}
        .sh-bg{display:block;width:100%;height:220px;object-fit:cover;object-position:center right;}
        .sh-shade{position:absolute;left:0;top:0;width:100%;height:240px;object-fit:cover;
          pointer-events:none;z-index:1;}
        .sh-copy{position:relative;z-index:2;padding:24px 18px;}
        .sh-crumb{display:flex;align-items:center;gap:8px;color:#2E3192;font-family:${serif};
          font-size:14px;font-weight:700;flex-wrap:wrap;}
        .sh-crumb a{color:#2E3192;text-decoration:none;}
        .sh-tag{margin-top:16px;color:#E38F2E;font-family:${sans};font-size:15px;font-weight:500;}
        .sh-rule{width:80px;height:3px;background:#E38F2E;margin-top:10px;border-radius:2px;}
        .sh-title{margin-top:12px;color:#2E3192;font-family:${serif};font-size:30px;font-weight:700;line-height:1.1;}
        .sh-p{margin-top:12px;color:#5A6673;font-family:${sans};font-size:13px;line-height:22px;max-width:760px;}
        .sh-br{display:none;}

        /* ===== TIER 1: 360–479 (all phones) ===== */
        @media (min-width:360px){
          .sh-bg{height:260px;}
          .sh-shade{height:280px;}
          .sh-copy{padding:28px 22px;}
          .sh-crumb{font-size:15px;gap:10px;}
          .sh-tag{font-size:16px;}
          .sh-title{font-size:34px;}
          .sh-p{font-size:14px;line-height:24px;}
        }

        /* ===== TIER 2: 480–767 (Surface Duo single) ===== */
        @media (min-width:480px){
          .sh-bg{height:300px;}
          .sh-shade{height:320px;}
          .sh-copy{padding:32px 28px;}
          .sh-crumb{font-size:16px;}
          .sh-tag{font-size:18px;}
          .sh-title{font-size:38px;}
          .sh-p{font-size:15px;line-height:26px;}
        }

        /* ===== TIER 3: 768–1023 (iPads portrait, Surface Pro portrait) ===== */
        @media (min-width:768px){
          .sh-bg{height:380px;}
          .sh-shade{height:400px;}
          .sh-copy{padding:40px 48px;}
          .sh-crumb{font-size:19px;}
          .sh-tag{font-size:20px;}
          .sh-title{font-size:44px;}
          .sh-p{font-size:16px;line-height:27px;}
          .sh-br{display:inline;}
        }

        /* ===== landscape phones (short height) ===== */
        @media (max-width:1023px) and (max-height:480px){
          .sh-bg{height:180px;}
          .sh-shade{height:220px;}
          .sh-copy{padding:16px 22px;}
          .sh-tag{margin-top:10px;font-size:14px;}
          .sh-title{font-size:28px;}
          .sh-p{margin-top:8px;font-size:13px;line-height:20px;}
        }

        /* ===== TIER 4: ≥1024 — EXACT 1920x450 frame, scaled uniformly ===== */
        @media (min-width:1024px){
          .sh-hero{display:block;}

          /* full-bleed frame image (no crop, no seam) */
          .sh-bg{
            position:absolute;top:0;left:0;
            width:1920px;height:450px;
            object-fit:cover;object-position:center;
          }

          /* leaf-shadow rectangle (your tuned values) */
          .sh-shade{
            position:absolute;top:-31px;left:-210px;
            width:1900px;height:510px;
            object-fit:fill;z-index:1;pointer-events:none;
          }

          .sh-copy{position:absolute;left:176px;top:80px;padding:0;width:780px;z-index:2;}
          .sh-crumb{font-size:24px;}
          .sh-tag{margin-top:25px;font-size:24px;}
          .sh-rule{width:104px;margin-top:12px;}
          .sh-title{margin-top:20px;font-size:50px;font-weight:400;color:#2E3192;}
          .sh-p{margin-top:22px;font-size:20px;line-height:29px;}
          .sh-br{display:inline;}
        }
      `}</style>

      {desktop ? (
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", width: W, height: H, position: "relative" }}>
          {layers}
        </div>
      ) : (
        layers
      )}
    </section>
  );
};

export default ShineHero;