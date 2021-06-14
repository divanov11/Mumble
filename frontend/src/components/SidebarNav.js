import { NavLink } from 'react-router-dom';
import '../styles/components/SidebarNav.css';
import { useEffect } from 'react';
import { MessageService } from '../services';
import { useState } from 'react';

const SidebarNav = ({ isSidebarNav, isResponsiveSidebarNav }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    MessageService.getUnreadMessagesCount().then(({ count }) => setCount(count));
  }, []);

  return (
    <div
      className={`sidebarNav
    ${isSidebarNav && isResponsiveSidebarNav ? 'sidebarNav--full' : ''}`}
    >
      <ul className="sidebarNav__menu">
        <li className="sidebarNav__menuItem">
          <NavLink to="/" exact>
            <i className="fas fa-home"></i>
            Home
          </NavLink>
        </li>

        <li className="sidebarNav__menuItem">
          <NavLink to="/inbox" exact>
            <i style={{ position: 'relative' }} className="fas fa-inbox">
              {count > 0 && <div className="nav-icon--unread"></div>}
            </i>
            Inbox
          </NavLink>
        </li>

        <li className="sidebarNav__menuItem">
          <NavLink to="/search" exact>
            <i className="fas fa-users"></i>
            Contributors
          </NavLink>
        </li>

        <li className="sidebarNav__menuItem">
          <NavLink to="/settings" exact>
            <i className="fas fa-tools"></i>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNav;
