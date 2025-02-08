import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, error: authError } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(''); // Clear error when user makes changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(formData.username, formData.password);
      
      // Navigate to the page they tried to visit or dashboard
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (error) {
      setError(authError || 'Invalid email or password. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <section className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to access your poverty eradication programs</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => handleChange('rememberMe', e.target.checked)}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary login-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="registration-prompt">
          <p>Don't have an account?</p>
          <Link to="/register" className="btn btn-secondary">
            Register Now
          </Link>
        </div>

        <div className="emergency-access">
          <h2>Need Urgent Help?</h2>
          <div className="emergency-options">
            <a href="tel:+256800100200" className="emergency-button">
              Call Emergency Support: 0800 100 200
            </a>
            <Link to="/emergency-support" className="emergency-link">
              Access Emergency Services
            </Link>
          </div>
        </div>

        <section className="support-section">
          <h2>Having Trouble?</h2>
          <div className="support-options">
            <div className="support-option">
              <h3>Call Support</h3>
              <a href="tel:+256800100200">0800 100 200</a>
              <p>Available 24/7</p>
            </div>
            <div className="support-option">
              <h3>Visit Center</h3>
              <Link to="/locations">Find Nearest Center</Link>
              <p>In-person assistance</p>
            </div>
            <div className="support-option">
              <h3>Email Support</h3>
              <a href="mailto:support@upei.org">support@upei.org</a>
              <p>Response within 24 hours</p>
            </div>
          </div>
        </section>
      </section>

      <section className="login-benefits">
        <h2>Why Login?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Track Progress</h3>
            <p>Monitor your journey out of poverty</p>
          </div>
          <div className="benefit-card">
            <h3>Access Support</h3>
            <p>Get personalized assistance</p>
          </div>
          <div className="benefit-card">
            <h3>Join Programs</h3>
            <p>Participate in empowerment initiatives</p>
          </div>
          <div className="benefit-card">
            <h3>Connect</h3>
            <p>Network with mentors and peers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login; 