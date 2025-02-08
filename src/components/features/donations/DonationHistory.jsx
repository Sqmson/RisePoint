import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DonationHistory() {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, one-time, monthly
  const [dateRange, setDateRange] = useState('all'); // all, this-month, this-year

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      // API call would go here
      const mockDonations = [
        {
          id: 1,
          date: '2024-02-15',
          amount: 100,
          type: 'one-time',
          designation: 'Education Programs',
          status: 'completed',
          paymentMethod: 'card'
        },
        {
          id: 2,
          date: '2024-02-01',
          amount: 25,
          type: 'monthly',
          designation: 'General Fund',
          status: 'completed',
          paymentMethod: 'mobile-money'
        },
        // Add more mock donations...
      ];
      setDonations(mockDonations);
    } catch (error) {
      console.error('Failed to fetch donations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterDonations = () => {
    let filtered = [...donations];
    
    if (filter !== 'all') {
      filtered = filtered.filter(donation => donation.type === filter);
    }

    if (dateRange !== 'all') {
      const now = new Date();
      const startDate = new Date();
      
      if (dateRange === 'this-month') {
        startDate.setMonth(now.getMonth(), 1);
      } else if (dateRange === 'this-year') {
        startDate.setMonth(0, 1);
      }

      filtered = filtered.filter(donation => 
        new Date(donation.date) >= startDate && new Date(donation.date) <= now
      );
    }

    return filtered;
  };

  const getTotalDonations = () => {
    return filterDonations()
      .reduce((total, donation) => total + donation.amount, 0)
      .toLocaleString();
  };

  if (isLoading) {
    return <div className="loading">Loading donation history...</div>;
  }

  return (
    <div className="donation-history-page">
      <div className="donation-history-header">
        <h1>Donation History</h1>
        <Link to="/donate" className="btn btn-primary">
          Make New Donation
        </Link>
      </div>

      <div className="donation-summary">
        <div className="summary-card">
          <h3>Total Contributions</h3>
          <p className="amount">${getTotalDonations()}</p>
        </div>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Donation Type:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Donations</option>
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Time Period:</label>
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="all">All Time</option>
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>
      </div>

      <div className="donations-list">
        {filterDonations().length === 0 ? (
          <div className="no-donations">
            <p>No donations found for the selected filters.</p>
          </div>
        ) : (
          <table className="donations-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Designation</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterDonations().map(donation => (
                <tr key={donation.id}>
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                  <td>${donation.amount}</td>
                  <td>{donation.type}</td>
                  <td>{donation.designation}</td>
                  <td>
                    <span className={`status ${donation.status}`}>
                      {donation.status}
                    </span>
                  </td>
                  <td>{donation.paymentMethod}</td>
                  <td>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => window.print()}
                    >
                      Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="tax-info">
        <h3>Tax Information</h3>
        <p>
          Your donations may be tax-deductible. Annual receipts are sent out in January 
          for the previous year's donations. Contact us if you need additional documentation.
        </p>
      </div>

      <div className="recurring-donations">
        <h3>Recurring Donations</h3>
        {donations.some(d => d.type === 'monthly') ? (
          <div className="recurring-list">
            {donations
              .filter(d => d.type === 'monthly')
              .map(donation => (
                <div key={donation.id} className="recurring-item">
                  <p>${donation.amount} monthly to {donation.designation}</p>
                  <button className="btn btn-secondary btn-sm">Manage</button>
                </div>
              ))}
          </div>
        ) : (
          <p>You have no recurring donations.</p>
        )}
      </div>
    </div>
  );
}

export default DonationHistory; 