import { Leaf, Droplets, FlaskConical, Sparkles, Crown } from "lucide-react";
import whychooseus from "../../assets/whychooseus.svg";
import Curve from "../../assets/Curve.svg";

const RabbitIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 18c-2 0-4-1-4-3 0-1.5 1-2.5 2-3 .5-.25 1-.5 1-1.5V8c0-1.5 1-3 2.5-3S16 6.5 16 8v2.5c0 1 .5 1.25 1 1.5 1 .5 2 1.5 2 3 0 2-2 3-4 3" />
        <path d="M9 5c0-2 1-3 2-3" />
        <path d="M15 5c0-2-1-3-2-3" />
        <circle cx="10" cy="13" r="0.5" fill="currentColor" />
        <circle cx="14" cy="13" r="0.5" fill="currentColor" />
    </svg>
);

const WhyRoyalLuxury = () => {
    const leftCards = [
        {
            icon: <Leaf className="w-7 h-7 text-[#C9A96E]" />,
            title: "Premium Ingredients",
            desc: "Carefully selected for maximum effectiveness.",
        },
        {
            icon: <Droplets className="w-7 h-7 text-[#C9A96E]" />,
            title: "Dermatologist Tested",
            desc: "Safe for all skin types, even sensitive skin.",
        },
        {
            icon: <RabbitIcon className="w-7 h-7 text-[#C9A96E]" />,
            title: "Cruelty Free",
            desc: "Beauty that's kind to animals",
        },
    ];

    const rightCards = [
        {
            icon: <FlaskConical className="w-7 h-7 text-[#C9A96E]" />,
            title: "Advanced Formulas",
            desc: "Backed by science and innovation.",
        },
        {
            icon: <Sparkles className="w-7 h-7 text-[#C9A96E]" />,
            title: "Visible Results",
            desc: "Real results you can see and feel.",
        },
        {
            icon: <Crown className="w-7 h-7 text-[#C9A96E]" />,
            title: "Luxury Experience",
            desc: "Indulge in elegance every day.",
        },
    ];

    // Reusable card for Tablet/Mobile layouts
    const Card = ({ card }) => (
        <div className="w-full bg-white rounded-lg border border-[#EFE8DC] shadow-[0_12px_30px_rgba(0,0,0,0.10)] flex items-center px-5 py-4 gap-5">
            <div className="shrink-0 w-16 h-16 rounded-full border border-[#E8DCC8] flex items-center justify-center bg-[#FFFDF9] text-[#C9A96E]">
                {card.icon}
            </div>
            <div>
                <h3 className="text-brand-blue font-serif font-bold text-[17px] leading-tight mb-1">
                    {card.title}
                </h3>
                <p className="text-[#4A4A4A] text-[14px] leading-[1.4]">
                    {card.desc}
                </p>
            </div>
        </div>
    );

    return (
        <section className="bg-[#FCF9F2] px-4 py-[48px] sm:px-6 sm:py-[56px] lg:px-8 lg:py-[62px] overflow-hidden">
            <div className="max-w-[1600px] mx-auto">

             {/* Top Section  */}
                <div className="text-center max-w-225 mx-auto mb-8">
                    <p className="text-hero-orange text-[15px] font-bold tracking-[0.14em] uppercase ">
                        WHY CHOOSE ROYAL LUXURY
                    </p>
                    <h2 className="text-brand-blue font-serif font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-tight">
                        Luxury That Complements Your Beauty
                    </h2>
                    <div className="flex justify-center mb-4">
                        <img src={Curve} alt="curve" className="w-32" />
                    </div>
                    <p className="text-[#666] text-[15px] sm:text-[17px] leading-[1.45] max-w-220 mx-auto">
                        Explore premium makeup, skincare, haircare, and beauty
                        essentials created to bring quality, care, and confidence
                        to your everyday routine.
                    </p>
                </div>

                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden xl:block">
                    {/* Aspect ratio ensures SVG and cards scale perfectly together on all desktop sizes */}
                    <div className="relative mx-auto w-full max-w-345 aspect-1380/620">
                        
                        {/* BACKGROUND IMAGE LAYER (z-0) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36%] h-[80%] z-0 flex items-center justify-center">
                            <img
                                src={whychooseus}
                                alt="Royal Luxury Radiance Serum"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* CONNECTOR LINES LAYER (z-10) */}
                           <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-10"
                            viewBox="0 0 1380 620"
                            preserveAspectRatio="none"
                        >
                            {/* LEFT TOP */}
                            <path d="M365 155 H450 L490 185" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="490" cy="185" r="6" fill="#E38F2E" />

                            {/* LEFT MIDDLE */}
                            <path d="M365 310 H470" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="470" cy="310" r="6" fill="#E38F2E" />

                            {/* LEFT BOTTOM */}
                            <path d="M365 465 H450 L510 405" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="510" cy="405" r="6" fill="#E38F2E" />

                            {/* RIGHT TOP */}
                            <path d="M1015 155 H930 L890 185" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="890" cy="185" r="6" fill="#E38F2E" />

                            {/* RIGHT MIDDLE */}
                            <path d="M1015 310 H910" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="910" cy="310" r="6" fill="#E38F2E" />

                            {/* RIGHT BOTTOM — Fixed: Changed M915 to M1015 to match left side symmetry */}
                            <path d="M1015 465 H930 L870 405" stroke="#E38F2E" strokeWidth="2.2" fill="none" />
                            <circle cx="870" cy="405" r="6" fill="#E38F2E" />
                        </svg>

                        {/* ================= LEFT CARDS (z-20) ================= */}
                        {/* Positioned using percentages to perfectly match SVG coordinates at any scale */}
                        <div className="absolute left-[3%] top-[15%] w-[24%] z-20 flex flex-col">
                            {leftCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full bg-white rounded-lg border border-[#EDE6DA] shadow-[0_10px_25px_rgba(0,0,0,0.10)] flex items-center px-4 py-9 gap-4 mb-[6%] last:mb-0"
                                >
                                    <div className="shrink-0 w-12 h-12 xl:w-16 xl:h-16 rounded-full border border-[#E8DCC8] bg-[#FFFDF9] flex items-center justify-center text-[#C9A227]">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-brand-blue font-serif font-bold text-sm xl:text-[17px] leading-tight mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#4A4A4A] text-[11px] xl:text-[14px] leading-[1.4]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ================= RIGHT CARDS (z-20) ================= */}
                        <div className="absolute left-[72.5%] top-[15%] w-[24%] z-20 flex flex-col">
                            {rightCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full bg-white rounded-lg border border-[#EDE6DA] shadow-[0_10px_25px_rgba(0,0,0,0.10)] flex items-center px-4 py-9 gap-4 mb-[6%] last:mb-0"
                                >
                                    <div className="shrink-0 w-12 h-12 xl:w-16 xl:h-16 rounded-full border border-[#E8DCC8] bg-[#FFFDF9] flex items-center justify-center text-[#C9A227]">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-brand-blue font-serif font-bold text-sm xl:text-[17px] leading-tight mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#4A4A4A] text-[11px] xl:text-[14px] leading-[1.4]">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* ================= TABLET ================= */}
                <div className="hidden md:block xl:!hidden">
                    <div className="mx-auto flex max-w-[720px] flex-col items-center gap-7">
                        {leftCards.map((card, index) => (
                            <Card key={index} card={card} />
                        ))}
                        <img
                            src={whychooseus}
                            alt="Royal Luxury Radiance Serum"
                            className="w-full max-w-125 h-auto object-contain"
                        />
                        {rightCards.map((card, index) => (
                            <Card key={index} card={card} />
                        ))}
                    </div>
                </div>

                {/* ================= MOBILE ================= */}
                <div className="md:hidden">
                    <div className="flex flex-col items-center gap-5">
                        {leftCards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-lg p-4 sm:p-5 flex items-center gap-4 border border-[#EFE8DC] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-full border border-[#E8DCC8] flex items-center justify-center bg-[#FFFDF9] text-[#C9A96E]">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-brand-blue font-serif font-bold text-base mb-1">{card.title}</h3>
                                    <p className="text-[#555] text-sm leading-snug">{card.desc}</p>
                                </div>
                            </div>
                        ))}

                        <img
                            src={whychooseus}
                            alt="Royal Luxury Radiance Serum"
                            className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain my-4"
                        />

                        {rightCards.map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white rounded-lg p-4 sm:p-5 flex items-center gap-4 border border-[#EFE8DC] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-full border border-[#E8DCC8] flex items-center justify-center bg-[#FFFDF9] text-[#C9A96E]">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-brand-blue font-serif font-bold text-base mb-1">{card.title}</h3>
                                    <p className="text-[#555] text-sm leading-snug">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyRoyalLuxury;
