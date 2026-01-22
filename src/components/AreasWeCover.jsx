import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import './AreasWeCover.css';

const areas = [
  {
    county: 'Surrey',
    towns: ['Guildford', 'Woking', 'Farnham', 'Godalming', 'Camberley', 'Epsom'],
  },
  {
    county: 'Hampshire',
    towns: ['Farnborough', 'Aldershot', 'Fleet', 'Basingstoke', 'Winchester', 'Andover'],
  },
  {
    county: 'Berkshire',
    towns: ['Reading', 'Bracknell', 'Wokingham', 'Slough', 'Windsor', 'Maidenhead'],
  },
  {
    county: 'West Sussex',
    towns: ['Crawley', 'Horsham', 'Worthing', 'Chichester', 'Bognor Regis', 'Littlehampton'],
  },
];

const AreasWeCover = () => {
  return (
    <section className="areas section">
      <div className="container">
        <div className="section-title">
          <h2>Areas We Cover</h2>
          <p>
            We provide homecare services across the South East of England.
            Find quality care in your local area.
          </p>
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card card">
              <div className="area-header">
                <MapPin size={24} />
                <h3>{area.county}</h3>
              </div>
              <ul className="towns-list">
                {area.towns.map((town, townIndex) => (
                  <li key={townIndex}>
                    <Link to={`/areas/${town.toLowerCase().replace(' ', '-')}`}>
                      {town}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to={`/areas/${area.county.toLowerCase()}`} className="area-link">
                View all {area.county} areas <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="areas-cta">
          <div className="cta-content">
            <h3>Don't see your area?</h3>
            <p>
              We're always expanding our coverage. Get in touch to see if we can
              provide care in your location.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AreasWeCover;
