import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Contact.css';

// Assets - Ensure these paths match your project structure
import Logo from './assets/Logo1.png'; 
import Logo2 from './assets/Logo2.png'; 
import Road2 from './assets/Road2.PNG';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bl-ct-page-wrapper">
      {/* 1. NAVIGATION */}
      <nav className="bl-ct-navbar-pill">
        <img 
          src={Logo} 
          alt="Logo" 
          className="bl-ct-logo-img" 
          onClick={() => navigate('/')} 
        />
        <div className="bl-ct-nav-links-group">
          <Link to="/">Home</Link>
          <Link to="/quote">Get a Quote</Link>
          <a href="#contact">Contact</a>
        </div>
        <button 
          className="bl-ct-quote-cta-btn" 
          onClick={() => navigate('/quote')}
        >
          GET A QUOTE
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="bl-ct-hero-section">
        <div className="bl-ct-hero-container">
          <div className="bl-ct-hero-text">
            <div className="bl-ct-badge-pill">
              <span className="bl-ct-dot"></span> CONTACT
            </div>
            <h1 className="bl-ct-title">
              Contact <span className="bl-ct-text-lime">Boyenge Logistics</span>
            </h1>
            <p className="bl-ct-subtitle">
              Send us your pickup and drop-off areas and the vehicle size you 
              need. We'll respond with next steps and availability.
            </p>
            <div className="bl-ct-hero-btns">
              <button className="bl-ct-btn-lime-large" onClick={() => navigate('/quote')}>
                START A QUOTE
              </button>
              <button className="bl-ct-btn-black-large">
                SEND A MESSAGE
              </button>
            </div>
          </div>

          <div 
            className="bl-ct-hero-image-card" 
            style={{ backgroundImage: `url(${Road2})` }}
          >
            <div className="bl-ct-region-badge">
              WORLDWIDE
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & INFO SECTION (IMAGE MATCH) */}
      <section className="bl-ct-details-section">
        <div className="bl-ct-details-container">
          
          {/* LEFT COLUMN: MESSAGE FORM */}
          <div className="bl-ct-message-card">
            <span className="bl-ct-form-tag">MESSAGE</span>
            <h2 className="bl-ct-form-title">Send us your details</h2>
            
            <form className="bl-ct-form-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="bl-ct-input-group">
                <label>FULL NAME *</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="bl-ct-input-group">
                <label>EMAIL *</label>
                <input type="email" placeholder="name@email.com" />
              </div>
              <div className="bl-ct-input-group bl-ct-full-width">
                <label>TOPIC</label>
                <select className="bl-ct-select">
                  <option>General enquiry</option>
                  <option>Cargo tracking</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="bl-ct-input-group bl-ct-full-width">
                <label>MESSAGE *</label>
                <textarea placeholder="Pickup area, drop-off area, vehicle size, preferred date/time, and what you’re moving."></textarea>
              </div>
              <button type="submit" className="bl-ct-submit-btn">SEND MESSAGE</button>
            </form>
            <p className="bl-ct-disclaimer">Your details are used only to respond to your request.</p>
          </div>

          {/* RIGHT COLUMN: INFO STACK */}
          <div className="bl-ct-info-stack">
            
            {/* Reach Us Card */}
            <div className="bl-ct-reach-card">
              <span className="bl-ct-form-tag">CONTACT</span>
              <h2 className="bl-ct-reach-title">How to reach us</h2>
              
              <div className="bl-ct-reach-list">
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>PHONE / WHATSAPP</strong>
                    <p>+243 854 543 130</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>EMAIL</strong>
                    <p>logistics@boyenge.com</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>ADDRESS</strong>
                    <p>Congo</p>
                  </div>
                </div>
                <div className="bl-ct-reach-item">
                  <div className="bl-ct-reach-dot"></div>
                  <div>
                    <strong>HOURS</strong>
                    <p>Mon–Fri, 8:00–17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote CTA Card */}
            <div className="bl-ct-quote-mini-card" style={{ backgroundImage: `url(${Road2})` }}>
              <div className="bl-ct-quote-mini-overlay">
                <span className="bl-ct-mini-tag">PREFER A QUOTE?</span>
                <h3 className="bl-ct-mini-title">Use the quote form</h3>
                <p className="bl-ct-mini-text">For the fastest turnaround, start with the quote flow — it captures the key details we need.</p>
                <button className="bl-ct-mini-btn" onClick={() => navigate('/quote')}>GET A QUOTE</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER SECTION */}
      <footer className="bl-ct-site-footer">
        <div className="bl-ct-footer-wrapper">
          <div className="bl-ct-footer-grid">
            <div className="bl-ct-footer-brand-column">
              <img 
                src={Logo2} 
                alt="Logo" 
                className="bl-ct-footer-logo-file" 
                onClick={() => window.scrollTo({top:0, behavior:'smooth'})} 
              />
              <p className="bl-ct-footer-desc">Reliable goods transport across the world — from small loads to heavy freight.</p>
              <div className="bl-ct-footer-social-icons">
                <a href="#" className="bl-ct-social-link">Instagram</a>
                <a href="#" className="bl-ct-social-link">TikTok</a>
              </div>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>NAVIGATION</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quote">Request Quote</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>CONTACT</h3>
              <ul>
                <li>+243 854 543 130</li>
                <li>logistics@boyenge.com</li>
                <li>Qatar, Dubai</li>
                <li>China, Congo</li>
                <li>Hong Kong, Philippines</li>
              </ul>
            </div>
            <div className="bl-ct-footer-nav-column">
              <h3>LEGAL</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="bl-ct-footer-bottom-divider"></div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;