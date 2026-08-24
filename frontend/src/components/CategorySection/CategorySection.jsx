import React, { useState, useRef, useEffect, useCallback } from 'react';
import imgBodyCare1 from '../../assets/sunscreen.png';
import imgKitchenCare from '../../assets/cleaner.png';
import imgGlassCleaner from '../../assets/shampoo.png';
import imgBodyCare2 from '../../assets/eyeshadow.png';
import imgFaceCare from '../../assets/shaving.png';

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const CATEGORIES = [
  { name: 'Body Care', image: imgBodyCare1 },
  { name: 'Kitchen Care', image: imgKitchenCare },
  { name: 'Glass Cleaner', image: imgGlassCleaner },
  { name: 'Body Care', image: imgBodyCare2 },
  { name: 'Face Care', image: imgFaceCare },
  { name: 'Ludary Powder', image: imgBodyCare2 },
  { name: 'Hair Care', image: imgFaceCare },
  { name: 'Oral Hygiene', image: imgGlassCleaner },
  { name: 'Sun Protection', image: imgFaceCare },
  { name: 'Glass Cleaner', image: imgGlassCleaner },
  { name: 'Body Care', image: imgBodyCare1 },
  { name: 'Kitchen Care', image: imgKitchenCare },
  { name: 'Ludary Powder', image: imgBodyCare2 },
  { name: 'Oral Hygiene', image: imgGlassCleaner },
  { name: 'Hair Care', image: imgFaceCare },
  { name: 'Hair Care', image: imgFaceCare },
  { name: 'Sun Protection', image: imgFaceCare },
  { name: 'Face Care', image: imgBodyCare2 },
];

const CursiveUnderline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="172"
    height="24"
    viewBox="0 0 172 24"
    fill="none"
    aria-hidden="true"
    style={{ display: 'block', margin: '8px auto 0' }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30161 52.2131 7.71489 50.3663 9.83612C49.646 10.6617 49.2582 11.4887 49.245 13.1143Z" fill="#CCA466"/>
  </svg>
);

const CategorySection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const getItemsPerPage = useCallback(() => {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 1023) return 3;
    return 5;
  }, []);

  const getPageCount = useCallback(() => {
    return Math.max(1, Math.ceil(CATEGORIES.length / getItemsPerPage()));
  }, [getItemsPerPage]);

  useEffect(() => {
    setPageCount(getPageCount());
    const handleResize = () => {
      setPageCount(getPageCount());
      setActiveIndex(0);
      const el = scrollRef.current;
      if (el) el.scrollTo({ left: 0, behavior: 'smooth' });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getPageCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const itemsPerPage = getItemsPerPage();
      const gap = 28;
      const itemWidth = (el.clientWidth - gap * (itemsPerPage - 1)) / itemsPerPage;
      const scrollPerPage = (itemWidth + gap) * itemsPerPage;
      const idx = Math.round(el.scrollLeft / scrollPerPage);
      setActiveIndex(Math.min(idx, pageCount - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [pageCount, getItemsPerPage]);

  const scrollToPage = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const itemsPerPage = getItemsPerPage();
    const gap = 28;
    const itemWidth = (el.clientWidth - gap * (itemsPerPage - 1)) / itemsPerPage;
    const scrollPerPage = (itemWidth + gap) * itemsPerPage;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.min(i * scrollPerPage, max), behavior: 'smooth' });
    setActiveIndex(i);
  };

  return (
    <section
      id="shop-by-category"
      aria-label="Shop by Category"
      className="w-full py-[85px] box-border max-sm:py-10"
      style={{ background: '#f5f0e4' }}
    >
      <div className="px-[125px] max-lg:px-8 max-sm:px-5">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: '12px', fontWeight: 600, color: '#e0912f', letterSpacing: '3.5px', textTransform: 'uppercase' }}>
            SHOP BY CATEGORY
          </p>
          <h2 style={{ margin: '6px 0 0', fontFamily: FONT_TITLE, fontSize: 'clamp(26px, 3.2vw, 34px)', fontWeight: 700, color: '#2e3192', lineHeight: 1.25 }}>
            Curated Collections For Every Routine
          </h2>
          <CursiveUnderline />
          <p style={{ margin: '12px auto 0', fontFamily: FONT_BODY, fontSize: 'clamp(13px, 1.4vw, 14.5px)', color: '#666', lineHeight: 1.7, maxWidth: '620px' }}>
            Discover premium beauty solutions organized by category, making it effortless to find
            products tailored to your unique skincare journey.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="hide-scrollbar"
          style={{
            display: 'flex', gap: '28px', overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
            paddingBottom: '10px',
          }}
        >
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="cat-item" style={{ flexShrink: 0, scrollSnapAlign: 'start' }}>
            <div
              className="cat-card"
              style={{
                background: '#fff', borderRadius: '16px', padding: '16px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)', cursor: 'pointer',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '10px', overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.name} className="cat-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="cat-overlay"
                  style={{
                    position: 'absolute', inset: 0, background: 'rgba(46,49,146,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                  <span className="cat-arrow"
                    style={{
                      width: '48px', height: '48px', borderRadius: '50%', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                    }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2.2" width="22" height="22">
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <p style={{
              margin: '18px 0 0', textAlign: 'center', fontFamily: FONT_TITLE,
              fontSize: '17px', fontWeight: 600, color: '#2E3192',
            }}>
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      <div className="cat-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        <button
          onClick={() => scrollToPage(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #2E3192',
            background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: activeIndex === 0 ? 'default' : 'pointer',
            opacity: activeIndex === 0 ? 0.35 : 1, transition: 'opacity 0.2s', color: '#2E3192', flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap', overflow: 'hidden' }}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              style={{
                width: i === activeIndex ? '32px' : '10px', height: '10px', borderRadius: '5px',
                background: i === activeIndex ? '#2E3192' : '#C9CBEC',
                border: 'none', flexShrink: 0,
                cursor: 'pointer', transition: 'all 0.3s', padding: 0, boxSizing: 'border-box',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToPage(Math.min(pageCount - 1, activeIndex + 1))}
          disabled={activeIndex === pageCount - 1}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #2E3192',
            background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: activeIndex === pageCount - 1 ? 'default' : 'pointer',
            opacity: activeIndex === pageCount - 1 ? 0.35 : 1, transition: 'opacity 0.2s', color: '#2E3192', flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .cat-card { transition: box-shadow .25s ease; }
        .cat-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
        .cat-image { transition: transform .45s ease; }
        .cat-card:hover .cat-image { transform: translateY(-8px) scale(1.08); }
        .cat-card .cat-overlay { opacity: 0; transition: opacity .3s ease; }
        .cat-card:hover .cat-overlay { opacity: 1; }
        .cat-card .cat-arrow { opacity: 0; transform: translateY(10px); transition: opacity .3s ease, transform .3s ease; }
        .cat-card:hover .cat-arrow { opacity: 1; transform: translateY(0); }
        .cat-item { width: calc((100% - 112px) / 5); min-width: 210px; }
        @media (max-width: 1023px) { .cat-item { width: calc((100% - 56px) / 3); min-width: 170px; } }
        @media (max-width: 600px) { .cat-item { width: calc(100% - 20px); min-width: 0; } }
      `}</style>
    </section>
  );
};

export default CategorySection;
