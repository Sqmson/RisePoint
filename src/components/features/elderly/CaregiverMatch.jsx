import { useState } from 'react';
import { Link } from 'react-router-dom';

function CaregiverMatch() {
  const [activeTab, setActiveTab] = useState('find');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    serviceType: '',
    availability: '',
    experience: ''
  });

  const caregivers = [
    {
      id: 1,
      name: 'Sarah Namukasa',
      location: 'Kampala Central',
      experience: '5 years',
      services: [
        'Personal care',
        'Meal preparation',
        'Healthcare monitoring',
        'Income generation support'
      ],
      availability: 'Full-time',
      skills: [
        'Elder care certified',
        'First aid trained',
        'Business mentoring',
        'Health monitoring'
      ],
      languages: ['English', 'Luganda', 'Swahili'],
      rate: '300,000 - 500,000 UGX/month',
      verified: true,
      rating: 4.8,
      reviews: 15
    },
    {
      id: 2,
      name: 'John Okello',
      location: 'Entebbe',
      experience: '3 years',
      services: [
        'Skills training',
        'Business development',
        'Healthcare support',
        'Transportation'
      ],
      availability: 'Part-time',
      skills: [
        'Business trainer',
        'Healthcare assistant',
        'Driving license',
        'Computer skills'
      ],
      languages: ['English', 'Luganda'],
      rate: '200,000 - 400,000 UGX/month',
      verified: true,
      rating: 4.7,
      reviews: 12
    }
  ];

  const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="caregiver-match">
      <section className="hero">
        <h1>Caregiver Matching Service</h1>
        <p>Connect with trained caregivers who support poverty eradication for elderly community members</p>
      </section>

      <section className="service-tabs">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => setActiveTab('find')}
          >
            Find a Caregiver
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Become a Caregiver
          </button>
        </div>
      </section>

      {activeTab === 'find' && (
        <>
          <section className="search-filters">
            <div className="filter-grid">
              <div className="filter-group">
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  value={searchFilters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">All Locations</option>
                  <option value="kampala">Kampala</option>
                  <option value="entebbe">Entebbe</option>
                  <option value="jinja">Jinja</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  value={searchFilters.serviceType}
                  onChange={(e) => handleFilterChange('serviceType', e.target.value)}
                >
                  <option value="">All Services</option>
                  <option value="personal">Personal Care</option>
                  <option value="health">Healthcare</option>
                  <option value="business">Business Support</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="availability">Availability</label>
                <select
                  id="availability"
                  value={searchFilters.availability}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                >
                  <option value="">Any Availability</option>
                  <option value="fulltime">Full-time</option>
                  <option value="parttime">Part-time</option>
                </select>
              </div>
            </div>
          </section>

          <section className="caregivers-grid">
            {caregivers.map(caregiver => (
              <div key={caregiver.id} className="caregiver-card">
                <div className="caregiver-header">
                  <h2>{caregiver.name}</h2>
                  {caregiver.verified && (
                    <span className="verified-badge">Verified</span>
                  )}
                </div>

                <div className="caregiver-meta">
                  <span className="location">{caregiver.location}</span>
                  <span className="experience">{caregiver.experience} experience</span>
                  <span className="rating">⭐ {caregiver.rating} ({caregiver.reviews} reviews)</span>
                </div>

                <div className="services">
                  <h3>Services Offered</h3>
                  <ul>
                    {caregiver.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>

                <div className="skills">
                  <h3>Skills & Certifications</h3>
                  <ul>
                    {caregiver.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="languages">
                  <h3>Languages</h3>
                  <p>{caregiver.languages.join(', ')}</p>
                </div>

                <div className="rate">
                  <h3>Rate</h3>
                  <p>{caregiver.rate}</p>
                </div>

                <div className="caregiver-actions">
                  <Link 
                    to={`/caregivers/${caregiver.id}`}
                    className="btn btn-primary"
                  >
                    View Profile
                  </Link>
                  <Link 
                    to={`/caregivers/contact/${caregiver.id}`}
                    className="btn btn-secondary"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {activeTab === 'register' && (
        <section className="register-caregiver">
          <h2>Become a Caregiver</h2>
          <p>Join our network of caregivers and help support elderly community members</p>
          
          <div className="requirements">
            <h3>Requirements</h3>
            <ul>
              <li>Elder care certification</li>
              <li>First aid training</li>
              <li>Clean background check</li>
              <li>References</li>
            </ul>
          </div>

          <div className="benefits">
            <h3>Benefits</h3>
            <ul>
              <li>Flexible working hours</li>
              <li>Competitive pay</li>
              <li>Training opportunities</li>
              <li>Support network</li>
            </ul>
          </div>

          <Link to="/caregivers/register" className="btn btn-primary">
            Start Application
          </Link>
        </section>
      )}

      <section className="support-section">
        <h2>Need Assistance?</h2>
        <div className="support-options">
          <a href="tel:+256800100200" className="support-link">
            Call: 0800 100 200
          </a>
          <Link to="/contact" className="support-link">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CaregiverMatch; 