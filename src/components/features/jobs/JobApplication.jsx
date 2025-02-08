import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function JobApplication() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      education: '',
      experience: ''
    },
    skills: {
      technical: '',
      language: '',
      computer: '',
      other: ''
    },
    availability: {
      startDate: '',
      notice: '',
      preferredHours: '',
      transport: ''
    },
    documents: {
      cv: null,
      certificates: null,
      references: ''
    },
    questions: {
      motivation: '',
      expectations: '',
      challenges: '',
      goals: ''
    },
    consent: {
      termsAccepted: false,
      dataPolicy: false,
      background: false
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    try {
      // API call would go here
      const mockJob = {
        id: jobId,
        title: 'Construction Worker',
        company: 'BuildRight Construction Ltd',
        location: 'Kampala',
        requirements: [
          'Basic construction skills',
          'Physical fitness',
          'Team player'
        ]
      };
      setJob(mockJob);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFileUpload = (section, field, file) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: file
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API submission would go here
      console.log('Submitting application:', formData);
      navigate('/jobs/application-success');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="job-application">
      <section className="application-header">
        <h1>Apply for {job.title}</h1>
        <p className="company">{job.company} - {job.location}</p>
      </section>

      <form onSubmit={handleSubmit} className="application-form">
        {/* Personal Information */}
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
              <label htmlFor="location">Current Location</label>
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

        {/* Skills & Experience */}
        <section className="form-section">
          <h2>Skills & Experience</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="technical">Technical Skills</label>
              <textarea
                id="technical"
                value={formData.skills.technical}
                onChange={(e) => handleChange('skills', 'technical', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Work Experience</label>
              <textarea
                id="experience"
                value={formData.personalInfo.experience}
                onChange={(e) => handleChange('personalInfo', 'experience', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Documents Upload */}
        <section className="form-section">
          <h2>Documents</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="cv">CV/Resume</label>
              <input
                type="file"
                id="cv"
                onChange={(e) => handleFileUpload('documents', 'cv', e.target.files[0])}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="certificates">Certificates (if any)</label>
              <input
                type="file"
                id="certificates"
                onChange={(e) => handleFileUpload('documents', 'certificates', e.target.files[0])}
                accept=".pdf,.doc,.docx"
                multiple
              />
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="form-section">
          <h2>Additional Questions</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="motivation">Why are you interested in this position?</label>
              <textarea
                id="motivation"
                value={formData.questions.motivation}
                onChange={(e) => handleChange('questions', 'motivation', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="goals">What are your career goals?</label>
              <textarea
                id="goals"
                value={formData.questions.goals}
                onChange={(e) => handleChange('questions', 'goals', e.target.value)}
                required
              />
            </div>
          </div>
        </section>

        {/* Consent */}
        <section className="form-section">
          <h2>Agreements</h2>
          <div className="consent-checkboxes">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.consent.termsAccepted}
                onChange={(e) => handleChange('consent', 'termsAccepted', e.target.checked)}
                required
              />
              I agree to the terms and conditions
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.consent.dataPolicy}
                onChange={(e) => handleChange('consent', 'dataPolicy', e.target.checked)}
                required
              />
              I agree to the data privacy policy
            </label>
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>

      <section className="application-support">
        <h2>Need Help?</h2>
        <div className="support-options">
          <a href="tel:+256800100200" className="support-link">
            Call Support: 0800 100 200
          </a>
          <a href="mailto:support@upei.org" className="support-link">
            Email: support@upei.org
          </a>
        </div>
      </section>
    </div>
  );
}

export default JobApplication; 