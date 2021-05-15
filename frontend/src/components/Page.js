import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import SidebarNav from './SidebarNav';

const Page = ({ children, header = true, sidebarNav = true, singleContent = false }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isSidebarNav, setIsSidebarNav] = useState(false);
  const [isResponsiveSidebarNav, setIsResponsiveSidebarNav] = useState(true);

  const toggleSidebarNav = () => setIsSidebarNav(!isSidebarNav);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', (e) => {
      setIsSidebarNav(false);
      if (e.target.outerWidth < 660) return setIsResponsiveSidebarNav(true);
      setIsResponsiveSidebarNav(false);
    });

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <>
      {isAuthenticated && header && (
        <Header isSidebarNav={isSidebarNav} toggleSidebarNav={toggleSidebarNav} />
      )}
      <div className="container">
        {sidebarNav && (
          <SidebarNav isSidebarNav={isSidebarNav} isResponsiveSidebarNav={isResponsiveSidebarNav} />
        )}
        <div
          className={`contentArea ${!sidebarNav ? 'contentArea--fullWidth' : ''} ${
            singleContent ? 'contentArea--singleContent' : ''
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Page;
