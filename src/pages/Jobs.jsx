import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Heart, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import './Jobs.css';

const vacancies = [
  {
    title: 'Care Assistant',
    location: 'Surrey',
    type: 'Full-time / Part-time',
    description: 'Join our team providing personal care and companionship to clients in their homes.',
  },
  {
    title: 'Live-In Carer',
    location: 'Hampshire',
    type: 'Live-in',
    description: 'Provide round-the-clock care and support to clients requiring 24/7 assistance.',
  },
  {
    title: 'Senior Care Assistant',
    location: 'Berkshire',
    type: 'Full-time',
    description: 'Lead a small team of carers and ensure high standards of care delivery.',
  },
  {
    title: 'Dementia Care Specialist',
    location: 'Surrey',
    type: 'Full-time / Part-time',
    description: 'Specialist role providing care for clients living with dementia.',
  },
];

const benefits = [
  { icon: Heart, title: 'Rewarding Work', description: 'Make a genuine difference in people\'s lives every day' },
  { icon: Clock, title: 'Flexible Hours', description: 'Work patterns to suit your lifestyle and commitments' },
  { icon: Award, title: 'Full Training', description: 'Comprehensive induction and ongoing development' },
  { icon: Users, title: 'Supportive Team', description: 'Be part of a caring, family-run organisation' },
];

const requirements = [
  'Right to work in the UK',
  'Full UK driving licence (preferred)',
  'Compassionate and caring nature',
  'Good communication skills',
  'Reliability and flexibility',
  'Previous care experience (training provided)',
];

const Jobs = () => {
  return (
    <main className="jobs-page">
      {/* Hero Section */}
      <section className="jobs-hero">
        <div className="container">
          <div className="jobs-hero-content">
            <span className="hero-badge">Join Our Team</span>
            <h1>Build a Rewarding Career in Care</h1>
            <p>
              At Rayvall Care, we're looking for compassionate individuals who want
              to make a real difference in people's lives. Join our family and help
              others live independently at home.
            </p>
            <a href="#vacancies" className="btn btn-primary btn-lg">
              View Current Vacancies
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="jobs-benefits section">
        <div className="container">
          <div className="section-title">
            <h2>Why Work With Us</h2>
            <p>We value our care team and provide excellent benefits and support.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card">
                <div className="benefit-icon">
                  <benefit.icon size={28} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="vacancies section bg-light" id="vacancies">
        <div className="container">
          <div className="section-title">
            <h2>Current Vacancies</h2>
            <p>Explore our latest opportunities and find your perfect role.</p>
          </div>
          <div className="vacancies-grid">
            {vacancies.map((vacancy, index) => (
              <div key={index} className="vacancy-card card">
                <div className="vacancy-header">
                  <Briefcase size={24} />
                  <h3>{vacancy.title}</h3>
                </div>
                <div className="vacancy-meta">
                  <span><MapPin size={16} /> {vacancy.location}</span>
                  <span><Clock size={16} /> {vacancy.type}</span>
                </div>
                <p>{vacancy.description}</p>
                <Link to="/contact" className="btn btn-outline">
                  Apply Now <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements section">
        <div className="container">
          <div className="requirements-content">
            <div className="requirements-text">
              <h2>What We're Looking For</h2>
              <p>
                You don't need previous care experience to join us - we provide
                comprehensive training. What matters most is your caring nature
                and commitment to helping others.
              </p>
              <ul className="requirements-list">
                {requirements.map((req, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="requirements-cta">
              <div className="cta-card">
                <h3>Ready to Apply?</h3>
                <p>
                  Send us your details and we'll be in touch to discuss
                  opportunities that match your experience and availability.
                </p>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Apply Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jobs;
