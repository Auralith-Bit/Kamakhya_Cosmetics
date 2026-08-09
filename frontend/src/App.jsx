import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutStory from "./components/Aboutus/AboutStory";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutStory />
        <FeaturedCollection />
      </main>
      <Footer />
    </>
  );
}

export default App;