import { ArrowLeft, Check } from "lucide-react";

export default function SampleRequestReceived({ onSubmitAnother, product }) {
  const productTitle = product?.title || "Radiance Renewal Serum";
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-white rounded-2xl border border-[#E7E2D6] shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-8 sm:p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full border border-[#E9C97A] bg-[#FBF6EA] flex items-center justify-center">
          <span className="w-9 h-9 rounded-full border-2 border-[#C08A2E] flex items-center justify-center">
            <Check className="w-4 h-4 text-[#C08A2E]" strokeWidth={3} />
          </span>
        </div>

        <h1 className="mt-6 font-serif text-2xl text-[#2B2560]">
          Sample request received
        </h1>
        <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed max-w-sm mx-auto">
          Our team will verify your business details and prepare a 30 ml
          sample within 5 business days.
        </p>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="rounded-lg border border-[#E7E2D6] bg-[#F9F7F1] p-5">
            <p className="text-sm font-semibold text-[#C08A2E]">01</p>
            <p className="mt-2 font-serif text-lg text-[#2B2560]">
              Verification
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
              Registration reviewed within 2 business days.
            </p>
          </div>
          <div className="rounded-lg border border-[#E7E2D6] bg-[#F9F7F1] p-5">
            <p className="text-sm font-semibold text-[#C08A2E]">02</p>
            <p className="mt-2 font-serif text-lg text-[#2B2560]">
              Confirmation &amp; Dispatch
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
              Approve the sample scope by email, then the sample ships
              within 5 business days.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-[#E7E2D6] bg-[#F9F7F1] p-5 text-left">
          <p className="text-xs text-[#8A8A8A]">Request summary</p>
          <p className="mt-2 font-serif text-lg text-[#2B2560]">
            {productTitle} · 30 ml
          </p>
          <p className="mt-1 text-sm text-[#6B6B6B]">
            Verified business sample · 1 unit
          </p>
        </div>

        <button
          type="button"
          onClick={onSubmitAnother}
          className="mt-7 inline-flex items-center gap-2 text-[#2B2560] font-medium hover:opacity-80"
        >
          <ArrowLeft className="w-4 h-4" />
          Submit another request
        </button>
      </div>
    </div>
  );
}