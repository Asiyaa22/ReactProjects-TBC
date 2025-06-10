import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Home page with user list
import UserProfileWithParams from './components/UserProfileWithParams'; // Profile page that uses route params

export default function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* Dynamic User Profile Route */}
      <Route path="/user/:id" element={<UserProfileWithParams />} />
      {/* if user didnt get thier profile */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}