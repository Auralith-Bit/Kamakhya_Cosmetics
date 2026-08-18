
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutStory from "../components/Aboutus/AboutStory";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection";
import StatsBar from "../components/StatsBar/StatsBar";
import BrandsSection from "../components/BrandsSection/BrandsSection";
import PromiseSection from "../components/PromiseSection/PromiseSection";
import ManufacturingSection from "../components/ManufacturingSection/ManufacturingSection";
import CategorySection from "../components/CategorySection/CategorySection";
import DistributionSection from "../components/DistributionSection/DistributionSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

const HomePage = () => (
  <>
    <div id="home"><HeroSection /></div>
    <div id="about"><AboutStory /></div>
    <div id="products"><FeaturedCollection /></div>
    <StatsBar />
    <BrandsSection />
    <PromiseSection />
    <ManufacturingSection />
    <CategorySection />
    <DistributionSection />
    <TestimonialsSection />
    <div id="manufacturing"></div>
    <div id="contact"></div>
  </>
);

export default HomePage;