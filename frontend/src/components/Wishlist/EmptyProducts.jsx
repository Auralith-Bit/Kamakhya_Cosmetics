import { Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'   // ✅ was 'react-router'

const EmptyProducts = () => {
    return (
        <div className="w-full h-full flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center rounded-2xl bg-white border border-[#EFE6D6] shadow-[0_2px_10px_rgba(0,0,0,0.04)] px-6 sm:px-12 py-14 sm:py-16">
                <div className="flex flex-col items-center text-center">
                    {/* Icon badge */}
                    <div className="w-20 h-20 rounded-full bg-[#FBF3E6] flex items-center justify-center mb-6">
                        <Heart className="w-8 h-8 text-[#E38F2E]" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-poppins text-2xl sm:text-[28px] font-bold text-[#222222] mb-3">
                        Your wishlist is empty
                    </h3>
                    <p className="font-poppins text-sm sm:text-base text-[#6B6B6B] max-w-md mx-auto leading-relaxed mb-8">
                        We haven&apos;t saved any items yet. Browse our products and click the
                        heart icon to add them here.
                    </p>

                    <Link
                        to="/products"
                        className="no-underline inline-flex items-center justify-center gap-2 bg-[#2E3192] hover:bg-[#1d1f5c] text-white font-poppins text-sm font-semibold rounded-lg px-6 py-3 transition-colors"
                    >
                        Browse Products
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyProducts