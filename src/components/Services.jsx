import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Personal Care',
    description: 'Dignified support with daily activities including bathing, dressing, and medication management.',
    link: '/services/personal-care',
    image: 'https://wallpaperaccess.com/full/12857173.jpg',
  },
  {
    title: 'Companionship',
    description: 'Friendly visits providing social interaction, conversation, and accompaniment to appointments.',
    link: '/services/companionship',
    image: 'https://media.istockphoto.com/id/1630265698/photo/retired-woman-with-female-home-carer.jpg?s=170667a&w=0&k=20&c=MDwcQqBvLeQF3M2yJzpcC3RMPqPXzsC7osvlU0aNPHk=',
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
    image: 'https://wallpaperaccess.com/full/12856943.jpg',
  },
  {
    title: 'Respite Care',
    description: 'Short-term care to give family carers a well-deserved break while ensuring continuity of care.',
    link: '/services/respite-care',
    image: 'https://media.istockphoto.com/id/2160106752/photo/assisted-living-bedroom-or-retirement-with-nurse-and-old-woman-in-home-for-private-healthcare.webp?a=1&b=1&s=612x612&w=0&k=20&c=4c_93HjK6QlqAKjzE9IDEpwMFSwgAxyW5CxFeOddTSo=',
  },
  {
    title: 'Complex Care',
    description: 'Specialist nursing support for conditions requiring clinical expertise and medical knowledge.',
    link: '/services/complex-care',
    image: 'https://www.homecaring.com.au/wp-content/uploads/2024/09/townsville-loc.webp',
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
