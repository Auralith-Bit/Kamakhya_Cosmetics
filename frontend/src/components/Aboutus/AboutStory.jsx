import React from 'react';
import './AboutStory.css';
import warehouseImage from '../../assets/work.png';

const AboutStory = () => {
  return (
    <section id="about-story" aria-label="About Us - Our Story" className="about-section">
      <div className="about-container">
        
        {/* ── LEFT: Warehouse / Manufacturing Image ── */}
        <div className="about-image-wrap">
          <img
            src={warehouseImage}
            alt="Kamakhya Cosmetics – Manufacturing Facility"
            className="about-img"
          />
        </div>

        {/* ── RIGHT: Story Content ── */}
        <div className="about-content">
          
          {/* Label / Subheading */}
          <div className="about-label">
            <span className="about-label__text">OUR STORY</span>
            <span className="about-label__line"></span>
          </div>

          {/* Heading */}
          <h2 className="about-heading">
            <span className="about-heading__primary">The Story Behind </span>
            <span className="about-heading__accent">Kamakhya Cosmetics</span>
          </h2>

          {/* Description */}
          <div className="about-description">
            <p>
              Kamakhya Cosmetics was born from a simple belief—that true beauty comes from 
              the perfect harmony of science, nature and trust. We create skincare that 
              empowers confidence through safe, effective, and luxurious care.
            </p>
            <p>
              What began as a vision to create safe, effective, and luxurious products has today 
              grown into a premium manufacturing brand trusted by businesses around the 
              world. Driven by innovation and uncompromising quality, we continue to set new 
              standards in beauty and personal care.
            </p>
          </div>

          {/* CTA Button */}
          <div className="about-ctas">
            <a href="#story-details" className="about-btn about-btn--primary">
              READ THE STORY
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;