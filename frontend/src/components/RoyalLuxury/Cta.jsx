import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";   // ✅ was 'react-router'

const Cta = () => {
    return (
        <section className='bg-navy'>
            <div className="page-container flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
                <div className="max-w-2xl">
                    <h2 className='text-hero-gold'>Ready to source from Kamakhya?</h2>
                    <h1 className='text-white'>Start a reliable beauty and home-care partnership.</h1>
                    <p className='text-white'>Tell us what you need, your target quantity and delivery market. Our trade team will prepare the appropriate next step.</p>
                </div>

                <div className='flex flex-col gap-4 sm:flex-row lg:flex-col'>
                    {/* ✅ Request Quote → /bulk-quote */}
                    <Link
                        to="/bulk-quote"
                        className='no-underline bg-[#CCA466] inline-flex items-center justify-center gap-2 px-5 py-2 rounded-sm text-white'
                    >
                        Request Quote <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* ✅ Explore Collections → /products */}
                    <Link
                        to="/products"
                        className='no-underline px-5 py-2 text-white border rounded-sm border-white'
                    >
                        Explore Collections
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;