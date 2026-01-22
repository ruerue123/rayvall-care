import { Link } from 'react-router-dom';
import { Briefcase, Heart, Clock, Award } from 'lucide-react';
import './JobsBanner.css';

const benefits = [
  { icon: Heart, text: 'Rewarding career making a real difference' },
  { icon: Clock, text: 'Flexible hours to suit your lifestyle' },
  { icon: Award, text: 'Full training and career development' },
];

const JobsBanner = () => {
  return (
    <section className="jobs-banner section">
      <div className="container">
        <div className="jobs-banner-content">
          <div className="jobs-text">
            <div className="jobs-icon">
              <Briefcase size={32} />
            </div>
            <h2>Join Our Care Team</h2>
            <p>
              Are you compassionate, reliable, and looking for a fulfilling career
              in care? We're always looking for dedicated individuals to join the
              Rayvall Care family.
            </p>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <benefit.icon size={20} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/jobs" className="btn btn-secondary btn-lg">
              View Current Vacancies
            </Link>
          </div>
          <div className="jobs-image">
            <div className="image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&q=80"
                alt="Care professional with elderly client"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsBanner;
