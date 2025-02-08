import { Link } from 'react-router-dom';

function Footer() {
  const footerSections = [
    {
      title: 'Our Programs',
      links: [
        { name: 'Economic Empowerment', path: '/programs/economic' },
        { name: 'Agricultural Development', path: '/programs/agriculture' },
        { name: 'Skills Training', path: '/programs/education' },
        { name: 'Emergency Support', path: '/emergency-support' }
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Support Our Work', path: '/donate' },
        { name: 'Partner With Us', path: '/partner' },
        { name: 'Join Training', path: '/training' },
        { name: 'Volunteer', path: '/volunteer' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Impact Reports', path: '/impact/reports' },
        { name: 'Research', path: '/impact/research' },
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Learning Center', path: '/resources/learning' }
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'Kampala Office: +256 800 100 200', path: 'tel:+256800100200' },
        { name: 'Email: support@upei.org', path: 'mailto:support@upei.org' },
        { name: 'Regional Centers', path: '/contact/locations' },
        { name: 'Report Issues', path: '/contact/report' }
      ]
    }
  ];

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-primary">
          <div className="organization-info">
            <Link to="/" className="footer-logo">
              <img src="/assets/images/logo.png" alt="UPEI Logo" />
            </Link>
            <h3>Uganda Poverty Eradication Initiative</h3>
            <p className="mission-statement">
              Working to eradicate poverty through sustainable economic empowerment, 
              skills development, and community support.
            </p>
          </div>

          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-support">
          <h3>Need Immediate Support?</h3>
          <div className="support-options">
            <a href="tel:+256800100200" className="support-button">
              Call Emergency Helpline
            </a>
            <Link to="/emergency-support" className="support-button secondary">
              Access Emergency Programs
            </Link>
          </div>
        </div>

        <div className="impact-summary">
          <h3>Our Impact</h3>
          <div className="impact-metrics">
            <div className="metric">
              <span className="number">2,500+</span>
              <span className="label">Families Supported</span>
            </div>
            <div className="metric">
              <span className="number">15</span>
              <span className="label">Districts Reached</span>
            </div>
            <div className="metric">
              <span className="number">5,000+</span>
              <span className="label">People Trained</span>
            </div>
          </div>
        </div>

        <div className="footer-secondary">
          <div className="social-links">
            <a href="https://facebook.com/upei" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com/upei" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com/company/upei" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com/upei" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

          <div className="footer-bottom">
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/transparency">Transparency</Link>
              <Link to="/accountability">Accountability</Link>
            </div>
            
            <div className="copyright">
              <p>© {new Date().getFullYear()} Uganda Poverty Eradication Initiative. All rights reserved.</p>
              <p>Registered NGO: REG/2024/001</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 