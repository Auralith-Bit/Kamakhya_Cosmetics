import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" />
  </svg>
);

const Chev = () => (
  <svg width="8" height="12" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const CartHeader = () => {
  return (
    <section className="w-full h-[200px] bg-[#F7F0E7] flex flex-col justify-center items-center gap-[10px] px-5 max-sm:h-auto max-sm:py-10">
      <nav className="flex items-center gap-2 font-body text-[14px] font-semibold text-hero-orange" aria-label="Breadcrumb">
        <HomeIcon />
        <Link to="/" className="text-hero-orange no-underline transition-colors duration-200 hover:text-brand-blue">
          HOME
        </Link>
        <Chev />
        <span>Your Cart</span>
        <Chev />
      </nav>

      <h1 className="m-0 font-title text-[clamp(28px,3.5vw,40px)] font-bold leading-tight text-brand-blue">
        Review Your Cart
      </h1>
    </section>
  );
};

export default CartHeader;
