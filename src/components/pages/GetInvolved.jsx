import { useState } from 'react';
import { Link } from 'react-router-dom';

function GetInvolved() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const opportunities = [
    {
      id: 1,
      title: "Education Mentor",
      category: "education",
      commitment: "4 hours/week",
      location: "Kampala",
      description: "Support students in their educational journey",
      skills: ["Teaching", "Mentoring", "Patience"]
    },
    {
      id: 2,
      title: "Business Skills Trainer",
      category: "jobs",
      commitment: "6 hours/week",
      location: "Various Districts",
      description: "Train aspiring entrepreneurs in business skills",
      skills: ["Business Experience", "Training", "Leadership"]
    },
    {
      id: 3,
      title: "Community Health Worker",
      category: "health",
      commitment: "10 hours/week",
      location: "Rural Communities",
      description: "Support healthcare initiatives for elderly",
      skills: ["Healthcare Experience", "Compassion", "Communication"]
    }
  ];

  const filteredOpportunities = selectedCategory === 'all'
    ? opportunities
    : opportunities.filter(opp => opp.category === selectedCategory);

  return (
    <div className="get-involved-page">
      <section className="involvement-hero">
        <h1>Get Involved</h1>
        <p>Join us in making a difference in Ugandan communities</p>
      </section>

      <section className="ways-to-help">
        <h2>Ways to Help</h2>
        <div className="help-options-grid">
          <div className="help-card">
            <h3>Volunteer</h3>
            <p>Share your skills and time with our communities</p>
            <Link to="/volunteer-registration" className="btn btn-primary">
              Become a Volunteer
            </Link>
          </div>
          <div className="help-card">
            <h3>Donate</h3>
            <p>Support our programs through financial contributions</p>
            <Link to="/donate" className="btn btn-primary">
              Make a Donation
            </Link>
          </div>
          <div className="help-card">
            <h3>Partner</h3>
            <p>Create lasting impact through partnerships</p>
            <Link to="/partnerships" className="btn btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="volunteer-opportunities">
        <h2>Current Opportunities</h2>
        <div className="category-filter">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'education' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('education')}
          >
            Education
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'jobs' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('jobs')}
          >
            Jobs
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'health' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('health')}
          >
            Health
          </button>
        </div>

        <div className="opportunities-grid">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              <h3>{opportunity.title}</h3>
              <p className="location">{opportunity.location}</p>
              <p className="commitment">{opportunity.commitment}</p>
              <p>{opportunity.description}</p>
              <div className="skills">
                <h4>Required Skills:</h4>
                <ul>
                  {opportunity.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/opportunities/${opportunity.id}`} className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-stories">
        <h2>Volunteer Impact Stories</h2>
        <div className="stories-grid">
          {[
            {
              name: "John",
              role: "Education Mentor",
              story: "Teaching digital skills to youth has been incredibly rewarding"
            },
            {
              name: "Alice",
              role: "Business Trainer",
              story: "Helping entrepreneurs start their businesses is transformative"
            },
            {
              name: "David",
              role: "Community Health Worker",
              story: "Supporting elderly health needs creates lasting impact"
            }
          ].map((story, index) => (
            <div key={index} className="story-card">
              <h3>{story.name}'s Story</h3>
              <p className="role">{story.role}</p>
              <p className="story">{story.story}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {[
            {
              question: "What is the minimum time commitment?",
              answer: "Most opportunities require at least 4 hours per week for 3 months."
            },
            {
              question: "Do I need specific qualifications?",
              answer: "Requirements vary by role. Some positions need specific skills or experience."
            },
            {
              question: "Can I volunteer remotely?",
              answer: "Yes, we have both remote and in-person opportunities available."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GetInvolved; 