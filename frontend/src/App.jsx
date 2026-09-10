import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Distributor from "./pages/Distributor";
import ShinePage from "./pages/brands/ShinePage";
import BulkQuote from "./pages/BulkQuote";
import RoyalLuxuryPage from "./pages/brands/RoyalLuxuryPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import Manufacture from "./pages/Manufacturing";
import ProductPage from "./pages/ProductPage";
import OrderReview from "./pages/OrderReview";
import ProductDetails from "./pages/ProductDetailed";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector('.kn-nav');
      if (nav) setNavHeight(nav.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full" style={{ paddingTop: navHeight || 130 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/brands/shine" element={<ShinePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/brands/royal-luxury" element={<RoyalLuxuryPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/distributor" element={<Distributor />} />
            <Route path="/bulk-quote" element={<BulkQuote />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/manufacture" element={<Manufacture />} />
            <Route path="/order-review" element={<OrderReview />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
