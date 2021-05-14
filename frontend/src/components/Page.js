import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import SidebarNav from './SidebarNav';

const Page = ({ children, isHeader = true, isSidebarNav = true }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthenticated && isHeader && <Header />}
      <div className="container">
        {isSidebarNav && <SidebarNav />}
        <div className="content-area">{children}</div>
      </div>
    </>
  );
};

export default Page;
