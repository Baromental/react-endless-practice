import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
