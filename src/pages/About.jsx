import { Link } from 'react-router-dom';
import { Heart, Users, Award, Shield, Target, Eye } from 'lucide-react';
import './About.css';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every client with kindness, empathy, and genuine care.',
  },
  {
    icon: Shield,
    title: 'Dignity',
    description: 'We respect each person\'s individuality and right to make their own choices.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
  {
    icon: Users,
    title: 'Family Values',
    description: 'We treat our clients and carers like members of our own family.',
  },
];

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">About Us</span>
            <h1>Caring for You Like Family</h1>
            <p>
              For over 15 years, Rayvall Care has been providing exceptional
              homecare services, helping people live independently in the comfort
              of their own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <span className="section-label">Our Story</span>
              <h2>A Family Business Built on Care</h2>
              <p>
                Rayvall Care was founded with a simple but powerful mission: to
                provide the kind of care we would want for our own loved ones.
                What started as a small family operation has grown into a trusted
                care provider serving communities across the South East of England.
              </p>
              <p>
                We understand that inviting someone into your home to provide care
                is one of the most important decisions you'll ever make. That's why
                we take the time to match you with carers who not only have the
                right skills, but who also share your values and interests.
              </p>
              <p>
                Today, we remain a family-run business with family values at heart.
                Every member of our team, from our office staff to our carers in
                the field, shares our commitment to providing exceptional,
                person-centred care.
              </p>
            </div>
            <div className="story-images">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=500&q=80"
                alt="Caregiver with client"
                className="story-image-main"
              />
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=80"
                alt="Happy senior couple"
                className="story-image-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To enable people to live independently at home for as long as
                possible, with dignity, choice, and the highest quality of care.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted homecare provider in the South East,
                recognised for exceptional care and the positive impact we make
                on people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CQC Section */}
      <section className="cqc-section section bg-light">
        <div className="container">
          <div className="cqc-content">
            <div className="cqc-image">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80"
                alt="Professional healthcare"
              />
            </div>
            <div className="cqc-text">
              <span className="section-label">Quality Assurance</span>
              <h2>Regulated by the Care Quality Commission</h2>
              <p>
                We are fully registered and regulated by the Care Quality
                Commission (CQC), the independent regulator of health and social
                care in England. This means we are regularly inspected to ensure
                we meet the highest standards of care.
              </p>
              <p>
                Our CQC registration gives you peace of mind that we operate
                within strict guidelines designed to keep vulnerable people safe
                and ensure they receive quality care.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="text-white">Join Our Caring Team</h2>
            <p className="text-white">
              Want to make a real difference in people's lives? We're always
              looking for compassionate individuals to join the Rayvall Care family.
            </p>
            <Link to="/jobs" className="btn btn-secondary btn-lg">
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
