import React from 'react'
import BannerImg from '../assets/BannerImg.svg'
import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router'

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${BannerImg})` }}
            className="relative px-4 sm:px-6 lg:px-12 py-10 overflow-hidden bg-cover bg-center"
        >
            <div className="flex items-center gap-2 text-[#2E3192] font-serif text-base sm:text-xl mb-3">
                <Home className="w-5 h-5" strokeWidth={2.5} />
                <Link
                to='/home' 
                className="text-base sm:text-xl">Home</Link>
                <ChevronRight className="w-4 h-4" strokeWidth={3} />
                <span className="text-sm sm:text-base">Products</span>
            </div>

            <p className="text-orange-400 text-xs font-semibold tracking-wide mb-2">
                Quality Across Every Product
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#2E3192] mb-3">
                Our Product
            </h1>

            <p className="text-gray-600 max-w-md text-sm sm:text-base">
                Explore Royal Luxury and Shine, compare products and supply
                details, and build your Quote Basket for formal pricing.
            </p>
        </div>
    )
}

export default Banner