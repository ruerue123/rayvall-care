import { Link } from 'react-router-dom';
import { Heart, Users, Home, Brain, Clock, Stethoscope, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Dignified support with daily activities including bathing, dressing, and medication management.',
    link: '/services/personal-care',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&q=80',
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Friendly visits providing social interaction, conversation, and accompaniment to appointments.',
    link: '/services/companionship',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&q=80',
  },
  {
    icon: Home,
    title: 'Live-In Care',
    description: '24/7 dedicated care in the comfort of your own home, providing round-the-clock support.',
    link: '/services/live-in-care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    description: 'Specialist support for those living with dementia, delivered with patience and understanding.',
    link: '/services/dementia-care',
    image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&q=80',
  },
  {
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term care to give family carers a well-deserved break while ensuring continuity of care.',
    link: '/services/respite-care',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    icon: Stethoscope,
    title: 'Complex Care',
    description: 'Specialist nursing support for conditions requiring clinical expertise and medical knowledge.',
    link: '/services/complex-care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
  },
];

const Services = () => {
  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Homecare Services</h2>
          <p>
            We provide flexible, person-centred care tailored to your individual needs,
            from a few hours a week to full-time live-in support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">
                  <service.icon size={18} />
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <p>Not sure what care you need?</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
