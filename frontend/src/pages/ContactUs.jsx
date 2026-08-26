import React from "react";
import ContactHero from "../components/contact/ContactHero"; // ← adjust if your folder differs
import ContactSections from "../components/contact/ContactSection";
<<<<<<< HEAD
import DistributionPartnership from "../components/contact/DistributionPartnership";
import HowWeWork from "../components/contact/HowWeWork";
import OurProcess from "../components/contact/OurProcess";
import ContactMap from "../components/contact/ContactMap";
=======
>>>>>>> Frontend/RoyalLuxury

const ContactUs = () => (
  <main id="contact-page">
    <ContactHero />
    <ContactSections />
<<<<<<< HEAD
    <DistributionPartnership/>
    <HowWeWork/>
    <OurProcess/>
    <ContactMap/>
=======
>>>>>>> Frontend/RoyalLuxury
    {/* future contact sections (form, map, FAQ…) drop in here in order */}
  </main>
);

export default ContactUs;