import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Package, CheckCircle, Clock, Truck, MapPin } from 'lucide-react';
import './Track.css';

const Track = () => {
  const { id } = useParams();

  // Mock data - In a real app, you'd fetch this from an API using the 'id'
  const trackingDetails = {
    status: 'In Transit',
    origin: 'Shanghai, China',
    destination: 'Kinshasa, DRC',
    eta: 'Oct 24, 2026',
    history: [
      { date: 'Oct 18', time: '14:20', location: 'Dubai, UAE', desc: 'Arrived at Sorting Facility', completed: true },
      { date: 'Oct 16', time: '09:00', location: 'Shanghai, China', desc: 'Shipment Picked Up', completed: true },
      { date: 'Oct 20', time: '---', location: 'Nairobi, Kenya', desc: 'Estimated Arrival', completed: false },
    ]
  };

  return (
    <div className="track-page">
      <div className="track-container">
        <Link to="/" className="back-link">
          <ChevronLeft size={20} /> Back to Home
        </Link>

        <header className="track-header">
          <h1>Shipment <span className="green-text">Details</span></h1>
          <p className="track-id-badge">ID: {id}</p>
        </header>

        <div className="track-card">
          <div className="status-overview">
            <div className="overview-item">
              <label>CURRENT STATUS</label>
              <p className="status-highlight">{trackingDetails.status}</p>
            </div>
            <div className="overview-item">
              <label>ESTIMATED DELIVERY</label>
              <p>{trackingDetails.eta}</p>
            </div>
          </div>

          <div className="timeline">
            {trackingDetails.history.map((event, index) => (
              <div key={index} className={`timeline-item ${event.completed ? 'active' : ''}`}>
                <div className="timeline-icon">
                  {event.completed ? <CheckCircle size={18} /> : <Clock size={18} />}
                </div>
                <div className="timeline-content">
                  <div className="time-col">
                    <span className="date">{event.date}</span>
                    <span className="time">{event.time}</span>
                  </div>
                  <div className="info-col">
                    <h4>{event.location}</h4>
                    <p>{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;