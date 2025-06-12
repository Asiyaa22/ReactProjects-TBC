// Import custom authentication context hook to access user and logout functionality
import { useAuth } from '../context/AuthContext';
// Import navigation hook from React Router to redirect users
import { useNavigate } from 'react-router-dom';
// useEffect hook runs code when component mounts or updates
import { useEffect } from 'react';
// Icon components for UI (User avatar and Logout icon)
import { LogOut, UserCircle } from 'lucide-react';
// Import CSS styles specific to this page
import '../styles/pages.css';

function Dashboard() {
  // Destructure user data and logout function from Auth context
  const { user, logout } = useAuth();
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Redirect to homepage if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  // If there's no user (still null), don't render anything
  if (!user) {
    return null;
  }

  return (
    <div className="page">
      {/* Display a user icon */}
      <UserCircle size={48} color="#3b82f6" />
      
      {/* Show a personalized welcome message */}
      <h2 className="welcome-message">Welcome, {user.name}!</h2>
      
      <div className="dashboard-actions">
        {/* Button to sign out: logs out and redirects to home */}
        <button 
          className="btn btn-danger" 
          onClick={() => {
            logout();
            navigate('/');
          }}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

// Export the Dashboard component so it can be used in other parts of the app
export default Dashboard;