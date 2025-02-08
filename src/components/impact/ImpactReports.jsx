import { useState } from 'react';
import { Link } from 'react-router-dom';

function ImpactReports() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1');

  const reports = {
    '2024': {
      Q1: {
        economicEmpowerment: {
          title: 'Economic Impact',
          metrics: {
            businessesStarted: 150,
            jobsCreated: 450,
            averageIncome: '600,000 UGX',
            loanRepayment: '95%'
          },
          highlights: [
            'Launched 3 new business incubation centers',
            'Established market linkages with 5 major buyers',
            'Introduced digital payment systems for vendors'
          ]
        },
        agriculture: {
          title: 'Agricultural Development',
          metrics: {
            farmersSupported: 500,
            yieldIncrease: '250%',
            marketAccess: '80%',
            foodSecurity: '75%'
          },
          highlights: [
            'Implemented climate-smart farming techniques',
            'Established 3 farmer cooperatives',
            'Launched agricultural processing center'
          ]
        },
        education: {
          title: 'Skills Development',
          metrics: {
            peopleTrained: 750,
            employmentRate: '85%',
            skillsCertification: 600,
            businessStartups: 120
          },
          highlights: [
            'Launched digital skills program',
            'Established vocational training center',
            'Partnered with 15 employers'
          ]
        }
      }
    }
  };

  const sdgAlignment = [
    {
      goal: 'SDG 1: No Poverty',
      progress: '15% reduction in target communities',
      initiatives: [
        'Economic empowerment programs',
        'Social safety nets',
        'Financial inclusion'
      ]
    },
    {
      goal: 'SDG 2: Zero Hunger',
      progress: '20% improvement in food security',
      initiatives: [
        'Agricultural development',
        'Food processing support',
        'Market access programs'
      ]
    },
    {
      goal: 'SDG 8: Decent Work',
      progress: '1,200 jobs created',
      initiatives: [
        'Skills training',
        'Business development',
        'Market linkages'
      ]
    }
  ];

  return (
    <div className="impact-reports">
      <section className="hero">
        <h1>Impact Reports</h1>
        <p>Measuring our progress in poverty eradication</p>
      </section>

      <section className="report-filters">
        <div className="filter-controls">
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
            className="year-select"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

          <select 
            value={selectedQuarter} 
            onChange={(e) => setSelectedQuarter(e.target.value)}
            className="quarter-select"
          >
            <option value="Q1">Quarter 1</option>
            <option value="Q2">Quarter 2</option>
            <option value="Q3">Quarter 3</option>
            <option value="Q4">Quarter 4</option>
          </select>
        </div>
      </section>

      <section className="impact-metrics">
        {Object.entries(reports[selectedYear][selectedQuarter]).map(([area, data]) => (
          <div key={area} className="impact-card">
            <h2>{data.title}</h2>
            
            <div className="metrics-grid">
              {Object.entries(data.metrics).map(([key, value]) => (
                <div key={key} className="metric">
                  <span className="value">{value}</span>
                  <span className="label">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              ))}
            </div>

            <div className="highlights">
              <h3>Key Highlights</h3>
              <ul>
                {data.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="sdg-alignment">
        <h2>SDG Alignment</h2>
        <div className="sdg-grid">
          {sdgAlignment.map((sdg, index) => (
            <div key={index} className="sdg-card">
              <h3>{sdg.goal}</h3>
              <p className="progress">{sdg.progress}</p>
              <ul>
                {sdg.initiatives.map((initiative, i) => (
                  <li key={i}>{initiative}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="methodology">
        <h2>Impact Measurement Methodology</h2>
        <div className="methodology-content">
          <div className="method-card">
            <h3>Data Collection</h3>
            <p>Regular surveys, interviews, and monitoring visits</p>
          </div>
          <div className="method-card">
            <h3>Analysis</h3>
            <p>Rigorous data analysis and impact assessment</p>
          </div>
          <div className="method-card">
            <h3>Verification</h3>
            <p>Third-party verification of results</p>
          </div>
          <div className="method-card">
            <h3>Reporting</h3>
            <p>Transparent reporting of outcomes</p>
          </div>
        </div>
      </section>

      <section className="download-reports">
        <h2>Detailed Reports</h2>
        <div className="report-downloads">
          <a href="/reports/quarterly-2024-Q1.pdf" className="report-link" download>
            Q1 2024 Detailed Report (PDF)
          </a>
          <a href="/reports/impact-2024.pdf" className="report-link" download>
            2024 Impact Assessment (PDF)
          </a>
          <a href="/reports/sdg-alignment-2024.pdf" className="report-link" download>
            SDG Progress Report (PDF)
          </a>
        </div>
      </section>

      <section className="get-involved">
        <h2>Support Our Mission</h2>
        <p>Help us create more impact in poverty eradication</p>
        <div className="action-buttons">
          <Link to="/donate" className="btn btn-primary">
            Support Our Work
          </Link>
          <Link to="/volunteer" className="btn btn-secondary">
            Join Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ImpactReports; 