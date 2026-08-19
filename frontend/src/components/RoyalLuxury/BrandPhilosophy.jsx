import LuxVideo from "../../assets/LuxVideo.svg";
import { Crown, Gem, Heart, Download, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
const BrandPhilosophy = () => {
    const philosophyCards = [
        {
            icon: Crown,
            title: "Royal Quality",
            description: "Every ingredient is carefully selected for uncompromised standard",
        },
        {
            icon: Gem,
            title: "Timeless Elegance",
            description: "Our formulations are inspired by the heritage, made for modern worlds",
        },
        {
            icon: Heart,
            title: "Beauty with Care",
            description: "We care for your skin, your well-being, and the world around us, every single day.",
        },
    ];
    return (
        <section className="page-container section-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-12 lg:gap-14">

                <div className="lg:col-span-3">
                    <p className="text-hero-orange font-semibold tracking-wide text-sm mb-3">
                        OUR BRAND PHILOSOPHY
                    </p>

                    <div
                        aria-hidden="true"
                        className="w-10 h-0.5 bg-orange-400 rounded-full mb-6"
                    />

                    <h2 className="font-serif text-2xl sm:text-3xl leading-snug max-w-xl mb-4">
                        <span className="text-hero-orange">Royal </span>
                        <span className="text-brand-blue">in Essence, </span>
                        <span className="text-hero-orange">Luxury </span>
                        <span className="text-brand-blue">in Experience</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-prose mb-8 sm:mb-10">
                        Royal Luxury believes beauty is more than skincare—it is an experience of
                        elegance, confidence, and timeless luxury. Crafted with premium ingredients
                        and inspired by heritage, every product transforms daily self-care into a
                        refined ritual.
                    </p>

                    {/* Cards */}
                    <div className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                        {philosophyCards.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="relative overflow-hidden bg-white border border-gray-100 rounded-md shadow-sm px-3 sm:px-4 py-5 sm:py-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-full max-w-48 mx-auto"
                            >
                                {/* Corner */}
                                <div
                                    aria-hidden="true"
                                    className="absolute top-0 left-0 h-0 w-0 border-t-[20px] border-r-[32px] border-t-brand-blue border-r-transparent sm:border-t-[26px] sm:border-r-[40px]"
                                />

                                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-full border border-orange-300 flex items-center justify-center">
                                    <Icon
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="font-serif font-semibold text-brand-blue text-xs sm:text-sm mb-2 pb-2 border-b border-orange-200 inline-block">
                                    {title}
                                </h3>

                                <p className="text-[11px] sm:text-xs text-gray-500 leading-snug mt-2">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <Link
                            to="/collections"
                            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-medium tracking-wide px-6 sm:px-8 py-2.5 rounded cursor-pointer transition-colors hover:bg-[#24266f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E3192] focus-visible:ring-offset-2"
                        >
                            EXPLORE OUR COLLECTIONS
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>

                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center gap-2 bg-hero-cream border-2 border-hero-gold text-gray-800 text-sm font-medium tracking-wide px-6 sm:px-8 py-2.5 rounded cursor-pointer transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
                        >
                            DOWNLOAD CATALOG
                            <Download className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                {/* Right: image */}
                <div className="lg:col-span-2">
                    <img
                        src={LuxVideo}
                        alt="Royal Luxury product showcase"
                        className="w-full max-w-md mx-auto lg:max-w-none aspect-6/7 rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    )

}

export default BrandPhilosophy;
