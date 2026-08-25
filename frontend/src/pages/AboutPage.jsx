import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/Aboutus/AboutStory";
import MissionVision from "../components/about/MissionVision";
import StatsBar from "../components/StatsBar/StatsBar";
import OurValues from "../components/about/OurValues";
import OurTeam from "../components/about/OurTeam";
import WhyChooseUs from "../components/about/WhyChooseUs";


const AboutPage = () => (
  <>
    <AboutHero />
    <AboutStory />
    <MissionVision />
    <StatsBar />
    <OurValues />
    <OurTeam />
    <WhyChooseUs />
  </>
);

export default AboutPage;
