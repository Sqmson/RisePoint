import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    language: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // API call would go here
      const mockCourses = [
        {
          id: 1,
          title: 'Digital Skills Fundamentals',
          category: 'Technology',
          level: 'Beginner',
          language: 'English',
          duration: '6 weeks',
          description: 'Learn essential computer and internet skills',
          instructor: 'Sarah Namukasa',
          enrolledStudents: 45,
          rating: 4.5,
          image: '/assets/images/courses/digital-skills.jpg',
          topics: [
            'Computer Basics',
            'Internet Navigation',
            'Email Communication',
            'Online Safety',
            'Basic Office Tools'
          ]
        },
        {
          id: 2,
          title: 'Business Management Essentials',
          category: 'Business',
          level: 'Intermediate',
          language: 'English',
          duration: '8 weeks',
          description: 'Master fundamental business management concepts',
          instructor: 'John Okello',
          enrolledStudents: 32,
          rating: 4.8,
          image: '/assets/images/courses/business.jpg',
          topics: [
            'Business Planning',
            'Financial Management',
            'Marketing Basics',
            'Team Leadership',
            'Operations Management'
          ]
        }
      ];
      setCourses(mockCourses);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterCourses = () => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'all' || course.category === filters.category;
      const matchesLevel = filters.level === 'all' || course.level === filters.level;
      const matchesLanguage = filters.language === 'all' || course.language === filters.language;

      return matchesSearch && matchesCategory && matchesLevel && matchesLanguage;
    });
  };

  const categories = [...new Set(courses.map(course => course.category))];
  const levels = [...new Set(courses.map(course => course.level))];
  const languages = [...new Set(courses.map(course => course.language))];

  if (isLoading) {
    return <div className="loading">Loading courses...</div>;
  }

  return (
    <div className="course-catalog-page">
      <div className="catalog-header">
        <h1>Course Catalog</h1>
        <p>Expand your skills with our comprehensive learning programs</p>
      </div>

      <div className="search-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters">
          <select
            value={filters.category}
            onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={filters.level}
            onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
          >
            <option value="all">All Levels</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>

          <select
            value={filters.language}
            onChange={(e) => setFilters(prev => ({ ...prev, language: e.target.value }))}
          >
            <option value="all">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filterCourses().length === 0 ? (
          <div className="no-courses">
            <p>No courses found matching your criteria.</p>
          </div>
        ) : (
          filterCourses().map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="level-badge">{course.level}</span>
              </div>

              <div className="course-content">
                <h2>{course.title}</h2>
                <p className="instructor">👨‍🏫 {course.instructor}</p>
                <p className="description">{course.description}</p>

                <div className="course-details">
                  <span>⏱️ {course.duration}</span>
                  <span>👥 {course.enrolledStudents} students</span>
                  <span>⭐ {course.rating}</span>
                </div>

                <div className="topics">
                  <h3>What you'll learn:</h3>
                  <ul>
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="course-footer">
                  <Link to={`/courses/${course.id}`} className="btn btn-primary">
                    View Course
                  </Link>
                  <Link to={`/courses/${course.id}/enroll`} className="btn btn-secondary">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="catalog-footer">
        <h3>Can't find what you're looking for?</h3>
        <p>Suggest a course or topic you'd like to learn about</p>
        <Link to="/courses/suggest" className="btn btn-secondary">
          Suggest a Course
        </Link>
      </div>
    </div>
  );
}

export default CourseCatalog; 