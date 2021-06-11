import React, { useEffect } from 'react';
import '../styles/components/NotificationPage.css';

import { Card } from '../common';
import { Notification, Page } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../actions/notificationsActions';

function NotificationsPage() {
  const { notifications } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <Page singleContent={true}>
      <section>
        <Card>
          <div className="notification">
            <h5>All Notifications</h5>
          </div>
          {notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
          {notifications.length === 0 && (
            <div>You have no notifications! Start following some Mumblers</div>
          )}
        </Card>
      </section>
    </Page>
  );
}

export default NotificationsPage;
