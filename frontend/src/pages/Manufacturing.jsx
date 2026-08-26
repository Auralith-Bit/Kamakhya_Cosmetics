import Navbar from "../components/Navbar/Navbar";
import HeroBanner from "../components/Manufacture/HeroBanner";
import FacilitySection from "../components/Manufacture/FacilitySection";
import ProcessSection from "../components/Manufacture/ProcessSection";
import QualitySection from "../components/Manufacture/QualitySection";
import StatsBar from "../components/StatsBar/StatsBar";
import CertificationsSection from "../components/Manufacture/CertificationsSection";
import CTABanner from "../components/Manufacture/CTABanner";
import Footer from "../components/Footer/Footer";

export default function Manufacturing() {
  return (
    <div className="bg-[#fcf9f2] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <FacilitySection />
        <ProcessSection />
        <QualitySection />
        <StatsBar />
        <CertificationsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
