
import React from 'react'
import BannerImg from '../../assets/productbanner.svg'
import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router'

const HeroBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${BannerImg})` }}
            className="relative overflow-hidden bg-cover bg-center"
        >
            <div className="page-container py-14 sm:py-16 lg:py-20">
              
                <div className="flex items-center gap-2 text-[#2E3192] font-serif text-base sm:text-xl  mb-3">
                    <Home className="w-5 h-5" strokeWidth={2.5} />
                    <Link to='/home'
                        className="text-base sm:text-xl">Home</Link>
                    <ChevronRight className="w-4 h-4" strokeWidth={3} />
                    <span className="text-sm sm:text-base">Products</span>
                </div>



                <p className="text-[#E38F2E]  font-poppins text-xs sm:text-xl tracking-wide mb-2 ">
                    Quality Across Every Products
                </p>
                <div className='h-0.5 w-20 bg-[#E38F2E] mb-3 rounded-full'/>

                <h1 className="text-3xl sm:text-4xl md:text-4xl font-playfair text-[#2E3192] font-bold mb-3 leading-tight">
                   Our Products
                </h1>

                <p className="text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
                    Explore Royal Luxury collections beauty, skincare, haircare, and makeup
                    designed with quality, safety, and elegance.
                </p>
            </div>
        </div>
    )
}

export default HeroBanner
