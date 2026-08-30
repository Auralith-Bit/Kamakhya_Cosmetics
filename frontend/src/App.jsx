import React, { useEffect } from "react";
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
import Manufacturing from "./pages/Manufacturing";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetailed";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => (
  <>
    <Navbar />
    <main className="w-full pt-[130px]">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <WishlistProvider>
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
          <Route path="/manufacture" element={<Manufacturing />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<HomePage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}

export default App;
