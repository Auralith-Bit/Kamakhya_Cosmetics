import Royal from "../../assets/RoyalLuxury.svg";
import { ChevronRight, Home } from 'lucide-react'

const HeroBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${Royal})` }}
            className="relative overflow-hidden bg-cover bg-center py-9"
        >
            <div className="page-container py-10 sm:py-12">
                <div className="flex items-center gap-2 text-brand-blue font-serif sm:text-xl  mb-3 ">
                    <Home className="w-5 h-5" strokeWidth={2.5} />
                    <span className="text-xl">Home</span>
                    <ChevronRight className="w-4 h-4" strokeWidth={3} />
                    <span className="text-base">Brands</span>
                    <ChevronRight className="w-4 h-4" strokeWidth={3} />
                    <span className="text-sm">Royal Luxury</span>
                </div>

                <p className="text-hero-orange text-lg font-poppins tracking-wide mb-2">
                    A Kamakhya Cosmetics House
                </p>
                <div className="bg-hero-orange h-0.5 w-10 rounded-full" />
                <h1 className="text-3xl mt-4 sm:text-4xl font-playfair text-brand-blue mb-3">
                    Royal Luxury
                </h1>

                <p className="text-gray-600 max-w-md text-sm sm:text-base">
                    Explore Royal Luxury collections beauty, skincare, haircare, and makeup
                    designed with quality, safety, and elegance.
                </p>
            </div>
        </div>
    )
}

export default HeroBanner
