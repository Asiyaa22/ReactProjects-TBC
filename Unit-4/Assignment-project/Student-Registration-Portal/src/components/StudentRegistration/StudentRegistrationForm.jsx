import React, { useState } from 'react';
import './StudentRegistrationForm.css';

function StudentRegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    gender: '',
    termsAgreed: false,
  });

  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
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

    if (!validateEmail(form.email)) {
      setError('Invalid email format.');
      setSuccess('');
      return;
    }

    if (!validatePhone(form.phone)) {
      setError('Phone number must be 10 digits.');
      setSuccess('');
      return;
    }

    setStudents([...students, form]);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      course: '',
      gender: '',
      termsAgreed: false,
    });
    setError('');
    setSuccess('Student registered successfully!');
  };

  return (
    <div className="form-container">
      <h2>Student Registration Portal</h2>
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
        <div className="gender-group">
          Gender:
          <label><input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} /> Female</label>
        </div>
        <label className="terms-label">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={form.termsAgreed}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Register</button>
      </form>

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

export default StudentRegistrationForm;
