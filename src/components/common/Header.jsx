import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const mainMenuItems = [
    {
      title: 'Programs',
      submenu: [
        { name: 'Economic Empowerment', path: '/programs/economic' },
        { name: 'Skills Training', path: '/programs/skills' },
        { name: 'Agricultural Development', path: '/programs/agriculture' },
        { name: 'Business Incubation', path: '/programs/business' }
      ]
    },
    {
      title: 'Get Involved',
      submenu: [
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Partner With Us', path: '/partner' },
        { name: 'Support Our Work', path: '/donate' },
        { name: 'Join Training', path: '/training' }
      ]
    },
    {
      title: 'Impact',
      submenu: [
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Impact Reports', path: '/impact/reports' },
        { name: 'Monitoring & Evaluation', path: '/impact/monitoring' },
        { name: 'Research', path: '/impact/research' }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        { name: 'Learning Center', path: '/resources/learning' },
        { name: 'Business Tools', path: '/resources/tools' },
        { name: 'Market Access', path: '/resources/market' },
        { name: 'Financial Services', path: '/resources/financial' }
      ]
    }
  ];

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="Poverty Eradication Initiative" />
          </Link>
          <div className="organization-name">
            <h1>Uganda Poverty Eradication Initiative</h1>
            <span className="tagline">Building pathways out of poverty</span>
          </div>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-items">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <span className="nav-link">{item.title}</span>
                <div className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex}
                      to={subItem.path}
                      className="submenu-link"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            <input 
              type="search" 
              placeholder="Search programs, resources..."
              className="search-input"
            />
          </div>

          <div className="action-buttons">
            <Link to="/donate" className="btn btn-primary">
              Support Our Work
            </Link>
            <Link to="/apply" className="btn btn-secondary">
              Join Program
            </Link>
          </div>

          <div className="mobile-menu-toggle">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle-btn"
            >
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Support Banner */}
      <div className="emergency-banner">
        <p>
          Need immediate assistance? Call our support line: 
          <a href="tel:+256800100200"> 0800 100 200</a>
          <span className="separator">|</span>
          <Link to="/emergency-support">Emergency Support Programs</Link>
        </p>
      </div>

      {/* Impact Ticker */}
      <div className="impact-ticker">
        <div className="ticker-content">
          <span className="ticker-item">
            <strong>2,500+</strong> families lifted out of poverty
          </span>
          <span className="ticker-item">
            <strong>5,000+</strong> entrepreneurs supported
          </span>
          <span className="ticker-item">
            <strong>10,000+</strong> skills training graduates
          </span>
          <span className="ticker-item">
            <strong>15</strong> districts reached
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header; 