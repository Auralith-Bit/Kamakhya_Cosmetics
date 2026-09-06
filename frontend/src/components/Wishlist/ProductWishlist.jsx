import { products } from "../../data/product";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../Products/ProductCard";
import EmptyProducts from "./EmptyProducts";

const ProductWishlist = () => {
    const { wishlistIds } = useWishlist();

    const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

    return (
        <section className={`bg-[#FCFAF7] ${wishlistProducts.length === 0 ? "flex flex-col min-h-[calc(50dvh-6rem)] sm:min-h-[calc(100dvh-12.5rem)]" : ""}`}>
            <div className={`${wishlistProducts.length === 0 ? "w-full flex-1 flex flex-col px-7 sm:px-12 md:px-[100px] py-6 sm:py-[45px]" : "max-w-6xl mx-auto px-5 sm:px-10 py-20"}`}>
                {/* Top Section */}
                {wishlistProducts.length > 0 && (
                    <div className="flex flex-col justify-start">
                        <h2 className="text-[#2E3192] font-playfair text-2xl">Your Wishlist</h2>
                        <p className="text-[#666666] font-poppins">
                            Showing <span className="font-semibold text-gray-800">{wishlistProducts.length}</span> products
                        </p>
                    </div>
                )}

                {/* Product Section */}
                {wishlistProducts.length === 0 ? (
                    <EmptyProducts />
                ) : (
                    <div className="py-14 sm:py-16 lg:py-20">
                        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                            <defs>
                                <clipPath id="figureCardImageClip" clipPathUnits="objectBoundingBox">
                                    <path d="M0 0 L1 0 L1 0.8158 C1 0.8256 0.9957 0.8347 0.9885 0.8402 C0.8579 0.938 0.6864 1 0.4987 1 C0.3122 1 0.1419 0.9388 0.0117 0.8423 C0.0043 0.8368 0 0.8276 0 0.8178 Z" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                            {wishlistProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductWishlist;