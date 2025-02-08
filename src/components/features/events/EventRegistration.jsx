import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EventRegistration() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Registration Details
    ticketType: '',
    quantity: 1,
    attendees: [{ name: '', email: '', age: '', specialNeeds: '' }],
    
    // Additional Information
    dietaryRestrictions: [],
    accommodations: '',
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    
    // Group Information
    isGroupRegistration: false,
    organizationName: '',
    groupSize: '',
    
    // Preferences
    joinMailingList: false,
    shareContactInfo: false,
    
    // Requirements
    agreeToTerms: false,
    agreeToPhotoRelease: false,
    agreeToCovidPolicy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchEventDetails();
  }, [eventId]);

  const fetchEventDetails = async () => {
    try {
      // API call would go here
      const mockEvent = {
        id: eventId,
        title: 'Community Health Fair',
        date: '2024-03-15',
        time: '09:00-16:00',
        location: 'Kampala Community Center',
        ticketTypes: [
          {
            id: 'general',
            name: 'General Admission',
            price: 0,
            available: 50
          },
          {
            id: 'vip',
            name: 'VIP Access',
            price: 50000,
            available: 20,
            benefits: [
              'Priority access',
              'Exclusive workshops',
              'Lunch included'
            ]
          }
        ],
        requirements: [
          'Pre-registration required',
          'Bring ID',
          'Face mask recommended'
        ]
      };
      setEvent(mockEvent);
    } catch (error) {
      console.error('Failed to fetch event details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = [...formData.attendees];
    newAttendees[index] = {
      ...newAttendees[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      attendees: newAttendees
    }));
  };

  const addAttendee = () => {
    if (formData.attendees.length < formData.quantity) {
      setFormData(prev => ({
        ...prev,
        attendees: [
          ...prev.attendees,
          { name: '', email: '', age: '', specialNeeds: '' }
        ]
      }));
    }
  };

  const removeAttendee = (index) => {
    setFormData(prev => ({
      ...prev,
      attendees: prev.attendees.filter((_, i) => i !== index)
    }));
  };

  const handleDietaryRestriction = (restriction) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
        ? prev.dietaryRestrictions.filter(r => r !== restriction)
        : [...prev.dietaryRestrictions, restriction]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.ticketType) newErrors.ticketType = 'Please select a ticket type';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    // Validate all attendees
    formData.attendees.forEach((attendee, index) => {
      if (!attendee.name) {
        newErrors[`attendee${index}Name`] = 'Attendee name is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // API call to submit registration would go here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      navigate('/registration-success', { 
        state: { 
          eventTitle: event.title,
          registrationDetails: formData 
        }
      });
    } catch (error) {
      setErrors({ submit: 'Failed to submit registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading registration form...</div>;
  }

  return (
    <div className="event-registration-page">
      <div className="registration-header">
        <h1>Register for {event.title}</h1>
        <div className="event-summary">
          <p>📅 {new Date(event.date).toLocaleDateString()}</p>
          <p>⏰ {event.time}</p>
          <p>📍 {event.location}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
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
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Ticket Selection</h2>
          <div className="ticket-options">
            {event.ticketTypes.map(ticket => (
              <div key={ticket.id} className="ticket-option">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="ticketType"
                    value={ticket.id}
                    checked={formData.ticketType === ticket.id}
                    onChange={handleChange}
                  />
                  <div className="ticket-details">
                    <h3>{ticket.name}</h3>
                    <p className="price">
                      {ticket.price === 0 ? 'Free' : `${ticket.price} UGX`}
                    </p>
                    {ticket.benefits && (
                      <ul className="benefits">
                        {ticket.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    )}
                    <span className="availability">
                      {ticket.available} spots left
                    </span>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h2>Additional Information</h2>
          <div className="form-group">
            <label>Dietary Restrictions</label>
            <div className="checkbox-group">
              {[
                'Vegetarian',
                'Vegan',
                'Gluten-free',
                'Dairy-free',
                'Nut allergy',
                'Other'
              ].map(restriction => (
                <label key={restriction} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.dietaryRestrictions.includes(restriction)}
                    onChange={() => handleDietaryRestriction(restriction)}
                  />
                  {restriction}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="accommodations">Special Accommodations</label>
            <textarea
              id="accommodations"
              name="accommodations"
              value={formData.accommodations}
              onChange={handleChange}
              placeholder="Please let us know if you need any special accommodations..."
              rows="3"
            />
          </div>
        </div>

        <div className="form-section agreements">
          <h2>Agreements</h2>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label>
          {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToPhotoRelease"
              checked={formData.agreeToPhotoRelease}
              onChange={handleChange}
            />
            I agree to the photo release policy
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToCovidPolicy"
              checked={formData.agreeToCovidPolicy}
              onChange={handleChange}
            />
            I agree to follow COVID-19 safety guidelines
          </label>
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Complete Registration'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventRegistration; 