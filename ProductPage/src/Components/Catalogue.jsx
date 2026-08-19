import React, { useState, useMemo } from 'react'
import { Search, Heart, ArrowRight, Headphones, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductImg from '../assets/ProductImg.svg'
import { Link } from 'react-router-dom'

const brands = ['Royal Luxury', 'Shine']

const categories = [
    'Body Care', 'Hair Care', 'Skincare', 'Oral Hygiene',
    'Sunscreens', "Men's Grooming", 'Fragrances', 'Bath & Shower',
]

const productTypes = ['Featured', 'Best Seller', 'Signatured Products']

const products = [
    { id: 1, tag: 'VELVET', brand: 'Royal Luxury', category: 'Skincare', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 2, tag: 'ROYAL LUXURY', brand: 'Royal Luxury', category: 'Skincare', type: 'Best Seller', image: ProductImg, title: 'Nail Polish', desc: 'Nail Polish is the best things in the world and were for protection. i love...', moq: '500 pcs', lead: '10-15 days' },
    { id: 3, tag: 'GLAM', brand: 'Shine', category: 'Skincare', type: 'Signatured Products', image: ProductImg, title: 'Eyeshadow Palette', desc: 'Create stunning eye looks with our richly pigmented eyeshadow palett...', moq: '200 pcs', lead: '10-12 days' },
    { id: 4, tag: 'SMOOTH', brand: 'Shine', category: 'Body Care', type: 'Featured', image: ProductImg, title: 'Foundation', desc: 'Our foundation offers flawless coverage while nourishing your skin', moq: '400 pcs', lead: '8-10 days' },
    { id: 5, tag: 'ROYAL LUXURY', brand: 'Royal Luxury', category: 'Body Care', type: 'Best Seller', image: ProductImg, title: 'Nail Polish', desc: 'Nail Polish is the best things in the world and were for protection. i love...', moq: '500 pcs', lead: '7-10 days' },
    { id: 6, tag: 'SHINE', brand: 'Shine', category: 'Fragrances', type: 'Signatured Products', image: ProductImg, title: 'Nail Polish', desc: 'Nail Polish is the best things in the world and were for protection. i love...', moq: '500 pcs', lead: '7-10 days' },
    { id: 7, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 8, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 9, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 10, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 11, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 12, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 13, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 14, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 15, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 16, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
    { id: 17, tag: 'VELVET', brand: 'Royal Luxury', category: 'Hair Care', type: 'Featured', image: ProductImg, title: 'Lipstick', desc: 'Lipstick adds vibrant color and confidence to your smile, enhancin...', moq: '300 pcs', lead: '5-7 days' },
]

const PRODUCTS_PER_PAGE = 12

const FilterSection = ({ title, items, selected, onToggle }) => (
    <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="space-y-2">
            {items.map((name) => (
                <label
                    key={name}
                    className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"
                >
                    <span className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300"
                            checked={selected.includes(name)}
                            onChange={() => onToggle(name)}
                        />
                        {name}
                    </span>
                </label>
            ))}
        </div>
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

const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="relative">
            <span className="absolute top-3 left-3 bg-white/90 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full text-[#CCA466]">
                {product.tag}
            </span>
            <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow">
                <Heart className="w-4 h-4 text-gray-500" />
            </button>
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
            />
        </div>

        <div className="p-4">
            <h4 className="text-center font-serif text-gray-800 mb-1">
                {product.title}
            </h4>
            <p className="text-center text-xs text-gray-500 mb-3 line-clamp-2">
                {product.desc}
            </p>

            <div className="flex justify-center gap-6 text-xs text-gray-600 mb-4">
                <div className="text-center">
                    <p className="text-[#CCA466]">MOQ</p>
                    <p className="font-medium">{product.moq}</p>
                </div>
                <div className="text-center">
                    <p className="text-[#CCA466]">Lead Time</p>
                    <p className="font-medium">{product.lead}</p>
                </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-[#2E3192] text-[#2E3192] rounded-full py-2 text-sm font-medium hover:bg-[#2E3192] hover:text-white transition">
                View Products
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    </div>
)

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
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
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
                        className={`w-9 h-9 flex items-center justify-center rounded-full border text-sm font-medium transition ${
                            page === currentPage
                                ? 'bg-[#2E3192] border-[#2E3192] text-white'
                                : 'border-gray-200 text-gray-600 hover:border-[#2E3192] hover:text-[#2E3192]'
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#2E3192] hover:text-[#2E3192] transition"
                aria-label="Next page"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}

const Catalogue = () => {
    const [search, setSearch] = useState('')
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedTypes, setSelectedTypes] = useState([])
    const [sortBy, setSortBy] = useState('newest')
    const [filtersOpen, setFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const toggle = (setter) => (value) => {
        setter((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        )
        setCurrentPage(1)
    }

    const clearAll = () => {
        setSearch('')
        setSelectedBrands([])
        setSelectedCategories([])
        setSelectedTypes([])
        setCurrentPage(1)
    }

    const activeFilterCount =
        selectedBrands.length + selectedCategories.length + selectedTypes.length

    const filteredProducts = useMemo(() => {
        let result = products.filter((p) => {
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand)
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category)
            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(p.type)
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
    }, [search, selectedBrands, selectedCategories, selectedTypes, sortBy])

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
        <div className="flex flex-col sticky lg:flex-row gap-6 px-4 sm:px-6 lg:px-12 py-8 bg-[#FCF9F2] min-h-screen">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 bg-white rounded-2xl p-5 h-fit">
                <button
                    onClick={() => setFiltersOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between lg:hidden"
                >
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                        <SlidersHorizontal className="w-4 h-4" />
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
                            className="w-full bg-gray-50 border border-gray-200 rounded-full pl-9 pr-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <FilterSection
                        title="Brand"
                        items={brands}
                        selected={selectedBrands}
                        onToggle={toggle(setSelectedBrands)}
                    />
                    <FilterSection
                        title="Category"
                        items={categories}
                        selected={selectedCategories}
                        onToggle={toggle(setSelectedCategories)}
                    />
                    <FilterSection
                        title="Product Type"
                        items={productTypes}
                        selected={selectedTypes}
                        onToggle={toggle(setSelectedTypes)}
                    />

                    <div className="hidden lg:block mt-4">
                        <NeedHelpBox />
                    </div>
                </div>
            </aside>

            {/* Products */}
            <main className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold text-gray-800">{rangeStart}-{rangeEnd}</span> of{' '}
                        <span className="font-semibold text-gray-800">{filteredProducts.length}</span> Products
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Sort by :</span>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value)
                                setCurrentPage(1)
                            }}
                            className="border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700"
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