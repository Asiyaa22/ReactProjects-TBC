import React from 'react';
// import './TeamMember.css';

function TeamMember({ member, toggleAvailability }) {
  return (
    <div className="team-card">
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p>
        <strong>Status:</strong>{' '}
        {member.available ? '✅ Available' : '❌ Not Available'}
      </p>
      <button onClick={() => toggleAvailability(member.id)}>
        Toggle Availability
      </button>
    </div>
  );
}

export default TeamMember;
