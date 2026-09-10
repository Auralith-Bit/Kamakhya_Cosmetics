import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const OrderSummaryCard = ({ formData = {} }) => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, subtotal, submitOrder } = useCart();

  const tax = Math.round(subtotal * 0.13 * 100) / 100;
  const shipping = 500;
  const total = Math.round((subtotal + tax + shipping) * 100) / 100;

  return (
    <div className="bg-white rounded-[10px] border border-[#D7DAE4] overflow-hidden">
      <div className="px-[25px] pt-[30px] pb-0">
        <div className="border-b border-[#D7DAE4] pb-4">
          <h2 className="m-0 font-title text-brand-blue text-[22px] font-bold leading-tight">
            Order Summary
          </h2>
        </div>
      </div>

      <div className="px-[25px] pt-4">
        <div className="order-summary-scroll max-h-[336px] overflow-y-auto pr-1">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => updateQuantity(item.id, 1)}
              onDecrease={() => updateQuantity(item.id, -1)}
              onRemove={() => removeFromCart(item.id)}
            />
          ))}
          {items.length === 0 && (
            <p className="text-center text-[14px] text-gray-400 py-8 m-0">
              Your cart is empty
            </p>
          )}
        </div>
      </div>

      <div className="px-[25px] pt-5 pb-[30px]">
        <div className="flex flex-col gap-[14px]">
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-800">NRs. {Math.round(subtotal).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-500">Tax (13%)</span>
            <span className="text-gray-800">NRs. {tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between text-[14px]">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-800">NRs. {shipping}</span>
          </div>
        </div>

        <div className="border-t border-[#D7DAE4] mt-5 mb-5" />

        <div className="flex justify-between items-center">
          <span className="text-[17px] font-bold text-brand-blue">Estimated Total</span>
          <span className="text-[20px] font-bold text-brand-blue">NRs. {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>

        <div className="mt-6">
          {/* ✅ Submit Request → /order-review */}
          <button
            type="button"
            onClick={() => {
              submitOrder(formData);
              navigate('/order-review');
            }}
            className="w-full h-[55px] flex items-center justify-center gap-[10px] bg-[#2E3192] !text-white font-semibold text-[15px] rounded-[7px] border-none cursor-pointer transition-all hover:bg-[#252775] active:scale-[0.98]"
          >
            <LockIcon />
            Submit Request
          </button>
          <p className="text-center text-[13px] text-gray-400 mt-4 m-0">
            Final invoice will be issued after review
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;