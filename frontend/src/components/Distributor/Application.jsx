import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Application = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    vat: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
    territory: "",
    brands: "",
    notes: "",
    confirm: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validators = {
    companyName: (v) =>
      !v.trim()
        ? "Registered company name is required."
        : v.trim().length < 2
        ? "Company name must be at least 2 characters."
        : "",
    contact: (v) =>
      !v.trim() ? "Contact person is required." : "",
    email: (v) => {
      if (!v.trim()) return "Business email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()))
        return "Please enter a valid email address.";
      return "";
    },
    phone: (v) => {
      if (!v.trim()) return "Phone number is required.";
      if (!/^\+?[0-9\s\-().]{7,20}$/.test(v.trim()))
        return "Please enter a valid phone number (include country code).";
      return "";
    },
    country: (v) => (!v.trim() ? "Country is required." : ""),
    territory: (v) => (!v.trim() ? "Territory covered is required." : ""),
    confirm: (v) => (!v ? "You must confirm before submitting." : ""),
  };

  const validateField = (id, value) => {
    const validator = validators[id];
    if (!validator) return "";
    return validator(value);
  };

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [id]: newValue }));

    if (touched[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: validateField(id, newValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { id, type, value, checked } = e.target;
    const valueToValidate = type === "checkbox" ? checked : value;
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors((prev) => ({
      ...prev,
      [id]: validateField(id, valueToValidate),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(validators).forEach((id) => {
      const error = validateField(id, formData[id]);
      if (error) newErrors[id] = error;
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validators).reduce((acc, id) => ({ ...acc, [id]: true }), {})
    );

    if (Object.keys(newErrors).length > 0) return;

    console.log(formData);
  };

  const showError = (id) => touched[id] && errors[id];
  const invalidClass =
    "border-red-500 focus:ring-red-500 bg-red-50";
  const errorTextClass = "mt-1.5 text-[13px] text-red-600 font-semibold";

  const fieldClass =
    "w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-1";
  const labelClass = "block text-[15px] font-bold text-slate-800 mb-2.5";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      {/* Main Container */}
      <div className="page-container grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
        {/* Distributor Application Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-slate-200 rounded-2xl px-8 sm:px-10 pt-10 pb-11"
          >
            <h1 className="font-playfair font-semibold text-2xl text-indigo-800 mb-2.5">
              Distributor application
            </h1>
            <p className="text-[15px] font-poppins  text-slate-800 mb-7">
              All fields marked with an asterisk are required.
            </p>

            <div className="grid grid-cols- font-poppins sm:grid-cols-2 gap-x-8 gap-y-7">
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
                  onBlur={handleBlur}
                  aria-invalid={!!showError("companyName")}
                  aria-describedby={
                    showError("companyName") ? "companyName-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("companyName") ? invalidClass : ""
                  }`}
                />
                {showError("companyName") && (
                  <p id="companyName-error" className={errorTextClass}>
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="vat" className={labelClass}>
                  Registration / VAT number
                </label>
                <input
                  id="vat"
                  type="text"
                  placeholder="Optional at this stage"
                  value={formData.vat}
                  onChange={handleChange}
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
                  onBlur={handleBlur}
                  aria-invalid={!!showError("contact")}
                  aria-describedby={
                    showError("contact") ? "contact-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("contact") ? invalidClass : ""
                  }`}
                />
                {showError("contact") && (
                  <p id="contact-error" className={errorTextClass}>
                    {errors.contact}
                  </p>
                )}
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
                  onBlur={handleBlur}
                  noValidate
                  aria-invalid={!!showError("email")}
                  aria-describedby={
                    showError("email") ? "email-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("email") ? invalidClass : ""
                  }`}
                />
                {showError("email") && (
                  <p id="email-error" className={errorTextClass}>
                    {errors.email}
                  </p>
                )}
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
                  onBlur={handleBlur}
                  noValidate
                  aria-invalid={!!showError("phone")}
                  aria-describedby={
                    showError("phone") ? "phone-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("phone") ? invalidClass : ""
                  }`}
                />
                {showError("phone") && (
                  <p id="phone-error" className={errorTextClass}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="country" className={labelClass}>
                  Country*
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Country of operation"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!showError("country")}
                  aria-describedby={
                    showError("country") ? "country-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("country") ? invalidClass : ""
                  }`}
                />
                {showError("country") && (
                  <p id="country-error" className={errorTextClass}>
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="territory" className={labelClass}>
                  Territory covered*
                </label>
                <input
                  id="territory"
                  type="text"
                  placeholder="Cities, states or regions"
                  value={formData.territory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!showError("territory")}
                  aria-describedby={
                    showError("territory") ? "territory-error" : undefined
                  }
                  className={`${fieldClass} ${
                    showError("territory") ? invalidClass : ""
                  }`}
                />
                {showError("territory") && (
                  <p id="territory-error" className={errorTextClass}>
                    {errors.territory}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="brands" className={labelClass}>
                  Brands you currently carry
                </label>
                <input
                  id="brands"
                  type="text"
                  placeholder="Comparable brands in your portfolio"
                  value={formData.brands}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div className="sm:col-span-2 mt-1">
                <label htmlFor="notes" className={labelClass}>
                  Anything else we should know
                </label>
                <textarea
                  id="notes"
                  placeholder="Warehousing, fleet, sales team size, existing retail relationships…"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={5}
                  className={`${fieldClass} resize-y min-h-37.5`}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-7 mb-8">
              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="confirm"
                    type="checkbox"
                    checked={formData.confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    noValidate
                    aria-invalid={!!showError("confirm")}
                    aria-describedby={
                      showError("confirm") ? "confirm-error" : undefined
                    }
                    className={`w-5 h-5 mt-0.5 rounded accent-indigo-800 shrink-0 ${
                      showError("confirm") ? "outline outline-red-500" : ""
                    }`}
                  />
                  <label
                    htmlFor="confirm"
                    className="text-[15px] text-slate-600 leading-snug"
                  >
                    I confirm the information provided is accurate and Kamakhya
                    Cosmetics may contact me regarding this application. *
                  </label>
                </div>
                {showError("confirm") && (
                  <p id="confirm-error" className={`${errorTextClass} ml-8`}>
                    {errors.confirm}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2.5 bg-[#2E3192] hover:bg-indigo-900 text-white font-bold text-[15px] rounded-lg px-6 py-2 transition-colors"
            >
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* What we look for */}
          <div className="bg-[##FCFAF7] border border-amber-100 rounded-2xl px-7 py-7">
            <h2 className="font-serif font-bold text-xl text-indigo-800 mb-4">
              What we look for
            </h2>
            <ul className="space-y-3.5">
              {[
                "Registered business with valid trade and tax documentation",
                "Existing distribution or retail network in your territory.",
                "warehousing and logistics capability appropriate to volume",
                "A dedicated sales contact for the Kamakhya account",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-slate-600 leading-snug">
                  <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ready To Apply */}
          <div className="bg-white border border-slate-200 rounded-2xl px-7 py-7">
            <h2 className="font-playfair  text-2xl text-indigo-800 mb-3">
              Not Ready To Apply?
            </h2>
            <p className="text-[15px] text-[#666666] font-poppins leading-snug mb-5">
              Start with a bulk order or request a quotation to evaluate the
              range in your market first.
            </p>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#252775] text-white text-[15px] rounded-lg py-2.5 mb-3 "
            >
              Request a bulk quote
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white border border-[#252775] hover:bg-slate-50 text-indigo-800 font-poppins  text-[15px] rounded-lg py-2.5 transition-colors"
            >
              Browse the catalogue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;