import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filters, setFilters] = useState({
    category: 'all',
    location: 'all',
    timeframe: 'upcoming'
  });
  const [viewMode, setViewMode] = useState('month'); // month, week, list

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // API call would go here
      const mockEvents = [
        {
          id: 1,
          title: 'Community Health Fair',
          category: 'Health',
          description: 'Annual health awareness and free checkup event',
          date: '2024-03-15',
          time: '09:00-16:00',
          location: 'Kampala Community Center',
          organizer: 'Health Outreach Team',
          capacity: 200,
          registered: 150,
          image: '/assets/images/events/health-fair.jpg',
          requirements: [
            'Pre-registration required',
            'Bring ID',
            'Face mask recommended'
          ],
          activities: [
            'Health screenings',
            'Nutrition workshops',
            'Fitness demonstrations'
          ],
          status: 'upcoming',
          isFeatured: true
        },
        {
          id: 2,
          title: 'Youth Leadership Workshop',
          category: 'Education',
          description: 'Empowering young leaders with essential skills',
          date: '2024-03-20',
          time: '14:00-17:00',
          location: 'Youth Center, Entebbe',
          organizer: 'Youth Development Initiative',
          capacity: 50,
          registered: 35,
          image: '/assets/images/events/youth-workshop.jpg',
          requirements: [
            'Age 16-24',
            'Application form submission',
            'Letter of recommendation'
          ],
          activities: [
            'Leadership training',
            'Team building exercises',
            'Project planning'
          ],
          status: 'upcoming',
          isFeatured: false
        }
      ];
      setEvents(mockEvents);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterEvents = () => {
    return events.filter(event => {
      const matchesCategory = filters.category === 'all' || event.category === filters.category;
      const matchesLocation = filters.location === 'all' || event.location.includes(filters.location);
      const eventDate = new Date(event.date);
      const today = new Date();
      
      let matchesTimeframe = true;
      if (filters.timeframe === 'upcoming') {
        matchesTimeframe = eventDate >= today;
      } else if (filters.timeframe === 'past') {
        matchesTimeframe = eventDate < today;
      }

      return matchesCategory && matchesLocation && matchesTimeframe;
    });
  };

  const renderCalendarGrid = () => {
    // Calendar grid implementation would go here
    return (
      <div className="calendar-grid">
        {/* Calendar implementation */}
      </div>
    );
  };

  const renderEventsList = () => (
    <div className="events-list">
      {filterEvents().map(event => (
        <div key={event.id} className="event-card">
          <div className="event-image">
            <img src={event.image} alt={event.title} />
            {event.isFeatured && <span className="featured-badge">Featured</span>}
          </div>

          <div className="event-content">
            <div className="event-header">
              <h3>{event.title}</h3>
              <span className={`status ${event.status}`}>{event.status}</span>
            </div>

            <div className="event-details">
              <p className="date">📅 {new Date(event.date).toLocaleDateString()}</p>
              <p className="time">⏰ {event.time}</p>
              <p className="location">📍 {event.location}</p>
              <p className="organizer">👥 {event.organizer}</p>
            </div>

            <p className="description">{event.description}</p>

            <div className="capacity-info">
              <div className="progress-bar">
                <div 
                  className="progress"
                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                ></div>
              </div>
              <span>{event.registered}/{event.capacity} registered</span>
            </div>

            <div className="event-actions">
              <Link 
                to={`/events/${event.id}`}
                className="btn btn-secondary"
              >
                View Details
              </Link>
              <Link 
                to={`/events/${event.id}/register`}
                className="btn btn-primary"
                disabled={event.registered >= event.capacity}
              >
                {event.registered >= event.capacity ? 'Full' : 'Register'}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isLoading) {
    return <div className="loading">Loading events...</div>;
  }

  return (
    <div className="event-calendar-page">
      <div className="calendar-header">
        <h1>Community Events</h1>
        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
          <button
            className={`view-btn ${viewMode === 'week' ? 'active' : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      <div className="filters-section">
        <select
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        >
          <option value="all">All Categories</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Community">Community</option>
          <option value="Sports">Sports</option>
        </select>

        <select
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
        >
          <option value="all">All Locations</option>
          <option value="Kampala">Kampala</option>
          <option value="Entebbe">Entebbe</option>
          <option value="Jinja">Jinja</option>
        </select>

        <select
          value={filters.timeframe}
          onChange={(e) => setFilters(prev => ({ ...prev, timeframe: e.target.value }))}
        >
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past Events</option>
        </select>
      </div>

      <div className="calendar-content">
        {viewMode === 'list' ? renderEventsList() : renderCalendarGrid()}
      </div>

      <div className="calendar-footer">
        <Link to="/events/suggest" className="btn btn-secondary">
          Suggest an Event
        </Link>
      </div>
    </div>
  );
}

export default EventCalendar; 