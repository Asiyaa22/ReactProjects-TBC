// Import necessary components and routing utilities
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';         // Login screen component
import Dashboard from './pages/Dashboard';         // Dashboard component for logged-in users
import Navbar from './components/Navbar';          // Top navigation bar
import { AuthProvider } from './context/AuthContext'; // Provides authentication state globally

function App() {
  return (
    // Wrap the entire app with AuthProvider to give all components access to auth state
    <AuthProvider>
      {/* Setup routing for the app */}
      <Router>
        {/* Navigation bar that stays consistent across pages */}
        <Navbar />

        {/* Define routes and which component should render for each path */}
        <Routes>
          <Route path="/" element={<LoginPage />} />           {/* Login page at root URL */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page for logged-in users */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Export the App component as the root of your React application
export default App;