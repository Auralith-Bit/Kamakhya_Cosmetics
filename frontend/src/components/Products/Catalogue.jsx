import React, { useState, useMemo } from 'react'
import { Search, Headphones, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import { products } from '../../data/product'
import { useWishlist } from '../../context/WishlistContext'

const brands = ['Royal Luxury', 'Shine']

const RoyalCategories = [
    'Hair Care', 'Face Care', 'Lip Care',
    'Sun Care', 'Body Care',
]

const ShineCategories = [
    'Bathroom Cleaners', 'Floor and Surface Cleaners',
    'Glass Cleaners', 'Kitchen & Dishwashing',
    'Laundry',
]

// Maps a brand name to its category list. Used to decide which
// categories render in the sidebar, and to validate/reset selection
// whenever the brand changes.
const categoriesByBrand = {
    'Royal Luxury': RoyalCategories,
    'Shine': ShineCategories,
}

const productTypes = ['Featured', 'Best Seller', 'Signatured Products']

const PRODUCTS_PER_PAGE = 12


/*
  Single-select filter section.
  `selected` is a single string (or '' for none), not an array.
  Clicking an already-selected item deselects it (clears the group).
  Clicking a different item switches selection to it.
  Kept as <input type="checkbox"> visually per design, but behaves
  like a radio group functionally + via aria-checked/role for a11y.
*/

const FilterSection = ({ title, items, selected, onSelect, emptyMessage }) => (
    <div className="mb-6" role="radiogroup" aria-label={title}>
        <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
        {items.length === 0 && emptyMessage ? (
            <p className="text-xs text-gray-400 italic">{emptyMessage}</p>
        ) : (
            <div className="space-y-2">
                {items.map(({ name, count }) => {
                    const isChecked = selected === name
                    return (
                        <label
                            key={name}
                            className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    role="radio"
                                    aria-checked={isChecked}
                                    className="rounded border-gray-300"
                                    checked={isChecked}
                                    onChange={() => onSelect(name)}
                                />
                                {name}
                            </span>
                            <span className="text-xs font-medium text-[#2E3192]">({count})</span>
                        </label>
                    )
                })}
            </div>
        )}
    </div>
)

const NeedHelpBox = () => (
    <div className="bg-[#FBF6ED] rounded-2xl p-4 text-center">
        <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-orange-300 flex items-center justify-center">
            <Headphones className="w-5 h-5 text-orange-400" />
        </div>
        <p className="font-semibold text-gray-800 text-sm mb-1">
            Need Help?
        </p>
        <p className="text-xs text-gray-500 mb-3">
            We're here for your business sourcing needs.
        </p>
        <Link to='/contact-us' className="border border-orange-300 text-orange-500 text-xs font-medium rounded-full px-4 py-2">
            CONTACT US
        </Link>
    </div>
)

const FONT_BODY = "'Poppins', sans-serif"
const FONT_TITLE = "'Playfair Display', 'Playfair', serif"

const ProductCard = ({ product }) => {
    const { isInWishlist, toggleWishlist } = useWishlist()
    const inWishlist = isInWishlist(product.id)

    return (
    <div
        className="relative bg-white w-full max-w-[330px] lg:max-w-[340px] mx-auto"
        style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '16px',
            border: '1px solid rgba(204, 164, 102, 0.15)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            transition: 'box-shadow 300ms ease-out',
            overflow: 'hidden',
            height: '100%',
        }}
        onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.16)'
            const img = e.currentTarget.querySelector('.card-img')
            const curve = e.currentTarget.querySelector('.card-curve')
            if (img) img.style.transform = 'scale(1)'
            if (curve) curve.style.transform = 'translateY(4px) scale(1)'
        }}
        onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)'
            const img = e.currentTarget.querySelector('.card-img')
            const curve = e.currentTarget.querySelector('.card-curve')
            if (img) img.style.transform = 'scale(1.08)'
            if (curve) curve.style.transform = 'translateY(4px) scale(1.08)'
        }}
    >
        {/* ── Image with curved gold bottom ── */}
        <div className="relative w-full" style={{ aspectRatio: '371 / 314' }}>
            <div
                className="absolute inset-0"
                style={{ clipPath: 'url(#figureCardImageClip)' }}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="card-img absolute inset-0 w-full h-full object-cover"
                    style={{
                        objectPosition: 'center 40%',
                        transform: 'scale(1.08)',
                        transition: 'transform 300ms ease-out',
                        transformOrigin: 'center 40%',
                    }}
                />
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 371 314"
                fill="none"
                preserveAspectRatio="none"
                className="card-curve absolute bottom-0 left-0 w-full pointer-events-none"
                style={{
                    height: '100%',
                    transform: 'translateY(4px) scale(1.08)',
                    transformOrigin: 'center bottom',
                    transition: 'transform 300ms ease-out',
                    overflow: 'visible',
                }}
            >
                <path d="M371 256.16 C371 259.24 369.4 262.1 366.73 263.82 C318.28 294.53 254.65 314 185 314 C115.83 314 52.64 294.78 4.34 264.48 C1.6 262.76 0 259.87 0 256.79" stroke="#CCA466" strokeWidth="2.5" fill="none" />
            </svg>

            <span
                className="absolute flex items-center"
                style={{
                    top: '14px',
                    left: '14px',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontFamily: FONT_BODY,
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.8px',
                    background: '#fff',
                    color: '#CCA466',
                    backdropFilter: 'blur(4px)',
                }}
            >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {(product.tag || 'FEATURED').toUpperCase()}
            </span>

            <button
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    toggleWishlist(product.id)
                }}
                className="absolute rounded-full cursor-pointer"
                style={{
                    top: '14px',
                    right: '14px',
                    width: '40px',
                    height: '40px',
                    background: '#fff',
                    border: '2px solid #CCA466',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                }}
                aria-label="Toggle wishlist"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={inWishlist ? '#E11D48' : 'none'}
                    stroke={inWishlist ? '#E11D48' : '#2E3192'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
        </div>

        {/* ── Content ── */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '18px 20px 18px', overflow: 'hidden' }}>
            {/* Product title */}
            <Link to={`/products/${product.id}`} className="no-underline">
                <h3
                    className="m-0"
                    style={{
                        fontFamily: FONT_TITLE,
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: 1.2,
                        color: '#292929',
                        textAlign: 'center',
                        marginBottom: '8px',
                        flexShrink: 0,
                        height: '24px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {product.title}
                </h3>
            </Link>

            <p
                className="m-0"
                style={{
                    fontFamily: FONT_BODY,
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: '#666',
                    textAlign: 'left',
                    flex: '1 1 auto',
                    minHeight: '0',
                    marginBottom: '14px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {product.desc}
            </p>

            <div
                className="max-sm:flex-wrap"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid #E8D6B8',
                    borderBottom: '1px solid #E8D6B8',
                    padding: '8px 0',
                    marginBottom: '16px',
                    marginTop: 'auto',
                    flexShrink: 0,
                    height: '54px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                }}
            >
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#F8EEDC',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>MOQ</span>
                        <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.moq}</span>
                    </span>
                </div>

                <span className="max-sm:hidden" style={{ width: '1px', alignSelf: 'stretch', background: '#E8D6B8' }} />

                <div className="pl-4 max-sm:pl-0" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                    <span
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: '#F8EEDC',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#CCA466" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: FONT_BODY, fontSize: '13px', color: '#CCA466' }}>Lead Time</span>
                        <span style={{ fontFamily: FONT_BODY, fontWeight: 500, fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>{product.lead}</span>
                    </span>
                </div>
            </div>

            <Link
                to={`/products/${product.id}`}
                className="no-underline transition-colors"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '40px',
                    padding: '0 48px',
                    borderRadius: '107px',
                    border: '1.5px solid #2E3192',
                    background: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FONT_BODY,
                    fontWeight: 400,
                    fontSize: '15px',
                    color: '#2E3192',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = '#EEF0FB'
                    e.currentTarget.style.color = '#2E3192'
                    const arrow = e.currentTarget.querySelector('.card-arrow')
                    if (arrow) arrow.style.right = '10px'
                    const text = e.currentTarget.querySelector('.card-view-text')
                    if (text) text.style.transform = 'scaleX(1.06)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFF'
                    e.currentTarget.style.color = '#2E3192'
                    const arrow = e.currentTarget.querySelector('.card-arrow')
                    if (arrow) arrow.style.right = '18px'
                    const text = e.currentTarget.querySelector('.card-view-text')
                    if (text) text.style.transform = 'scaleX(1)'
                }}
            >
                <span className="card-view-text" style={{ whiteSpace: 'nowrap', display: 'inline-block', transition: 'transform 300ms ease-out' }}>View Products</span>

                <span
                    className="card-arrow"
                    style={{
                        position: 'absolute',
                        right: '18px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#CBCBE4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        pointerEvents: 'none',
                        transition: 'right 300ms ease-out',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </span>
            </Link>
        </div>
    </div>
    )
}

// Builds a page-number list with ellipsis, e.g. [1, 3, 4, '...', 10]
const getPageNumbers = (current, total) => {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)

    const pages = [1]

    if (current > 3) pages.push('...')

    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)
    for (let i = start; i <= end; i++) pages.push(i)

    if (current < total - 2) pages.push('...')

    pages.push(total)

    return [...new Set(pages)]
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null

    const pageNumbers = getPageNumbers(currentPage, totalPages)

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 mr-[100px] flex items-center justify-center rounded-full border border-[#A1A2CE] bg-[#F5F5FA] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
                aria-label="Previous page"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {pageNumbers.map((page, idx) =>
                page === '...' ? (
                    <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-9 h-9 cursor-pointer flex items-center justify-center rounded-lg border text-sm font-medium transition ${
                            page === currentPage
                                ? 'bg-[#2E3192] border-[#2E3192] !text-white'
                                : 'bg-white border-[#7779B8] text-black hover:border-[#2E3192]'
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 ml-[100px] flex items-center justify-center rounded-full border border-[#A1A2CE] bg-[#F5F5FA] text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
                aria-label="Next page"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}

const Catalogue = () => {
    const [searchParams] = useSearchParams()

    const [search, setSearch] = useState('')

    // Single-select state per filter group: '' means "no filter applied"
    const [selectedBrand, setSelectedBrand] = useState(() => searchParams.get('brand') || '')
    const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') || '')
    const [selectedType, setSelectedType] = useState('')

    const [sortBy, setSortBy] = useState('newest')
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    // Which category list shows in the sidebar depends on the selected brand.
    // No brand selected -> empty list (user picks a brand first).
    const currentCategories = selectedBrand ? categoriesByBrand[selectedBrand] : []

    // Counts how many products match a given (term, brand, category, type) combo.
    // An empty string means "no filter for that facet".
    const countProducts = (term, brand, category, type) =>
        products.filter((p) =>
            p.title.toLowerCase().includes(term.toLowerCase()) &&
            (brand === '' || p.brand === brand) &&
            (category === '' || p.category === category) &&
            (type === '' || p.type === type)
        ).length

    // Facet counts: each option's count respects search + the other sections'
    // selections, so the numbers reflect what selecting that option would yield.
    const brandItems = useMemo(() =>
        brands.map((brand) => ({
            name: brand,
            count: countProducts(search, brand, selectedCategory, selectedType),
        })), [search, selectedCategory, selectedType])

    const categoryItems = useMemo(() =>
        currentCategories.map((category) => ({
            name: category,
            count: countProducts(search, selectedBrand, category, selectedType),
        })), [search, selectedBrand, currentCategories, selectedType])

    const typeItems = useMemo(() =>
        productTypes.map((type) => ({
            name: type,
            count: countProducts(search, selectedBrand, selectedCategory, type),
        })), [search, selectedBrand, selectedCategory])

    // Toggles a single-select group: clicking the active value clears it,
    // clicking a new value replaces whatever was selected before.
    const makeSelectHandler = (setter) => (value) => {
        setter((prev) => (prev === value ? '' : value))
        setCurrentPage(1)
    }

    const handleCategorySelect = makeSelectHandler(setSelectedCategory)
    const handleTypeSelect = makeSelectHandler(setSelectedType)

    // Brand selection has a side effect: switching (or clearing) the brand
    // invalidates whatever category was picked, since Royal Luxury and Shine
    // have completely different category lists.
    const handleBrandSelect = (value) => {
        setSelectedBrand((prev) => (prev === value ? '' : value))
        setSelectedCategory('')
        setCurrentPage(1)
    }

    const clearAll = () => {
        setSearch('')
        setSelectedBrand('')
        setSelectedCategory('')
        setSelectedType('')
        setCurrentPage(1)
    }

    const activeFilterCount =
        (selectedBrand ? 1 : 0) + (selectedCategory ? 1 : 0) + (selectedType ? 1 : 0)

    const filteredProducts = useMemo(() => {
        let result = products.filter((p) => {
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
            const matchesBrand = !selectedBrand || p.brand === selectedBrand
            const matchesCategory = !selectedCategory || p.category === selectedCategory
            const matchesType = !selectedType || p.type === selectedType
            return matchesSearch && matchesBrand && matchesCategory && matchesType
        })

        if (sortBy === 'newest') {
            result = [...result].sort((a, b) => b.id - a.id)
        } else if (sortBy === 'oldest') {
            result = [...result].sort((a, b) => a.id - b.id)
        } else if (sortBy === 'az') {
            result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        } else if (sortBy === 'za') {
            result = [...result].sort((a, b) => b.title.localeCompare(a.title))
        }

        return result
    }, [search, selectedBrand, selectedCategory, selectedType, sortBy])

    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE
        return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
    }, [filteredProducts, currentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const rangeStart = filteredProducts.length === 0 ? 0 : (currentPage - 1) * PRODUCTS_PER_PAGE + 1
    const rangeEnd = Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)

    return (
        <div className="flex flex-col sticky lg:flex-row gap-6 px-5 sm:px-10 lg:px-20 py-8 bg-[#FCF9F2] min-h-screen">
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                <defs>
                    <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
                        <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
                    </clipPath>
                </defs>
            </svg>
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 bg-white rounded-2xl p-5 h-fit lg:ml-4">
                <button
                    onClick={() => setFiltersOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between lg:hidden"
                >
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                        <SlidersHorizontal className="w-4 h-4 font-playfair " />
                        Filter By
                        {activeFilterCount > 0 && (
                            <span className="bg-[#2E3192] text-white text-[10px] rounded-full px-2 py-0.5">
                                {activeFilterCount}
                            </span>
                        )}
                    </span>
                    <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                            filtersOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                <div className="hidden lg:flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Filter By</h3>
                    <button
                        onClick={clearAll}
                        className="text-xs text-orange-500 font-medium"
                    >
                        CLEAR ALL
                    </button>
                </div>

                <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                    <button
                        onClick={clearAll}
                        className="lg:hidden text-xs text-orange-500 font-medium mb-4"
                    >
                        CLEAR ALL
                    </button>

                    <div className="relative mb-6">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setCurrentPage(1)
                            }}
                            placeholder="Search catalogue"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <FilterSection
                        title="Brand"
                        items={brandItems}
                        selected={selectedBrand}
                        onSelect={handleBrandSelect}
                    />

                    {/* Category list swaps based on the selected brand:
                        Royal Luxury -> RoyalCategories, Shine -> ShineCategories.
                        Nothing selected yet -> prompt the user to pick a brand first. */}
                    <FilterSection
                        title="Category"
                        items={categoryItems}
                        selected={selectedCategory}
                        onSelect={handleCategorySelect}
                        emptyMessage="Select a brand to see its categories"
                    />

                    <FilterSection
                        title="Product Type"
                        items={typeItems}
                        selected={selectedType}
                        onSelect={handleTypeSelect}
                    />

                    <div className="hidden lg:block mt-4">
                        <NeedHelpBox />
                    </div>
                </div>
            </aside>

            {/* Products */}
            <main className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center font-poppins justify-between gap-3 mb-4">
                    <p className="text-sm text-[#666666]">
                        Showing  <span className="font-semibold text-[#666666]">{rangeStart}-{rangeEnd}</span> of{' '}
                        <span className="font-semibold text-[#666666]">{filteredProducts.length}</span> Products
                    </p>
                    <div className="flex items-center  gap-2 text-sm">
                        <span className="text-[#121212]">Sort by :</span>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value)
                                setCurrentPage(1)
                            }}
                            className="border border-gray-200 rounded-lg px-3 py-1.5 text-[##333333]"
                        >
                            <option value="newest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="az">Name: A-Z</option>
                            <option value="za">Name: Z-A</option>
                        </select>
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500 py-16">No products match your filters.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {paginatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}

                <div className="lg:hidden mt-6 max-w-sm mx-auto">
                    <NeedHelpBox />
                </div>
            </main>
        </div>
    )
}

export default Catalogue