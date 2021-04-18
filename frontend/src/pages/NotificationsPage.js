import React from 'react';
import '../styles/components/NotificationPage.css';

import { Card } from '../common';
import { DiscussionsCard, Notification } from '../components';
import { discussions, notifications } from '../data';

function NotificationsPage() {
  return (
    <div className="container two-column-layout">
      <section>
        <Card>
          <div className="notification">
            <h5>All Notifications</h5>
          </div>
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </Card>
      </section>

      <section className="two-column-layout__right-column">
        <DiscussionsCard discussions={discussions} />
      </section>
    </div>
  );
}

export default NotificationsPage;
