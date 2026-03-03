import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Personal Care',
    description: 'Dignified support with daily activities including bathing, dressing, and medication management.',
    link: '/services/personal-care',
    image: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=600&h=375&fit=crop&q=80',
  },
  {
    title: 'Companionship',
    description: 'Friendly visits providing social interaction, conversation, and accompaniment to appointments.',
    link: '/services/companionship',
    image: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=600&h=375&fit=crop&q=80',
  },
  {
    title: 'Live-In Care',
    description: '24/7 dedicated care in the comfort of your own home, providing round-the-clock support.',
    link: '/services/live-in-care',
    image: 'https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Dementia Care',
    description: 'Specialist support for those living with dementia, delivered with patience and understanding.',
    link: '/services/dementia-care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=375&fit=crop&q=80',
  },
  {
    title: 'Respite Care',
    description: 'Short-term care to give family carers a well-deserved break while ensuring continuity of care.',
    link: '/services/respite-care',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600&h=375&fit=crop',
  },
  {
    title: 'Complex Care',
    description: 'Specialist nursing support for conditions requiring clinical expertise and medical knowledge.',
    link: '/services/complex-care',
    image: 'https://images.unsplash.com/photo-1666886573197-bf6600d15bce?w=600&h=375&fit=crop&q=80',
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
