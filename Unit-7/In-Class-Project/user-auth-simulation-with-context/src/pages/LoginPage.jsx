// Import hooks and components needed for login functionality
import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Custom hook for auth logic
import { useNavigate } from 'react-router-dom';   // Hook to handle page navigation
import { User, LogIn } from 'lucide-react';       // Icon components for UI
import '../styles/pages.css';                     // Import styles for this page

function LoginPage() {
  // Local state to track the user's input (their name)
  const [name, setName] = useState('');
  // Extract login method from auth context
  const { login } = useAuth();
  // Navigation hook to redirect after login
  const navigate = useNavigate();

  // Handles login when user clicks button or presses Enter
  const handleLogin = () => {
    if (name.trim() === '') return; // Don't proceed if the input is empty
    login(name);                    // Save the user's name in context
    navigate('/dashboard');         // Redirect to dashboard after login
  };

  return (
    <div className="page">
      {/* Title for the login screen */}
      <h2>Welcome Back</h2>
      
      <div className="input-group">
        {/* Display user icon beside the input */}
        <User className="icon" size={20} />
        
        {/* Input field to collect user's name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}  // Update name on each keystroke
          onKeyPress={(e) => e.key === 'Enter' && handleLogin()} // Login on Enter key
        />
      </div>

      {/* Sign-in button triggers login logic */}
      <button className="btn btn-primary" onClick={handleLogin}>
        <LogIn size={20} />
        Sign In
      </button>
    </div>
  );
}

// Export the component so it can be used in routing
export default LoginPage;