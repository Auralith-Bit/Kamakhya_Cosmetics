import React, { useState } from "react"; 
import { useNavigate } from "react-router"; 
import { ArrowRight, ChevronDown } from "lucide-react"; 

const PHONE_RE = /^(97|98)\d{8}$/;
 
const RequirementForm = () => { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    companyName: "", 
    contact: "", 
    email: "", 
    phone: "", 
    market: "", 
    rangeOfInterest: "", 
    expectedVolume: "", 
    timeline: "", 
    description: "", 
  }); 
  
const [errors, setErrors] = useState({}); 
  const [sent, setSent] = useState(false);

  const handleChange = (e) => { 
    const { id, value } = e.target; 
    setFormData((prev) => ({ ...prev, [id]: value })); 
    if (id === "phone") setErrors({}); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const digits = formData.phone.replace(/\D/g, "").replace(/^977/, ""); 
    const newErrors = {}; 

    if (!digits) newErrors.phone = "Phone is required."; 
    else if (!PHONE_RE.test(digits)) newErrors.phone = "Phone must be 10 digits starting with 97 or 98."; 

    setErrors(newErrors); 
    if (Object.keys(newErrors).length === 0) { 
      setFormData({ 
        companyName: "", 
        contact: "", 
        email: "", 
        phone: "", 
        market: "", 
        rangeOfInterest: "", 
        expectedVolume: "", 
        timeline: "", 
        description: "", 
      }); 
      setSent(true); 
    } 
  };
 
  const fieldClass = 
    "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-1"; 
  const selectClass = 
    "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-[15px] font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-1 appearance-none cursor-pointer pr-10"; 
  const dropdownIcon = 
    "pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 w-4 h-4 text-slate-500"; 
  const labelClass = "block text-[15px] font-bold text-slate-800 mb-2.5"; 
 
  return ( 
    <section className="py-12 sm:py-16 lg:py-20 bg-white"> 
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start"> 
        {/* Requirement Form */} 
        <div> 
          <form 
            onSubmit={handleSubmit} 
            className="bg-white border border-slate-200 rounded-2xl px-8 sm:px-10 pt-10 pb-11" 
          > 
            <h1 className="font-serif font-bold text-3xl text-indigo-800 mb-7"> 
              Your requirement 
            </h1> 
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7"> 
              <div> 
                <label htmlFor="companyName" className={labelClass}> 
                  Registered Company Name* 
                </label> 
                <input 
                  id="companyName" 
                  type="text" 
                  placeholder="Legal Business name" 
                  value={formData.companyName} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
              </div> 
 
              <div> 
                <label htmlFor="contact" className={labelClass}> 
                  Contact Person* 
                </label> 
                <input 
                  id="contact" 
                  type="text" 
                  placeholder="Full name and role" 
                  value={formData.contact} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
              </div> 
 
              <div> 
                <label htmlFor="email" className={labelClass}> 
                  Business Email* 
                </label> 
                <input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
              </div> 
 
              <div> 
                <label htmlFor="phone" className={labelClass}> 
                  Phone Number* 
                </label> 
                <input 
                  id="phone" 
                  type="tel" 
                  placeholder="Include country code" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
                {errors.phone && ( 
                  <p className="text-[12px] text-red-600 mt-1"> 
                    {errors.phone} 
                  </p> 
                )} 
              </div> 
 
              <div> 
                <label htmlFor="market" className={labelClass}> 
                  Country / market * 
                </label> 
                <input 
                  id="market" 
                  type="text" 
                  placeholder="Where products will be sold" 
                  value={formData.market} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
              </div> 
 
              <div> 
                <label htmlFor="rangeOfInterest" className={labelClass}> 
                  Range of interest* 
                </label> 
                <div className="relative">
                  <select 
                    id="rangeOfInterest" 
                    value={formData.rangeOfInterest} 
                    onChange={handleChange} 
                    required 
                    className={selectClass} 
                  > 
                    <option className="text-xs" value="" disabled> 
                      Select an Option
                    </option> 
                    <option value="shine">Shine</option> 
                    <option value="royal-luxury">Royal Luxury</option> 
                    <option value="both">Both</option> 
                  </select> 
                  <ChevronDown className={dropdownIcon} />
                </div> 
              </div> 
 
              <div> 
                <label htmlFor="expectedVolume" className={labelClass}> 
                  Expected Volume* 
                </label> 
                <input 
                  id="expectedVolume" 
                  type="text" 
                  placeholder="Enter expected volume (e.g., 1500 units)" 
                  value={formData.expectedVolume} 
                  onChange={handleChange} 
                  required 
                  className={fieldClass} 
                /> 
 
              </div> 
 
              <div> 
                <label htmlFor="timeline" className={labelClass}> 
                  Timeline 
                </label> 
                <div className="relative">
                  <select 
                    id="timeline" 
                    value={formData.timeline} 
                    onChange={handleChange} 
                    className={selectClass} 
                  > 
                    <option value="" disabled> 
                      Select an Option 
                    </option> 
                    <option value="immediately">Immediately</option> 
                    <option value="3-days">3 days</option> 
                    <option value="1-week">1 week</option> 
                  </select> 
                  <ChevronDown className={dropdownIcon} />
                </div> 
              </div> 
 
              <div className="sm:col-span-2 mt-1"> 
                <label htmlFor="description" className={labelClass}> 
                  Describe your requirement
                </label> 
                <textarea 
                  id="description" 
                  placeholder="Products, pack sizes, shade or variant preferences, target price band, distribution channel…" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows={5} 
                  className={`${fieldClass} resize-y min-h-[150px]`} 
                /> 
              </div> 
            </div> 
 
            <button 
              type="submit" 
              className="inline-flex items-center gap-2.5 bg-[#2E3192] hover:bg-indigo-900 !text-white font-bold text-[15px] rounded-lg px-6 py-2 mt-8 transition-colors" 
            > 
              Request Quotation 
              <ArrowRight className="w-4 h-4" /> 
            </button> 
 
            <p className="text-[14px] text-slate-500 mt-5"> 
              We use your details only to respond to this enquiry 
            </p> 
          </form> 
        </div> 
 
        {/* Right Section */} 
        <div> 
          <div className="bg-[##FCFAF7] border border-[#E8D6BB] rounded-2xl px-7 py-7"> 
            <h2 className="font-serif font-bold text-xl text-indigo-800 mb-4"> 
              What you receive 
            </h2> 
            <ul className="space-y-3.5"> 
              {[ 
                "Tiered pricing based on order volume", 
                "Confirmed MOQ and production lead time", 
                "Packaging and private-label options", 
                "Sample dispatch before bulk production", 
                "Dedicated account contact for your market", 
              ].map((item) => ( 
                <li 
                  key={item} 
                  className="flex gap-2.5 text-[15px] text-slate-600 leading-snug" 
                > 
                  <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0" /> 
                  <span>{item}</span> 
                </li> 
              ))} 
            </ul> 
          </div> 
        </div> 
      </div> 

      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSent(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-[18px] font-bold text-gray-900 mb-2">Request received</h3>
            <p className="text-[14px] text-gray-500 mb-5">Bulk quote request submitted successfully!</p>
            <button
              type="button"
              onClick={() => { setSent(false); navigate('/products'); }}
              className="px-6 py-2.5 bg-[#2E3192] text-white text-[14px] font-semibold rounded-lg cursor-pointer hover:bg-[#252775] transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      )}
    </section> 
  ); 
}; 
 
export default RequirementForm; 