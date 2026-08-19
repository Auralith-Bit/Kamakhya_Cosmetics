import Curve from "../../assets/Curve.svg";

const FormulaSpotlight = () => {
    const spotlightCards = [{
        title: "24K Gold Infusion",
        description: "Infused with 24K gold for radiant skin"
    },

    {
        title: "Collagen Complex",
        description: "Supports skin firmness and improves natural elasticity over time"

    },
    {
        title: "Hyaluronic Moisture Lock",
        description: "Provides deep hydration for soft, smooth, and plump-looking skin"
    },
    {
        title: "Vitamin C Brightening",
        description: "Brightens dull skin and promotes a naturally even complexion."
    },
    {
        title: "Botanical Recovery Blend",
        description: "Nourishes and calms skin with carefully selected botanical extracts."
    },
    {
        title: "Peptide Forming Technology",
        description: "Helps skin firmness for a smoother youthful experience"
    }
    ];
    return (
        <section className='page-container section-spacing'>
            <div className='flex flex-col justify-center items-center'>
                {/* Top section  */}
                <div className="text-center flex flex-col justify-center items-center">

                    <p className="text-hero-orange text-xs font-semibold tracking-wide ">
                        FORMULA SPOTLIGHT
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-serif text-brand-blue ">
                        Advance Beauty Science, Perfected
                    </h2>
                    <div>
                        <img src={Curve} alt="" />
                    </div>

                    <p className="text-[#666666] text-sm max-w-xl mx-auto">
                        Every Royal Luxury formula blends premium ingredients, advanced skincare science and luxurious care
                    </p>

                </div>
                {/* Cards  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
                    {spotlightCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#FCF9F2] rounded-lg overflow-hidden  shadow-xl
                 hover:border hover:border-orange-100
                 hover:shadow-lg transition-all duration-300 py-6"
                        >
                            <div className="flex justify-between items-center px-4 py-3">
                                <div className="text-left">
                                    <p className="font-semibold text-gray-800 text-sm">
                                        {card.title}
                                    </p>
                                    <div className='w-10 mt-2 mb-2 h-0.5 bg-hero-gold'></div>

                                    <p className="text-xs text-gray-500">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FormulaSpotlight
