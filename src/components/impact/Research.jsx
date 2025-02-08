import { useState } from 'react';
import { Link } from 'react-router-dom';

function Research() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Research' },
    { id: 'economic', label: 'Economic Studies' },
    { id: 'agriculture', label: 'Agricultural Research' },
    { id: 'education', label: 'Skills Development' },
    { id: 'policy', label: 'Policy Analysis' }
  ];

  const researchPapers = [
    {
      id: 1,
      category: 'economic',
      title: 'Microfinance Impact on Rural Poverty Reduction',
      authors: ['Dr. Sarah Namukasa', 'Prof. John Okello'],
      date: '2024',
      abstract: 'A comprehensive study of microfinance interventions in rural Uganda, showing 45% average income increase among participants.',
      keyFindings: [
        'Significant improvement in household income',
        'Enhanced business sustainability rates',
        'Increased children education enrollment',
        'Better healthcare access'
      ],
      methodology: 'Mixed methods research with 1,000 participants over 2 years',
      impact: {
        beneficiaries: '1,000 households',
        locations: '5 districts',
        duration: '24 months'
      },
      downloadUrl: '/research/microfinance-impact-2024.pdf'
    },
    {
      id: 2,
      category: 'agriculture',
      title: 'Modern Farming Techniques and Food Security',
      authors: ['Dr. Grace Atim', 'Dr. Robert Mukasa'],
      date: '2024',
      abstract: 'Analysis of modern farming techniques impact on small-scale farmers productivity and income.',
      keyFindings: [
        'Yield increase of 200-300%',
        'Significant reduction in crop losses',
        'Improved market access',
        'Enhanced food security'
      ],
      methodology: 'Field experiments and surveys across 15 farming communities',
      impact: {
        beneficiaries: '500 farmers',
        locations: '3 regions',
        duration: '18 months'
      },
      downloadUrl: '/research/agriculture-impact-2024.pdf'
    },
    {
      id: 3,
      category: 'education',
      title: 'Skills Training and Youth Employment',
      authors: ['Prof. Mary Achieng', 'Dr. David Ochen'],
      date: '2024',
      abstract: 'Evaluation of vocational training programs impact on youth employment and income generation.',
      keyFindings: [
        '85% employment rate post-training',
        'Average income increase of 150%',
        'High business startup rate',
        'Sustainable career paths'
      ],
      methodology: 'Longitudinal study of 750 youth participants',
      impact: {
        beneficiaries: '750 youth',
        locations: '4 urban centers',
        duration: '12 months'
      },
      downloadUrl: '/research/skills-impact-2024.pdf'
    }
  ];

  const filteredPapers = activeCategory === 'all'
    ? researchPapers
    : researchPapers.filter(paper => paper.category === activeCategory);

  return (
    <div className="research">
      <section className="hero">
        <h1>Research & Analysis</h1>
        <p>Evidence-based insights for effective poverty eradication</p>
      </section>

      <section className="research-filters">
        <div className="category-buttons">
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

      <section className="research-papers">
        {filteredPapers.map(paper => (
          <div key={paper.id} className="research-card">
            <div className="paper-header">
              <h2>{paper.title}</h2>
              <span className="category-tag">{paper.category}</span>
            </div>

            <div className="authors">
              By: {paper.authors.join(', ')} | {paper.date}
            </div>

            <div className="abstract">
              <h3>Abstract</h3>
              <p>{paper.abstract}</p>
            </div>

            <div className="findings">
              <h3>Key Findings</h3>
              <ul>
                {paper.keyFindings.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </div>

            <div className="methodology">
              <h3>Methodology</h3>
              <p>{paper.methodology}</p>
            </div>

            <div className="impact-metrics">
              <h3>Research Scope</h3>
              <div className="metrics-grid">
                {Object.entries(paper.impact).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span className="label">{key}</span>
                    <span className="value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="paper-actions">
              <a 
                href={paper.downloadUrl} 
                className="btn btn-primary"
                download
              >
                Download Full Paper
              </a>
              <Link 
                to={`/research/${paper.id}`}
                className="btn btn-secondary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="research-collaboration">
        <h2>Research Collaboration</h2>
        <div className="collaboration-content">
          <div className="collaboration-card">
            <h3>Academic Partners</h3>
            <p>Partner with us in poverty eradication research</p>
            <Link to="/research/collaborate" className="btn btn-outline">
              Learn More
            </Link>
          </div>
          <div className="collaboration-card">
            <h3>Field Research</h3>
            <p>Participate in our ongoing studies</p>
            <Link to="/research/participate" className="btn btn-outline">
              Get Involved
            </Link>
          </div>
          <div className="collaboration-card">
            <h3>Research Funding</h3>
            <p>Support our research initiatives</p>
            <Link to="/research/funding" className="btn btn-outline">
              Support Research
            </Link>
          </div>
        </div>
      </section>

      <section className="research-application">
        <h2>Apply Research Insights</h2>
        <p>Turn research findings into action</p>
        <div className="application-links">
          <Link to="/programs/economic" className="btn btn-primary">
            Economic Programs
          </Link>
          <Link to="/programs/agriculture" className="btn btn-primary">
            Agricultural Programs
          </Link>
          <Link to="/programs/education" className="btn btn-primary">
            Skills Programs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Research; 