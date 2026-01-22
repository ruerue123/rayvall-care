import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="hero-badge">Contact Us</span>
            <h1>Get in Touch</h1>
            <p>
              Ready to discuss your care needs? Our friendly team is here to help.
              Request a free assessment or simply ask us any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <p>Map would be displayed here</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
