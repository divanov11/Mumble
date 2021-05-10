import React, { useEffect } from 'react';
import '../styles/components/NotificationPage.css';

import { Card } from '../common';
import { DiscussionsCard, Notification } from '../components';
import { discussions } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../actions/notificationsActions';

function NotificationsPage() {
  const { notifications } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

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
