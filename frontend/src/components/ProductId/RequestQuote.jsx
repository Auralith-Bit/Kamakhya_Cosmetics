import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function SampleRequestForm({ onBack, onSubmitted }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    regNumber: "",
    address: "",
    confirmed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [formError, setFormError] = useState("");

  const update = (field) => (e) => {
    const value = field === "confirmed" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validatePhone = (value) => {
    const digits = value.replace(/\D/g, "").trim();
    return /^(98|97)\d{8}$/.test(digits);
  };

  const validateField = (field, value) => {
    if (field === "email" && !value.trim()) {
      return "Please enter your email address.";
    }
    if (field === "email" && !validateEmail(value)) {
      return "Enter a valid email address.";
    }
    if (field === "phone" && !value.trim()) {
      return "Please enter your phone number.";
    }
    if (field === "phone" && !validatePhone(value)) {
      return "Phone number must be 10 digits and start with 98 or 97.";
    }
    return "";
  };

  const isValid =
    form.name.trim() &&
    validateEmail(form.email) &&
    validatePhone(form.phone) &&
    form.location.trim() &&
    form.regNumber.trim() &&
    form.address.trim() &&
    form.confirmed;

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    const isFormEmpty =
      !form.name.trim() &&
      !form.email.trim() &&
      !form.phone.trim() &&
      !form.location.trim() &&
      !form.regNumber.trim() &&
      !form.address.trim();
    const nextErrors = {};
    const emailError = validateField("email", form.email);
    const phoneError = validateField("phone", form.phone);
    if (emailError) nextErrors.email = emailError;
    if (phoneError) nextErrors.phone = phoneError;
    setErrors(nextErrors);
    if (isFormEmpty) {
      setFormError("Please fill out the form first.");
      return;
    }
    if (Object.keys(nextErrors).length > 0) {
      setFormError(
        "Please enter a correct email address and a 10-digit phone number starting with 98 or 97 before submitting."
      );
      return;
    }
    setFormError("");
    if (isValid) {
      if (onSubmitted) {
        onSubmitted(form);
      } else {
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="w-full border border-[#E7E2D6] rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      {/* Back + sample badge */}
      <div className="flex items-center justify-between flex-wrap  mb-6">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-[#2E3192] font-medium hover:opacity-80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to configuration
        </button>
        <div className="bg-[#2B2560] text-white rounded-lg text-right px-8 py-3">
          <p className="text-base text-[#CCA466] font-poppins">
            Sample request
          </p>
          <p className="text-sm font-poppins">30 ml</p>
        </div>
      </div>

      <p className="text-base font-poppins tracking-widest text-[#E38F2E]">
          Business Verification
        </p>
        <div className="w-8 h-[2px] bg-[#C08A2E] mt-2 mb-4" />

        <h3 className="font-playfair text-xl text-[#1F1F1F]">
          Where should we ship your sample?
        </h3>
        <p className="mt-2 text-base text-[#6B6B6B] leading-relaxed">
          Samples are released only to verified businesses. Share your
          registration and delivery details so we can dispatch.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-[#C08A2E]/40 bg-[#FBF6EA] p-6 text-center">
            <p className="font-serif text-xl text-[#2B2560]">
              Request received
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B]">
              We'll verify your business details and follow up within 2
              business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <Field label="Company Name / Contact Person Name" required>
            <input
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={update("name")}
              className={inputClasses}
            />
          </Field>

          <Field label="Email" required>
            <input
              type="email"
              placeholder="info@business.abc."
              value={form.email}
              onChange={update("email")}
              className={errors.email ? inputClasses + " border-red-400" : inputClasses}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Phone / WhatsApp" required>
              <input
                type="tel"
                placeholder="98XXXXXXXX"
                maxLength={10}
                value={form.phone}
                onChange={update("phone")}
                className={errors.phone ? inputClasses + " border-red-400" : inputClasses}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
              )}
            </Field>
            <Field label="Location" required>
              <input
                type="text"
                placeholder="Your location"
                value={form.location}
                onChange={update("location")}
                className={inputClasses}
              />
            </Field>
          </div>

          <Field label="Business registration / VAT" required>
            <input
              type="text"
              placeholder="Enter details"
              value={form.regNumber}
              onChange={update("regNumber")}
              className={inputClasses}
            />
          </Field>

          <Field label="Shipping address" required>
            <input
              type="text"
              placeholder="Registered business address for sample"
              value={form.address}
              onChange={update("address")}
              className={inputClasses}
            />
          </Field>

          <div className="rounded-lg border border-[#E9C97A] bg-[#FBF6EA] p-4 text-sm text-[#6B5A2E] leading-relaxed">
            Samples are dispatched to registered business addresses only.
            Courier charges may apply for international destinations and
            are confirmed before shipping.
          </div>

          <label className="flex items-start gap-3 rounded-lg border border-[#E7E2D6] p-4 text-sm text-[#4A4A4A] cursor-pointer">
            <input
              type="checkbox"
              checked={form.confirmed}
              onChange={update("confirmed")}
              className="mt-0.5 w-4 h-4 rounded border-[#C0BCAF] accent-[#2B2560]"
            />
            <span>
              I confirm these are genuine business details and authorise
              Kamakhya Cosmetics to verify them before dispatching the
              sample.
            </span>
          </label>

          {attempted && formError && (
            <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
              {formError}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#2B2560] !text-white font-medium py-3.5 transition hover:bg-[#231d4d]"
          >
            Submit Sample Request
          </button>

          <p className="text-center text-xs text-[#8A8A8A]">
            Verification within 2 business days · dispatch within 5
          </p>
        </form>
        )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-lg border border-[#DAD5C7] bg-[#F7F5EF] px-4 py-3 text-sm text-[#1F1F1F] placeholder-[#9C9789] outline-none focus:border-[#2B2560] focus:ring-2 focus:ring-[#2B2560]/20 transition";

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm text-[#1F1F1F] mb-2">
        {label} {required && <span className="text-[#C08A2E]">*</span>}
      </label>
      {children}
    </div>
  );
}