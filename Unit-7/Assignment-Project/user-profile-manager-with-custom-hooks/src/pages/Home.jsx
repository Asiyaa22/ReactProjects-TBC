// Import core React functionality
import React from 'react';
// Import custom hook to access user data from context
import useUser from '../hooks/newUser';
// Import reusable component to display individual user details
import UserCard from '../components/UserCard';
// Import CSS specific to the Home page layout and styling
import '../styles/Home.css';

const Home = () => {
  // Destructure the list of users from the custom hook
  const { users } = useUser();

  return (
    <div className="home-container">
      {/* Heading for the page */}
      <h1>User Profile Manager</h1>

      {/* Container for the list of user cards */}
      <div className="user-list">
        {users.length > 0 ? (
          // If there are users, display a UserCard for each one
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          // If user data is still loading or empty, show placeholder text
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

// Export the Home component to be used in routing
export default Home;