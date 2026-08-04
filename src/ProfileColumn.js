import React from 'react';

function ProfileColumn({ profile }) {
  return (
    <div className="col-md-4 col-sm-6" style={{ marginBottom: '30px' }}>
      <div
        className="panel panel-default text-center"
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'default',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
      >
        <div className="panel-body" style={{ padding: '25px 20px' }}>
          <img
            src={profile.avatar}
            alt={profile.name}
            className="img-circle"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              marginBottom: '15px',
              border: '3px solid #f0f0f0',
            }}
          />
          <h4 style={{ margin: '0 0 5px', fontWeight: 600 }}>{profile.name}</h4>
          <span
            className="label label-primary"
            style={{
              display: 'inline-block',
              marginBottom: '12px',
              fontSize: '12px',
              padding: '5px 10px',
            }}
          >
            {profile.role}
          </span>
          <p className="text-muted" style={{ fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
            {profile.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileColumn;
