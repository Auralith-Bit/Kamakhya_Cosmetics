import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const Chev = () => (
  <svg width="8" height="12" viewBox="0 0 9 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m1.5 1.5 6 5.5-6 5.5" />
  </svg>
);

const TopBanner = () => (
    <section id="wishlist-hero" className="w-full h-[200px] bg-[#F7F0E7] flex flex-col justify-center items-center gap-[10px] px-5 max-sm:h-auto max-sm:py-10">
        <nav className="flex items-center gap-2 font-body text-[17px] font-semibold text-hero-orange" aria-label="Breadcrumb">
            <Home className="w-4 h-4" strokeWidth={2.5} />
            <Link to="/" className="text-hero-orange font-body font-semibold text-[17px] no-underline transition-colors duration-200 hover:text-brand-blue">
                HOME
            </Link>
            <Chev />
            <span className="text-hero-orange font-body font-semibold text-[17px]">Your Wishlist</span>
            <Chev />
        </nav>

        <h1 className="m-0 font-title text-[clamp(28px,3.5vw,40px)] font-bold leading-tight text-brand-blue">
            Your Saved Items
        </h1>
    </section>
)

export default TopBanner
