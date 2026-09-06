import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/image 29.png";
import shade from "../../assets/Rectangle 4618.png";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const HomeIcon = () => (
  <svg className="ct-ic-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);
const Chev = () => (
  <svg className="ct-ic-chev" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const ContactHero = () => (
  <section id="contact-hero" className="ct-hero">
    <style>{`
      /* ============ DESKTOP ≥1024 — ORIGINAL CODE, VERBATIM ============ */
      .ct-hero{
        position:relative;
        width:100%;
        height:25.3906vw;
        background:#F6E7DC;
        overflow:hidden;
      }
      .ct-bg{position:absolute;inset:0;width:100%;height:100%;
        object-fit:cover;object-position:center right;}
      .ct-shade{position:absolute;top:-1.6146vw;left:-10.9375vw;
        width:98.9583vw;height:28vw;object-fit:fill;
        z-index:1;pointer-events:none;}
      .ct-copy{position:absolute;left:9.1667vw;top:5.2vw;width:40.625vw;z-index:2;}
      .ct-crumb{display:flex;align-items:center;gap:0.5208vw;color:#2E3192;
        font-family:${serif};font-size:1.25vw;font-weight:700;white-space:nowrap;}
      .ct-crumb a{color:#2E3192;text-decoration:none;}
      .ct-ic-home{width:1.0417vw;height:1.0417vw;}
      .ct-ic-chev{width:0.4688vw;height:0.7292vw;}
      .ct-tag{margin-top:1.3021vw;color:#E38F2E;font-family:${sans};
        font-size:1.25vw;font-weight:500;}
      .ct-rule{width:5.4167vw;height:0.1563vw;background:#E38F2E;
        margin-top:0.625vw;border-radius:0.1042vw;}
      .ct-title{margin-top:1.0417vw;color:#2E3192;font-family:${serif};
        font-size:2.6042vw;font-weight:400;line-height:1.1;}
      .ct-p{margin-top:1.1458vw;color:#5A6673;font-family:${sans};
        font-size:1.0417vw;line-height:1.5104vw;max-width:40.625vw;}

      /* ============ PHONES ≤639 — compact hero ============ */
      @media (max-width:639px){
        .ct-hero{height:auto;}

        /* ✅ tighter: top 10vw→8vw, image window 36vw→24vw */
        .ct-copy{position:relative;z-index:2;left:auto;top:auto;width:auto;
          padding:8vw 6vw 24vw;}
        .ct-crumb{font-size:clamp(13px, 1.6vw, 18px);gap:2vw;}
        .ct-ic-home{width:clamp(14px, 1.8vw, 20px);height:clamp(14px, 1.8vw, 20px);}
        .ct-ic-chev{width:clamp(6px, 0.9vw, 10px);height:clamp(10px, 1.4vw, 15px);}
        .ct-tag{margin-top:3vw;font-size:clamp(12px, 1.5vw, 18px);}
        .ct-rule{width:clamp(40px, 10vw, 70px);height:3px;margin-top:2vw;border-radius:2px;}
        .ct-title{margin-top:2.5vw;font-size:clamp(28px, 6vw, 44px);}
        .ct-p{margin-top:3vw;font-size:clamp(13px, 1.6vw, 18px);
          line-height:1.6;max-width:none;}

        .ct-bg{position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;object-position:22% center;z-index:1;}

        .ct-shade{display:none;}
      }

      /* ============ TABLET 640–1023 — NOTHING CAN BE CLIPPED ============ */
      @media (min-width:640px) and (max-width:1023px){
        .ct-hero{
          height:auto;
          overflow:visible;
          --nav-h:150px;
        }

        .ct-copy{
          position:relative;
          left:auto;top:auto;
          z-index:2;
          width:55%;
          /* copy always starts BELOW the fixed header */
          padding:calc(6vw + var(--nav-h)) 4vw 8vw 6vw;
        }

        .ct-crumb{font-size:clamp(13px, 2vw, 16px);gap:8px;
          white-space:normal;flex-wrap:wrap;}
        .ct-ic-home{width:clamp(16px, 2.2vw, 20px);height:clamp(16px, 2.2vw, 20px);}
        .ct-ic-chev{width:clamp(7px, 1vw, 9px);height:clamp(11px, 1.5vw, 13px);}
        .ct-tag{margin-top:clamp(8px, 1.5vw, 12px);font-size:clamp(12px, 1.8vw, 15px);}
        .ct-rule{width:clamp(48px, 7vw, 60px);height:3px;
          margin-top:clamp(8px, 1.2vw, 10px);border-radius:2px;}
        .ct-title{margin-top:clamp(8px, 1.2vw, 10px);font-size:clamp(26px, 4.5vw, 36px);}
        .ct-p{margin-top:clamp(8px, 1.5vw, 12px);font-size:clamp(12px, 1.8vw, 15px);
          line-height:1.55;max-width:none;}

        /* ✅ NO OVERLAP (same fix as the Shine hero): image starts AFTER the
           55% copy column, and its left edge is faded with a mask so there is
           no hard seam over the peach background. */
        .ct-bg{
          position:absolute;
          top:40%;right:0;bottom:0;left:10%;
          width:auto;height:60%;
          object-fit:cover;
          object-position:right;
          -webkit-mask-image:linear-gradient(90deg, transparent 0%, #000 22%);
          mask-image:linear-gradient(90deg, transparent 0%, #000 22%);
          z-index:1;
        }

        .ct-shade{display:none;}
      }
    `}</style>

    <img className="ct-bg" src={banner} alt="Shine support specialist with Royal Luxury and Shine products" />
    <img className="ct-shade" src={shade} alt="" aria-hidden="true" />

    <div className="ct-copy">
      <nav className="ct-crumb" aria-label="Breadcrumb">
        <HomeIcon />
        <Link to="/">Home</Link>
        <Chev />
        <span>Contact</span>
      </nav>

      <p className="ct-tag">We're Here to Help</p>
      <div className="ct-rule" />
      <h1 className="ct-title">Contact Us</h1>

      <p className="ct-p">
        Reach out to our team for product inquiries, wholesale support, and
        expert assistance whenever you need us.
      </p>
    </div>
  </section>
);

export default ContactHero;