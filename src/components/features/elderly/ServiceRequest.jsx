import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServiceRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    beneficiary: {
      fullName: '',
      age: '',
      gender: '',
      location: '',
      phone: '',
      healthStatus: '',
      currentSupport: ''
    },
    requestor: {
      name: '',
      relationship: '',
      phone: '',
      email: '',
      address: ''
    },
    services: {
      type: [],
      frequency: '',
      urgency: 'normal',
      specificNeeds: ''
    },
    housing: {
      type: '',
      accessibility: '',
      facilities: [],
      challenges: ''
    },
    support: {
      existingNetwork: '',
      communityResources: '',
      financialSituation: ''
    }
  });

  const serviceTypes = [
    { id: 'meals', label: 'Meal Support' },
    { id: 'healthcare', label: 'Healthcare Access' },
    { id: 'housing', label: 'Housing Support' },
    { id: 'income', label: 'Income Generation' },
    { id: 'skills', label: 'Skills Training' },
    { id: 'counseling', label: 'Counseling Services' }
  ];

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        type: prev.services.type.includes(serviceId)
          ? prev.services.type.filter(id => id !== serviceId)
          : [...prev.services.type, serviceId]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API submission would go here
      console.log('Submitting request:', formData);
      navigate('/services/request-success');
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  return (
    <div className="service-request">
      <section className="request-header">
        <h1>Request Support Services</h1>
        <p>Help us understand how we can support poverty eradication for elderly community members</p>
      </section>

      <form onSubmit={handleSubmit} className="request-form">
        {/* Beneficiary Information */}
        <section className="form-section">
          <h2>Beneficiary Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="beneficiaryName">Full Name</label>
              <input
                type="text"
                id="beneficiaryName"
                value={formData.beneficiary.fullName}
                onChange={(e) => handleChange('beneficiary', 'fullName', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                value={formData.beneficiary.age}
                onChange={(e) => handleChange('beneficiary', 'age', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={formData.beneficiary.location}
                onChange={(e) => handleChange('beneficiary', 'location', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="healthStatus">Health Status</label>
              <textarea
                id="healthStatus"
                value={formData.beneficiary.healthStatus}
                onChange={(e) => handleChange('beneficiary', 'healthStatus', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Services Needed */}
        <section className="form-section">
          <h2>Services Needed</h2>
          <div className="services-grid">
            {serviceTypes.map(service => (
              <label key={service.id} className="service-option">
                <input
                  type="checkbox"
                  checked={formData.services.type.includes(service.id)}
                  onChange={() => handleServiceToggle(service.id)}
                />
                {service.label}
              </label>
            ))}
          </div>

          <div className="form-group">
            <label htmlFor="specificNeeds">Specific Needs</label>
            <textarea
              id="specificNeeds"
              value={formData.services.specificNeeds}
              onChange={(e) => handleChange('services', 'specificNeeds', e.target.value)}
              placeholder="Please describe specific needs or challenges..."
              required
            />
          </div>
        </section>

        {/* Current Support */}
        <section className="form-section">
          <h2>Current Support Situation</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="existingNetwork">Existing Support Network</label>
              <textarea
                id="existingNetwork"
                value={formData.support.existingNetwork}
                onChange={(e) => handleChange('support', 'existingNetwork', e.target.value)}
                placeholder="Family, friends, or community support..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="financialSituation">Financial Situation</label>
              <textarea
                id="financialSituation"
                value={formData.support.financialSituation}
                onChange={(e) => handleChange('support', 'financialSituation', e.target.value)}
                placeholder="Current income sources and challenges..."
                required
              />
            </div>
          </div>
        </section>

        {/* Contact Person */}
        <section className="form-section">
          <h2>Contact Person Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="requestorName">Your Name</label>
              <input
                type="text"
                id="requestorName"
                value={formData.requestor.name}
                onChange={(e) => handleChange('requestor', 'name', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="relationship">Relationship to Beneficiary</label>
              <input
                type="text"
                id="relationship"
                value={formData.requestor.relationship}
                onChange={(e) => handleChange('requestor', 'relationship', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requestorPhone">Phone Number</label>
              <input
                type="tel"
                id="requestorPhone"
                value={formData.requestor.phone}
                onChange={(e) => handleChange('requestor', 'phone', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requestorEmail">Email</label>
              <input
                type="email"
                id="requestorEmail"
                value={formData.requestor.email}
                onChange={(e) => handleChange('requestor', 'email', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Submit Request
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </form>

      <section className="emergency-support">
        <h2>Need Immediate Assistance?</h2>
        <div className="emergency-options">
          <a href="tel:+256800100200" className="emergency-button">
            Call Emergency Helpline: 0800 100 200
          </a>
          <p>Available 24/7 for urgent support needs</p>
        </div>
      </section>
    </div>
  );
}

export default ServiceRequest; 