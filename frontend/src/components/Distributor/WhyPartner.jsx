import Curve from "../../assets/Curve.svg"
import { Percent, ShieldCheck, Truck, Handshake } from 'lucide-react';

const WhyPartner = () => {

    const partnerCards = [
        {
            icon: Percent,
            title: "Factory-direct pricing",
            description: "Buy directly from manufacturer with volume-based pricing tiers and no intermediary margin.",
        },
        {
            icon: ShieldCheck,
            title: "Territory Protection",
            description: "Defined territory rights for partners who meet agreed volume, market development commitments.",
        },
        {
            icon: Truck,
            title: "Reliable Supply",
            description: "Planned production slots and predictable lead times so your shelves stay stocked.",
        },
        {
            icon: Handshake,
            title: "Marketing Support",
            description: "Product training, catalogues, display materials and campaign assets for your sales team."

        }
    ];
    return (
        <section className=' py-12 sm:py-16 lg:py-20 bg-[#FCF9F2]'>
            {/* main container  */}
            <div className='flex flex-col items-center justify-center '>
                {/* Top section  */}
                <div className="text-center mb-2 flex flex-col">

                    <p className="text-[#E38F2E] text-xs font-poppins leading-relaxed font-semibold  tracking-wide uppercase ">
                        Why Partner with us
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-serif text-[#2E3192] ">
                        Built For Better Partnerships
                    </h2>
                    <img className='h-5' src={Curve} alt="" />

                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                        Partner with a trusted manufacturer for quality products, reliable supply, and flexible solutions.
                    </p>

                </div>
                {/* Bottom Section  */}
                <div className='page-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 my-10'>
                    {partnerCards.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className='relative overflow-hidden bg-white rounded-xl shadow-md transition duration-150 hover:shadow-2xl py-4 px-4 flex flex-col justify-start text-start gap-2 border border-gray-300 w-full max-w-md sm:max-w-none mx-auto'
                        >



                            <Icon className='w-5 h-5 text-[#E38F2E]' />


                            <h3 className='font-playfair text-base sm:text-lg leading-tight'>{title}</h3>
                            <div className='w-12 h-0.5 bg-[#E38F2E]'></div>
                            <p className='font-poppins text-[11px] sm:text-[12px] text-gray-500 leading-snug'>{description}</p>
                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}

export default WhyPartner