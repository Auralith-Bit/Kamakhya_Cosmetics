/**
 * FILE : frontend/src/components/brands/BrandChooser.jsx
 * ROLE : Popup modal to choose between Shine & Royal Luxury
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const BrandChooser = ({ open, onClose }) => {
  const navigate = useNavigate();
  if (!open) return null;

  const pick = (path) => {
    onClose();
    navigate(path);
  };

  return createPortal(
    <div className="bc-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <style>{`
        .bc-overlay{position:fixed;inset:0;z-index:3000;background:rgba(10,18,48,.55);
          backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px;
          font-family:'Poppins','Segoe UI',sans-serif;}
        .bc-dialog{position:relative;width:min(760px,100%);background:#fff;border-radius:14px;
          padding:44px 36px 36px;box-shadow:0 30px 80px rgba(0,0,0,.35);text-align:center;}
        .bc-close{position:absolute;top:10px;right:12px;width:36px;height:36px;border:0;border-radius:8px;
          background:transparent;color:#2E3192;font-size:22px;cursor:pointer;}
        .bc-close:hover{background:#eef0fb;}
        .bc-kicker{color:#E38F2E;letter-spacing:.18em;text-transform:uppercase;font-size:13px;font-weight:600;}
        .bc-title{font-family:'Playfair Display',Georgia,serif;color:#2E3192;font-size:32px;font-weight:700;margin-top:8px;}
        .bc-cards{display:flex;gap:20px;margin-top:28px;}
        .bc-card{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;border-radius:12px;
          padding:28px 20px;cursor:pointer;border:2px solid transparent;transition:transform .15s, box-shadow .15s; font-family:inherit;}
        .bc-card:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(0,0,0,.12);}
        .bc-shine{background:#F4F9EC;border-color:#BFD98F;}
        .bc-royal{background:#FBF7EF;border-color:#E4CFA4;}
        .bc-name{font-family:'Playfair Display',Georgia,serif;font-size:24px;font-weight:700;}
        .bc-shine .bc-name{color:#3E7A1E;}
        .bc-royal .bc-name{color:#8A6425;}
        .bc-sub{font-size:13px;color:#666;}
        .bc-go{margin-top:12px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;}
        .bc-shine .bc-go{color:#3E7A1E;}
        .bc-royal .bc-go{color:#8A6425;}
        @media (max-width:640px){ .bc-cards{flex-direction:column;} .bc-dialog{padding:40px 20px 24px;} }
      `}</style>

      <div className="bc-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="bc-close" onClick={onClose} aria-label="Close">×</button>
        <p className="bc-kicker">Our Brands</p>
        <h2 className="bc-title">Choose Your Brand</h2>

        <div className="bc-cards">
          <button className="bc-card bc-shine" onClick={() => pick("/brands/shine")}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3E7A1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.2 5.6L20 10l-5.8 2.4L12 18l-2.2-5.6L4 10l5.8-2.4Z" />
              <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9Z" />
            </svg>
            <span className="bc-name">Shine</span>
            <span className="bc-sub">Clean &amp; Fresh — Home Care</span>
            <span className="bc-go">Explore →</span>
          </button>

          <button className="bc-card bc-royal" onClick={() => pick("/brands/royal-luxury")}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8A6425" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8l4 4 5-6 5 6 4-4v9H3Z" />
              <path d="M3 17h18" />
            </svg>
            <span className="bc-name">Royal Luxury</span>
            <span className="bc-sub">Premium Cosmetics &amp; Skincare</span>
            <span className="bc-go">Explore →</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BrandChooser;