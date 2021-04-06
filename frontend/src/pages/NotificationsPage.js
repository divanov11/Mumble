import React from 'react';
import '../styles/components/Profile.css';
import '../styles/components/Notification.css';

//Components
import Card from '../common/Card';
import DiscussionsCard from '../components/DiscussionsCard';

//Dummy Data Files
import notifications from '../data/notifications';
import discussions from '../data/discussions';
import Notification from '../components/Notification';

function Notifications() {
  return (
    <div className="container notification--layout">
      <section id="center-content">
        <Card>
          <div className="notification">
            <h5>All Notifications</h5>
          </div>
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </Card>
      </section>

      <section id="sidebar--right--profile">
        <DiscussionsCard discussions={discussions} />
      </section>
    </div>
  );
}

export default Notifications;
