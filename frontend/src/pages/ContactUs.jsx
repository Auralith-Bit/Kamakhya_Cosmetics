import React from "react";
import ContactHero from "../components/contact/ContactHero"; // ← adjust if your folder differs
import ContactSections from "../components/contact/ContactSection";
import DistributionPartnership from "../components/contact/DistributionPartnership";
import HowWeWork from "../components/contact/HowWeWork";
import OurProcess from "../components/contact/OurProcess";
import ContactMap from "../components/contact/ContactMap";

const ContactUs = () => (
  <main id="contact-page">
    <ContactHero />
    <ContactSections />
    <DistributionPartnership/>
    <HowWeWork/>
    <OurProcess/>
    <ContactMap/>
    {/* future contact sections (form, map, FAQ…) drop in here in order */}
  </main>
);

export default ContactUs;