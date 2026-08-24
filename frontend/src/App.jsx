import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Distributor from "./pages/Distributor";
import ShinePage from "./pages/brands/ShinePage";
import RoyalLuxuryPage from "./pages/brands/RoyalLuxuryPage";
import BulkQuote from "./pages/BulkQuote";
import ContactUs from "./pages/ContactUs";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout = () => (
  <>
    <Navbar />
    <main className="w-full"><Outlet /></main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/shine" element={<ShinePage />} />
          <Route path="/brands/royal-luxury" element={<RoyalLuxuryPage />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/bulk-quote" element={<BulkQuote/>}/>
          <Route path="*" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;