import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    careNeeds: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will contact you shortly.');
  };

  return (
    <section className="contact-form-section section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Get In Touch</span>
            <h2>Book Your Free Care Assessment</h2>
            <p>
              Take the first step towards quality homecare. Our friendly team will
              discuss your needs and create a personalised care plan - completely
              free and with no obligation.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:07990493201">07990 493201</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:info@rayvallcare.co.uk">info@rayvallcare.co.uk</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Visit Us</strong>
                  <span>17 Durnsfordway, Cranleigh, Surrey GU6 7LN</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Office Hours</strong>
                  <span>Mon - Fri: 9am - 5pm</span>
                  <span>24/7 Care Line Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card card">
            <h3>Request a Callback</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email (optional)"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="careNeeds">Type of Care Needed</label>
                <select
                  id="careNeeds"
                  name="careNeeds"
                  value={formData.careNeeds}
                  onChange={handleChange}
                >
                  <option value="">Please select...</option>
                  <option value="personal-care">Personal Care</option>
                  <option value="companionship">Companionship</option>
                  <option value="live-in-care">Live-In Care</option>
                  <option value="dementia-care">Dementia Care</option>
                  <option value="respite-care">Respite Care</option>
                  <option value="complex-care">Complex Care</option>
                  <option value="not-sure">Not Sure - Need Advice</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Needs</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Please share any details about the care you're looking for..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg submit-btn">
                <Send size={20} />
                Request Callback
              </button>

              <p className="form-note">
                We'll get back to you within 24 hours. Your information is kept
                strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
