import { Link } from 'react-router-dom';

function NotFound() {
  const emergencyResources = [
    {
      title: 'Emergency Support',
      description: 'Need immediate assistance?',
      link: '/emergency-support',
      icon: '🆘'
    },
    {
      title: 'Financial Aid',
      description: 'Access emergency funding',
      link: '/programs/economic/microfinance',
      icon: '💰'
    },
    {
      title: 'Skills Training',
      description: 'Quick-start vocational programs',
      link: '/programs/education/vocational',
      icon: '🛠️'
    },
    {
      title: 'Job Opportunities',
      description: 'Immediate work placements',
      link: '/programs/economic/jobs',
      icon: '💼'
    }
  ];

  const popularPrograms = [
    '/programs/economic',
    '/programs/agriculture',
    '/programs/education',
    '/emergency-support',
    '/donate',
    '/volunteer'
  ];

  return (
    <div className="not-found">
      <section className="error-message">
        <h1>Page Not Found</h1>
        <p>We're sorry, but the page you're looking for isn't available.</p>
        <p className="support-message">
          However, we're here to help you find the resources you need.
        </p>
      </section>

      <section className="emergency-resources">
        <h2>Need Immediate Help?</h2>
        <div className="resources-grid">
          {emergencyResources.map((resource, index) => (
            <Link 
              key={index} 
              to={resource.link}
              className="resource-card"
            >
              <span className="resource-icon">{resource.icon}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="quick-access">
        <h2>Popular Programs</h2>
        <div className="programs-grid">
          <Link to="/programs/economic" className="program-link">
            Economic Empowerment
          </Link>
          <Link to="/programs/agriculture" className="program-link">
            Agricultural Support
          </Link>
          <Link to="/programs/education" className="program-link">
            Skills Training
          </Link>
          <Link to="/emergency-support" className="program-link">
            Emergency Aid
          </Link>
        </div>
      </section>

      <section className="contact-support">
        <h2>Need Assistance?</h2>
        <div className="support-options">
          <div className="support-card">
            <h3>Call Our Helpline</h3>
            <a href="tel:+256800100200" className="support-link">
              0800 100 200
            </a>
            <p>Available 24/7</p>
          </div>
          <div className="support-card">
            <h3>Visit a Center</h3>
            <Link to="/contact/locations" className="support-link">
              Find Nearest Location
            </Link>
            <p>In-person support</p>
          </div>
          <div className="support-card">
            <h3>Online Support</h3>
            <Link to="/contact" className="support-link">
              Contact Us
            </Link>
            <p>Quick response guaranteed</p>
          </div>
        </div>
      </section>

      <section className="navigation-help">
        <h2>Continue Your Journey</h2>
        <div className="action-buttons">
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link to="/programs" className="btn btn-secondary">
            View All Programs
          </Link>
        </div>
      </section>

      <div className="emergency-float">
        <a href="tel:+256800100200" className="emergency-button">
          Need Urgent Help? Call Now
        </a>
      </div>
    </div>
  );
}

export default NotFound; 