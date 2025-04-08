import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function JobsOpportunities() {
  return (
    <div className="jobs-container">
      <nav className="jobs-nav">
        <Link to="/dashboard/jobs">Job Board</Link>
        <Link to="/dashboard/jobs/training">Training Programs</Link>
        <Link to="/dashboard/jobs/applications">Application Status</Link>
        <Link to="/dashboard/jobs/assessment">Skills Assessment</Link>
      </nav>

      <Routes>
        <Route index element={<JobBoard />} />
        <Route path="training" element={<TrainingPrograms />} />
        <Route path="applications" element={<ApplicationStatus />} />
        <Route path="assessment" element={<SkillsAssessment />} />
      </Routes>
    </div>
  );
}

function JobBoard() {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Community Development Officer',
      organization: 'Local NGO',
      location: 'City Center',
      type: 'Full-time',
      description: 'Looking for a passionate individual to lead community development initiatives...',
      requirements: [
        'Bachelor\'s degree in related field',
        '3+ years experience in community work',
        'Strong communication skills'
      ]
    },
    {
      id: 2,
      title: 'Agricultural Trainer',
      organization: 'Rural Development Initiative',
      location: 'Rural District',
      type: 'Contract',
      description: 'Experienced trainer needed to conduct workshops on modern farming techniques...',
      requirements: [
        'Agricultural background',
        'Teaching experience',
        'Knowledge of sustainable farming'
      ]
    }
  ]);

  return (
    <div className="jobs-section">
      <h2>Available Opportunities</h2>
      <div className="jobs-grid">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="organization">{job.organization}</p>
            <div className="job-details">
              <span className="location">{job.location}</span>
              <span className="type">{job.type}</span>
            </div>
            <p className="description">{job.description}</p>
            <div className="requirements">
              <h4>Requirements:</h4>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsOpportunities; 