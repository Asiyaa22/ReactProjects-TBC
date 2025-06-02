// Import React library
import React from 'react';
// Import the Student Registration Form component
import StudentRegistrationForm from './components/StudentRegistration/StudentRegistrationForm';

// Main App component
function App() {
  return (
    // Container div for the app
    <div>
      {/* Render the student registration form */}
      <StudentRegistrationForm/>
    </div>
  );
}

// Export the App component as default export
export default App;
