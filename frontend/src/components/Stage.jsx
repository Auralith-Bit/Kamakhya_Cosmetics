import React, { useEffect, useState, useRef, useCallback } from "react";

export const DESIGN_WIDTH = 1920;

/* ───────── Stage (responsive scaler) ───────── */
const Stage = ({ height, id, className = "", style, breakpoint = 1024, children }) => {
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : DESIGN_WIDTH
  );

  useEffect(() => {
    let raf;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVw(window.innerWidth));
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const desktop = vw >= breakpoint;
  const scale = vw / DESIGN_WIDTH;

  return (
    <section
      id={id}
      className={className}
      style={desktop ? { ...style, height: Math.round(height * scale) } : style}
    >
      {desktop ? (
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: DESIGN_WIDTH,
            height,
            position: "relative",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

/* ───────── Data ───────── */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mirana Marci",
    role: "3D Designer",
    avatar: "‍🦱",
    avatarBg: "#C8F0C8",
    text: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.",
  },
  {
    id: 2,
    name: "Crystal Maiden",
    role: "UI/UX Designer",
    avatar: "👩‍🎨",
    avatarBg: "#B8E0F0",
    text: "This UI Kit is incredibly helpful for my design process. The icons and illustrations are clean, modern, and save me a lot of time. It's perfect for beginners and professionals alike.",
  },
  {
    id: 3,
    name: "Hearts of Taras",
    role: "Logo Designer",
    avatar: "",
    avatarBg: "#D8C8F0",
    text: "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects, especially modern UI designs. It makes everything look polished and user-friendly.",
  },
  {
    id: 4,
    name: "Alex Rivera",
    role: "Brand Strategist",
    avatar: "👨💼",
    avatarBg: "#F0D8C8",
    text: "The branding assets in this kit elevated our entire visual identity. Clients noticed the difference immediately. Truly a game-changer for our agency.",
  },
  {
    id: 5,
    name: "Sophie Laurent",
    role: "Motion Designer",
    avatar: "👩‍🦰",
    avatarBg: "#F0C8D8",
    text: "Every animation preset feels handcrafted. The easing curves are spot-on and the timing is cinematic. I've never saved this much time on motion projects.",
  },
  {
    id: 6,
    name: "Daniel Kim",
    role: "Frontend Dev",
    avatar: "👨‍💻",
    avatarBg: "#C8D8F0",
    text: "Clean component architecture, well-documented props, and zero bloat. Integrating this into our React stack was seamless. Highly recommended for dev teams.",
  },
  {
    id: 7,
    name: "Priya Sharma",
    role: "Product Manager",
    avatar: "👩‍",
    avatarBg: "#D8F0C8",
    text: "Our design-to-dev handoff improved dramatically. The design tokens and component library kept everyone aligned. Shipping features feels effortless now.",
  },
  {
    id: 8,
    name: "Marcus Chen",
    role: "Illustrator",
    avatar: "🧑‍🎨",
    avatarBg: "#F0E8C8",
    text: "The illustration pack is a treasure trove. Consistent style, scalable vectors, and a huge variety of scenes. It's become my go-to reference library.",
  },
  {
    id: 9,
    name: "Elena Volkov",
    role: "UX Researcher",
    avatar: "👩‍",
    avatarBg: "#E8C8F0",
    text: "The usability testing templates saved us weeks of setup. Clear structure, thoughtful prompts, and beautiful reporting layouts. A must-have for research teams.",
  },
  {
    id: 10,
    name: "James O'Brien",
    role: "Creative Director",
    avatar: "‍🦳",
    avatarBg: "#C8F0E8",
    text: "This kit respects the craft. Every pixel feels intentional. It's rare to find a resource this comprehensive that still maintains such high quality throughout.",
  },
  {
    id: 11,
    name: "Aisha Patel",
    role: "Web Developer",
    avatar: "👩‍",
    avatarBg: "#F0C8E8",
    text: "Responsive out of the box, accessible by default, and the code is a joy to read. Our Lighthouse scores jumped 20 points after switching to this kit.",
  },
  {
    id: 12,
    name: "Tom Nakamura",
    role: "Design Lead",
    avatar: "🧑‍💼",
    avatarBg: "#C8E8F0",
    text: "We rolled this out across three product teams. Consistency improved overnight and onboarding new designers became significantly faster. Worth every penny.",
  },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);

/* ───────── Star Rating ───────── */
const Stars = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: 4 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C9A96E">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

/* ───────── Quote Icon ───────── */
const QuoteIcon = () => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
    <path
      d="M14.4 0C6.45 0 0 6.45 0 14.4V36H14.4V21.6H7.2C7.2 13.65 13.65 7.2 21.6 7.2V0H14.4ZM43.2 0C35.25 0 28.8 6.45 28.8 14.4V36H43.2V21.6H36C36 13.65 42.45 7.2 50.4 7.2V0H43.2Z"
      fill="#C4B5E3"
    />
  </svg>
);

/* ───────── Decorative Swirl ───────── */
const Swirl = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
    <path
      d="M10 22C10 22 20 10 35 14C50 18 45 28 60 26C75 24 70 12 85 14C100 16 95 24 110 22"
      stroke="#C9A96E"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M30 18C30 18 35 12 42 14C49 16 47 22 54 20"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M75 18C75 18 80 12 87 14C94 16 92 22 99 20"
      stroke="#C9A96E"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/* ───────── Testimonial Card ───────── */
const TestimonialCard = ({ data }) => (
  <div
    style={{
      flex: "0 0 calc((100% - 48px) / 3)",
      background: "#FFFFFF",
      borderRadius: 16,
      padding: "36px 32px 32px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      border: "1px solid rgba(0,0,0,0.04)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
    }}
  >
    {/* Header: quote + stars */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 20,
      }}
    >
      <QuoteIcon />
      <Stars count={5} />
    </div>

    {/* Text */}
    <p
      style={{
        fontSize: 16,
        lineHeight: 1.7,
        color: "#2D2D3A",
        margin: 0,
        flex: 1,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {data.text}
    </p>

    {/* Divider */}
    <div
      style={{
        height: 1,
        background: "linear-gradient(90deg, #E8E4F0 0%, transparent 100%)",
        margin: "24px 0 20px",
      }}
    />

    {/* Author */}
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: data.avatarBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          flexShrink: 0,
        }}
      >
        {data.avatar}
      </div>
      <div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#1A1A2E",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#7A7A8E",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {data.role}
        </div>
      </div>
    </div>
  </div>
);

/* ───────── Navigation Arrow ───────── */
const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={`${direction === "prev" ? "Previous" : "Next"} testimonials`}
    style={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      border: "2px solid #3D3D6B",
      background: "transparent",
      cursor: disabled ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: disabled ? 0.35 : 1,
      transition: "all 0.25s ease",
      flexShrink: 0,
    }}
    onMouseEnter={(e) => {
      if (!disabled) {
        e.currentTarget.style.background = "#3D3D6B";
        e.currentTarget.style.color = "#fff";
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#3D3D6B";
    }}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={disabled ? "#999" : "#3D3D6B"}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "prev" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  </button>
);

/* ───────── Dot Indicator ───────── */
const Dot = ({ active, onClick }) => (
  <button
    onClick={onClick}
    aria-label={`Go to page`}
    style={{
      width: active ? 40 : 16,
      height: 10,
      borderRadius: 5,
      border: "none",
      background: active ? "#3D3D6B" : "#C4B5E3",
      cursor: "pointer",
      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      padding: 0,
    }}
  />
);

/* ───────── Main Testimonials Section ───────── */
const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const trackRef = useRef(null);

  const goToPage = useCallback(
    (page) => {
      if (isAnimating || page === currentPage) return;
      setDirection(page > currentPage ? "next" : "prev");
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentPage(page);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [isAnimating, currentPage]
  );

  const next = () => goToPage((currentPage + 1) % TOTAL_PAGES);
  const prev = () => goToPage((currentPage - 1 + TOTAL_PAGES) % TOTAL_PAGES);

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [currentPage]);

  const visibleCards = TESTIMONIALS.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <Stage height={720} id="testimonials" style={{ background: "#FAF8F3" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 120px 0",
          boxSizing: "border-box",
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 3,
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Client Testimonials
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#2D2D5E",
              margin: "0 0 8px",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: -0.5,
            }}
          >
            Trusted By Brands Worldwide
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Swirl />
          </div>
          <p
            style={{
              fontSize: 17,
              color: "#6B6B7B",
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Hear from businesses that rely on our expertise, premium formulations,
            and manufacturing excellence to bring exceptional beauty products to
            market.
          </p>
        </div>

        {/* Cards Track */}
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            flex: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? direction === "next"
                  ? "translateX(-30px)"
                  : "translateX(30px)"
                : "translateX(0)",
            }}
          >
            {visibleCards.map((card) => (
              <TestimonialCard key={card.id} data={card} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: "32px 0 48px",
          }}
        >
          <ArrowButton direction="prev" onClick={prev} disabled={isAnimating} />

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <Dot key={i} active={i === currentPage} onClick={() => goToPage(i)} />
            ))}
          </div>

          <ArrowButton direction="next" onClick={next} disabled={isAnimating} />
        </div>
      </div>
    </Stage>
  );
};

export default TestimonialsSection;