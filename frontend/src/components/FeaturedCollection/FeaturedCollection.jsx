import React from 'react';
import nailPolish1 from '../../assets/nailpolish.jpg';
import lipstick from '../../assets/lipstick.jpg';
import oil from '../../assets/oil.jpg';
import wash from '../../assets/wash.jpg';

const PRODUCTS = [
  {
    id: 'nail-polish-dior',
    name: 'Nail Polish',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: nailPolish1,
    moq: '500 pcs',
    leadTime: '7-10 days',
  },
  {
    id: 'nail-polish-lancome',
    name: 'Nail Polish',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: lipstick,
    moq: '500 pcs',
    leadTime: '10-15 days',
  },
  {
    id: 'detergent-powder',
    name: 'Detergent Powder',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: oil,
    moq: '500 pcs',
    leadTime: '7-10 days',
  },
  {
    id: 'dish-washer',
    name: 'Dish Washer',
    description: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: wash,
    moq: '500 pcs',
    leadTime: '7-10 days',
  },
];

const FeaturedCollection = () => {
  return (
    <section
      id="featured-collection"
      aria-label="Featured Collection"
      className="relative w-full bg-[#fcfaf7] overflow-hidden"
      style={{ padding: '80px 0 60px' }}
    >
      {/* ── HEADER ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: '900px', margin: '0 auto 48px' }}>
        {/* Label */}
        <p
          className="m-0 font-bold uppercase"
          style={{
            fontFamily: "'Playfair Display', 'Playfair', serif",
            fontSize: 'clamp(14px, 1.04vw, 16px)',
            letterSpacing: '3px',
            color: '#E38F2E',
            marginBottom: '12px',
          }}
        >
          Featured Collection
        </p>

        {/* Heading */}
        <h2
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', 'Playfair', serif",
            fontWeight: 700,
            fontSize: 'clamp(30px, 2.86vw, 44px)',
            lineHeight: 1.2,
            color: '#2E3192',
            marginBottom: '20px',
          }}
        >
          Our Most Loved Collections
        </h2>

        {/* Gold decorative swirl */}
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '20px' }}>
          <path
            d="M10 12C20 4 30 20 40 12C50 4 60 20 70 12C80 4 90 20 100 12C110 4 115 12 115 12"
            stroke="#c9a24b"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Description */}
        <p
          className="m-0"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(14px, 0.97vw, 15px)',
            lineHeight: 1.7,
            color: '#666680',
            maxWidth: '700px',
          }}
        >
          Discover the skincare and beauty products trusted by thousands for radiant, healthy-looking
          skin—crafted with premium ingredients and proven results.
        </p>
      </div>

      {/* ── PRODUCT CARDS GRID ── */}
      <div
        className="relative z-10 mx-auto grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 px-12 max-lg:px-8 max-sm:px-5"
        style={{ maxWidth: '1280px' }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-2xl overflow-hidden flex flex-col"
            style={{
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Image container with curved bottom */}
            <div className="relative w-full overflow-hidden" style={{ height: '260px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px' }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* FEATURED badge */}
              <span
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white font-bold uppercase"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '1px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: '#c9a24b',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Featured
              </span>

              {/* Wishlist heart */}
              <span
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 pt-5 pb-4">
              {/* Product name */}
              <h3
                className="m-0 mb-2"
                style={{
                  fontFamily: "'Playfair Display', 'Playfair', serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: 1.3,
                  color: '#2E3192',
                  textAlign: 'center',
                }}
              >
                {product.name}
              </h3>

              {/* Description */}
              <p
                className="m-0 mb-4"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#666680',
                  textAlign: 'center',
                  flex: 1,
                }}
              >
                {product.description}
              </p>

              {/* MOQ and Lead Time */}
              <div className="flex items-center gap-4 mb-4">
                {/* MOQ */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#fcfaf7', border: '1px solid #e6ddc9' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '10px', color: '#E38F2E', letterSpacing: '0.5px' }}>MOQ</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '12px', color: '#333' }}>{product.moq}</span>
                  </div>
                </div>

                {/* Lead Time */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#fcfaf7', border: '1px solid #e6ddc9' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '10px', color: '#E38F2E', letterSpacing: '0.5px' }}>Lead Time</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '12px', color: '#333' }}>{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* View Details button */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full rounded-lg text-center no-underline transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#2E3192',
                  border: '1.5px solid #2E3192',
                  background: 'transparent',
                  padding: '10px 16px',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2E3192'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E3192'; }}
              >
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative z-10 flex justify-center mt-10 px-6">
        <a
          href="#collections"
          className="inline-flex items-center gap-2 rounded-lg no-underline transition-colors"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '14px',
            color: '#2E3192',
            border: '2px solid #2E3192',
            background: 'transparent',
            padding: '14px 32px',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2E3192'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E3192'; }}
        >
          Explore Collections
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

    </section>
  );
};

export default FeaturedCollection;
