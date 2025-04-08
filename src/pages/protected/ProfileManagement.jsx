import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function ProfileManagement() {
  return (
    <div className="profile-container">
      <nav className="profile-nav">
        <Link to="/dashboard/profile">Personal Info</Link>
        <Link to="/dashboard/profile/progress">Program Progress</Link>
        <Link to="/dashboard/profile/goals">Goals & Milestones</Link>
        <Link to="/dashboard/profile/network">Support Network</Link>
      </nav>

      <div className="profile-content">
        <Routes>
          <Route index element={<PersonalInformation />} />
          <Route path="progress" element={<ProgramProgress />} />
          <Route path="goals" element={<GoalsMilestones />} />
          <Route path="network" element={<SupportNetwork />} />
        </Routes>
      </div>
    </div>
  );
}

function PersonalInformation() {
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St',
    skills: ['Digital Marketing', 'Agriculture', 'Business Planning'],
    interests: ['Community Development', 'Education', 'Sustainability']
  });

  return (
    <div className="profile-section">
      <h2>Personal Information</h2>
      <form className="profile-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value={profile.fullName} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={profile.email} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" value={profile.phone} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea value={profile.address}></textarea>
        </div>
        <div className="form-group">
          <label>Skills</label>
          <div className="tags-container">
            {profile.skills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
        <button type="submit" className="update-button">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfileManagement; 