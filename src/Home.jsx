import React from "react";
import "./Home.css";
import heroImage from "./assets/Background.png"; // Replace with your image

export default function Home() {
  return (
    <div className="page-wrapper">
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            <div className="truck-icon">🚚</div>
            <div>
              <span className="logo-main">BOYENGE</span>
              <span className="logo-sub">LOGISTICS</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Contact</a>
          </div>

          <button className="quote-btn">GET A QUOTE</button>
        </nav>

        {/* HERO CONTENT */}
        <div className="hero-content">
          <div className="badge">
            <span className="dot"></span> WORLDWIDE
          </div>

          <h1>
            Moving Value,<br />
            Enabling Trade.
          </h1>
        </div>

        {/* QUOTE BAR */}
        <div className="quote-bar">
          <div className="form-group">
            <label>TRANSPORT MODE</label>
            <select>
              <option>Air</option>
              <option>Road</option>
              <option>Sea</option>
            </select>
          </div>

          <div className="form-group">
            <label>FRAGILE GOODS</label>
            <select>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          <div className="form-group">
            <label>PICK UP</label>
            <input type="text" placeholder="City / suburb" />
          </div>

          <div className="form-group">
            <label>DROP OFF</label>
            <input type="text" placeholder="City / suburb" />
          </div>

          <button className="quote-bar-btn">GET A QUOTE →</button>
        </div>
      </div>
    </div>
  );
}
