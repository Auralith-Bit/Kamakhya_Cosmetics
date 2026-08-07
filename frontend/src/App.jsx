import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutStory from "./components/Aboutus/AboutStory";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutStory />
      </main>
      <Footer />
    </>
  );
}

export default App;