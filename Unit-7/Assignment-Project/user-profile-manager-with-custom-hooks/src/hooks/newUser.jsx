// Import the useContext hook from React to access context values
import { useContext } from 'react';
// Import the UserContext where user data is stored and shared
import { UserContext } from '../context/UserContext';

// Custom hook to easily access user-related data from context
const useUser = () => {
  const context = useContext(UserContext); // Get the current context value

  // If this hook is used outside the UserProvider, throw an error
  if (!context) throw new Error('useUser must be used within a UserProvider');

  return context; // Return the user data and setter function
};

// Export the hook for use in other components
export default useUser;