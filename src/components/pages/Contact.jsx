import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us for any inquiries or support.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Office Location</h3>
            <p>Plot 123, Kampala Road</p>
            <p>Kampala, Uganda</p>
          </div>
          <div className="info-card">
            <h3>Contact Details</h3>
            <p>Phone: +256 123 456 789</p>
            <p>Email: info@organization.org</p>
          </div>
          <div className="info-card">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* Add your map component or iframe here */}
          <div className="map-placeholder">
            Map will be displayed here
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {[
            {
              question: "How can I volunteer?",
              answer: "Visit our Get Involved page to learn about volunteer opportunities."
            },
            {
              question: "How can I donate?",
              answer: "You can donate through our secure online platform or contact us for other options."
            },
            {
              question: "Do you offer internships?",
              answer: "Yes, we offer internships throughout the year. Contact us for current opportunities."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact; 