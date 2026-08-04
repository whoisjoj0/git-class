import React from 'react';
import './App.css';
import ProfileColumn from './ProfileColumn';
import profilesData from './profilesData';

function App() {
  return (
    <div>
      <h3 className="text-center" style={{ marginBottom: '30px', fontWeight: 600 }}>
        Engineering Team
      </h3>
      <div className="row">
        {profilesData.map((profile, index) => (
          <ProfileColumn key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;