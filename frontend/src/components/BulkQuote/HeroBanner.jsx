import Distributor from '../../assets/Distributor.svg'
import { ChevronRight, Home } from 'lucide-react'

const HeroBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${Distributor})` }}
            className="relative overflow-hidden bg-cover bg-center"
        >
            <div className="page-container py-14 sm:py-16 lg:py-20">
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#2E3192] font-serif mb-3">
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
                    <span className="text-base sm:text-lg">Home</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={3} />
                    <span className="text-sm sm:text-base">Request a Bulk Quote </span>

                </nav>

                <p className="text-[#E38F2E] text-xs sm:text-[18px] text-[25px]  font-semibold tracking-wide mb-2 ">
                    Bulk enquiry
                </p> 
                <div className="h-0.5 w-24 bg-[#E38F2E]"/>

                <h1 className="text-3xl sm:text-4xl md:text-4xl text-[#2E3192] font-playfair mb-3 leading-tight">
                   Request a bulk quote
                </h1>

                <p className="text-[#70768A] max-w-md text-sm sm:text-base font-poppins ">
                   Tell us what you need and in what volume. We will return factory-direct pricing, MOQ confirmation, lead times and packaging options.
                </p>
            </div>
        </div>
    )
}

export default HeroBanner