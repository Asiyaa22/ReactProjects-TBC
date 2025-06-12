import React, { Component } from 'react';
// Import navigation components from react-router-dom
import { Navigate, useParams } from 'react-router-dom';
// Importing icons from lucide-react for UI
import { Mail, User, MapPin, Briefcase, Calendar, Globe } from 'lucide-react';
// Importing CSS for styling
import './styles/UserProfile.css';

// Class-based component to show the user profile
class UserProfile extends Component {
  // State holds user data, loading status, and redirect flag
  state = { user: null, loading: true, redirect: false };

  // Runs after the component is mounted
  componentDidMount() {
    // Mock user data (could be replaced with API call)
    const mockData = {
      '1': {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        location: 'Pune, India',
        role: 'Full Stack Developer',
        company: 'TechCorp',
        website: 'johndoe.dev',
        joined: 'Jan 2020',
        bio: 'Experienced in React, Node.js, and scalable architectures.',
      },
      '2': {
        name: 'Priya Sharma',
        email: 'priya@domain.com',
        age: 26,
        location: 'Mumbai, India',
        role: 'Frontend Developer',
        company: 'DesignPro',
        website: 'priyasharma.com',
        joined: 'Mar 2021',
        bio: 'Specializes in UI/UX, animations, and responsive design.',
      },
      '3': {
        name: 'Tushar Shinde',
        email: 'tushar@xyz.com',
        age: 24,
        location: 'Nagpur, India',
        role: 'Software Engineer',
        company: 'MyStartup',
        website: 'tushar.codes',
        joined: 'Jun 2022',
        bio: 'Passionate about open-source, React, and mentoring.',
      },
    };

    // Use ID passed from props to select user, default to '1' if not found
    const user = mockData[this.props.userId] || mockData['1'];

    // Simulate loading delay before updating state
    setTimeout(() => this.setState({ user, loading: false }), 800);
  }

  // Method to go back to home page
  handleBack = () => this.setState({ redirect: true });

  render() {
    const { user, loading, redirect } = this.state;

    // If redirect flag is true, navigate to home page
    if (redirect) return <Navigate to="/" />;

    // While loading, show loading message
    if (loading) return <div className="loader">Loading profile…</div>;

    // Render user profile card
    return (
      <div className="profile-container">
        <div className="profile-card">
          {/* Avatar icon */}
          <div className="avatar">
            <User size={48} />
          </div>

          {/* User name and bio */}
          <h2>{user.name}</h2>
          <p className="bio">{user.bio}</p>

          {/* Displaying user details */}
          <div className="info-group">
            <p><Mail size={18} /> {user.email}</p>
            <p><Calendar size={18} /> Age: {user.age}</p>
            <p><MapPin size={18} /> {user.location}</p>
            <p><Briefcase size={18} /> {user.role} @ {user.company}</p>
            <p><Globe size={18} /> {user.website}</p>
            <p><Calendar size={18} /> Joined: {user.joined}</p>
          </div>

          {/* Button to go back */}
          <button className="back-btn" onClick={this.handleBack}>← Back</button>
        </div>
      </div>
    );
  }
}

// This functional component wraps the class component to extract the `id` from URL params
export default function WrappedUserProfile() {
  const { id } = useParams(); // React Router hook to get dynamic route parameter
  return <UserProfile userId={id} />; // Pass userId as prop to class component
}