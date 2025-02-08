import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VolunteerSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: {
      street: '',
      city: '',
      district: '',
      country: 'Uganda'
    },
    
    // Volunteer Preferences
    interests: [],
    availability: {
      weekdays: [],
      weekends: false,
      timePreference: []
    },
    preferredLocations: [],
    
    // Skills & Experience
    skills: [],
    languages: [],
    previousVolunteer: false,
    volunteerExperience: '',
    currentEmployment: '',
    education: '',
    
    // Additional Information
    motivation: '',
    references: [
      { name: '', relationship: '', contact: '' }
    ],
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    
    // Requirements
    hasTransport: false,
    canCommit6Months: false,
    understandsRequirements: false,
    
    // Agreements
    agreeToBackground: false,
    agreeToTraining: false,
    agreeToGuidelines: false,
    agreeToConfidentiality: false
  });

  const interestAreas = [
    'Education & Teaching',
    'Healthcare Support',
    'Community Outreach',
    'Administrative Support',
    'Event Organization',
    'Elderly Care',
    'Youth Mentoring',
    'Fundraising',
    'IT & Technology',
    'Environmental Projects'
  ];

  const skillOptions = [
    'Teaching',
    'First Aid',
    'Project Management',
    'Computer Skills',
    'Language Skills',
    'Leadership',
    'Communication',
    'Organization',
    'Problem Solving',
    'Team Building'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };

  const handleAvailabilityChange = (day) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        weekdays: prev.availability.weekdays.includes(day)
          ? prev.availability.weekdays.filter(d => d !== day)
          : [...prev.availability.weekdays, day]
      }
    }));
  };

  const handleReferenceChange = (index, field, value) => {
    const newReferences = [...formData.references];
    newReferences[index] = {
      ...newReferences[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      references: newReferences
    }));
  };

  const addReference = () => {
    setFormData(prev => ({
      ...prev,
      references: [
        ...prev.references,
        { name: '', relationship: '', contact: '' }
      ]
    }));
  };

  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.interests.length > 0 && formData.availability.weekdays.length > 0;
      case 3:
        return formData.skills.length > 0;
      case 4:
        return formData.emergencyContact.name && formData.emergencyContact.phone;
      case 5:
        return formData.agreeToBackground && formData.agreeToTraining;
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to submit volunteer application would go here
      console.log('Volunteer application:', formData);
      navigate('/volunteer-success');
    } catch (error) {
      console.error('Failed to submit application:', error);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-section personal-info">
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="address-section">
              <h3>Address</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="street">Street Address *</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.address.street}
                    onChange={handleAddressChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.address.city}
                    onChange={handleAddressChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="district">District *</label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={formData.address.district}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-section volunteer-preferences">
            <h2>Volunteer Preferences</h2>
            
            <div className="interests-section">
              <h3>Areas of Interest *</h3>
              <div className="interests-grid">
                {interestAreas.map(interest => (
                  <label key={interest} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleArrayChange('interests', interest)}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            <div className="availability-section">
              <h3>Availability *</h3>
              <div className="weekdays-grid">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <label key={day} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.availability.weekdays.includes(day)}
                      onChange={() => handleAvailabilityChange(day)}
                    />
                    {day}
                  </label>
                ))}
              </div>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="weekends"
                  checked={formData.availability.weekends}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    availability: {
                      ...prev.availability,
                      weekends: e.target.checked
                    }
                  }))}
                />
                Available on Weekends
              </label>
            </div>
          </div>
        );

      // Add more cases for other steps...

      default:
        return null;
    }
  };

  return (
    <div className="volunteer-signup-page">
      <div className="signup-header">
        <h1>Volunteer Application</h1>
        <p>Join our community of volunteers making a difference</p>
      </div>

      <div className="progress-bar">
        <div 
          className="progress"
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        {renderStepContent()}

        <div className="form-navigation">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(prev => prev - 1)}
            >
              Previous
            </button>
          )}
          
          {step < 5 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => validateStep(step) && setStep(prev => prev + 1)}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!validateStep(5)}
            >
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default VolunteerSignup; 