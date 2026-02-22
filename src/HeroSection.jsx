import React from 'react';
import './HeroSection.css';
import Logo from './assets/Logo2.png'; 
import { Truck, MapPin, ChevronRight, Menu } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="main-container">
        {/* Navigation Bar */}
        <nav className="nav-bar">
          <div className="logo-container">
            {/* Clickable logo that scrolls to top */}
            <a href="#" className="logo-link" aria-label="Go to top">
              <img src={Logo} alt="Boyenge Logistics" className="main-logo" />
            </a>
          </div>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-right">
            <button className="nav-quote-btn">GET A QUOTE</button>
            {/* Hidden via CSS on smaller screens as requested */}
            <Menu className="mobile-menu-icon" color="white" size={28} />
          </div>
        </nav>

        {/* Hero Text Area */}
        <div className="content-box">
          <div className="location-badge">
            <span className="pulse-dot"></span>
            WORLDWIDE
          </div>
          <h1 className="hero-title">
            Moving Value,<br />
            <span className="light-text">Enabling Trade.</span>
          </h1>
        </div>

        {/* Floating Quote Widget */}
        <div className="quote-card">
          <div className="field">
            <label>TRANSPORT MODE</label>
            <div className="field-input">
              <Truck size={16} color="#666" />
              <select>
                <option>Air</option>
                <option>Road</option>
                <option>Sea</option>
              </select>
            </div>
          </div>

          <div className="field-divider"></div>

          <div className="field">
            <label>FRAGILE GOODS</label>
            <div className="field-input">
              <Truck size={16} color="#666" />
              <select>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>

          <div className="field-divider"></div>

          <div className="field">
            <label>PICK UP</label>
            <div className="field-input">
              <MapPin size={16} color="#a3c656" />
              <input type="text" placeholder="City / suburb" />
            </div>
          </div>

          <div className="field-divider"></div>

          <div className="field">
            <label>DROP OFF</label>
            <div className="field-input">
              <MapPin size={16} color="#a3c656" />
              <input type="text" placeholder="City / suburb" />
            </div>
          </div>

          <button className="submit-quote-btn">
            GET A QUOTE <ChevronRight size={18} />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;