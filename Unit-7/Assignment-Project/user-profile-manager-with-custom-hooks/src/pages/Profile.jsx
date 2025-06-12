// Import core React and routing tools
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import icons for visual context
import { User, Briefcase, Hash, ArrowLeft, Mail, Phone } from 'lucide-react';
// Custom hook to get user data from context
import useUser from '../hooks/newUser';
// Styles specific to the Profile page
import '../styles/Profile.css';

const Profile = () => {
  // Extract user ID from the route params (e.g., /profile/1 → id = 1)
  const { id } = useParams();

  // Access the array of users from UserContext via the custom hook
  const { users } = useUser();

  // Hook to navigate programmatically (e.g., redirect back to home)
  const navigate = useNavigate();

  // Find the user object that matches the ID from the URL
  const user = users.find((u) => u.id === parseInt(id));

  // If no user is found (invalid ID), show a fallback message
  if (!user) return <p>User not found</p>;

  return (
    <div className="profile-container">
      {/* Header section with a back button */}
      <div className="profile-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
      
      {/* Main profile details section */}
      <div className="profile-content">
        {/* Avatar icon */}
        <div className="profile-avatar">
          <User size={80} />
        </div>
        
        {/* Display the user's name */}
        <h2>{user.name}</h2>
        
        <div className="profile-info">
          {/* User's role section */}
          <div className="info-item">
            <Briefcase size={20} />
            <div>
              <span className="info-label">Role</span>
              <p>{user.role}</p>
            </div>
          </div>
          
          {/* User's unique ID */}
          <div className="info-item">
            <Hash size={20} />
            <div>
              <span className="info-label">User ID</span>
              <p>{user.id}</p>
            </div>
          </div>
          
          {/* Optional email info */}
          <div className="info-item">
            <Mail size={20} />
            <div>
              <span className="info-label">Email</span>
              <p>{user.email || 'Not provided'}</p>
            </div>
          </div>
          
          {/* Optional phone info */}
          <div className="info-item">
            <Phone size={20} />
            <div>
              <span className="info-label">Phone</span>
              <p>{user.phone || 'Not provided'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;