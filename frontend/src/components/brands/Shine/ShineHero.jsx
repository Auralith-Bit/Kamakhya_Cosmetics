/**
 * FILE : frontend/src/components/brands/shine/ShineHero.jsx
 * ROUTE: /brands/shine — section 1 (hero banner)
 * DESIGN: Figma frame 1920 x 450 — copy left (x176), image 27.svg right
 */
import React, { useEffect, useState } from "react";
import banner from "../../../assets/image 27.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const W = 1920;
const H = 450;   /* 👈 frame height from Figma */

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
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const desktop = vw >= 1024;
  const scale = vw / W;

  const layers = (
    <>
      <img className="sh-bg" src={banner} alt="Shine Clean & Fresh — dishwash liquid, toilet cleaner, detergent powder, hand wash, surface cleaner" />

      <div className="sh-copy">
        <nav className="sh-crumb" aria-label="Breadcrumb">
          <HomeIcon />
          <a href="/">Home</a>
          <Chev />
          <a href="/brands/shine">Brands</a>
          <Chev />
          <span>Shine</span>
        </nav>

        <p className="sh-tag">A Kamakhya Cosmetics House</p>
        <div className="sh-rule" />
        <h1 className="sh-title">Shine</h1>

        <p className="sh-p">
          Explore premium home-care and cleaning products designed for powerful
          <br />
          performance, everyday freshness, and dependable quality.
        </p>
      </div>
    </>
  );

  return (
    <section id="shine-hero" className="sh-hero" style={desktop ? { height: Math.round(H * scale) } : undefined}>
      <style>{`
        .sh-hero{position:relative;width:100%;background:#F6EDE3;overflow:hidden;
          display:flex;flex-direction:column-reverse;}
        /* mobile: text first, photo below */
        .sh-bg{display:block;width:100%;height:300px;object-fit:cover;object-position:center right;}
        .sh-copy{padding:32px 24px;}
        .sh-crumb{display:flex;align-items:center;gap:10px;color:#2E3192;font-family:${serif};font-size:17px;font-weight:700;}
        .sh-crumb a{color:#2E3192;text-decoration:none;}
        .sh-tag{margin-top:22px;color:#E38F2E;font-family:${sans};font-size:18px;font-weight:500;}
        .sh-rule{width:100px;height:3px;background:#E38F2E;margin-top:12px;border-radius:2px;}
        .sh-title{margin-top:16px;color:#2E3192;font-family:${serif};font-size:38px;font-weight:700;line-height:1.1;}
        .sh-p{margin-top:14px;color:#5A6673;font-family:${sans};font-size:15px;line-height:26px;max-width:760px;}

        /* desktop: exact 1920x450 Figma frame, scaled */
        @media (min-width:1024px){
          .sh-hero{display:block;}
          
          .sh-bg{
          position:absolute;
          top:0;
          padding-right:
          width:950px;
          height:${H}px;
          object-fit:cover;
          object-position:center;
          }
          
          .sh-copy{
          position:absolute;
          left:176px;
          top:80px;
          padding:0;
          width:780px;
          }
          
          .sh-crumb{
          font-size:24px;
          }
          
          .sh-tag{
          margin-top:25px;
          font-size:24px;
          }
          
          .sh-rule{
          width:104px;
          margin-top:12px;
          }
          
          .sh-title{
          margin-top:20px;
          font-size:50px;
          font-weight:400;
          color: #2E3192;
          }
          
          .sh-p{
          margin-top:22px;
          font-size:20px;
          line-height:29px;
          }

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