import { Shield, Award, Heart, Users, Clock, MapPin } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: Shield,
    title: 'CQC Registration in Progress',
    description: 'Working towards full CQC regulation to ensure the highest standards of care.',
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
          <div className="why-choose-us-image">
            <img
              src="https://media.istockphoto.com/id/1424334340/photo/nurse-pushing-senior-woman-on-wheelchair.jpg?s=612x612&w=0&k=20&c=umtAxs8v9FPtVAT3R5pF823xhq8qC8bdmAI0LKwih2U="
              alt="Nurse pushing senior woman on wheelchair"
              className="main-image"
            />
          </div>
          <div className="why-choose-us-text">
            <span className="section-label">Why Choose Rayvall Healthcare Solutions</span>
            <h2>Trusted Homecare That Puts You First</h2>
            <p>
              For over 15 years, Rayvall Healthcare Solutions has been providing exceptional domiciliary
              care services across the UK. We understand that inviting someone into your
              home to provide care is a significant decision, which is why we go above
              and beyond to ensure you receive the highest quality support.
            </p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <feature.icon size={20} />
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
