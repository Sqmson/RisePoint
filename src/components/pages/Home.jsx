import { Link } from 'react-router-dom';

function Home() {
  const impactStats = [
    { label: 'Communities Served', value: '50+' },
    { label: 'Active Volunteers', value: '1,200' },
    { label: 'Programs Running', value: '25' },
    { label: 'Lives Impacted', value: '10,000+' }
  ];

  const featuredPrograms = [
    {
      id: 1,
      title: 'Youth Empowerment',
      description: 'Empowering young people with skills and opportunities',
      image: '/assets/images/programs/youth.jpg',
      link: '/programs/youth'
    },
    {
      id: 2,
      title: 'Elder Care Support',
      description: 'Providing care and companionship to elderly community members',
      image: '/assets/images/programs/elderly.jpg',
      link: '/programs/elderly'
    },
    {
      id: 3,
      title: 'Community Health',
      description: 'Promoting health and wellness in local communities',
      image: '/assets/images/programs/health.jpg',
      link: '/programs/health'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Health Fair',
      date: '2024-03-15',
      location: 'Kampala Community Center',
      image: '/assets/images/events/health-fair.jpg'
    },
    {
      id: 2,
      title: 'Youth Leadership Workshop',
      date: '2024-03-20',
      location: 'Youth Center, Entebbe',
      image: '/assets/images/events/workshop.jpg'
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Sarah's Journey",
      quote: "The youth program gave me the skills and confidence to start my own business.",
      image: '/assets/images/stories/sarah.jpg',
      category: 'Youth Success'
    },
    {
      id: 2,
      title: "Community Health Impact",
      quote: "The health outreach program has transformed healthcare access in our village.",
      image: '/assets/images/stories/health.jpg',
      category: 'Community Impact'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Making a Difference in Uganda</h1>
          <p>Join us in building stronger, healthier communities through volunteer service</p>
          <div className="hero-actions">
            <Link to="/volunteer" className="btn btn-primary">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="btn btn-secondary">
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats">
        <div className="stats-grid">
          {impactStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="featured-programs">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          {featuredPrograms.map(program => (
            <div key={program.id} className="program-card">
              <img src={program.image} alt={program.title} />
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.link} className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                <p>📍 {event.location}</p>
                <Link to={`/events/${event.id}`} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/events" className="btn btn-secondary view-all">
          View All Events
        </Link>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {successStories.map(story => (
            <div key={story.id} className="story-card">
              <img src={story.image} alt={story.title} />
              <div className="story-content">
                <span className="category">{story.category}</span>
                <h3>{story.title}</h3>
                <blockquote>{story.quote}</blockquote>
              </div>
            </div>
          ))}
        </div>
        <Link to="/stories" className="btn btn-secondary view-all">
          Read More Stories
        </Link>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Join our community of volunteers and help create positive change</p>
          <div className="cta-actions">
            <Link to="/volunteer" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for updates on our programs and events</p>
        <form className="signup-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home; 