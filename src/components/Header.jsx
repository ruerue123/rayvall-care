import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <a href="tel:07990493201" className="phone-link">
              <Phone size={16} />
              <span>Call Us: 07990 493201</span>
            </a>
            <span className="cqc-badge">CQC Registered</span>
          </div>
        </div>
      </div>

      <nav className="header-main">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <span className="logo-text">Rayvall</span>
              <span className="logo-subtext">Care</span>
            </Link>

            <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              </li>
              <li
                className="has-dropdown"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="dropdown-trigger">
                  Our Services <ChevronDown size={16} />
                </button>
                <ul className={`dropdown-menu ${isServicesOpen ? 'active' : ''}`}>
                  <li><NavLink to="/services/personal-care" onClick={closeMenu}>Personal Care</NavLink></li>
                  <li><NavLink to="/services/companionship" onClick={closeMenu}>Companionship</NavLink></li>
                  <li><NavLink to="/services/live-in-care" onClick={closeMenu}>Live-In Care</NavLink></li>
                  <li><NavLink to="/services/dementia-care" onClick={closeMenu}>Dementia Care</NavLink></li>
                  <li><NavLink to="/services/respite-care" onClick={closeMenu}>Respite Care</NavLink></li>
                  <li><NavLink to="/services" onClick={closeMenu}>View All Services</NavLink></li>
                </ul>
              </li>
              <li>
                <NavLink to="/areas" onClick={closeMenu}>Areas We Cover</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
              </li>
              <li>
                <NavLink to="/costs" onClick={closeMenu}>Costs</NavLink>
              </li>
              <li>
                <NavLink to="/jobs" onClick={closeMenu}>Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </li>
            </ul>

            <Link to="/contact" className="btn btn-primary header-cta">
              Free Assessment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
