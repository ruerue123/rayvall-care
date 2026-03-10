import { Phone, ClipboardList, FileText, UserCheck } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: Phone,
    step: 1,
    title: 'Get in Touch',
    description: 'Call 07990 493201 or email us to discuss your requirements and how we can help.',
  },
  {
    icon: ClipboardList,
    step: 2,
    title: 'Free Home Assessment',
    description: "We'll arrange a free face-to-face home care assessment with an experienced local Care Manager.",
  },
  {
    icon: FileText,
    step: 3,
    title: 'Tailored Care Plan',
    description: 'We will create a unique support and care plan tailored to your needs.',
  },
  {
    icon: UserCheck,
    step: 4,
    title: 'Matched With Your Carer',
    description: 'We will help match you with a carefully selected carer that meets your personal needs.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-title">
          <h2>Arrange Home Care for a Loved One</h2>
          <p>
            We understand choosing to have care delivered in your own home can be
            a daunting task and that's why we are here to guide you through the
            process, every step of the way.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((item) => (
            <div key={item.step} className="step-card">
              <div className="step-number">Step {item.step}</div>
              <div className="step-icon">
                <item.icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
