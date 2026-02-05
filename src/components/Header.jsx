import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (e, serviceSlug) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/services') {
      // Already on services page, just scroll
      const element = document.getElementById(serviceSlug);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to services page then scroll
      navigate('/services');
      setTimeout(() => {
        const element = document.getElementById(serviceSlug);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
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
              <span className="logo-subtext">Healthcare Solutions</span>
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
                  <li><a href="/services#personal-care" onClick={(e) => handleServiceClick(e, 'personal-care')}>Personal Care</a></li>
                  <li><a href="/services#companionship" onClick={(e) => handleServiceClick(e, 'companionship')}>Companionship</a></li>
                  <li><a href="/services#live-in-care" onClick={(e) => handleServiceClick(e, 'live-in-care')}>Live-In Care</a></li>
                  <li><a href="/services#dementia-care" onClick={(e) => handleServiceClick(e, 'dementia-care')}>Dementia Care</a></li>
                  <li><a href="/services#respite-care" onClick={(e) => handleServiceClick(e, 'respite-care')}>Respite Care</a></li>
                  <li><a href="/services#complex-care" onClick={(e) => handleServiceClick(e, 'complex-care')}>Complex Care</a></li>
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
