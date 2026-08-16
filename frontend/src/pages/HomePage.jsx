/**
 * FILE : frontend/src/pages/HomePage.jsx
 * ROUTE: /  (Home-only sections)
 */
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutStory from "../components/Aboutus/AboutStory";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection";
import StatsBar from "../components/StatsBar/StatsBar";
import BrandsSection from "../components/BrandsSection/BrandsSection";

const HomePage = () => (
  <>
    <div id="home"><HeroSection /></div>
    <div id="about"><AboutStory /></div>
    <div id="products"><FeaturedCollection /></div>
    <StatsBar />
    <BrandsSection />
    <div id="manufacturing"></div>
    <div id="contact"></div>
  </>
);

export default HomePage;