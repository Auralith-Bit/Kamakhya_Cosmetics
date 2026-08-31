import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  Sparkle,
} from "lucide-react";

import radiance from "../../assets/radiance-serum.svg";
import lipstick from "../../assets/lipstick.svg";
import Curve from "../../assets/Curve.svg";
import { Link } from "react-router-dom";

const SignatureCollection = () => {
  const signatures = [
    {
      category: "Skincare",
      name: "Radiance Renewal Serum",
      tag: "SKIN CARE",
      image: radiance,
      description:
        "A lightweight brightening serum with stabilised vitamin C and botanical extracts for visibly even, luminous skin.",
      notes: [
        "Stabilised vitamin C complex",
        "Dermatologically tested",
        "Fragrance-free formulation",
        "Glass bottle with gold collar",
      ],
      moq: "500 units",
      leadTime: "10–15 days",
    },
    {
      category: "Haircare",
      name: "Soothing Aloe Gel",
      tag: "HAIR CARE",
      image: lipstick,
      description:
        "A calming aloe-based gel that soothes the scalp while nourishing hair from root to tip.",
      notes: [
        "99% pure aloe vera",
        "Dermatologically tested",
        "Sulfate-free formulation",
        "Recyclable glass jar",
      ],
      moq: "500 units",
      leadTime: "10–15 days",
    },
    {
      category: "Lipcare",
      name: "Hydrating Balance Cream",
      tag: "LIP CARE",
      image: lipstick,
      description:
        "A nourishing cream enriched with botanical extracts that helps maintain soft, hydrated skin.",
      notes: [
        "Shea butter enriched",
        "Dermatologically tested",
        "Fragrance-free formulation",
        "Travel-friendly glass tin",
      ],
      moq: "500 units",
      leadTime: "10–15 days",
    },
    {
      category: "Skincare",
      name: "Night Repair Elixir",
      tag: "SKIN CARE",
      image: lipstick,
      description:
        "A lightweight overnight elixir formulated with botanical extracts to support a refreshed, luminous complexion.",
      notes: [
        "Botanical extract blend",
        "Fragrance-free formulation",
        "Glass bottle with gold collar",
        "Night-use formulation",
      ],
      moq: "500 units",
      leadTime: "10–15 days",
    },
    {
      category: "Skincare",
      name: "Vitamin C Glow Drops",
      tag: "SKIN CARE",
      image: lipstick,
      description:
        "Concentrated vitamin C drops that brighten dull skin and even out tone with daily use.",
      notes: [
        "Vitamin C formula",
        "Dermatologically tested",
        "Fragrance-free formulation",
        "Easy-to-use dropper bottle",
      ],
      moq: "500 units",
      leadTime: "10-15 days",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = signatures[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? signatures.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === signatures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="page-container section-spacing">
      {/* Top-Section */}
      <div className="text-center mb-2 flex flex-col">
        <p className="text-hero-orange text-xs font-poppins leading-relaxed font-semibold tracking-wide mb-2">
          OUR SIGNATURE COLLECTION
        </p>

        <h2 className="text-2xl sm:text-3xl font-serif text-brand-blue mb-2">
          Beauty, Perfected With Luxury
        </h2>
        <img className="h-5" src={Curve} alt="" />

        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          A curated selection of luxurious beauty essentials designed
          to nourish, enhance, and celebrate your natural beauty every day.
        </p>
      </div>

      {/* BottomSection */}
      <div className="border border-gray-200 rounded-lg bg-[#faf6ee] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 sm:p-6">
          {/* Left  */}
          <div className="md:border-r border-gray-200 md:pr-4">
            <p className="text-orange-400 text-xs font-semibold tracking-wide mb-1">
              Collection Directory
            </p>

            <h3 className="text-lg font-serif text-brand-blue mb-4">
              {String(signatures.length).padStart(2, "0")} Signatures
            </h3>

            <div className="flex flex-col gap-2 mb-4">
              {signatures.map((sig, index) => (
                <button
                  key={sig.name}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    text-left px-4 py-3 sm:py-5 rounded-md
                    transition-colors duration-200
                    ${index === activeIndex
                      ? "bg-brand-blue text-white"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                    }
                  `}
                >
                  <p className={`text-xs mb-0.5 ${index === activeIndex ? "text-white/70" : "text-gray-400"}`}>
                    {String(index + 1).padStart(2, "0")} · {sig.category}
                  </p>

                  <p className="text-sm font-medium">
                    {sig.name}
                  </p>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <button
                type="button"
                aria-label="Previous signature"
                onClick={goPrev}
                className="
                  w-8 h-8 rounded-full
                  border border-gray-300
                  flex items-center justify-center
                  hover:bg-gray-100
                  transition-colors
                "
              >
                <ChevronLeft className="w-4 h-4 text-brand-blue" />
              </button>

              <p className="text-sm font-serif text-brand-blue">
                {String(activeIndex + 1).padStart(2, "0")} /
                {String(signatures.length).padStart(2, "0")}
              </p>

              <button
                type="button"
                aria-label="Next signature"
                onClick={goNext}
                className="
                  w-8 h-8 rounded-full
                  border border-gray-300
                  flex items-center justify-center
                  hover:bg-gray-100
                  transition-colors
                "
              >
                <ChevronRight className="w-4 h-4 text-brand-blue" />
              </button>
            </div>
          </div>

          {/* Middle - Image Section */}
          <div className="relative rounded-md overflow-hidden min-h-75 md:min-h-full">
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover"
            />

            {/* Product Tag */}
            <span className="
              absolute top-3 left-3
              bg-white/90
              text-xs font-medium
              px-3 py-1
              rounded-full
              flex items-center gap-1
            ">
              <Sparkle className="w-3 h-3" />
              {active.tag}
            </span>

            {/* Slider Indicators */}
            <div className="
              absolute bottom-3 left-1/2
              -translate-x-1/2
              flex gap-1.5
            ">
              {signatures.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to signature ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    h-3 rounded-full
                    transition-all duration-300
                    ${i === activeIndex
                      ? "w-10 h-3 bg-orange-400"
                      : "w-3 h-3 bg-white/80"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {/* Right - Details Section  */}
          <div className="flex flex-col justify-evenly">
            <p className="text-hero-orange text-sm font-semibold tracking-wide mb-1">
              Signature {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <div className="w-9 bg-hero-orange h-0.5"></div>

            <h3 className="text-xl font-serif text-brand-blue mb-3">
              {active.name}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {active.description}
            </p>

            {/* Product Notes */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Product Notes
              </p>

              <ul className="flex flex-col gap-2">
                {active.notes.map((note, index) => (
                  <li
                    key={`${note}-${index}`}
                    className="
                      flex items-center gap-2
                      text-sm text-gray-600
                    "
                  >
                    <div className="h-5 w-5 border border-hero-orange rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-hero-orange shrink-0" />
                    </div>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* MOQ / Lead Time */}
            <div className="
              flex flex-col sm:flex-row sm:justify-between gap-4
              border-t border-gray-200
              pt-4 mb-4
              text-sm
            ">
              <div>
                <p className="text-gray-500 text-xs mb-0.5">
                  Minimum order quantity
                </p>
                <p className="font-semibold text-gray-800">
                  {active.moq}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs mb-0.5">
                  Lead Time
                </p>
                <p className="font-semibold text-gray-800">
                  {active.leadTime}
                </p>
              </div>
            </div>

            {/* Buttons — ✅ routes updated */}
            <div className="flex flex-col gap-3">
              {/* Become Distributor → /distributor */}
              <Link
                to="/distributor"
                className="
                  no-underline
                  flex items-center justify-center gap-2
                  bg-brand-blue
                  text-white
                  py-3
                  rounded
                  text-sm font-medium
                  hover:bg-[#252775]
                  transition-colors
                "
              >
                <Plus className="w-4 h-4" />
                Become Distributor
              </Link>

              {/* REQUEST BULK QUOTE → /bulk-quote */}
              <Link
                to="/bulk-quote"
                className="
                  no-underline
                  flex items-center justify-center gap-2
                  border border-brand-blue
                  text-brand-blue
                  py-3
                  rounded
                  text-sm font-medium
                  hover:bg-brand-blue
                  hover:text-white
                  transition-colors
                "
              >
                REQUEST BULK QUOTE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 px-6 py-3 text-xs text-gray-500 text-center sm:text-left">
          <span>
            Royal Luxury by Kamakhya Cosmetics
          </span>

          <span>
            Use arrow keys to browse the collection
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;