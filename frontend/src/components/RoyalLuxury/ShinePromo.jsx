import React from "react";
import { Link } from "react-router-dom";
import brandImg from "../../assets/ShinePromo.svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const Arrow = () => (
  <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M0 6h15" /><path d="m11.5 1 5 5-5 5" />
  </svg>
);

const ShinePromo = () => (
  <section id="shine-other-brands" className="ob-sec">
    <style>{`
      /* ============ ALL BREAKPOINTS — FIXED px type; panel height now follows
         the artwork's natural ratio so the FULL image is always visible;
         ≥1024 side-by-side · ≤1023 stacked ============ */
      .ob-sec{position:relative;width:100%;background:#fff;
        padding:56px 24px 64px;box-sizing:border-box;}

      /* ---- panel: capped width, height driven by the image ---- */
      .ob-panel{
        position:relative;
        width:min(100%, 1160px);
        margin:0 auto;
        background:#176B221A;
        border-radius:10px;
        overflow:hidden;
        display:grid;
        grid-template-columns:54.4% 45.6%;
        align-items:stretch;
      }

      /* ---- left image: natural aspect ratio, NOTHING cropped ---- */
      .ob-img{width:100%;height:auto;object-fit:contain;display:block;}

      /* ---- right column: vertically centered against the image ---- */
      .ob-right{
        padding:40px 48px 40px 56px;
        display:flex;flex-direction:column;align-items:flex-start;
        justify-content:center;
      }

      .ob-tag{
        color:#E38F2E;
        font-family:${sans};
        font-size:13px;
        font-weight:600;
        letter-spacing:0.22em;
      }

      .ob-rule{width:40px;height:3px;background:#CCA466;margin-top:12px;border-radius:2px;}

      .ob-title{
        margin-top:20px;
        color:#176B22;
        font-family:${serif};
        font-size:32px;
        font-weight:600;
        letter-spacing:0.039em;
        line-height:normal;
        text-transform:capitalize;
      }

      .ob-para{
        margin-top:16px;
        color:#666666;
        font-family:${sans};
        font-size:15px;
        letter-spacing:0.025em;
        line-height:24px;
      }

      /* ---- outline button → routes to Shine ---- */
      .ob-btn{margin-top:28px;display:inline-flex;align-items:center;gap:9px;
        padding:12px 24px;border:2px solid #176B22;border-radius:8px;
        color:#176B22;font-family:${sans};font-size:14px;font-weight:600;
        text-decoration:none;transition:none;}
      .ob-btn svg{width:16px;height:11px;}

      /* ============ MOBILE + TABLET ≤1023 — same fixed type, stacked panel ============ */
      @media (max-width:1023px){
        .ob-sec{padding:48px 20px 56px;}

        .ob-panel{grid-template-columns:1fr;}

        /* full-width banner, full artwork visible (natural ratio) */
        .ob-img{width:100%;height:auto;}

        .ob-right{padding:32px 24px 40px;align-items:stretch;justify-content:flex-start;}

        .ob-para br{display:none;}

        /* full-width touch row on small screens */
        .ob-btn{margin-top:28px;display:flex;justify-content:center;width:100%;
          box-sizing:border-box;}
      }

      /* ============ TABLET 640–1023 — roomier copy box ============ */
      @media (min-width:640px) and (max-width:1023px){
        .ob-sec{padding:56px 32px 64px;}
        .ob-right{padding:40px 40px 44px;}
      }
    `}</style>

    <div className="ob-panel">
      <img className="ob-img" src={brandImg} alt="Shine Clean & Fresh — dishwash liquid, laundry detergent, multi-surface, floor, dishwash and toilet cleaners" />

      <div className="ob-right">
        <p className="ob-tag">Also From Kamakhya Cosmetics</p>
        <div className="ob-rule" />
        <h2 className="ob-title">Shine</h2>
        <p className="ob-para">
          Premium home care collections crafted with powerful
          <br />
          ingredients for a cleaner, fresher everyday life.
        </p>
        <Link className="ob-btn" to="/brands/shine">
          Explore Shine <Arrow />
        </Link>
      </div>
    </div>
  </section>
);

export default ShinePromo;