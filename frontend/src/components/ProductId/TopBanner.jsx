
import { ChevronRight, Home } from 'lucide-react'

const TopBanner = ({ title }) => {
    return (
        <div className='bg-[#F7F0E7] h-50'>
            <div className=" flex flex-col items-center justify-center py-14 sm:py-16 lg:py-20">
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#2E3192]  mb-3">
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[#E38F2E]" strokeWidth={2.5} />
                    <span className="text-poppins text-[#E38F2E] sm:text-lg uppercase">Home</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={3} />
                    <span className="text-[#E38F2E] text-poppins sm:text-base">Products </span>

                </nav>
                <p className="text-[#2E3192] text-[20px] sm:text-2xl font-semibold font-poppins tracking-wide mb-2 uppercase">
                    {title || 'Product Title'}
                </p>

            </div>
        </div>
    )
}

export default TopBanner
