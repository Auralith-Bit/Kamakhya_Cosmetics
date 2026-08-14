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
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[900px] mx-auto mb-12 max-sm:mb-8">
        <p
          className="m-0 font-semibold uppercase"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '18px',
            lineHeight: 'normal',
            letterSpacing: '2.16px',
            color: '#E38F2E',
            textAlign: 'center',
            alignSelf: 'stretch',
            marginBottom: '12px',
          }}
        >
          Featured Collection
        </p>

        <h2
          className="m-0"
          style={{
            fontFamily: FONT_TITLE,
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: 'normal',
            color: '#2E3192',
            textAlign: 'center',
            textTransform: 'capitalize',
            marginBottom: '20px',
          }}
        >
          Our Most Loved Collections
        </h2>

        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{ marginBottom: '20px' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
        </svg>

        <p
          className="m-0"
          style={{
            fontFamily: FONT_BODY,
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
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="cardImageClip" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative z-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 px-[170px] max-lg:px-8 max-sm:px-5"
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="relative bg-white overflow-hidden"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              border: '1px solid rgba(204, 164, 102, 0.12)',
              boxShadow: '0 9px 22px rgba(24, 24, 24, 0.18)',
            }}
          >
            {/* ── Image with curved gold bottom ── */}
            <div className="relative w-full" style={{ aspectRatio: '371 / 334' }}>
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 40%', clipPath: 'url(#cardImageClip)' }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 371 334"
                fill="none"
                className="absolute bottom-0 left-0 w-full pointer-events-none"
                style={{ height: 'auto' }}
              >
                <path d="M0 273.15 C52.65 313.56 115.84 334 185 334 C254.65 334 318.26 313.28 371 272.48" stroke="#CCA466" strokeWidth="2.5" />
              </svg>

              {/* FEATURED badge */}
              <span
                className="absolute flex items-center"
                style={{
                  top: '16px',
                  left: '16px',
                  gap: '8px',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontFamily: FONT_BODY,
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.8px',
                  background: '#fff',
                  color: '#CCA466',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
                </svg>
                FEATURED
              </span>

              {/* Wishlist heart */}
              <span
                className="absolute rounded-full cursor-pointer"
                style={{
                  top: '16px',
                  right: '16px',
                  width: '44px',
                  height: '44px',
                  background: '#fff',
                  border: '2px solid #CCA466',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
            </div>

            {/* ── Content ── */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px 20px 24px' }}>
              {/* Product name */}
              <h3
                className="m-0"
                style={{
                  fontFamily: FONT_TITLE,
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: 1.2,
                  color: '#292929',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                {product.name}
              </h3>

              {/* Description */}
              <p
                className="m-0"
                style={{
                  fontFamily: FONT_BODY,
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#666',
                  textAlign: 'left',
                  flex: 1,
                  marginBottom: '16px',
                }}
              >
                {product.description}
              </p>

              {/* MOQ | divider | Lead Time */}
              <div
                className="max-sm:flex-wrap"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderTop: '1px solid #E8D6B8',
                  borderBottom: '1px solid #E8D6B8',
                  padding: '10px 0',
                  marginBottom: '24px',
                }}
              >
                {/* MOQ */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#F8EEDC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: FONT_BODY, fontSize: '15px', color: '#CCA466' }}>MOQ</span>
                    <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '15px', color: '#555' }}>{product.moq}</span>
                  </div>
                </div>

                {/* vertical divider */}
                <div className="max-sm:hidden" style={{ width: '1px', alignSelf: 'stretch', background: '#E8D6B8' }} />

                {/* Lead Time */}
                <div className="pl-4 max-sm:pl-0" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#F8EEDC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: FONT_BODY, fontSize: '15px', color: '#CCA466' }}>Lead Time</span>
                    <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '15px', color: '#555' }}>{product.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* View Products button */}
              <button
                type="button"
                className="no-underline transition-colors"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '52px',
                  padding: '0 52px',           /* reserves space so text never collides with arrow */
                  borderRadius: '107px',
                  border: '2px solid #2E3192',
                  background: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONT_BODY,
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#2E3192',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2E3192'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#2E3192'; }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>View Products</span>

                {/* arrow pinned right via inline styles — cannot drift to center */}
                <span
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#C9CBEC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    pointerEvents: 'none',
                  }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
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
            fontFamily: FONT_BODY,
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