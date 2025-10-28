import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        
        <div className="container hero-content">
          <h1 className="hero-title">TicketFlow</h1>
          <p className="hero-subtitle">
            Streamline your support workflow with our powerful ticket management system
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/auth/signup')}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/auth/login')}>
              Login
            </button>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="wave-container">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose TicketFlow?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">📋</div>
              <h3>Easy Management</h3>
              <p>Create, update, and track tickets with an intuitive interface</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🔒</div>
              <h3>Secure Access</h3>
              <p>Your data is protected with industry-standard security</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📊</div>
              <h3>Real-time Insights</h3>
              <p>Monitor ticket status and team performance at a glance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;