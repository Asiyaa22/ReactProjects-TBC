// src/components/UserCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, ArrowRight } from 'lucide-react';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        <User size={40} />
      </div>
      <div className="user-card__content">
        <h3>{user.name}</h3>
        <div className="user-card__role">
          <Briefcase size={16} />
          <p>{user.role}</p>
        </div>
        <Link to={`/profile/${user.id}`} className="user-card__link">
          View Profile
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default UserCard;