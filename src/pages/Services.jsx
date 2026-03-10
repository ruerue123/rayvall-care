import { Link } from 'react-router-dom';
import { Heart, Users, Home, Brain, Clock, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    slug: 'personal-care',
    description: 'Dignified support with daily activities including bathing, dressing, grooming, and medication management.',
    image: 'https://wallpaperaccess.com/full/12857173.jpg',
    imageAlt: 'Caregiver assisting elderly person with personal care',
    features: [
      'Bathing and showering assistance',
      'Dressing and grooming help',
      'Medication reminders and administration',
      'Mobility support',
      'Continence care',
      'Nutrition and hydration support',
    ],
  },
  {
    icon: Users,
    title: 'Companionship',
    slug: 'companionship',
    description: 'Friendly visits providing social interaction, conversation, and accompaniment to appointments or activities.',
    image: 'https://media.istockphoto.com/id/1630265698/photo/retired-woman-with-female-home-carer.jpg?s=170667a&w=0&k=20&c=MDwcQqBvLeQF3M2yJzpcC3RMPqPXzsC7osvlU0aNPHk=',
    imageAlt: 'Caregiver and elderly person enjoying friendly conversation',
    features: [
      'Friendly conversation and company',
      'Accompaniment to appointments',
      'Social activities and outings',
      'Light housekeeping',
      'Meal preparation',
      'Shopping assistance',
    ],
  },
  {
    icon: Home,
    title: 'Live-In Care',
    slug: 'live-in-care',
    description: '24/7 dedicated care in the comfort of your own home, providing round-the-clock support and peace of mind.',
    image: 'https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=600&h=450&fit=crop&q=80',
    imageAlt: 'Caregiver providing live-in support in comfortable home setting',
    features: [
      'Round-the-clock support',
      'Personalised one-to-one care',
      'Maintain independence at home',
      'Alternative to residential care',
      'Couples can stay together',
      'Pets can remain at home',
    ],
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    slug: 'dementia-care',
    description: 'Specialist support for those living with dementia, delivered with patience, understanding, and dignity.',
    image: 'https://wallpaperaccess.com/full/12856943.jpg',
    imageAlt: 'Compassionate dementia care with gentle support',
    features: [
      'Specially trained dementia carers',
      'Memory support techniques',
      'Safe and familiar environment',
      'Routine and structure',
      'Engagement activities',
      'Family support and guidance',
    ],
  },
  {
    icon: Clock,
    title: 'Respite Care',
    slug: 'respite-care',
    description: 'Short-term care to give family carers a well-deserved break while ensuring continuity of care.',
    image: 'https://media.istockphoto.com/id/2160106752/photo/assisted-living-bedroom-or-retirement-with-nurse-and-old-woman-in-home-for-private-healthcare.webp?a=1&b=1&s=612x612&w=0&k=20&c=4c_93HjK6QlqAKjzE9IDEpwMFSwgAxyW5CxFeOddTSo=',
    imageAlt: 'Peaceful respite care environment for short-term support',
    features: [
      'Flexible duration options',
      'Emergency respite available',
      'Planned holiday cover',
      'Hospital discharge support',
      'Recovery from illness',
      'Seamless care transition',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Complex Care',
    slug: 'complex-care',
    description: 'Specialist nursing support for conditions requiring clinical expertise and ongoing medical care.',
    image: 'https://www.homecaring.com.au/wp-content/uploads/2024/09/townsville-loc.webp',
    imageAlt: 'Nurse providing specialist complex care support',
    features: [
      'Catheter and stoma care',
      'PEG feeding support',
      'Tracheostomy care',
      'Ventilator support',
      'Spinal injury care',
      'Palliative care support',
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="hero-badge">Our Services</span>
            <h1>Homecare Services Tailored to You</h1>
            <p>
              We provide flexible, person-centred care that adapts to your needs.
              From a few hours a week to 24/7 live-in support, we're here to help
              you live independently at home.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-content">
                <div className="service-icon-large">
                  <service.icon size={28} />
                </div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Enquire About {service.title} <ArrowRight size={14} />
                </Link>
              </div>
              <div className="service-image">
                <img src={service.image} alt={service.imageAlt} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="text-white">Not Sure What Care You Need?</h2>
            <p className="text-white">
              Our friendly team can help assess your needs and recommend the right
              care package. Book a free, no-obligation assessment today.
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
