import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const TopBanner = () => {
    return (
        <div className='bg-[#F7F0E7] h-50'>
            <div className="h-full w-full flex flex-col items-center justify-center text-center py-8 sm:py-10">
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#2E3192]  mb-3">
                    {/* ✅ Home breadcrumb → routes to / */}
                    <Link to="/" className="flex items-center gap-x-1.5 no-underline">
                        <Home className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[#E38F2E]" strokeWidth={2.5} />
                        <span className="text-poppins text-[#E38F2E] sm:text-lg uppercase">Home</span>
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-[#E38F2E] sm:w-4 sm:h-4 shrink-0" strokeWidth={3} />
                    <span className="text-[#E38F2E] font-poppins sm:text-base">Your Wishlist </span>

                </nav>
                <p className="text-[#2E3192] text-[20px] sm:text-2xl font-semibold font-poppins tracking-wide mb-2">
                   Your Saved Items
                </p>

            </div>
        </div>
    )
}

export default TopBanner