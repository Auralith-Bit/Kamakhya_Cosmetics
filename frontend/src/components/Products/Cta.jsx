import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

const CtaSection = () => {
    return (
        <div className="bg-[#161E3A] px-4 sm:px-6 lg:px-12 py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 ml-10">
                <div>
                    <p className="text-[#CCA466] text-sm font-medium mb-3">
                        Ready to source from Kamakhya?
                    </p>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-playfair text-white mb-4 max-w-xl">
                        Start a reliable beauty and home-care partnership.
                    </h2>
                    <p className="text-[#D9D9D9] text-xs sm:text-base max-w-lg">
                        Tell us what you need, your target quantity and delivery market.
                        Our trade team will prepare the appropriate next step.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link
                        to="/request"
                        className="flex items-center justify-center gap-2 bg-[#D4A056] text-[#151B32] rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[#c4914a] transition"
                    >
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="/collection"
                        className="flex items-center justify-center gap-2 border border-white text-white rounded-lg px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
                    >
                        Explore Collections
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CtaSection