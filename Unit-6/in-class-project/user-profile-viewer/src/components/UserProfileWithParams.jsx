// components/UserProfileWithParams.jsx

// Importing React and necessary hooks
import React from 'react';
import { useParams } from 'react-router-dom'; // To extract dynamic URL parameters
import UserProfile from './UserProfile'; // Importing the class-based UserProfile component

// Functional component to extract the `id` from the URL and pass it to UserProfile
export default function UserProfileWithParams() {
  const { id } = useParams(); // useParams() is used to access the `id` from the route like /user/:id

  // Pass the userId prop to the UserProfile component
  return <UserProfile userId={id} />;
}