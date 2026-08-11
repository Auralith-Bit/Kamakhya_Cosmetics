/**
 * FILE : frontend/src/components/Footer/Footer.jsx
 * ROLE : global footer — rendered on every page by App.jsx Layout
 * DESIGN: navy #0A1230 · gold #C9A876 serif headings · muted #B7BCCB links
 */
import React from "react";
import { Link } from "react-router-dom";
import logoMark from "../../assets/Vector.svg";

const serif = "Georgia, 'Times New Roman', serif";
const sans = "'Poppins', 'Segoe UI', sans-serif";

const COMPANY = [
  { label: "About Us", to: "/#about" },
  { label: "Manufacturing & Quality", to: "/#manufacturing" },
  { label: "Contact Us", to: "/#contact" },
];
const BRANDS = [
  { label: "Royal Luxury", to: "/brands/royal-luxury" },
  { label: "Shine", to: "/brands/shine" },
];
const BUSINESS = [
  { label: "Become Distributor", to: "/#contact" },
  { label: "Request Quotes", to: "/#contact" },
];
const PRODUCTS = [
  { label: "Trade catalogue", to: "/#products" },
  { label: "Skincare", to: "/#products" },
  { label: "Makeup", to: "/#products" },
  { label: "Home care", to: "/#products" },
  { label: "Saved Products", to: "/#products" },
];

const Footer = () => (
  <footer className="ft">
    <style>{`
      .ft{background:#0A1230;color:#B7BCCB;font-family:${sans};}
      .ft a{color:#B7BCCB;text-decoration:none;transition:color .2s;}
      .ft a:hover{color:#fff;}

      /* ---- top: brand + 4 link columns ---- */
      .ft-top{max-width:1240px;margin:0 auto;padding:64px 24px 44px;
        display:grid;grid-template-columns:1.5fr 1fr 1fr 1.2fr 1fr;gap:40px;}
      .ft-brand{display:flex;align-items:flex-start;gap:14px;}
      .ft-mark{width:64px;height:auto;flex-shrink:0;}
      .ft-name{margin:0;color:#fff;font-family:${serif};font-size:20px;
        letter-spacing:.22em;text-transform:uppercase;font-weight:600;}
      .ft-cos{margin:4px 0 0;color:#C9A876;font-size:12px;letter-spacing:.34em;text-transform:uppercase;}
      .ft-motto{margin:6px 0 0;color:#C9A876;font-size:9px;letter-spacing:.3em;}
      .ft-desc{margin:18px 0 0;font-size:14px;line-height:1.75;color:#B7BCCB;max-width:300px;}
      .ft-h{margin:0 0 20px;color:#C9A876;font-family:${serif};font-size:18px;font-weight:600;}
      .ft-col a{display:block;font-size:14.5px;margin:0 0 14px;}

      /* ---- middle: contact / trade info / newsletter ---- */
      .ft-mid{max-width:1240px;margin:0 auto;padding:8px 24px 48px;
        display:grid;grid-template-columns:1.2fr 1fr 1.2fr;gap:40px;}
      .ft-p{margin:0 0 10px;font-size:14px;line-height:1.7;}
      .ft-p strong{color:#D9DBE6;font-weight:600;}
      .ft-news{display:flex;margin-top:16px;border:1px solid rgba(255,255,255,.18);
        border-radius:8px;overflow:hidden;background:rgba(255,255,255,.05);}
      .ft-news input{flex:1;min-width:0;background:transparent;border:0;outline:0;
        color:#fff;padding:12px 14px;font-size:13px;font-family:${sans};}
      .ft-news input::placeholder{color:#8f94a3;}
      .ft-news button{border:0;background:#2E3192;color:#fff;padding:0 18px;
        font-size:13px;font-weight:600;cursor:pointer;font-family:${sans};}
      .ft-news button:hover{background:#252775;}
      .ft-social{display:flex;gap:12px;margin-top:18px;}
      .ft-social a{width:36px;height:36px;border:1px solid rgba(255,255,255,.18);
        border-radius:50%;display:flex;align-items:center;justify-content:center;color:#B7BCCB;}
      .ft-social a:hover{color:#C9A876;border-color:#C9A876;}

      /* ---- bottom bar ---- */
      .ft-bottom{border-top:1px solid rgba(255,255,255,.08);}
      .ft-bottom-in{max-width:1240px;margin:0 auto;padding:18px 24px;
        display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;
        font-size:12.5px;color:#8f94a3;}
      .ft-legal{display:flex;gap:22px;}
      .ft-legal a{font-size:12.5px;color:#8f94a3;}

      /* ---- responsive ---- */
      @media (max-width:1024px){
        .ft-top{grid-template-columns:1fr 1fr;gap:32px;}
        .ft-mid{grid-template-columns:1fr;gap:32px;}
      }
      @media (max-width:560px){
        .ft-top{grid-template-columns:1fr;padding:48px 20px 32px;}
        .ft-mid{padding:0 20px 36px;}
        .ft-bottom-in{justify-content:center;text-align:center;}
      }
    `}</style>

    {/* top */}
    <div className="ft-top">
      <div>
        <div className="ft-brand">
          <img className="ft-mark" src={logoMark} alt="Kamakhya Cosmetics monogram" />
          <div>
            <p className="ft-name">Kamakhya</p>
            <p className="ft-cos">— Cosmetics —</p>
            <p className="ft-motto">• BEAUTY • CARE • TRUST •</p>
          </div>
        </div>
        <p className="ft-desc">
          Kamakhya Cosmetics manufactures premium beauty and home-care products
          for retailers, distributors, private-label brands and institutions.
        </p>
      </div>

      <nav className="ft-col" aria-label="Company">
        <h3 className="ft-h">Company</h3>
        {COMPANY.map((l) => <Link key={l.label} to={l.to}>{l.label}</Link>)}
      </nav>

      <nav className="ft-col" aria-label="Brands">
        <h3 className="ft-h">Brands</h3>
        {BRANDS.map((l) => <Link key={l.label} to={l.to}>{l.label}</Link>)}
      </nav>

      <nav className="ft-col" aria-label="Business Solutions">
        <h3 className="ft-h">Business Solutions</h3>
        {BUSINESS.map((l) => <Link key={l.label} to={l.to}>{l.label}</Link>)}
      </nav>

      <nav className="ft-col" aria-label="Products">
        <h3 className="ft-h">Products</h3>
        {PRODUCTS.map((l) => <Link key={l.label} to={l.to}>{l.label}</Link>)}
      </nav>
    </div>

    {/* middle */}
    <div className="ft-mid">
      <div>
        <h3 className="ft-h">Contact &amp; Registered Office</h3>
        <p className="ft-p"><strong>Kamakhya Cosmetics</strong><br />Manigram, Nepal</p>
        <p className="ft-p">+977 98XXXXXXXX<br />+977 980XXXXXXX</p>
        <p className="ft-p"><a href="mailto:info@kamakhyacosmetics.com.np">info@kamakhyacosmetics.com.np</a></p>
      </div>

      <div>
        <h3 className="ft-h">Trade Information</h3>
        <p className="ft-p">
          All prices are quotation-based and depend on order volume. Minimum
          order quantities apply per product line.
        </p>
      </div>

      <div>
        <h3 className="ft-h">Trade Updates</h3>
        <p className="ft-p">Subscribe for new product launches and trade offers.</p>
        <form className="ft-news" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="ft-social">
          <a href="/" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.5 1.7-1.5H16.6V2.2C15.9 2.1 14.8 2 13.9 2 11 2 9 3.7 9 7v3H6v4h3v8h4z"/></svg>
          </a>
          <a href="/" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="/" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 8.9 11.6 11.6 0 0 1 3.6 4.6s-4 9 5 13a12.3 12.3 0 0 1-7 2c9 5 20 0 20-11.1 0-.3 0-.5-.1-.8.9-.6 1.6-1.3 2.5-1.8z"/></svg>
          </a>
        </div>
      </div>
    </div>

    {/* bottom */}
    <div className="ft-bottom">
      <div className="ft-bottom-in">
        <span>© {new Date().getFullYear()} Kamakhya Cosmetics. All rights reserved.</span>
        <div className="ft-legal">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Trade</a>
          <a href="/">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;