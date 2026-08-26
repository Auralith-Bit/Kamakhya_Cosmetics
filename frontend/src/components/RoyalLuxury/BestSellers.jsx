import { Heart, ArrowRight, Package, Calendar, Sparkle } from "lucide-react";
import BestSeller from "../../assets/BestSeller.svg";
import { Link } from "react-router-dom";

const products = [
    {
        badge: "BEST SELLERS",
        image: BestSeller,
        title: "Nail Polish",
        description:
            "Nail Polish is the best things in the world and were for protection. i love...",
        moq: "500 pcs",
        leadTime: "7-10 days",
    },
    {
        badge: "BEST SELLER",
        image: BestSeller,
        title: "Nail Polish",
        description:
            "Nail Polish is the best things in the world and were for protection. i love...",
        moq: "500 pcs",
        leadTime: "10-15 days",
    },
    {
        badge: "FEATURED",
        image: BestSeller,
        title: "Nail Polish",
        description:
            "Nail Polish is the best things in the world and were for protection. i love...",
        moq: "500 pcs",
        leadTime: "7-10 days",
    },
    {
        badge: "FEATURED",
        image: BestSeller,
        title: "Nail Polish",
        description:
            "Nail Polish is the best things in the world and were for protection. i love...",
        moq: "500 pcs",
        leadTime: "10-15 days",
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            
            {/* Image */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-70 object-cover"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-white/95 text-[#C98A3E] text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkle
                        size={11}
                        className="fill-[#C98A3E]"
                    />
                    {product.badge}
                </span>

                {/* Favorite button */}
                <Link
                    to="/favourites"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
                >
                    <Heart
                        size={16}
                        className="text-brand-blue"
                    />
                </Link>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5">
                
                {/* Product title */}
                <h3 className="font-serif text-lg text-[#1B1650] mb-2">
                    {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                </p>

                {/* MOQ / Lead Time */}
                <div className="flex items-center gap-6 border-t border-b border-gray-100 py-3 mb-5">
                    
                    {/* MOQ */}
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#FBF1E1] flex items-center justify-center shrink-0">
                            <Package
                                size={14}
                                className="text-[#C98A3E]"
                            />
                        </span>

                        <div className="leading-tight">
                            <p className="text-[10px] uppercase tracking-wide text-gray-400">
                                MOQ
                            </p>

                            <p className="text-sm font-medium text-gray-700">
                                {product.moq}
                            </p>
                        </div>
                    </div>

                    {/* Lead Time */}
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#FBF1E1] flex items-center justify-center shrink-0">
                            <Calendar
                                size={14}
                                className="text-[#C98A3E]"
                            />
                        </span>

                        <div className="leading-tight">
                            <p className="text-[10px] uppercase tracking-wide text-gray-400">
                                Lead Time
                            </p>

                            <p className="text-sm font-medium text-gray-700">
                                {product.leadTime}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    to="/products"
                    className="mt-auto w-full border border-brand-blue text-brand-blue font-medium text-sm py-3 rounded-full flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-colors duration-200 group"
                >
                    View Products

                    <span className="w-6 h-6 rounded-full bg-[#E7E5F4] group-hover:bg-white flex items-center justify-center transition-colors duration-200">
                        <ArrowRight
                            size={12}
                            className="text-brand-blue"
                        />
                    </span>
                </Link>
            </div>
        </div>
    );
};

const BestSellers = () => {
    return (
        <section className="bg-[#FCF9F2] mt-10">
            <div className="page-container pt-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-5">
                    
                    <p className="text-[#C98A3E] text-xs font-semibold tracking-wide">
                        BEST SELLERS
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl text-[#1B1650]">
                        Our Beauty Best Sellers
                    </h2>

                    {/* Decorative line */}
                    <div className="flex justify-center mb-4">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                        >
                            <path
                                d="M2 10 Q10 2 16 10 T30 10 Q36 2 42 10 T58 10"
                                stroke="#C98A3E"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        Discover our most-loved beauty essentials trusted by
                        thousands for radiant skin, flawless makeup, and
                        healthy hair—crafted with premium ingredients and
                        exceptional care.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
