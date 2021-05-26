import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import '../styles/components/SidebarNav.css';

const menu = [
  { title: 'Home', icon: 'home', path: '/' },
  { title: 'Inbox', icon: 'inbox', path: '/inbox', disabled: true },
  { title: 'Contributors', icon: 'users', path: '/search' },
  { title: 'Articles', icon: 'file', path: '/articles' },
  { title: 'Topics', icon: 'tags', path: '/topics', disabled: true },
  { title: 'Settings', icon: 'tools', path: '/settings' },
];

const SidebarNav = ({ isSidebarNav, isResponsiveSidebarNav }) => (
  <div
    className={`sidebarNav
    ${isSidebarNav && isResponsiveSidebarNav ? 'sidebarNav--full' : ''}`}
  >
    <ul className="sidebarNav__menu">
      {menu.map((item, index) => (
        <li
          key={index}
          className={classNames('sidebarNav__menuItem', {
            'sidebarNav__menuItem--disabled': item.disabled,
          })}
        >
          <NavLink to={item.path} exact>
            <i className={`fas fa-${item.icon}`}></i>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarNav;
