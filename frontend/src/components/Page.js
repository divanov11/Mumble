import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import SidebarNav from './SidebarNav';

const Page = ({ children, header = true, sidebarNav = true }) => {
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

    return () => window.removeEventListener(resizeListener);
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
        <div className="content-area">{children}</div>
      </div>
    </>
  );
};

export default Page;
