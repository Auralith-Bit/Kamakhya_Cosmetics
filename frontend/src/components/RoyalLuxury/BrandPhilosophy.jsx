import React from 'react'
import LuxVideo from '../../assets/LuxVideo.svg'
import { Crown, Gem, Heart, Download, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'   // ✅ was 'react-router'

const CornerAccent = ({ className }) => (
    <svg viewBox="0 0 40 40" className={className} preserveAspectRatio="none">
        <path d="M0,0 H40 Q10,10 0,40 Z" fill="#2E3192" />
    </svg>
)
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
        <section className='page-container py-12 sm:py-16 lg:py-20'>
            {/* Main container  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center'>
                {/* LeftContainer  */}
                <div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#E38F2E] font-bold text-xs sm:text-sm tracking-widest uppercase'>
                            Our Brand Philosophy
                        </p>
                        <div className='w-10 h-0.5 bg-[#E38F2E] rounded-full'></div>
                        <h2 className="font-playfair font-bold  leading-tight whitespace-nowrap text-[clamp(1.125rem,2.2vw,1.875rem)]">
                            <span className="text-[#E38F2E]">Royal </span>
                            <span className="text-[#2E3192]">in Essence, </span>
                            <span className="text-[#E38F2E]">Luxury </span>
                            <span className="text-[#2E3192]">in Experience</span>
                        </h2>
                        <p className='font-poppins text-[13px] sm:text-[14px] text-justify text-[#121212] mb-4 leading-relaxed'>
                            Royal Luxury believes beauty is more than skincare—it is an experience of elegance, confidence, and timeless luxury. Crafted with premium ingredients and inspired by heritage, every product transforms daily self-care into a refined ritual.
                        </p>
                    </div>
                    {/* Cards  */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 md:gap-6'>
                        {philosophyCards.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className='relative overflow-hidden bg-white rounded-xl shadow-md transition duration-150 hover:shadow-2xl py-4 px-4 flex flex-col items-center text-center gap-2 border border-gray-300'
                            >
                                {/* corner accents */}
                                <CornerAccent className='absolute top-0 left-0 w-10 h-10 sm:w-8 sm:h-8' />
                                <CornerAccent className='absolute bottom-0 right-0 w-10 h-10 sm:w-8 sm:h-8 rotate-180' />

                                <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-orange-400 flex items-center justify-center shrink-0'>
                                    <Icon className='w-5 h-5 text-[#E38F2E]' />
                                </div>

                                <h3 className='font-playfair font-bold text-base sm:text-lg leading-tight'>{title}</h3>
                                <div className='w-12 h-0.5 bg-[#E38F2E]'></div>
                                <p className='font-poppins text-[11px] sm:text-[12px] text-gray-500 leading-snug'>{description}</p>
                            </div>

                        ))}
                    </div>
                    {/* buttons  */}
                    <div className='mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-start gap-4 sm:gap-6 lg:gap-10'>
                        {/* ✅ EXPLORE routes to /products */}
                        <Link
                            to="/products"
                            className='bg-[#252775] px-6 sm:px-8 py-2.5 rounded-lg text-white font-poppins text-[13px] sm:text-[14px] flex items-center justify-center gap-3 whitespace-nowrap transition-colors hover:bg-[#1d1f5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#252775] focus-visible:ring-offset-2 no-underline'
                        >
                            EXPLORE OUR COLLECTIONS
                            <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        </Link>

                        {/* ✅ DOWNLOAD CATALOG routes to /products (Trade catalogue) */}
                        <Link
                            to="/products"
                            className='bg-[#FCFAF7] border-2 px-6 sm:px-8 py-2.5 rounded-lg text-[#E38F2E] font-poppins text-[13px] sm:text-[14px] flex items-center justify-center gap-3 whitespace-nowrap transition-colors hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E38F2E] focus-visible:ring-offset-2 no-underline'
                        >
                            DOWNLOAD CATALOG
                            <Download className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
             
                {/* Right Container  */}
                <div className='flex items-center justify-center w-full lg:items-stretch lg:self-stretch lg:-my-8'>
                    <video
                        controls
                        playsInline
                        className='w-full max-w-xs sm:max-w-sm lg:max-w-sm aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full rounded-xl object-cover shadow-md'
                        src={LuxVideo}>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default BrandPhilosophy