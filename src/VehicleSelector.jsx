import React, { useRef, useState, useEffect } from 'react';
import './VehicleSelector.css';

// Import images from assets
import SeaImg from './assets/Sea.PNG';
import RailImg from './assets/Rail.png';
import AirImg from './assets/Air.PNG';
import RoadImg from './assets/Road.PNG';
import Warehouse from './assets/Warehouse.png';
import Custom from './assets/Custom.png';
import LogoImg from './assets/Logo2.png';

const vehicles = [
  { id: 1, type: 'Sea Freight', capacity: 'UNLIMITED', description: 'Boyenge Logistics coordinates ocean cargo movement through structured shipping partnerships and port logistics frameworks.', items: 'International trade, Heavy cargo, Industrial materials', crew : 'Full Container Load, Bulk commodity', image: SeaImg, tag: 'OCEAN' },
  { id: 2, type: 'Railway', capacity: 'UNLIMITED', description: 'Rail freight offers cost-effective and fuel-efficient bulk movement over long distances.', items: 'Bulk commodities, Agricultural products, Construction materials', crew: 'Standard & Flat-rack containers', image: RailImg, tag: 'RAILWAY' },
  { id: 3, type: 'Air Freight', capacity: 'UNLIMITED', description: 'Air freight is used for time-critical, high-value, or sensitive cargo requiring rapid delivery.', items: 'Medical supplies, Perishables, High-value goods', crew: 'Express cargo, Urgent replacement parts', image: AirImg, tag: 'AIR' },
  { id: 4, type: 'Road Freight', capacity: 'UNLIMITED', description: 'Boyenge Logistics provides structured ground transport solutions for diverse cargo categories.', items: 'Full Truck Load (FTL), Scheduled distribution', crew: 'Retail goods, Equipment and machinery', image: RoadImg, tag: 'ROAD' }
];

const servicesList = [
  { id: '01', title: 'Freight & Distribution', desc: 'End to end distribution services connecting suppliers to customers efficiently', tags: ['RETAIL DISTIRUBTION', 'LAST MILE CORDINATION', 'SCHEDULED DELIVERY ROUTING'], image: RoadImg },
  { id: '02', title: 'Warehousing & Storage solutions', desc: 'Secure and scalable storage infrastructure designed for operational efficiency and inventory control', tags: ['GENERAL WAREHOUSING', 'CLIMATE CONTROLLED STORAGE', 'BULK STORAGE SYSTEMS'], image: Warehouse },
  { id: '03', title: 'Cross-Border Logistics', desc: 'Support for international cargo flows and trade compliant logistics operations', tags: ['CROSS BORDER SHIPMENT', 'TRADE DOCUMENTATIONS', 'CUSTOMS PROCESS SUPPORT'], image: Custom },
  { id: '04', title: 'Project & Heavy Logistics', desc: 'Specialized logistics for large,sensitive or complex cargo projects', tags: ['INDUSTRIAL CARGO', 'AGRICULTURAL BULK'], image: SeaImg },
  { id: '05', title: 'Supply chain solutions', desc: 'Boyenge logistics execution,Boyenge logistics provides supply chain strategy and perfomance optimization.', tags: ['NETWORK OPTIMIZATION', 'SUPPLY CHAIN DESIGN', 'VENDOR COORDINATION'], image: AirImg },
  { id: '06', title: 'Digital logistics systems', desc: 'Modern logistics must be digitally visible.Boyenge intergrates logistics technology frameworks into operations', tags: ['SHIPMENT TRACKING', 'INVENTORY DASHBOARDS','ALERT SYSTEMS'], image: RailImg }
];

const VehicleSelector = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 300 : 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const groupedServices = [];
  for (let i = 0; i < servicesList.length; i += 3) {
    groupedServices.push(servicesList.slice(i, i + 3));
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <header className="header">
          <div className="label-wrapper">
            <span className="accent-line"></span>
            <span className="sub-heading">GLOBAL STANDARDS</span>
          </div>
          <h1>Transport Modes<br/> <span className="green-text">Available.</span></h1>
        </header>

        <div className="scroll-wrapper">
          {showLeftArrow && <button className="scroll-arrow left" onClick={() => scroll('left')}>‹</button>}
          <div className="scroll-container" ref={scrollRef}>
            {vehicles.map((v) => (
              <div key={v.id} className="vehicle-card">
                <div className="card-visual" style={{ backgroundImage: `url(${v.image})` }}><span className="category-tag">{v.tag}</span></div>
                <div className="card-details">
                  <div className="title-row"><h2 className="vehicle-title">{v.type}</h2><span className="info-circle">i</span></div>
                  <div className="capacity-row"><span className="speed-icon">⚡</span><span className="capacity-label">Capacity: {v.capacity}</span><span className="info-small">i</span></div>
                  <p className="description">{v.description}</p>
                  <div className="stats-grid"><div className="stat-item"><label>TARGET ITEMS</label><p>{v.items}</p></div></div>
                  <div className="stats-grid"><div className="stat-item"><label>SERVICES</label><p>{v.crew}</p></div></div>
                  <button className="cta-button">REQUEST A QUOTE <span className="arrow">→</span></button>
                </div>
              </div>
            ))}
          </div>
          {showRightArrow && <button className="scroll-arrow right" onClick={() => scroll('right')}>›</button>}
        </div>

        <section className="stats-dashboard">
          <div className="stat-card main-card">
            <div className="stat-content">
              <h2 className="stat-number">10k<span className="plus-sign">+</span></h2>
              <div className="stat-label-group">
                <span className="stat-category">SCALE OF OPERATIONS</span>
                <p className="stat-description">Monthly loads managed</p>
              </div>
            </div>
          </div>
          <div className="secondary-stats-wrapper">
            <div className="top-stats-row">
              <div className="stat-card light-card hover-border">
                <span className="badge">GLOBAL NETWORK</span>
                <h3 className="sub-stat-number">1K<span className="plus-sign-green">+</span></h3>
                <p className="sub-stat-label">VERIFIED CARRIERS<br/>ON DEMAND</p>
              </div>
              <div className="stat-card green-card">
                <h3 className="region-title">WORLDWIDE</h3>
                <p className="region-subtitle">CROSS-BORDER<br/>MASTERY & ROUTES</p>
              </div>
            </div>
            <div className="stat-card wide-card hover-border">
              <span className="stat-category">RISK MITIGATION</span>
              <p className="insurance-text"><strong>100% Goods In Transit (GIT) Insurance</strong></p>
            </div>
          </div>
        </section>

        <section className="service-grid-section">
          <header className="grid-header">
            <div className="grid-header-left">
              <span className="services-small-label">SERVICES</span>
              <h2 className="grid-main-title">Transport solutions <br/><span className="faded">for every load.</span></h2>
            </div>
            <div className="grid-header-right">
              <p>Choose the right service and vehicle size—then we handle dispatch, tracking, and delivery updates.</p>
            </div>
          </header>
          {groupedServices.map((group, idx) => (
            <div className="azi-grid" key={idx}>
              <div className="azi-card large" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${group[0].image})` }}>
                <div className="azi-card-id">{group[0].id}</div>
                <div className="azi-card-content"><h3>{group[0].title}</h3><p>{group[0].desc}</p></div>
                <button className="azi-expand-btn">↗</button>
              </div>
              <div className="azi-side-column">
                {group.slice(1).map((s) => (
                  <div key={s.id} className="azi-card small" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${s.image})` }}>
                    <div className="azi-card-id">{s.id}</div>
                    <div className="azi-card-content">
                      <h3>{s.title}</h3><p>{s.desc}</p>
                      <div className="azi-tag-container">{s.tags.map(tag => <span key={tag} className="azi-tag">{tag}</span>)}</div>
                    </div>
                    <button className="azi-expand-btn">↗</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="footer-cta-container">
          <div className="footer-cta-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${RoadImg})` }}>
            <div className="cta-badge">
              <span className="dot"></span> GET A QUOTE FAST
            </div>
            <h2 className="cta-heading">Ready to move <br/> your goods?</h2>
            <p className="cta-subtext">Start a quote in minutes. Choose your vehicle class and share pickup/drop-off areas — we’ll confirm details and availability next.</p>
            <div className="cta-actions">
              <button className="btn-primary">GET A QUOTE <span className="arrow">→</span></button>
              <button className="btn-secondary">CONTACT</button>
            </div>
            <div className="cta-footer-info">
              <span className="shield-icon">🛡️</span> OPTIONAL GOODS-IN-TRANSIT COVER
            </div>
          </div>
        </section>
      </div>

      <footer className="main-site-footer">
        <div className="footer-wrapper">
          <div className="footer-grid">
            <div className="footer-brand-column">
              {/* Clickable Logo */}
              <a href="#" onClick={scrollToTop} className="footer-logo-link">
                <img src={LogoImg} alt="Logo" className="footer-logo-file" />
              </a>
              <p className="footer-desc">Reliable goods transport across the world — from small loads to heavy freight.</p>
              <div className="footer-social-icons">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">TikTok</a>
              </div>
            </div>
            <div className="footer-nav-column">
              <h3>NAVIGATION</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Request Quote</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h3>CONTACT</h3>
              <ul>
                <li>+243 854 543 130</li>
                <li>logistics@boyenge.com</li>
                <li>Qatar, Dubai</li>
                <li>Hong Kong, Philippines</li>
                <li>China, Congo</li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h3>LEGAL</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">GIT Insurance Info</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom-divider"></div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleSelector;