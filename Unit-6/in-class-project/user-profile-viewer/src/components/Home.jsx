import React from 'react';
// Importing Link from react-router-dom to handle internal navigation
import { Link } from 'react-router-dom';
// Importing a user icon from lucide-react library
import { User } from 'lucide-react';
// Importing CSS file for styling this component
import './styles/Home.css';

// Sample array of users to display in the directory
const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Priya Sharma' },
  { id: '3', name: 'Tushar Shinde' },
];

// Home component to display the list of users
export default function Home() {
  return (
    <div className="home-container">
      {/* Heading for the page */}
      <h1>User Directory</h1>

      {/* Unordered list of user links */}
      <ul className="user-list">
        {/* Loop through each user and create a list item */}
        {users.map(u => (
          <li key={u.id}>
            {/* Link navigates to the user's individual profile page */}
            <Link to={`/user/${u.id}`}>
              <User size={20} /> {/* User icon */}
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}