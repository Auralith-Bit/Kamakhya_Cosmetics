/**
 * FILE : frontend/src/pages/HomePage.jsx
 * ROUTE: /  (Home-only sections)
 */
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutStory from "../components/Aboutus/AboutStory";
import FeaturedCollection from "../components/FeaturedCollection/FeaturedCollection";

const HomePage = () => (
  <>
    <div id="home"><HeroSection /></div>
    <div id="products"><FeaturedCollection /></div>
    <div id="manufacturing"></div>
    <div id="about"><AboutStory /></div>
    <div id="contact"></div>
  </>
);

export default HomePage;