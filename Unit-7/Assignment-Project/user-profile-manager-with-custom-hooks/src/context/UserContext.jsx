// Import React essentials: createContext for context creation,
// useState for state management, useEffect for lifecycle handling
import React, { createContext, useState, useEffect } from 'react';

// Create a new context to share user data across components
export const UserContext = createContext();

// Provider component to supply user data to its children
export const UserProvider = ({ children }) => {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // useEffect runs once after the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulated API response (mock data)
      const mockData = [
        { id: 1, name: 'Tushar Shinde', role: 'Developer' },
        { id: 2, name: 'Priya Singh', role: 'Designer' },
        { id: 3, name: 'Aryan Mehta', role: 'Manager' },
      ];

      // Simulate network delay of 1 second before setting users
      setTimeout(() => setUsers(mockData), 1000);
    };

    // Trigger the mock fetch function
    fetchUsers();
  }, []); // Empty dependency array means this effect runs only once

  return (
    // Provide the user list and setter function to all child components
    <UserContext.Provider value={{ users, setUsers }}>
      {children} {/* Render nested components that can now access this context */}
    </UserContext.Provider>
  );
};