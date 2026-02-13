import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Rayvall</span>
              <span className="logo-subtext">Healthcare Solutions</span>
            </Link>
            <p>
              Providing compassionate, professional homecare services across the
              South East of England. CQC registration in progress, committed to helping you
              live independently at home.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services/personal-care">Personal Care</Link></li>
              <li><Link to="/services/companionship">Companionship</Link></li>
              <li><Link to="/services/live-in-care">Live-In Care</Link></li>
              <li><Link to="/services/dementia-care">Dementia Care</Link></li>
              <li><Link to="/services/respite-care">Respite Care</Link></li>
              <li><Link to="/services/complex-care">Complex Care</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/areas">Areas We Cover</Link></li>
              <li><Link to="/jobs">Work With Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Phone size={16} />
                <a href="tel:07990493201">07990 493201</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:info@rayvallcare.co.uk">info@rayvallcare.co.uk</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>17 Durnsfordway<br />Cranleigh, Surrey GU6 7LN</span>
              </li>
            </ul>
            <div className="cqc-badge-footer">
              <span>CQC Registration in Progress</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rayvall Healthcare Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
