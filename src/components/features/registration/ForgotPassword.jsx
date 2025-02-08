import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // API call to send password reset email would go here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setStatus({
        type: 'success',
        message: 'Password reset instructions have been sent to your email.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send reset instructions. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1>Reset Your Password</h1>
        <p>Enter your email address and we'll send you instructions to reset your password.</p>

        {status.message && (
          <div className={`alert ${status.type}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your registered email"
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
          </button>
        </form>

        <div className="form-footer">
          <Link to="/login" className="back-to-login">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword; 