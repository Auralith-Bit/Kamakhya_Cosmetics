import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

/* ✅ shared viewport flag */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);
  return isMobile;
};

/* ✅ shared submit logic (empty-cart modal + validation + submit + navigate) */
const useSubmitRequest = ({ formData, onSubmit }) => {
  const navigate = useNavigate();
  const { items, submitOrder } = useCart();
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  const handleClick = () => {
    if (items.length === 0) {
      setShowEmptyCart(true);
      return;
    }
    if (onSubmit?.()) {
      submitOrder(formData);
      navigate('/order-review');
    }
  };

  return { handleClick, showEmptyCart, setShowEmptyCart, navigate };
};

/* ✅ shared empty-cart modal */
const EmptyCartModal = ({ onClose, navigate }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
    <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-xl" onClick={(e) => e.stopPropagation()}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
      <h3 className="text-[18px] font-bold text-gray-900 mb-2">Cart is Empty</h3>
      <p className="text-[14px] text-gray-500 mb-5">Add products to your cart before submitting a request.</p>
      <button
        type="button"
        onClick={() => { onClose(); navigate('/products'); }}
        className="px-6 py-2.5 bg-[#2E3192] text-white text-[14px] font-semibold rounded-lg cursor-pointer hover:bg-[#252775] transition-colors"
      >
        Browse Products
      </button>
    </div>
  </div>
);

/* ✅ shared button + shipping note (identical in both placements) */
const SubmitButtonBlock = ({ onClick }) => (
  <>
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[55px] flex items-center justify-center gap-[10px] bg-[#2E3192] !text-white font-semibold text-[15px] rounded-[7px] border-none cursor-pointer transition-all hover:bg-[#252775] active:scale-[0.98]"
    >
      <LockIcon />
      Submit Request
    </button>
    <div className="flex flex-wrap justify-center items-center gap-1 text-[13px] text-gray-400 mt-4">
      <p className="m-0">Final invoice will be issued after order review</p>
      <p className="m-0">including the confirmed shipping charges.</p>
    </div>
  </>
);

/* =====================================================================
   DEPRECATED no-op — kept so any existing parent import keeps compiling.
   The mobile button is now portalled automatically by OrderSummaryCard.
   ===================================================================== */
export const SubmitRequestBlock = () => null;

/* =====================================================================
   Order Summary card
   - desktop/tablet: button inside the card (unchanged)
   - mobile: button portalled to the END of the container that holds the
     forms  →  always renders BELOW both form cards, no parent edits
   ===================================================================== */
const OrderSummaryCard = ({ formData = {}, onSubmit }) => {
  const isMobile = useIsMobile();
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();
  const { handleClick, showEmptyCart, setShowEmptyCart, navigate } = useSubmitRequest({ formData, onSubmit });

  const cardRef = React.useRef(null);
  const [portalTarget, setPortalTarget] = useState(null);

  /* ✅ find the layout container that also holds the form cards:
     nearest <form> ancestor, else the first ancestor with 2+ children */
  useEffect(() => {
    if (!isMobile) {
      setPortalTarget(null);
      return;
    }
    const card = cardRef.current;
    if (!card) return;

    let container = card.closest('form');
    if (!container) {
      container = card.parentElement;
      while (container && container.parentElement && container.children.length < 2) {
        container = container.parentElement;
      }
    }
    setPortalTarget(container || card.parentElement);
  }, [isMobile]);

  const tax = Math.round(subtotal * 0.13 * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;

  return (
    <div ref={cardRef} className="bg-white rounded-[10px] border border-[#D7DAE4] overflow-hidden">
      {showEmptyCart && <EmptyCartModal onClose={() => setShowEmptyCart(false)} navigate={navigate} />}

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
            <span className="text-gray-800">Not included</span>
          </div>
        </div>

        <div className="border-t border-[#D7DAE4] mt-5 mb-5" />

        <div className="flex justify-between items-center">
          <span className="text-[17px] font-bold text-brand-blue">Estimated Total</span>
          <span className="text-[20px] font-bold text-brand-blue">NRs. {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>

        {/* ✅ desktop/tablet ONLY — inside the card */}
        {!isMobile && (
          <div className="mt-6">
            <SubmitButtonBlock onClick={handleClick} />
          </div>
        )}
      </div>

      {/* ✅ MOBILE ONLY — portalled to the end of the forms' container,
           so it always sits BELOW both form cards.
           order:99 guarantees last position even if the container uses
           flex/grid `order` utilities; pointer-events/stacking stay normal. */}
      {isMobile &&
        portalTarget &&
        createPortal(
          <div className="mt-6 w-full" style={{ order: 99 }}>
            <SubmitButtonBlock onClick={handleClick} />
          </div>,
          portalTarget,
        )}
    </div>
  );
};

export default OrderSummaryCard;