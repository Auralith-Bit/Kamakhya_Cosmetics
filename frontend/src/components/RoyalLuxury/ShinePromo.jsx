import Shine from "../../assets/ShinePromo.svg";
import { Link } from "react-router-dom";   // ✅ was 'react-router'
import { ArrowRight } from "lucide-react";

const ShinePromo = () => {
    return (
        <section className="page-container section-spacing">
            <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-[0_12px_35px_rgba(0,0,0,0.1)] bg-[#176B221A]">
                {/* Product image */}
                <div className="md:w-[50%]">
                    <img
                        src={Shine}
                        alt="Shine Clean & Fresh home care product range"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start justify-center px-8 py-12 md:w-[50%] md:px-16">
                    <h2 className="text-sm font-poppins tracking-[0.06em] text-hero-orange">
                        Also From Kamakhya Cosmetics
                    </h2>

                    <div className="mt-3 h-0.5 w-10 rounded-full bg-[#E8912D]" />

                    <h1 className="mt-4 font-serif md:text-[34px]  text-[#176B22]">
                        Shine
                    </h1>

                    <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed text-gray-500">
                        Premium home care collections crafted with powerful ingredients for
                        a cleaner, fresher everyday life.
                    </p>

                    {/* ✅ Explore Shine → /brands/shine */}
                    <Link
                        to="/brands/shine"
                        className="no-underline mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-[#176B22] px-6 py-2 font-semibold text-[#176B22] transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#176B22] focus-visible:ring-offset-2"
                    >
                        Explore Shine <ArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShinePromo;