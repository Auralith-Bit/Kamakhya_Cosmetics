import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        {/* your page content will go here */}
      </div>
      <Footer />
    </>
  );
}

export default App;