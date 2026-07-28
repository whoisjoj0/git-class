import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import profilesData from './profilesData';

function App() {
  return (
    <div>
      <h3 className="text-center" style={{ marginBottom: '30px', fontWeight: 600 }}>
        Engineering Team
      </h3>
      <div className="row">
        {profilesData.map((profile, index) => (
          <UserProfile
            key={index}
            name={profile.name}
            role={profile.role}
            bio={profile.bio}
            avatar={profile.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;