import { Link } from 'react-router-dom';

function About() {
  const missionValues = [
    {
      title: 'Our Mission',
      description: 'To eradicate poverty in Uganda through sustainable development initiatives, focusing on economic empowerment, education, and community development.',
      icon: '🎯'
    },
    {
      title: 'Our Vision',
      description: 'A Uganda free from poverty, where every individual has access to economic opportunities, quality education, and sustainable livelihoods.',
      icon: '👁️'
    },
    {
      title: 'Our Values',
      points: [
        'Economic Justice',
        'Sustainable Development',
        'Community Empowerment',
        'Innovation & Impact',
        'Transparency & Accountability'
      ],
      icon: '⭐'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Namukasa',
      role: 'Executive Director',
      bio: 'With over 15 years of experience in community development...',
      image: '/assets/images/team/sarah.jpg'
    },
    {
      name: 'John Okello',
      role: 'Programs Director',
      bio: 'Leading our program initiatives with expertise in...',
      image: '/assets/images/team/john.jpg'
    },
    {
      name: 'Mary Achieng',
      role: 'Community Outreach Manager',
      bio: 'Specializing in community engagement and...',
      image: '/assets/images/team/mary.jpg'
    }
  ];

  const milestones = [
    {
      year: '2015',
      title: 'Organization Founded',
      description: 'Started with a small team of dedicated volunteers'
    },
    {
      year: '2017',
      title: 'First Major Program Launch',
      description: 'Initiated the Youth Empowerment Program'
    },
    {
      year: '2019',
      title: 'Regional Expansion',
      description: 'Extended services to three new districts'
    },
    {
      year: '2021',
      title: 'National Recognition',
      description: 'Received award for community service excellence'
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Launched online learning platform'
    }
  ];

  const partners = [
    {
      name: 'Ministry of Health',
      logo: '/assets/images/partners/moh.png',
      type: 'Government'
    },
    {
      name: 'UNICEF Uganda',
      logo: '/assets/images/partners/unicef.png',
      type: 'International'
    },
    {
      name: 'Local Community Council',
      logo: '/assets/images/partners/lcc.png',
      type: 'Local'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Our Organization</h1>
          <p>Building stronger communities through sustainable development and empowerment</p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="mission-values">
        <div className="section-grid">
          {missionValues.map((item, index) => (
            <div key={index} className="value-card">
              <div className="icon">{item.icon}</div>
              <h2>{item.title}</h2>
              {item.description ? (
                <p>{item.description}</p>
              ) : (
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="journey">
        <h2>Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="year">{milestone.year}</div>
              <div className="content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={partner.name} />
              <h3>{partner.name}</h3>
              <span className="partner-type">{partner.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Report */}
      <section className="impact-report">
        <h2>Our Impact</h2>
        <div className="report-content">
          <p>Download our latest impact report to learn more about our work and achievements.</p>
          <a href="/reports/impact-2023.pdf" className="btn btn-primary" download>
            Download 2023 Impact Report
          </a>
        </div>
      </section>

      {/* Get Involved */}
      <section className="get-involved">
        <div className="content">
          <h2>Join Our Mission</h2>
          <p>There are many ways to support our work and make a difference.</p>
          <div className="action-buttons">
            <Link to="/volunteer" className="btn btn-primary">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              Make a Donation
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 