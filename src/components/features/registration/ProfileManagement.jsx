import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProfileManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    personalInfo: {
      fullName: 'Sarah Namukasa',
      email: 'sarah.n@example.com',
      phone: '+256 700 123456',
      location: 'Kampala',
      profileImage: '/assets/images/profiles/sarah.jpg'
    },
    programProgress: {
      economic: {
        program: 'Business Development',
        status: 'In Progress',
        completion: 65,
        nextMilestone: 'Business Plan Completion',
        achievements: [
          'Completed Financial Literacy Training',
          'Secured Micro-loan',
          'Started Small Business'
        ]
      },
      skills: {
        program: 'Digital Skills Training',
        status: 'Completed',
        completion: 100,
        achievements: [
          'Web Development Basics',
          'Digital Marketing',
          'Online Freelancing'
        ]
      }
    },
    goals: [
      {
        id: 1,
        title: 'Increase Monthly Income',
        target: '500,000 UGX',
        current: '300,000 UGX',
        deadline: '2024-06-30'
      },
      {
        id: 2,
        title: 'Business Expansion',
        target: 'Open Second Location',
        current: 'Planning Phase',
        deadline: '2024-12-31'
      }
    ],
    support: {
      mentor: 'John Okello',
      nextMeeting: '2024-03-20',
      resources: [
        'Business Development Guide',
        'Financial Planning Template',
        'Market Analysis Tools'
      ]
    }
  });

  const handleProfileUpdate = async (updatedData) => {
    try {
      // API call would go here
      setUserData(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-management">
      <section className="profile-header">
        <div className="profile-info">
          <img 
            src={userData.personalInfo.profileImage} 
            alt={userData.personalInfo.fullName}
            className="profile-image"
          />
          <div className="profile-details">
            <h1>{userData.personalInfo.fullName}</h1>
            <p className="location">{userData.personalInfo.location}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button 
            className="btn btn-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </section>

      <section className="profile-navigation">
        <div className="nav-tabs">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === 'programs' ? 'active' : ''}`}
            onClick={() => setActiveTab('programs')}
          >
            Programs
          </button>
          <button
            className={`tab-btn ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
          >
            Goals
          </button>
          <button
            className={`tab-btn ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            Support
          </button>
        </div>
      </section>

      {activeTab === 'overview' && (
        <section className="profile-overview">
          <div className="progress-summary">
            <h2>Progress Overview</h2>
            {Object.entries(userData.programProgress).map(([program, data]) => (
              <div key={program} className="progress-card">
                <h3>{data.program}</h3>
                <div className="progress-bar">
                  <div 
                    className="progress"
                    style={{ width: `${data.completion}%` }}
                  ></div>
                </div>
                <p>{data.status} - {data.completion}% Complete</p>
              </div>
            ))}
          </div>

          <div className="next-steps">
            <h2>Next Steps</h2>
            <ul>
              {Object.values(userData.programProgress).map(program => (
                program.nextMilestone && (
                  <li key={program.program}>{program.nextMilestone}</li>
                )
              ))}
            </ul>
          </div>
        </section>
      )}

      {activeTab === 'programs' && (
        <section className="program-details">
          {Object.entries(userData.programProgress).map(([program, data]) => (
            <div key={program} className="program-card">
              <h2>{data.program}</h2>
              <div className="achievements">
                <h3>Achievements</h3>
                <ul>
                  {data.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <Link 
                to={`/programs/${program}`}
                className="btn btn-secondary"
              >
                Program Details
              </Link>
            </div>
          ))}
        </section>
      )}

      {activeTab === 'goals' && (
        <section className="goals-tracking">
          <h2>Goals & Targets</h2>
          <div className="goals-grid">
            {userData.goals.map(goal => (
              <div key={goal.id} className="goal-card">
                <h3>{goal.title}</h3>
                <div className="goal-progress">
                  <p><strong>Target:</strong> {goal.target}</p>
                  <p><strong>Current:</strong> {goal.current}</p>
                  <p><strong>Deadline:</strong> {new Date(goal.deadline).toLocaleDateString()}</p>
                </div>
                <button className="btn btn-outline">
                  Update Progress
                </button>
              </div>
            ))}
          </div>
          <button className="btn btn-primary">
            Add New Goal
          </button>
        </section>
      )}

      {activeTab === 'support' && (
        <section className="support-resources">
          <div className="mentor-info">
            <h2>Your Mentor</h2>
            <p><strong>Mentor:</strong> {userData.support.mentor}</p>
            <p><strong>Next Meeting:</strong> {new Date(userData.support.nextMeeting).toLocaleDateString()}</p>
            <button className="btn btn-primary">
              Schedule Meeting
            </button>
          </div>

          <div className="resources">
            <h2>Available Resources</h2>
            <ul>
              {userData.support.resources.map((resource, index) => (
                <li key={index}>
                  <a href={`/resources/${index}`}>{resource}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="support-actions">
            <h2>Need Additional Support?</h2>
            <div className="action-buttons">
              <Link to="/support/request" className="btn btn-primary">
                Request Support
              </Link>
              <Link to="/support/emergency" className="btn btn-secondary">
                Emergency Assistance
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProfileManagement; 