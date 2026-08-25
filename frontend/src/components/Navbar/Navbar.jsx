import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Group 9.png';
import BrandChooser from '../brands/BrandChooser';

const Navbar = () => {
  const [cartCount] = useState(1);
  const [wishlistCount] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const MENU_ITEMS = [
    { label: 'HOME', to: '/', type: 'link' },
    { label: 'PRODUCTS', to: '/#products', type: 'link' },
    { label: 'OUR BRANDS', type: 'brands' },
    { label: 'MANUFACTURING', to: '/#manufacturing', type: 'link' },
    { label: 'ABOUT', to: '/about', type: 'link' },
    { label: 'CONTACT', to: '/contact', type: 'link' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchValue);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="kn-nav">
      <style>{`
        .kn-nav, .kn-nav *{box-sizing:border-box;}
        .kn-nav{position:fixed;top:0;left:0;z-index:1000;width:100%;background:#fff;
          font-family:'Poppins','Segoe UI',sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.08);}

        /* ── DESKTOP: diagonal white panel + logo ── */
        .kn-diag{position:absolute;top:0;left:0;height:100%;width:340px;z-index:1;
          pointer-events:none;filter:drop-shadow(5px 0 9px rgba(0,0,0,.12));}
        .kn-diag > div{width:100%;height:100%;background:#fff;
          clip-path:polygon(0 0, 100% 0, 51% 100%, 0 100%);}
        .kn-logo{position:absolute;top:0;left:0;height:100%;width:240px;z-index:2;
          display:flex;align-items:center;justify-content:center;text-decoration:none;}
        .kn-logo img{display:block;height:118px;width:auto;object-fit:contain;user-select:none;}

        /* ── top blue bar ── */
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

        /* ── main nav row ── */
        .kn-mainrow{display:flex;align-items:center;gap:20px;min-height:70px;
          padding:10px 40px 10px 280px;}
        .kn-links{display:flex;align-items:center;gap:42px;list-style:none;margin:0;
          padding:0;min-width:0;}

        /* ── shared link & button styles ── */
        .kn-links a, .kn-brands-btn{position:relative;text-decoration:none;color:#1c1c1c;font-size:15px;
          font-weight:600;letter-spacing:.4px;padding:6px 0;white-space:nowrap;transition:color .2s;
          background:none;border:none;cursor:pointer;font-family:inherit;}
        .kn-links a::after, .kn-brands-btn::after{content:'';position:absolute;left:0;width:100%;height:3px;
          bottom:-4px;border-radius:2px;background:#CCA466;transform:scaleX(0);
          transition:transform .2s;}
        .kn-links a:hover, .kn-brands-btn:hover{color:#2E3192;}
        .kn-links a:hover::after, .kn-brands-btn:hover::after{transform:scaleX(1);}
        .kn-links a.active, .kn-brands-btn.active{color:#2E3192;}
        .kn-links a.active::after, .kn-brands-btn.active::after{transform:scaleX(1);}

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
          white-space:nowrap;transition:background .2s;}
        .kn-cta:hover{background:#252775;}

        /* ── hamburger (hidden on desktop) ── */
        .kn-hamburger{display:none;width:42px;height:42px;border:none;background:transparent;
          cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px;
          padding:0;border-radius:6px;transition:background .2s;}
        .kn-hamburger:hover{background:#eef0fb;}
        .kn-hamburger span{display:block;width:22px;height:2px;background:#2E3192;border-radius:2px;
          transition:transform .3s, opacity .3s;}
        .kn-hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
        .kn-hamburger.open span:nth-child(2){opacity:0;}
        .kn-hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

        /* ── mobile dropdown ── */
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
          display:block;padding:13px 0;color:#1c1c1c;font-size:15px;font-weight:600;
          letter-spacing:.4px;text-decoration:none;background:none;border:none;cursor:pointer;
          font-family:inherit;text-align:left;width:100%;transition:color .2s;}
        .kn-mobile-links a:hover, .kn-mobile-links .kn-brands-btn:hover{color:#2E3192;}
        .kn-mobile-links a.active{color:#2E3192;}
        .kn-mobile-cta{display:block;width:100%;padding:14px;border:none;border-radius:8px;
          background:#2E3192;color:#fff;font-family:inherit;font-size:15px;font-weight:600;
          letter-spacing:.3px;cursor:pointer;text-align:center;margin-top:16px;transition:background .2s;}
        .kn-mobile-cta:hover{background:#252775;}
        .kn-mobile-email{display:flex;align-items:center;gap:10px;color:#2E3192;font-size:13px;
          text-decoration:none;padding:12px 0 4px;}
        .kn-mobile-email svg{flex-shrink:0;}

        /* ============ RESPONSIVE ============ */
        @media (max-width:1400px){
          .kn-topbar{padding-left:300px;}
          .kn-mainrow{padding-left:250px;}
          .kn-links{gap:28px;}
          .kn-search{flex-basis:300px;}
        }
        @media (max-width:1200px){
          .kn-diag{width:300px;}
          .kn-logo{width:220px;}
          .kn-logo img{height:100px;}
          .kn-topbar{padding-left:270px;gap:16px;}
          .kn-mainrow{padding-left:230px;flex-wrap:wrap;row-gap:6px;}
          .kn-links{gap:18px;}
          .kn-links a, .kn-brands-btn{font-size:13px;}
          .kn-search{flex-basis:260px;}
          .kn-cta{padding:12px 18px;font-size:13px;}
        }
        @media (max-width:1024px){
          .kn-diag{width:260px;}
          .kn-logo{width:200px;}
          .kn-logo img{height:90px;}
          .kn-topbar{padding-left:240px;}
          .kn-mainrow{padding-left:205px;}
          .kn-links{gap:14px;}
          .kn-links a, .kn-brands-btn{font-size:12px;}
          .kn-iconbtn{width:38px;height:38px;}
        }

        /* ── TABLET: stacked layout ── */
        @media (max-width:900px){
          .kn-diag{display:none;}
          .kn-logo{position:static;width:100%;height:auto;padding:10px 0;}
          .kn-logo img{height:80px;}
          .kn-topbar{padding:10px 16px;flex-wrap:wrap;}
          .kn-email{order:1;}
          .kn-search{order:2;width:100%;max-width:100%;flex:1 1 100%;}
          .kn-mainrow{padding:10px 16px;flex-wrap:wrap;justify-content:center;gap:12px;}
          .kn-links{order:2;width:100%;flex-wrap:wrap;justify-content:center;gap:16px;}
          .kn-links a, .kn-brands-btn{font-size:13px;}
          .kn-actions{order:1;margin-left:auto;}
          .kn-vline{display:none;}
        }

        /* ── MOBILE: hamburger menu ── */
        @media (max-width:640px){
          .kn-topbar{display:none;}
          .kn-mainrow{display:none;}
          .kn-hamburger{display:flex;}
          .kn-mobile-menu{display:block;}
          .kn-logo{position:static;width:100%;height:auto;padding:10px 16px;}
          .kn-logo img{height:60px;}
          .kn-nav .kn-mobile-topbar{display:flex;align-items:center;justify-content:space-between;
            padding:0 16px 8px;}
          .kn-actions-mobile{display:flex;align-items:center;gap:8px;}
          .kn-actions-mobile .kn-iconbtn{width:36px;height:36px;}
        }
        @media (min-width:641px){
          .kn-mobile-topbar{display:none!important;}
          .kn-mobile-menu{display:none!important;}
        }
        @media (max-width:400px){
          .kn-logo img{height:50px;}
          .kn-logo{padding:8px 12px;}
        }
      `}</style>

      {/* ── DESKTOP: diagonal white panel ── */}
      <div className="kn-diag" aria-hidden="true"><div /></div>

      {/* ── DESKTOP: Logo ── */}
      <Link to="/" className="kn-logo">
        <img src={logo} alt="Kamakhya Cosmetics" />
      </Link>

      {/* ── DESKTOP: Top blue bar ── */}
      <div className="kn-topbar">
        <a href="mailto:info@kamakhyacosmetics.com.np" className="kn-email">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          <span>info@kamakhyacosmetics.com.np</span>
        </a>

        <form onSubmit={handleSearch} className="kn-search">
          <input
            type="text"
            placeholder="search .."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>
      </div>

      {/* ── DESKTOP: Main nav row ── */}
      <div className="kn-mainrow">
        <ul className="kn-links">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              {item.type === 'brands' ? (
                <button
                  className={`kn-brands-btn ${location.pathname.startsWith('/brands') ? 'active' : ''}`}
                  onClick={() => setBrandsOpen(true)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={(item.to === '/' && location.pathname === '/') || (item.to !== '/' && location.pathname === item.to) ? 'active' : ''}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="kn-actions">
          <span className="kn-vline" />

          <button className="kn-iconbtn" title="Wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="kn-badge">{wishlistCount}</span>
          </button>

          <button className="kn-iconbtn" title="Cart" aria-label="Shopping cart">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="kn-badge">{cartCount}</span>
          </button>

          <span className="kn-vline" />

          <button className="kn-cta">Become Distributor</button>
        </div>
      </div>

      {/* ── MOBILE: compact top bar with logo, hamburger, actions ── */}
      <div className="kn-mobile-topbar">
        <button
          className={`kn-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>

        <div className="kn-actions-mobile">
          <button className="kn-iconbtn" title="Wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="kn-badge">{wishlistCount}</span>
          </button>
          <button className="kn-iconbtn" title="Cart" aria-label="Shopping cart">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="kn-badge">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* ── MOBILE: slide-down menu ── */}
      <div className={`kn-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="kn-mobile-inner">
          <form onSubmit={handleSearch} className="kn-m-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </form>

          <a href="mailto:info@kamakhyacosmetics.com.np" className="kn-mobile-email">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            info@kamakhyacosmetics.com.np
          </a>

          <ul className="kn-mobile-links">
            {MENU_ITEMS.map((item) => (
              <li key={item.label}>
                {item.type === 'brands' ? (
                  <button
                    className={`kn-brands-btn ${location.pathname.startsWith('/brands') ? 'active' : ''}`}
                    onClick={() => { setBrandsOpen(true); closeMobile(); }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeMobile}
                    className={(item.to === '/' && location.pathname === '/') || (item.to !== '/' && location.pathname === item.to) ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button className="kn-mobile-cta" onClick={closeMobile}>Become Distributor</button>
        </div>
      </div>

      {/* Brand Chooser Modal Portal */}
      <BrandChooser open={brandsOpen} onClose={() => setBrandsOpen(false)} />
    </header>
  );
};

export default Navbar;