import { useState } from 'react'
import Curve from "../../assets/Curve.svg";
import Ask from "../../assets/askquestions.svg";
import { ArrowRight, Plus, Minus } from 'lucide-react'

const faqItems = [
    {
        question: "How do I receive wholesale pricing?",
        answer: "How Samples may be available for qualified retailers, distributors and private-label clients. Availability, sample charges and delivery costs depend on the products and destination market."
    },
    {
        question: "What is the minimum order quantity for wholesale buyers?",
        answer: "How Samples may be available for qualified retailers, distributors and private-label clients. Availability, sample charges and delivery costs depend on the products and destination market."
    },
    {
        question: "Are there any discounts for bulk orders?",
        answer: "Yes — tiered pricing is available once you cross certain volume thresholds. Reach out with your expected order size for a custom quote."
    },
    {
        question: "Can I return or exchange wholesale items?",
        answer: "How Samples may be available for qualified retailers, distributors and private-label clients. Availability, sample charges and delivery costs depend on the products and destination market."
    },
    {
        question: "How long does shipping take for wholesale orders?",
        answer: "How Samples may be available for qualified retailers, distributors and private-label clients. Availability, sample charges and delivery costs depend on the products and destination market."
    },
    {
        question: "Do you offer international wholesale shipping?",
        answer: "YHow Samples may be available for qualified retailers, distributors and private-label clients. Availability, sample charges and delivery costs depend on the products and destination market."
    },
]

const AccordionItem = ({ item, index, isOpen, onClick }) => {
    return (
        <div
            className={`bg-white rounded-2xl border transition-colors duration-200 px-4 sm:px-6 py-5 ${isOpen ? 'border-[#C98A3E] shadow-sm' : 'border-gray-200'
                }`}
        >
            <button
                type="button"
                onClick={onClick}
                className="w-full flex items-start justify-between gap-4 text-left"
            >
                <div className="flex items-baseline gap-3">
                    <span className="font-serif text-xs text-gray-400 tabular-nums">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif font-semibold text-brand-blue text-base sm:text-lg">
                        {item.question}
                    </span>
                </div>
                <span
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-200 ${isOpen
                        ? 'bg-[#C98A3E] border-[#C98A3E] text-white'
                        : 'border-gray-300 text-brand-blue'
                        }`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[2fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    } overflow-hidden`}
            >
                <p className="text-[#666666] text-sm leading-relaxed overflow-hidden pl-0 sm:pl-8">
                    {item.answer}
                </p>
            </div>
        </div>
    )
}

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className='bg-[#FCF9F2]'>
            <div className='page-container section-spacing flex flex-col items-center justify-center'>
                {/* Top-Section */}
                <div className="text-center flex flex-col justify-center items-center">
                    <p className="text-hero-orange text-xs font-semibold tracking-wide">
                        FREQUENTLY ASKED QUESTIONS
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-serif text-brand-blue">
                        Your Beauty Questions, Answered
                    </h2>

                    <div>
                        <img src={Curve} alt="Curve" />
                    </div>

                    <p className="text-[#666666] text-sm max-w-xl mx-auto">
                        Explore helpful information about our skincare, makeup, haircare, product safety, delivery, and customer support—all in one place.
                    </p>
                </div>

                {/* Main-Section  */}
                <div className='w-full flex flex-col lg:flex-row gap-6 mt-10 items-start text-brand-blue'>


                    <div className='w-full lg:w-3/5 flex flex-col gap-4 '>
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>

                    {/* Ask a Question card */}
                    <div className='bg-white flex flex-col justify-center items-center rounded-2xl shadow-lg p-5 sm:p-10 w-full lg:w-2/5 lg:sticky lg:top-10'>
                        <img src={Ask} alt="Question" />
                        <p className="text-2xl font-serif text-brand-blue mt-2">Any Question?</p>
                        <p className="text-center text-[#666666] text-sm mt-4 max-w-sm">
                            Ask anything about products, manufacturing or supply — our trade team replies within one business day.
                        </p>
                        <form onSubmit={(event) => event.preventDefault()} className="w-full">
                            <label htmlFor="question" className="self-start mt-6 text-sm ml-1 text-gray-700">Let us know</label>
                            <textarea
                                id="question"
                                placeholder="Type your question here..."
                                rows={2}
                                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E2887] focus:border-transparent mb-3 mt-1"
                            />
                            <p className='text-xs text-center  text-[#666666] '>No payment is taken here — this simply reaches our trade team.</p>
                            <button type="submit" className="bg-[#252775] text-white text-sm py-4 rounded-lg w-full flex items-center justify-center gap-2 mt-6">
                                Send Question <ArrowRight size={16} strokeWidth={2} />
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;
