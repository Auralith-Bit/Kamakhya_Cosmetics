import { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react'

const STORAGE_KEY = 'kamakhya-cart'

const readStoredCart = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readStoredCart)
  const [submittedOrder, setSubmittedOrder] = useState(null)
  const [toast, setToast] = useState(false)
  const toastTimer = useRef(null)

  // Keep localStorage in sync so the cart survives page reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore storage errors (e.g. private browsing mode).
    }
  }, [items])

  // Auto-hide the toast after a short delay.
  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const showToast = useCallback(() => {
    setToast(true)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(false), 2000)
  }, [])

  const addToCart = (product, options = {}) => {
    const { packSize, unitsPerPack, batches = 1, price } = options
    const quantity = Math.max(1, Number(batches) || 1)
    const unitCost = price != null ? Number(price) : 0
    const linePrice = Math.round(unitCost * quantity * 100) / 100

    setItems((prev) => {
      // Same product + pack + volume tier → just bump the batch count.
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === packSize &&
          item.unitsPerPack === unitsPerPack
      )
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + quantity, price: item.price + linePrice }
            : item
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.title,
          image: product.image,
          size: packSize || '',
          unitsPerPack: unitsPerPack || 0,
          quantity,
          price: linePrice,
          unitCost: Math.round(unitCost * 100) / 100,
        },
      ]
    })
    showToast()
  }

  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        const nextQuantity = Math.max(1, item.quantity + delta)
        return {
          ...item,
          quantity: nextQuantity,
          price: Math.round(item.unitCost * nextQuantity * 100) / 100,
        }
      })
    )
  }

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setItems([])

  const submitOrder = (details = {}) => {
    const shipping = subtotal > 0 ? 500 : 0
    const tax = Math.round(subtotal * 0.13 * 100) / 100
    const total = Math.round((subtotal + tax + shipping) * 100) / 100
    setSubmittedOrder({
      items,
      subtotal,
      tax,
      shipping,
      total,
      ref: `KC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      companyName: details.companyName || '',
      fullName: details.fullName || '',
      email: details.email || '',
      phone: details.phone || '',
      deliveryAddress: details.deliveryAddress || '',
      city: details.city || '',
      country: details.country || '',
      orderNotes: details.orderNotes || '',
      submittedAt: new Date().toISOString(),
    })
    setItems([])
  }

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      submittedOrder,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      submitOrder,
    }),
    [items, cartCount, subtotal, submittedOrder]
  )

  return (
    <CartContext.Provider value={value}>
      {children}

      {/* "Product added to cart" popup — bottom right corner */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#2E3192',
            color: '#ffffff',
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            padding: '12px 20px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(46, 49, 146, 0.3)',
            animation: 'kamakhya-toast-in 0.25s ease-out',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="#E38F2E"
            stroke="none"
            aria-hidden="true"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
          </svg>
          Product added to cart
        </div>
      )}

      <style>{`
        @keyframes kamakhya-toast-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}