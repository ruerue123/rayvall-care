import { Link } from 'react-router-dom';
import { Briefcase, Heart, Clock, Award, CheckCircle } from 'lucide-react';
import './JobsBanner.css';

const benefits = [
  { icon: CheckCircle, text: 'Rewarding career making a real difference' },
  { icon: CheckCircle, text: 'Flexible hours to suit your lifestyle' },
  { icon: CheckCircle, text: 'Full training and career development' },
  { icon: CheckCircle, text: 'Competitive pay and mileage allowance' },
];

const JobsBanner = () => {
  return (
    <section className="jobs-banner section">
      <div className="container">
        <div className="jobs-banner-content">
          <div className="jobs-image">
            <img
              src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&q=80"
              alt="Care professional with elderly client"
              className="main-job-image"
            />
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
              alt="Smiling care professional"
              className="secondary-job-image"
            />
          </div>
          <div className="jobs-text">
            <span className="jobs-label">Careers</span>
            <h2>Join Our Care Team</h2>
            <p>
              Are you compassionate, reliable, and looking for a fulfilling career
              in care? We're always looking for dedicated individuals to join the
              Rayvall Healthcare Solutions family.
            </p>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <benefit.icon size={20} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/jobs" className="btn btn-primary btn-lg">
              View Current Vacancies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsBanner;
