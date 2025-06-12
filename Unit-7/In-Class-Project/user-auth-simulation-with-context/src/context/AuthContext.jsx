// Import necessary React utilities
import { createContext, useState, useContext } from 'react';

// Create a new context for authentication data
const AuthContext = createContext();

// This component will wrap the parts of your app that need access to auth state
export const AuthProvider = ({ children }) => {
  // Initialize user state. Starts as 'null' meaning no one is logged in
  const [user, setUser] = useState(null);

  // Function to log in a user by setting their username
  const login = (username) => setUser({ name: username });

  // Function to log out a user by clearing the state
  const logout = () => setUser(null);

  // Provide the user data and functions to the rest of the app
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Render any nested components */}
    </AuthContext.Provider>
  );
};

// Custom hook to make it easy to use auth context in any component
export const useAuth = () => useContext(AuthContext);