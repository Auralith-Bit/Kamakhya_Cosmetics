import React, { useState, useRef, useEffect } from 'react';

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const TESTIMONIALS = [
  { name: 'Mirana Marci', role: '3D Designer', text: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.", color: '#4a90d9' },
  { name: 'Crystal Maiden', role: 'UIUX Designer', text: "This UI Kit is incredibly helpful for my design process. The icons and illustrations are clean, modern, and save me a lot of time. It's perfect for beginners and professionals alike.", color: '#7b68ee' },
  { name: 'Hearts of Taras', role: 'Logo Designer', text: "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects, especially modern UI designs. It makes everything look polished and user-friendly.", color: '#2E3192' },
  { name: 'Aria Blackwood', role: 'Brand Strategist', text: "The quality of these formulations is outstanding. Our brand launched with Kamakhya's help and the results exceeded every expectation. Truly world-class manufacturing.", color: '#1a5c2a' },
  { name: 'Sophia Laurent', role: 'Product Manager', text: "Working with Kamakhya has been seamless. Their attention to detail in every product batch is remarkable. We've seen a 40% increase in customer satisfaction since switching.", color: '#c9a24b' },
  { name: 'Elena Vasquez', role: 'Retail Owner', text: "The distributor support program is incredible. From pricing to marketing materials, everything is designed to help your business grow. Best partnership decision we made.", color: '#8b5cf6' },
  { name: 'Priya Sharma', role: 'Beauty Blogger', text: "I've tried hundreds of products, and Kamakhya's formulations stand out. The ingredients are pure, the packaging is premium, and the results speak for themselves.", color: '#e0912f' },
  { name: 'Luna Chen', role: 'E-commerce Director', text: "Our online sales tripled after adding Kamakhya products to our catalog. The quality consistency across batches makes inventory management effortless.", color: '#2563eb' },
  { name: 'Olivia Bennett', role: 'Spa Director', text: "Kamakhya's private label service transformed our spa brand. From concept to shelf in 90 days — the speed and quality are unmatched in the industry.", color: '#dc2626' },
  { name: 'Fatima Al-Rashid', role: 'Wholesale Distributor', text: "Reliable supply chain, competitive pricing, and products that practically sell themselves. Kamakhya has been our go-to manufacturing partner for 3 years now.", color: '#059669' },
  { name: 'Nina Kowalski', role: 'Cosmetics Chemist', text: "The R&D team at Kamakhya is exceptional. They helped us develop a revolutionary serum formula that's now our best-selling product across 12 countries.", color: '#7c3aed' },
  { name: 'Harper Quinn', role: 'Startup Founder', text: "As a first-time founder, I needed a partner who could guide me through every step. Kamakhya's team was patient, professional, and delivered beyond my vision.", color: '#0891b2' },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="#d4c9a8" width="28" height="28" style={{ opacity: 0.5 }}>
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const Stars = () => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="#CCA466" width="14" height="14">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

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
    <path fillRule="evenodd" clipRule="evenodd" d="M45.8439 14.1335C38.4543 16.3024 29.9227 18.4608 21.7152 18.9997C14.7002 19.4597 7.92427 18.7452 2.37809 15.7053C1.59628 15.2773 0.61724 15.5716 0.194429 16.3637C-0.229027 17.1551 0.0622971 18.1463 0.844111 18.575C6.89431 21.8902 14.2716 22.7574 21.9234 22.255C30.2784 21.7069 38.9641 19.5341 46.5019 17.3339C47.3765 19.1276 49.1877 20.7999 52.3781 22.0337C57.2785 23.9292 63.9693 23.9057 71.0179 22.8376C81.2408 21.2892 92.2377 17.5969 99.3082 14.9733C99.5982 14.8662 100.03 14.696 100.559 14.4715C100.72 14.8317 100.9 15.1866 101.1 15.5351C102.834 18.5717 105.902 21.027 109.028 21.9039C128.853 27.4643 151.992 20.8019 170.832 15.3797C171.682 15.1338 172.179 14.2308 171.94 13.3649C171.695 12.4991 170.806 11.996 169.949 12.242C151.638 17.5127 129.156 24.1628 109.885 18.7596C107.513 18.0941 105.206 16.2071 103.891 13.9025C103.743 13.6455 103.614 13.3825 103.491 13.1157C106.089 11.8127 109.144 9.99615 110.787 8.05176C112.476 6.05844 112.895 3.9307 111.425 1.92106C110.162 0.203083 108.248 0.0569249 106.256 0.94756C104.11 1.90149 101.899 4.13163 101.184 5.17821C99.8431 7.13304 99.4178 9.25362 99.6627 11.3213C99.0311 11.5915 98.518 11.7924 98.2016 11.9099C91.2858 14.4754 80.5369 18.0967 70.5409 19.6111C64.1092 20.5859 57.9997 20.7157 53.5279 18.9867C51.6208 18.2487 50.3607 17.3875 49.6768 16.3879C51.0265 15.9794 52.3278 15.5775 53.5711 15.1938C56.03 14.435 61.1495 13.179 64.8072 10.9403C67.716 9.16033 69.6882 6.73897 69.5735 3.70364C69.5149 2.14421 68.6234 1.10348 67.2048 0.520167C65.085 -0.350894 61.4189 0.0705989 60.0538 0.364215C55.9133 1.25289 50.3871 4.93159 47.6531 9.0768C46.5619 10.7308 45.9128 12.4612 45.8439 14.1335ZM49.245 13.1143C50.4148 12.7581 51.5454 12.4083 52.6314 12.073C54.9266 11.3644 59.7244 10.2388 63.1398 8.1483C64.9483 7.04169 66.425 5.71587 66.3534 3.82825C66.3476 3.68144 66.2039 3.63969 66.0769 3.57966C65.8803 3.48766 65.6554 3.42436 65.4156 3.37477C63.7933 3.03939 61.6142 3.36366 60.7222 3.55549C57.2481 4.30127 52.6269 7.41035 50.333 10.8887C49.8483 11.6234 49.4622 12.3718 49.245 13.1143ZM102.847 9.81932C104.361 9.03047 105.947 8.07653 107.197 7.03844C107.861 6.48709 108.422 5.92011 108.776 5.33157C109.073 4.84482 109.189 4.34629 108.834 3.86476C108.693 3.66967 108.48 3.66578 108.261 3.70232C108.029 3.74147 107.79 3.82497 107.552 3.93262C105.979 4.63339 104.355 6.27047 103.833 7.03844C103.221 7.92907 102.918 8.87127 102.847 9.81932Z" fill="#CCA466" />
  </svg>
);

const CARDS_PER_PAGE = 3;
const GAP = 28;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);

const TestimonialCard = ({ name, role, text, color }) => (
  <div
    style={{
      flexShrink: 0,
      width: `calc((100% - ${(CARDS_PER_PAGE - 1) * GAP}px) / ${CARDS_PER_PAGE})`,
      background: '#fff',
      borderRadius: '14px',
      padding: '28px 28px 24px',
      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
    }}
  >
    {/* Top row: quote + stars */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
      <QuoteIcon />
      <Stars />
    </div>

    {/* Testimonial text */}
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '14px',
      lineHeight: 1.7,
      color: '#333',
      margin: 0,
      flex: 1,
    }}>
      {text}
    </p>

    {/* Divider */}
    <div style={{ width: '100%', height: '1px', background: '#e8e8e8', margin: '20px 0' }} />

    {/* User row */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: FONT_BODY,
        fontSize: '15px',
        fontWeight: 700,
        flexShrink: 0,
      }}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: '14px', fontWeight: 600, color: '#222' }}>{name}</p>
        <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: '12.5px', color: '#888' }}>{role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollToX = index * container.clientWidth;
    container.scrollTo({ left: scrollToX, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const scrollLeft = () => scrollTo(Math.max(0, activeIndex - 1));
  const scrollRight = () => scrollTo(Math.min(TOTAL_PAGES - 1, activeIndex + 1));

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const idx = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(Math.min(idx, TOTAL_PAGES - 1));
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="w-full py-[85px] box-border max-sm:py-10"
      style={{ background: '#f5f0e4' }}
    >
      <div className="px-[125px] max-lg:px-8 max-sm:px-5">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            margin: 0, fontFamily: FONT_BODY, fontSize: '12px', fontWeight: 600,
            color: '#E38F2E', letterSpacing: '3.5px', textTransform: 'uppercase',
          }}>
            CLIENT TESTIMONIALS
          </p>
          <h2 style={{
            margin: '6px 0 0', fontFamily: FONT_TITLE, fontSize: 'clamp(26px, 3.2vw, 34px)',
            fontWeight: 700, color: '#2e3192', lineHeight: 1.25,
          }}>
            Trusted By Brands Worldwide
          </h2>
          <CursiveUnderline />
          <p style={{
            margin: '12px auto 0', fontFamily: FONT_BODY, fontSize: 'clamp(13px, 1.2vw, 15px)',
            color: '#555', lineHeight: 1.7, maxWidth: '620px',
          }}>
            Hear from businesses that rely on our expertise, premium formulations, and manufacturing
            excellence to bring exceptional beauty products to market.
          </p>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              overflowX: 'hidden',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '8px',
            }}
            className="hide-scrollbar"
          >
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '36px' }}>
            <button onClick={scrollLeft} disabled={activeIndex === 0}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #2E3192', background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: activeIndex === 0 ? 'default' : 'pointer',
                opacity: activeIndex === 0 ? 0.35 : 1,
                transition: 'opacity 0.2s', color: '#2E3192', flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button key={i} onClick={() => scrollTo(i)}
                  style={{
                    width: i === activeIndex ? '32px' : '10px',
                    height: '10px', borderRadius: '5px', border: 'none',
                    background: i === activeIndex ? '#2E3192' : '#C9CBEC',
                    cursor: 'pointer', transition: 'all 0.3s', padding: 0,
                  }}
                />
              ))}
            </div>

            <button onClick={scrollRight} disabled={activeIndex === TOTAL_PAGES - 1}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1.5px solid #2E3192', background: 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: activeIndex === TOTAL_PAGES - 1 ? 'default' : 'pointer',
                opacity: activeIndex === TOTAL_PAGES - 1 ? 0.35 : 1,
                transition: 'opacity 0.2s', color: '#2E3192', flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default TestimonialsSection;
