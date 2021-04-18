import React from 'react';
import '../styles/components/Notification.css';

import { Card } from '../common';
import { DiscussionsCard, Notification } from '../components';
import { discussions, notifications } from '../data';

function NotificationsPage() {
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

export default NotificationsPage;
