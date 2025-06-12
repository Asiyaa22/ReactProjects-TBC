import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './pages/Home'; // Import Home page component
import BlogDetailsWrapper from './pages/BlogDetails'; // Import BlogDetails (with HOC for routing)

// Main App component sets up routing for the application
function App() {
  return (
    <Router> {/* Provides routing context to the app */}
      <Routes> {/* Defines all route paths */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/user/:id" element={<BlogDetailsWrapper />} /> {/* Blog details route with dynamic ID */}
      </Routes>
    </Router>
  );
}

export default App; // Export the App component