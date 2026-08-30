import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactSections from "../components/contact/ContactSection";
import DistributionPartnership from "../components/contact/DistributionPartnership";
import HowWeWork from "../components/contact/HowWeWork";
import OurProcess from "../components/contact/OurProcess";
import ContactMap from "../components/contact/ContactMap";

const ContactUs = () => (
  <main id="contact-page">
    <ContactHero />
    <ContactSections />
    <DistributionPartnership />
    <HowWeWork />
    <OurProcess />
    <ContactMap />
  </main>
);

export default ContactUs;