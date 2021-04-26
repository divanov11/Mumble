import React from 'react';
import { RoundShape, TextBlock } from 'react-placeholder/lib/placeholders';
import '../styles/components/UserCard.css';

const UserCardPlaceholder = () => {
  return (
    <div className="user-card card">
      <div className="card__body">
        <div className="user-card__profile-summary">
          <center>
            <RoundShape color="#c5c5c5" style={{ width: 80, height: 80 }} />
            <br />
            <TextBlock rows={1} color="#c5c5c5" />
            <br />
            <TextBlock rows={1} color="#c5c5c5" style={{ width: 80 }} />
            <br />
            <div className="custom-spacer"></div>
            <TextBlock rows={2} color="#c5c5c5" />
            <br />
            <div className="user-card__profile-stats-wrapper">
              <div>
                <TextBlock rows={2} color="#c5c5c5" />
                <TextBlock rows={2} color="#c5c5c5" />
              </div>
              <div>
                <TextBlock rows={2} color="#c5c5c5" />
                <TextBlock rows={2} color="#c5c5c5" />
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default UserCardPlaceholder;
