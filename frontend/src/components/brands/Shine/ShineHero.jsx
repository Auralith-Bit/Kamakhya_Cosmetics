/**
 * FILE : frontend/src/components/brands/shine/ShineHero.jsx
 * ROUTE: /brands/shine — section 1 (hero banner)
 * RESPONSIVE:
 *   ≥1024      → exact 1920×450 Figma frame, scaled uniformly by vw/1920
 *   <1024      → fluid stacked layout:
 *                 • product image SHRINKS (aspect-ratio box, full lineup visible — no cropping)
 *                 • typography scales with clamp() on every device width
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/image 27.svg";
import shade from "../../../assets/Rectangle 4615.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const W = 1920;
const H = 450;

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
      {/* product photo — SHRINKS with the container, full lineup always visible */}
      <img className="sh-bg" src={banner} alt="Shine Clean & Fresh — dishwash liquid, toilet cleaner, detergent powder, hand wash, surface cleaner" />

      {/* leaf-shadow behind the text */}
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
    </>
  );

  return (
    <section id="shine-hero" className="sh-hero" style={desktop ? { height: Math.round(H * scale) } : undefined}>
      <style>{`
        /* ===== mobile-first stacked layout (all phones & tablets) ===== */
        .sh-hero{position:relative;width:100%;background:#F6EDE3;overflow:hidden;
          display:flex;flex-direction:column-reverse;}

        /* 👇 THE FIX: aspect-ratio box → image scales down instead of cropping.
           920/450 = the product half of the banner, so every bottle stays visible. */
        .sh-bg{display:block;width:100%;height:auto;aspect-ratio:920/450;
          object-fit:cover;object-position:right center;}

        .sh-shade{position:absolute;left:0;top:0;width:100%;height:42%;
          object-fit:cover;pointer-events:none;z-index:1;}

        .sh-copy{position:relative;z-index:2;
          padding:clamp(20px, 6vw, 48px) clamp(16px, 6vw, 48px);}

        /* fluid type — shrinks/grows continuously with the viewport */
        .sh-crumb{display:flex;align-items:center;gap:clamp(6px,1.6vw,10px);
          color:#2E3192;font-family:${serif};font-weight:700;
          font-size:clamp(13px, 3.6vw, 19px);flex-wrap:wrap;}
        .sh-crumb a{color:#2E3192;text-decoration:none;}
        .sh-tag{margin-top:clamp(12px,3vw,22px);color:#E38F2E;font-family:${sans};
          font-weight:500;font-size:clamp(15px, 4.4vw, 20px);}
        .sh-rule{width:clamp(70px,18vw,100px);height:3px;background:#E38F2E;
          margin-top:clamp(8px,2vw,12px);border-radius:2px;}
        .sh-title{margin-top:clamp(10px,2.6vw,16px);color:#2E3192;font-family:${serif};
          font-weight:700;font-size:clamp(30px, 9vw, 44px);line-height:1.1;}
        .sh-p{margin-top:clamp(10px,2.6vw,14px);color:#5A6673;font-family:${sans};
          font-size:clamp(13px, 3.8vw, 16px);line-height:1.7;max-width:760px;}

        /* ===== desktop (≥1024): exact frame, scaled — already shrinks ===== */
        @media (min-width:1024px){
          .sh-hero{display:block;}
          .sh-bg{position:absolute;top:0;left:0;width:1920px;height:450px;
            aspect-ratio:auto;object-fit:cover;object-position:center;}
          .sh-shade{position:absolute;top:-31px;left:-210px;width:1900px;height:510px;
            object-fit:fill;z-index:1;pointer-events:none;}
          .sh-copy{position:absolute;left:176px;top:80px;padding:0;width:780px;z-index:2;}
          .sh-crumb{font-size:24px;gap:10px;flex-wrap:nowrap;}
          .sh-tag{margin-top:25px;font-size:24px;}
          .sh-rule{width:104px;margin-top:12px;}
          .sh-title{margin-top:20px;font-size:50px;font-weight:400;}
          .sh-p{margin-top:22px;font-size:20px;line-height:29px;}
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