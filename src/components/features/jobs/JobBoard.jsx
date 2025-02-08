import { useState } from 'react';
import { Link } from 'react-router-dom';

function JobBoard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'vocational', label: 'Vocational Jobs' },
    { id: 'agriculture', label: 'Agricultural Work' },
    { id: 'business', label: 'Business Opportunities' },
    { id: 'digital', label: 'Digital Work' }
  ];

  const jobs = [
    {
      id: 1,
      category: 'vocational',
      title: 'Construction Workers',
      location: 'Kampala',
      type: 'Full-time',
      salary: '500,000 - 800,000 UGX/month',
      company: 'BuildRight Construction Ltd',
      requirements: [
        'Basic construction skills',
        'Physical fitness',
        'Ability to work in a team'
      ],
      benefits: [
        'Skills development',
        'Health insurance',
        'Transport allowance',
        'Career growth'
      ],
      training: 'On-job training provided',
      positions: 15,
      deadline: '2024-03-30'
    },
    {
      id: 2,
      category: 'agriculture',
      title: 'Farm Managers',
      location: 'Mbarara',
      type: 'Full-time',
      salary: '600,000 - 1,000,000 UGX/month',
      company: 'AgroSuccess Farms',
      requirements: [
        'Agricultural knowledge',
        'Leadership skills',
        'Basic record keeping'
      ],
      benefits: [
        'Housing provided',
        'Monthly produce share',
        'Healthcare',
        'Training opportunities'
      ],
      training: 'Advanced farming techniques training',
      positions: 5,
      deadline: '2024-03-25'
    },
    {
      id: 3,
      category: 'digital',
      title: 'Digital Marketing Trainees',
      location: 'Remote/Anywhere',
      type: 'Part-time',
      salary: '300,000 - 600,000 UGX/month',
      company: 'DigitalSkills Uganda',
      requirements: [
        'Basic computer literacy',
        'Internet access',
        'Good communication'
      ],
      benefits: [
        'Flexible hours',
        'Work from home',
        'Skills certification',
        'Job placement support'
      ],
      training: 'Full digital marketing training provided',
      positions: 25,
      deadline: '2024-04-15'
    }
  ];

  const filteredJobs = jobs
    .filter(job => activeCategory === 'all' || job.category === activeCategory)
    .filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="job-board">
      <section className="hero">
        <h1>Employment Opportunities</h1>
        <p>Find work opportunities to build a sustainable income</p>
      </section>

      <section className="search-filters">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search jobs, companies, or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

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

      <section className="jobs-grid">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h2>{job.title}</h2>
              <span className="category-tag">{job.category}</span>
            </div>

            <div className="job-meta">
              <span className="company">{job.company}</span>
              <span className="location">{job.location}</span>
              <span className="type">{job.type}</span>
            </div>

            <div className="salary">
              <h3>Salary Range</h3>
              <p>{job.salary}</p>
            </div>

            <div className="requirements">
              <h3>Requirements</h3>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="benefits">
              <h3>Benefits</h3>
              <ul>
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="training">
              <h3>Training</h3>
              <p>{job.training}</p>
            </div>

            <div className="job-footer">
              <div className="positions">
                <strong>Positions:</strong> {job.positions}
              </div>
              <div className="deadline">
                <strong>Apply by:</strong> {job.deadline}
              </div>
            </div>

            <div className="job-actions">
              <Link 
                to={`/jobs/apply/${job.id}`}
                className="btn btn-primary"
              >
                Apply Now
              </Link>
              <Link 
                to={`/jobs/${job.id}`}
                className="btn btn-secondary"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="support-services">
        <h2>Support Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>CV Writing</h3>
            <p>Free CV preparation support</p>
            <Link to="/services/cv" className="btn btn-outline">
              Get Help
            </Link>
          </div>
          <div className="service-card">
            <h3>Interview Skills</h3>
            <p>Interview preparation training</p>
            <Link to="/services/interview" className="btn btn-outline">
              Learn More
            </Link>
          </div>
          <div className="service-card">
            <h3>Skills Training</h3>
            <p>Free job-specific training</p>
            <Link to="/training" className="btn btn-outline">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="job-seeker-resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <Link to="/resources/career-guidance" className="resource-link">
            Career Guidance
          </Link>
          <Link to="/resources/skills-assessment" className="resource-link">
            Skills Assessment
          </Link>
          <Link to="/resources/job-alerts" className="resource-link">
            Job Alerts
          </Link>
        </div>
      </section>
    </div>
  );
}

export default JobBoard; 