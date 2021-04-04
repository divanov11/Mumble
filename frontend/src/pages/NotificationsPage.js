import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Profile.css';
import '../styles/components/Notification.css';

//Components
import Card from '../common/Card';
import DiscussionsCard from '../components/DiscussionsCard';

//Dummy Data Files
import userData from '../data/users';
import notifications from '../data/notifications';
import discussions from '../data/discussions';
import Avatar from '../common/Avatar';

import { distanceDate } from '../utilities/formatDate';

function Notifications({ match }) {
  let user = userData.find((u) => Number(u.id) === 1);
  console.log('user', user);

  return (
    <div className="container discussion--layout">
      <section id="center-content">
        <Card>
          <div className="notification">
            <h5>All Notifications</h5>
            <div className="notification--item--right">
              <Link>5 Unread</Link>
            </div>
          </div>
          {notifications.map((notification) => (
            <div key={notification.id} className="notification--item">
              <Avatar
                src={notification.user.profile_pic}
                name={notification.user.name}
                handle={notification.user.username}
                url={`/profile/${notification.user.username}`}
                size="sm"
              />
              <div className="notification--item--right">
                <strong>{notification.user.name} </strong>
                <Link>{notification.content}</Link>
                <p>{notification.description}</p>
                <p className="notification--meta">
                  {distanceDate(notification.created)}
                </p>
              </div>
            </div>
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
