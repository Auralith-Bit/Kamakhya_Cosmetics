import React from "react";
import vector1 from "../../assets/Vector (1).svg";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

/* ---------------- step icons (cream glyphs) ---------------- */
const IcChat = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15 8H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1v3l4.2-3H15a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3Z" />
    <path d="M18 4H9a3 3 0 0 0-2.83 2.02A4 4 0 0 1 7 6h8a4 4 0 0 1 4 4v5.2c.61-.55 1-1.34 1-2.2V7a3 3 0 0 0-3-3Z" />
  </svg>
);
const IcClip = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M7 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2v2H7V5Zm1 6h8v1.7H8V11Zm0 4h8v1.7H8V15Z" />
  </svg>
);
const IcMail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Zm2 2.4V17h16V8.4l-8 6-8-6ZM19.5 7h-15L12 12.6 19.5 7Z" />
  </svg>
);
const IcCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="m8.5 12.2 2.3 2.3 4.7-5" />
  </svg>
);
const IcHeadset = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" /><path d="M20 13v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
  </svg>
);

/* ---------------- data — text pre-split to the design's lines ---------------- */
const STEPS = [
  { Icon: IcChat,    num: "01", title: "Receive Inquiry",
    lines: ["We receive your message", "through your preferred", "channel."] },
  { Icon: IcClip,    num: "02", title: "Our Team Reviews",
    lines: ["Our team reviews your", "inquiry carefully and", "professionally."] },
  { Icon: IcMail,    num: "03", title: "Response within 24 Hrs",
    lines: ["We'll get back to you within", "exactly 24 hours with the best", "solution."] },
  { Icon: IcCheck,   num: "04", title: "Successful Assistance",
    lines: ["We ensure you have the", "best experience with our", "products and services."] },
  { Icon: IcHeadset, num: "05", title: "After-Sales Support",
    lines: ["We provide ongoing", "support whenever you", "need us."] },
];

const HowWeWork = () => (
  /* ✅ ADJUST HERE: --hw-pt = top space, --hw-pb = bottom space (vw or px) */
  <section
    id="how-we-work"
    className="hw-sec"
    style={{ "--hw-pt": "4.7vw", "--hw-pb": "7vw" }}
  >
    <style>{`
      /* ============ DESKTOP ≥1024 ============ */
      .hw-sec{width:100%;background:#F5F6F8;
        padding:var(--hw-pt, 4.7vw) 0 var(--hw-pb, 7vw);}

      .hw-head{text-align:center;padding:0 8vw;}
      
      .hw-tag{
      color:#E38F2E;
      font-family:${sans};
      font-size:0.83vw;
      font-weight:600;
      letter-spacing:0.18em;
      text-transform:uppercase;
      }
      
      .hw-title{
      margin-top:0.3vw;
      color:#2E3192;
      font-family:${serif};
      font-size:1.625vw;
      font-weight:700;
      line-height:1.2;
      }
      
      .hw-squiggle{
      display:block;
      width:8.8vw;
      height:auto;
      margin:0.5vw auto 0;
      }
      
      .hw-p{
        color: #666;
        text-align: center;
        font-family: ${sans};
        font-size: 1vw;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      
      .hw-p2{display:block;}

      /* ---- steps ---- */
      .hw-steps{width:82.2917vw;margin:3.6vw auto 0;display:grid;
        grid-template-columns:repeat(5,1fr);gap:1.14vw;}
      .hw-step{position:relative;background:#F5F6F8;border:0.0521vw solid #D9B98A;
        border-radius:0.4167vw;padding:1.9vw 1.2vw 1.6vw;text-align:center;}

      /* ✅ icons scaled up: 3.6vw badge, 2.1vw glyph (≈58% fill) */
      .hw-ico{position:absolute;top:-1.8vw;left:50%;transform:translateX(-50%);
        width:3.6vw;height:3.6vw;border-radius:50%;background:#2E3192;color:#EDE5D8;
        display:grid;place-items:center;}
      .hw-ico svg{width:2.1vw;height:2.1vw;}

      .hw-num{color:#E38F2E;font-family:${sans};font-size:0.9375vw;font-weight:700;
        letter-spacing:0.02em;}
      .hw-step h4{margin-top:0.8vw;color:#333333;font-family:${serif};
        font-size:1.0417vw;font-weight:700;line-height:1.25;}
      
      .hw-step p{
      margin-top:0.7vw;
      color:#666666;
      font-family:${sans};
      font-size:0.7813vw;
      font-weight: 400;
      line-height:1.55;
      }
      .hw-step p .hw-line{display:block;}

      /* ============ MOBILE+TABLET ≤1023 ============ */
      @media (max-width:1023px){
        .hw-sec{padding:10vw 5vw 12vw;}
        .hw-head{padding:0;}
        .hw-tag{font-size:clamp(11px, 1.4vw, 16px);}
        .hw-title{font-size:clamp(20px, 3vw, 32px);}
        .hw-squiggle{width:clamp(80px, 14vw, 140px);}
        .hw-p{font-size:clamp(12px, 1.5vw, 16px);line-height:1.6;}

        .hw-steps{width:auto;margin-top:10vw;grid-template-columns:1fr;gap:8vw;}
        .hw-step{padding:7vw 5vw 6vw;}
        .hw-ico{top:clamp(-34px, -4.5vw, -28px);width:clamp(52px, 8.5vw, 70px);height:clamp(52px, 8.5vw, 70px);}
        .hw-ico svg{width:clamp(26px, 4.2vw, 40px);height:clamp(26px, 4.2vw, 40px);}
        .hw-num{font-size:clamp(14px, 1.8vw, 20px);}
        .hw-step h4{font-size:clamp(15px, 2vw, 22px);}
        .hw-step p{font-size:clamp(11px, 1.4vw, 15px);}
      }

      @media (min-width:640px) and (max-width:1023px){
        .hw-steps{grid-template-columns:1fr 1fr;gap:9vw 4vw;}
        .hw-step:last-child:nth-child(odd){grid-column:1 / -1;max-width:48%;margin:0 auto;}
        .hw-step{padding:6.5vw 3vw 5vw;}
        .hw-ico{top:clamp(-35px, -5vw, -30px);}
      }
    `}</style>

    <header className="hw-head">
      <span className="hw-tag">Our Process</span>
      <h2 className="hw-title">How We Work</h2>
      <img className="hw-squiggle" src={vector1} alt="" aria-hidden="true" />
      <p className="hw-p">
        From your first inquiry to final support, we follow a simple, transparent, and efficient process{" "}
        <span className="hw-p2">to ensure every customer receives the best possible experience.</span>
      </p>
    </header>

    <div className="hw-steps">
      {STEPS.map(({ Icon, num, title, lines }) => (
        <div className="hw-step" key={num}>
          <span className="hw-ico"><Icon /></span>
          <span className="hw-num">{num}</span>
          <h4>{title}</h4>
          <p>
            {lines.map((l) => (<span className="hw-line" key={l}>{l}</span>))}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HowWeWork;