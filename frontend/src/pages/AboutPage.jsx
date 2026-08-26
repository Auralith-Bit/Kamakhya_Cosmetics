import React from "react";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import StatsBar from "../components/StatsBar/StatsBar";
import OurValues from "../components/about/OurValues";
import OurTeam from "../components/about/OurTeam";
import WhyChooseUs from "../components/about/WhyChooseUs";
import PartnershipCTA from "../components/about/PartnershipCTA";
import Story from "../components/about/about/Story";


const AboutPage = () => (
  <>
    <AboutHero />
    <Story />
    <MissionVision />
    <StatsBar />
    <OurValues />
    <OurTeam />
    <WhyChooseUs />
    <PartnershipCTA />
  </>
);

export default AboutPage;
