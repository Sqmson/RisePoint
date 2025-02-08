import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      gender: '',
      age: '',
      primaryLanguage: ''
    },
    interests: {
      programs: [],
      volunteerInterest: false,
      supportNeeded: [],
      skills: []
    },
    socioeconomic: {
      currentIncome: '',
      householdSize: '',
      employment: '',
      education: '',
      challenges: []
    },
    account: {
      username: '',
      password: '',
      confirmPassword: '',
      notifications: true,
      termsAccepted: false
    }
  });

  const programOptions = [
    { id: 'economic', label: 'Economic Empowerment' },
    { id: 'agriculture', label: 'Agricultural Development' },
    { id: 'education', label: 'Skills Training' },
    { id: 'elderly', label: 'Elder Support' }
  ];

  const supportOptions = [
    { id: 'financial', label: 'Financial Support' },
    { id: 'training', label: 'Skills Training' },
    { id: 'business', label: 'Business Development' },
    { id: 'mentorship', label: 'Mentorship' }
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

  const handleMultiSelect = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].includes(value)
          ? prev[section][field].filter(item => item !== value)
          : [...prev[section][field], value]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API submission would go here
      console.log('Submitting registration:', formData);
      navigate('/registration-success');
    } catch (error) {
      console.error('Error submitting registration:', error);
    }
  };

  const renderStep1 = () => (
    <section className="form-section">
      <h2>Personal Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={formData.personalInfo.fullName}
            onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.personalInfo.email}
            onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.personalInfo.phone}
            onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.personalInfo.location}
            onChange={(e) => handleChange('personalInfo', 'location', e.target.value)}
            required
          />
        </div>
      </div>
    </section>
  );

  const renderStep2 = () => (
    <section className="form-section">
      <h2>Programs & Interests</h2>
      <div className="form-grid">
        <div className="form-group">
          <h3>Programs of Interest</h3>
          {programOptions.map(program => (
            <label key={program.id} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.interests.programs.includes(program.id)}
                onChange={() => handleMultiSelect('interests', 'programs', program.id)}
              />
              {program.label}
            </label>
          ))}
        </div>

        <div className="form-group">
          <h3>Support Needed</h3>
          {supportOptions.map(support => (
            <label key={support.id} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.interests.supportNeeded.includes(support.id)}
                onChange={() => handleMultiSelect('interests', 'supportNeeded', support.id)}
              />
              {support.label}
            </label>
          ))}
        </div>
      </div>
    </section>
  );

  const renderStep3 = () => (
    <section className="form-section">
      <h2>Socioeconomic Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="currentIncome">Current Monthly Income (UGX)</label>
          <select
            id="currentIncome"
            value={formData.socioeconomic.currentIncome}
            onChange={(e) => handleChange('socioeconomic', 'currentIncome', e.target.value)}
            required
          >
            <option value="">Select Income Range</option>
            <option value="0-100000">0 - 100,000</option>
            <option value="100001-300000">100,001 - 300,000</option>
            <option value="300001-500000">300,001 - 500,000</option>
            <option value="500001+">Above 500,000</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="householdSize">Household Size</label>
          <input
            type="number"
            id="householdSize"
            value={formData.socioeconomic.householdSize}
            onChange={(e) => handleChange('socioeconomic', 'householdSize', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="challenges">Main Challenges (Select all that apply)</label>
          <div className="checkbox-group">
            {['unemployment', 'education', 'healthcare', 'housing'].map(challenge => (
              <label key={challenge} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.socioeconomic.challenges.includes(challenge)}
                  onChange={() => handleMultiSelect('socioeconomic', 'challenges', challenge)}
                />
                {challenge.charAt(0).toUpperCase() + challenge.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderStep4 = () => (
    <section className="form-section">
      <h2>Account Setup</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formData.account.username}
            onChange={(e) => handleChange('account', 'username', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.account.password}
            onChange={(e) => handleChange('account', 'password', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.account.termsAccepted}
              onChange={(e) => handleChange('account', 'termsAccepted', e.target.checked)}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>
      </div>
    </section>
  );

  return (
    <div className="user-registration">
      <section className="registration-header">
        <h1>Join Our Community</h1>
        <p>Register to access poverty eradication programs and support</p>
      </section>

      <div className="registration-progress">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>Personal Info</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>Interests</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>Background</div>
        <div className={`step ${step >= 4 ? 'active' : ''}`}>Account</div>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}

        <div className="form-actions">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(prev => prev - 1)}
            >
              Previous
            </button>
          )}
          
          {step < 4 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setStep(prev => prev + 1)}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Complete Registration
            </button>
          )}
        </div>
      </form>

      <section className="registration-support">
        <h2>Need Help?</h2>
        <div className="support-options">
          <a href="tel:+256800100200" className="support-link">
            Call: 0800 100 200
          </a>
          <a href="mailto:support@upei.org" className="support-link">
            Email: support@upei.org
          </a>
        </div>
      </section>
    </div>
  );
}

export default UserRegistration; 