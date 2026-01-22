import { Link } from 'react-router-dom';
import { Heart, Users, Home, Brain, Clock, Stethoscope, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Dignified support with daily activities including bathing, dressing, and medication management.',
    link: '/services/personal-care',
  },
  {
    icon: Users,
    title: 'Companionship',
    description: 'Friendly visits providing social interaction, conversation, and accompaniment to appointments.',
    link: '/services/companionship',
  },
  {
    icon: Home,
    title: 'Live-In Care',
    description: '24/7 dedicated care in the comfort of your own home, providing round-the-clock support.',
    link: '/services/live-in-care',
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    description: 'Specialist support for those living with dementia, delivered with patience and understanding.',
    link: '/services/dementia-care',
  },
  {
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term care to give family carers a well-deserved break while ensuring continuity of care.',
    link: '/services/respite-care',
  },
  {
    icon: Stethoscope,
    title: 'Complex Care',
    description: 'Specialist nursing support for conditions requiring clinical expertise and medical knowledge.',
    link: '/services/complex-care',
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
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">
                Learn More <ArrowRight size={16} />
              </span>
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
