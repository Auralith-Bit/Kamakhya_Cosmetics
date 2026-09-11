import { useRef, useState } from "react";
import photo from "../../assets/image 32.svg";
import testvid from "../../assets/test.mp4"; // same root assets as Shine; swap for CMS URL when live
import { Link } from "react-router-dom";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ✅ CMS VIDEO — direct uploaded file URL; poster = fallback artwork */
const VIDEO_SRC = testvid;

/* ✅ Legitimate, standard media control icons (identical to Shine) */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon-play" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon-pause" aria-hidden="true">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const IcCrown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4.5 4L12 6l4.5 6L21 8l-2 10H5L3 8Z" />
    <path d="M9 21h6" />
  </svg>
);
const IcGem = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);
const IcHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

/* ✅ same swoosh geometry as Shine — Royal blue fill */
const Corner = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 0H100C60 10 10 60 0 100Z" fill="#2E3192" />
  </svg>
);

const CARDS = [
  { Icon: IcCrown, title: "Royal Quality",     text: "Every ingredient is carefully selected for uncompromised standard" },
  { Icon: IcGem,   title: "Timeless Elegance", text: "Our formulations are inspired by the heritage, made for modern worlds" },
  { Icon: IcHeart, title: "Beauty with Care",  text: "We care for your skin, your well-being, and the world around us, every single day." },
];

const BrandPhilosophy = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = (e) => {
    if (e) e.stopPropagation();
    const v = videoRef.current;
    if (!v || !VIDEO_SRC) return;
    if (v.paused) { v.play().catch(() => {}); }
    else { v.pause(); }
  };

  return (
    <section id="shine-philosophy" className="bp-sec">
      <style>{`
        /* ============ DESKTOP ≥1024 — values identical to Shine ============ */
        .bp-sec{position:relative;width:100%;height:46.875vw;background:#fff;overflow:hidden;}

        /* ✅ stage owns the video box (same coords as Shine's photo) */
        .bp-stage{
          position:absolute;
          top:5.6646vw;
          left:60.875vw;
          width:31.6042vw;
          height:35.25vw;
        }

        .bp-photo{
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:fill;object-position:center;display:block;
          background:#F7F5F0;cursor:pointer;
        }

        /* ✅ smaller circular play/pause, centered on the stage, fades while playing */
        .bp-play{
          position:absolute;
          left:50%;top:50%;
          transform:translate(-50%,-50%);
          width:4vw;height:4vw;
          cursor:pointer;
          background:rgba(255,255,255,0.95);
          border:none;padding:0;border-radius:50%;
          box-shadow:0 0.2083vw 0.8333vw rgba(0,0,0,0.15), 0 0.4167vw 1.25vw rgba(0,0,0,0.10);
          display:flex;align-items:center;justify-content:center;
          z-index:3;
          transition:opacity .4s ease, transform .4s ease, box-shadow .25s ease;
        }
        .bp-play.is-hidden{opacity:0;pointer-events:none;transform:translate(-50%,-50%) scale(0.8);}
        .bp-sec:hover .bp-play.is-hidden{opacity:1;pointer-events:auto;transform:translate(-50%,-50%) scale(1);}
        .bp-play:hover{transform:translate(-50%,-50%) scale(1.1);
          box-shadow:0 0.3125vw 1.0417vw rgba(0,0,0,0.2), 0 0.625vw 1.6667vw rgba(0,0,0,0.15);}
        .bp-sec:hover .bp-play.is-hidden:hover{transform:translate(-50%,-50%) scale(1.1);}
        .bp-play svg{width:45%;height:45%;color:#2E3192;display:block;}
        .bp-play .icon-play{margin-left:10%;}

        .bp-copy{position:absolute;left:8.8542vw;top:6.9271vw;width:45.8333vw;}

        .bp-tag{
          color:#E38F2E;
          font-family:${sans};
          font-size:0.8333vw;
          margin-top:-1.25vw;
          font-weight:600;
          letter-spacing:0.18em;
          text-transform:uppercase;
        }

        .bp-rule{width:2.6042vw;height:0.1563vw;background:#E38F2E;
          margin-top:0.68vw;border-radius:0.0781vw;}

        .bp-title{
          color:#2E3192;
          font-family:${serif};
          font-size:1.5625vw;
          font-weight:700;
          margin-top:0.5vw;
          line-height:1.2;
        }

        .bp-accent{
          color:#E38F2E;
        }

        .bp-p{
          color:#333333;
          font-family:${sans};
          font-weight:400;
          letter-spacing:0;
          font-size:0.9375vw;
          margin-top:1.25vw;
          line-height:1.4063vw;
          width:44.5vw;
        }

        .bp-line{display:block;}

        /* ---- cards — same geometry as Shine ---- */
        .bp-cards{
          position:absolute;
          left:8.8542vw;
          top:17.8958vw;
          display:flex;
          gap:2.0833vw;
          align-items:stretch;
        }

        .bp-card{
          position:relative;
          width:12.5vw;
          min-height:14.65vw;
          height:auto;
          background:#FBFBFD;
          border:0.0521vw solid #ECECF2;
          border-radius:0.625vw;
          box-shadow:0 0.625vw 1.5625vw rgba(43,46,126,0.07);
          display:flex;flex-direction:column;align-items:center;text-align:center;
          padding:1.8vw 1.35vw;
          overflow:hidden;
          transition:box-shadow .3s ease, border-color .3s ease;
        }

        .bp-card:hover{
          border-color:#D8DBE6;
          box-shadow:0 1.0417vw 2.0833vw rgba(43,46,126,0.16);
        }

        .bp-corner{position:absolute;width:30%;height:22%;display:block;pointer-events:none;}
        .bp-corner.tl{top:0;left:0;}
        .bp-corner.br{bottom:0;right:0;transform:rotate(180deg);}
        .bp-card > :not(.bp-corner){position:relative;}

        .bp-cico{
          flex-shrink:0;
          width:3.8vw;height:3.8vw;border-radius:50%;
          border:0.1042vw solid #C9A063;color:#E38F2E;background:#fff;
          display:grid;place-items:center;
        }
        .bp-cico svg{width:1.9vw;height:1.9vw;}

        .bp-ctitle{
          flex-shrink:0;
          color:#333333;font-family:${serif};font-size:1.02vw;font-weight:700;
          margin-top:0.85vw;line-height:1.2;
        }
        .bp-crule{flex-shrink:0;width:2.8vw;height:0.14vw;background:#CCA466;
          margin-top:0.6vw;border-radius:0.0781vw;}
        .bp-ctxt{
          flex-shrink:0;
          color:#666666;font-family:${sans};font-size:0.74vw;line-height:1.19vw;
          margin-top:0.7vw;
        }

        /* buttons — same geometry as Shine, Royal blue tokens */
        .bp-btn{
          position:absolute;
          left:8.8542vw;
          top:36.8vw;
          width:17.8125vw;
          height:2.8646vw;
          border-radius:0.3646vw;
          background:#2E3192;
          border:0.1563vw solid #2E3192;
          color:#fff;
          font-family:${sans};
          font-size:0.8854vw;
          letter-spacing:0.05em;
          cursor:pointer;
          transition:background .2s;
          display:flex;align-items:center;justify-content:center;gap:0.5208vw;
          text-decoration:none;
        }
        .bp-btn:hover{background:#1d2170;}
        .bp-btn svg{width:0.4688vw;height:0.7292vw;flex-shrink:0;}

        .bp-btn2{
        left:28.125vw;
        width:15.5vw;
        background:#F7F5F0;
        border:0.1563vw solid #2E3192;
        color:#2E3192;
        font-weight:500;
        text-transform:uppercase;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:0.5208vw;
        }
        .bp-btn2:hover{background:#eef0fa;}
        .bp-btn2 svg{width:1.0417vw;height:1.0417vw;flex-shrink:0;}

        /* ✅ wrapper invisible on desktop */
        .bp-actions{display:contents;}

        /* ============ MOBILE+TABLET ≤1023 — identical to Shine ============ */
        @media (max-width:1023px){
          .bp-sec{height:auto;display:grid;grid-template-columns:1fr;padding:10vw 5vw;}

          .bp-copy{position:static;left:auto;top:auto;width:auto;grid-column:1;grid-row:1;}
          .bp-tag{font-size:clamp(12px, 1.4vw, 18px);margin-top:0;}
          .bp-rule{width:clamp(36px, 7vw, 50px);height:3px;border-radius:2px;}
          .bp-title{font-size:clamp(20px, 3vw, 34px);margin-top:2vw;}
          .bp-p{font-size:clamp(12px, 1.35vw, 17px);line-height:1.6;
            margin-top:3vw;width:auto;}
          .bp-line{display:inline;}

          .bp-cards{position:static;left:auto;top:auto;flex-direction:column;
            align-items:center;gap:4vw;grid-column:1;grid-row:2;margin-top:6vw;}
          .bp-card{width:70%;max-width:380px;height:auto;min-height:0;
            padding:4.5vw 3.5vw;border-radius:2.5vw;}
          .bp-card:hover{box-shadow:0 12px 24px rgba(43,46,126,0.14);}
          .bp-cico{width:clamp(44px, 10vw, 58px);height:clamp(44px, 10vw, 58px);}
          .bp-cico svg{width:clamp(20px, 5vw, 27px);height:clamp(20px, 5vw, 27px);}
          .bp-ctitle{font-size:clamp(15px, 2vw, 20px);margin-top:2.5vw;}
          .bp-crule{width:clamp(36px, 6vw, 50px);height:3px;margin-top:1.8vw;}
          .bp-ctxt{font-size:clamp(11px, 1.4vw, 14px);line-height:1.55;margin-top:1.8vw;}

          .bp-stage{position:relative;top:auto;left:auto;width:auto;height:auto;
            grid-column:1;grid-row:3;margin-top:6vw;border-radius:2vw;overflow:hidden;}
          .bp-photo{position:relative;inset:auto;width:100%;height:auto;object-fit:cover;}
          .bp-play{width:clamp(56px, 12vw, 80px);height:clamp(56px, 12vw, 80px);}

          .bp-actions{display:flex;flex-direction:column;gap:3vw;
            grid-column:1;grid-row:4;margin-top:6vw;}
          .bp-btn{position:static;left:auto;top:auto;width:100%;height:auto;
            padding:3.5vw 4vw;border-radius:2vw;font-size:clamp(12px, 1.5vw, 17px);}
          .bp-btn svg{width:clamp(6px, 0.9vw, 10px);height:clamp(10px, 1.4vw, 15px);}
          .bp-btn2{left:auto;width:100%;}
          .bp-btn2 svg{width:clamp(16px, 2.2vw, 22px);height:clamp(16px, 2.2vw, 22px);}
        }

        /* ============ TABLET 640–1023 — identical to Shine ============ */
        @media (min-width:640px) and (max-width:1023px){
          .bp-sec{padding:8vw 6vw;grid-template-columns:1fr 1fr;column-gap:3vw;row-gap:4vw;}
          .bp-copy,.bp-cards,.bp-stage,.bp-actions{grid-column:1 / -1;}
          .bp-cards,.bp-stage,.bp-actions{margin-top:0;}

          .bp-tag{font-size:13px;}
          .bp-title{font-size:30px;}
          .bp-p{font-size:14px;}
          .bp-cards{flex-direction:row;align-items:stretch;gap:3.5vw;}
          .bp-card{width:auto;flex:1;max-width:none;padding:2.6vw 1.8vw;}
          .bp-ctitle{font-size:16px;margin-top:2vw;}
          .bp-crule{margin-top:1.5vw;}
          .bp-ctxt{font-size:12px;margin-top:1.5vw;}
          .bp-stage{width:min(60vw, 520px);justify-self:center;border-radius:16px;}
          .bp-play{width:72px;height:72px;}

          .bp-actions{flex-direction:row;gap:3vw;}
          .bp-btn,.bp-btn2{flex:1 1 0;min-width:0;height:52px;padding:0 24px;border-radius:10px;}
          .bp-btn{font-size:15px;}
          .bp-btn svg{width:9px;height:14px;}
          .bp-btn2{font-size:13px;}
          .bp-btn2 svg{width:18px;height:18px;}
        }
      `}</style>

      {/* ✅ stage = video + play (overlay removed) */}
      <div className="bp-stage">
        <video
          ref={videoRef}
          className="bp-photo"
          src={VIDEO_SRC || undefined}
          poster={photo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggleVideo}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label="Royal Luxury premium cosmetics and skincare collection"
        />
        <button
          type="button"
          className={`bp-play ${playing ? "is-hidden" : ""}`}
          onClick={toggleVideo}
          aria-label={playing ? "Pause the Royal Luxury story" : "Play the Royal Luxury story"}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div className="bp-copy">
        <p className="bp-tag">Our Brand Philosophy</p>
        <div className="bp-rule" />
        <h2 className="bp-title">
          <span className="bp-accent">Royal</span> in Essence,{" "}
          <span className="bp-accent">Luxury</span> in Experience
        </h2>
        <p className="bp-p">
          <span className="bp-line">
            Royal Luxury believes beauty is more than skincare—it is an experience of elegance,
          </span>
          <span className="bp-line">
            confidence, and timeless luxury. Crafted with premium ingredients and inspired by heritage,
          </span>
          <span className="bp-line">
            every product transforms daily self-care into a refined ritual.
          </span>
        </p>
      </div>

      <div className="bp-cards">
        {CARDS.map(({ Icon, title, text }) => (
          <div className="bp-card" key={title}>
            <Corner className="bp-corner tl" />
            <Corner className="bp-corner br" />
            <span className="bp-cico"><Icon /></span>
            <h3 className="bp-ctitle">{title}</h3>
            <div className="bp-crule" />
            <p className="bp-ctxt">{text}</p>
          </div>
        ))}
      </div>

      <div className="bp-actions">
        <Link to="/products?brand=Royal Luxury" className="bp-btn">
          EXPLORE OUR COLLECTIONS
          <svg viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m1.5 1.5 6 5.5-6 5.5" />
          </svg>
        </Link>

        <Link to="/products" className="bp-btn bp-btn2">
          Download Catalog
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default BrandPhilosophy;