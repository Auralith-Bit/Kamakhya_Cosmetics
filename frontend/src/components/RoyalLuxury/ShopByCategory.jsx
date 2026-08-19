import { useState } from 'react'
import Product from "../../assets/Product.svg";
import Curve from "../../assets/Curve.svg";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

import { Link } from 'react-router'

const ShopByCategory = () => {
    const categories = [
        { image: Product, title: "Body Care", count: "18+ Products" },
        { image: Product, title: "Skin Care", count: "24+ Products" },
        { image: Product, title: "Hair Care", count: "15+ Products" },
        { image: Product, title: "Makeup", count: "30+ Products" },
        { image: Product, title: "Fragrance", count: "12+ Products" },
        { image: Product, title: "Abcd Care", count: "40+ Products" },
        { image: Product, title: "Skin Care", count: "24+ Products" },
        { image: Product, title: "Lipstick", count: "15+ Products" },
        { image: Product, title: "Pramit", count: "50+ Products" },
        { image: Product, title: "Okay", count: "12+ Products" },
        { image: Product, title: "Body Care", count: "18+ Products" },
        { image: Product, title: "Skin Care", count: "24+ Products" },
        { image: Product, title: "Hair Care", count: "15+ Products" },
        { image: Product, title: "Makeup", count: "30+ Products" },
        { image: Product, title: "Fragrance", count: "12+ Products" },
        { image: Product, title: "Abcd Care", count: "40+ Products" },
        { image: Product, title: "Skin Care", count: "24+ Products" },
        { image: Product, title: "Lipstick", count: "15+ Products" },
        { image: Product, title: "Pramit", count: "50+ Products" },
        { image: Product, title: "Okay", count: "12+ Products" },
        { image: Product, title: "Body Care", count: "18+ Products" },
        { image: Product, title: "Skin Care", count: "24+ Products" }

    ];

    const itemsPerPage = 5;
    const pageCount = Math.ceil(categories.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrev = () => {
        setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
    };

    const visibleCategories = categories.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <section className='bg-[#FCF9F2]'>
            <div className="page-container section-spacing">
                <div className='flex flex-col justify-center items-center text-center'>
                    <h2 className='text-orange-300'>SHOP BY CATEGORY </h2>
                    <p className='text-2xl text-brand-blue'>Luxury for Every Beauty Ritual</p>
                    <img src={Curve} alt="arrowline" />
                    <p className='text-[#666666] max-w-2xl'>
                        Explore Royal Luxury collections across skincare, haircare, makeup, body care, and
                        premium beauty essentials.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8'>
                    {visibleCategories.map((category, index) => (
                        <Link
                            key={index}
                            to="/products"
                            className='group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='relative w-full h-40 sm:h-48 overflow-hidden'>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className='w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/15 transition-colors duration-300' />
                            </div>

                            <div className='flex justify-between items-center px-4 py-3'>
                                <div className='text-left'>
                                    <p className='font-semibold text-gray-800 text-sm'>{category.title}</p>
                                    <p className='text-xs text-gray-500'>{category.count}</p>
                                </div>
                                <ArrowRight className='w-4 h-4 text-brand-blue' />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination / Slider controls */}
                {pageCount > 1 && (
                    <div className='flex justify-center items-center gap-4 mt-10'>
                        <button
                            onClick={handlePrev}
                            aria-label="Previous"
                            className='w-9 h-9 rounded-full border border-brand-blue/30 flex items-center justify-center text-brand-blue hover:bg-brand-blue/10 transition-colors'
                        >
                            <ChevronLeft className='w-4 h-4' />
                        </button>

                        <div className='flex items-center gap-2'>
                            {Array.from({ length: pageCount }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    aria-label={`Go to page ${index + 1}`}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        index === currentPage
                                            ? 'w-8 bg-brand-blue'
                                            : 'w-5 bg-brand-blue/20'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className='w-9 h-9 rounded-full border border-brand-blue/30 flex items-center justify-center text-brand-blue hover:bg-brand-blue/10 transition-colors'
                        >
                            <ChevronRight className='w-4 h-4' />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ShopByCategory
