import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/product";
import logo from "../../assets/Group 9.png";
import RLimage from "../../assets/RLimage.png";
import Shineimage from "../../assets/Shineimage.png";

/* ============ dropdown rendered via portal (escapes all overflow clipping) ============ */
const BrandsDropdown = ({ open, onClose, anchors }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 150, width: 300 });

  /* position under the visible trigger */
  useLayoutEffect(() => {
    if (!open) return;
    const anchor = (anchors || [])
      .map((a) => a.current)
      .find((el) => el && el.getBoundingClientRect().width > 0);
    if (!anchor) return;
    const r = anchor.getBoundingClientRect();
    const width =
      window.innerWidth <= 640 ? Math.min(320, window.innerWidth - 24) : 300;
    let left = r.left + r.width / 2;
    left = Math.max(
      width / 2 + 8,
      Math.min(window.innerWidth - width / 2 - 8, left),
    );
    setPos({ top: r.bottom + 10, left, width });
  }, [open, anchors]);

  /* close on outside click / Escape */
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const inPanel = ref.current && ref.current.contains(e.target);
      const inAnchor = (anchors || []).some(
        (a) => a.current && a.current.contains(e.target),
      );
      if (!inPanel && !inAnchor) onClose();
    };
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, anchors]);

  if (!open) return null;

  const pick = (path) => {
    onClose();
    navigate(path);
  };

  return createPortal(
    <div
      className="bc-drop"
      ref={ref}
      style={{ top: pos.top, left: pos.left, width: pos.width }}
      role="menu"
      aria-label="Choose a brand"
    >
      {/* ✅ 1st — Royal Luxury with its real logo */}
      <button
        className="bc-item bc-royal"
        role="menuitem"
        onClick={() => pick("/brands/royal-luxury")}
      >
        <span className="bc-ico">
          <img src={RLimage} alt="Royal Luxury logo" />
        </span>
        <span className="bc-txt">
          <span className="bc-name">Royal Luxury</span>
          <span className="bc-sub">Premium Cosmetics &amp; Skincare</span>
        </span>
      </button>

      <div className="bc-sep" />

      {/* ✅ 2nd — Shine with its real logo */}
      <button
        className="bc-item bc-shine"
        role="menuitem"
        onClick={() => pick("/brands/shine")}
      >
        <span className="bc-ico">
          <img src={Shineimage} alt="Shine logo" />
        </span>
        <span className="bc-txt">
          <span className="bc-name">Shine</span>
          <span className="bc-sub">Clean &amp; Fresh — Home Care</span>
        </span>
      </button>
    </div>,
    document.body,
  );
};

/* ============ product search dropdown (navbar) ============ */
const ProductSearch = ({ variant, onCloseMobile }) => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const resultsRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 360 });

  const hits = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return products
      .filter((p) =>
        `${p.title} ${p.brand || ""} ${p.category || ""} ${p.type || ""}`
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 6);
  }, [q]);

  useLayoutEffect(() => {
    if (!open || !boxRef.current) return;
    const r = boxRef.current.getBoundingClientRect();
    const maxWidth = Math.min(400, window.innerWidth - 16);
    let left = r.left;
    left = Math.max(8, Math.min(window.innerWidth - maxWidth - 8, left));
    setPos({ top: r.bottom + 8, left, width: maxWidth });
  }, [open, q]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const inResults = resultsRef.current && resultsRef.current.contains(e.target);
      const inBox = boxRef.current && boxRef.current.contains(e.target);
      if (!inResults && !inBox) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (to) => {
    setOpen(false);
    setQ("");
    if (onCloseMobile) onCloseMobile();
    navigate(to);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hits.length) return;
    go(`/products/${hits[0].id}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={variant === "mobile" ? "kn-m-search" : "kn-search"}
        ref={boxRef}
      >
        <input
          type="text"
          placeholder={variant === "mobile" ? "Search products…" : "search"}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
        <button type="submit" aria-label="Search">
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </form>

      {open && q.trim().length >= 2 && hits.length > 0 &&
        createPortal(
          <div
            className="ps-drop"
            ref={resultsRef}
            style={{ top: pos.top, left: pos.left, width: pos.width }}
            role="listbox"
            aria-label="Product results"
          >
            <p className="ps-group">Products</p>
            {hits.map((p) => (
              <button key={p.id} className="ps-item" onClick={() => go(`/products/${p.id}`)}>
                <span className="ps-ico">
                  <img src={p.image} alt="" />
                </span>
                <span className="ps-txt">
                  <span className="ps-name">{p.title}</span>
                  <span className="ps-sub">{p.brand || "Kamakhya"}</span>
                </span>
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
};

/* ================= navbar ================= */
const Navbar = () => {
  const { wishlistIds } = useWishlist();
  const { cartCount } = useCart();
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const desktopBrandsRef = useRef(null);
  const mobileBrandsRef = useRef(null);
  /* ✅ refs for click-outside closing of the hamburger menu */
  const mobileTopbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const MENU_ITEMS = [
    { label: "HOME", to: "/", type: "link" },
    { label: "PRODUCTS", to: "/products", type: "link" },
    { label: "OUR BRANDS", type: "brands" },
    { label: "MANUFACTURING", to: "/manufacture", type: "link" },
    { label: "ABOUT", to: "/about", type: "link" },
    { label: "CONTACT", to: "/contact", type: "link" },
  ];

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    setMobileOpen(false);
    setBrandsOpen(false);
  }, [location]);

  /* ✅ close hamburger menu when clicking anywhere outside it */
  useEffect(() => {
    if (!mobileOpen) return;

    const handleOutsideClick = (e) => {
      const menu = mobileMenuRef.current;
      const topbar = mobileTopbarRef.current;

      const clickedInsideMenu = menu && menu.contains(e.target);
      const clickedInsideTopbar = topbar && topbar.contains(e.target);

      if (!clickedInsideMenu && !clickedInsideTopbar) {
        setMobileOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, { passive: true });
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="kn-nav">
      <style>{`
        .kn-nav, .kn-nav *{box-sizing:border-box;}
        .kn-nav{position:fixed;top:0;left:0;z-index:1000;width:100%;background:#fff;
          font-family:'Poppins','Segoe UI',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.3);}

        .kn-diag{position:absolute;top:0;left:0;height:100%;width:340px;z-index:1;
          pointer-events:none;filter:drop-shadow(5px 0 9px rgba(0,0,0,.12));}
        .kn-diag > div{width:100%;height:100%;background:#fff;
          clip-path:polygon(0 0, 100% 0, 51% 100%, 0 100%);}
        .kn-logo{position:absolute;top:0;left:0;height:100%;width:240px;z-index:2;
          display:flex;align-items:center;justify-content:center;text-decoration:none;}
        .kn-logo img{display:block;height:118px;width:auto;object-fit:contain;user-select:none;}

        .kn-topbar{display:flex;align-items:center;justify-content:space-between;gap:24px;
          min-height:60px;background:#2E3192;padding:10px 40px 10px 330px;}
        .kn-email{display:flex;align-items:center;gap:10px;color:#fff;font-size:15px;
          letter-spacing:.3px;text-decoration:none;min-width:0;flex:0 1 auto;}
        .kn-email svg{flex-shrink:0;}
        .kn-email span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
        .kn-search{display:flex;align-items:center;background:#f7f7f7;border-radius:8px;
          height:40px;width:350px;max-width:45%;min-width:140px;overflow:hidden;flex:0 1 350px;}
        .kn-search input{flex:1;height:100%;border:none;outline:none;background:transparent;
          padding:0 14px;font-size:13px;color:#555;min-width:0;}
        .kn-search input::placeholder{color:#999;}
        .kn-search button{height:100%;padding:0 12px;border:none;background:transparent;
          display:flex;align-items:center;cursor:pointer;color:#444;}

        .kn-mainrow{display:flex;align-items:center;gap:20px;min-height:70px;
          padding:10px 40px 10px 280px;}
        .kn-links{display:flex;align-items:center;gap:42px;list-style:none;margin:0;
          padding:0;min-width:0;}

        .kn-links a, .kn-brands-btn{position:relative;text-decoration:none;color:#1c1c1c;font-size:15px;
          font-weight:600;letter-spacing:.4px;padding:6px 0;white-space:nowrap;transition:color .2s;
          background:none;border:none;cursor:pointer;font-family:inherit;display:flex;align-items:center;}
        .kn-links a::after, .kn-brands-btn::after{content:'';position:absolute;left:0;width:100%;height:3px;
          bottom:-4px;border-radius:2px;background:#CCA466;transform:scaleX(0);
          transition:transform .2s;}
        .kn-links a:hover, .kn-brands-btn:hover{color:#2E3192;}
        .kn-links a:hover::after, .kn-brands-btn:hover::after{transform:scaleX(1);}
        .kn-links a.active, .kn-brands-btn.active{color:#2E3192;}
        .kn-links a.active::after, .kn-brands-btn.active::after{transform:scaleX(1);}

        .bc-drop{position:fixed;transform:translateX(-50%);background:#fff;border:1px solid #E6E6EE;
          border-radius:10px;box-shadow:0 14px 34px rgba(0,0,0,.12);padding:6px;z-index:4000;
          animation:bcIn .18s ease;text-align:left;font-family:'Poppins','Segoe UI',sans-serif;}
        @keyframes bcIn{from{opacity:0;transform:translate(-50%,-6px);}to{opacity:1;transform:translate(-50%,0);}}
        .bc-item{display:flex;align-items:center;gap:12px;width:100%;padding:10px 12px;border:0;
          border-radius:8px;background:transparent;cursor:pointer;text-align:left;
          font-family:inherit;transition:background .15s;}
        .bc-item:hover{background:#F6F7FB;}

        /* ✅ logo tile — shows the real brand images */
        .bc-ico{width:38px;height:38px;border-radius:9px;overflow:hidden;flex-shrink:0;
          background:#fff;border:1px solid #EEEFF4;display:grid;place-items:center;}
        .bc-ico img{width:100%;height:100%;object-fit:contain;display:block;}

        .bc-txt{display:flex;flex-direction:column;gap:2px;}
        .bc-name{font-family:'Playfair Display',Georgia,serif;font-size:15px;font-weight:700;}
        .bc-shine .bc-name{color:#3E7A1E;}
        .bc-royal .bc-name{color:#8A6425;}
        .bc-sub{font-size:11.5px;color:#666;}
        .bc-sep{height:1px;background:#EEEFF4;margin:4px 8px;}

        /* ✅ product search results */
        .ps-drop{position:fixed;background:#fff;border:1px solid #E6E6EE;border-radius:12px;
          box-shadow:0 18px 44px rgba(0,0,0,.16);padding:8px;z-index:4000;
          max-height:min(440px, calc(100vh - 120px));overflow-y:auto;
          animation:psIn .16s ease;font-family:'Poppins','Segoe UI',sans-serif;}
        @keyframes psIn{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}
        .ps-group{margin:4px 10px 6px;font-size:11px;font-weight:700;letter-spacing:.14em;
          text-transform:uppercase;color:#9AA0B5;}
        .ps-item{display:flex;align-items:center;gap:12px;width:100%;padding:9px 10px;border:0;
          border-radius:9px;background:transparent;cursor:pointer;text-align:left;
          font-family:inherit;transition:background .15s;}
        .ps-item:hover{background:#F5F6FB;}
        .ps-item + .ps-item{margin-top:2px;}
        .ps-ico{width:38px;height:38px;border-radius:9px;flex-shrink:0;background:#F6EFE3;
          overflow:hidden;padding:4px;display:grid;place-items:center;}
        .ps-ico img{width:100%;height:100%;object-fit:contain;display:block;}
        .ps-txt{display:flex;flex-direction:column;gap:1px;min-width:0;}
        .ps-name{font-size:14px;font-weight:600;color:#222;white-space:nowrap;overflow:hidden;
          text-overflow:ellipsis;}
        .ps-sub{font-size:11.5px;color:#8B8B9E;white-space:nowrap;overflow:hidden;
          text-overflow:ellipsis;}

        .kn-actions{margin-left:auto;display:flex;align-items:center;gap:12px;flex-shrink:0;}
        .kn-vline{width:1px;height:34px;background:#e5e7eb;}
        .kn-iconbtn{position:relative;width:42px;height:42px;border:none;background:transparent;
          color:#2E3192;display:flex;align-items:center;justify-content:center;cursor:pointer;
          border-radius:6px;transition:background .2s;}
        .kn-iconbtn:hover{background:#eef0fb;}
        .kn-badge{position:absolute;top:2px;right:4px;min-width:16px;height:16px;padding:0 4px;
          border-radius:999px;background:#E38F2E;color:#fff;font-size:10px;font-weight:700;
          display:flex;align-items:center;justify-content:center;}
        .kn-cta{margin-left:8px;background:#2E3192;color:#fff;border:none;border-radius:8px;
          padding:14px 24px;font-size:15px;font-weight:600;letter-spacing:.3px;cursor:pointer;
          white-space:nowrap;transition:background .2s;text-decoration:none;display:inline-flex;align-items:center;}
        .kn-cta:hover{background:#252775;}

        /* ✅ sub-desktop CTA inside the burger row (hidden on desktop) */
        .kn-cta-m{display:none;}

        .kn-hamburger{display:none;width:42px;height:42px;border:none;background:transparent;
          cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px;
          padding:0;border-radius:6px;transition:background .2s;}
        .kn-hamburger:hover{background:#eef0fb;}
        .kn-hamburger span{display:block;width:22px;height:2px;background:#2E3192;border-radius:2px;
          transition:transform .3s, opacity .3s;}
        .kn-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
        .kn-hamburger.open span:nth-child(2){opacity:0;}
        .kn-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

        .kn-mobile-menu{display:none;overflow:hidden;max-height:0;transition:max-height .35s ease;}
        .kn-mobile-menu.open{max-height:600px;}
        .kn-mobile-inner{padding:16px 20px 20px;display:flex;flex-direction:column;gap:0;
          border-top:1px solid #eee;}
        .kn-mobile-inner .kn-m-search{display:flex;align-items:center;background:#f7f7f7;
          border-radius:8px;height:42px;overflow:hidden;margin-bottom:12px;}
        .kn-mobile-inner .kn-m-search input{flex:1;height:100%;border:none;outline:none;
          background:transparent;padding:0 14px;font-size:13px;color:#555;min-width:0;}
        .kn-mobile-inner .kn-m-search input::placeholder{color:#999;}
        .kn-mobile-inner .kn-m-search button{height:100%;padding:0 12px;border:none;
          background:transparent;display:flex;align-items:center;cursor:pointer;color:#444;}
        .kn-mobile-links{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;}
        .kn-mobile-links li{border-bottom:1px solid #f0f0f0;}
        .kn-mobile-links li:last-child{border-bottom:none;}
        .kn-mobile-links a, .kn-mobile-links .kn-brands-btn{
          display:flex;padding:13px 0;color:#1c1c1c;font-size:15px;font-weight:600;
          letter-spacing:.4px;text-decoration:none;background:none;border:none;cursor:pointer;
          font-family:inherit;text-align:left;width:100%;transition:color .2s;}
        .kn-mobile-links a:hover, .kn-mobile-links .kn-brands-btn:hover{color:#2E3192;}
        .kn-mobile-links a.active{color:#2E3192;}

        .kn-mobile-cta{display:block;width:100%;padding:14px;border:none;border-radius:8px;
          background:#2E3192;color:#fff;font-family:inherit;font-size:15px;font-weight:600;
          letter-spacing:.3px;cursor:pointer;text-align:center;margin-top:16px;transition:background .2s;text-decoration:none;}
        .kn-mobile-cta:hover{background:#252775;}
        .kn-mobile-email{display:flex;align-items:center;gap:10px;color:#2E3192;font-size:13px;
          text-decoration:none;padding:12px 0 4px;}
        .kn-mobile-email svg{flex-shrink:0;}

        /* ============ DESKTOP TIER 2 (1280–1400): same design, scaled ============ */
        @media (max-width:1400px){
          .kn-diag{width:320px;}
          .kn-logo{width:230px;}
          .kn-logo img{height:108px;}
          .kn-topbar{padding-left:330px;gap:20px;}
          .kn-mainrow{padding-left:280px;flex-wrap:wrap;row-gap:6px;}
          .kn-links{gap:18px;}
          .kn-links a, .kn-brands-btn{font-size:13px;}
          .kn-search{flex-basis:300px;}
          .kn-cta{padding:12px 20px;font-size:14px;}
        }

        /* ============ DESKTOP TIER 3 (1025–1279): same design, compact scale ============ */
        @media (min-width:1025px) and (max-width:1279px){
          .kn-diag{width:240px;}
          .kn-logo{width:180px;}
          .kn-logo img{height:84px;}
          .kn-topbar{padding-left:230px;gap:16px;min-height:56px;}
          .kn-email{font-size:13px;}
          .kn-search{flex-basis:240px;height:38px;}
          .kn-mainrow{padding-left:210px;min-height:60px;gap:16px;flex-wrap:wrap;row-gap:4px;}
          .kn-links{gap:14px;}
          .kn-links a, .kn-brands-btn{font-size:12px;}
          .kn-iconbtn{width:36px;height:36px;}
          .kn-vline{height:28px;}
          .kn-cta{padding:10px 16px;font-size:12px;margin-left:4px;}
        }

        /* ✅ burger row & slide menu exist ONLY on desktop (≥1025) */
        @media (min-width:1025px){
          .kn-mobile-topbar{display:none!important;}
          .kn-mobile-menu{display:none!important;}
        }

        /* ============ TABLET + PHONES ≤1024 — base sub-desktop layout ============ */
        @media (max-width:1024px){
          .kn-diag{display:none;}
          .kn-logo{position:static;width:100%;height:auto;padding:10px 0;}
          .kn-logo img{height:clamp(56px, 9vw, 80px);}

          .kn-topbar{display:flex;flex-wrap:nowrap;padding:10px 16px;min-height:52px;gap:12px;}
          .kn-email{order:1;flex:0 1 auto;font-size:clamp(11px, 1.8vw, 13px);}
          .kn-search{order:2;flex:1 1 180px;width:auto;max-width:340px;min-width:130px;
            margin-left:auto;height:36px;}

          .kn-mainrow{display:none;}
          .kn-nav .kn-mobile-topbar{display:flex;align-items:center;
            justify-content:space-between;padding:8px 16px 10px;gap:12px;}
          .kn-hamburger{display:flex;}
          .kn-actions-mobile{display:flex;align-items:center;gap:6px;}
          .kn-actions-mobile .kn-iconbtn{width:clamp(34px, 5vw, 38px);height:clamp(34px, 5vw, 38px);}
          .kn-cta-m{display:inline-flex;margin-left:4px;
            padding:clamp(8px, 1.4vw, 10px) clamp(12px, 2vw, 18px);
            font-size:clamp(11px, 1.8vw, 13px);}

          /* tablet menu = pages only (search/email/CTA live in the rows above) */
          .kn-mobile-menu{display:block;}
          .kn-mobile-inner{padding:12px 20px 16px;}
          .kn-mobile-inner .kn-m-search{display:none;}
          .kn-mobile-email{display:none;}
          .kn-mobile-cta{display:none;}
          .kn-mobile-links a, .kn-mobile-links .kn-brands-btn{font-size:14px;padding:12px 0;}
        }

        /* ============ ✅ PHONES ≤639 — logo row + [hamburger · wishlist · cart] row;
           open panel = search → email → links → Become Distributor ============ */
        @media (max-width:639px){
          /* ✅ mobile logo: 64px → 72px (slightly larger, still under tablet max) */
          .kn-logo img{height:72px;}

          /* blue email bar removed on phones — email lives inside the menu */
          .kn-topbar{display:none;}

          /* closed row: hamburger + wishlist + cart only (CTA moves into the menu) */
          .kn-cta-m{display:none;}
          .kn-nav .kn-mobile-topbar{padding:6px 16px 10px;}

          /* open panel content: search → email → links → CTA */
          .kn-mobile-inner .kn-m-search{display:flex;}
          .kn-mobile-email{display:flex;}
          .kn-mobile-cta{display:block;}

          /* panel scrolls if the phone is short instead of clipping */
          .kn-mobile-menu.open{max-height:calc(100vh - 120px);overflow-y:auto;}
        }
      `}</style>

      {/* ── DESKTOP: diagonal white panel ── */}
      <div className="kn-diag" aria-hidden="true">
        <div />
      </div>

      <Link to="/" className="kn-logo">
        <img src={logo} alt="Kamakhya Cosmetics" />
      </Link>

      <div className="kn-topbar">
        <a href="mailto:info@kamakhyacosmetics.com.np" className="kn-email">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          <span>info@kamakhyacosmetics.com.np</span>
        </a>

        <ProductSearch variant="desktop" onCloseMobile={closeMobile} />
      </div>

      <div className="kn-mainrow">
        <ul className="kn-links">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              {item.type === "brands" ? (
                <button
                  ref={desktopBrandsRef}
                  className={`kn-brands-btn ${location.pathname.startsWith("/brands") || brandsOpen ? "active" : ""}`}
                  onClick={() => setBrandsOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={brandsOpen}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={
                    (item.to === "/" && location.pathname === "/") ||
                    (item.to !== "/" && location.pathname === item.to)
                      ? "active"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="kn-actions">
          <span className="kn-vline" />

          <Link to="/wishlist">
            <button className="kn-iconbtn" title="Wishlist" aria-label="Wishlist">
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistIds.length > 0 && <span className="kn-badge">{wishlistIds.length}</span>}
            </button>
          </Link>

          <Link to="/checkout">
            <button
              className="kn-iconbtn"
              title="Cart"
              aria-label="Shopping cart"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="kn-badge">{cartCount}</span>}
            </button>
          </Link>

          <span className="kn-vline" />

          <Link to="/distributor" className="kn-cta">
            Become Distributor
          </Link>
        </div>
      </div>

      {/* ✅ ref attached — counts as "inside" for click-outside logic */}
      <div className="kn-mobile-topbar" ref={mobileTopbarRef}>
        <button
          className={`kn-hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="kn-actions-mobile">
          <Link to="/wishlist">
            <button className="kn-iconbtn" title="Wishlist" aria-label="Wishlist">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistIds.length > 0 && <span className="kn-badge">{wishlistIds.length}</span>}
            </button>
          </Link>
          <Link to="/checkout">
            <button
              className="kn-iconbtn"
              title="Cart"
              aria-label="Shopping cart"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && <span className="kn-badge">{cartCount}</span>}
            </button>
          </Link>
          {/* ✅ tablet-only CTA (hidden on phones — CTA lives in the menu there) */}
          <Link to="/distributor" className="kn-cta kn-cta-m">
            Become Distributor
          </Link>
        </div>
      </div>

      {/* ── SUB-DESKTOP: slide-down menu (ref attached for click-outside) ── */}
      <div className={`kn-mobile-menu ${mobileOpen ? "open" : ""}`} ref={mobileMenuRef}>
        <div className="kn-mobile-inner">
          {/* phones: search at top of panel · tablet: hidden (search in blue bar) */}
          <ProductSearch variant="mobile" onCloseMobile={closeMobile} />

          {/* phones: email row inside panel · tablet: hidden (email in blue bar) */}
          <a
            href="mailto:info@kamakhyacosmetics.com.np"
            className="kn-mobile-email"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            info@kamakhyacosmetics.com.np
          </a>

          <ul className="kn-mobile-links">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                {item.type === "brands" ? (
                  <button
                    ref={mobileBrandsRef}
                    className={`kn-brands-btn ${location.pathname.startsWith("/brands") || brandsOpen ? "active" : ""}`}
                    onClick={() => setBrandsOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={brandsOpen}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeMobile}
                    className={
                      (item.to === "/" && location.pathname === "/") ||
                      (item.to !== "/" && location.pathname === item.to)
                        ? "active"
                        : ""
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* phones: CTA at the bottom of the panel · tablet: hidden (CTA in burger row) */}
          <Link
            to={"/distributor"}
            className="kn-mobile-cta"
            onClick={closeMobile}
          >
            Become Distributor
          </Link>
        </div>
      </div>

      <BrandsDropdown
        open={brandsOpen}
        onClose={() => setBrandsOpen(false)}
        anchors={[desktopBrandsRef, mobileBrandsRef]}
      />
    </header>
  );
};

export default Navbar;