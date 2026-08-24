import React from "react";
import ContactHero from "../components/contact/ContactHero"; // ← adjust if your folder differs
import ContactSections from "../components/contact/ContactSection";

const ContactUs = () => (
  <main id="contact-page">
    <ContactHero />
    <ContactSections />
    {/* future contact sections (form, map, FAQ…) drop in here in order */}
  </main>
);

export default ContactUs;