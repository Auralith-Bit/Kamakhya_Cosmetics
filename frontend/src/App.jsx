import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutStory from "./components/Aboutus/AboutStory";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import StatsBar from "./components/StatsBar/StatsBar";
import BrandsSection from "./components/BrandsSection/BrandsSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutStory />
        <FeaturedCollection />
        <StatsBar />
        <BrandsSection />
        
      </main>
      <Footer />
    </>
  );
}

export default App;