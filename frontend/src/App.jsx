import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Additional sections will go here */}
      </main>
      <Footer />
    </>
  );
}

export default App;