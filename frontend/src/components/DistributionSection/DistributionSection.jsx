import React from 'react';

const FONT_BODY = "'Poppins', sans-serif";
const FONT_TITLE = "'Playfair Display', 'Playfair', serif";

const CHECK_ITEMS = [
  'Factory-direct wholesale pricing',
  'Premium beauty & cleaning products',
  'Marketing & retailer support',
  'Reliable supply & market growth',
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="2" width="20" height="20" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

const DistributionSection = () => {
  return (
    <section
      id="distribution"
      aria-label="Distribution Partnership"
      className="w-full box-border"
      style={{ background: '#151642' }}
    >
      <div className="px-[125px] max-lg:px-8 max-sm:px-5 grid grid-cols-2 gap-[40px] max-lg:grid-cols-1 max-lg:gap-10 items-center" style={{ paddingTop: '70px', paddingBottom: '70px' }}>

        {/* ── LEFT: Content ── */}
        <div className="flex flex-col" style={{ alignSelf: 'center' }}>
          {/* Label */}
          <span
            style={{
              fontFamily: FONT_BODY,
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#CCA466',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            DISTRIBUTION PARTNERSHIP
          </span>
          <div style={{ width: '42px', height: '2px', background: '#CCA466', marginBottom: '16px' }} />

          {/* Heading */}
          <h2
            style={{
              fontFamily: FONT_TITLE,
              fontSize: 'clamp(26px, 2.2vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.25,
              margin: 0,
              marginBottom: '16px',
              color: '#fff',
            }}
          >
            Build Your Business With Care
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: 'clamp(13px, 0.9vw, 15px)',
              lineHeight: 1.7,
              color: '#b8b8cc',
              margin: 0,
              marginBottom: '30px',
            }}
          >
            Partner with Kamakhya to deliver trusted beauty care and home care products to your
            market.  Enjoy factory-direct pricing, dependable supply, premium quality, and
            dedicated business support to help your distribution network grow.
          </p>

          {/* Check items grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-sm:grid-cols-1">
            {CHECK_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckIcon />
                <span
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '13.5px',
                    fontWeight: 400,
                    color: '#ddd',
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Apply Card ── */}
        <div
          style={{
            width: 'calc(100% - 40px)',
            justifySelf: 'end',
            alignSelf: 'center',
            background: '#fff',
            borderRadius: '14px',
            padding: '40px 36px',
            border: '1.5px solid #CCA466',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}
        >
          {/* Card heading */}
          <h3
            style={{
              fontFamily: FONT_TITLE,
              fontSize: 'clamp(22px, 1.8vw, 30px)',
              fontWeight: 700,
              color: '#2E3192',
              lineHeight: 1.3,
              margin: 0,
              marginBottom: '14px',
            }}
          >
            Apply To Become A Partner
          </h3>

          {/* Card description */}
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#666',
              margin: 0,
              marginBottom: '28px',
            }}
          >
            Join Kamakhya's growing network of distributors and retailers.
            Share your territory, sales channel, and expected volume, and
            our partnership team will guide your onboarding.
          </p>

          {/* Become Distributor button */}
          <button
            style={{
              width: '100%',
              padding: '14px 0',
              borderRadius: '8px',
              border: 'none',
              background: '#2E3192',
              color: '#fff',
              fontFamily: FONT_BODY,
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '14px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#252775'}
            onMouseLeave={e => e.currentTarget.style.background = '#2E3192'}
          >
            Become Distributor
          </button>

          {/* Request Bulk Quote button */}
          <button
            style={{
              width: '100%',
              padding: '14px 0',
              borderRadius: '8px',
              border: '1.5px solid #2E3192',
              background: 'transparent',
              color: '#2E3192',
              fontFamily: FONT_BODY,
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2E3192'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2E3192'; }}
          >
            REQUEST BULK QUOTE
          </button>

          {/* Note */}
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: '12px',
              lineHeight: 1.6,
              color: '#888',
              margin: '18px 0 0',
            }}
          >
            • For trade enquiries only. Product pricing is provided through formal
            quotation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DistributionSection;
