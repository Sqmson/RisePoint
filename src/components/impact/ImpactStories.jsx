import { useState } from 'react';
import { Link } from 'react-router-dom';

function ImpactStories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'economic', label: 'Economic Empowerment' },
    { id: 'agriculture', label: 'Agricultural Success' },
    { id: 'education', label: 'Skills & Education' },
    { id: 'youth', label: 'Youth Development' }
  ];

  const stories = [
    {
      id: 1,
      category: 'economic',
      title: "From Street Vendor to Shop Owner",
      name: "Sarah Namukasa",
      location: "Kampala",
      image: "/assets/images/stories/sarah.jpg",
      summary: "Single mother of three transforms her life through microfinance",
      impact: {
        income: "Monthly income increased from 200,000 to 1,500,000 UGX",
        jobs: "Created employment for 2 people",
        education: "All children now in school"
      },
      quote: "The microfinance program didn't just give me a loan, it gave me hope and a future for my children.",
      timeline: [
        { year: 2022, event: "Joined microfinance program" },
        { year: 2022, event: "Started small shop" },
        { year: 2023, event: "Expanded to larger premises" },
        { year: 2024, event: "Opened second location" }
      ]
    },
    {
      id: 2,
      category: 'agriculture',
      title: "Modern Farming Success",
      name: "John Okello",
      location: "Gulu",
      image: "/assets/images/stories/john.jpg",
      summary: "Transformed traditional farm into modern agricultural business",
      impact: {
        yield: "Crop yield increased by 300%",
        income: "Annual revenue of 25M UGX",
        community: "Trains other farmers in modern methods"
      },
      quote: "Agricultural training and market access changed everything. I'm now helping other farmers succeed too.",
      timeline: [
        { year: 2021, event: "Received agricultural training" },
        { year: 2022, event: "Implemented modern farming techniques" },
        { year: 2023, event: "Started cooperative with neighbors" },
        { year: 2024, event: "Achieving record harvests" }
      ]
    },
    {
      id: 3,
      category: 'education',
      title: "Digital Skills Transform Life",
      name: "Grace Atim",
      location: "Mbarara",
      image: "/assets/images/stories/grace.jpg",
      summary: "Youth gains financial independence through digital skills",
      impact: {
        skills: "Mastered digital marketing",
        income: "Earning $500 monthly online",
        influence: "Mentoring 10 other youth"
      },
      quote: "Digital skills training opened up a world of opportunities I never knew existed.",
      timeline: [
        { year: 2023, event: "Completed digital skills training" },
        { year: 2023, event: "Started freelancing" },
        { year: 2024, event: "Established digital agency" },
        { year: 2024, event: "Training other youth" }
      ]
    }
  ];

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

  return (
    <div className="impact-stories">
      <section className="hero">
        <h1>Success Stories</h1>
        <p>Real stories of transformation and poverty eradication</p>
      </section>

      <section className="story-filters">
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

      <section className="stories-grid">
        {filteredStories.map(story => (
          <div key={story.id} className="story-card">
            <div className="story-image">
              <img src={story.image} alt={story.name} />
              <span className="category-tag">{story.category}</span>
            </div>
            
            <div className="story-content">
              <h2>{story.title}</h2>
              <div className="story-meta">
                <span className="name">{story.name}</span>
                <span className="location">{story.location}</span>
              </div>
              
              <p className="summary">{story.summary}</p>
              
              <div className="impact-metrics">
                <h3>Impact Highlights</h3>
                {Object.entries(story.impact).map(([key, value]) => (
                  <div key={key} className="impact-item">
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>

              <blockquote>{story.quote}</blockquote>

              <div className="timeline">
                <h3>Journey Timeline</h3>
                <div className="timeline-items">
                  {story.timeline.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <span className="year">{item.year}</span>
                      <span className="event">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to={`/impact/stories/${story.id}`}
                className="btn btn-primary"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="share-story">
        <h2>Share Your Story</h2>
        <p>Have you benefited from our programs? Share your success story to inspire others.</p>
        <Link to="/impact/share-story" className="btn btn-secondary">
          Share Your Story
        </Link>
      </section>

      <section className="join-programs">
        <h2>Start Your Success Story</h2>
        <p>Join our programs and transform your life</p>
        <div className="program-links">
          <Link to="/programs/economic" className="btn btn-primary">
            Economic Empowerment
          </Link>
          <Link to="/programs/agriculture" className="btn btn-primary">
            Agricultural Development
          </Link>
          <Link to="/programs/education" className="btn btn-primary">
            Skills Training
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ImpactStories; 