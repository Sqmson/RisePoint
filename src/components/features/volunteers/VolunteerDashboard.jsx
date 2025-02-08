import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VolunteerDashboard() {
  const [userData, setUserData] = useState({
    upcomingShifts: [],
    pastShifts: [],
    totalHours: 0,
    impactMetrics: {},
    trainings: [],
    documents: [],
    notifications: [],
    feedback: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchVolunteerData();
  }, []);

  const fetchVolunteerData = async () => {
    try {
      // API call would go here
      const mockData = {
        upcomingShifts: [
          {
            id: 1,
            program: 'Youth Mentoring',
            date: '2024-02-20',
            time: '14:00-17:00',
            location: 'Community Center',
            coordinator: 'Sarah N.',
            status: 'confirmed'
          },
          {
            id: 2,
            program: 'Elder Care',
            date: '2024-02-22',
            time: '09:00-12:00',
            location: 'Senior Home',
            coordinator: 'John M.',
            status: 'pending'
          }
        ],
        pastShifts: [
          {
            id: 3,
            program: 'Food Distribution',
            date: '2024-02-15',
            hours: 4,
            impact: '50 families served',
            feedback: 'Excellent work organizing the distribution'
          }
        ],
        totalHours: 45,
        impactMetrics: {
          peopleServed: 150,
          programsSupported: 3,
          skillsLearned: 5,
          certificatesEarned: 2
        },
        trainings: [
          {
            id: 1,
            title: 'Child Safety',
            status: 'completed',
            completedDate: '2024-01-20',
            certificate: 'CERT-001'
          },
          {
            id: 2,
            title: 'First Aid',
            status: 'in-progress',
            dueDate: '2024-02-28',
            progress: 60
          }
        ],
        documents: [
          {
            id: 1,
            name: 'Volunteer Handbook',
            type: 'PDF',
            uploadDate: '2024-01-15',
            status: 'current'
          },
          {
            id: 2,
            name: 'Background Check',
            type: 'PDF',
            uploadDate: '2024-01-10',
            status: 'approved'
          }
        ],
        notifications: [
          {
            id: 1,
            type: 'reminder',
            message: 'Upcoming training session tomorrow',
            date: '2024-02-19'
          },
          {
            id: 2,
            type: 'update',
            message: 'New volunteer opportunity available',
            date: '2024-02-18'
          }
        ],
        feedback: [
          {
            id: 1,
            program: 'Youth Mentoring',
            rating: 5,
            comment: 'Great initiative and leadership shown',
            date: '2024-02-15'
          }
        ]
      };
      setUserData(mockData);
    } catch (error) {
      console.error('Failed to fetch volunteer data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderOverview = () => (
    <div className="dashboard-overview">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Hours</h3>
          <p className="stat-value">{userData.totalHours}</p>
        </div>
        <div className="stat-card">
          <h3>People Served</h3>
          <p className="stat-value">{userData.impactMetrics.peopleServed}</p>
        </div>
        <div className="stat-card">
          <h3>Programs</h3>
          <p className="stat-value">{userData.impactMetrics.programsSupported}</p>
        </div>
        <div className="stat-card">
          <h3>Certificates</h3>
          <p className="stat-value">{userData.impactMetrics.certificatesEarned}</p>
        </div>
      </div>

      <div className="upcoming-shifts">
        <h2>Upcoming Shifts</h2>
        {userData.upcomingShifts.map(shift => (
          <div key={shift.id} className="shift-card">
            <div className="shift-header">
              <h3>{shift.program}</h3>
              <span className={`status ${shift.status}`}>{shift.status}</span>
            </div>
            <div className="shift-details">
              <p>📅 {new Date(shift.date).toLocaleDateString()}</p>
              <p>⏰ {shift.time}</p>
              <p>📍 {shift.location}</p>
              <p>👤 Coordinator: {shift.coordinator}</p>
            </div>
            <div className="shift-actions">
              <button className="btn btn-secondary">View Details</button>
              {shift.status === 'pending' && (
                <button className="btn btn-primary">Confirm</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="notifications-section">
        <h2>Recent Notifications</h2>
        <div className="notifications-list">
          {userData.notifications.map(notification => (
            <div key={notification.id} className={`notification ${notification.type}`}>
              <p>{notification.message}</p>
              <span className="date">
                {new Date(notification.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="schedule-section">
      <div className="calendar-view">
        {/* Calendar implementation would go here */}
      </div>
      
      <div className="shift-list">
        <h2>Upcoming Shifts</h2>
        {userData.upcomingShifts.map(shift => (
          <div key={shift.id} className="shift-item">
            {/* Shift details */}
          </div>
        ))}
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="training-section">
      <div className="training-progress">
        <h2>My Training Progress</h2>
        {userData.trainings.map(training => (
          <div key={training.id} className="training-card">
            <div className="training-header">
              <h3>{training.title}</h3>
              <span className={`status ${training.status}`}>
                {training.status}
              </span>
            </div>
            
            {training.status === 'in-progress' && (
              <div className="progress-bar">
                <div 
                  className="progress"
                  style={{ width: `${training.progress}%` }}
                ></div>
                <span>{training.progress}%</span>
              </div>
            )}

            {training.status === 'completed' && (
              <div className="completion-info">
                <p>Completed: {new Date(training.completedDate).toLocaleDateString()}</p>
                <button className="btn btn-secondary">
                  View Certificate
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderImpact = () => (
    <div className="impact-section">
      <div className="impact-metrics">
        <h2>Your Impact</h2>
        <div className="metrics-grid">
          {/* Impact metrics visualization */}
        </div>
      </div>
      
      <div className="past-activities">
        <h2>Past Activities</h2>
        {userData.pastShifts.map(shift => (
          <div key={shift.id} className="activity-card">
            <div className="activity-header">
              <h3>{shift.program}</h3>
              <span className="hours">{shift.hours} hours</span>
            </div>
            <p className="impact-text">{shift.impact}</p>
            {shift.feedback && (
              <div className="feedback">
                <p>Feedback: {shift.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="documents-section">
      <h2>My Documents</h2>
      <div className="documents-grid">
        {userData.documents.map(doc => (
          <div key={doc.id} className="document-card">
            <div className="document-icon">📄</div>
            <div className="document-info">
              <h3>{doc.name}</h3>
              <p>Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}</p>
              <span className={`status ${doc.status}`}>{doc.status}</span>
            </div>
            <div className="document-actions">
              <button className="btn btn-secondary">Download</button>
              <button className="btn btn-outline">Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return <div className="loading">Loading your dashboard...</div>;
  }

  return (
    <div className="volunteer-dashboard">
      <div className="dashboard-header">
        <h1>Volunteer Dashboard</h1>
        <div className="quick-actions">
          <Link to="/volunteer/opportunities" className="btn btn-primary">
            Find Opportunities
          </Link>
          <button className="btn btn-secondary">Log Hours</button>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          Schedule
        </button>
        <button
          className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training
        </button>
        <button
          className={`tab-btn ${activeTab === 'impact' ? 'active' : ''}`}
          onClick={() => setActiveTab('impact')}
        >
          Impact
        </button>
        <button
          className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
          onClick={() => setActiveTab('documents')}
        >
          Documents
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'training' && renderTraining()}
        {activeTab === 'impact' && renderImpact()}
        {activeTab === 'documents' && renderDocuments()}
      </div>
    </div>
  );
}

export default VolunteerDashboard; 