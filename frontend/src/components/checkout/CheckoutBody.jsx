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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
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
    if (!formData.orderNotes.trim()) e.orderNotes = 'Order notes are required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    return validate();
  };

  return (
    <section className="w-full bg-[#FAF6F1] px-[125px] py-[60px] max-lg:px-8 max-lg:py-10 max-sm:px-5 max-sm:py-8">
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