import React, { useState } from 'react';
import BusinessContactCard from './BusinessContactCard';
import DeliveryDetailsCard from './DeliveryDetailsCard';
import OrderSummaryCard from './OrderSummaryCard';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^(97|98)\d{8}$/;

const CheckoutBody = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    city: '',
    country: '',
    orderNotes: '',
  });

  const [errors, setErrors] = useState({});
  const [showFormTopError, setShowFormTopError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (showFormTopError) setShowFormTopError(false);
  };

  const validate = () => {
    const e = {};
    if (!formData.companyName.trim()) e.companyName = 'Company name is required';
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!emailRe.test(formData.email.trim())) e.email = 'Enter a valid email';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    else if (!phoneRe.test(formData.phone.trim())) e.phone = 'Enter a valid phone number';
    if (!formData.deliveryAddress.trim()) e.deliveryAddress = 'Delivery address is required';
    if (!formData.city.trim()) e.city = 'City is required';
    if (!formData.country) e.country = 'Country is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    const ok = validate();
    if (!ok) setShowFormTopError(true);
    return ok;
  };

  return (
    <section className="w-full bg-[#FAF6F1] px-[125px] py-[60px] max-lg:px-8 max-lg:py-10 max-sm:px-5 max-sm:py-8">
      {showFormTopError && (
        <div className="mx-auto max-w-[1280px] mb-6 sm:hidden flex items-center gap-2 bg-red-50 border border-red-300 text-red-600 text-[14px] font-medium rounded-lg px-4 py-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Please fill the form below.
        </div>
      )}
      <div className="mx-auto max-w-[1280px] grid grid-cols-[3fr_2fr] gap-8 items-start max-lg:grid-cols-1">
        <div className="flex flex-col gap-6">
          <BusinessContactCard formData={formData} onChange={handleChange} errors={errors} />
          <DeliveryDetailsCard formData={formData} onChange={handleChange} errors={errors} />
        </div>

        <div className="max-lg:order-first lg:sticky lg:top-28">
          <OrderSummaryCard formData={formData} onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default CheckoutBody;