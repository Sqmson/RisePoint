import { Link } from 'react-router-dom';

function RegistrationSuccess() {
  return (
    <div className="registration-success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Registration Successful!</h1>
        <p>Thank you for joining our community. Your account has been created successfully.</p>
        
        <div className="next-steps">
          <h2>Next Steps</h2>
          <ul>
            <li>Check your email for a verification link</li>
            <li>Complete your profile to get started</li>
            <li>Explore volunteer opportunities</li>
          </ul>
        </div>

        <div className="action-buttons">
          <Link to="/profile" className="btn btn-primary">
            Complete Your Profile
          </Link>
          <Link to="/programs" className="btn btn-secondary">
            Explore Programs
          </Link>
        </div>

        <div className="help-section">
          <p>Need help? Contact our support team at support@organization.org</p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess; 