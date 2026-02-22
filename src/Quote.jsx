import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Quote.css';

// Assets
import Logo from './assets/Logo1.png'; 
import Logo2 from './assets/Logo2.png'; 
import CustomBg from './assets/Background.PNG';
import AirImg from './assets/Air.PNG';
import RoadImg from './assets/Road.PNG';
import SeaImg from './assets/Sea.PNG';
import RailImg from './assets/Rail.png';

const Quote = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // State Management
  const [selectedMode, setSelectedMode] = useState(null);
  const [fragileSelection, setFragileSelection] = useState({});
  const [routeData, setRouteData] = useState({ pickup: '', dropoff: '' });
  const [shipmentData, setShipmentData] = useState({ description: '', pickupDate: '', timeWindow: '' });
  const [contactData, setContactData] = useState({ fullName: '', email: '', phone: '' });

  const transportModes = [
    { id: 1, tag: "AIR", description: "Fastest delivery for high-priority global shipments.", image: AirImg },
    { id: 2, tag: "ROAD", description: "Flexible regional distribution and door-to-door delivery.", image: RoadImg },
    { id: 3, tag: "SEA", description: "Cost-effective solution for large-scale international freight.", image: SeaImg },
    { id: 4, tag: "RAILWAY", description: "Reliable and eco-friendly long-distance inland transport.", image: RailImg }
  ];

  // Logic to handle fragile click AND card selection simultaneously
  const handleFragileSelection = (modeId, value) => {
    setSelectedMode(modeId); // Automatically selects the card
    setFragileSelection(prev => ({ ...prev, [modeId]: value }));
  };

  const isStep1Valid = selectedMode !== null && fragileSelection[selectedMode];
  const isStep2Valid = routeData.pickup.trim() !== '' && routeData.dropoff.trim() !== '';
  const isStep3Valid = shipmentData.description.trim() !== '' && shipmentData.pickupDate !== '';
  const isStep4Valid = contactData.fullName.trim() !== '' && contactData.email.trim() !== '';

  const handleNext = () => { if (currentStep < 4) { setCurrentStep(prev => prev + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const handleBack = () => { if (currentStep > 1) { setCurrentStep(prev => prev - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setSelectedMode(null);
    setFragileSelection({});
    setRouteData({ pickup: '', dropoff: '' });
    setShipmentData({ description: '', pickupDate: '', timeWindow: '' });
    setContactData({ fullName: '', email: '', phone: '' });
    setIsSubmitted(false);
    setCurrentStep(1);
  };

  return (
    <div className="bl-quote-page-wrapper">
      <nav className="bl-navbar-pill">
        <img src={Logo} alt="Logo" className="bl-logo-img" onClick={() => navigate('/')} />
        <div className="bl-nav-links-group">
          <Link to="/">Home</Link>
          <a href="/Contact">Contact</a>
        </div>
        <button className="bl-quote-cta-btn" onClick={resetForm}>GET A QUOTE</button>
      </nav>

      {!isSubmitted && (
        <section className="bl-hero-outer-container">
          <div className="bl-hero-main-card" style={{ backgroundImage: `url(${CustomBg})` }}>
            <div className="bl-hero-glass-overlay">
              <span className="bl-hero-tagline">QUOTE REQUEST</span>
              <h1 className="bl-hero-main-title">{currentStep === 4 ? "Final details" : "Tell us the basics."}</h1>
              <p className="bl-hero-description">Pick a transport mode and share pickup and drop-off areas.</p>
            </div>
          </div>
        </section>
      )}

      <section className="bl-vsel-container">
        <div className="bl-vsel-content">
          {isSubmitted ? (
            <div className="bl-success-card bl-step-fade-in">
              <div className="bl-success-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="bl-success-title">Quote request sent</h2>
              <p className="bl-success-text">Thanks — we'll review your details and contact you shortly with pricing and availability.</p>
              <div className="bl-success-actions">
                <button className="bl-success-btn-black" onClick={resetForm}>START ANOTHER QUOTE</button>
                <button className="bl-success-btn-outline" onClick={() => navigate('/')}>BACK TO HOME</button>
              </div>
            </div>
          ) : (
            <>
              <div className="bl-vsel-stepper">
                {[1, 2, 3, 4].map(num => (
                  <div key={num} className={`bl-vsel-step ${currentStep >= num ? 'active' : ''}`}>
                    <span>{num}</span> 
                    <label>{num === 1 ? 'TRANSPORT MODE' : num === 2 ? 'ROUTE' : num === 3 ? 'DETAILS' : 'CONTACT'}</label>
                  </div>
                ))}
              </div>

              {currentStep === 1 && (
                <div className="bl-step-fade-in">
                  <span className="bl-vsel-step-label">STEP 1 OF 4</span>
                  <h2 className="bl-vsel-main-title">Choose transport mode</h2>
                  <div className="bl-vsel-grid">
                    {transportModes.map((m) => (
                      <div key={m.id} className={`bl-vsel-card ${selectedMode === m.id ? 'selected' : ''}`} onClick={() => setSelectedMode(m.id)}>
                        <div className="bl-vsel-image-wrap">
                          <img src={m.image} alt={m.tag} className="bl-mode-icon" />
                          <span className="bl-vsel-badge">{m.tag}</span>
                        </div>
                        <p className="bl-vsel-mode-desc">{m.description}</p>
                        <div className="bl-vsel-fragile-section">
                          <p className="bl-vsel-option-label">FRAGILE GOODS</p>
                          <div className="bl-vsel-option-group">
                            <button 
                                className={`bl-vsel-option-btn ${fragileSelection[m.id] === 'Yes' ? 'active' : ''}`} 
                                onClick={(e) => { e.stopPropagation(); handleFragileSelection(m.id, 'Yes'); }}
                            >Yes</button>
                            <button 
                                className={`bl-vsel-option-btn ${fragileSelection[m.id] === 'No' ? 'active' : ''}`} 
                                onClick={(e) => { e.stopPropagation(); handleFragileSelection(m.id, 'No'); }}
                            >No</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bl-vsel-action-area">
                    <button className={`bl-vsel-next-btn ${isStep1Valid ? 'ready' : ''}`} onClick={handleNext} disabled={!isStep1Valid}>NEXT</button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="bl-step-fade-in">
                  <span className="bl-vsel-step-label">STEP 2 OF 4</span>
                  <h2 className="bl-vsel-main-title">Pickup & drop-off</h2>
                  <div className="bl-route-grid">
                    <div className="bl-route-input-card">
                        <div className="bl-input-group">
                            <label className="bl-input-label">PICKUP AREA *</label>
                            <input type="text" placeholder="City / suburb" className="bl-route-field" value={routeData.pickup} onChange={e => setRouteData({...routeData, pickup: e.target.value})} />
                        </div>
                        <div className="bl-input-group">
                            <label className="bl-input-label">DROP-OFF AREA *</label>
                            <input type="text" placeholder="City / suburb" className="bl-route-field" value={routeData.dropoff} onChange={e => setRouteData({...routeData, dropoff: e.target.value})} />
                        </div>
                    </div>
                    <div className="bl-coverage-card" style={{ backgroundImage: `url(${CustomBg})` }}>
                        <div className="bl-coverage-overlay">
                            <span className="bl-coverage-badge-label">COVERAGE</span>
                            <h3 className="bl-coverage-title">Worldwide</h3>
                            <p className="bl-coverage-text">Intercontinental & cross boarder movement simplified</p>
                        </div>
                    </div>
                  </div>
                  <div className="bl-route-footer">
                    <button className="bl-back-btn" onClick={handleBack}>← BACK</button>
                    <button className={`bl-vsel-next-btn ${isStep2Valid ? 'ready' : ''}`} onClick={handleNext} disabled={!isStep2Valid}>NEXT →</button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="bl-step-fade-in">
                  <span className="bl-vsel-step-label">STEP 3 OF 4</span>
                  <h2 className="bl-vsel-main-title">Shipment details</h2>
                  <div className="bl-shipment-grid">
                    <div className="bl-shipment-main-card">
                      <label className="bl-input-label-gray">CARGO DESCRIPTION</label>
                      <textarea className="bl-shipment-textarea" placeholder="Describe items, weight, or dimensions..." value={shipmentData.description} onChange={e => setShipmentData({...shipmentData, description: e.target.value})} />
                    </div>
                    <div className="bl-shipment-side-stack">
                      <div className="bl-shipment-sub-card">
                        <label className="bl-input-label-gray">PICKUP DATE</label>
                        <input type="date" className="bl-shipment-input" value={shipmentData.pickupDate} onChange={e => setShipmentData({...shipmentData, pickupDate: e.target.value})} />
                      </div>
                      <div className="bl-shipment-sub-card">
                        <label className="bl-input-label-gray">PICKUP TIME</label>
                        <input type="time" className="bl-shipment-input" value={shipmentData.timeWindow} onChange={e => setShipmentData({...shipmentData, timeWindow: e.target.value})} />
                      </div>
                    </div>
                  </div>
                  <div className="bl-route-footer">
                    <button className="bl-back-btn" onClick={handleBack}>← BACK</button>
                    <button className={`bl-vsel-next-btn ${isStep3Valid ? 'ready' : ''}`} onClick={handleNext} disabled={!isStep3Valid}>NEXT →</button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="bl-step-fade-in">
                  <span className="bl-vsel-step-label">CONTACT</span>
                  <h2 className="bl-vsel-main-title">Your details</h2>
                  <div className="bl-final-grid">
                    <div className="bl-shipment-main-card">
                      <div className="bl-contact-row">
                        <div className="bl-input-group"><label className="bl-input-label-gray">FULL NAME *</label><input type="text" className="bl-shipment-input" value={contactData.fullName} onChange={e => setContactData({...contactData, fullName: e.target.value})} /></div>
                        <div className="bl-input-group"><label className="bl-input-label-gray">EMAIL *</label><input type="email" className="bl-shipment-input" value={contactData.email} onChange={e => setContactData({...contactData, email: e.target.value})} /></div>
                      </div>
                      <div className="bl-input-group"><label className="bl-input-label-gray">PHONE *</label><input type="tel" className="bl-shipment-input" value={contactData.phone} onChange={e => setContactData({...contactData, phone: e.target.value})} /></div>
                      <p className="bl-consent-text">By requesting a quote you consent to being contacted by Boyenge Logistics.</p>
                    </div>
                    <div className="bl-summary-card">
                      <div className="bl-summary-image-header" style={{ backgroundImage: `url(${CustomBg})` }}><span className="bl-summary-badge">SUMMARY</span></div>
                      <div className="bl-summary-content">
                        <div className="bl-summary-item"><span className="bl-sum-label">TRANSPORT MODE</span><span className="bl-sum-value">{transportModes.find(m => m.id === selectedMode)?.tag || "—"}</span></div>
                        <div className="bl-summary-item"><span className="bl-sum-label">FRAGILE</span><span className="bl-sum-value">{fragileSelection[selectedMode] || "—"}</span></div>
                        <div className="bl-summary-item"><span className="bl-sum-label">PICKUP</span><span className="bl-sum-value">{routeData.pickup || "—"}</span></div>
                        <div className="bl-summary-item"><span className="bl-sum-label">DROP-OFF</span><span className="bl-sum-value">{routeData.dropoff || "—"}</span></div>
                        <div className="bl-summary-item"><span className="bl-sum-label">DATE</span><span className="bl-sum-value">{shipmentData.pickupDate || "—"}</span></div>
                        <div className="bl-summary-item description-item">
                            <span className="bl-sum-label">CARGO</span>
                            <span className="bl-sum-value description-text">{shipmentData.description || "—"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bl-route-footer">
                    <button className="bl-back-btn" onClick={handleBack}>← BACK</button>
                    <button className={`bl-vsel-next-btn ${isStep4Valid ? 'ready' : ''}`} disabled={!isStep4Valid} onClick={handleSubmit}>SUBMIT →</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <footer className="main-site-footer">
        {/* ... (Footer content remains same) */}
        <div className="footer-wrapper">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <img src={Logo2} alt="Logo" className="footer-logo-file" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} />
              <p className="footer-desc">Reliable goods transport across the world — from small loads to heavy freight.</p>
              <div className="footer-social-icons">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">TikTok</a>
              </div>
            </div>
            <div className="footer-nav-column">
              <h3>NAVIGATION</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li onClick={resetForm}>Request Quote</li>
                <li><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h3>CONTACT</h3>
              <ul>
                <li>+243 854 543 130</li>
                <li>logistics@boyenge.com</li>
                <li>Qatar, Dubai</li>
                <li>China, Congo</li>
                <li>Hong Kong, Philippines</li>

              </ul>
            </div>
            <div className="footer-nav-column">
              <h3>LEGAL</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom-divider"></div>
        </div>
      </footer>
    </div>
  );
};

export default Quote;