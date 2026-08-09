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
          className="m-0 font-semibold uppercase"
          style={{
            fontFamily: "'Poppins', sans-serif",
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

        {/* Heading */}
        <h2
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', 'Playfair', serif",
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

        {/* Gold decorative swirl */}
        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="24" viewBox="0 0 172 24" fill="none" style={{ marginBottom: '20px' }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466"/>
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
            {/* Image */}
            <div className="relative w-full" style={{ height: '260px' }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* FEATURED badge */}
              <span
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  color: '#c9a24b',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
                </svg>
                FEATURED
              </span>

              {/* Wishlist heart */}
              <span
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: '1.5px solid #e6ddc9',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
            </div>

            {/* Gold wave overlay */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 371 58"
              fill="none"
              className="relative w-full pointer-events-none"
              style={{ height: '58px', marginTop: '-29px', zIndex: 10 }}
            >
              <path d="M371 1.3564C371 1.79786 370.785 2.21068 370.422 2.46156C320.58 36.885 255.806 57.6832 185 57.6832C114.669 57.6832 50.2887 37.1631 0.582546 3.15224C0.216791 2.90197 0 2.48782 0 2.04464C0 0.954461 1.22598 0.312464 2.12412 0.930381C50.7218 34.3653 114.788 54.6832 185 54.6832C255.691 54.6832 320.153 34.0877 368.869 0.24467C369.767 -0.379442 371 0.262491 371 1.3564Z" fill="#CCA466"/>
            </svg>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 pt-3 pb-6">
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
              <div className="flex items-center justify-center gap-6 mb-4">
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

                {/* Vertical divider */}
                <div style={{ width: '1px', height: '32px', background: '#e6ddc9' }} />

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

              {/* View Products button */}
              <button
                type="button"
                className="flex items-end justify-center gap-2.5 no-underline transition-colors"
                style={{
                  width: '100%',
                  height: '51px',
                  padding: '12px 20px',
                  borderRadius: '107px',
                  border: '2px solid #2E3192',
                  background: '#FFF',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#2E3192',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2E3192'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.color = '#2E3192'; }}
              >
                View Products
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                  style={{ background: '#fff', border: '1.5px solid #2E3192' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
