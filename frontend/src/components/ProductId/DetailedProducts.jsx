import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import { CheckCircle2, Minus, Plus, ShoppingBag, Sparkles, FlaskConical, Droplet, ShieldAlert, ArrowRight, Check } from 'lucide-react'
import { products } from '../../data/product'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import SampleRequestForm from './RequestQuote'
import SampleReceived from './SampleReceived'
import Curve from '../../assets/Curve.svg'
import ProductCard from '../Products/ProductCard'

const defaultPackSizes = [{ size: '30 ml', label: 'Standard', desc: 'Standard packaging' }]
const defaultVolumeTiers = [{ units: 300, price: 5.0, label: 'Standard tier' }]
const defaultTabs = {
  'Clinical Benefits': [
    'Visibly brightens and evens skin tone with regular use',
    'Deeply hydrates while strengthening the skin barrier',
    'Reduces the appearance of fine lines and dullness',
    'Hyposensitising formula suitable for sensitive skin',
  ],
  'Key Ingredients': [
    'Stabilised vitamin C complex for antioxidant protection',
    'Hyaluronic acid for long-lasting moisture retention',
    'Derived botanical extracts to soothe and calm the skin',
    'Niacinamide to refine pores and improve texture',
  ],
  'How to use': [
    'Apply a small amount to clean, dry skin',
    'Massage gently in circular motions until absorbed',
    'For best results, use twice daily — morning and evening',
    'Pair with sunscreen during daytime use',
  ],
  'Safety Information': [
    'For external use only',
    'Keep away from direct heat and sunlight',
    'Avoid contact with eyes; rinse thoroughly if it occurs',
    'Store in a cool, dry place below 30°C',
  ],
}

const tabIcons = {
  'Clinical Benefits': Sparkles,
  'Key Ingredients': FlaskConical,
  'How to use': Droplet,
  'Safety Information': ShieldAlert,
}

const YOU_MAY_ALSO_LIKE_COUNT = 4

const ProductDetailed = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find((p) => String(p.id) === id)

  const packSizes = product?.packSizes?.length ? product.packSizes : defaultPackSizes
  const volumeTiers = product?.volumeTiers?.length ? product.volumeTiers : defaultVolumeTiers
  const tabs = product?.tabs && Object.keys(product.tabs).length ? product.tabs : defaultTabs

  const [activeImage, setActiveImage] = useState(0)
  const [selectedPack, setSelectedPack] = useState(0)
  const [selectedVolume, setSelectedVolume] = useState(0)
  const [batches, setBatches] = useState(1)
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0])
  const [sampleStage, setSampleStage] = useState('config')

  // Reset selection state whenever the product id changes, so stale indices
  // from a previous product (e.g. selectedPack = 3 on a product that only has
  // 1 pack size) can't cause an out-of-bounds crash. Using the "adjust state
  // during render" pattern keeps the component in sync without an effect.
  const [prevProductId, setPrevProductId] = useState(id)
  if (prevProductId !== id) {
    setPrevProductId(id)
    setActiveImage(0)
    setSelectedPack(0)
    setSelectedVolume(0)
    setBatches(1)
    setActiveTab(Object.keys(tabs)[0])
    setSampleStage('config')
  }

  // Keep the browser title in sync with the product being viewed.
  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Kamakhya`
    }
  }, [product])

  const volume = volumeTiers[selectedVolume]
  const totalUnits = volume?.units ? volume.units * batches : 0
  const orderTotal = volume?.price != null ? (volume.price * volume.units * batches).toFixed(2) : null

  // Recommendations: prefer same-category products, excluding the current
  // one; if there aren't enough, pad with any other products so the strip
  // never looks sparse.
  const recommendedProducts = product
    ? (() => {
      const sameCategory = products.filter(
        (p) => p.id !== product.id && p.category === product.category
      )
      if (sameCategory.length >= YOU_MAY_ALSO_LIKE_COUNT) {
        return sameCategory.slice(0, YOU_MAY_ALSO_LIKE_COUNT)
      }
      const others = products.filter(
        (p) => p.id !== product.id && !sameCategory.includes(p)
      )
      return [...sameCategory, ...others].slice(0, YOU_MAY_ALSO_LIKE_COUNT)
    })()
    : []

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FCF9F2]">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/products" className="text-[#2E3192] font-medium underline">
          Back to Catalogue
        </Link>
      </div>
    )
  }

  // Guard against a stale index if data length ever shrinks between renders
  const activePack = packSizes[selectedPack] ?? packSizes[0]

  return (
    <div className="bg-[#FCF9F2] min-h-screen font-poppins">

      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Image Section  */}
        <div className="lg:sticky lg:top-24 lg:self-start min-[641px]:max-[1023px]:max-w-md min-[641px]:max-[1023px]:mx-auto">
          <div className="rounded-lg overflow-hidden  border border-gray-200 mb-4">
            <img
              src={product.images?.[activeImage] || product.image}
              alt={product.title}
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="flex gap-3">
            {(product.images || [product.image]).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1} of ${product.title}`}
                aria-pressed={activeImage === i}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${activeImage === i ? 'border-orange-400' : 'border-transparent'
                  }`}
              >
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info + configurator */}
        <div className="bg-white rounded-lg p-8 border border-gray-100  shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <p className="tracking-widest font-poppins text-[#E38F2E] mb-1">{product.tag}</p>
          <div className='h-0.5 w-20 mb-5 bg-[#E38F2E] rounded-full' />
          <h2 className="text-3xl tracking-wider font-playfair font-bold text-[#2E3192] mb-2">{product.title}</h2>
          <p className="text-sm text-[#666666] mb-4">{product.desc}</p>

          {product.notes?.length > 0 && (
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-2">Product Notes</p>
              <ul className="space-y-1.5">
                {product.notes.map((note, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-poppins text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#CCA466]" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {sampleStage === 'form' ? (
            <SampleRequestForm
              product={product}
              onBack={() => setSampleStage('config')}
              onSubmitted={() => setSampleStage('received')}
            />
          ) : sampleStage === 'received' ? (
            <SampleReceived product={product} onSubmitAnother={() => setSampleStage('form')} />
          ) : (
            <>
            {/* Pack size */}
            <div className="mb-6">
              <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                <span className="w-6 h-6 rounded-full font-poppins bg-[#2E3192] text-white text-xs flex items-center justify-center">1</span>
                Select Pack Size
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {packSizes.map((pack, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPack(i)}
                    aria-pressed={selectedPack === i}
                    className={`text-left p-3 rounded-xl border relative ${selectedPack === i ? 'border-orange-400 bg-orange-50' : 'border-gray-200'
                      }`}
                  >
                    {selectedPack === i && (
                      <CheckCircle2 className="w-4 h-4 text-[#E38F2E] absolute top-3 right-3" />
                    )}
                    <p className="font-serif font-semibold text-[#2E3192]">{pack.size}</p>
                    <p className="text-xs text-[#E38F2E] mb-1">{pack.label}</p>
                    <p className="text-xs text-gray-500">{pack.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Order volume */}
            <div className="mb-6">
              <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#2E3192] text-white text-xs flex items-center justify-center">2</span>
                Select Order Volume
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {volumeTiers.map((tier, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVolume(i)}
                    aria-pressed={selectedVolume === i}
                    className={`text-left p-3 rounded-xl border border-[#E38F2E] relative ${selectedVolume === i ? 'border-[#E38F2E] bg-orange-50' : 'border-gray-200'
                      }`}
                  >
                    {selectedVolume === i && (
                      <CheckCircle2 className="w-4 h-4 text-orange-400 absolute top-3 right-3" />
                    )}
                    <p className="font-serif font-semibold text-[#2E3192]">
                      {tier.custom ? `${tier.units.toLocaleString()}+ units` : `${tier.units} units`}
                    </p>
                    <p className="text-xs font-poppins text-[#E38F2E] mb-1">
                      {tier.custom ? tier.label : `NRs ${tier.price.toFixed(2)}/unit`}
                    </p>
                    <p className="text-xs text-gray-500">{tier.custom ? 'Custom pricing' : tier.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Batches */}
            <div className="mb-6">
              <p className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#2E3192] text-white text-xs flex items-center justify-center">3</span>
                Select Number of Batches
              </p>
              <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setBatches((b) => Math.max(1, b - 1))}
                    aria-label="Decrease number of batches"
                    className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-lg" aria-live="polite">{batches}</span>
                  <button
                    onClick={() => setBatches((b) => b + 1)}
                    aria-label="Increase number of batches"
                    className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  {volume?.units} units × {batches} batch{batches > 1 ? 'es' : ''}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#191B50] text-white rounded-xl p-5 mb-5">
              <div className="flex justify-between mb-3 bg-[#191850]">
                <div>
                  <p className="text-orange-300 text-xs mb-1">Order Configuration</p>
                  <p className="font-serif font-semibold">{activePack.size}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{volume?.price != null ? `NRs ${volume.price.toFixed(2)}` : '—'}</p>
                  <p className="text-xs text-orange-200">per unit</p>
                </div>
              </div>
              <hr className="border-white/20 mb-3" />
              <div className="flex justify-between bg-[#191850]">
                <div>
                  <p className="text-orange-300 text-xs mb-1">Total units</p>
                  <p className="font-bold">{totalUnits}</p>
                  <p className="text-xs text-orange-200">{volume?.units} x {batches}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-orange-200 mb-1">order total</p>
                  <p className="font-bold text-orange-300 text-lg">
                    {orderTotal ? `NRs ${Number(orderTotal).toLocaleString()}` : 'Request Quote'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-15 max-sm:grid-cols-1">
              <button
                onClick={() => {
                  addToCart(product, {
                    packSize: activePack.size,
                    unitsPerPack: volume?.units,
                    batches,
                    price: volume?.price,
                  })
                }}
                className="flex items-center justify-center border-[3px] border-[#252775] font-poppins  bg-[#2E3192] text-white text-xs rounded-lg py-2 px-12 font-medium whitespace-nowrap cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Order
              </button>
              <button
                onClick={() => setSampleStage('form')}
                className="flex items-center justify-center border-2  border-[#CCA466] font-poppins text-[#E38F2E] text-xs rounded-lg py-2 px-12 font-medium whitespace-nowrap cursor-pointer"
              >
                Request Sample Kit
              </button>
            </div>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 py-14">
          <div className="flex gap-5 border-b  border-[#D7DAE4] bg-[#F5F5FA] mb-6 justify-evenly items-center pt-3 ">
            {Object.keys(tabs).map((tabName) => {
              const Icon = tabIcons[tabName] || Sparkles
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  aria-pressed={activeTab === tabName}
                  className={`flex items-center  gap-2 pb-3 px-1 whitespace-nowrap text-sm font-medium border-b-2 ${activeTab === tabName
                    ? 'border-[#E38F2E] text-[#E38F2E]'
                    : 'border-transparent text-gray-500'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {tabName}
                </button>
              )
            })}
          </div>

          {activeTab === 'Clinical Benefits' ? (
            <div className="w-full bg-white  px-6 py-10">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="shrink-0 w-14 h-14 rounded-full border border-[#E8D6BA] bg-[#F7F1E8] flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-hero-orange" strokeWidth={1.5} />
                  </div>
                  <div>

                    <p className="text-sm font-poppins  text-[#333333] mb-1">
                      Performance profile
                    </p>
                    <h2 className="text-xl font-playfair text-[#2E3192] mb-1 ">
                      {activeTab} designed for visible results.
                    </h2>
                    <p className="text-[#666666] font-poppins text-sm">
                      A balanced active system supports luminosity and texture while
                      respecting the skin barrier.
                    </p>
                  </div>
                </div>

                {/* Points grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tabs[activeTab]?.length > 0 ? (
                    tabs[activeTab].map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-[#E8D6BA] bg-[#FCFAF7] px-6 py-2"
                      >
                        <span className="text-[#E38F2E] font-semibold text-sm shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-indigo-900 text-base">{point}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No details available.</p>
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === 'Key Ingredients' ? (
            <div className="w-full bg-white px-6 py-10">
              <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="shrink-0 w-14 h-14 border border-[#E8D6BA] rounded-full bg-[#F7F1E8] flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-[#E38F2E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-poppins  text-slate-900 mb-1">
                      Ingredient architecture
                    </p>
                    <h2 className="text-xl font-playfair text-[#2E3192] mb-1">
                      Botanical actives, clearly presented.
                    </h2>
                    <p className="text-slate-500 text-base">
                      Review the principal formulation components before requesting
                      technical or regulatory documentation.
                    </p>
                  </div>
                </div>

                {/* Ingredient pills */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {tabs[activeTab]?.length > 0 ? (
                    tabs[activeTab].map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F5F5FA] px-5 py-2"
                      >
                        <span className="shrink-0 w-5 h-5 rounded-full border border-orange-300 flex items-center justify-center">
                          <Check className="w-3 h-3 text-orange-400" strokeWidth={3} />
                        </span>
                        <span className="text-slate-800 text-base">{point}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm">No details available.</p>
                  )}
                </div>

                {/* Footer note */}
                <div className="border-l-2 border-orange-300 bg-orange-50/40 px-5 py-2">
                  <p className="text-slate-700 text-base">
                    Full INCI documentation and concentration ranges are available to
                    verified wholesale buyers through business support.
                  </p>
                </div>
              </div>
            </div>
          ) : activeTab === 'How to use' ? (
            <div className="w-full bg-white  px-6 py-10">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="shrink-0 w-14 h-14 rounded-full border border-[#E8D6BA] bg-[#F7F1E8] flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-hero-orange strokeWidth={1.5}"/>
                    
                </div>
                <div>
                  <p className="text-sm text-slate-900 mb-1">
                    Application ritual
                  </p>

                  <h2 className="text-xl font-playfair text-brand-blue mb-1">
                    Simple, consistent application for best results.
                  </h2>
                  <p className="text-slate-500 text-base">
                    Introduce the serum gradually and layer it before creams or
                    oils in a professional or at-home routine.
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tabs[activeTab]?.length > 0 ? (
                  tabs[activeTab].map((point, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-[#E8D6BA] bg-[#FCFAF7] px-6 py-6"
                    >
                      <p className="text-[#E38F2E] text-base font-medium font-poppins mb-2">
                        {`Step ${String(i + 1).padStart(2, '0')}`}
                      </p>
                      <p className="text-[#2E3192] font-poppins mb-1 ">
                        Example
                      </p>
                      <p className="text-slate-500  font-poppins text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">No details available.</p>
                )}
              </div>
            </div>
          </div>
        ) : (
        <div className="w-full bg-white px-6 py-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="shrink-0 w-14 h-14 rounded-full border border-[#E8D6BA] bg-[#F7F1E8] flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-[#E38F2E]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm  text-slate-900 mb-1">
                  Safety profile
                </p>
                <h2 className="text-xl font-playfair text-[#2E3192] mb-1">
                  Designed with sensitive-skin standards in mind.
                </h2>
                <p className="text-slate-500 text-base">
                  Use the formulation guidance below when evaluating suitability
                  for your market and customer base.
                </p>
              </div>
            </div>

            {/* Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {/* Light panel */}
              <div className="rounded-xl border border-orange-100 bg-orange-50/30 px-7 py-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="w-5 h-5 text-orange-400" strokeWidth={1.75} />
                  <h3 className="text-indigo-900 ">
                    Allergy information
                  </h3>
                </div>
                <p className="text-slate-500 text-base leading-relaxed">
                  Formulated without parabens, sulfates, phthalates, synthetic
                  fragrances, or common nut allergens. Dermatologically tested on
                  sensitive skin panels.
                </p>
              </div>

              {/* Dark panel */}
              <div className="rounded-xl bg-indigo-950 px-7 py-6">
                <h3 className="text-orange-300  mb-1">
                  Allergy Information
                </h3>
                <ul className="space-y-2">
                  {tabs[activeTab]?.length > 0 ? (
                    tabs[activeTab].map((point, i) => (
                      <li key={i} className="flex items-start  text-white gap-2 text-sm">
                        <span className="text-white ">•</span>
                        <span>{point}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-white/70 text-sm">No details available.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>

      {/* Business Support Section  */ }
  <div className='w-full bg-[#151642] py-14'>
    <div className='max-w-6xl mx-auto px-5 sm:px-10 flex flex-col lg:flex-row justify-between items-center gap-8'>
      {/* Left Section */}
      <div className='flex flex-col text-white gap-3 max-w-2xl'>
        <h2 className='font-playfair text-2xl md:text-3xl leading-tight'>
          Need product documentation before you configure an order?
        </h2>
        <p className='text-white/70 font-poppins text-sm '>
          For verified wholesale buyers, our business team can guide the appropriate technical documentation, packaging compatibility and sample pathway.
        </p>
      </div>

      {/* Right Section - button */}
      <div className='shrink-0'>
        <Link
          to={"/bulk-quote"}
          className='inline-flex items-center gap-2 bg-[#CCA466] px-10 py-2 rounded-lg text-[#151642] font-poppins hover:bg-[#b8925a] text-sm transition-colors'
        >
          Contact Business Support
          <ArrowRight className='w-4 h-4' />
        </Link>
      </div>
    </div>
  </div>

  {/* You May Also Like Section  */ }
  <div>
    <div className="flex flex-col items-center justify-center py-14 sm:py-16 lg:py-20">
      <h2 className='text-[#E38F2E] uppercase'>You May Also Like</h2>
      <h1 className='text-center text-3xl text-[#2E3192] tracking-wide font-playfair'>Find Your Next Beauty Essential</h1>
      <div><img src={Curve} alt="" /></div>
      <p className='font-poppins text-center text-[#666666] max-w-3xl  mx-auto'>
        Explore more skincare and beauty favorites, thoughtfully selected to complement your routine and elevate your everyday care.
      </p>
    </div>

    <div className="px-5 sm:px-10 lg:px-20">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
            <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-[641px]:max-[1023px]:gap-7">
        {recommendedProducts.map((recProduct) => (
          <ProductCard key={recProduct.id} product={recProduct} />
        ))}
      </div>

      <div className="flex justify-center mt-10 pb-14 sm:pb-16 lg:pb-20">
        <Link
          to="/products"
          className="flex items-center gap-2 border border-[#2E3192] text-[#2E3192] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#2E3192] hover:text-white transition"
        >
          Explore All Collections
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>

    </div >
  )
}

export default ProductDetailed