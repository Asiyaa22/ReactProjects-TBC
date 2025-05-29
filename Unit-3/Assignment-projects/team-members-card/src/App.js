import React, { useState } from 'react';
import TeamMember from './components/TeamMember';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Vinay', role: 'Frontend Intern', available: true },
    { id: 2, name: 'Tushar', role: 'Backend Intern', available: false },
    { id: 3, name: 'Asiya', role: 'Team Lead', available: true },
  ]);

  const toggleAvailability = (id) => {
    const updated = members.map(member =>
      member.id === id ? { ...member, available: !member.available } : member
    );
    setMembers(updated);
  };

  const totalAvailable = members.filter(m => m.available).length;

  return (
    <div className="App">
      <h1>Team Members</h1>
      <p>✅ Available: {totalAvailable} / {members.length}</p>

      {members.map(member => (
        <TeamMember
          key={member.id}
          member={member}
          toggleAvailability={toggleAvailability}
        />
      ))}
    </div>
  );
}

export default App;
