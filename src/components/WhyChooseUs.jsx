import { Shield, Award, Heart, Users, Clock, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: Shield,
    title: 'CQC Registered',
    description: 'Fully regulated by the Care Quality Commission, ensuring the highest standards of care.',
  },
  {
    icon: Award,
    title: 'Trained Carers',
    description: 'All our care professionals are fully trained, DBS checked, and regularly supervised.',
  },
  {
    icon: Heart,
    title: 'Person-Centred Care',
    description: 'Every care plan is tailored to individual needs, preferences, and routines.',
  },
  {
    icon: Users,
    title: 'Family-Run Values',
    description: 'We treat every client like family, with compassion and respect at the heart of everything.',
  },
  {
    icon: Clock,
    title: 'Flexible Support',
    description: 'From 30-minute visits to 24/7 live-in care, we adapt to your changing needs.',
  },
  {
    icon: MapPin,
    title: 'Local Care Team',
    description: 'Our carers live locally, ensuring reliable and consistent care from familiar faces.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="why-choose-us-content">
          <div className="why-choose-us-text">
            <span className="section-label">Why Choose Rayvall Care</span>
            <h2>Trusted Homecare That Puts You First</h2>
            <p>
              For over 15 years, Rayvall Care has been providing exceptional domiciliary
              care services across the UK. We understand that inviting someone into your
              home to provide care is a significant decision, which is why we go above
              and beyond to ensure you receive the highest quality support.
            </p>
            <p>
              Our dedicated team of carers are passionate about making a positive
              difference in people's lives, helping you maintain independence and
              dignity in the comfort of your own home.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
