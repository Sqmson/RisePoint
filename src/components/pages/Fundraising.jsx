import { useState } from 'react';
import { Link } from 'react-router-dom';

function Fundraising() {
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaigns = [
    {
      id: 1,
      title: 'Economic Empowerment Fund',
      description: 'Support micro-businesses and entrepreneurs to break the cycle of poverty',
      goal: 50000000,
      raised: 35000000,
      deadline: '2024-06-30',
      image: '/assets/images/campaigns/economic.jpg',
      impact: {
        target: '100 families',
        location: 'Rural Uganda',
        duration: '12 months'
      },
      activities: [
        'Business skills training',
        'Startup capital grants',
        'Market linkages',
        'Mentorship support'
      ]
    },
    {
      id: 2,
      title: 'Education for All',
      description: 'Provide education and vocational training to break generational poverty',
      goal: 75000000,
      raised: 45000000,
      deadline: '2024-08-15',
      image: '/assets/images/campaigns/education.jpg',
      impact: {
        target: '500 students',
        location: 'Multiple districts',
        duration: 'Academic year'
      },
      activities: [
        'School fees support',
        'Learning materials',
        'Skills training',
        'Career guidance'
      ]
    },
    {
      id: 3,
      title: 'Sustainable Agriculture Initiative',
      description: 'Empower farmers with resources and skills for food security',
      goal: 40000000,
      raised: 28000000,
      deadline: '2024-07-31',
      image: '/assets/images/campaigns/agriculture.jpg',
      impact: {
        target: '200 farmers',
        location: 'Northern Uganda',
        duration: '18 months'
      },
      activities: [
        'Modern farming techniques',
        'Equipment support',
        'Market access',
        'Climate resilience training'
      ]
    }
  ];

  const impactMetrics = {
    totalRaised: '500M UGX',
    familiesSupported: '2,000+',
    communitiesServed: '25',
    successfulProjects: '45'
  };

  const donationOptions = [
    {
      type: 'Monthly',
      amounts: [20000, 50000, 100000, 200000],
      benefits: [
        'Regular impact updates',
        'Quarterly newsletters',
        'Annual impact report',
        'Community events invitations'
      ]
    },
    {
      type: 'One-time',
      amounts: [100000, 250000, 500000, 1000000],
      benefits: [
        'Impact report',
        'Thank you certificate',
        'Project updates'
      ]
    }
  ];

  return (
    <div className="fundraising-page">
      <section className="fundraising-hero">
        <div className="hero-content">
          <h1>Join Us in Eradicating Poverty</h1>
          <p>Your support empowers communities to build sustainable futures</p>
          <Link to="/donate" className="btn btn-primary">
            Donate Now
          </Link>
        </div>
      </section>

      <section className="impact-metrics">
        <div className="metrics-grid">
          {Object.entries(impactMetrics).map(([key, value]) => (
            <div key={key} className="metric-card">
              <h3>{value}</h3>
              <p>{key.replace(/([A-Z])/g, ' $1').trim()}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="donation-options">
        <h2>Ways to Give</h2>
        <div className="options-grid">
          {donationOptions.map(option => (
            <div key={option.type} className="option-card">
              <h3>{option.type} Giving</h3>
              <div className="amounts">
                {option.amounts.map(amount => (
                  <button key={amount} className="amount-btn">
                    {amount.toLocaleString()} UGX
                  </button>
                ))}
              </div>
              <div className="benefits">
                <h4>Benefits</h4>
                <ul>
                  {option.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/donate/${option.type.toLowerCase()}`} className="btn btn-primary">
                Select {option.type} Donation
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="active-campaigns">
        <h2>Current Campaigns</h2>
        <div className="campaigns-grid">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-image">
                <img src={campaign.image} alt={campaign.title} />
              </div>
              <div className="campaign-content">
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                  ></div>
                </div>
                
                <div className="campaign-stats">
                  <div className="stat">
                    <span className="label">Raised</span>
                    <span className="value">{campaign.raised.toLocaleString()} UGX</span>
                  </div>
                  <div className="stat">
                    <span className="label">Goal</span>
                    <span className="value">{campaign.goal.toLocaleString()} UGX</span>
                  </div>
                  <div className="stat">
                    <span className="label">Deadline</span>
                    <span className="value">{new Date(campaign.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="impact-summary">
                  <h4>Expected Impact</h4>
                  <div className="impact-details">
                    <p><strong>Target:</strong> {campaign.impact.target}</p>
                    <p><strong>Location:</strong> {campaign.impact.location}</p>
                    <p><strong>Duration:</strong> {campaign.impact.duration}</p>
                  </div>
                </div>

                <div className="campaign-actions">
                  <Link 
                    to={`/campaigns/${campaign.id}`}
                    className="btn btn-secondary"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to={`/donate/campaign/${campaign.id}`}
                    className="btn btn-primary"
                  >
                    Support This Campaign
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="corporate-partnerships">
        <div className="partnership-content">
          <h2>Corporate Partnerships</h2>
          <p>Join our mission to create lasting change through strategic partnerships</p>
          <div className="partnership-benefits">
            <h3>Partnership Benefits</h3>
            <ul>
              <li>Strategic CSR alignment</li>
              <li>Impact reporting and visibility</li>
              <li>Employee engagement opportunities</li>
              <li>Community recognition</li>
            </ul>
          </div>
          <Link to="/partnerships" className="btn btn-secondary">
            Become a Partner
          </Link>
        </div>
      </section>

      <section className="transparency">
        <h2>Financial Transparency</h2>
        <div className="transparency-content">
          <p>We are committed to full transparency in our use of funds</p>
          <div className="document-links">
            <a href="/reports/annual-2023.pdf" className="btn btn-outline">
              Annual Report 2023
            </a>
            <a href="/reports/financial-2023.pdf" className="btn btn-outline">
              Financial Statement
            </a>
            <a href="/reports/impact-2023.pdf" className="btn btn-outline">
              Impact Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fundraising; 