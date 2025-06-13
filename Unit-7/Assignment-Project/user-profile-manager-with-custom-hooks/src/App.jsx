 // Import React core
import React from 'react';

// Import routing tools from React Router for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the pages used in the app
import Home from './pages/Home';          // Displays list of user cards
import Profile from './pages/Profile';    // Displays details of a specific user

// Import context provider to manage and share user data
import { UserProvider } from './context/UserContext';

function App() {
  return (
    // Wrap the entire app with UserProvider to share user data across components
    <UserProvider>
      {/* Router sets up client-side navigation */}
      <Router>
        <Routes>
          {/* Route for homepage that shows user list */}
          <Route path="/" element={<Home />} />

          {/* Route for individual user profile, with dynamic ID in the URL */}
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

// Export the App component as the root component of your application
export default App;