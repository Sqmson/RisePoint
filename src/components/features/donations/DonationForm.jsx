import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: '',
    donationType: 'one-time', // one-time or monthly
    paymentMethod: 'card', // card, mobile-money, bank-transfer
    currency: 'USD',
    designation: 'general', // general, education, health, etc.
    isAnonymous: false,
    message: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const predefinedAmounts = [10, 25, 50, 100, 500];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmountSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      amount: amount
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      // API call to process donation would go here
      console.log('Processing donation:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      navigate('/donation-success', { state: { amount: formData.amount } });
    } catch (error) {
      setError('Failed to process donation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="donation-form-page">
      <div className="donation-form-container">
        <h1>Make a Donation</h1>
        <p>Your support helps us create lasting change in communities across Uganda</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-section">
            <h2>Select Amount</h2>
            <div className="amount-buttons">
              {predefinedAmounts.map(amount => (
                <button
                  key={amount}
                  type="button"
                  className={`amount-btn ${formData.amount === amount ? 'active' : ''}`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ${amount}
                </button>
              ))}
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Other amount"
                min="1"
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Donation Type</h2>
            <div className="donation-type-buttons">
              <label>
                <input
                  type="radio"
                  name="donationType"
                  value="one-time"
                  checked={formData.donationType === 'one-time'}
                  onChange={handleChange}
                />
                One-time
              </label>
              <label>
                <input
                  type="radio"
                  name="donationType"
                  value="monthly"
                  checked={formData.donationType === 'monthly'}
                  onChange={handleChange}
                />
                Monthly
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="mobile-money">Mobile Money</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="form-section">
            <h2>Designation</h2>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            >
              <option value="general">General Fund</option>
              <option value="education">Education Programs</option>
              <option value="health">Healthcare Initiatives</option>
              <option value="elderly">Elderly Support</option>
              <option value="youth">Youth Programs</option>
            </select>
          </div>

          <div className="form-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleChange}
              />
              Make this donation anonymous
            </label>
          </div>

          <div className="form-section">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Share why you're making this donation..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={isProcessing || !formData.amount}
          >
            {isProcessing ? 'Processing...' : `Donate $${formData.amount || '0'}`}
          </button>
        </form>

        <div className="secure-payment-notice">
          <span className="lock-icon">🔒</span>
          <p>All payments are secure and encrypted</p>
        </div>
      </div>
    </div>
  );
}

export default DonationForm; 