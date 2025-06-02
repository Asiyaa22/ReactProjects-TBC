// Importing React and useState hook
import React, { useState } from 'react';
// Importing CSS styles for this component
import './StudentRegistrationForm.css';

// Defining a functional React component
function StudentRegistrationForm() {
  // State to manage the form input values
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    gender: '',
    termsAgreed: false, // Checkbox value for agreeing to terms
  });

  // State to store the list of registered students
  const [students, setStudents] = useState([]);
  // State to show any validation error message
  const [error, setError] = useState('');
  // State to show success message
  const [success, setSuccess] = useState('');

  // This function runs whenever any input in the form is changed
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the form state based on the input type (checkbox or other)
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Utility function to validate email format using regular expression
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Utility function to validate if the phone number is 10 digits
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  // This function runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit

    // Check if any field is empty or terms not agreed
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.course ||
      !form.gender ||
      !form.termsAgreed
    ) {
      setError('Please fill all fields and agree to terms.');
      setSuccess('');
      return;
    }

    // Validate email format
    if (!validateEmail(form.email)) {
      setError('Invalid email format.');
      setSuccess('');
      return;
    }

    // Validate phone number
    if (!validatePhone(form.phone)) {
      setError('Phone number must be 10 digits.');
      setSuccess('');
      return;
    }

    // If all validations pass, add the form data to the students list
    setStudents([...students, form]);

    // Reset the form to initial state
    setForm({
      fullName: '',
      email: '',
      phone: '',
      course: '',
      gender: '',
      termsAgreed: false,
    });

    // Clear error message and show success message
    setError('');
    setSuccess('Student registered successfully!');
  };

  return (
    <div className="form-container">
      <h2>Student Registration Portal</h2>
      
      {/* Registration Form Starts Here */}
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Course:
          <input
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
          />
        </label>

        {/* Radio buttons for gender selection */}
        <div className="gender-group">
          Gender:
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="Male" 
              checked={form.gender === 'Male'} 
              onChange={handleChange} 
            /> 
            Male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="Female" 
              checked={form.gender === 'Female'} 
              onChange={handleChange} 
            /> 
            Female
          </label>
        </div>

        {/* Checkbox to agree to terms */}
        <label className="terms-label">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={form.termsAgreed}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>

        {/* Display error message if any */}
        {error && <p className="error">{error}</p>}
        {/* Display success message if registration was successful */}
        {success && <p className="success">{success}</p>}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>

      {/* Section to show the list of registered students */}
      <div className="student-list">
        <h3>Registered Students</h3>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {student.fullName}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Gender:</strong> {student.gender}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Exporting the component so it can be used in other files
export default StudentRegistrationForm;
