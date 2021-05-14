import { NavLink } from 'react-router-dom';

import '../styles/components/SidebarNav.css';

const menu = [
  { title: 'Home', icon: 'home', path: '/' },
  { title: 'Inbox', icon: 'inbox', path: '/inbox' },
  { title: 'Contributors', icon: 'users', path: '/contributors' },
  { title: 'Articles', icon: 'file', path: '/articles' },
  { title: 'Discussions', icon: 'book-reader', path: '/discussions' },
  { title: 'Topics', icon: 'tags', path: '/topics' },
  { title: 'Settings', icon: 'tools', path: '/settings' },
];

const SidebarNav = () => {
  return (
    <div className="sidebarNav">
      <ul className="sidebarNav__menu">
        {menu.map((item, index) => (
          <li key={index} className="sidebarNav__menuItem">
            <NavLink to={item.path}>
              <i className={`fas fa-${item.icon}`}></i>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;

/*
- Home,
- Articles
- Discussions
- Topics
- Contributors
- Settings
*/
