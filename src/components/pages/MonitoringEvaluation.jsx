import { useState } from 'react';

function MonitoringEvaluation() {
  const [selectedYear, setSelectedYear] = useState('2023');

  const impactData = {
    '2023': {
      education: {
        studentsReached: 1000,
        graduationRate: 85,
        employmentRate: 70
      },
      jobs: {
        jobsCreated: 500,
        businessesLaunched: 150,
        averageIncome: 300
      },
      health: {
        beneficiariesServed: 2000,
        healthcareAccess: 80,
        satisfactionRate: 90
      }
    }
  };

  const impactMetrics = {
    economicMetrics: [
      'Household income increase',
      'Business sustainability rate',
      'Job creation',
      'Market access improvement'
    ],
    socialMetrics: [
      'Access to education',
      'Food security',
      'Healthcare access',
      'Housing conditions'
    ],
    sustainabilityMetrics: [
      'Program continuation rate',
      'Community ownership',
      'Resource mobilization',
      'Environmental impact'
    ]
  };

  return (
    <div className="monitoring-evaluation-page">
      <section className="me-hero">
        <h1>Impact & Evaluation</h1>
        <p>Measuring our impact and ensuring accountability in all our programs</p>
      </section>

      <section className="methodology">
        <h2>Our Approach</h2>
        <div className="methodology-grid">
          <div className="methodology-card">
            <h3>Data Collection</h3>
            <p>Regular surveys, interviews, and community feedback sessions</p>
          </div>
          <div className="methodology-card">
            <h3>Analysis</h3>
            <p>Rigorous data analysis and impact assessment</p>
          </div>
          <div className="methodology-card">
            <h3>Reporting</h3>
            <p>Transparent reporting and stakeholder communication</p>
          </div>
          <div className="methodology-card">
            <h3>Improvement</h3>
            <p>Continuous program optimization based on findings</p>
          </div>
        </div>
      </section>

      <section className="impact-metrics">
        <h2>Impact Metrics</h2>
        <div className="year-selector">
          <label>Select Year:</label>
          <select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className="metrics-grid">
          <div className="metric-card education">
            <h3>Education Impact</h3>
            <ul>
              <li>Students Reached: {impactData[selectedYear].education.studentsReached}</li>
              <li>Graduation Rate: {impactData[selectedYear].education.graduationRate}%</li>
              <li>Employment Rate: {impactData[selectedYear].education.employmentRate}%</li>
            </ul>
          </div>

          <div className="metric-card jobs">
            <h3>Job Creation Impact</h3>
            <ul>
              <li>Jobs Created: {impactData[selectedYear].jobs.jobsCreated}</li>
              <li>Businesses Launched: {impactData[selectedYear].jobs.businessesLaunched}</li>
              <li>Average Monthly Income: ${impactData[selectedYear].jobs.averageIncome}</li>
            </ul>
          </div>

          <div className="metric-card health">
            <h3>Community Health Impact</h3>
            <ul>
              <li>Beneficiaries Served: {impactData[selectedYear].health.beneficiariesServed}</li>
              <li>Healthcare Access: {impactData[selectedYear].health.healthcareAccess}%</li>
              <li>Satisfaction Rate: {impactData[selectedYear].health.satisfactionRate}%</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {[
            {
              title: "Education Transform",
              description: "How our education program changed lives in rural communities",
              impact: "85% graduation rate"
            },
            {
              title: "Business Growth",
              description: "Supporting local entrepreneurs to build sustainable businesses",
              impact: "150 new businesses"
            },
            {
              title: "Healthcare Access",
              description: "Improving healthcare access for elderly community members",
              impact: "2000+ beneficiaries"
            }
          ].map((story, index) => (
            <div key={index} className="story-card">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className="impact-highlight">{story.impact}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="reports-section">
        <h2>Annual Reports</h2>
        <div className="reports-grid">
          {[
            { year: "2023", title: "Annual Impact Report 2023" },
            { year: "2022", title: "Annual Impact Report 2022" },
            { year: "2021", title: "Annual Impact Report 2021" }
          ].map((report) => (
            <div key={report.year} className="report-card">
              <h3>{report.title}</h3>
              <button className="btn btn-secondary">Download PDF</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MonitoringEvaluation; 