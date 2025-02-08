import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LearningDashboard() {
  const [userData, setUserData] = useState({
    enrolledCourses: [],
    completedCourses: [],
    certificates: [],
    progress: {},
    achievements: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('in-progress');

  useEffect(() => {
    fetchUserLearningData();
  }, []);

  const fetchUserLearningData = async () => {
    try {
      // API call would go here
      const mockData = {
        enrolledCourses: [
          {
            id: 1,
            title: 'Digital Skills Fundamentals',
            progress: 65,
            nextLesson: 'Email Communication',
            lastAccessed: '2024-02-15',
            deadlines: [
              { title: 'Assignment 1', date: '2024-02-20' },
              { title: 'Project Submission', date: '2024-02-28' }
            ],
            instructor: 'Sarah Namukasa',
            image: '/assets/images/courses/digital-skills.jpg'
          },
          {
            id: 2,
            title: 'Business Management Essentials',
            progress: 30,
            nextLesson: 'Financial Planning',
            lastAccessed: '2024-02-14',
            deadlines: [
              { title: 'Business Plan Draft', date: '2024-02-25' }
            ],
            instructor: 'John Okello',
            image: '/assets/images/courses/business.jpg'
          }
        ],
        completedCourses: [
          {
            id: 3,
            title: 'Basic Computer Skills',
            completedDate: '2024-01-15',
            grade: 'A',
            certificateId: 'CERT-2024-001'
          }
        ],
        certificates: [
          {
            id: 'CERT-2024-001',
            courseTitle: 'Basic Computer Skills',
            issueDate: '2024-01-15',
            validUntil: '2026-01-15',
            downloadUrl: '#'
          }
        ],
        achievements: [
          {
            id: 1,
            title: 'Fast Learner',
            description: 'Completed 5 lessons in one day',
            dateEarned: '2024-02-10',
            icon: '🚀'
          },
          {
            id: 2,
            title: 'Perfect Score',
            description: 'Scored 100% on a quiz',
            dateEarned: '2024-02-12',
            icon: '🌟'
          }
        ],
        progress: {
          totalHoursLearned: 45,
          coursesCompleted: 1,
          assignmentsSubmitted: 8,
          averageGrade: 92
        }
      };
      setUserData(mockData);
    } catch (error) {
      console.error('Failed to fetch learning data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUpcomingDeadlines = () => {
    const allDeadlines = userData.enrolledCourses.flatMap(course =>
      course.deadlines.map(deadline => ({
        ...deadline,
        courseTitle: course.title
      }))
    );
    return allDeadlines.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  if (isLoading) {
    return <div className="loading">Loading your learning dashboard...</div>;
  }

  return (
    <div className="learning-dashboard">
      <div className="dashboard-header">
        <h1>My Learning Dashboard</h1>
        <Link to="/courses" className="btn btn-primary">Browse More Courses</Link>
      </div>

      <div className="progress-overview">
        <div className="stat-card">
          <h3>Learning Hours</h3>
          <p>{userData.progress.totalHoursLearned}h</p>
        </div>
        <div className="stat-card">
          <h3>Courses Completed</h3>
          <p>{userData.progress.coursesCompleted}</p>
        </div>
        <div className="stat-card">
          <h3>Assignments</h3>
          <p>{userData.progress.assignmentsSubmitted}</p>
        </div>
        <div className="stat-card">
          <h3>Average Grade</h3>
          <p>{userData.progress.averageGrade}%</p>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === 'in-progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('in-progress')}
        >
          In Progress
        </button>
        <button
          className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button
          className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          Certificates
        </button>
        <button
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'in-progress' && (
          <div className="enrolled-courses">
            <h2>Enrolled Courses</h2>
            <div className="courses-grid">
              {userData.enrolledCourses.map(course => (
                <div key={course.id} className="course-progress-card">
                  <div className="course-header">
                    <img src={course.image} alt={course.title} />
                    <div className="progress-indicator">
                      <div 
                        className="progress-bar"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="course-info">
                    <h3>{course.title}</h3>
                    <p className="instructor">Instructor: {course.instructor}</p>
                    <p className="next-lesson">Next: {course.nextLesson}</p>
                    <p className="last-accessed">
                      Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                    </p>
                    
                    {course.deadlines.length > 0 && (
                      <div className="deadlines">
                        <h4>Upcoming Deadlines:</h4>
                        <ul>
                          {course.deadlines.map((deadline, index) => (
                            <li key={index}>
                              {deadline.title} - {new Date(deadline.date).toLocaleDateString()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Link to={`/courses/${course.id}/learn`} className="btn btn-primary">
                      Continue Learning
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="completed-courses">
            <h2>Completed Courses</h2>
            <div className="courses-grid">
              {userData.completedCourses.map(course => (
                <div key={course.id} className="completed-course-card">
                  <h3>{course.title}</h3>
                  <p>Completed: {new Date(course.completedDate).toLocaleDateString()}</p>
                  <p>Grade: {course.grade}</p>
                  <Link 
                    to={`/certificates/${course.certificateId}`}
                    className="btn btn-secondary"
                  >
                    View Certificate
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="certificates">
            <h2>My Certificates</h2>
            <div className="certificates-grid">
              {userData.certificates.map(cert => (
                <div key={cert.id} className="certificate-card">
                  <div className="certificate-icon">🎓</div>
                  <h3>{cert.courseTitle}</h3>
                  <p>Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                  <p>Valid until: {new Date(cert.validUntil).toLocaleDateString()}</p>
                  <div className="certificate-actions">
                    <a 
                      href={cert.downloadUrl}
                      className="btn btn-secondary"
                      download
                    >
                      Download
                    </a>
                    <button 
                      className="btn btn-outline"
                      onClick={() => window.print()}
                    >
                      Print
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements">
            <h2>My Achievements</h2>
            <div className="achievements-grid">
              {userData.achievements.map(achievement => (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <p className="earned-date">
                    Earned: {new Date(achievement.dateEarned).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="upcoming-deadlines">
        <h2>Upcoming Deadlines</h2>
        <div className="deadlines-list">
          {getUpcomingDeadlines().map((deadline, index) => (
            <div key={index} className="deadline-item">
              <div className="deadline-date">
                {new Date(deadline.date).toLocaleDateString()}
              </div>
              <div className="deadline-info">
                <h4>{deadline.courseTitle}</h4>
                <p>{deadline.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearningDashboard; 