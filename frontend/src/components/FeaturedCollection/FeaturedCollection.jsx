import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import nailPolish1 from '../../assets/nailpolish.jpg';
import lipstick from '../../assets/lipstick.jpg';
import oil from '../../assets/oil.jpg';
import wash from '../../assets/wash.jpg';

const PRODUCTS = [
  {
    id: 2,
    title: 'Nail Polish',
    desc: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: nailPolish1,
    moq: '500 pcs',
    lead: '7-10 days',
    tag: 'FEATURED',
  },
  {
    id: 5,
    title: 'Nail Polish',
    desc: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: lipstick,
    moq: '500 pcs',
    lead: '10-15 days',
    tag: 'FEATURED',
  },
  {
    id: 16,
    title: 'Detergent Powder',
    desc: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: oil,
    moq: '500 pcs',
    lead: '7-10 days',
    tag: 'FEATURED',
  },
  {
    id: 12,
    title: 'Dish Washer',
    desc: 'Nail Polish is the best things in the world and were for protection. i love...',
    image: wash,
    moq: '500 pcs',
    lead: '7-10 days',
    tag: 'FEATURED',
  },
];

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const FeaturedCollection = () => {
  return (
    <section
      id="featured-collection"
      aria-label="Featured Collection"
      className="relative w-full bg-[#fcfaf7] overflow-hidden py-20 max-lg:py-16 max-sm:py-10"
    >
      {/* ── HEADER ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1100px] mx-auto mb-12 max-sm:mb-8">
        <p
          className="m-0 font-semibold uppercase"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '12px',
            lineHeight: 'normal',
            letterSpacing: '3.5px',
            color: '#e0912f',
            textAlign: 'center',
            alignSelf: 'stretch',
          }}
        >
          Featured Collection
        </p>

        <h2
          className="m-0"
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 700,
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            lineHeight: 1.25,
            color: '#2e3192',
            textAlign: 'center',
            textTransform: 'capitalize',
            margin: '6px 0 0',
          }}
        >
          Our Most Loved Collections
        </h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{ display: 'block', margin: '8px auto 0' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
        </svg>

        <p
          className="m-0"
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 400,
            fontSize: 'clamp(13px, 1.4vw, 14.5px)',
            lineHeight: 1.7,
            color: '#666680',
            maxWidth: '620px',
            margin: '12px auto 0',
          }}
        >
          Discover the skincare and beauty products trusted by thousands for radiant, healthy-looking
          skin—crafted with premium ingredients and proven results.
        </p>
      </div>

      {/* ── PRODUCT CARDS GRID ── */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative z-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 px-[125px] max-lg:px-10 max-sm:px-5"
        style={{ gridAutoRows: '1fr' }}
      >
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative z-10 flex justify-center mt-10 px-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-lg no-underline transition-colors"
          style={{
            fontFamily: FONT_BODY,
            fontWeight: 600,
            fontSize: '14px',
            color: '#2E3192',
            border: '2px solid #2E3192',
            background: 'transparent',
            padding: '14px 32px',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#EEF0FB'; e.currentTarget.style.color = '#2E3192'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E3192'; }}
        >
          Explore Collections
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCollection;