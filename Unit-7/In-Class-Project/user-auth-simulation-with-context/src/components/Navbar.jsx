// Import routing components to handle navigation and track current route
import { Link, useLocation } from 'react-router-dom';
// Import authentication context hook for user data and logout functionality
import { useAuth } from '../context/AuthContext';
// Icon components to enhance UI aesthetics
import { Home, LayoutDashboard, User, LogOut } from 'lucide-react';
// Import stylesheet specifically for the Navbar
import '../styles/navbar.css';

function Navbar() {
  // Get the current user and logout function from context
  const { user, logout } = useAuth();
  // Get the current URL path to highlight active links
  const location = useLocation();

  // Trigger logout when the Logout button is clicked
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* App logo/brand that links to the homepage */}
        <Link to="/" className="navbar-brand">
          <Home size={24} />
          Auth Demo
        </Link>

        <div className="navbar-links">
          {/* Home link, highlights as 'active' if we're on the homepage */}
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home size={20} />
            Home
          </Link>

          {/* If the user is logged in, show Dashboard, user info, and Logout */}
          {user ? (
            <>
              {/* Dashboard link with conditional highlighting */}
              <Link 
                to="/dashboard" 
                className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>

              {/* Display user's name with a User icon */}
              <div className="user-info">
                <User size={20} />
                <span className="user-name">{user.name}</span>
              </div>

              {/* Logout button */}
              <button 
                className="nav-link" 
                onClick={handleLogout}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <LogOut size={20} />
                Logout
              </button>
            </>
          ) : (
            // If no user is logged in, show Login link
            <Link 
              to="/" 
              className="nav-link"
            >
              <User size={20} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

// Export the Navbar component so it can be used throughout the app
export default Navbar;