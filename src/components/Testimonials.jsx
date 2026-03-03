import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Margaret Thompson',
    relation: 'Daughter of Client',
    location: 'Surrey',
    rating: 5,
    text: "Rayvall Healthcare Solutions has been absolutely wonderful with my mother. The carers are kind, patient, and always go the extra mile. Mum looks forward to their visits and has built such a lovely rapport with her regular carer, Sarah.",
  },
  {
    name: 'David Williams',
    relation: 'Son of Client',
    location: 'Hampshire',
    rating: 5,
    text: "After Dad's stroke, we were worried about how he'd cope at home. Rayvall's team created a care plan that gave him the support he needed while respecting his independence. The peace of mind they've given our family is invaluable.",
  },
  {
    name: 'Eleanor Bright',
    relation: 'Client',
    location: 'Berkshire',
    rating: 5,
    text: "I was hesitant about having someone come into my home, but the team at Rayvall made me feel so comfortable. My carer helps me stay active and we've become great friends. I couldn't manage without them now.",
  },
  {
    name: 'James Patterson',
    relation: 'Husband of Client',
    location: 'Kent',
    rating: 5,
    text: "The dementia care my wife receives is outstanding. The carers understand her condition and treat her with such dignity and patience. They've been trained specifically for dementia care and it really shows.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it - hear from the families we've had
            the privilege of supporting.
          </p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card">
            <Quote className="quote-icon" size={48} />
            <div className="stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="author-info">
                <strong>{testimonials[currentIndex].name}</strong>
                <span>{testimonials[currentIndex].relation}</span>
                <span className="location">{testimonials[currentIndex].location}</span>
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
