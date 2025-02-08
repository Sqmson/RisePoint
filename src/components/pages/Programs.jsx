import { useState } from 'react';
import { Link } from 'react-router-dom';

function Programs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Economic Empowerment',
      category: 'economic',
      description: 'Breaking the cycle of poverty through entrepreneurship and skills development',
      image: '/assets/images/programs/economic.jpg',
      impact: {
        beneficiaries: '1000+ entrepreneurs',
        locations: '15 districts',
        achievement: '70% income increase'
      },
      activities: [
        'Business incubation',
        'Microfinance access',
        'Skills training',
        'Market linkages'
      ]
    },
    {
      id: 2,
      title: 'Sustainable Agriculture',
      category: 'agriculture',
      description: 'Empowering farmers to achieve food security and economic stability',
      impact: {
        beneficiaries: '500 farmers',
        locations: '8 districts',
        achievement: '85% yield increase'
      }
    },
    {
      id: 3,
      title: 'Education for Employment',
      category: 'education',
      description: 'Equipping youth with skills for sustainable livelihoods',
      impact: {
        beneficiaries: '2000+ students',
        locations: '12 centers',
        achievement: '75% employment rate'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'economic', label: 'Economic Empowerment' },
    { id: 'elderly', label: 'Elder Care' }
  ];

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter(program => program.category === activeCategory);

  return (
    <div className="programs-page">
      <section className="programs-hero">
        <div className="hero-content">
          <h1>Our Programs</h1>
          <p>Making a lasting impact through sustainable community development</p>
        </div>
      </section>

      <section className="program-categories">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="programs-grid">
        {filteredPrograms.map(program => (
          <div key={program.id} className="program-card">
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            
            <div className="program-content">
              <h2>{program.title}</h2>
              <p className="description">{program.description}</p>

              <div className="impact-metrics">
                <h3>Impact</h3>
                <div className="metrics-grid">
                  <div className="metric">
                    <span className="value">{program.impact.beneficiaries}</span>
                    <span className="label">Beneficiaries</span>
                  </div>
                  <div className="metric">
                    <span className="value">{program.impact.locations}</span>
                    <span className="label">Locations</span>
                  </div>
                  <div className="metric">
                    <span className="value">{program.impact.achievement}</span>
                    <span className="label">Achievement</span>
                  </div>
                </div>
              </div>

              <div className="activities">
                <h3>Key Activities</h3>
                <ul>
                  {program.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>

              <div className="success-story">
                <div className="story-content">
                  <img src={program.success.image} alt={program.success.title} />
                  <div className="story-text">
                    <h3>{program.success.title}</h3>
                    <blockquote>{program.success.quote}</blockquote>
                  </div>
                </div>
              </div>

              <div className="program-actions">
                <Link 
                  to={`/programs/${program.id}`} 
                  className="btn btn-primary"
                >
                  Learn More
                </Link>
                <Link 
                  to={`/volunteer/${program.category}`} 
                  className="btn btn-secondary"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="program-cta">
        <div className="cta-content">
          <h2>Want to Make a Difference?</h2>
          <p>Join our programs as a volunteer or support our initiatives</p>
          <div className="cta-buttons">
            <Link to="/volunteer" className="btn btn-primary">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              Support Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs; 