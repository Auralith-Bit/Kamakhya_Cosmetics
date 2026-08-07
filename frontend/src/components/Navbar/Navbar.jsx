import React, { useState } from 'react';
import logo from '../../assets/Group 9.png';

const MENU_ITEMS = [
  { label: 'HOME', href: '#home', active: true },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'OUR BRANDS', href: '#brands' },
  { label: 'MANUFACTURING', href: '#manufacturing' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [cartCount] = useState(1);
  const [wishlistCount] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', searchValue);
  };

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white font-sans" style={{ boxShadow: '0px 8px 20px 0px #00000040' }}>
      
      {/* Centered content container (matches section width) */}
      <div className="relative mx-auto max-w-[1320px]">

      {/* Diagonal white panel */}
      <div className="absolute top-0 left-0 h-full w-[340px] z-[1] pointer-events-none drop-shadow-[5px_0_9px_rgba(0,0,0,0.12)] max-xl:w-[300px] max-lg:w-[270px] max-nav:hidden">
        <div className="w-full h-full bg-white [clip-path:polygon(0_0,_100%_0,_51%_100%,_0_100%)]" />
      </div>

      {/* Logo */}
      <a href="#home" className="absolute top-0 left-0 h-full w-[240px] z-[2] flex items-center justify-center no-underline max-nav:static max-nav:w-full max-nav:py-2.5">
        <img src={logo} alt="Kamakhya Cosmetics" className="block h-[118px] w-auto object-contain select-none max-lg:h-[100px] max-nav:h-[90px] max-sm:h-[70px]" />
      </a>

      {/* Top blue bar */}
      <div className="bg-brand-blue min-h-[60px] flex items-center justify-between gap-6 py-2.5 pr-10 pl-[330px] max-xl:pl-[280px] max-lg:pl-[250px] max-nav:flex-wrap max-nav:p-5">
        <a href="mailto:info@kamakhyacosmetics.com.np" className="flex items-center gap-2.5 text-white text-[15px] tracking-[0.3px] no-underline max-sm:text-[13px]">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          info@kamakhyacosmetics.com.np
        </a>

        <form onSubmit={handleSearch} className="flex items-center bg-[#f7f7f7] rounded-lg h-10 w-[350px] max-w-[45%] overflow-hidden max-lg:w-[260px] max-nav:w-full max-nav:max-w-full">
          <input
            type="text"
            placeholder="search .."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 h-full border-none outline-none bg-transparent px-3.5 text-[13px] text-[#555] placeholder:text-[#999]"
          />
          <button type="submit" aria-label="Search" className="h-full px-3 border-none bg-transparent flex items-center cursor-pointer text-[#444] transition-colors hover:text-brand-blue">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>
      </div>

      {/* Main nav row */}
      <div className="flex items-center gap-5 min-h-[70px] py-2.5 pr-10 pl-[280px] max-xl:pl-[215px] max-lg:pl-[195px] max-nav:flex-wrap max-nav:p-5 max-nav:gap-3">
        <ul className="flex items-center gap-[42px] list-none m-0 p-0 max-xl:gap-7 max-lg:gap-5 max-nav:order-2 max-nav:w-full max-nav:flex-wrap max-nav:justify-center max-nav:gap-4">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative no-underline text-[#1c1c1c] text-[15px] font-semibold tracking-[0.4px] py-1.5 transition-colors hover:text-brand-blue max-lg:text-[13px] max-sm:text-xs
                  after:content-[''] after:absolute after:left-0 after:w-full after:h-[3px] after:-bottom-1 after:rounded-[2px] after:bg-brand-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100
                  ${item.active ? 'text-brand-blue after:scale-x-100' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 max-nav:order-1">
          <span className="w-px h-[34px] bg-brand-divider max-nav:hidden" />

          <button className="relative w-[42px] h-[42px] border-none bg-transparent text-brand-blue flex items-center justify-center cursor-pointer rounded-md transition-colors hover:bg-[#eef0fb]" title="Wishlist" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="absolute top-0.5 right-1 min-w-4 h-4 px-1 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center">{wishlistCount}</span>
          </button>

          <button className="relative w-[42px] h-[42px] border-none bg-transparent text-brand-blue flex items-center justify-center cursor-pointer rounded-md transition-colors hover:bg-[#eef0fb]" title="Cart" aria-label="Shopping cart">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute top-0.5 right-1 min-w-4 h-4 px-1 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center">{cartCount}</span>
          </button>

          <span className="w-px h-[34px] bg-brand-divider max-nav:hidden" />

          <button className="ml-2 bg-brand-blue text-white border-none rounded-lg py-3.5 px-6 text-[15px] font-semibold tracking-[0.3px] cursor-pointer whitespace-nowrap transition-colors hover:bg-brand-blue-dark max-nav:py-2.5 max-nav:px-[18px] max-nav:text-[13px]">
            Become Distributor
          </button>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;