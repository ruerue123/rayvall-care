import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-badge">CQC Registered Care Provider</span>
            <h1>Quality Homecare You Can Trust</h1>
            <p className="hero-subtitle">
              Compassionate domiciliary care services helping you or your loved ones
              live independently at home. From personal care to live-in support,
              we're here for you every step of the way.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Free Assessment
                <ArrowRight size={20} />
              </Link>
              <a href="tel:07990493201" className="btn btn-outline btn-lg">
                <Phone size={20} />
                Call 07990 493201
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-number">15+</span>
                <span className="trust-label">Years Experience</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">500+</span>
                <span className="trust-label">Families Supported</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">98%</span>
                <span className="trust-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-image-main">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80"
                alt="Caregiver helping elderly woman"
              />
            </div>
            <div className="hero-image-secondary">
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80"
                alt="Happy senior couple at home"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
